---
sidebar_position: 9
title: Finding Elements
---

# Understanding findElement() and findElements() in Selenium

---

## 🔍 Introduction

After defining a locator (like `By.id`, `By.xpath`), Selenium uses `findElement()` or `findElements()` to retrieve elements from the DOM.

These methods look similar but serve different purposes and behave differently.

---

## 🔹 findElement()

### What it does
- Locates a single element
- Returns the first matching `WebElement`

```java
WebElement element = driver.findElement(By.id("username"));
```

### Behavior
- If element is found → returns WebElement
- If element is NOT found → throws `NoSuchElementException`

### Practical meaning
This method assumes the element **must be present**.  
If not, the test fails immediately (fail-fast approach).

### Usage
- Mandatory elements (login button, submit button)
- Critical flow validation

---

## 🔹 findElements()

### What it does
- Locates multiple elements
- Returns `List<WebElement>`

```java
List<WebElement> elements = driver.findElements(By.className("menu-item"));
```

### Behavior
- If elements found → returns list
- If no elements found → returns empty list
- Does NOT throw exception for missing elements

### Practical meaning
This method assumes elements **may or may not be present**.

### Usage
- Optional elements (error messages, popups)
- Lists, tables, collections
- Presence validation

---

## 🔹 Core Difference

- findElement() → assertive (expects element to exist)
- findElements() → defensive (handles absence safely)

---

## 🔹 Behavior with Waits

With implicit wait:
- Both methods wait until timeout

After timeout:
- findElement() → throws exception
- findElements() → returns empty list

⚠️ Note:
High implicit wait with findElements() can slow down tests.

---

## 🔹 Failure Scenarios

Both methods can fail in cases like:
- Invalid locator → `InvalidSelectorException`
- Driver/session issues → `WebDriverException`

Also:
- Using stored elements after DOM refresh → `StaleElementReferenceException`

---

## 🔹 Decision Rule

- Use findElement() → when element MUST exist
- Use findElements() → when element MAY or MAY NOT exist

---

## 🔹 Key Insight

findElements() is often used for presence validation without breaking test execution.

---

## ✔️ Summary

- findElement() → single, strict, fails if missing  
- findElements() → multiple, flexible, returns empty list if missing  
