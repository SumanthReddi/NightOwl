---
sidebar_position: 9
---

# Control Flow and Error Handling

Control flow and error handling are essential for building **robust and intelligent**
Robot Framework test suites. They allow tests to make decisions, repeat actions,
and handle failures gracefully.

---

## Conditional Execution (IF / ELSE)

Robot Framework (4+) supports native IF/ELSE syntax.

```robot
IF    ${status} == 'PASS'
    Log    Test Passed
ELSE
    Log    Test Failed
END
```

Used for:
- Conditional validations
- Environment-specific behavior

---

## FOR Loops

Used to repeat steps.

```robot
FOR    ${item}    IN    @{ITEMS}
    Log    ${item}
END
```

Common use cases:
- Data-driven steps
- Repetitive validations

---

## WHILE Loops

Used when iteration count is not fixed.

```robot
WHILE    ${retry} < 3
    Run Keyword And Ignore Error    Some Keyword
    ${retry}    Set Variable    ${retry + 1}
END
```

Use carefully to avoid infinite loops.

---

## Run Keyword Variations

### Run Keyword If
Executes keyword conditionally.

### Run Keywords
Executes multiple keywords sequentially.

### Run Keyword And Continue On Failure
Allows execution to continue even after failure.

### Run Keyword And Ignore Error
Captures failure without stopping execution.

---

## TRY / EXCEPT / FINALLY

Robot Framework supports structured error handling.

```robot
TRY
    Some Keyword
EXCEPT
    Log    Error occurred
FINALLY
    Cleanup Keyword
END
```

Used for:
- Graceful recovery
- Cleanup actions
- Controlled failures

---

## Failure Handling Strategies

- Fail fast for critical errors
- Continue on failure for validations
- Log meaningful messages
- Avoid hiding real defects

---

## Common Mistakes ❌

- Overusing Continue On Failure
- Ignoring errors blindly
- Complex logic inside test cases
- Infinite loops

---

## Best Practices ✅

- Keep logic inside keywords
- Use TRY/EXCEPT sparingly
- Log failures clearly
- Design for readability

---

## Key Takeaways

- Control flow enables intelligent tests
- Error handling improves stability
- Robot supports modern constructs
- Clean design prevents flaky tests
