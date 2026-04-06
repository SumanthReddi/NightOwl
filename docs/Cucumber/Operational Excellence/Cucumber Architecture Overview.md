---
sidebar_position: 4
title: Cucumber Architecture Overview
---

# Cucumber Architecture Overview

Understanding Cucumber architecture is important before building automation frameworks. A well‑designed architecture improves maintainability, scalability, and debugging.

This section explains how **different components of Cucumber interact during execution**.

---

## High Level Architecture

Typical Cucumber architecture:

```
Feature Files (Gherkin)
        ↓
Step Definitions
        ↓
Automation Layer (UI / API / DB)
        ↓
Execution Engine
        ↓
Reports
```

Each layer has a specific responsibility.

---

## Feature Files

Feature files:

- written using Gherkin language
- stored with `.feature` extension
- describe application behavior

Example:

```gherkin
Feature: Login functionality

Scenario: Successful login
 Given I am on the login page
 When I enter valid credentials
 Then I should see the dashboard
```

Feature files should describe **behavior**, not technical implementation.

Avoid:

- XPath
- CSS locators
- API endpoints

---

## Step Definitions

Step definitions connect feature steps to executable code.

Responsibilities:

- translate Gherkin steps
- call automation logic
- perform assertions

Example:

```java
@Given("I am on the login page")
public void openLoginPage(){
 loginPage.navigateToLoginPage();
}

@When("I enter valid credentials")
public void enterCredentials(){
 loginPage.enterUsername("admin");
 loginPage.enterPassword("password123");
 loginPage.clickLogin();
}
```

Best practice: keep step definitions **thin**.

---

## Automation Layer

Actual automation logic lives here.

Common tools:

| Testing Type | Tool |
|--------------|------|
| UI Testing | Selenium |
| API Testing | RestAssured |
| Database Testing | JDBC |

Example Page Object:

```java
public class LoginPage {

 private WebDriver driver;

 private By username = By.id("username");
 private By password = By.id("password");
 private By loginButton = By.id("loginBtn");

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

Automation logic should not be placed inside step definitions.

---

## Runner Class

Runner class starts Cucumber execution.

Example:

```java
@RunWith(Cucumber.class)
@CucumberOptions(
 features = "src/test/resources/features",
 glue = {"steps","hooks"},
 tags = "@smoke",
 plugin = {"pretty","html:target/report.html"}
)
public class SmokeRunner {
}
```

Runner controls:

- feature locations
- step packages
- tags
- reporting plugins

---

## Hooks

Hooks manage setup and teardown logic.

Example:

```java
@Before
public void setup(){
 driver = new ChromeDriver();
}

@After
public void teardown(){
 driver.quit();
}
```

Hooks are used for:

- driver setup
- environment configuration
- screenshots on failure

Hooks should not contain test logic.

---

## Reporting Plugins

Plugins generate reports.

Example:

```java
plugin = {"pretty","html:target/report.html","json:target/report.json"}
```

Reports help teams understand:

- passed scenarios
- failed scenarios
- execution time

---

## Execution Flow

```
Runner starts
      ↓
Feature files parsed
      ↓
Scenario detected
      ↓
Step definitions matched
      ↓
Automation logic executed
      ↓
Hooks executed
      ↓
Reports generated
```

Understanding this flow helps with debugging.

---

## Integration with Test Frameworks

Cucumber integrates with:

- TestNG
- JUnit

These frameworks manage:

- test lifecycle
- parallel execution
- assertions

---

## Common Architecture Mistakes

Avoid:

- putting automation logic in feature files
- writing large step definitions
- mixing hooks with test logic
- poor package organization

---

## Recommended Package Structure

```
src/test/java
 ├── runners
 ├── hooks
 ├── steps
 ├── pages
 ├── api
 ├── utils
```

Example:

```
runners/TestRunner.java
hooks/Hooks.java
pages/LoginPage.java
steps/LoginSteps.java
utils/DriverManager.java
```

---

## Interview Questions

**What are the core components of Cucumber?**

Feature files, step definitions, runner classes, hooks, automation code, and reporting plugins.

---

**Does Cucumber perform automation itself?**

No. Cucumber defines behavior while tools like Selenium perform automation.

---

**What is the role of the runner class?**

The runner class configures and triggers test execution.

---

## Key Takeaways

- Cucumber uses layered architecture
- Feature files define behavior
- Step definitions connect behavior to code
- Automation tools perform testing
- Runner class controls execution
- Hooks manage setup and teardown