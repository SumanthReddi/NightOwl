---
sidebar_position: 5
---
# Radio Button

## What Is a Radio Button (UI Perspective)
Radio buttons allow users to select **exactly one option** from a group. In real web applications, they are commonly used for:
- Gender selection
- Payment methods
- Account type selection
- Delivery options

Only one radio button in a group (same `name` attribute) can be selected at a time.

---

## Real-Project HTML Examples

### Standard Radio Button
```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```

### Radio Button with Label (Most Common)
```html
<input type="radio" id="credit" name="payment" value="credit">
<label for="credit">Credit Card</label>
```

### Custom Styled Radio (Hidden Input)
```html
<input type="radio" name="plan" value="basic" style="display:none">
<div class="radio-ui">Basic Plan</div>
```

---

## Locating Radio Buttons (Best Strategies)

### Preferred Locators
- `id` (if available)
- `name + value`
- XPath using label text
- Relative locators (Selenium 4)

### Example Locators
```java
// By ID
WebElement creditRadio = driver.findElement(By.id("credit"));

// By name and value
WebElement maleRadio = driver.findElement(By.xpath("//input[@name='gender' and @value='male']"));

// By label text
WebElement creditRadio = driver.findElement(
    By.xpath("//label[text()='Credit Card']/preceding-sibling::input")
);
```

---

## Selecting a Radio Button

### Basic Click
```java
creditRadio.click();
```

### Safe Selection (Recommended)
```java
if (!creditRadio.isSelected()) {
    creditRadio.click();
}
```

### Using JavaScript (When Normal Click Fails)
```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("arguments[0].click();", creditRadio);
```

---

## Verifying Radio Button State

### Check If Selected
```java
boolean isSelected = creditRadio.isSelected();
```

### Validate Only One Selection in Group
```java
List<WebElement> radios = driver.findElements(By.name("payment"));

int selectedCount = 0;
for (WebElement radio : radios) {
    if (radio.isSelected()) {
        selectedCount++;
    }
}
Assert.assertEquals(selectedCount, 1);
```

---

## Handling Custom Radio Buttons (Real-World Scenario)

In many modern apps, the actual `<input>` is hidden and clicking a UI wrapper triggers selection.

### Strategy
- Click the visible element (div/span)
- Verify selection via hidden input

```java
WebElement basicPlanUI = driver.findElement(By.cssSelector(".radio-ui"));
basicPlanUI.click();

WebElement hiddenRadio = driver.findElement(By.xpath("//input[@value='basic']"));
Assert.assertTrue(hiddenRadio.isSelected());
```

---

## Common Mistakes ❌

1. Clicking without checking `isSelected()` (causes unnecessary DOM events)
2. Using index-based XPath (`//input[2]`) — very brittle
3. Assuming `click()` will work on hidden radios
4. Not validating group behavior (multiple selections)
5. Using Thread.sleep instead of waiting for visibility

---

## Best Practices ✅

- Always validate selection using `isSelected()`
- Prefer `label`-based XPath for stability
- Handle custom radios explicitly
- Group radios using `name` attribute validation
- Add logging for selection steps in frameworks

---

## Interview Notes 🎯

### Common Interview Questions

**Q: Can multiple radio buttons be selected at once?**  
A: No. Radio buttons with the same `name` attribute allow only one selection.

**Q: How do you verify a radio button is selected?**  
A: Using `isSelected()` method.

**Q: What if radio button is hidden?**  
A: Click the visible UI element or use JavaScript, then verify selection on the hidden input.

**Q: Difference between checkbox and radio button?**  
A: Checkbox allows multiple selections; radio button allows only one per group.

---

## Real-Project Tip 💡

Always validate **both UI behavior and backend impact** when selecting radio buttons (e.g., payment method affecting form fields).

---

## Summary

- Radio buttons represent exclusive choices
- `isSelected()` is critical for validation
- Custom radios need special handling
- Group behavior must be tested

This topic is **Selenium 4 compliant**, **real-project focused**, and **interview-ready**.

