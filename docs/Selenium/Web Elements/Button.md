---
sidebar_position: 2
---
Buttons are clickable elements that trigger actions like form submission or navigation. They are typically represented by `<button>`, `<input type="button">`, `<input type="submit">`, or other clickable elements styled as buttons.


***

### Locating Buttons

Common ways to locate buttons include:

```java
// By ID
WebElement button = driver.findElement(By.id("submitBtn"));

// By Name
WebElement button = driver.findElement(By.name("btnLogin"));

// By Class Name
WebElement button = driver.findElement(By.className("btn-primary"));

// By XPath (using text)
WebElement button = driver.findElement(By.xpath("//button[text()='Submit']"));

// By CSS Selector
WebElement button = driver.findElement(By.cssSelector(".btn.submit-btn"));
```


***

### Interacting with Buttons

**1. Clicking a Button:**

Use the `click()` method to simulate a button press.

```java
button.click();
```

**2. Checking Button Properties:**

- Verify if button is displayed on the page:

```java
boolean isDisplayed = button.isDisplayed();
```

- Check if button is enabled (clickable):

```java
boolean isEnabled = button.isEnabled();
```

- Get the button's text:

```java
String btnText = button.getText();
```


***

### Example: Clicking a Submit Button

```java
WebElement submitBtn = driver.findElement(By.id("submitBtn"));

if (submitBtn.isDisplayed() && submitBtn.isEnabled()) {
    submitBtn.click();
}
```


***

### Handling Buttons That Require Special Actions

- If normal click does not work (e.g., obscured by overlays), use `Actions` class:

```java
Actions actions = new Actions(driver);
actions.moveToElement(button).click().perform();
```

- Alternatively, use JavaScript to click:

```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("arguments[0].click();", button);
```


***

### Notes

- Buttons can trigger page loads or AJAX; explicit waits after clicking might be necessary.
- Some buttons may change state dynamically (disabled/enabled), so always validate before clicking.

***

This covers locating, interacting with, and validating buttons in Selenium WebDriver using Java.
