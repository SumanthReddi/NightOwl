---
sidebar_position: 17
---

Progress bars visually indicate the progress of processes such as file uploads or data loading. In web apps, they are usually implemented with HTML elements styled and updated dynamically using JavaScript or CSS.

***

### Locating Progress Bars

```
- Progress bars can be `<div>`, `<progress>`, or `<span>` elements with dynamic width or classes.
```

```java
WebElement progressBar = driver.findElement(By.id("progressBar"));
```


***

### Checking Progress Bar Status

1. **Using CSS properties:**

Progress is often represented by the width style of an inner element:

```java
String width = progressBar.getCssValue("width");
System.out.println("Progress width: " + width);
```

Or you might check the style attribute for percentage:

```java
String style = progressBar.getAttribute("style");
System.out.println("Progress style: " + style);
```

2. **Using `value` attribute:**

For `<progress>` elements:

```java
String value = progressBar.getAttribute("value");
String max = progressBar.getAttribute("max");
System.out.println("Progress: " + value + "/" + max);
```


***

### Waiting for Progress Completion

Use explicit waits to wait until the progress reaches 100% or the progress bar is hidden:

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
wait.until(ExpectedConditions.attributeToBe(progressBar, "aria-valuenow", "100"));
```

Or wait until progress bar is no longer visible:

```java
wait.until(ExpectedConditions.invisibilityOf(progressBar));
```


***

### Example Code

```java
WebElement progressBar = driver.findElement(By.id("progressBar"));

// Get progress percentage from style attribute (e.g., "width: 70%")
String widthStyle = progressBar.getAttribute("style");
System.out.println("Current progress: " + widthStyle);

// Wait for progress to complete (aria-valuenow = 100)
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
wait.until(ExpectedConditions.attributeToBe(progressBar, "aria-valuenow", "100"));
System.out.println("Progress complete");
```


***

### Notes

- CSS structure or attributes for progress bars vary widely by application.
- Inspect the progress bar element in the browser to identify how progress is represented.
- Combine Selenium with waits for reliable test automation of progress-driven workflows.

***

This completes progress bar automation notes in Selenium WebDriver with Java.

