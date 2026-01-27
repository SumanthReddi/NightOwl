---
sidebar_position: 10
---

# Assertions and Validation

Assertions and validations ensure that your automation verifies **expected behavior**
correctly. Robot Framework provides clear, readable validation keywords instead of
traditional programming assertions.

---

## Assertion Philosophy in Robot Framework

Robot Framework emphasizes:
- Readability
- Clear failure messages
- Controlled execution flow

Assertions are implemented using **keywords**, not code statements.

---

## Common Validation Keywords

### Should Be Equal
Validates exact equality.

```robot
Should Be Equal    ${actual}    ${expected}
```

---

### Should Contain
Checks if a value contains another value.

```robot
Should Contain    ${response}    success
```

---

### Should Be True / Should Be False

```robot
Should Be True    ${condition}
Should Be False   ${condition}
```

---

## String-Specific Validations

- Should Be Equal As Strings
- Should Contain Any
- Should Match Regexp

Used heavily in:
- API response validation
- UI text checks

---

## Hard vs Soft Validation (Robot Style)

### Hard Validation
- Test stops on failure
- Default behavior

### Soft Validation
- Test continues after failure

Example:

```robot
Run Keyword And Continue On Failure    Should Be Equal    ${a}    ${b}
```

Used when:
- Multiple validations are needed
- Reporting all failures is important

---

## Validation Placement Best Practices

- Place validations inside keywords
- Avoid cluttering test cases
- Keep intent readable

---

## Common Mistakes ❌

- Overusing Continue On Failure
- Hiding failures
- Poor assertion messages
- Validating implementation details

---

## Best Practices ✅

- Validate business outcomes
- Use meaningful messages
- Fail fast for critical issues
- Group validations logically

---

## Key Takeaways

- Robot uses keyword-based assertions
- Many built-in validation keywords exist
- Hard and soft validation patterns are supported
- Proper validation improves trust in automation
