---
sidebar_position: 1
title: API Testing with RequestsLibrary
description: Learn how to build reliable API automation in Robot Framework using RequestsLibrary with sessions, auth, validation, schema checks, chaining, and CI-ready practices.
---

# Robot Framework: API Testing with RequestsLibrary

> Strong API automation is not just sending requests.  
> It is validating behavior, contracts, security, and business outcomes.

---

## 🎯 Why API Testing Matters

Modern systems rely heavily on APIs.

Examples:

- login services  
- payments  
- customer onboarding  
- notifications  
- reporting  
- integrations between systems

UI tests may verify surface behavior, but APIs often expose the real application logic.

> Many critical defects are easier, faster, and more reliably detected at API level than UI level.

---

# 🤖 What Is RequestsLibrary?

RequestsLibrary is the most common Robot Framework library for HTTP/API automation.

It is built on Python Requests and supports:

- GET / POST / PUT / PATCH / DELETE  
- headers  
- authentication  
- query parameters  
- JSON payloads  
- sessions  
- response validation

```robotframework
*** Settings ***
Library    RequestsLibrary
```

---

# 🧱 Production API Testing Model

```text
Layer 1 → Request Foundation
Layer 2 → Authentication Strategy
Layer 3 → Response Validation
Layer 4 → Contract / Schema Validation
Layer 5 → Workflow Chaining
Layer 6 → Negative & Security Testing
```

---

# 1️⃣ Request Foundation

## Create Session Once

```robotframework
Create Session    api    ${BASE_URL}
```

Then reuse:

```robotframework
${response}=    GET On Session     api    /users/1
${response}=    POST On Session    api    /users    json=${payload}
```

Benefits:

- cleaner tests  
- shared config  
- easier auth reuse

---

## HTTP Methods Overview

| Method | Typical Use |
|---|---|
| GET | Retrieve data |
| POST | Create data |
| PUT | Full update |
| PATCH | Partial update |
| DELETE | Remove data |

---

# 2️⃣ Authentication Strategy

Common auth models:

- Basic Auth  
- Bearer Token  
- OAuth2  
- API Key

## Bearer Token Example

```robotframework
&{headers}=    Create Dictionary
...    Authorization=Bearer ${TOKEN}
...    Content-Type=application/json

${response}=    GET On Session    api    /profile    headers=${headers}
```

---

## Better Pattern: Centralized Auth Keyword

```robotframework
*** Keywords ***
Get Auth Headers
    &{headers}=    Create Dictionary
    ...    Authorization=Bearer ${TOKEN}
    ...    Content-Type=application/json
    [Return]    ${headers}
```

Reuse everywhere.

---

# 3️⃣ Response Validation

Many weak tests only check status code.

## Weak

```robotframework
Should Be Equal As Integers    ${response.status_code}    200
```

## Better

```robotframework
Should Be Equal As Integers    ${response.status_code}    200

${json}=    Set Variable    ${response.json()}
Dictionary Should Contain Key    ${json}    token
Dictionary Should Contain Key    ${json}    userId
Should Not Be Empty    ${json}[token]
```

Validate both protocol and data.

---

## Common Response Checks

- status code  
- headers  
- response body fields  
- business values  
- response time

---

# ⏱️ Performance Validation

```robotframework
Should Be True    ${response.elapsed.total_seconds()} < 2
```

Useful for critical APIs.

---

# 4️⃣ Contract / Schema Validation

Schema checks catch breaking changes early.

Example expectations:

```text
login response must contain:
token
userId
roles
expiresAt
```

## Practical Pattern

```robotframework
${json}=    Set Variable    ${response.json()}
Dictionary Should Contain Key    ${json}    token
Dictionary Should Contain Key    ${json}    userId
Dictionary Should Contain Key    ${json}    roles
```

For advanced setups, use JSON schema libraries.

---

# 5️⃣ API Workflow Chaining

Real systems use multiple dependent APIs.

Example:

```text
Create User → Login → Create Order → Pay Order → Verify Status
```

## Example

```robotframework
${user}=       POST On Session    api    /users      json=${user_payload}
${user_id}=    Set Variable       ${user.json()}[id]

${login}=      POST On Session    api    /login      json=${login_payload}
${token}=      Set Variable       ${login.json()}[token]

${order}=      POST On Session    api    /orders     json=${order_payload}
${order_id}=   Set Variable       ${order.json()}[id]
```

