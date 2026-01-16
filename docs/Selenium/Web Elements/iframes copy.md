---
sidebar_position: 11
---

# IFrames

## UI Behavior (Real Project Context)
An **iframe** embeds one HTML document inside another. Selenium **cannot directly interact** with elements inside an iframe unless the driver switches context to that iframe.

Real-world usages:
- Payment gateways
- Embedded reports/dashboards
- Third-party widgets (chat, ads)
- Legacy application sections

---

## Typical HTML Patterns

### IFrame with ID
```html
<iframe id="paymentFrame" src="payment.html"></iframe>
```

### IFrame with Name
```html
<iframe name="reportFrame"></iframe>
```

### Nested IFrames
```html
<iframe id="outer">
  <iframe id="inner"></iframe>
</iframe>
```

---

## Why Switching Is Mandatory

If you try to locate an element inside an iframe **without switching**, Selenium throws:
- `NoSuchElementException`

---

## Switching to an IFrame

### Switch by ID or Name (Preferred)
```java
driver.switchTo().frame("paymentFrame");
```

### Switch by WebElement
```java
WebElement frame = driver.findElement(By.cssSelector("iframe[src*='payment']"));
driver.switchTo().frame(frame);
```

### Switch by Index (Avoid)
```java
driver.switchTo().frame(0);
```

---

## Interacting Inside IFrame

```java
WebElement cardNumber = driver.findElement(By.id("cardNumber"));
cardNumber.sendKeys("4111111111111111");
```

---

## Switching Back (Critical)

### Back to Parent Frame
```java
driver.switchTo().parentFrame();
```

### Back to Main Page
```java
driver.switchTo().defaultContent();
```

---

## Handling Nested IFrames

```java
driver.switchTo().frame("outer");
driver.switchTo().frame("inner");

// interact

// exit all
driver.switchTo().defaultContent();
```

---

## Waiting for IFrame to Be Available

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt("paymentFrame"));
```

---

## Real-World Payment Gateway Example

```java
wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt("cardFrame"));
driver.findElement(By.id("cvv")).sendKeys("123");
driver.switchTo().defaultContent();
```

---

## Common Mistakes ❌

1. Forgetting to switch into iframe
2. Using index-based switching
3. Not switching back after action
4. Assuming iframe loads instantly
5. Ignoring nested iframe hierarchy

---

## Best Practices ✅

- Prefer ID or WebElement-based switching
- Always switch back after iframe actions
- Use explicit waits for iframe availability
- Encapsulate iframe logic in Page Objects
- Log iframe switches for debugging

---

## Interview Notes 🎯

**Q: Why can’t Selenium access elements inside an iframe directly?**  
A: Because iframes create a separate DOM context.

**Q: How do you handle nested iframes?**  
A: Switch sequentially into each iframe.

**Q: How do you come back to main page?**  
A: Using `defaultContent()`.

---

## Real-Project Tip 💡

Payment flows almost always use iframes — poor iframe handling is a common cause of flaky tests.

---

## Summary

- IFrames isolate DOM context
- Context switch is mandatory
- Explicit waits improve stability
- Always exit iframe after use

Selenium 4 compliant • Production safe • Interview ready