---
sidebar_position: 4
title: Variables Management
description: Learn how to manage Robot Framework variables effectively across environments, pipelines, test suites, and real-world automation projects.
---

# Robot Framework: Variables Management

> Build reliable, scalable automation by using variables the right way across environments, test data, secrets, and dynamic workflows.

---

## 🎯 Why Variables Matter

Many teams think flaky tests are caused by browsers, timing issues, or unstable environments.

Sometimes that is true.

But in many real projects, failures happen because of poor variable strategy:

- Hardcoded URLs  
- Credentials stored in test files  
- Duplicate values across suites  
- Wrong environment data used in pipelines  
- Shared variables leaking between tests  
- Dynamic values not passed correctly

> Good variable management improves maintainability, portability, and trust in automation.

---

## 🤖 What Are Variables in Robot Framework?

Variables allow you to store reusable values instead of hardcoding them.

Examples:

```robotframework
${URL}
${USERNAME}
${PASSWORD}
${BROWSER}
${ORDER_ID}
@{USERS}
&{CONFIG}
```

Use variables for:

- URLs  
- Credentials  
- Test data  
- Browser names  
- API tokens  
- IDs generated during execution  
- Environment-specific values

---

## 🧱 Core Variable Types

| Type | Syntax | Example | Use Case |
|---|---|---|---|
| Scalar | `${VAR}` | `${URL}` | Single value |
| List | `@{LIST}` | `@{USERS}` | Multiple items |
| Dictionary | `&{DICT}` | `&{CONFIG}` | Key/value config |
| Environment | `%{VAR}` | `%{HOME}` | OS environment value |

---

## Scalar Variable Example

```robotframework
*** Variables ***
${URL}        https://example.com
${BROWSER}    chrome
```

Use in tests:

```robotframework
Open Browser    ${URL}    ${BROWSER}
```

---

## List Variable Example

```robotframework
@{USERS}    admin    user1    user2
```

Usage:

```robotframework
FOR    ${user}    IN    @{USERS}
    Log    ${user}
END
```

---

## Dictionary Variable Example

```robotframework
&{CONFIG}    url=https://example.com    browser=chrome
```

Usage:

```robotframework
Open Browser    ${CONFIG.url}    ${CONFIG.browser}
```

---

## 📂 Where Variables Can Be Defined

Robot Framework supports multiple sources.

### 1. Variables Section

```robotframework
*** Variables ***
${URL}    https://qa.example.com
```

### 2. Resource Files

Reusable shared variables.

### 3. Variable Files

Python / YAML / JSON based external configs.

### 4. Command Line

```bash
robot --variable URL:https://stage.example.com tests/
```

### 5. Environment Variables

```bash
export DB_PASSWORD=secret
```

Use inside Robot:

```robotframework
${pass}=    Get Environment Variable    DB_PASSWORD
```

---

## 🔝 Practical Precedence Strategy

Common real-world order:

```text
Command Line Override
↓
Environment Variables
↓
Variable Files
↓
Resource Files
↓
Suite Variables
```

This helps when switching environments without changing tests.

---

## 🌍 Multi-Environment Example

Instead of editing tests:

❌ Bad:

```robotframework
${URL}    https://prod.example.com
```

Use environment-based values.

### qa.yaml

```yaml
url: https://qa.example.com
browser: chrome
```

### stage.yaml

```yaml
url: https://stage.example.com
browser: chrome
```

Run:

```bash
robot --variablefile qa.yaml tests/
robot --variablefile stage.yaml tests/
```

---

## 🔐 Secrets Management

Never hardcode passwords or tokens.

❌ Bad:

```robotframework
${PASSWORD}    Admin123
```

✅ Better:

Use CI/CD variables or environment variables.

```robotframework
${PASSWORD}=    Get Environment Variable    APP_PASSWORD
```

Useful for:

- DB passwords  
- API tokens  
- Client secrets  
- Production credentials

---

## 🧠 Variable Scope

