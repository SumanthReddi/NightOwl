---
sidebar_position: 3
---

# Shadow DOM

## Why Shadow DOM Matters (Real Project Context)
Modern web applications (especially those built with Web Components) encapsulate UI using **Shadow DOM**. Elements inside Shadow DOM are **not accessible** with normal Selenium locators.

This commonly appears in:
- Chrome settings–like UIs
- Design system components
- Custom controls (inputs, dropdowns, toggles)

If not handled correctly, tests fail with `NoSuchElementException`.

---

## What Shadow DOM Is (Practical View)

- Shadow DOM creates a **separate DOM tree**
- Encapsulation hides internal elements
- Standard XPath/CSS **cannot cross shadow boundaries**

There are two types:
- **Open Shadow DOM** – accessible via JavaScript
- **Closed Shadow DOM** – not accessible (automation-unfriendly)

---

## Typical HTML Pattern

```html
<custom-input>
  #shadow-root (open)
    <input type="text" />
</custom-input>
```

---

## Key Rule in Selenium

❌ You cannot locate shadow elements directly using `By.id`, XPath, or CSS.

✔ You must first access the **shadow root**, then locate elements inside it.

---

## Accessing Open Shadow DOM (Selenium 4+)

### Using `getShadowRoot()` (Recommended)

```java
WebElement host = driver.findElement(By.cssSelector("custom-input"));
SearchContext shadowRoot = host.getShadowRoot();

WebElement input = shadowRoot.findElement(By.cssSelector("input"));
input.sendKeys("test");
```

---

## Nested Shadow DOM Handling

```java
WebElement host1 = driver.findElement(By.cssSelector("parent-comp"));
SearchContext root1 = host1.getShadowRoot();

WebElement host2 = root1.findElement(By.cssSelector("child-comp"));
SearchContext root2 = host2.getShadowRoot();

WebElement btn = root2.findElement(By.cssSelector("button"));
btn.click();
```

---

## JavaScript-Based Access (Fallback)

Use only when `getShadowRoot()` is not feasible.

```java
JavascriptExecutor js = (JavascriptExecutor) driver;
WebElement element = (WebElement) js.executeScript(
    "return document.querySelector('custom-input').shadowRoot.querySelector('input');"
);

element.sendKeys("test");
```

---

## Closed Shadow DOM (Important Limitation)

❌ Selenium **cannot automate** elements inside **closed Shadow DOM**.

Options:
- Request dev team to expose open shadow root
- Add test hooks or data attributes
- Avoid UI-level validation

---

## Synchronization with Shadow DOM

Shadow DOM elements are often rendered asynchronously.

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(driver ->
    driver.findElement(By.cssSelector("custom-input")).getShadowRoot() != null
);
```

---

## Common Mistakes ❌

1. Using XPath to cross shadow boundaries
2. Assuming all Shadow DOM is accessible
3. Ignoring nested shadow roots
4. Not waiting for shadow host readiness
5. Overusing JavaScript unnecessarily

---

## Best Practices ✅

- Prefer `getShadowRoot()` (Selenium 4+)
- Handle one shadow level at a time
- Encapsulate shadow logic in page classes
- Coordinate with devs for testability
- Avoid UI tests for closed shadow DOM

---

## Interview Notes 🎯

**Q: Can Selenium handle Shadow DOM?**  
A: Yes, open Shadow DOM using Selenium 4 APIs.

**Q: Can Selenium automate closed Shadow DOM?**  
A: No.

**Q: What is the best way to access Shadow DOM?**  
A: Using `getShadowRoot()`.

---

## Real-Project Tip 💡

If Shadow DOM is used heavily, automation strategy must be discussed **during UI design**, not after.

---

## Summary

- Shadow DOM isolates elements
- Selenium 4 supports open shadow roots
- Closed Shadow DOM is not automatable
- Proper handling prevents flaky failures
