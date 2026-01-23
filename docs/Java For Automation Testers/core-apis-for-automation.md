---
sidebar_position: 3
---
# Core Java API
## Core Java APIs for Automation Testing (Strings, Arrays, Wrappers)

<!-- ## Priority
AUTOMATION_CORE -->

---

## Context (Why this comes now)
After structuring tests with OOP, the next pain appears:
- Text validations fail unexpectedly
- Comparisons behave strangely
- Handling multiple values feels clumsy

Selenium can **read data**, but it does not **understand or interpret data**.
Core Java APIs give meaning to what Selenium reads.

---

## What Selenium Cannot Do (The Gap)
Selenium can:
- fetch text from UI
- return values from elements
- give lists of elements

Selenium cannot:
- compare text correctly
- understand immutability
- safely handle null values
- convert values reliably

This leads to flaky assertions.

---

## What Java Core APIs Add (The Fix)
Java provides:
- `String` → reliable text handling
- Arrays → basic grouping
- Wrapper classes → safe conversions and null handling

In simple words:
> Selenium reads data.  
> Java understands and validates data.

---

## Strings (MOST IMPORTANT)

### Automation Problem
Text validations fail even when text looks the same.

### Root Cause
Strings are **immutable** and must be compared correctly.

---

### Correct String Comparison

❌ Wrong
```java
if (actualText == expectedText) {
    // unreliable
}
```

✅ Correct
```java
if (actualText.equals(expectedText)) {
    // reliable
}
```

### Case-insensitive comparison
```java
actualText.equalsIgnoreCase(expectedText);
```

---

### Commonly Used String Methods (Automation)

```java
actualText.contains("Success");
actualText.trim();
actualText.replace("$", "");
actualText.split(",");
```

These are used heavily in:
- UI validation
- API response checks
- Amount and status validation

---

## Arrays (Basic Usage Only)

### Automation Problem
Handling fixed-size sets of values.

### Java Fix
```java
String[] supportedBrowsers = {"chrome", "edge", "firefox"};
```

Use arrays only when:
- size is fixed
- structure is simple

For dynamic data, use collections (next stage).

---

## Wrapper Classes (Hidden but Critical)

### Automation Problem
Primitive types cannot handle `null`.

Selenium often returns:
- missing values
- optional values

### Java Fix
Use wrapper classes.

```java
Integer retryCount = null;
Boolean isVisible = Boolean.TRUE;
```

Wrappers allow:
- null safety
- conversions
- utility methods

---

### Autoboxing & Unboxing (Be Aware)

```java
int count = Integer.valueOf("5"); // unboxing
```

Useful when reading data from:
- properties files
- JSON
- Excel

---

## Real Automation Example

```java
String priceText = priceElement.getText(); // "$1,200"
priceText = priceText.replace("$", "").replace(",", "");

int price = Integer.parseInt(priceText);

Assert.assertTrue(price > 1000);
```

Selenium only fetched text.
Java made the validation possible.

---

## Common Mistakes (Seen in Projects)

- Using `==` for String comparison
- Ignoring whitespace and casing
- Parsing numbers without cleaning text
- Overusing arrays for dynamic data
- Ignoring null checks

---

## Best Practices

- Always use `equals()` for String comparison
- Clean UI text before validation
- Prefer collections over arrays for dynamic data
- Use wrapper classes when null is possible
- Validate meaning, not appearance

---

## Interview Notes

- Why `==` fails for Strings
- What is String immutability?
- Difference between primitive and wrapper classes
- When to use arrays vs collections
- How UI text validation should be done

---

## Summary (Human View)
Selenium brings raw data.
Java Core APIs turn raw data into **meaningful validations**.

Reliable validations depend more on Java than Selenium.
