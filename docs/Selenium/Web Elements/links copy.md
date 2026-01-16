---
sidebar_position: 4
---

# Links

Links are navigation elements typically implemented using the `<a>` tag.
They are used to move between pages, trigger downloads, or open external resources.

Understanding how links behave is important for **navigation testing and validation**.

---

## What is a Link?

A link is usually an `<a>` tag with an `href` attribute.

Examples:
- Menu items
- Footer links
- Breadcrumbs
- Hyperlinks inside content

---

## Locating Links

Preferred locator strategies:
- linkText
- partialLinkText
- id / cssSelector / xpath (when needed)

```java
WebElement forgotPwd = driver.findElement(By.linkText("Forgot Password"));
```

---

## Clicking a Link

```java
forgotPwd.click();
```

Use after ensuring:
- Link is visible
- Link is clickable
- No overlay blocks it

---

## Reading Link Attributes

### getAttribute("href")

```java
String url = forgotPwd.getAttribute("href");
```

Used to:
- Validate navigation targets
- Check broken links (with HTTP calls)

---

## Validating Navigation

After clicking a link:
```java
Assert.assertTrue(driver.getCurrentUrl().contains("forgot"));
```

Or validate page title:
```java
Assert.assertEquals(driver.getTitle(), "Forgot Password");
```

---

## Opening Links in New Tab / Window

Some links open in new tabs using `target="_blank"`.

Handle using window handles:
```java
Set<String> windows = driver.getWindowHandles();
```

(Switching windows covered in a dedicated section.)

---

## Disabled or Non-Clickable Links

Some links are:
- Styled as disabled
- Hidden until conditions met

Validation approach:
- Check CSS classes
- Ensure no navigation occurs

---

## Common Mistakes ❌

- Using partialLinkText everywhere
- Not validating navigation result
- Ignoring new tab behavior
- Hardcoding expected URLs

---

## Best Practices ✅

- Prefer stable locators
- Validate both click and destination
- Handle new tabs explicitly
- Use API checks for broken links when possible

---

## Interview Notes 🎯

**Q:** How do you validate a link without clicking it?  
**A:** By reading the `href` attribute.

**Q:** Why is `partialLinkText` risky?  
**A:** It may match multiple links and cause flakiness.

---

## Key Takeaways

- Links drive navigation
- Always validate where a link goes
- Handle new tabs carefully
- Use stable locator strategies

---

## What’s Next?

👉 **Radio Button**
