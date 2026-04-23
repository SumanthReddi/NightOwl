---
sidebar_position: 6
title: API Test Chaining Strategies
description: Learn how to chain dependent API calls in Robot Framework using RequestsLibrary with dynamic data passing, workflow validation, cleanup, and production-ready automation patterns.
---

# Robot Framework: API Test Chaining Strategies

> Real systems rarely use one API call in isolation.  
> Strong automation validates complete workflows.

---

## 🎯 Why This Matters

Many business flows depend on multiple APIs.

Examples:

- Register user → Login → Get profile  
- Create cart → Add items → Checkout → Payment  
- Create application → Decision → Approval → Account creation  
- Create customer → Update details → Verify in DB

Testing only one endpoint can miss real defects.

> Systems often fail in transitions between APIs, not inside a single API.

---

# 🤖 What Is API Chaining?

API chaining means using data from one response in the next request.

Example:

```text
POST /users   → returns userId
POST /orders  → uses userId
GET /orders   → verifies created order
```

This creates realistic workflow testing.

---

# 🧱 Chaining Model

```text
Step 1 → Trigger API
Step 2 → Capture dynamic values
Step 3 → Reuse values downstream
Step 4 → Validate final business outcome
Step 5 → Cleanup if required
```

---

# 1️⃣ Basic Chaining Example

## Create User → Fetch User

```robotframework
${create}=    POST On Session    api    /users    json=${payload}
${user_id}=   Set Variable       ${create.json()}[id]

${get}=       GET On Session     api    /users/${user_id}

Should Be Equal As Integers    ${get.status_code}    200
```

---

# 2️⃣ Login → Token → Protected API

Very common real-world flow.

```robotframework
${login}=    POST On Session    api    /login    json=${credentials}
${token}=    Set Variable       ${login.json()}[token]

&{headers}=    Create Dictionary
...    Authorization=Bearer ${token}

${profile}=    GET On Session    api    /profile    headers=${headers}
```

---

# 3️⃣ Multi-Step Business Workflow

```text
Create Customer
→ Create Loan Application
→ Pull Decision
→ Approve
→ Create Account
```

This is where API chaining becomes high value.

---

# 🏢 Real Project Example

UI onboarding took several minutes and failed late.

API chaining validated:

- application created  
- reservation generated  
- decision returned  
- account opened

Faster debugging and stronger confidence than UI-only flow.

---

# 4️⃣ Capture Dynamic Values Safely

Examples:

```robotframework
${id}=         ${response.json()}[id]
${token}=      ${response.json()}[token]
${order_id}=   ${response.json()}[orderId]
```

Use clear names.

Avoid vague variables like:

```robotframework
${data}
${temp}
${value}
```

---

# 5️⃣ Reusable Workflow Keywords

```robotframework
*** Keywords ***
Create User And Return Id
    [Arguments]    ${payload}

    ${response}=    POST On Session    api    /users    json=${payload}
    [Return]    ${response.json()}[id]
```

Use in tests:

```robotframework
${user_id}=    Create User And Return Id    ${payload}
```

---

# 6️⃣ Chaining with Validation at Each Step

Weak pattern:

```text
Create → Create → Create → Fail at end
```

Strong pattern:

```text
Create user      validate 201
Create order     validate 201
Get order        validate data
Delete order     validate 200
```

Validate each hop.

---

# 🔁 Full Example

```robotframework
${user}=      POST On Session    api    /users    json=${user_payload}
${user_id}=   Set Variable       ${user.json()}[id]

${order}=     POST On Session    api    /orders   json=${order_payload}
${order_id}=  Set Variable       ${order.json()}[id]

${verify}=    GET On Session     api    /orders/${order_id}

Should Be Equal As Integers    ${verify.status_code}    200
Should Be Equal                ${verify.json()}[userId]    ${user_id}
```

---

# 7️⃣ Cleanup Strategy

Important for repeatable runs.

```robotframework
DELETE On Session    api    /orders/${order_id}
DELETE On Session    api    /users/${user_id}
```

Without cleanup:

- polluted environments  
- duplicate data conflicts  
- flaky reruns

---

# 🚀 CI/CD Usage

API chaining is powerful for:

- smoke workflows after deploy  
- account creation checks  
- payment happy path  
- onboarding validation  
- integration regression

---

# ⚠️ Parallel Execution Notes

Avoid shared static data:

```text
username=testuser
```

Better:

```text
username=testuser_${timestamp}
```

Use unique dynamic records.

---

# 📁 Recommended Structure

```text
resources/api/
├── auth.robot
├── users.robot
├── orders.robot
├── workflows.robot
└── common.robot
```

Workflow file contains multi-step chains.

---

# ❌ Common Mistakes

### Hardcoded IDs

Break when data changes.

### No Validation Between Steps

Late failures become hard to debug.

### Shared Users in Parallel Runs

Creates conflicts.

### No Cleanup

Leaves dirty environment.

### Giant 20-Step Tests

Hard to maintain.

### Ignoring Negative Chains

Need failure-path workflows too.

---

# ✅ Best Practices

- Chain only meaningful business flows  
- Validate every step  
- Use clear variable names  
- Use reusable workflow keywords  
- Generate unique test data  
- Clean created records  
- Keep smoke vs regression flows separate

---

# 🔧 Practical Examples

## Register → Login

```robotframework
Create User
Login User
Validate Token
```

## Order Flow

```robotframework
Create Cart
Add Product
Checkout
Pay
Verify Order
```

## Loan Flow

```robotframework
Submit Application
Fetch Decision
Approve
Verify Account
```

---

# 📈 Maturity Model

## Beginner

Single endpoint tests only.

## Intermediate

Simple 2-step chains.

## Advanced

Business workflows + cleanup + CI.

## Expert

Cross-system orchestration + DB validation + resilient test data strategy.

---

# 💡 My Practical Opinion

When teams say:

> “All APIs pass individually, but users still face issues.”

I inspect workflow chaining next.

Many real defects appear only when APIs interact sequentially.

---

# 🏁 Final Verdict

API chaining transforms isolated checks into realistic business validation.

Strong implementation gives:

- higher confidence in workflows  
- earlier integration defect detection  
- faster debugging than UI flows  
- better CI smoke coverage  
- realistic regression testing

Weak implementation creates brittle long scripts.

---

# 📚 What To Learn Next

1. Database Validation After APIs  
2. Dynamic Response Handling  
3. Negative Workflow Testing  
4. CI/CD Smoke Workflows  
5. Hybrid UI + API End-to-End Strategy

---

## Summary

> Single API tests verify endpoints.  
> Chained API tests verify real business journeys.
