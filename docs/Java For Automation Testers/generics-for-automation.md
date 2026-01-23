---
sidebar_position: 6
---
# Generics
## Generics for Automation Testing (Making Framework Utilities Safe)

<!-- ## Priority
AUTOMATION_CORE -->

---

## Context (Why this topic exists NOW)
After using collections, a new problem appears naturally:

- Utility methods start returning `Object`
- Type casting appears everywhere
- Runtime `ClassCastException` occurs
- Framework code becomes unsafe and fragile

Selenium does not care about types.
Java Generics exist to make **automation frameworks type-safe**.

---

## What Selenium Cannot Do (The Gap)
Selenium can:
- return elements
- perform actions

Selenium cannot:
- enforce type safety
- prevent wrong data usage
- protect framework utilities from misuse

This leads to **runtime failures**, not compile-time safety.

---

## What Java Generics Add (The Fix)
Generics allow you to:
- specify the type once
- remove explicit casting
- catch errors at compile time
- write reusable yet safe utilities

In simple words:
> Selenium executes blindly.  
> Generics protect your framework from wrong usage.

---

## What Are Generics (Automation View)
Generics allow classes, methods, and collections
to operate on **specified types**, not raw `Object`.

You already use generics daily:
```java
List<WebElement> elements = driver.findElements(locator);
```

You were using generics even before understanding them.

---

## Generics with Collections (Most Common)

### Automation Problem
Without generics:
```java
List elements = driver.findElements(locator);
WebElement el = (WebElement) elements.get(0);
```

❌ Unsafe and error-prone.

### Java Fix
```java
List<WebElement> elements = driver.findElements(locator);
WebElement el = elements.get(0);
```

✔ Safe  
✔ Readable  
✔ No casting  

---

## Generic Methods (Framework Utilities)

### Automation Problem
Utility methods return `Object`.

```java
public Object getData(String key) {
    return testData.get(key);
}
```

Caller must cast — dangerous.

### Java Fix
```java
public <T> T getData(String key, Class<T> type) {
    return type.cast(testData.get(key));
}
```

Now the caller controls the type safely.

---

## Generic Classes (Framework-Level)

### Automation Problem
Duplicate utility classes for different types.

### Java Fix
```java
public class DataReader<T> {
    private T data;

    public T getData() {
        return data;
    }
}
```

Used in:
- test data readers
- response handlers
- configuration utilities

---

## Bounded Generics (Controlled Flexibility)

### Automation Problem
Framework methods accept wrong object types.

### Java Fix
```java
public <T extends WebElement> void highlight(T element) {
    // highlight logic
}
```

Bounds restrict misuse while keeping flexibility.

---

## When NOT to Use Generics

❌ Over-complicating simple logic  
❌ Using generics where one clear type exists  
❌ Making code unreadable  

Rule:
> Use generics in **framework code**, not simple test logic.

---

## Real Automation Example

```java
public class WaitUtil {

    public static <T> T waitFor(ExpectedCondition<T> condition) {
        return new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(condition);
    }
}
```

This generic method works for:
- elements
- alerts
- titles

Without duplication.

---

## Common Mistakes (Very Common)

- Using raw types (`List list`)
- Casting everywhere
- Overusing generics in test classes
- Writing unreadable generic signatures
- Ignoring compiler warnings

---

## Best Practices (Automation-Approved)

- Always use parameterized collections
- Prefer generics in utilities, not tests
- Let compiler catch mistakes early
- Keep generic signatures simple
- Avoid raw types completely

---

## Interview Notes

- Why generics are needed in Java
- How generics prevent runtime errors
- Difference between raw types and parameterized types
- Where generics are used in automation frameworks
- Why `List<WebElement>` is generic

---

## Summary (Human Understanding)
Selenium does not protect you from wrong usage.
Generics do.

Good generics usage:
- safer frameworks
- fewer runtime surprises
- cleaner automation code
