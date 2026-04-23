---
sidebar_position: 3
title: Authentication & Token Management
description: Learn how to handle API authentication securely in Robot Framework using RequestsLibrary with bearer tokens, OAuth, sessions, refresh logic, and CI/CD-ready practices.
---

# Robot Framework: Authentication & Token Management

> Many unstable API tests are not API failures.  
> They are authentication handling failures.

---

## 🎯 Why This Matters

Modern APIs commonly protect endpoints using:

- Bearer tokens  
- OAuth 2.0  
- API keys  
- Basic Auth  
- Session cookies  
- Role-based access control

Weak token handling causes:

- random 401 errors  
- expired sessions  
- hardcoded secrets  
- pipeline failures  
- role permission confusion  
- environment issues

> In many projects, “flaky API tests” really means poor auth design.

---

# 🤖 What Is Authentication Management?

Authentication management means obtaining, storing, refreshing, and using credentials safely across test execution.

Good frameworks treat auth as a reusable service.

Not this:

```robotframework
${TOKEN}=    abc123hardcodedtoken
```

But this:

```robotframework
${TOKEN}=    Get Access Token
```

---

# 🧱 Production Authentication Model

```text
Layer 1 → Auth Method Selection
Layer 2 → Token Acquisition
Layer 3 → Token Lifecycle Management
Layer 4 → Role / User Context
Layer 5 → Secret Storage
Layer 6 → CI/CD Reliability
```

---

# 1️⃣ Common Authentication Types

| Type | Common Use Case |
|---|---|
| Basic Auth | Internal / legacy APIs |
| Bearer Token | Modern REST APIs |
| OAuth 2.0 | External integrations |
| API Key | Service APIs |
| Cookie Session | Web backend APIs |

---

# 2️⃣ Bearer Token Example

Most common modern pattern.

```robotframework
*** Settings ***
Library    RequestsLibrary
```

```robotframework
Create Session    api    ${BASE_URL}

&{headers}=    Create Dictionary
...    Authorization=Bearer ${TOKEN}
...    Content-Type=application/json

${response}=    GET On Session    api    /profile    headers=${headers}
```

---

# 3️⃣ Token Acquisition Flow

Best practice: get token dynamically.

```robotframework
*** Keywords ***
Get Access Token
    &{payload}=    Create Dictionary
    ...    username=${USERNAME}
    ...    password=${PASSWORD}

    ${response}=    POST On Session    api    /login    json=${payload}
    Should Be Equal As Integers    ${response.status_code}    200

    [Return]    ${response.json()}[token]
```

Then reuse:

```robotframework
${TOKEN}=    Get Access Token
```

---

# 4️⃣ Token Lifecycle Management

Hardcoded tokens eventually expire.

Better pattern:

```robotframework
Get Valid Token
    ${token}=    Get Cached Token
    Run Keyword If    '${token}' == ''    ${token}=    Get Access Token
    [Return]    ${token}
```

Advanced frameworks also refresh based on expiry time.

---

# 🔁 Refresh Token Strategy

Useful for long suites.

```text
Login → Access Token expires → Use Refresh Token → Continue
```

Typical pattern:

```robotframework
${new_token}=    Refresh Access Token
```

Use when APIs support refresh endpoints.

---

# 🏢 Real Project Example

Nightly API suite failed after 45 minutes.

Reason:

```text
Token lifetime = 30 minutes
```

Solution:

- token refresh logic  
- per-suite auth handling  
- session reuse

Failures disappeared.

---

# 5️⃣ Role-Based Authentication

Different users need different permissions.

Examples:

- admin  
- standard user  
- read-only user  
- guest

Reusable pattern:

```robotframework
Get Token For Role    admin
Get Token For Role    user
```

---

## Example

```robotframework
*** Keywords ***
Get Token For Role
    [Arguments]    ${role}

    Run Keyword If    '${role}' == 'admin'
    ...    [Return]    ${ADMIN_TOKEN}
```

(Real frameworks call login APIs dynamically.)

---

# 6️⃣ Secret Management

