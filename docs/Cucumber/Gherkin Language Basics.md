---
sidebar_position: 4
---

# Gherkin Language Basics

Gherkin is a **domain-specific language** used by Cucumber to describe application behavior in a **human-readable format**.
It allows scenarios to be understood by **business, testers, and developers**.

---

## What is Gherkin?

Gherkin is:
- Plain text language
- Uses simple keywords
- Focused on behavior, not implementation

Rule:
> If a business user cannot understand it, it is not good Gherkin.

---

## Structure of a Gherkin Feature File

Basic structure:

```
Feature: Feature name
  Description of feature

  Scenario: Scenario name
    Given some precondition
    When some action is performed
    Then some result is expected
```

---

## Gherkin Keywords Explained

### Feature
- Represents a high-level functionality
- Usually maps to a **user story or module**

Example:
```
Feature: User Login
```

---

### Scenario
- Represents a **single behavior**
- One scenario = one test case

Example:
```
Scenario: Valid user login
```

---

### Given
- Describes **preconditions**
- Sets up system state

Example:
```
Given user is on login page
```

---

### When
- Describes **user action**
- Triggers behavior

Example:
```
When user enters valid credentials
```

---

### Then
- Describes **expected outcome**
- Verifies behavior

Example:
```
Then user should be logged in successfully
```

---

### And / But
- Used to improve readability
- Avoid repeating Given/When/Then

Example:
```
Given user is on login page
And user has a valid account
```

---

## Gherkin Best Practices

- Use business language
- Avoid UI technical terms
- Keep steps short and clear
- One behavior per scenario

---

## What NOT to Write in Gherkin ❌

- Selenium keywords
- Technical implementation details
- Assertions or code logic
- XPath or CSS selectors

---

## Common Beginner Mistakes ❌

- Writing multiple validations in one scenario
- Mixing technical and business language
- Very long scenarios
- Duplicated steps

---

## Interview-Ready Questions

**Q: What is Gherkin?**  
A: A language used to write behavior in plain English for Cucumber.

**Q: Purpose of Given-When-Then?**  
A: To structure scenarios clearly into setup, action, and validation.

---

## Key Takeaways

- Gherkin describes behavior
- Readable by non-technical users
- Given-When-Then defines flow
- Simplicity is key
- Avoid technical noise

---

## What’s Next?

👉 **Writing Good Gherkin Scenarios**
