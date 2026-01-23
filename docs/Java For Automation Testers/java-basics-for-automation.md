---
sidebar_position: 1
---

# Java Basics
## Java Basics for Automation Testing

<!-- ## Priority
AUTOMATION_CORE -->

---

## Context (Why this topic comes first)
Automation tests are Java programs.
Before OOP, frameworks, or Selenium, you must understand how Java code:
- executes
- makes decisions
- controls flow

Weak basics result in flaky tests and unreadable logic.

---

## What are Java Basics (Automation View)
Java basics cover the minimum language constructs required to:
- write test logic
- control execution flow
- validate conditions
- handle retries and waits

This is not academic Java — only what automation engineers actually use.

---

## Java Execution Model (Practical)
- **JDK** → used by automation engineers to compile and run tests
- **JVM** → executes tests locally and in CI pipelines
- **JRE** → runtime environment only

CI failures often occur due to:
- wrong JDK version
- incompatible Java level

---

## Data Types You Actually Use

| Type | Automation Usage |
|----|-----------------|
| String | UI text, API response |
| boolean | validations |
| int | loops, retries |
| long | waits, timestamps |

Avoid unnecessary primitives unless required.

---

## Variables & Constants

```java
String expectedTitle = "Home Page";
boolean isVisible = false;
final int MAX_RETRY = 3;
```

Use `final` for constants to avoid accidental changes.

---

## Operators (Automation-Relevant)

- Relational: `==`, `!=`, `>`, `<`
- Logical: `&&`, `||`, `!`

```java
if (isLoggedIn && isDashboardVisible) {
    // validation pass
}
```

---

## Control Statements (CRITICAL)

### if–else (Validations)
```java
if (element.isDisplayed()) {
    element.click();
} else {
    throw new RuntimeException("Element not visible");
}
```

### Loops (Retries & Polling)
```java
for (int i = 0; i < MAX_RETRY; i++) {
    if (isElementPresent(locator)) {
        break;
    }
}
```

Never use infinite loops in automation.

---

## Methods (Test Logic Building)

```java
public boolean isLoginSuccessful() {
    return dashboard.isDisplayed();
}
```

Keep methods:
- small
- reusable
- readable

---

## Common Mistakes (Real Projects)

- Using `==` instead of `equals()` for String comparison
- Hardcoding values
- Overusing try-catch for flow control
- Deep nested if–else blocks
- Ignoring boolean return values

---

## Best Practices

- Prefer boolean methods for validations
- Use constants instead of magic numbers
- Fail fast with clear error messages
- Keep logic outside test methods
- Write readable conditions

---

## Interview Notes

- Difference between JDK, JRE, JVM
- `==` vs `equals()`
- Why Java is platform independent
- Why booleans are preferred in automation
- How loops are used in retries

---

## Summary
Automation engineers do not write scripts.
They write Java programs that control browsers and APIs.
Strong basics lead to stable and maintainable automation.
