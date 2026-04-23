---
sidebar_position: 5
title: Page Object Model Pattern
description: Learn how to implement the Page Object Model in Robot Framework using SeleniumLibrary for scalable, maintainable, and production-ready UI automation.
---

# Robot Framework: Page Object Model Pattern

> Good UI automation is not built by adding more test cases.  
> It is built by reducing maintenance through smart architecture.

---

## 🎯 Why This Matters

Many teams start with direct UI steps inside tests:

```robotframework
Input Text    id=username    admin
Input Text    id=password    pass123
Click Button  id=login
```

This works early.

Then growth begins:

- more pages  
- more test cases  
- UI redesigns  
- locator changes  
- more contributors

Soon problems appear:

- locators copied everywhere  
- one UI change breaks many tests  
- hard onboarding  
- unreadable tests  
- slow maintenance

> Most UI automation pain is architecture pain.

That is exactly what Page Object Model solves.

---

# 🤖 What Is Page Object Model (POM)?

A design pattern where each page or screen has:

- locators  
- page-specific actions  
- validations  
- reusable flows

Tests use business actions instead of raw UI commands.

---

## Example

## Without POM

```robotframework
Input Text    id=username    admin
Input Text    id=password    pass123
Click Button  id=login
```

## With POM

```robotframework
Login As Valid User
Dashboard Should Be Visible
```

Cleaner, reusable, maintainable.

---

# 🧱 Core POM Architecture

```text
Layer 1 → Tests (business intent)
Layer 2 → Business Keywords
Layer 3 → Page Objects
Layer 4 → Locators / Variables
```

---

# 1️⃣ Tests Should Read Like Behavior

```robotframework
*** Test Cases ***
User Successfully Logs In
    Login As Valid User
    Dashboard Should Be Visible
```

Readable by QA, developers, managers.

---

# 2️⃣ Business Keywords

```robotframework
*** Keywords ***
Login As Valid User
    Open Login Page
    Enter Valid Credentials
    Click Login Button
```

This hides technical implementation.

---

# 3️⃣ Page Objects

```robotframework
*** Keywords ***
Open Login Page
    Go To    ${LOGIN_URL}

Enter Valid Credentials
    Input Text    ${USERNAME_FIELD}    ${USER}
    Input Text    ${PASSWORD_FIELD}    ${PASS}

Click Login Button
    Click Element    ${LOGIN_BUTTON}
```

---

# 4️⃣ Locators / Variables

```robotframework
*** Variables ***
${USERNAME_FIELD}    css=[data-testid="username"]
${PASSWORD_FIELD}    css=[data-testid="password"]
${LOGIN_BUTTON}      css=[data-testid="login-button"]
```

---

# 📁 Recommended Folder Structure

```text
project/
├── tests/
│   ├── smoke/
│   └── regression/
│
├── resources/
│   ├── pages/
│   │   ├── login_page.robot
│   │   ├── dashboard_page.robot
│   │   └── checkout_page.robot
│   │
│   ├── keywords/
│   └── variables/
```

---

# 🏢 Real Project Example

Login page redesign changed:

```text
id=username
```

to:

```text
css=[data-testid="username"]
```

Without POM:

- dozens of tests changed

With POM:

- one locator file updated

That is the ROI of architecture.

---

# 🔁 Reusable Page Example

## login_page.robot

```robotframework
*** Variables ***
${USERNAME_FIELD}    css=[data-testid="username"]
${PASSWORD_FIELD}    css=[data-testid="password"]
${LOGIN_BUTTON}      css=[data-testid="login-button"]

*** Keywords ***
Open Login Page
    Go To    ${LOGIN_URL}
    Wait Until Element Is Visible    ${USERNAME_FIELD}

Enter Credentials
    [Arguments]    ${user}    ${pass}
    Input Text    ${USERNAME_FIELD}    ${user}
    Input Text    ${PASSWORD_FIELD}    ${pass}

Submit Login
    Click Element    ${LOGIN_BUTTON}
```

---

## login_keywords.robot

```robotframework
*** Settings ***
Resource    ../pages/login_page.robot

*** Keywords ***
Login As Valid User
    Open Login Page
    Enter Credentials    ${USER}    ${PASS}
    Submit Login
```

---

## test.robot

```robotframework
*** Test Cases ***
User Login Test
    Login As Valid User
    Dashboard Should Be Visible
```

---

# 🌐 POM for Multi-Page Flows

Checkout flow:

```text
Login Page
Product Page
Cart Page
Checkout Page
Confirmation Page
```

Create separate page files.

This keeps flows manageable.

---

# ⚠️ Synchronization Still Matters

POM is not only structure.

Page methods should include waits.

Good:

```robotframework
Open Login Page
    Go To    ${LOGIN_URL}
    Wait Until Element Is Visible    ${USERNAME_FIELD}
```

Bad:

```robotframework
Go To    ${LOGIN_URL}
Sleep    5s
```

---

# 🔄 Shared Base Page Pattern

Common utilities:

```robotframework
*** Keywords ***
Wait For Loader To Disappear
Capture Failure Screenshot
Open Application
```

Reusable across pages.

---

# ❌ Common Mistakes

### Only Moving Locators

True POM includes actions too.

### Huge Page Files

Split by feature if too large.

### Tests Still Use Raw Clicks

Defeats purpose.

### Duplicate Keywords

Centralize shared flows.

### Weak Naming

Use business names, not generic names.

### No Wait Strategy

Still flaky even with POM.

---

# ✅ Best Practices

- Keep tests readable  
- Put locators inside page files  
- Put actions inside page keywords  
- Reuse business flows  
- Add waits in page methods  
- Split files by page/domain  
- Review architecture as suite grows

---

# 🔧 Practical Examples

## Search Product

```robotframework
Search For Product    Laptop
Results Should Be Visible
```

## Checkout

```robotframework
Login As Valid User
Add Product To Cart
Complete Checkout
Order Confirmation Should Be Visible
```

---

# 📈 Maturity Model

## Beginner

Raw locators in tests.

## Intermediate

Locators moved to page files.

## Advanced

Business keywords + reusable flows + clean structure.

## Expert

Scalable layered framework with CI/CD and parallel execution.

---

# 💡 My Practical Opinion

When teams say:

> “UI automation maintenance is painful.”

I inspect:

- locator duplication  
- raw UI steps in tests  
- no page separation  
- weak naming  
- no reusable flows

Usually Page Object Model fixes most of it.

---

# 🏁 Final Verdict

Page Object Model is one of the highest ROI UI automation patterns.

Strong implementation gives:

- faster maintenance  
- cleaner tests  
- easier onboarding  
- scalable growth  
- fewer UI-break issues

Poor structure creates long-term drag.

---

# 📚 What To Learn Next

1. BrowserLibrary Comparison  
2. Parallel Execution with Pabot  
3. CI/CD UI Pipelines  
4. Test Stability Engineering  
5. Framework Design Patterns

---

## Summary

> Tests should express behavior.  
> Page objects should handle implementation.  
> That separation is where maintainable UI automation begins.
