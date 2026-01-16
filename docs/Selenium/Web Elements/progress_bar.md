---
sidebar_position: 18
---

# Progress Bar

## UI Behavior (Real Project Context)
Progress bars visually indicate **task completion status over time**. They are commonly used for:
- File uploads
- Background processing
- Data imports/exports
- Installation or setup flows

Automation focus is **state, percentage, and completion**, not animation smoothness.

### Progress Bar UI Example (Visual Reference)
![Progress bar example](https://upload.wikimedia.org/wikipedia/commons/5/59/Progress_bar_example.png)

---

## Types of Progress Bars

1. **HTML `<progress>` element**
2. **Div-based progress bar (CSS/JS)**
3. **Indeterminate progress bar** (no percentage)

---

## Typical HTML Implementations

### Native Progress Element
```html
<progress id="upload" value="40" max="100"></progress>
```

### Div-Based Progress Bar
```html
<div class="progress">
  <div class="progress-bar" style="width: 40%">40%</div>
</div>
```

---

## Core Automation Strategy

✔ Wait for progress to reach expected state  
✔ Validate completion message or status  
❌ Do NOT validate animation frames

---

## Handling Native `<progress>` Element

### Read Progress Value
```java
WebElement progress = driver.findElement(By.id("upload"));
String value = progress.getAttribute("value");
String max = progress.getAttribute("max");

Assert.assertEquals(value, max);
```

---

## Handling Div-Based Progress Bar

### Read Percentage Text
```java
WebElement bar = driver.findElement(By.cssSelector(".progress-bar"));
String percentage = bar.getText();
Assert.assertEquals(percentage, "100%");
```

### Read Width Style
```java
String width = bar.getCssValue("width");
```

(Use width only as supporting validation.)

---

## Waiting for Completion (Critical)

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
wait.until(ExpectedConditions.textToBePresentInElement(bar, "100%"));
```

### Or Wait for Completion Message
```java
wait.until(ExpectedConditions.visibilityOfElementLocated(
    By.id("uploadSuccess")
));
```

---

## Indeterminate Progress Bar Handling

When no percentage is available:
- Wait for progress bar to disappear
- Or wait for success indicator

```java
wait.until(ExpectedConditions.invisibilityOfElementLocated(
    By.cssSelector(".progress")
));
```

---

## Common Mistakes ❌

1. Using `Thread.sleep` for fixed duration
2. Validating animation movement
3. Assuming progress always reaches 100%
4. Ignoring failure/error states
5. Not adding timeout safeguards

---

## Best Practices ✅

- Always use explicit waits
- Validate end state, not transition
- Handle failure and timeout cases
- Keep progress logic out of tests (use utilities)
- Log progress-related waits

---

## Interview Notes 🎯

**Q: How do you automate progress bars in Selenium?**  
A: By waiting for completion state or success indicator.

**Q: Can Selenium track animation?**  
A: No. Selenium validates DOM state changes.

**Q: How do you handle indeterminate progress bars?**  
A: Wait for disappearance or completion message.

---

## Real-Project Tip 💡

Long-running progress bars are common sources of flaky tests — always use generous but bounded waits.

---

## Summary

- Progress bars show task completion
- Automation focuses on end state
- Explicit waits are mandatory
- Handle determinate & indeterminate types

Selenium 4 compliant • Real-project focused • Interview ready

