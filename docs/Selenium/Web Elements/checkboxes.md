---
sidebar_position: 6
---

# Checkboxes

## UI Behavior (Real Project Context)
Checkboxes allow users to select **one or more options independently**. Unlike radio buttons, each checkbox maintains its own state.

Common real-world usages:
- Accept terms & conditions
- Select multiple preferences
- Feature enable/disable flags
- Filters (e-commerce, dashboards)

---

## Typical HTML Patterns You’ll See

### Standard Checkbox
```html
<input type="checkbox" id="newsletter" value="yes">
<label for="newsletter">Subscribe to newsletter</label>
```

### Grouped Checkboxes
```html
<input type="checkbox" name="skills" value="java"> Java
<input type="checkbox" name="skills" value="selenium"> Selenium
<input type="checkbox" name="skills" value="api"> API
```

### Custom-Styled Checkbox (Very Common)
```html
<input type="checkbox" id="darkMode" hidden>
<div class="checkbox-ui">Dark Mode</div>
```

---

## Locating Checkboxes (Stable Approaches)

### Preferred
- `id`
- `label`-based XPath
- `name + value`
- CSS for UI wrappers (custom checkboxes)

```java
WebElement newsletter = driver.findElement(By.id("newsletter"));

WebElement seleniumSkill = driver.findElement(
    By.xpath("//input[@name='skills' and @value='selenium']")
);
```

---

## Selecting & Unselecting Checkboxes

### Safe Selection (Mandatory Pattern)
```java
if (!newsletter.isSelected()) {
    newsletter.click();
}
```

### Safe Unselect
```java
if (newsletter.isSelected()) {
    newsletter.click();
}
```

### Toggle Scenario
```java
newsletter.click();
```

---

## Verifying Checkbox State

```java
Assert.assertTrue(newsletter.isSelected());
```

### Validate Multiple Selections
```java
List<WebElement> skills = driver.findElements(By.name("skills"));

int selected = 0;
for (WebElement skill : skills) {
    if (skill.isSelected()) {
        selected++;
    }
}
Assert.assertTrue(selected >= 1);
```

---

## Handling Custom Checkboxes (Hidden Inputs)

### Strategy
- Click visible UI element
- Validate hidden input state

```java
WebElement darkModeUI = driver.findElement(By.cssSelector(".checkbox-ui"));
darkModeUI.click();

WebElement hiddenCheckbox = driver.findElement(By.id("darkMode"));
Assert.assertTrue(hiddenCheckbox.isSelected());
```

---

## Common Mistakes ❌

1. Clicking without checking `isSelected()`
2. Assuming checkbox behavior is exclusive (radio-style)
3. Using index-based XPath
4. Not validating unselect behavior
5. Ignoring hidden checkbox implementations

---

## Best Practices ✅

- Always check state before clicking
- Validate both select and unselect flows
- Prefer label-based locators
- Handle custom UI checkboxes explicitly
- Log checkbox state changes in test reports

---

## Interview Notes 🎯

**Q: Difference between checkbox and radio button?**  
A: Checkbox allows multiple independent selections; radio buttons allow only one selection per group.

**Q: How do you uncheck a checkbox?**  
A: Verify `isSelected()` and click only if it’s already selected.

**Q: How do you handle custom checkboxes?**  
A: Click the visible UI wrapper and validate the hidden input’s state.

---

## Real-Project Tip 💡

Always test checkbox behavior with form submission and backend validation — especially for compliance-related checkboxes.

---

## Summary

- Checkboxes support multiple selections
- `isSelected()` is critical
- Custom checkboxes are common in modern UIs
- Always test select and unselect scenarios

Selenium 4 compliant • Real-project ready • Interview safe