This is where API automation becomes powerful.

---

# 6️⃣ Negative & Security Testing

Positive tests are not enough.

## Invalid Credentials

```robotframework
${response}=    POST On Session    api    /login    json=${bad_payload}
Should Be Equal As Integers    ${response.status_code}    401
```

## Missing Required Field

```robotframework
Should Be Equal As Integers    ${response.status_code}    400
```

## Unauthorized Access

```robotframework
Should Be Equal As Integers    ${response.status_code}    403
```

## Basic Security Inputs

- SQL injection style strings  
- script tags  
- oversized payloads  
- invalid data types

---

# 🏢 Real Project Example

UI onboarding flow took several minutes and often failed late.

API layer testing validated:

- account creation  
- decision response  
- data persistence  
- rule outcomes

Result:

- faster feedback  
- easier debugging  
- better regression confidence

---

# 📁 Recommended Framework Structure

```text
project/
├── tests/
│   ├── smoke/
│   ├── regression/
│   └── integration/
│
├── resources/
│   ├── api/
│   │   ├── auth.robot
│   │   ├── users.robot
│   │   ├── orders.robot
│   │   └── common.robot
│
├── data/
│   ├── payloads/
│   └── schemas/
│
└── reports/
```

---

# 🔁 Reusable Keyword Example

```robotframework
*** Keywords ***
Create User
    [Arguments]    ${payload}

    ${response}=    POST On Session    api    /users    json=${payload}
    Should Be Equal As Integers    ${response.status_code}    201
    [Return]    ${response.json()}
```

---

# ⚙️ Environment Strategy

Use variables for environments:

```text
qa
uat
stage
prod-like
```

Run with:

```bash
robot --variable BASE_URL:https://qa-api.example.com tests/
```

Avoid hardcoding URLs.

---

# 🚀 CI/CD Integration

API suites are excellent for pipelines because they are:

- faster than UI  
- stable when designed well  
- parallel-friendly  
- good for smoke checks

Examples:

- health checks after deploy  
- login validation  
- payment smoke test  
- contract checks

---

# ❌ Common Mistakes

### Only Checking 200 Status

Misses broken data.

### Hardcoded Tokens

Creates failures and security risk.

### Shared Dirty Test Data

Causes collisions.

### No Negative Tests

Misses important defects.

### Massive End-to-End Only Tests

Hard to debug.

### No Cleanup

Leaves polluted environments.

---

# ✅ Best Practices

- Centralize sessions and auth  
- Validate body + business rules  
- Use reusable keywords  
- Keep test data isolated  
- Add negative scenarios  
- Use API tests heavily in CI/CD  
- Separate smoke and regression packs

---

# 🔧 Practical Examples

## Health Check

```robotframework
${response}=    GET On Session    api    /health
Should Be Equal As Integers    ${response.status_code}    200
```

## Create Customer

```robotframework
${response}=    POST On Session    api    /customers    json=${payload}
Should Be Equal As Integers    ${response.status_code}    201
```

## Validate JSON Field

```robotframework
Should Be Equal    ${response.json()}[status]    ACTIVE
```

---

# 📈 Maturity Model

## Beginner

Simple GET/POST + status checks.

## Intermediate

Reusable keywords + auth + body validation.

## Advanced

Schema checks + chaining + CI integration.

## Expert

Contract testing + environment orchestration + enterprise API strategy.

---

# 💡 My Practical Opinion

When teams say:

> “UI regression is slow and hard to trust.”

I usually recommend expanding API coverage.

Because many business validations are better tested there.

---

# 🏁 Final Verdict

API testing with RequestsLibrary is one of the highest ROI automation investments.

Strong implementation gives:

- fast feedback  
- reliable regression checks  
- easier debugging  
- strong CI/CD gates  
- reduced UI dependency

Poor implementation creates shallow tests.

---

# 📚 What To Learn Next

1. Database Validation  
2. Dynamic Response Handling  
3. Schema Validation  
4. CI/CD API Smoke Gates  
5. Hybrid UI + API Framework Design

---

## Summary

> UI tests show what users see.  
> API tests verify how the system truly behaves.  
> Strong automation needs both.
