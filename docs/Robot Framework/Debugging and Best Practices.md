---
sidebar_position: 19
---

# Debugging and Best Practices

Debugging skills and best practices are what separate **stable automation frameworks**
from fragile ones. This section focuses on **real-world failure handling** in Robot Framework.

---

## Common Robot Framework Errors

### Keyword Not Found
Caused by:
- Missing library/resource import
- Typo in keyword name
- Wrong keyword scope

Fix:
- Verify imports
- Use auto-complete in IDE

---

### Variable Not Found
Caused by:
- Incorrect variable name
- Wrong variable scope
- Missing variable file

Fix:
- Check scope
- Validate variable files

---

### Timeout Errors
Caused by:
- Application slowness
- Missing waits
- Incorrect locators

Fix:
- Use explicit waits
- Avoid Sleep
- Improve locator strategy

---

## Debugging Techniques

### Use Log Keyword
```robot
Log    Value is ${value}
```

### Increase Log Level
```bash
robot --loglevel DEBUG tests/
```

### Dry Run
```bash
robot --dryrun tests/
```

---

## Flaky Test Control

Flaky tests usually occur due to:
- Timing issues
- Shared state
- Parallel execution conflicts

Solutions:
- Explicit waits
- Test isolation
- Controlled parallelism

---

## Framework Best Practices

- Keep test cases readable
- Push logic into keywords
- Separate UI, API, DB layers
- Avoid global variables
- Keep resource files clean

---

## CI/CD Stability Tips

- Run smoke tests first
- Fail fast on critical failures
- Track flaky tests
- Monitor execution trends

---

## Common Anti-Patterns ❌

- Overusing Continue On Failure
- Ignoring test failures
- Hardcoding environment data
- Large, unreadable test cases

---

## Key Takeaways

- Debugging is a core automation skill
- Good practices prevent flaky tests
- Clean frameworks scale better
- Stability builds trust