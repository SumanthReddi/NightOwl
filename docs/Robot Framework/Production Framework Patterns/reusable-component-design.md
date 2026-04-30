---
sidebar_position: 3
title: Reusable Component Design
description: Production-ready reusable component design in Robot Framework with parameterization, composition, locator strategy, and maintainable keyword architecture.
---

# Robot Framework: Reusable Component Design

> Reuse problems are rarely about Robot Framework.  
> They come from poor component design.

---

## 🎯 Why This Matters

Common issues in bad design:

- duplicated keywords  
- hardcoded values  
- fragile UI locators  
- difficult maintenance  
- inconsistent behavior across tests  

> Good components reduce maintenance more than writing more tests.

---

# 🧱 Design Principles

```text
1. Always parameterize inputs
2. Never hardcode environment or test data
3. Separate locators from logic
4. Keep components small and composable
5. Validate inputs early
```

---

# 1️⃣ Component Interface (How Keywords Are Used)

## ❌ Bad

```robotframework
Login To Application
    Open Browser    https://example.com/login    chrome
    Input Text    id=username    admin
```

---

## ✅ Good

```robotframework
Login To Application
    [Arguments]    ${username}    ${password}

    Validate Login Inputs    ${username}    ${password}

    Open Browser    ${LOGIN_URL}    ${BROWSER}
    Input Text    ${USERNAME_FIELD}    ${username}
    Input Text    ${PASSWORD_FIELD}    ${password}
```

---

## Input Validation

```robotframework
Validate Login Inputs
    [Arguments]    ${username}    ${password}

    Should Not Be Empty    ${username}
    Should Not Be Empty    ${password}
```

---

# 2️⃣ Component Implementation (How Keywords Work)

## ❌ Hardcoded Implementation

```robotframework
Input Text    id=username    admin
```

---

## ✅ Config + Locator Driven

```robotframework
Input Text    ${USERNAME_FIELD}    ${username}
```

---

## Locator File Example

```yaml
USERNAME_FIELD: id=username
PASSWORD_FIELD: id=password
LOGIN_BUTTON: id=login
```

---

# 3️⃣ Component Composition (Reuse Properly)

## ❌ Duplicate Logic

```robotframework
Create User
    Open Browser...
    Login Steps...

Reset Password
    Open Browser...
    Login Steps...
```

---

## ✅ Composed Keywords

```robotframework
Admin Login
    Login To Application    ${ADMIN_USER}    ${ADMIN_PASSWORD}

Create User
    Admin Login
    # steps...

Reset Password
    Admin Login
    # steps...
```

---

# 4️⃣ Context Handling

Store reusable state:

```robotframework
${user_id}=    Get Text    ${USER_ID}
Set Test Variable    ${USER_ID}    ${user_id}
```

---

# 5️⃣ Retry Pattern (Use Carefully)

```robotframework
Login With Retry
    [Arguments]    ${username}    ${password}

    Wait Until Keyword Succeeds
    ...    3 times
    ...    2s
    ...    Login To Application    ${username}    ${password}
```

---

# ⚠️ Common Problems

## Hardcoded Data

Breaks across environments.

## Duplicate Keywords

Creates maintenance overhead.

## Locator Changes Breaking Tests

No separation of locators.

## Large Keywords

Hard to debug and reuse.

---

# ❌ Common Mistakes

- putting everything in one keyword  
- mixing UI + API + DB logic  
- no parameter validation  
- hardcoding test data  
- copying keywords instead of composing  

---

# ✅ Best Practices

- use parameterized keywords  
- separate locators into files  
- compose small reusable keywords  
- validate inputs  
- keep keywords focused  

---

# 📁 Suggested Structure

```text
resources/
├── keywords/
│   ├── login.robot
│   ├── user.robot
│   └── common.robot
├── locators/
│   ├── login.yaml
│   └── user.yaml
```

---

# 📈 Maturity Model

## Beginner
Hardcoded keywords.

## Intermediate
Parameterized keywords.

## Advanced
Locator separation + composition.

## Expert
Fully reusable, modular, scalable components.

---

# 💡 Practical Insight

When reuse becomes difficult:

Check:

1. parameterization  
2. locator separation  
3. keyword size  
4. duplication  

---

# 🏁 Final Verdict

Good component design gives:

- reusable test logic  
- faster development  
- easier maintenance  
- stable automation  

Bad design creates hidden complexity.

---

# 📚 What To Learn Next

1. Framework Design Patterns  
2. Project Structure  
3. Test Data Strategy  
4. Parallel Execution  
5. CI/CD Integration  

---

## Summary

> Keywords are not reusable by default.  
> Design makes them reusable.
