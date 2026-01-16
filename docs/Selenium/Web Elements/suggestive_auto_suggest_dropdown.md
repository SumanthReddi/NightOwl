---
sidebar_position: 9
---

# Suggestive (Auto-Suggest) Dropdown

## UI Behavior (Real Project Context)
Suggestive (auto-suggest) dropdowns display suggestions **dynamically** as the user types. They are **not** `<select>` elements and are usually powered by JavaScript + API calls.

Common real-world usages:
- City / Airport search
- Product search
- Customer lookup
- Address autocomplete

⚠️ Selenium `Select` class **does NOT apply** here.

---

## Typical HTML Patterns

### Input with Dynamic Suggestions
```html
<input type="text" id="city">
<ul class="suggestions">
  <li>Hyderabad</li>
  <li>Bangalore</li>
</ul>
```

### Div/Span Based Suggestions
```html
<div class="suggestion-item">Chennai</div>
```

Suggestions usually appear **after typing** and may change with every keystroke.

---

## Core Automation Strategy

1. Type text into input box
2. Wait for suggestions to appear
3. Capture all suggestion elements
4. Iterate and select matching value

---

## Typing into Input

```java
WebElement cityInput = driver.findElement(By.id("city"));
cityInput.sendKeys("Ban");
```

---

## Waiting for Suggestions (Mandatory)

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

List<WebElement> suggestions = wait.until(
    ExpectedConditions.visibilityOfAllElementsLocatedBy(
        By.cssSelector(".suggestions li")
    )
);
```

---

## Selecting a Value from Suggestions

```java
for (WebElement suggestion : suggestions) {
    if (suggestion.getText().equalsIgnoreCase("Bangalore")) {
        suggestion.click();
        break;
    }
}
```

---

## Keyboard-Based Selection (When Mouse Click Fails)

```java
cityInput.sendKeys(Keys.ARROW_DOWN);
cityInput.sendKeys(Keys.ENTER);
```

Useful when suggestions are not directly clickable.

---

## Validation After Selection

```java
String selectedValue = cityInput.getAttribute("value");
Assert.assertEquals(selectedValue, "Bangalore");
```

---

## Handling API-Driven Delays

Suggestions often depend on network responses.

### Recommended
- Explicit waits
- Wait for minimum suggestion count

```java
wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(
    By.cssSelector(".suggestions li"), 0));
```

---

## Common Mistakes ❌

1. Using `Select` class
2. Clicking suggestions without wait
3. Using hard sleeps (`Thread.sleep`)
4. Matching partial text blindly
5. Ignoring stale elements on re-type

---

## Best Practices ✅

- Always wait for suggestions to load
- Match full visible text when possible
- Re-locate elements after re-typing
- Prefer click over keyboard when stable
- Add retries for flaky suggestion lists

---

## Interview Notes 🎯

**Q: Can `Select` class be used for auto-suggest dropdowns?**  
A: No. They are not `<select>` elements.

**Q: Biggest challenge in auto-suggest automation?**  
A: Synchronization with dynamic suggestions.

**Q: How do you handle API delay?**  
A: Using explicit waits for element count or visibility.

---

## Real-Project Tip 💡

Auto-suggest dropdowns are a major source of flaky tests — stabilize them with strong waits and retries.

---

## Summary

- Auto-suggest dropdowns are dynamic
- `Select` class is not applicable
- Explicit waits are mandatory
- Validation must check input value

Selenium 4 compliant • Real-world safe • Interview ready