---
sidebar_position: 2
title: HTTP Methods Implementation
description: Learn how to implement GET, POST, PUT, PATCH, and DELETE requests in Robot Framework using RequestsLibrary with production-ready validation patterns.
---

# Robot Framework: HTTP Methods Implementation

> Good API automation is not about calling endpoints once.  
> It is about using each HTTP method correctly and validating real behavior.

---

## 🎯 Why This Matters

Most backend systems expose APIs through HTTP methods.

Examples:

- retrieve customer profile  
- create account  
- update address  
- modify order status  
- delete temporary records

If testers do not understand method intent, tests become shallow.

> Many weak API suites only check status codes.  
> Strong suites validate behavior, data integrity, and contracts.

---

# 🤖 What Are HTTP Methods?

HTTP methods define the type of operation requested from an API.

| Method | Purpose |
|---|---|
| GET | Read / retrieve data |
| POST | Create new resource |
| PUT | Replace full resource |
| PATCH | Partial update |
| DELETE | Remove resource |

---

# 🧱 Production Usage Model

```text
GET     → Validate retrieval
POST    → Validate creation
PUT     → Validate full update
PATCH   → Validate partial update
DELETE  → Validate removal
```

Use the correct method for correct business behavior.

---

# ⚙️ Setup with RequestsLibrary

```robotframework
*** Settings ***
Library    RequestsLibrary
```

Create session:

```robotframework
Create Session    api    ${BASE_URL}
```

Reuse across all methods.

---

# 1️⃣ GET Implementation

Used to fetch data.

## Example

```robotframework
${response}=    GET On Session    api    /users/101

Should Be Equal As Integers    ${response.status_code}    200
Should Be Equal    ${response.json()}[id]    101
```

## Strong Validation Ideas

- status code  
- expected fields present  
- field values correct  
- response time acceptable

---

## GET with Query Parameters

```robotframework
&{params}=    Create Dictionary    status=ACTIVE    limit=10

${response}=    GET On Session    api    /customers    params=${params}
```

Useful for filtering/search APIs.

---

# 2️⃣ POST Implementation

Used to create data.

## Example

```robotframework
&{payload}=    Create Dictionary
...    name=John
...    email=john@test.com

${response}=    POST On Session    api    /users    json=${payload}

Should Be Equal As Integers    ${response.status_code}    201
Dictionary Should Contain Key    ${response.json()}    id
```

## Strong Validation Ideas

- record created  
- ID returned  
- data persisted correctly  
- duplicate handling

---

## Real Flow Validation

After POST:

```robotframework
${id}=    Set Variable    ${response.json()}[id]
${verify}=    GET On Session    api    /users/${id}
Should Be Equal As Integers    ${verify.status_code}    200
```

Create + verify is stronger than create only.

---

# 3️⃣ PUT Implementation

Used to replace a full resource.

## Example

```robotframework
&{payload}=    Create Dictionary
...    name=John Updated
...    email=new@test.com
...    status=ACTIVE

${response}=    PUT On Session    api    /users/101    json=${payload}

Should Be Equal As Integers    ${response.status_code}    200
```

## Validate After PUT

```robotframework
${verify}=    GET On Session    api    /users/101
Should Be Equal    ${verify.json()}[email]    new@test.com
```

---

# 4️⃣ PATCH Implementation

Used for partial updates.

## Example

```robotframework
&{payload}=    Create Dictionary    status=INACTIVE

${response}=    PATCH On Session    api    /users/101    json=${payload}

Should Be Equal As Integers    ${response.status_code}    200
```

## Why PATCH Matters

Only targeted fields change. Useful for:

- status updates  
- toggles  
- approval actions  
- preferences

---

# 5️⃣ DELETE Implementation

Used to remove data.

## Example

```robotframework
${response}=    DELETE On Session    api    /users/101

Should Be Equal As Integers    ${response.status_code}    200
```

## Strong Verification

```robotframework
${verify}=    GET On Session    api    /users/101
Should Be Equal As Integers    ${verify.status_code}    404
```

Deletion should be validated.

---

# 🔐 Headers Example

```robotframework
&{headers}=    Create Dictionary
...    Authorization=Bearer ${TOKEN}
...    Content-Type=application/json
```

Use with any method:

```robotframework
GET On Session    api    /profile    headers=${headers}
```

---

# 🏢 Real Project Example

A team tested only POST status code:

```text
201 Created
```

But records were not retrievable later.

Improved flow:

```text
POST → GET → DB Validation
```

This caught persistence defects.

---

# 📁 Recommended Resource Design

```text
resources/api/
├── users.robot
├── customers.robot
├── orders.robot
└── common.robot
```

Example reusable keyword:

```robotframework
Create Customer
Update Customer
Delete Customer
Get Customer
```

---

# 🔁 Reusable Keyword Example

```robotframework
*** Keywords ***
Get User By Id
    [Arguments]    ${id}

    ${response}=    GET On Session    api    /users/${id}
    [Return]    ${response}
```

---

# 🚀 CI/CD Usage

HTTP method tests are excellent for:

- health checks  
- smoke validation  
- regression APIs  
- deployment gates

Examples:

```text
POST login must work
GET profile must work
PATCH status must work
```

---

# ❌ Common Mistakes

### Only Checking Status Code

Need body validation too.

### Using POST for Everything

Wrong semantics.

### No Cleanup

Leaves polluted data.

### Hardcoded IDs

Unstable tests.

### No Chaining Validation

Create should be verified.

### Shared Test Data

Parallel conflicts.

---

# ✅ Best Practices

- Use correct HTTP method semantics  
- Validate response body  
- Verify data after updates  
- Use reusable session keywords  
- Generate fresh data when possible  
- Keep negative scenarios  
- Use APIs heavily in CI/CD

---

# 🔧 Practical Examples

## GET Health Check

```robotframework
${response}=    GET On Session    api    /health
Should Be Equal As Integers    ${response.status_code}    200
```

## POST Login

```robotframework
${response}=    POST On Session    api    /login    json=${payload}
Should Be Equal As Integers    ${response.status_code}    200
```

## PATCH Status

```robotframework
PATCH On Session    api    /orders/1    json=${payload}
```

---

# 📈 Maturity Model

## Beginner

Calls endpoints + checks status.

## Intermediate

Validates body + chaining.

## Advanced

Reusable framework + negative tests + CI.

## Expert

Contract strategy + environment orchestration + integrated quality gates.

---

# 💡 My Practical Opinion

When teams say:

> “We have API automation.”

I ask:

- Do you validate only status codes?  
- Do you verify updates afterward?  
- Do you cover negative scenarios?  
- Do you use correct HTTP semantics?

Those answers reveal maturity quickly.

---

# 🏁 Final Verdict

Understanding HTTP methods is foundational to strong API automation.

Strong implementation gives:

- realistic API coverage  
- better defect detection  
- faster regression checks  
- clearer business validation  
- stronger pipelines

Weak implementation creates superficial tests.

---

# 📚 What To Learn Next

1. Headers / Auth / Tokens  
2. JSON Validation  
3. Schema Validation  
4. Dynamic Response Handling  
5. API Workflow Chaining

---

## Summary

> Every API call is not equal.  
> Use the right HTTP method, then validate the real outcome.
