---
sidebar_position: 4
title: Response Validation
description: Learn how to validate API responses in Robot Framework using RequestsLibrary with status checks, JSON assertions, business rules, schemas, performance, and production-ready patterns.
---

# Robot Framework: Response Validation

> Sending requests is easy.  
> Knowing whether the system behaved correctly is the real skill.

---

## 🎯 Why This Matters

Many API test suites only validate:

```text
Status Code = 200
```

That often misses real defects such as:

- wrong data returned  
- missing fields  
- invalid business logic  
- partial failures hidden inside success responses  
- slow performance  
- incorrect error handling

> A passing status code does not always mean a passing system.

---

# 🤖 What Is Response Validation?

Response validation means verifying that the API response is correct from multiple angles:

```text
1. Protocol correctness
2. Data correctness
3. Business correctness
4. Contract correctness
5. Performance correctness
```

Strong frameworks validate all five.

---

# 🧱 Production Validation Model

```text
Layer 1 → Status Code Validation
Layer 2 → Headers Validation
Layer 3 → Body / JSON Validation
Layer 4 → Business Rule Validation
Layer 5 → Schema / Contract Validation
Layer 6 → Performance Validation
```

---

# 1️⃣ Status Code Validation

Start with protocol correctness.

```robotframework
${response}=    GET On Session    api    /users/101
Should Be Equal As Integers    ${response.status_code}    200
```

Common codes:

| Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Server Error |

---

# 2️⃣ Headers Validation

Useful for security and format checks.

```robotframework
Dictionary Should Contain Key    ${response.headers}    Content-Type
Should Contain    ${response.headers}[Content-Type]    application/json
```

Other useful headers:

- Cache-Control  
- Authorization rules  
- Correlation IDs  
- Security headers

---

# 3️⃣ Body / JSON Validation

Validate actual returned data.

```robotframework
${json}=    Set Variable    ${response.json()}

Should Be Equal    ${json}[id]      101
Should Be Equal    ${json}[status]  ACTIVE
Should Not Be Empty    ${json}[name]
```

---

## Field Presence Validation

```robotframework
Dictionary Should Contain Key    ${json}    id
Dictionary Should Contain Key    ${json}    email
Dictionary Should Contain Key    ${json}    role
```

---

## Collection Validation

```robotframework
Length Should Be    ${json}[items]    3
```

---

# 4️⃣ Business Rule Validation

This is where mature automation stands out.

Example login response:

```json
{
  "role": "user",
  "expiresIn": 3600
}
```

Validation:

```robotframework
Should Be Equal    ${json}[role]    user
Should Be True     ${json}[expiresIn] > 0
```

Examples of business checks:

- account status active  
- credit limit positive  
- order total matches line items  
- roles assigned correctly  
- token expiry valid

---

# 🏢 Real Project Example

API returned:

```text
200 OK
```

But customer status was:

```text
BLOCKED
```

UI later failed checkout.

Status-only tests passed.  
Business-rule tests failed correctly.

---

# 5️⃣ Error Response Validation

Negative scenarios matter.

```robotframework
${response}=    POST On Session    api    /login    json=${bad_payload}
Should Be Equal As Integers    ${response.status_code}    401
```

Then validate error body:

```robotframework
${json}=    Set Variable    ${response.json()}
Should Be Equal    ${json}[errorCode]    INVALID_CREDENTIALS
Should Not Be Empty    ${json}[message]
```

---

# 6️⃣ Schema / Contract Validation

Protects against structure changes.

Expected:

```text
login response must contain:
token
userId
role
expiresAt
```

Simple pattern:

```robotframework
Dictionary Should Contain Key    ${json}    token
Dictionary Should Contain Key    ${json}    userId
Dictionary Should Contain Key    ${json}    role
```

Advanced teams use JSON Schema validation libraries.

---

# 7️⃣ Performance Validation

Useful for critical APIs.

```robotframework
Should Be True    ${response.elapsed.total_seconds()} < 2
```

Examples:

- login under 2 sec  
- search under 3 sec  
- health check under 1 sec

---

# 🔁 Chained Validation Pattern

Create user → verify retrieval.

```robotframework
${create}=    POST On Session    api    /users    json=${payload}
${id}=        Set Variable    ${create.json()}[id]

${get}=       GET On Session    api    /users/${id}
Should Be Equal As Integers    ${get.status_code}    200
```

This validates persistence too.

---

# 📁 Reusable Validation Keywords

```robotframework
*** Keywords ***
Validate Success JSON
    [Arguments]    ${response}

    Should Be Equal As Integers    ${response.status_code}    200
    Should Contain    ${response.headers}[Content-Type]    application/json
```

---

## Login Validator Example

```robotframework
Validate Login Response
    [Arguments]    ${response}

    ${json}=    Set Variable    ${response.json()}

    Should Be Equal As Integers    ${response.status_code}    200
    Dictionary Should Contain Key    ${json}    token
    Should Be Equal    ${json}[role]    user
```

---

# 🚀 CI/CD Usage

Response validation is excellent for pipelines:

- smoke APIs after deploy  
- contract checks  
- login validation  
- payment endpoint checks

Strong validations catch regressions early.

---

# ⚠️ Parallel Execution Notes

Avoid shared assumptions like:

```text
first record always belongs to my test
```

Use unique IDs and isolated data.

---

# ❌ Common Mistakes

### Only Checking Status Code

Most common weakness.

### Exact Full JSON Match for Dynamic Data

Brittle when timestamps/IDs change.

### No Negative Testing

Misses important failures.

### Ignoring Performance

Slow APIs slip into release.

### Hardcoded Shared IDs

Creates unstable tests.

### No Reusable Validators

Duplication grows fast.

---

# ✅ Best Practices

- Validate status + body + business logic  
- Reuse common validators  
- Add negative scenarios  
- Validate important fields, not random noise  
- Use schema checks for contracts  
- Include performance thresholds where valuable  
- Use dynamic data for isolated runs

---

# 🔧 Practical Examples

## Health Check

```robotframework
${response}=    GET On Session    api    /health
Should Be Equal As Integers    ${response.status_code}    200
```

## Login

```robotframework
${response}=    POST On Session    api    /login    json=${payload}
Dictionary Should Contain Key    ${response.json()}    token
```

## Unauthorized

```robotframework
Should Be Equal As Integers    ${response.status_code}    401
```

---

# 📈 Maturity Model

## Beginner

Status code only.

## Intermediate

Status + body fields.

## Advanced

Business rules + reusable validators + negative tests.

## Expert

Schema contracts + performance gates + enterprise quality checks.

---

# 💡 My Practical Opinion

When teams say:

> “Our API tests pass but bugs still escape.”

I inspect validation depth first.

Usually tests verify transport success, not business correctness.

---

# 🏁 Final Verdict

Response validation determines whether API automation is trusted or superficial.

Strong validation gives:

- better defect detection  
- fewer false passes  
- stronger pipelines  
- clearer debugging  
- real confidence in releases

Weak validation creates illusion of quality.

---

# 📚 What To Learn Next

1. JSON Validation  
2. Schema Validation  
3. Dynamic Response Handling  
4. API Workflow Chaining  
5. Database Validation After APIs

---

## Summary

> A request succeeding is not enough.  
> The returned result must also be correct.
