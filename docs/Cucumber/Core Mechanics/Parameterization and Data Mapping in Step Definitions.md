---
sidebar_position: 5
title: Parameterization and Data Mapping in Step Definitions
---

# Parameterization and Data Mapping in Step Definitions

**Parameterization** allows Cucumber steps to accept **dynamic data** instead of hardcoded values. This makes scenarios more reusable, flexible, and easier to maintain.

---

## Why Parameterization Matters

Without parameterization:

- Steps become duplicated
- Scenarios become rigid
- Framework maintenance increases

With parameterization:

- One step supports many scenarios
- Tests remain readable
- Maintenance effort decreases

Rule:

> Prefer parameterized steps over hardcoded values.

---

## Single Parameter Mapping

### Feature Step

```gherkin
When user logs in with "user1"
```

### Step Definition

```java
@When("user logs in with {string}")
public void login(String username) {

    System.out.println("Logging in with " + username);

}
```

`{string}` captures values wrapped in quotes.

---

## Multiple Parameter Mapping

### Feature Step

```gherkin
When user logs in with "user1" and "pass1"
```

### Step Definition

```java
@When("user logs in with {string} and {string}")
public void login(String username, String password) {

    System.out.println("Username: " + username);
    System.out.println("Password: " + password);

}
```

Keep parameter order consistent with the sentence.

---

## Numeric and Boolean Parameters

Supported placeholders:

- `{int}`
- `{float}`
- `{double}`
- `{boolean}`

Example:

### Feature Step

```gherkin
Then retry count should be 3
```

### Step Definition

```java
@Then("retry count should be {int}")
public void retryCount(int count) {

    System.out.println("Retry count: " + count);

}
```

Cucumber automatically converts parameter types.

---

## Data Tables

Data tables allow structured data to be passed to step definitions.

### Feature Step

```gherkin
Given user provides the following details
  | field    | value   |
  | username | user1   |
  | password | pass123 |
```

### Step Definition

```java
import io.cucumber.datatable.DataTable;

@Given("user provides the following details")
public void user_details(DataTable dataTable){

    List<Map<String,String>> rows = dataTable.asMaps(String.class, String.class);

    for(Map<String,String> row : rows){

        String field = row.get("field");
        String value = row.get("value");

        System.out.println(field + ":" + value);

    }

}
```

---

## Scenario Outline vs Parameterized Steps

Scenario Outline executes the same scenario with multiple data sets.

### Example

```gherkin
Scenario Outline: Login validation
  Given I am on login page
  When I enter "<username>" and "<password>"
  Then I should see "<result>"

Examples:
 | username | password | result |
 | admin | password123 | dashboard |
 | guest | wrongpass | error |
```

Parameterized steps capture the values passed by the scenario.

---

## Handling JSON Inputs

### Feature Step

```gherkin
Given the API request body is:
"""
{
 "username":"admin",
 "password":"password123"
}
"""
```

### Step Definition

```java
@Given("the API request body is:")
public void api_request_body(String jsonBody){

    System.out.println(jsonBody);

}
```

Large payloads should be stored in **external files**.

---

## Best Practices

- Prefer parameterization instead of hardcoding
- Keep steps readable
- Avoid too many parameters in a step
- Align parameters with sentence order
- Validate input values

---

## Common Mistakes

Avoid:

- Hardcoded step values
- Too many parameters
- Overly complex regex
- Using data tables for simple values

---

## Real Example

### Feature File

```gherkin
Scenario Outline: Add products to cart
  Given I am on product page
  When I add <quantity> of "<product>" to cart
  Then cart should contain <total> items

Examples:
 | product | quantity | total |
 | Headphones | 2 | 2 |
 | Speaker | 1 | 3 |
```

### Step Definitions

```java
@When("I add {int} of {string} to cart")
public void addProduct(int quantity,String product){

    System.out.println("Adding "+quantity+" "+product);

}

@Then("cart should contain {int} items")
public void verifyCart(int total){

    System.out.println("Cart items:"+total);

}
```

---

## Interview Questions

**Why use parameterization in Cucumber?**

To allow steps to accept dynamic input values and improve reuse.

---

**Difference between Scenario Outline and parameterized steps?**

Scenario Outline runs a scenario multiple times with different data sets, while parameterized steps capture dynamic values.

---

## Key Takeaways

- Parameterization improves flexibility
- Use `{string}`, `{int}`, `{boolean}` placeholders
- Use data tables for structured input
- Scenario Outline supports multiple data sets
- Avoid hardcoded values
