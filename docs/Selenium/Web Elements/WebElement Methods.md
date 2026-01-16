---
sidebar_position: 1
---

# WebElement Methods

WebElement methods are used to **interact with and validate UI elements** once they
are located. Mastery of these methods is essential for reliable Selenium automation.

---

## What is WebElement?

`WebElement` represents a **single element** on a web page. All interactions like
clicking, typing, and reading values are performed using WebElement APIs.

```java
WebElement element = driver.findElement(By.id("username"));
```

---

## Core Interaction Methods

### click()
Clicks on buttons, links, checkboxes, radio buttons.

```java
element.click();
```

Use after ensuring the element is clickable (waits).

---

### sendKeys()
Types text into input fields.

```java
element.sendKeys("admin");
```

Used for:
- Text fields
- Password fields
- File upload (basic)

---

### clear()
Clears existing text from input fields.

```java
element.clear();
```

---

## Read / Fetch Methods

### getText()
Returns **visible text** of an element.

```java
String text = element.getText();
```

Used for UI validations.

---

### getAttribute()
Fetches attribute values.

```java
String value = element.getAttribute("value");
```

Common attributes:
- value
- href
- src
- class

---

## State Validation Methods

### isDisplayed()
Checks if element is visible.

```java
element.isDisplayed();
```

---

### isEnabled()
Checks if element is enabled.

```java
element.isEnabled();
```

---

### isSelected()
Checks selection state (checkbox/radio).

```java
element.isSelected();
```

---

## Common Exceptions to Expect

- ElementNotInteractableException
- StaleElementReferenceException
- NoSuchElementException

(Handled via waits and retries — covered later.)

---

## Best Practices ✅

- Always wait before interaction
- Re-locate elements after navigation
- Use meaningful assertions
- Avoid chaining actions blindly

---

## Common Mistakes ❌

- Clicking without waits
- Using getText() for hidden values
- Ignoring stale elements
- Assuming visibility = clickability

---

## Key Takeaways

- WebElement is the core interaction unit
- Separate locate and interact logic
- Validate element state before action
- Clean usage improves stability

---

## What’s Next?

👉 **Text Boxes**