Never hardcode credentials in files.

❌ Bad:

```robotframework
${PASSWORD}=    Welcome123
```

✅ Better:

```robotframework
${PASSWORD}=    %{API_PASSWORD}
```

Environment variable usage:

```bash
export API_PASSWORD=secret
```

---

## Better Enterprise Options

- Vault systems  
- CI secret variables  
- GitLab masked variables  
- Jenkins credentials store  
- GitHub Actions secrets

---

# 7️⃣ Session Reuse

Avoid repeated login calls.

```robotframework
Create Session    api    ${BASE_URL}
${TOKEN}=    Get Access Token
```

Reuse same session + token across related tests.

This improves speed and reduces auth load.

---

# 🌐 Multi-Environment Strategy

Different environments may have:

- different URLs  
- different users  
- different auth providers

Use variables:

```bash
robot --variable ENV:qa
robot --variable ENV:uat
```

Map credentials externally.

---

# 📁 Recommended Structure

```text
resources/api/
├── auth.robot
├── users.robot
├── orders.robot
└── common.robot
```

Example:

```robotframework
Get Access Token
Get Headers
Get Token For Role
Refresh Token
```

---

# 🔐 Reusable Header Keyword

```robotframework
*** Keywords ***
Get Auth Headers
    ${token}=    Get Valid Token

    &{headers}=    Create Dictionary
    ...    Authorization=Bearer ${token}
    ...    Content-Type=application/json

    [Return]    ${headers}
```

Used everywhere.

---

# 🚀 CI/CD Integration

Authentication often breaks pipelines if unmanaged.

Use:

- secret variables  
- environment configs  
- token generation at runtime  
- no hardcoded local creds

Smoke check example:

```text
Login API returns token
Protected API returns 200
```

---

# ⚠️ Parallel Execution Notes

With Pabot or parallel pipelines:

Avoid:

```text
One shared user for all workers
```

Better:

```text
Multiple users / token contexts
```

Prevents lockouts and conflicts.

---

# ❌ Common Mistakes

### Hardcoded Tokens

Expire unexpectedly.

### Credentials in Git Repo

Security risk.

### Logging Sensitive Tokens

Never print tokens in logs.

### No Role Coverage

Misses authorization defects.

### Logging In Before Every Test

Slow and noisy.

### Shared User for Parallel Runs

Conflicts happen.

---

# ✅ Best Practices

- Generate tokens dynamically  
- Store secrets outside code  
- Reuse sessions wisely  
- Cover multiple roles  
- Support token refresh for long runs  
- Keep auth keywords centralized  
- Use CI secret management

---

# 🔧 Practical Examples

## Login + Token

```robotframework
${TOKEN}=    Get Access Token
```

## Protected GET

```robotframework
${headers}=    Get Auth Headers
GET On Session    api    /profile    headers=${headers}
```

## Unauthorized Validation

```robotframework
GET On Session    api    /profile
Should Be Equal As Integers    ${response.status_code}    401
```

---

# 📈 Maturity Model

## Beginner

Hardcoded token.

## Intermediate

Dynamic login + reusable headers.

## Advanced

Refresh tokens + role support + CI secrets.

## Expert

Enterprise auth orchestration across environments and pipelines.

---

# 💡 My Practical Opinion

When teams say:

> “API tests randomly return 401.”

I inspect:

- token expiry  
- wrong environment creds  
- shared users  
- stale sessions  
- missing refresh logic

Usually auth handling is the issue.

---

# 🏁 Final Verdict

Authentication is foundational to reliable API automation.

Strong implementation gives:

- stable protected endpoint tests  
- safer pipelines  
- realistic role validation  
- fewer false failures  
- scalable execution

Weak implementation creates noise and security risk.

---

# 📚 What To Learn Next

1. JSON Validation  
2. Schema Validation  
3. Dynamic Response Handling  
4. API Workflow Chaining  
5. CI/CD Secret Management

---

## Summary

> APIs protect access through authentication.  
> Mature automation frameworks treat authentication as an engineered system, not a copied token string.
