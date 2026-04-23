---
sidebar_position: 5
title: Schema & Contract Validation
description: Learn how to validate API schemas and contracts in Robot Framework using RequestsLibrary with JSON schema checks, versioning, backward compatibility, and production-ready patterns.
---

# Robot Framework: Schema & Contract Validation

> APIs do not fail only when they go down.  
> They also fail when they silently change.

---

## 🎯 Why This Matters

An API can still return:

```text
200 OK
```

and yet break consumers because:

- field removed  
- data type changed  
- nested structure changed  
- required field missing  
- enum values changed  
- backward compatibility broken

UI may still pass. Integrations may fail later.

> Many production incidents are contract failures, not server outages.

---

# 🤖 What Is Schema Validation?

Schema validation verifies that response structure matches an agreed contract.

Example checks:

- field exists  
- type is string / number / array  
- field required  
- allowed values only  
- nested object structure valid

---

# 🤝 What Is Contract Validation?

Contract validation goes beyond schema.

It verifies:

```text
Provider API response still matches consumer expectations
```

Examples:

- mobile app expects field names  
- web app expects role values  
- partner system expects date format

---

# 🧱 Validation Model

```text
Layer 1 → Required Fields
Layer 2 → Data Types
Layer 3 → Structure / Nesting
Layer 4 → Business Constraints
Layer 5 → Version Compatibility
Layer 6 → Consumer Contracts
```

---

# 1️⃣ Basic Schema Validation

Example login response:

```json
{
  "token": "abc",
  "userId": 101,
  "role": "user"
}
```

Robot validation:

```robotframework
${json}=    Set Variable    ${response.json()}

Dictionary Should Contain Key    ${json}    token
Dictionary Should Contain Key    ${json}    userId
Dictionary Should Contain Key    ${json}    role
```

---

# 2️⃣ Type Validation

```robotframework
Should Be Equal As Integers    ${json}[userId]    101
Should Be Equal                ${json}[role]      user
```

Examples:

- id must be integer  
- amount decimal  
- active boolean  
- tags list

---

# 3️⃣ Nested Structure Validation

```json
{
  "user": {
    "id": 101,
    "profile": {
      "country": "IN"
    }
  }
}
```

Robot:

```robotframework
Should Be Equal    ${json}[user][id]                 101
Should Be Equal    ${json}[user][profile][country]  IN
```

---

# 4️⃣ Array Contract Validation

```json
{
  "roles": ["user", "editor"]
}
```

```robotframework
Length Should Be          ${json}[roles]    2
List Should Contain Value ${json}[roles]    user
```

---

# 🏢 Real Project Example

API team changed:

```text
customerId
```

to:

```text
customer_id
```

Backend considered it minor.  
Mobile app parsing failed.

Schema tests would catch this immediately.

---

# 5️⃣ Enum / Allowed Value Validation

```robotframework
Should Contain Any
```

Practical Robot style:

```robotframework
List Should Contain Value    ${ALLOWED_STATUS}    ${json}[status]
```

Where:

```robotframework
@{ALLOWED_STATUS}=    ACTIVE    BLOCKED    CLOSED
```

---

# 6️⃣ JSON Schema File Strategy

Recommended folder structure:

```text
data/schemas/
├── login_response.json
├── customer_response.json
├── order_response.json
```

Then tests validate against schemas using Python helper libraries or custom keywords.

---

# 🔁 Reusable Keyword Example

```robotframework
*** Keywords ***
Validate Login Contract
    [Arguments]    ${response}

    ${json}=    Set Variable    ${response.json()}

    Dictionary Should Contain Key    ${json}    token
    Dictionary Should Contain Key    ${json}    userId
    Should Be Equal    ${json}[role]    user
```

---

# 7️⃣ Versioning Strategy

APIs evolve.

Use:

```text
v1/login
v2/login
```

Maintain separate schemas:

```text
schemas/v1/login.json
schemas/v2/login.json
```

This prevents confusion.

---

# 🔄 Backward Compatibility Checks

When releasing v2:

Validate v1 consumers still work if promised.

Examples:

- old fields preserved  
- optional new fields added  
- type unchanged

---

# 🤝 Consumer Contract Testing

Useful when multiple systems depend on same API.

Example consumers:

- Web UI  
- Android app  
- iOS app  
- Partner integration

Each may rely on specific response fields.

Strong teams validate important consumer expectations.

---

# 🚀 CI/CD Usage

Schema validation is excellent in pipelines:

- after deploy smoke tests  
- API release gates  
- breaking change alerts  
- backward compatibility checks

---

# ⚠️ Parallel Execution Notes

Use isolated test data.

Avoid assuming response order such as:

```text
first item always same customer
```

Prefer IDs or sorted checks.

---

# ❌ Common Mistakes

### Only Checking Status Code

Misses contract drift.

### Exact Full JSON String Comparison

Too brittle.

### No Versioned Schemas

Creates upgrade confusion.

### Ignoring Optional vs Required Fields

Leads to false failures.

### No Consumer Perspective

Provider says OK, consumers break.

### No CI Contract Gates

Breaking changes reach production.

---

# ✅ Best Practices

- Validate required fields  
- Validate types and enums  
- Use reusable schema keywords  
- Store schemas in version control  
- Separate v1 / v2 contracts  
- Run contract checks in CI/CD  
- Focus on important consumer dependencies

---

# 🔧 Practical Examples

## Login Contract

```robotframework
Dictionary Should Contain Key    ${json}    token
Dictionary Should Contain Key    ${json}    userId
```

## Order Status Enum

```robotframework
List Should Contain Value    ${ALLOWED_STATUS}    ${json}[status]
```

## Nested Field

```robotframework
Should Be Equal    ${json}[customer][name]    John
```

---

# 📈 Maturity Model

## Beginner

Checks field presence manually.

## Intermediate

Reusable contract validators.

## Advanced

Versioned schemas + CI checks.

## Expert

Consumer-driven contracts + compatibility governance.

---

# 💡 My Practical Opinion

When teams say:

> “Nothing changed, but integrations broke.”

I inspect response contracts first.

Many outages are silent API shape changes.

---

# 🏁 Final Verdict

Schema and contract validation protect systems from invisible regressions.

Strong implementation gives:

- safer API releases  
- fewer consumer breakages  
- earlier defect detection  
- stable integrations  
- higher deployment confidence

Weak implementation creates hidden risk.

---

# 📚 What To Learn Next

1. Dynamic Response Handling  
2. API Workflow Chaining  
3. Database Validation After APIs  
4. Performance API Testing  
5. CI/CD Release Gates

---

## Summary

> APIs are promises between systems.  
> Schema and contract validation ensure those promises remain true.
