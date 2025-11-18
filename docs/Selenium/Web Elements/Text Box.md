---
sidebar_position: 1
---

# Text Boxes

Text boxes (input fields) allow users to enter text data in web forms. They are typically represented by HTML `<input>` elements with types like `text`, `password`, `email`, etc., or `<textarea>` elements.


### Locating Text Boxes

You can locate text boxes using common locator strategies based on attributes such as `id`, `name`, `className`, `xpath`, or `cssSelector`:

```java
// By ID
WebElement inputBox = driver.findElement(By.id("username"));

// By Name
WebElement inputBox = driver.findElement(By.name("email"));

// By Class Name
WebElement inputBox = driver.findElement(By.className("input-field"));

// By XPath
WebElement inputBox = driver.findElement(By.xpath("//input[@type='text']"));

// By CSS Selector
WebElement inputBox = driver.findElement(By.cssSelector("input[type='text']"));
```


### Basic Operations on Text Boxes

**1. Entering Text:**

Use the `sendKeys()` method to enter text into the input box.

```java
inputBox.sendKeys("testuser");
```

**2. Clearing Text:**

If the input already contains text, use `clear()` to remove it before entering new text.

```java
inputBox.clear();
inputBox.sendKeys("newuser");
```

**3. Retrieving Text:**

Text inside input boxes is generally stored in the `value` attribute. Use `getAttribute("value")` to get the entered text.

```java
String enteredText = inputBox.getAttribute("value");
System.out.println("Entered Text: " + enteredText);
```

### Validating Input Visibility and State

- Check if the input box is displayed:

```java
boolean visible = inputBox.isDisplayed();
```

- Check if the input box is enabled (editable):

```java
boolean enabled = inputBox.isEnabled();
```


### Example: Automating a Login Text Box

```java
WebElement username = driver.findElement(By.id("username"));
username.clear();
username.sendKeys("myUsername");

WebElement password = driver.findElement(By.id("password"));
password.clear();
password.sendKeys("myPassword");
```


### Handling Special Cases

- For inputs like password fields, `sendKeys()` works the same way.
- For text areas (`<textarea>`), all methods above apply similarly.


This covers the complete approach to automating text boxes/input fields in Selenium WebDriver using Java. If you want, the next element topics can be covered one-by-one. Just let me know!

