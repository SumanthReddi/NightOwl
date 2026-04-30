---
sidebar_position: 1
title: Project Structure Best Practices
description: Practical, production-ready project structure for Robot Framework with feature-based organization, reusable resources, and scalable design.
---

# Robot Framework: Project Structure Best Practices

> Most “flaky frameworks” are not flaky.  
> They are poorly structured.

---

## 🎯 Why This Matters

Common issues in bad structure:

- hard to locate tests  
- duplicated keywords  
- fragile imports  
- difficult scaling  
- messy CI integration  

> Good structure reduces maintenance more than any tool.

---

# 🧱 Core Design Principles

```text
1. Organize by feature (not by file type)
2. Separate layers (UI / API / DB)
3. Keep reusable logic centralized
4. Avoid hardcoded paths
5. Make scaling predictable
```

---

# 1️⃣ Recommended Project Structure

```text
project/
├── features/
│   ├── login/
│   │   ├── smoke/
│   │   │   └── login_ui.robot
│   │   ├── regression/
│   │   │   └── login_api.robot
│   │   └── resources/
│   │       ├── login_keywords.robot
│   │       ├── login_queries.robot
│   │       └── login_endpoints.robot
│   ├── users/
│   └── payments/
│
├── resources/
│   ├── core/
│   │   ├── browser.robot
│   │   ├── api.robot
│   │   └── database.robot
│   ├── config/
│   │   └── variables.robot
│   └── utils/
│       └── helpers.robot
│
├── tests/ (optional entry point)
├── reports/
├── requirements.txt
└── .gitlab-ci.yml / Jenkinsfile
```

---

# 2️⃣ Feature-Based Organization (Critical)

## ❌ Bad

```text
tests/
login.robot
user.robot
payment.robot
```

---

## ✅ Good

```text
features/login/
features/users/
features/payments/
```

Benefits:

- everything related stays together  
- easier debugging  
- better scalability  

---

# 3️⃣ Layer Separation

Inside each feature:

```text
login/
├── UI tests
├── API tests
├── DB validation
```

---

## Example

```robotframework
login_ui.robot
login_api.robot
login_db.robot
```

---

# 4️⃣ Resource Management

## ❌ Hardcoded Paths

```robotframework
Resource    ../resources/login_keywords.robot
```

---

## ✅ Proper Approach

```robotframework
Resource    ${EXECDIR}/resources/core/browser.robot
```

---

## Central Import Pattern

```robotframework
*** Settings ***
Resource    ${EXECDIR}/resources/core/browser.robot
Resource    ${EXECDIR}/resources/core/api.robot
Resource    ${EXECDIR}/resources/core/database.robot
```

---

# 5️⃣ Reusable Components

Keep reusable logic in:

```text
resources/core/
resources/utils/
```

Examples:

- browser setup  
- API client  
- DB connection  
- common validations  

---

# 6️⃣ Environment Configuration

```text
resources/config/
```

Example:

```robotframework
${ENV}        staging
${BASE_URL}   https://test.com
```

---

# 7️⃣ Test Categorization

Use folders + tags:

```text
smoke/
regression/
```

---

## Example

```robotframework
*** Test Cases ***
Login Smoke Test
    [Tags]    smoke
```

---

# 8️⃣ CI Compatibility

Structure should support:

- selective execution  
- parallel runs  
- easy test targeting  

Example:

```bash
robot features/login/smoke
```

---

# ⚠️ Common Problems

## Flat Structure

Hard to scale.

---

## Duplicate Keywords

Same logic repeated across files.

---

## Broken Imports

Relative paths fail in CI.

---

## Mixed Concerns

UI + API + DB in same file.

---

# ❌ Common Mistakes

- organizing by file type instead of feature  
- putting everything in one folder  
- hardcoding resource paths  
- no separation of layers  
- no reusable core utilities  

---

# ✅ Best Practices

- use feature-based structure  
- separate UI/API/DB layers  
- centralize reusable code  
- avoid relative path issues  
- design for scaling from day 1  

---

# 📈 Maturity Model

## Beginner
Flat structure, basic tests.

## Intermediate
Feature folders + reusable resources.

## Advanced
Layer separation + CI integration.

## Expert
Scalable enterprise structure + modular framework.

---

# 💡 Practical Insight

When framework becomes hard to maintain:

Check:

1. folder organization  
2. resource duplication  
3. import strategy  
4. feature isolation  

---

# 🏁 Final Verdict

Good structure gives:

- faster development  
- easier debugging  
- scalable automation  
- stable CI pipelines  

Bad structure silently kills productivity.

---

# 📚 What To Learn Next

1. Framework Design Patterns  
2. CI/CD Integration  
3. Test Data Management  
4. Parallel Execution  
5. Advanced Debugging  

---

## Summary

> Structure decides how long your framework survives.
