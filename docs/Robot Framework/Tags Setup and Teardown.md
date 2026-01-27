---
sidebar_position: 11
---

# Tags, Setup and Teardown

Tags and setup/teardown mechanisms help control **execution flow, test selection,
and lifecycle management** in Robot Framework.

They are essential for **CI/CD execution and large test suites**.

---

## Tags in Robot Framework

Tags are labels attached to test cases.

Used for:
- Selective execution
- Grouping tests
- CI/CD pipelines

---

### Defining Tags

```robot
*** Test Cases ***
Valid Login
    [Tags]    smoke    regression
```

---

### Force Tags

Applied to all tests in a suite.

```robot
*** Settings ***
Force Tags    ui
```

---

### Default Tags

Applied only if no tags are defined at test level.

```robot
*** Settings ***
Default Tags    sanity
```

---

## Executing Tests Using Tags

```bash
robot --include smoke tests/
robot --exclude regression tests/
```

Very common in CI pipelines.

---

## Setup and Teardown Concepts

Setup and teardown manage **test lifecycle actions**.

---

### Suite Setup / Teardown

- Runs once per suite
- Used for initialization and cleanup

```robot
Suite Setup       Initialize Suite
Suite Teardown    Cleanup Suite
```

---

### Test Setup / Teardown

- Runs before and after each test case

```robot
Test Setup       Open Application
Test Teardown    Close Application
```

---

## Execution Order (Important)

```
Suite Setup
  ↓
Test Setup
  ↓
Test Case
  ↓
Test Teardown
  ↓
Suite Teardown
```

---

## Best Practices ✅

- Use tags consistently
- Keep setup lightweight
- Always clean up in teardown
- Use tags to control CI execution

---

## Common Mistakes ❌

- Overloading setup with logic
- Forgetting cleanup
- Inconsistent tagging
- Hardcoding execution logic

---

## Key Takeaways

- Tags control execution scope
- Setup/teardown manage lifecycle
- Essential for scalable frameworks
- Critical for CI/CD pipelines
