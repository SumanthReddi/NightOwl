---
sidebar_position: 3
title: Gherkin Language Basics
---

# Gherkin Language Basics

**Gherkin** is a **domain-specific language** used by Cucumber to describe application behavior in a **human-readable format**. It allows teams to write scenarios that are understandable by **business stakeholders, testers, and developers alike**.

Gherkin serves as the foundation of Behavior-Driven Development (BDD), enabling collaboration through clear, structured, and executable specifications.

---

## What is Gherkin?

Gherkin is:
- A **plain-text language** designed for simplicity.
- Built around **keywords** like `Given`, `When`, and `Then`.
- Focused on **behavior**, not implementation details.

Key Rule:

> If a business user cannot understand it, it is not good Gherkin.

---

## Structure of a Gherkin Feature File

A Gherkin feature file follows a simple structure:

```gherkin
Feature: Feature name
  Description of the feature (optional)

  Scenario: Scenario name
    Given some precondition
    When some action is performed
    Then some result is expected
```

### Example:

```gherkin
Feature: Login functionality
  As a user, I want to log in so that I can access my dashboard.

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter "admin" as username and "password123" as password
    Then I should see the dashboard
```

---

## Gherkin Keywords Explained

### Feature
Represents a **high-level functionality** or module.

```gherkin
Feature: User Login
  Users should be able to log in with valid credentials.
```

---

### Scenario
Represents a **single behavior** or test case.

```gherkin
Scenario: Valid user login
```

---

### Given
Describes **preconditions**.

```gherkin
Given I am on the login page
```

---

### When
Describes the **action**.

```gherkin
When I enter "admin" as username and "password123" as password
```

---

### Then
Describes the **expected result**.

```gherkin
Then I should see the dashboard
```

---

### And / But

Improves readability.

```gherkin
Given I am on the login page
And I have a valid account
When I enter "admin" as username
And I enter "password123" as password
Then I should see the dashboard
But I should not see an error message
```

---

## Gherkin Best Practices

1. Use **business language**
2. Keep steps **short and clear**
3. **One behavior per scenario**
4. Avoid **implementation details**
5. Write **clear feature descriptions**

---

## What NOT to Write in Gherkin

Avoid:

```gherkin
When I click element with XPath "//button[@id='submit']"
```

Avoid:

```gherkin
When I click the button with class "btn-primary"
```

Prefer:

```gherkin
When I click the login button
```

---

## Common Beginner Mistakes

### Too Many Validations

Bad:

```gherkin
Then I should see the dashboard
And I should see the welcome message
And I should see the logout button
```

Good:

```gherkin
Then I should see the dashboard
```

---

### Technical Language

Bad:

```gherkin
When I click the button with class "btn-primary"
```

Good:

```gherkin
When I click the login button
```

---

## Real Example

```gherkin
Feature: User Login
  As a user, I want to log in so that I can access my account.

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter "customer@example.com" as email and "password123" as password
    Then I should see the account dashboard

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter "wrong@example.com" as email and "wrongpassword" as password
    Then I should see an error message "Invalid credentials"
```

---

## How to Validate Gherkin

1. Review with stakeholders  
2. Run **dryRun = true**  
3. Generate reports  

---

## Interview Questions

**What is Gherkin?**

A plain‑text language used in Cucumber to describe behavior.

**Purpose of Given‑When‑Then?**

Given → Preconditions  
When → Action  
Then → Expected result

---

## Key Takeaways

- Gherkin describes **behavior**
- Uses **Given / When / Then**
- Must be readable by **non‑technical users**
- Avoid **technical details**