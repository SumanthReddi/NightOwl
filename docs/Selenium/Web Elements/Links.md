---
sidebar_position: 3
---
### Links (Anchor Tags)

Links, represented by `<a>` tags in HTML, navigate users to other pages or trigger actions when clicked. Automating links in Selenium involves locating the anchor element and performing clicks or validations.

### Locating Links

Common ways to locate links include:

```java
// By Link Text (exact text)
WebElement link = driver.findElement(By.linkText("Home"));

// By Partial Link Text (partial match)
WebElement link = driver.findElement(By.partialLinkText("Read More"));

// By XPath (using href or text)
WebElement link = driver.findElement(By.xpath("//a[@href='https://example.com']"));
WebElement linkByText = driver.findElement(By.xpath("//a[text()='Contact Us']"));

// By CSS Selector
WebElement linkCss = driver.findElement(By.cssSelector("a.nav-link"));
```


### Interacting with Links

**1. Clicking a Link:**

Use `click()` to simulate user clicking the link.

```java
link.click();
```

**2. Retrieving Link Text:**

Get the visible text of the link for validation.

```java
String linkText = link.getText();
System.out.println("Link Text: " + linkText);
```

**3. Getting Link URL:**

Fetch the URL from the `href` attribute.

```java
String url = link.getAttribute("href");
System.out.println("Link URL: " + url);
```

### Validations and Checks

- Verify if the link is displayed and enabled to ensure it's interactable:

```java
boolean isDisplayed = link.isDisplayed();
boolean isEnabled = link.isEnabled();
```


### Example: Clicking a “Login” link

```java
WebElement loginLink = driver.findElement(By.linkText("Login"));
loginLink.click();
```


### Handling Links That Open in New Tabs or Windows

- If a link opens in a new tab/window, Selenium can switch between windows like this:

```java
String originalWindow = driver.getWindowHandle();
Set<String> allWindows = driver.getWindowHandles();

for (String windowHandle : allWindows) {
    if (!windowHandle.equals(originalWindow)) {
        driver.switchTo().window(windowHandle);
        break;
    }
}
```

- After operations, switch back to the original window:

```java
driver.switchTo().window(originalWindow);
```

This covers locating, interacting with, and validating anchor tags (links) using Selenium WebDriver in Java. Ready for the next element?

