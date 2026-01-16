---
sidebar_position: 14
---

# Tool Tips

## UI Behavior (Real Project Context)
Tooltips display **additional information on hover, focus, or click**. They are used to improve usability without cluttering the UI.

Common real-world usages:
- Info icons next to form fields
- Validation hints
- Help text on buttons
- Icon-only actions

Tooltips can be **native HTML** or **custom JavaScript components**.

<!-- ### Tooltip UI Example (Visual Reference)
![Tooltip hover example](https://upload.wikimedia.org/wikipedia/commons/6/6a/Tooltip_example.png)

--- -->

## Types of Tooltips You’ll Encounter

1. **Native HTML tooltip** – uses `title` attribute
2. **Custom tooltip (div/span)** – rendered on hover
3. **Framework tooltips** – Bootstrap, Material UI, etc.

---

## Native HTML Tooltip (title attribute)

### HTML
```html
<button title="Save changes">Save</button>
```

### Selenium Handling

No hover is required — read the attribute directly.

```java
WebElement saveBtn = driver.findElement(By.tagName("button"));
String tooltip = saveBtn.getAttribute("title");
Assert.assertEquals(tooltip, "Save changes");
```

---

## Custom Tooltip (Hover-Based)

### Typical HTML
```html
<span class="info-icon">i</span>
<div class="tooltip">Enter valid email</div>
```

Tooltip appears **only after hover**.

---

## Hovering Using Actions Class

```java
WebElement infoIcon = driver.findElement(By.cssSelector(".info-icon"));
Actions actions = new Actions(driver);
actions.moveToElement(infoIcon).perform();
```

---

## Waiting for Tooltip Visibility

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement tooltip = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".tooltip"))
);

Assert.assertEquals(tooltip.getText(), "Enter valid email");
```

---

## Handling Framework Tooltips (Bootstrap Example)

Bootstrap tooltips often use `data-*` attributes.

```html
<button data-toggle="tooltip" title="Delete record">Delete</button>
```

Selenium strategy remains the same — read `title` or hover if dynamically rendered.

---

## Tooltip on Disabled Elements

Disabled elements don’t receive hover.

### Workaround
```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("arguments[0].dispatchEvent(new MouseEvent('mouseover'));", infoIcon);
```

---

## Common Mistakes ❌

1. Trying to locate tooltip before hover
2. Using `Thread.sleep` instead of explicit wait
3. Assuming all tooltips use `title`
4. Ignoring disabled-element behavior
5. Not validating tooltip text

---

## Best Practices ✅

- Identify tooltip type before automation
- Prefer attribute validation when possible
- Use `Actions` for hover-based tooltips
- Always wait for tooltip visibility
- Validate tooltip content explicitly

---

## Interview Notes 🎯

**Q: How do you handle tooltips in Selenium?**  
A: By reading the `title` attribute or hovering and validating tooltip text.

**Q: Which class is used for hover actions?**  
A: `Actions` class.

**Q: Can you hover on disabled elements?**  
A: Not directly; JavaScript workaround may be required.

---

## Real-Project Tip 💡

Tooltips are often missed in automation but frequently tested in accessibility and UX audits.

---

## Summary

- Tooltips can be native or custom
- Hover-based tooltips need Actions
- Explicit waits improve stability
- Content validation is essential

Selenium 4 compliant • Real-project ready • Interview safe

