---
sidebar_position: 3
---

# Button

Buttons are core interactive elements used to **submit forms, trigger actions,
navigate flows, and perform critical user operations**.

Handling buttons correctly is essential for stable Selenium automation.

---

## What is a Button?

A button can be implemented using:
- `<button>`
- `<input type="button">`
- `<input type="submit">`
- `<a>` styled as a button

---

## Locating Buttons

Preferred locators:
- id
- name
- cssSelector
- xpath (when necessary)

```java
WebElement loginBtn = driver.findElement(By.id("loginBtn"));
```

---

## Clicking a Button

### Standard Click

```java
loginBtn.click();
```

Use when:
- Button is visible
- Button is enabled
- No overlay issues

---

## Validating Button State

### isDisplayed()

```java
loginBtn.isDisplayed();
```

### isEnabled()

```java
loginBtn.isEnabled();
```

Common validations:
- Disabled submit button
- Conditional enablement after form fill

---

## Handling Disabled Buttons

Selenium **cannot click disabled buttons**.

Validation approach:
```java
Assert.assertFalse(loginBtn.isEnabled());
```

---

## Clicking Using JavaScript (Fallback)

Use only when normal click fails due to UI issues.

```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("arguments[0].click();", loginBtn);
```

⚠️ Use sparingly — indicates UI or locator issues.

---

## Buttons with Dynamic Loading

Common issues:
- Button enabled after AJAX call
- Button appears after validation

Solution:
- Use explicit waits
- Wait for clickability

```java
wait.until(ExpectedConditions.elementToBeClickable(loginBtn));
```

---

## Common Mistakes ❌

- Clicking without waits
- Using JS click everywhere
- Ignoring disabled state
- Hardcoding sleeps

---

## Best Practices ✅

- Validate visibility & enablement
- Prefer normal click
- Use waits, not sleep
- Use JS click only as fallback

---

## Interview Notes 🎯

**Q:** How do you handle a button that is visible but not clickable?  
**A:** Use explicit waits and check overlays or enablement.

**Q:** When should JavaScript click be used?  
**A:** Only when normal click fails due to UI issues.

---

## Key Takeaways

- Buttons trigger critical actions
- Always validate state before click
- Synchronization is crucial
- JS click is a fallback, not default

---

## What’s Next?

👉 **Links**
