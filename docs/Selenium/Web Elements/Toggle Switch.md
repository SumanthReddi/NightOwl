---
sidebar_position: 15
---
# Toggle Switch

A toggle switch is a modern UI control that functions like a checkbox but provides an enhanced visual representation for ON/OFF states (e.g., dark mode switches, settings toggles). Selenium WebDriver automation for toggle switches in Java is similar to checkbox automation, though the underlying HTML and classes are often styled for appearance rather than using a standard checkbox element.

### Identifying the Toggle Switch

Toggle switches can be implemented in various ways:

- As a styled `<input type="checkbox">` (most common)

```
- As a `<div>`, `<span>`, or `<button>` with custom classes and JavaScript handling
```

Locate the toggle using its unique attributes or CSS classes:

```java
// Checkbox-based toggle
WebElement toggle = driver.findElement(By.id("toggleSwitch"));

// Custom element
WebElement toggle = driver.findElement(By.cssSelector(".toggle-switch"));
```

Choose a locator that reliably targets the clickable element representing the switch.

### Checking and Changing State

For checkbox-based toggles:

```java
if (!toggle.isSelected()) {
    toggle.click(); // Turns the toggle ON if OFF
}

if (toggle.isSelected()) {
    toggle.click(); // Turns the toggle OFF if ON
}
```

For custom elements, inspect if the switch uses a class like `active` or `on` to mark state:

```java
String status = toggle.getAttribute("class");
if (!status.contains("active")) {
    toggle.click(); // Activates toggle if not already ON
}
```

Always validate the switch's state after toggling.

### Verifying Toggle State

- For checkboxes, use `isSelected()`:

```java
boolean isOn = toggle.isSelected();
```

- For custom toggles, check for presence or absence of a state-indicating class or attribute:

```java
String currentState = toggle.getAttribute("aria-checked");
boolean isOn = currentState.equals("true");
```


### Example HTML Structures

**Checkbox-based:**

```html
<input type="checkbox" id="toggleSwitch" class="custom-toggle">
<label for="toggleSwitch"></label>
```

**Custom toggle:**

```html
<div class="toggle-switch on"></div>
```

The method you use depends on the HTML structure implemented for the toggle switch.

### Exception Handling

If the normal click does not work (e.g., overlay, animation), use:

```java
// Actions class
Actions act = new Actions(driver);
act.moveToElement(toggle).click().perform();

// JavaScriptExecutor
((JavascriptExecutor) driver).executeScript("arguments[^0].click();", toggle);
```

This helps you bypass issues with advanced or animated toggles.

### Summary Table

| Type | Select State | Change State | Validate State |
| :-- | :-- | :-- | :-- |
| Checkbox-based | `isSelected()` | `click()` | `toggle.isSelected()` |
| Custom/Div-based | Class/Attribute | `click()` (check class) | `getAttribute("class"/etc.)` |

This summary helps automate toggle switches (ON/OFF controls) across different UI designs using Selenium WebDriver in Java.