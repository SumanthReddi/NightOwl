---
sidebar_position: 13
---

Tooltips are small messages that appear when hovering over an element, providing additional information. In HTML, tooltips are often created using the `title` attribute or dynamically via JavaScript and CSS.

***

### Common Types of Tooltips

1. **Static Tooltip:** Provided by the `title` attribute on elements.
2. **Dynamic Tooltip:** Created with JavaScript and CSS; appears after hover, often as a separate element.

***

### Handling Static Tooltips

For elements with a `title` attribute, simply retrieve the attribute value:

```java
WebElement element = driver.findElement(By.id("elementWithTooltip"));
String tooltipText = element.getAttribute("title");
System.out.println("Tooltip text: " + tooltipText);
```


***

### Handling Dynamic Tooltips

Dynamic tooltips require a mouse hover to make the tooltip element visible, usually requiring the Selenium `Actions` class.

```java
WebElement element = driver.findElement(By.id("hoverElement"));

// Perform mouse hover
Actions action = new Actions(driver);
action.moveToElement(element).perform();

// Locate the tooltip element that appears after hover
WebElement tooltip = driver.findElement(By.cssSelector(".tooltipClass"));
String tooltipText = tooltip.getText();
System.out.println("Tooltip text: " + tooltipText);
```


***

### Waiting for Tooltip Visibility

Since dynamic tooltips appear after a delay, use explicit waits:

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".tooltipClass")));
```


***

### Example Summary

| Scenario | Method | Code Sample |
| :-- | :-- | :-- |
| Static Tooltip | Get `title` attribute | `element.getAttribute("title");` |
| Dynamic Tooltip | Hover and get dynamically shown element | Actions + `tooltip.getText();` |


***

### Notes

- Locator strategy for tooltip element varies by application.
- Tooltips may disappear quickly; use waits and immediate capture.
- Hover actions can also trigger other UI changes; ensure the correct element is hovered.

***

This completes the notes for managing tooltips in Selenium WebDriver with Java.

