---
sidebar_position: 6
---

# Variables in Robot Framework

Variables in Robot Framework help make tests **dynamic, reusable, and maintainable**.
They allow you to avoid hardcoding values and manage test data efficiently.

---

## Why Variables Are Important

Without variables:
- Tests become hard to maintain
- Data changes require code changes
- Reuse becomes difficult

With variables:
- Tests are flexible
- Configuration is centralized
- CI/CD execution is easier

---

## Types of Variables

Robot Framework supports three main variable types.

### 1. Scalar Variables

- Hold a single value
- Syntax: `${variable}`

```robot
${URL}    https://example.com
${BROWSER}    chrome
```

---

### 2. List Variables

- Hold multiple values
- Syntax: `@{list}`

```robot
@{CREDENTIALS}    admin    secret
```

Accessing list values:

```robot
${CREDENTIALS}[0]
```

---

### 3. Dictionary Variables

- Store key-value pairs
- Syntax: `&{dict}`

```robot
&{USER}    username=admin    password=secret
```

Accessing dictionary values:

```robot
${USER}[username]
```

---

## Variable Scope

Robot Framework variables have different scopes.

### Test Scope
- Available only within a single test case

### Suite Scope
- Available across all tests in a suite

### Global Scope
- Available across all suites

Choosing correct scope avoids data leakage issues.

---

## Variable Files

Variables can be stored in:
- `.robot` variable files
- Python files
- YAML / JSON files

Used for:
- Environment data
- Credentials
- URLs
- Config values

---

## Overriding Variables at Runtime

Variables can be overridden during execution:

```bash
robot --variable BROWSER:chrome tests/
```

This is commonly used in CI/CD pipelines.

---

## Common Mistakes ❌

- Hardcoding values
- Using global variables unnecessarily
- Mixing test data with logic

---

## Best Practices ✅

- Externalize environment-specific data
- Use dictionaries for structured data
- Limit global variable usage
- Use meaningful variable names

---

## Key Takeaways

- Variables make tests flexible
- Three types: scalar, list, dictionary
- Scope control is critical
- Variable files improve maintainability

---

## What’s Next?

👉 **Settings Section**
