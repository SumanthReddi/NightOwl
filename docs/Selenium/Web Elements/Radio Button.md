---
sidebar_position: 4
---
Selenium WebDriver allows detailed automation of radio buttons in web forms using Java. Radio buttons are represented by `<input type="radio">` and are designed for single-choice selections within a group.

### Identifying Radio Buttons

Radio buttons are usually located using attributes like `id`, `name`, or `xpath`:

```java
// By ID
WebElement radioBtn = driver.findElement(By.id("radio1"));

// By Name
WebElement radioBtn = driver.findElement(By.name("gender"));

// By XPath
WebElement radioBtn = driver.findElement(By.xpath("//input[@type='radio' and @value='male']"));
```

Use these locators to precisely target the intended radio button.

### Selecting a Radio Button

Selection is performed using the `click()` method:

```java
driver.findElement(By.id("radio1")).click();
```

Selenium will "activate" the radio button regardless of its previous state. Only one radio button in the same group can be selected at a time.

### Verifying Selection State

To check if a radio button is selected:

```java
WebElement radioBtn = driver.findElement(By.id("radio1"));
boolean isSelected = radioBtn.isSelected();
System.out.println("Selected? " + isSelected);
```

The `isSelected()` method returns a boolean indicating the selected status.

### Handling Multiple Radio Buttons

For groups, radio buttons typically share a `name` attribute. To select a specific one:

```java
List<WebElement> radios = driver.findElements(By.name("group1"));
for (WebElement rb : radios) {
    if (rb.getAttribute("value").equals("desiredValue")) {
        rb.click();
        break;
    }
}
```

Iterating through the group ensures the correct button is clicked based on its value.

### HTML Example

Sample radio button HTML:

```html
<input type="radio" id="radio1" name="gender" value="male">
<input type="radio" id="radio2" name="gender" value="female">
```

Locators should reference the group's shared attributes for reliable selection.

### Common Methods

| Method | Purpose | Example |
| :-- | :-- | :-- |
| `click()` | Selects the radio button | `element.click();` |
| `isSelected()` | Checks if the radio button is selected | `element.isSelected();` |
| `getAttribute()` | Reads attributes (e.g., value, id) | `element.getAttribute("value");` |

These are used to interact, validate, and automate radio buttons within test scripts.

### Exception Handling

If radio button selection is blocked (by overlays, etc.), try:

```java
// Using Actions class
Actions actions = new Actions(driver);
actions.moveToElement(radioBtn).click().perform();

// Using JavaScriptExecutor
((JavascriptExecutor) driver).executeScript("arguments[^0].click();", radioBtn);
```

These methods help bypass UI layer restrictions.

This summary covers identification, selection, validation, iterating across groups, and advanced selection for radio buttons using Selenium in Java.
