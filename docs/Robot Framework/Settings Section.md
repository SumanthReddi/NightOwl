---
sidebar_position: 7
---

# Settings Section

The **Settings section** controls how Robot Framework tests are configured,
initialized, and cleaned up. It defines **libraries, resources, variables,
and execution hooks**.

This section is critical for **framework structure and lifecycle management**.

---

## Purpose of Settings Section

The Settings section is used to:
- Import libraries
- Import resource files
- Load variable files
- Define setup and teardown
- Control execution behavior

---

## Common Settings Used

### 1. Library

Imports external libraries.

```robot
*** Settings ***
Library    SeleniumLibrary
Library    RequestsLibrary
```

Libraries provide actual automation capabilities.

---

### 2. Resource

Imports reusable keywords and variables.

```robot
*** Settings ***
Resource    common_keywords.robot
```

Used to:
- Share keywords across test suites
- Improve reusability
- Maintain separation of concerns

---

### 3. Variables

Imports external variable files.

```robot
*** Settings ***
Variables    env_variables.robot
```

Commonly used for:
- Environment configs
- URLs
- Credentials

---

## Setup and Teardown

### Suite Setup / Teardown

Executed once per test suite.

```robot
*** Settings ***
Suite Setup       Initialize Test Suite
Suite Teardown    Cleanup Test Suite
```

---

### Test Setup / Teardown

Executed before and after each test case.

```robot
*** Settings ***
Test Setup       Open Application
Test Teardown    Close Application
```

---

## Execution Order (Important)

Execution follows this order:

```
Suite Setup
  ↓
Test Setup
  ↓
Test Case Steps
  ↓
Test Teardown
  ↓
Suite Teardown
```

Understanding this order prevents unexpected failures.

---

## Best Practices ✅

- Keep setup lightweight
- Avoid business logic in setup/teardown
- Use resource files for shared setups
- Clean up properly in teardown

---

## Common Mistakes ❌

- Heavy logic in setup
- Hardcoding values
- Mixing test logic with initialization
- Forgetting cleanup

---

## Key Takeaways

- Settings control test configuration
- Libraries and resources extend functionality
- Setup/Teardown manage lifecycle
- Proper use improves stability and reuse
