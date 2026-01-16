---
sidebar_position: 15
---

# Images

## UI Behavior (Real Project Context)
Images are **non-interactive by default**, but they often act as:
- Clickable links
- Buttons (icons)
- Status indicators
- CAPTCHA or verification visuals

In automation, images are validated for **presence, visibility, source, and click behavior** — not visual correctness.

### Image UI Example (Visual Reference)
![Clickable image example](https://upload.wikimedia.org/wikipedia/commons/3/3a/Clickable_image_example.png)

---

## Typical HTML Patterns

### Simple Image
```html
<img src="/assets/logo.png" alt="Company Logo">
```

### Clickable Image (Link)
```html
<a href="/home">
  <img src="home.png" alt="Home">
</a>
```

### Image Used as Button
```html
<img src="submit.png" onclick="submitForm()">
```

---

## Locating Images (Stable Approaches)

Preferred attributes:
- `alt`
- `src` (partial match)
- Parent anchor (`<a>`) if clickable

```java
WebElement logo = driver.findElement(By.xpath("//img[@alt='Company Logo']"));
```

---

## Validations You SHOULD Do

### 1. Image Is Displayed
```java
Assert.assertTrue(logo.isDisplayed());
```

### 2. Image Source Is Correct
```java
String src = logo.getAttribute("src");
Assert.assertTrue(src.contains("logo.png"));
```

### 3. Broken Image Validation (Important)

```java
Boolean isLoaded = (Boolean) ((JavascriptExecutor) driver)
    .executeScript("return arguments[0].complete && arguments[0].naturalWidth > 0", logo);

Assert.assertTrue(isLoaded);
```

---

## Clicking on Images

### If Image Is Inside a Link
```java
logo.click();
```

### If Click Is Handled by JavaScript
```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("arguments[0].click();", logo);
```

---

## Image as Status Indicator (Real Scenario)

Example: Green tick / red cross icons

```java
WebElement statusIcon = driver.findElement(By.cssSelector("img.status"));
String src = statusIcon.getAttribute("src");
Assert.assertTrue(src.contains("success"));
```

---

## Accessibility Validation (Bonus but Valuable)

```java
String altText = logo.getAttribute("alt");
Assert.assertFalse(altText.isEmpty());
```

---

## Common Mistakes ❌

1. Validating pixel colors (not Selenium’s job)
2. Using index-based XPath for images
3. Ignoring broken image checks
4. Clicking images without verifying click behavior
5. Skipping accessibility (`alt`) checks

---

## Best Practices ✅

- Validate image load using JS
- Prefer `alt`-based locators
- Validate purpose (link / button / indicator)
- Avoid visual comparisons
- Include accessibility checks where required

---

## Interview Notes 🎯

**Q: Can Selenium validate images?**  
A: Yes — presence, visibility, source, and load status.

**Q: How do you check a broken image?**  
A: Using JavaScript to verify `naturalWidth`.

**Q: Can Selenium compare images visually?**  
A: No. Selenium is not a visual testing tool.

---

## Real-Project Tip 💡

Image validation is often part of **smoke and accessibility tests**, especially for branding-critical pages.

---

## Summary

- Images are validated functionally, not visually
- JS helps detect broken images
- Click behavior must be verified explicitly
- Accessibility matters

Selenium 4 compliant • Production focused • Interview ready

