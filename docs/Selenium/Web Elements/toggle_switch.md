---
sidebar_position: 16
---

# Toggle Switch

## UI Behavior (Real Project Context)
A toggle switch is a modern UI control that functions like a checkbox but provides an enhanced visual representation for ON/OFF states (e.g., dark mode switches, settings toggles). Selenium WebDriver automation for toggle switches in Java is similar to checkbox automation, though the underlying HTML and classes are often styled for appearance rather than using a standard checkbox element.

Common real-world usages:
- Enable notifications
- Dark mode
- Feature flags
- Privacy settings

<!-- ### Toggle UI Example (Visual Reference)
![Toggle switch example](https://upload.wikimedia.org/wikipedia/commons/3/3f/Toggle_switch_ui_example.png) -->

---

## Typical HTML Implementations

### Checkbox-Based Toggle (Most Common)
```html
<label class="switch">
  <input type="checkbox" id="darkMode">
  <span class="slider"></span>
</label>
```

### Div-Based Toggle (Custom JS)
```html
<div class="toggle" data-state="off"></div>
```

---

## Key Automation Insight

A toggle **may look like a switch**, but technically it is often:
- a checkbox (`<input type="checkbox">`) **or**
- a clickable div/span with JS state

Your automation strategy depends on this.

---

## Checkbox-Based Toggle Handling

### Locate Toggle
```java
WebElement toggle = driver.findElement(By.id("darkMode"));
```

### Turn ON
```java
if (!toggle.isSelected()) {
    toggle.click();
}
```

### Turn OFF
```java
if (toggle.isSelected()) {
    toggle.click();
}
```

---

## Div-Based Toggle Handling

### Click Toggle
```java
WebElement toggle = driver.findElement(By.cssSelector(".toggle"));
toggle.click();
```

### Validate State via Attribute
```java
String state = toggle.getAttribute("data-state");
Assert.assertEquals(state, "on");
```

---

## Validation Strategies (Critical)

### 1. Validate UI State
```java
Assert.assertTrue(toggle.isSelected());
```

### 2. Validate CSS Change (Optional)
```java
String color = toggle.getCssValue("background-color");
```

### 3. Validate Backend Impact (Recommended)
Ensure setting is persisted after refresh.

---

## Waiting for Toggle State Change

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(driver -> toggle.isSelected());
```

---

## Common Mistakes ❌

1. Treating toggle as radio button
2. Clicking without checking current state
3. Validating only UI color change
4. Ignoring backend persistence
5. Assuming all toggles are checkboxes

---

## Best Practices ✅

- Identify underlying HTML first
- Always check state before click
- Validate both UI and persisted state
- Encapsulate toggle logic in Page Objects
- Avoid hard waits

---

## Interview Notes 🎯

**Q: Is a toggle switch different from a checkbox?**  
A: UI-wise yes, but technically many toggles are implemented as checkboxes.

**Q: How do you validate a toggle is ON?**  
A: Using `isSelected()` or state attributes.

**Q: What’s the biggest risk with toggle automation?**  
A: Assuming implementation without inspecting HTML.

---

## Real-Project Tip 💡

Always refresh the page after toggling a setting to confirm the state is persisted.

---

## Summary

- Toggles represent binary states
- Implementation varies (checkbox vs div)
- State validation is critical
- Backend persistence must be verified

Selenium 4 compliant • Real-project focused • Interview ready

