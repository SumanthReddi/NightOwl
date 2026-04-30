---
sidebar_position: 2
title: Environment Configuration Management
description: Production-ready environment configuration for Robot Framework with hierarchical configs, env overrides, validation, and secure handling.
---

# Robot Framework: Environment Configuration Management

> “Flaky environment tests” are usually configuration problems.

---

## 🎯 Why This Matters

Typical failures come from:

- hardcoded URLs/hosts  
- inconsistent configs across envs  
- missing validation  
- unsafe secret handling  
- brittle env switching in CI  

> Good configuration makes tests portable across environments.

---

# 🧱 Design Principles

```text
1. No hardcoded environment values in tests
2. Single source of truth (config files)
3. Environment variables override config
4. Validate config before tests run
5. Never log secrets
```

---

# 1️⃣ Recommended Setup

```text
resources/
└── config/
    ├── base.yaml
    ├── staging.yaml
    ├── prod.yaml
    └── environment.robot
```

---

# 2️⃣ Hierarchical Configuration

## base.yaml

```yaml
api:
  timeout: 30
  retries: 2

database:
  timeout: 15
  max_connections: 10

browser:
  headless: true
  implicit_wait: 5
```

---

## staging.yaml

```yaml
extends: base

api:
  url: https://staging-api.example.com

database:
  host: staging-db.example.com
  port: 5432
```

---

## production.yaml

```yaml
extends: base

api:
  url: https://api.example.com

database:
  host: prod-db.example.com
  port: 5432
```

---

# 3️⃣ Environment Loader (Robot)

```robotframework
*** Settings ***
Library    OperatingSystem
Library    Collections
Library    YamlLibrary

*** Variables ***
${ENVIRONMENT}    ${ENVIRONMENT:=staging}

*** Keywords ***
Initialize Environment
    ${config}=    Load YAML From File    ${EXECDIR}/resources/config/${ENVIRONMENT}.yaml
    ${config}=    Apply Env Overrides    ${config}
    Validate Config    ${config}
    Set Global Variable    ${CONFIG}    ${config}
```

---

# 4️⃣ Environment Variable Overrides

```robotframework
Apply Env Overrides
    [Arguments]    ${config}

    FOR    ${key}    ${value}    IN    &{config}
        ${env}=    Get Environment Variable    CONFIG_${key.upper()}    default=
        Run Keyword If    '${env}' != ''    Set To Dictionary    ${config}    ${key}    ${env}
    END

    [Return]    ${config}
```

---

# 5️⃣ Configuration Validation

```robotframework
Validate Config
    [Arguments]    ${config}

    Dictionary Should Contain Key    ${config}    api
    Dictionary Should Contain Key    ${config}    database

    Should Match Regexp    ${config['api']['url']}    ^https?://.*
```

---

# 6️⃣ Environment Selection Strategy

Priority order:

```text
1. CI variable (CI_ENVIRONMENT)
2. Command line (--variable ENVIRONMENT)
3. OS env (ENVIRONMENT)
4. Default (staging)
```

---

# 7️⃣ Secure Logging (Mask Secrets)

```robotframework
Mask Secrets
    [Arguments]    ${config}

    ${masked}=    Copy Dictionary    ${config}
    Set To Dictionary    ${masked}    password    ****
    Set To Dictionary    ${masked}    token       ****

    [Return]    ${masked}
```

---

# 8️⃣ CI Usage

```yaml
variables:
  ENVIRONMENT: staging

script:
  - robot --variable ENVIRONMENT:$ENVIRONMENT tests/
```

---

# ⚠️ Common Problems

- Hardcoded URLs in tests  
- Different configs in local vs CI  
- Missing validation  
- Secrets printed in logs  

---

# ❌ Common Mistakes

- storing env values inside test files  
- duplicating config across envs  
- no override mechanism  
- no validation step  

---

# ✅ Best Practices

- use YAML configs per env  
- keep base + override model  
- validate before execution  
- use env vars for CI overrides  
- mask sensitive values  

---

# 📈 Maturity Model

## Beginner
Hardcoded variables.

## Intermediate
Separate config files.

## Advanced
Hierarchical config + overrides.

## Expert
Validated, secure, CI-integrated configuration.

---

# 💡 Practical Insight

When env issues happen:

1. check config source  
2. check override priority  
3. validate values  
4. verify CI variables  

---

# 🏁 Final Verdict

Good configuration gives:

- consistent test behavior  
- easy environment switching  
- safer pipelines  
- fewer false failures  

---

## Summary

> Tests should not care about environment.  
> Configuration should handle that.
