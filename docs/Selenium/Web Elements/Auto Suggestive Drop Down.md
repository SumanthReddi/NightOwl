---
sidebar_position: 8
---

# Suggestive Dropdown

Selenium WebDriver can automate suggestive dropdowns (auto-suggest/typeahead dropdowns) in Java by interacting with dynamic elements that appear as the user types. These elements often load options asynchronously based on input, and require careful handling to ensure accurate selection.

### Identifying the Input Field

Locate the input box where text is entered to trigger suggestions:

```java
// By ID
WebElement inputBox = driver.findElement(By.id("searchInput"));
// By XPath (generic for typeahead fields)
WebElement inputBox = driver.findElement(By.xpath("//input[@type='text' and @placeholder='Search']"));
```

Selecting the correct locator ensures your automation targets the actual typeahead input.

### Trigger Suggestions by Typing

Use `sendKeys()` to simulate user typing and display suggestions:

```java
inputBox.sendKeys("Bang");
Thread.sleep(1000); // Wait for suggestions to load, or use WebDriverWait
```

A brief wait or explicit wait allows dynamic suggestions time to render.

### Handling Suggestions (Select Option)

Options are typically rendered in a dropdown list (ul/li, div/a, etc.). Fetch all suggestions:

```java
List<WebElement> suggestions = driver.findElements(By.xpath("//ul[@role='listbox']//li"));
// or, for generic divs:
List<WebElement> suggestions = driver.findElements(By.xpath("//div[@class='suggestion-item']"));
```

Iterate and select the desired suggestion:

```java
for (WebElement suggestion : suggestions) {
    if (suggestion.getText().equalsIgnoreCase("Bangalore")) {
        suggestion.click();
        break;
    }
}
```

Always check `getText()` for the required value, then click it.

### Advanced: Waits for Dynamic Suggestions

Use `WebDriverWait` to wait until suggestions are visible:

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//ul[@role='listbox']//li")));
```

Explicit waits improve stability by waiting for dynamic dropdowns to be fully rendered before action.

### Example HTML Structure

```html
<input id="searchInput" type="text"/>
<ul role="listbox">
    <li>Bangalore</li>
    <li>Bangkok</li>
</ul>
```

XPaths should target the container and items according to actual HTML.

### Common Methods

| Method | Purpose | Example |
| :-- | :-- | :-- |
| `sendKeys()` | Enter text in input | `inputBox.sendKeys("Bang");` |
| `findElements()` | Fetch all suggestion items | `driver.findElements(By.xpath("//ul..."))` |
| `getText()` | Read text from options | `element.getText();` |
| `click()` | Select the suggestion | `element.click();` |
| `WebDriverWait` | Wait for suggestions | `wait.until(...);` |

These are essential for robust automation of suggestive dropdowns and auto-suggest features.

This overview guides you through locating suggestive input boxes, triggering auto-suggestions, waiting for items to appear, and interacting with dynamically generated dropdown options in Selenium WebDriver using Java.