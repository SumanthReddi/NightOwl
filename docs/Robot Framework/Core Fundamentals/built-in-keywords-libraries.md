---
sidebar_position: 5
title: Built-in Keywords & Libraries
description: Learn how to use Robot Framework built-in keywords and standard libraries effectively to reduce duplication, improve readability, and speed up automation development.
---

# Robot Framework: Built-in Keywords & Libraries

> Master the native capabilities of Robot Framework to write cleaner, faster, and more maintainable automation suites.

---

## 🎯 Why This Matters

Many teams create custom keywords for functionality Robot Framework already provides.

That usually leads to:

- Unnecessary keyword sprawl  
- Duplicate logic  
- Harder maintenance  
- Slower test development  
- Inconsistent implementations

> Often the best keyword is the one you do **not** need to create.

Robot Framework already includes powerful built-in keywords and standard libraries that solve many common automation needs.

Learning them well can significantly improve productivity.

---

## 🤖 What Are Built-in Keywords?

Built-in keywords are ready-to-use functions provided by Robot Framework.

Examples:

```robotframework
Log
Should Be Equal
Run Keyword If
Set Variable
Wait Until Keyword Succeeds
```

They are available without extra installation through the `BuiltIn` library.

---

## 📚 Common Standard Libraries

Robot Framework also provides useful standard libraries.

| Library | Purpose |
|---|---|
| BuiltIn | Core keywords |
| Collections | Lists & dictionaries |
| String | String operations |
| DateTime | Date/time handling |
| OperatingSystem | Files, folders, OS commands |
| Process | Run external commands |
| XML | XML parsing |

---

## 🧱 Essential Keywords to Know First

These keywords solve many day-to-day scenarios.

| Keyword | Use Case | Example |
|---|---|---|
| `Log` | Debugging | `Log    ${value}` |
| `Should Be Equal` | Validation | `Should Be Equal    ${a}    ${b}` |
| `Run Keyword If` | Conditional logic | `Run Keyword If    ${flag}    Do Something` |
| `Set Variable` | Dynamic values | `${x}=    Set Variable    value` |
| `Get Length` | Size checks | `${count}=    Get Length    ${list}` |
| `Append To List` | Update list | `Append To List    ${items}    new` |
| `Set To Dictionary` | Update dictionary | `Set To Dictionary    ${data}    key=value` |
| `Get Current Date` | Date handling | `${today}=    Get Current Date` |
| `Wait Until Keyword Succeeds` | Retry logic | `Wait Until Keyword Succeeds    10s    1s    Check Status` |

---

## 🔍 BuiltIn Library Examples

### Logging

```robotframework
Log    Login started
Log    ${response}
```

### Validation

```robotframework
Should Be Equal    ${status}    SUCCESS
Should Contain     ${message}   Approved
Should Be True     ${count} > 0
```

### Dynamic Variables

```robotframework
${env}=    Set Variable    qa
```

---

## 🔁 Control Flow Patterns

### Conditional Execution

```robotframework
Run Keyword If    '${ENV}' == 'prod'    Critical Validation
```

### Retry Unstable Operations

```robotframework
Wait Until Keyword Succeeds    30s    2s    Element Should Be Visible    id=submit
```

Very useful for UI timing issues or temporary backend delays.

---

## 📦 Collections Library

Useful for lists and dictionaries.

### List Example

```robotframework
@{users}=    Create List    admin    user1    user2
Append To List    ${users}    guest
${count}=    Get Length    ${users}
```

### Dictionary Example

```robotframework
&{config}=    Create Dictionary    url=https://example.com    browser=chrome
Set To Dictionary    ${config}    timeout=20
```

### Validation

```robotframework
Dictionary Should Contain Key    ${config}    url
List Should Contain Value        ${users}     admin
```

---

## 🔤 String Library

Useful for formatting and text checks.

```robotframework
${full}=    Catenate    SEPARATOR= -    QA    Build
Should Contain    ${full}    QA
```

Other common uses:

- Replace text  
- Split strings  
- Convert case  
- Strip spaces

---

## 📅 DateTime Library

Very useful for business rules and expiry checks.

```robotframework
${today}=    Get Current Date
${future}=   Add Time To Date    ${today}    7 days
```

Example validations:

- Subscription expiry  
- Billing dates  
- Statement generation  
- Retry windows

---

## 💻 OperatingSystem Library

Useful for file workflows.

```robotframework
File Should Exist    reports/output.xml
Create Directory     temp
Remove File          old.txt
```

Common real uses:

- Validate downloaded files  
- Check exports  
- Cleanup temp data  
- Verify report generation

---

## ⚙️ Process Library

Run shell commands or external scripts.

```robotframework
Run Process    python    script.py
```

Useful for:

- Triggering utilities  
- Running migrations  
- Calling batch scripts  
- Supporting CI flows

---

## 🧠 Practical Design Principle

Use built-in libraries first.

Then create custom keywords only when:

- Business logic repeats often  
- Flow needs abstraction  
- Multiple libraries must be combined  
- Domain language improves readability

---

## ❌ Common Mistakes

### Recreating Existing Keywords

Custom wait wrappers when `Wait Until Keyword Succeeds` already works.

### Overusing Sleep

```robotframework
Sleep    5s
```

Prefer waits and retries.

### Ignoring Collections Library

Manual loops for simple list checks.

### Too Many Tiny Custom Keywords

Creates clutter.

### No Standardization

Different styles across team members.

---

## 🏢 Real Project Example

A suite had many custom keywords like:

```robotframework
Wait For Dashboard
Wait For Login
Wait For Payment Page
```

All were wrappers around waits.

After cleanup:

```robotframework
Wait Until Keyword Succeeds    20s    2s    Element Should Be Visible    id=dashboard
```

Result:

- Fewer custom keywords  
- Easier debugging  
- Cleaner framework

---

## 🚀 Recommended Usage Strategy

### First Learn These Libraries

1. BuiltIn  
2. Collections  
3. String  
4. DateTime  
5. OperatingSystem

### Then Expand Into

- SeleniumLibrary  
- RequestsLibrary  
- DatabaseLibrary  
- BrowserLibrary

---

## 📁 Example Structure

```text
tests/
resources/
  common_keywords.robot
  api_keywords.robot
  ui_keywords.robot
data/
reports/
```

Keep business keywords in resources, while using built-in libraries underneath.

---

## 🔧 Practical Examples

### Validate Count

```robotframework
${count}=    Get Length    ${users}
Should Be True    ${count} > 0
```

### Retry API Status

```robotframework
Wait Until Keyword Succeeds    15s    3s    Verify Order Status
```

### Build Dynamic URL

```robotframework
${url}=    Catenate    SEPARATOR=/    ${BASE_URL}    users    ${ID}
```

---

## 💡 My Practical Opinion

Many automation frameworks become bloated because teams skip native capabilities and overbuild custom layers.

Robot Framework becomes stronger when you:

- use built-ins wisely  
- keep custom keywords meaningful  
- avoid duplication  
- standardize patterns

---

## 🏁 Final Verdict

Built-in keywords and standard libraries are not beginner-only features.

They are core tools for writing efficient, scalable automation.

Strong usage gives:

- Faster development  
- Cleaner test suites  
- Less duplication  
- Easier maintenance  
- Better consistency

---

## 📚 What To Learn Next

1. Resource Files & Modular Design  
2. Data-Driven Testing  
3. SeleniumLibrary Implementation  
4. API Testing with RequestsLibrary  
5. Framework Design Patterns

---

## Summary

> Strong automation teams do not build everything from scratch.  
> They maximize built-in capabilities first, then add custom layers only where needed.
