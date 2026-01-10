---
sidebar_position: 5
---

# Keywords Concept

Keywords are the **core building blocks** of Robot Framework.
They enable the keyword-driven testing approach that makes Robot Framework
readable, reusable, and scalable.

---

## What Is a Keyword?

A **keyword** represents a single action or logical operation.

Examples:
- Open Browser
- Click Button
- Validate Response Status
- Login To Application

Keywords allow test cases to read like **plain English steps**.

---

## Types of Keywords

Robot Framework supports multiple types of keywords.

### 1. Built-in Keywords
Provided by Robot Framework itself.

Examples:
- Log
- Set Variable
- Run Keyword If
- Should Be Equal

---

### 2. Library Keywords
Provided by external libraries.

Examples:
- SeleniumLibrary → Click Element
- RequestsLibrary → POST On Session
- DatabaseLibrary → Query

---

### 3. User-Defined Keywords
Created by users to encapsulate logic.

Defined under:
```
*** Keywords ***
```

Used to:
- Reduce duplication
- Improve readability
- Centralize logic

---

## Example: User-Defined Keyword

```robot
*** Keywords ***
Login To Application
    Open Browser    https://example.com    chrome
    Input Text     username    admin
    Input Text     password    secret
    Click Button   login
```

Used in test cases:

```robot
*** Test Cases ***
Valid Login
    Login To Application
```

---

## Keyword-Driven Testing Philosophy

- Test cases describe **what** happens
- Keywords define **how** it happens
- Libraries perform the actual automation

This separation improves maintainability.

---

## When to Create a Keyword

Create a keyword when:
- Logic is reused
- Steps become lengthy
- Business intent needs clarity

Avoid creating keywords for:
- Single-use trivial steps
- Over-fragmentation

---

## Keyword Naming Best Practices

- Use meaningful names
- Use spaces (Robot style)
- Reflect business intent

❌ Bad: `KW_01_Login`
✅ Good: `Login To Application`

---

## Common Mistakes ❌

- Writing everything directly in test cases
- Creating too many tiny keywords
- Mixing validation and action logic carelessly

---

## Best Practices ✅

- One keyword = one responsibility
- Keep keywords readable
- Reuse across suites
- Store reusable keywords in resource files

---

## Key Takeaways

- Keywords drive Robot Framework
- Three types: built-in, library, user-defined
- User-defined keywords improve reuse
- Clean keyword design is essential

---

## What’s Next?

👉 **Variables in Robot Framework**