Understanding scope prevents confusion.

| Scope | Usage | Lifetime |
|---|---|---|
| Local | Inside keyword | Current keyword |
| Test | `Set Test Variable` | Current test |
| Suite | `Set Suite Variable` | Current suite |
| Global | `Set Global Variable` | Entire execution |

---

## Recommended Usage

### Use Suite Variables For

- Base URL  
- Browser name  
- Shared config

### Use Test Variables For

- User IDs  
- Order numbers  
- Temporary data

### Use Global Variables Sparingly

Only for truly global runtime values.

---

## Example

```robotframework
Set Suite Variable    ${BASE_URL}    https://qa.example.com
Set Test Variable     ${ORDER_ID}    12345
```

---

## 🔄 Dynamic Value Handling

Real tests often generate values.

Example:

```robotframework
${response}=    Create Order API
${order_id}=    Set Variable    ${response.json()['id']}
Set Test Variable    ${ORDER_ID}    ${order_id}
```

Use later:

```robotframework
Verify Order Exists    ${ORDER_ID}
```

---

## 🚀 CI/CD Variable Usage

Very common in pipelines.

### GitLab CI Example

```yaml
variables:
  ENV: qa
  BROWSER: chrome
```

Use in Robot:

```robotframework
${env}=    Get Environment Variable    ENV
${browser}=    Get Environment Variable    BROWSER
```

This keeps tests reusable.

---

## 🏢 Real Project Example

A pipeline had separate QA and UAT runs.

Old approach:

- Manually edit URLs  
- Change credentials in files  
- Frequent mistakes

Improved approach:

```bash
robot --variable ENV:qa
robot --variable ENV:uat
```

Tests remained unchanged.

Execution became safer and faster.

---

## 📁 Recommended Variable File Structure

```text
project/
├── config/
│   ├── qa.yaml
│   ├── stage.yaml
│   └── prod.yaml
├── data/
└── tests/
```

---

## 🧾 Naming Best Practices

Use clear names.

✅ Good:

```text
BASE_URL
API_TOKEN
DB_USERNAME
ORDER_ID
CUSTOMER_EMAIL
```

❌ Weak:

```text
X
TEMP1
VAL
DATA2
```

---

## ❌ Common Mistakes

### Hardcoding Credentials

Security risk.

### Duplicate Values Everywhere

Hard to maintain.

### Overusing Global Variables

Creates hidden dependencies.

### Mixing Environments

QA URL with prod credentials.

### Poor Names

Hard to understand later.

### Forgetting Cleanup

Temporary variables reused unexpectedly.

---

## ✅ Best Practices

- Prefer external config files  
- Use command-line overrides for pipelines  
- Keep secrets outside repo  
- Use suite variables for shared config  
- Use test variables for runtime data  
- Name variables clearly  
- Remove duplication

---

## 🔧 Quick Examples

### Override Browser

```bash
robot --variable BROWSER:edge tests/
```

### Use Secret

```bash
export API_TOKEN=abc123
```

### Read in Test

```robotframework
${token}=    Get Environment Variable    API_TOKEN
```

---

## 💡 My Practical Opinion

When teams say:

> “Tests fail randomly in QA but not locally.”

Often the root cause is:

- wrong variable source  
- outdated config  
- hardcoded data  
- environment mismatch  
- leaked shared state

Variables are often the hidden cause.

---

## 🏁 Final Verdict

Variables Management looks basic, but it is a core engineering topic.

Good variable strategy gives:

- reusable automation  
- cleaner pipelines  
- safer secrets handling  
- easier environment switching  
- fewer maintenance issues

Poor strategy creates confusion and unstable execution.

---

## 📚 What To Learn Next

1. Built-in Keywords & Libraries  
2. Resource Files & Modular Design  
3. Data-Driven Testing  
4. CI/CD Integration  
5. Test Stability Engineering

---

## Summary

> Strong automation suites are not only built with keywords.  
> They are built with **clear variable strategy and clean configuration management**.
