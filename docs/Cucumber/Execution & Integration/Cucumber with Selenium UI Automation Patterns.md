---
sidebar_position: 3
title: Cucumber with Selenium UI Automation Pattern
---

# Cucumber with Selenium UI Automation Pattern

When using Cucumber for UI automation, structuring Selenium code correctly is essential. Following clean architecture patterns ensures that automation frameworks remain **scalable, maintainable, and readable**.

---

## Core Principle

```
Feature Files describe behavior
Step Definitions orchestrate actions
Page Objects perform UI interactions
```

Each layer must have a clear responsibility.

---

## Recommended Layered Architecture

```
Feature Files
      ↓
Step Definitions
      ↓
Page Objects
      ↓
Selenium WebDriver
```

Benefits:

- Clear separation of responsibilities
- Reusable UI logic
- Easier maintenance

---

## Feature Files

Feature files describe application behavior in plain language.

Example:

```gherkin
Feature: Login functionality

Scenario: Successful login
 Given I am on the login page
 When I enter valid credentials
 Then I should see the dashboard
```

Feature files should avoid:

- XPath
- CSS selectors
- UI implementation details

Focus on **behavior, not implementation**.

---

## Step Definitions

Step definitions translate Gherkin steps into executable actions.

They should:

- Call Page Object methods
- Avoid direct Selenium interactions
- Contain minimal logic

Example:

```java
public class LoginSteps {

 private LoginPage loginPage;
 private DashboardPage dashboardPage;

 public LoginSteps(LoginPage loginPage,DashboardPage dashboardPage){
     this.loginPage = loginPage;
     this.dashboardPage = dashboardPage;
 }

 @Given("I am on the login page")
 public void openLoginPage(){
     loginPage.open();
 }

 @When("I enter valid credentials")
 public void enterCredentials(){
     loginPage.enterUsername("admin");
     loginPage.enterPassword("password123");
     loginPage.clickLogin();
 }

 @Then("I should see the dashboard")
 public void verifyDashboard(){
     dashboardPage.verifyDashboardDisplayed();
 }

}
```

Avoid embedding Selenium logic directly inside steps.

---

## Page Objects

Page Objects contain all Selenium interactions.

Responsibilities:

- Store locators
- Perform UI actions
- Hide implementation details

Example:

```java
public class LoginPage {

 private WebDriver driver;

 private By username = By.id("username");
 private By password = By.id("password");
 private By loginButton = By.id("loginBtn");

 public LoginPage(WebDriver driver){
     this.driver = driver;
 }

 public void open(){
     driver.get("https://example.com/login");
 }

 public void enterUsername(String user){
     driver.findElement(username).sendKeys(user);
 }

 public void enterPassword(String pass){
     driver.findElement(password).sendKeys(pass);
 }

 public void clickLogin(){
     driver.findElement(loginButton).click();
 }

}
```

Page Objects make locator maintenance easier.

---

## Assertions Placement

Best practice:

- Assertions should appear in step definitions
- Page objects should perform actions only

Example:

```java
@Then("I should see the dashboard")
public void verifyDashboard(){

 Assert.assertTrue(dashboardPage.isDisplayed());

}
```

---

## Driver Management

Driver lifecycle should be handled in **Hooks**.

Example:

```java
public class Hooks {

 private WebDriver driver;

 @Before
 public void setup(){

     driver = new ChromeDriver();
     DriverManager.setDriver(driver);

 }

 @After
 public void teardown(){

     DriverManager.closeDriver();

 }

}
```

Each scenario should have its own driver instance.

---

## Thread Safe WebDriver

Parallel execution requires thread-safe drivers.

Example:

```java
public class DriverManager {

 private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

 public static WebDriver getDriver(){
     return driver.get();
 }

 public static void setDriver(WebDriver webDriver){
     driver.set(webDriver);
 }

 public static void closeDriver(){

     if(driver.get()!=null){
         driver.get().quit();
         driver.remove();
     }

 }

}
```

ThreadLocal ensures isolation across threads.

---

## Synchronization Best Practices

Avoid:

```
Thread.sleep()
```

Prefer explicit waits:

```java
WebDriverWait wait = new WebDriverWait(driver,10);
wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
```

Explicit waits reduce flaky tests.

---

## Common Anti Patterns

Avoid:

- Selenium calls inside step definitions
- Duplicate locators across steps
- Very large step methods
- UI details inside feature files

Follow layered architecture strictly.

---

## Recommended Folder Structure

```
src/test/java
 ├── runners
 ├── hooks
 ├── steps
 ├── pages
 ├── utils
```

Example:

```
runners/TestNGRunner.java
hooks/Hooks.java
pages/LoginPage.java
steps/LoginSteps.java
utils/DriverManager.java
```

---

## Interview Questions

**Where should Selenium code exist in a Cucumber framework?**

Inside Page Objects.

---

**Why avoid Selenium in step definitions?**

To improve maintainability and reuse.

---

**How is WebDriver managed in parallel execution?**

Using ThreadLocal WebDriver instances.

---

## Key Takeaways

- Use layered architecture
- Page Objects contain UI logic
- Step definitions orchestrate actions
- Hooks manage driver lifecycle
- ThreadLocal enables parallel safety
