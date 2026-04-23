---
sidebar_position: 1
title: SeleniumLibrary Implementation
description: Learn how to use Robot Framework SeleniumLibrary effectively with stable locators, waits, page patterns, browser management, and production-ready UI automation practices.
---

# Robot Framework: SeleniumLibrary Implementation

> Reliable UI automation is not about clicking elements quickly.  
> It is about interacting with web applications consistently and maintainably.

---

## 🎯 Why This Matters

Many teams call UI tests flaky when the real issues are:

- weak locators  
- overuse of `Sleep`  
- poor synchronization  
- duplicated UI steps  
- unstable browser setup  
- no cleanup strategy

> In many projects, the application is not flaky.  
> The automation design is.

Good SeleniumLibrary implementation greatly improves trust in UI suites.

---

## 🤖 What Is SeleniumLibrary?

SeleniumLibrary is the most widely used Robot Framework library for browser automation.

It allows you to:

- open browsers  
- navigate pages  
- click buttons  
- enter text  
- validate UI state  
- upload files  
- manage windows/tabs  
- run headless in CI

Example:

```robotframework
*** Settings ***
Library    SeleniumLibrary
```

---

## 🧱 Core Areas of Strong Implementation

```text
1. Locator Strategy
2. Synchronization
3. Reusable Page Actions
4. Browser Management
5. Stability & Debugging
```

---

# 1️⃣ Locator Strategy

Locators decide how tests find elements.

Poor locators break often.

## Recommended Order

```text
data-testid / stable attributes
CSS selectors
ID (if truly stable)
XPath (only when needed)
```

---

## Better Example

```robotframework
Input Text    css=[data-testid="username"]    admin
Click Element    css=[data-testid="login-button"]
```

Instead of brittle paths like:

```robotframework
xpath=/html/body/div[2]/div/form/input[1]
```

---

## Practical Advice

Work with developers to add:

```text
data-testid
data-qa
data-test
```

These are excellent for automation.

---

# 2️⃣ Synchronization (Very Important)

Most flaky UI tests are timing issues.

## Avoid

```robotframework
Sleep    5s
```

## Prefer

```robotframework
Wait Until Element Is Visible    id=login
Wait Until Page Contains Element    css=.dashboard
Wait Until Element Is Enabled    id=submit
```

---

## Strong Retry Pattern

```robotframework
Wait Until Keyword Succeeds    20s    2s    Element Should Be Visible    id=success
```

Useful for:

- slow environments  
- async updates  
- delayed loaders

---

# 3️⃣ Reusable Page Actions

Do not repeat raw UI steps in every test.

## Weak Pattern

```robotframework
Input Text    id=user    admin
Input Text    id=pass    pass123
Click Button    id=login
```

## Better Pattern

```robotframework
Login As Valid User
```

Where keyword contains real steps.

---

## Example Structure

```text
resources/
├── pages/
│   └── login_page.robot
├── keywords/
│   └── login.robot
```

---

# 4️⃣ Browser Management

## Clean Opening Pattern

```robotframework
Open Browser    ${URL}    chrome
Maximize Browser Window
Set Selenium Timeout    10s
```

## Clean Closing Pattern

```robotframework
Close Browser
```

or suite level:

```robotframework
Close All Browsers
```

---

## Headless CI Example

```robotframework
Open Browser    ${URL}    chrome    options=add_argument(--headless)
```

Useful in GitLab CI / Jenkins runners.

---

# 5️⃣ Stability & Debugging

Capture evidence when failures happen.

```robotframework
Run Keyword If Test Failed    Capture Page Screenshot
```

Use teardown hooks for this.

---

## Browser Console / Logs

Useful when debugging JS-heavy apps.

---

# 📁 Recommended Project Structure

```text
project/
├── tests/
│   ├── smoke/
│   └── regression/
├── resources/
│   ├── pages/
│   ├── keywords/
│   └── common/
├── data/
└── reports/
```

---

# 🏢 Real Project Example

A login page changed:

From:

```text
id=username
```

To:

```text
data-testid=username
```

Teams using raw locators in many tests had to update dozens of files.

Teams using page keywords changed one place.

That is framework maturity.

---

# 🔄 File Upload Example

```robotframework
Choose File    id=fileUpload    ${EXECDIR}/files/sample.pdf
Click Button   id=submit
```

Use dynamic paths, not local hardcoded machine paths.

---

# 🪟 Windows / Tabs Example

```robotframework
Click Link    Open Details
Switch Window    NEW
Title Should Be    Details
Close Window
Switch Window    MAIN
```

---

# 📱 Responsive / Viewport Testing

Useful for modern apps.

```robotframework
Set Window Size    1366    768
Set Window Size    390     844
```

Basic desktop/mobile checks.

---

# ⚠️ Parallel Execution Notes

When using Pabot:

Avoid shared accounts and shared browser state.

Use:

- separate users  
- isolated data  
- proper cleanup

---

# ❌ Common Mistakes

### Using Sleep Everywhere

Creates unstable timing.

### Absolute XPath

Breaks on layout changes.

### No Reusable Keywords

Too much duplication.

### Hardcoded Browser Setup

Difficult CI execution.

### No Screenshots on Failure

Slower debugging.

### Shared Test Users

Parallel conflicts.

---

# ✅ Best Practices

- Prefer stable locators  
- Replace sleep with waits  
- Use reusable page keywords  
- Centralize locators  
- Capture screenshots on failure  
- Support headless mode  
- Keep browser lifecycle clean  
- Review flaky tests for timing first

---

# 🔧 Practical Examples

## Login

```robotframework
Open Browser    ${URL}    chrome
Input Text      css=[data-testid="username"]    ${USER}
Input Text      css=[data-testid="password"]    ${PASS}
Click Element   css=[data-testid="login-button"]
Wait Until Page Contains Element    css=.dashboard
```

## Retry Visible Element

```robotframework
Wait Until Keyword Succeeds    15s    2s    Element Should Be Visible    id=save
```

## Screenshot on Failure

```robotframework
Test Teardown    Run Keyword If Test Failed    Capture Page Screenshot
```

---

# 📈 Maturity Model

## Beginner

Direct locators + simple waits.

## Intermediate

Page keywords + stable selectors.

## Advanced

Parallel execution + CI headless + reusable framework + debugging standards.

---

# 💡 My Practical Opinion

When teams say:

> “Selenium is unreliable.”

Often the real issue is:

- poor waits  
- weak locators  
- copied steps  
- no cleanup  
- bad test design

SeleniumLibrary can be very reliable when implemented well.

---

# 🏁 Final Verdict

SeleniumLibrary is powerful, but success depends on implementation quality.

Strong implementation gives:

- stable UI automation  
- faster debugging  
- maintainable tests  
- scalable regression packs  
- CI/CD readiness

Poor implementation creates flaky suites.

---

# 📚 What To Learn Next

1. Wait Strategies & Synchronization  
2. File Upload / Download Handling  
3. Headless Execution  
4. Page Object Model in Robot Framework  
5. BrowserLibrary Comparison

---

## Summary

> UI automation becomes reliable when locator strategy, waits, and framework design are treated seriously.
