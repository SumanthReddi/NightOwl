---
sidebar_position: 5
---

# Collections for Automation Testing (Handling Multiple Elements & Data)

## Priority
AUTOMATION_CORE

---

## Context (Why this topic exists NOW)
After stabilizing tests with exception handling, the next real-world problem appears:

- One page has multiple matching elements
- Tests need to handle lists of items
- Windows, tabs, and dynamic data must be managed
- Test data grows beyond single values

Selenium can **find multiple things**, but it cannot **organize, manage, or reason about them**.

Collections exist to solve this exact problem.

---

## What Selenium Cannot Do (The Gap)
Selenium can:
- return multiple elements using `findElements()`
- switch between windows

Selenium cannot:
- decide how to store multiple values
- ensure uniqueness
- map keys to values (test data, headers)
- iterate safely and cleanly

This leads to messy loops and unreadable code.

---

## What Java Collections Add (The Fix)
Java Collections provide:
- `List` → ordered collections
- `Set` → unique collections
- `Map` → key–value associations

In simple words:
> Selenium finds many things.  
> Java decides how to manage them.

---

## Collection Types Used in Automation (Only What Matters)

---

## 1. List (MOST USED)

### Automation Problem
Handling multiple matching elements on a page.

### Java Fix
```java
List<WebElement> rows = driver.findElements(By.cssSelector(".row"));
```

Why List?
- Maintains order
- Allows duplicates
- Easy iteration

---

### Common List Operations (Automation)

```java
rows.size();
rows.get(0);
rows.forEach(row -> {
    // validation
});
```

Used in:
- tables
- menus
- search results

---

## 2. Set (Uniqueness Handling)

### Automation Problem
Handling windows, tabs, or unique values.

### Java Fix
```java
Set<String> windowHandles = driver.getWindowHandles();
```

Why Set?
- No duplicates
- Ideal for windows and tabs

---

### Window Handling Example

```java
String parent = driver.getWindowHandle();

for (String window : driver.getWindowHandles()) {
    if (!window.equals(parent)) {
        driver.switchTo().window(window);
        break;
    }
}
```

Selenium gives handles.
Java ensures uniqueness.

---

## 3. Map (Test Data & Key-Value Data)

### Automation Problem
Managing structured test data.

Examples:
- API headers
- User credentials
- Environment-specific data

### Java Fix
```java
Map<String, String> headers = new HashMap<>();
headers.put("Authorization", "Bearer token");
headers.put("Content-Type", "application/json");
```

Why Map?
- Fast lookup
- Clear structure
- Easy extension

---

## Iteration (Processing Collections)

### Automation Problem
Messy loops everywhere.

### Java Fix
```java
for (WebElement element : rows) {
    if (element.getText().contains("Active")) {
        element.click();
        break;
    }
}
```

Enhanced for-loop keeps code readable.

---

## Collections vs Arrays (Clear Rule)

| Arrays | Collections |
|------|-------------|
| Fixed size | Dynamic size |
| Limited methods | Rich API |
| Rarely used | Heavily used |

Rule:
> Use arrays only for fixed, simple data.  
> Use collections for automation.

---

## Real Automation Example

```java
List<WebElement> prices = driver.findElements(By.className("price"));

for (WebElement price : prices) {
    String value = price.getText().replace("$", "");
    int amount = Integer.parseInt(value);

    Assert.assertTrue(amount > 0);
}
```

Selenium fetched elements.
Java collections enabled validation.

---

## Common Mistakes (Very Common)

- Using arrays for dynamic data
- Assuming List order without checking UI
- Ignoring empty collections
- Modifying collection while iterating
- Using wrong collection type

---

## Best Practices (Automation-Approved)

- Use List for UI elements
- Use Set for windows and unique values
- Use Map for test data and headers
- Check collection size before accessing
- Keep iteration logic readable

---

## Interview Notes

- Difference between List, Set, and Map
- Why `findElements()` returns a List
- How window handling works internally
- When to use Map in automation frameworks
- Arrays vs Collections

---

## Summary (Human Understanding)
Selenium can find multiple things.
Without Java Collections, automation becomes chaos.

Collections bring:
- structure
- clarity
- control

Good collection usage = scalable automation.
