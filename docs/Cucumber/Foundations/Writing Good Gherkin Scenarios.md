---
sidebar_position: 4
title: Writing Good Gherkin Scenarios
---

# Writing Good Gherkin Scenarios

Writing good Gherkin scenarios is both an art and a science. While the syntax of Gherkin is simple, crafting scenarios that are **clear, concise, and maintainable** requires careful thought and collaboration.

This guide explains how to write **high‑quality Gherkin scenarios** that align with business requirements, avoid common pitfalls, and remain robust over time.

---

## Why Writing Good Scenarios Matters

Poorly written Gherkin scenarios can lead to:

- Misunderstandings between teams  
- Brittle tests that break with minor changes  
- High maintenance costs due to duplicated or overly complex steps  

Well‑written scenarios:

- Serve as **living documentation**
- Ensure alignment between business expectations and technical implementation
- Reduce maintenance effort and improve reliability

---

## Characteristics of Good Gherkin Scenarios

Good Gherkin scenarios are:

### Readable
- Understandable by non‑technical stakeholders
- Avoid technical jargon and implementation details

### Focused
- Test **one behavior per scenario**
- Avoid multiple validations in a single scenario

### Reusable
- Use generic steps that can be reused across scenarios
- Avoid unnecessary hardcoding

### Maintainable
- Minimize duplication
- Keep scenarios short and modular

### Executable
- Every step should map to a clear automation step

---

## Best Practices

### 1. Start with a Clear Feature Description

```gherkin
Feature: User Login
  As a user, I want to log in so that I can access my account.
```

---

### 2. Write Descriptive Scenario Titles

```gherkin
Scenario: Successful login with valid credentials
```

Avoid titles like:

```
Scenario: Test login
Scenario: Scenario 1
```

---

### 3. Use Given‑When‑Then Properly

```gherkin
Scenario: Successful login
  Given I am on the login page
  When I enter "admin" as username
  And I enter "password123" as password
  Then I should see the dashboard
```

Guideline:

- **Given** → Preconditions  
- **When** → Action  
- **Then** → Expected result  

---

### 4. Keep Steps Short

Bad example:

```gherkin
When I enter "admin" as username, "password123" as password and click login
```

Good example:

```gherkin
When I enter "admin" as username
And I enter "password123" as password
And I click the login button
```

---

### 5. Avoid Hardcoded Values

Bad:

```gherkin
When I enter "admin" as username
```

Better:

```gherkin
When I enter "<username>" as username
```

---

### 6. Use Scenario Outline for Multiple Inputs

```gherkin
Scenario Outline: Login with different credentials
  Given I am on the login page
  When I enter "<username>" as username
  And I enter "<password>" as password
  Then I should see "<result>"

Examples:
  | username | password    | result           |
  | admin    | password123 | the dashboard    |
  | guest    | wrongpass   | an error message |
```

---

### 7. Avoid Implementation Details

Bad:

```gherkin
When I click element with XPath "//button[@id='login']"
```

Good:

```gherkin
When I click the login button
```

Focus on **behavior**, not implementation.

---

### 8. Keep Scenarios Independent

Bad:

```gherkin
Scenario: Login
  Given I am on the login page
  When I login
  Then I see dashboard

Scenario: Logout
  When I click logout
  Then I see login page
```

Good:

```gherkin
Scenario: Successful logout
  Given I am logged in
  When I click logout
  Then I should see the login page
```

---

## Common Pitfalls

Avoid:

- Overly technical language
- Long scenarios with many steps
- Duplicated steps
- Testing multiple behaviors in one scenario
- Hardcoded data

---

## Real‑World Example

```gherkin
Feature: Checkout Process
  As a customer, I want to complete my purchase so that I receive my order.

  Scenario: Successful checkout
    Given I have items in my cart
    And I am on the checkout page
    When I enter valid payment details
    And I click "Place Order"
    Then I should see the order confirmation page

  Scenario Outline: Checkout with invalid card
    Given I have items in my cart
    When I enter "<cardNumber>" as credit card number
    Then I should see "<errorMessage>"

  Examples:
    | cardNumber       | errorMessage            |
    | 1234567890123456 | Invalid card number     |
    |                  | Card number is required |
```

---

## Reviewing Scenarios

Good teams review scenarios regularly.

Methods include:

1. Peer reviews
2. Three‑Amigos meetings
3. Dry runs using:

```
@CucumberOptions(dryRun = true)
```

4. Refactoring duplicate steps

---

## Interview Questions

**What makes a good Gherkin scenario?**

A good scenario is readable, focused, reusable, and avoids implementation details.

**Should Gherkin include XPath or CSS selectors?**

No. Gherkin should describe **behavior**, not technical implementation.

---

## Key Takeaways

- Write **clear and focused scenarios**
- Avoid technical implementation details
- Use **Scenario Outline** for parameterization
- Keep scenarios independent
- Collaborate with business stakeholders