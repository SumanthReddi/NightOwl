---
sidebar_position: 1
title: Step Definition Basics
---

# Step Definition Basics

**Step definitions** map **Gherkin steps to executable automation code**. They act as the bridge between readable `.feature` files and the actual test implementation.

Understanding step definitions is essential for building **clean, maintainable, and scalable Cucumber automation frameworks**.

---

## What is a Step Definition?

A step definition:

- Connects a Gherkin step to executable code
- Is usually written in Java (but Cucumber also supports JS, Python, etc.)
- Executes automation actions such as UI interaction, API calls, or validations

Example:

### Gherkin Step

```gherkin
Given user is logged in
```

### Step Definition

```java
@Given("user is logged in")
public void user_is_logged_in() {

    driver.get("https://example.com/login");
    driver.findElement(By.id("username")).sendKeys("admin");
    driver.findElement(By.id("password")).sendKeys("password123");
    driver.findElement(By.id("loginButton")).click();

}
```

---

## Execution Flow

Cucumber execution flow:

```
Feature File Step
      ↓
Step Definition Match
      ↓
Automation Code Executes
```

Cucumber matches steps using:

- **Cucumber Expressions**
- **Regular Expressions (Regex)**

---

## Cucumber Expressions

Cucumber Expressions are the **preferred and readable way** to pass parameters.


Example:

```java
@When("I enter {string} as username")
public void i_enter_username(String username) {

    driver.findElement(By.id("username")).sendKeys(username);

}
```

Example feature step:

```gherkin
When I enter "admin" as username
```

---

## Regular Expressions (Regex)

Regex provides more control but is harder to read.

Example:

```java
@When("^I enter "([^"]*)" as username$")
public void i_enter_username(String username) {

    driver.findElement(By.id("username")).sendKeys(username);

}
```

Rule:
> Prefer **Cucumber Expressions** unless Regex is truly required.

---

## Meaning of Given / When / Then

Although these appear in feature files, in code they are simply **annotations**.

### Given

Used for **preconditions**.

```java
@Given("I am on the login page")
public void open_login_page() {
    driver.get("https://example.com/login");
}
```

---

### When

Used for **actions**.

```java
@When("I enter {string} as username and {string} as password")
public void enter_credentials(String username, String password) {

    driver.findElement(By.id("username")).sendKeys(username);
    driver.findElement(By.id("password")).sendKeys(password);

}
```

---

### Then

Used for **validations**.

```java
@Then("I should see the dashboard")
public void verify_dashboard() {

    assertTrue(driver.getTitle().contains("Dashboard"));

}
```

---

## Reusable Step Definitions

Good step definitions should be **generic and reusable**.

Example:

```java
@When("I click the {string} button")
public void click_button(String buttonName) {

    driver.findElement(By.xpath("//button[text()='" + buttonName + "']")).click();

}
```

This allows steps like:

```gherkin
When I click the "Login" button
When I click the "Submit" button
```

---

## One Step = One Action Rule

Each step should perform **one logical action**.

### Bad Example

```java
@When("I login and navigate to dashboard")
public void login_and_navigate() {

    driver.findElement(By.id("username")).sendKeys("admin");
    driver.findElement(By.id("password")).sendKeys("password123");
    driver.findElement(By.id("loginButton")).click();
    driver.findElement(By.id("dashboard")).click();

}
```

### Good Example

```java
@When("I login")
public void login() {

    driver.findElement(By.id("username")).sendKeys("admin");
    driver.findElement(By.id("password")).sendKeys("password123");
    driver.findElement(By.id("loginButton")).click();

}

@When("I navigate to dashboard")
public void navigate_dashboard() {

    driver.findElement(By.id("dashboard")).click();

}
```

Breaking steps improves **reusability and readability**.

---

## Avoid Duplicate Steps

Example duplicate wording:

```gherkin
When I click login button
When I press login button
```

Instead map both:

```java
@When("I click login button")
@When("I press login button")
public void click_login() {

    driver.findElement(By.id("loginButton")).click();

}
```

---

## Recommended Project Structure

Organize step definitions in a dedicated package.

```
src/test/java
 ├── stepdefinitions
 │     ├── LoginSteps.java
 │     ├── CartSteps.java
 │     └── PaymentSteps.java
 │
 ├── hooks
 │     └── Hooks.java
 │
 └── runners
       └── TestRunner.java
```

This improves **framework maintainability**.

---

## Common Beginner Mistakes

Avoid:

- Writing **technical details** in feature files
- Creating **very long step definitions**
- **Duplicating similar steps**
- **Hardcoding test data**

Bad example in feature file:

```gherkin
When I click element with XPath "//button[@id='login']"
```

Prefer:

```gherkin
When I click the login button
```

---

## Real Example

### Feature File

```gherkin
Feature: User Login

Scenario: Successful login
  Given I am on the login page
  When I enter "admin" as username and "password123" as password
  And I click the login button
  Then I should see the dashboard
```

---

### Step Definitions

```java
@Given("I am on the login page")
public void open_login_page() {
    driver.get("https://example.com/login");
}

@When("I enter {string} as username and {string} as password")
public void enter_credentials(String username, String password) {

    driver.findElement(By.id("username")).sendKeys(username);
    driver.findElement(By.id("password")).sendKeys(password);

}

@When("I click the login button")
public void click_login() {
    driver.findElement(By.id("loginButton")).click();
}

@Then("I should see the dashboard")
public void verify_dashboard() {
    assertTrue(driver.getTitle().contains("Dashboard"));
}
```

---

## Interview Questions

**What is a step definition?**

A step definition maps a Gherkin step to automation code.

---

**Can step definitions contain assertions?**

Yes. They usually validate results inside **Then steps**.

---

## Key Takeaways

- Step definitions connect **Gherkin steps to automation code**
- Prefer **Cucumber Expressions** over Regex
- Follow **One Step = One Action**
- Write **reusable step definitions**
- Organize steps by **feature or domain**