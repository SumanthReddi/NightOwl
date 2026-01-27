---
sidebar_position: 4
---

# Test Suite and Test Case Structure

Understanding how Robot Framework organizes **test suites and test cases**
is essential for writing clean and maintainable automation.

Robot Framework uses **plain text `.robot` files** with a strict but readable structure.

---

## What Is a Test Suite?

A **test suite** is a collection of test cases.

- A single `.robot` file is a test suite
- A folder containing `.robot` files is also a suite
- Folder suites can contain child suites

Suites help organize tests by:
- Feature
- Module
- Application area

---

## What Is a Test Case?

A **test case** represents one test scenario.

- Defined inside the `*** Test Cases ***` section
- Written using keywords
- Focuses on **what to test**, not how

---

## Structure of a `.robot` File

A typical `.robot` file contains the following sections:

```
*** Settings ***
*** Variables ***
*** Test Cases ***
*** Keywords ***
```

Only `*** Test Cases ***` is mandatory.

---

## Example Test Suite

```robot
*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Valid Login
    Open Browser    https://example.com    chrome
    Input Text     username    admin
    Input Text     password    secret
    Click Button   login
```

---

## Test Case Naming Conventions

Good practices:
- Use descriptive names
- Reflect business intent
- Avoid technical terms

❌ Bad: `TC_001_Login`
✅ Good: `User logs in with valid credentials`

---

## Execution Order

- Test cases execute **top to bottom**
- Order matters unless parallel execution is enabled
- Failures in one test do not stop others (by default)

---

## Suite-Level Settings

At suite level, you can define:
- Suite Setup
- Suite Teardown
- Default tags
- Libraries and resources

These apply to all test cases in the suite.

---

## Common Mistakes ❌

- Writing logic directly in test cases
- Using test cases as scripts
- Hardcoding data
- Poor naming conventions

---

## Best Practices ✅

- Keep test cases short
- Use keywords for logic
- Organize suites by feature
- Maintain readability

---

## Key Takeaways

- `.robot` files define test suites
- Test cases describe behavior
- Structure enforces clarity
- Proper organization improves scalability
