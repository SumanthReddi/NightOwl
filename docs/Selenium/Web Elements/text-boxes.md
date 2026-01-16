---
sidebar_position: 2
---

# Text Boxes

Text boxes are the **most commonly used web elements** in any application.
They are used for login forms, search fields, registrations, and data entry.

Mastering text box handling is fundamental to Selenium automation.

---

## What is a Text Box?

A text box is typically an `<input>` or `<textarea>` element that allows users
to enter text.

Common examples:
- Username
- Password
- Search field
- Address field

---

## Locating Text Boxes

Text boxes are usually located using:
- id (preferred)
- name
- cssSelector
- xpath

```java
WebElement username = driver.findElement(By.id("username"));
```

---

## Entering Text using sendKeys()

```java
username.sendKeys("admin");
```

---

## Clearing Existing Text

```java
username.clear();
username.sendKeys("newUser");
```

---

## Keyboard Actions with Text Boxes

```java
username.sendKeys(Keys.TAB);
username.sendKeys(Keys.ENTER);
```

---

## Reading Text Box Values

```java
String value = username.getAttribute("value");
```

---

## Password Fields

Password fields behave like normal text boxes.

---

## Common Mistakes ❌

- Using getText() on input fields
- Not clearing existing text

---

## Best Practices ✅

- Always clear before typing
- Use getAttribute("value") for validation

---

## What’s Next?

👉 **Button**
