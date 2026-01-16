---
sidebar_position: 7
---

# Static Dropdown

## UI Behavior (Real Project Context)
Static dropdowns are HTML `<select>` elements with predefined options. Options do **not** change dynamically based on typing or API calls.

Common real-world usages:
- Country / State selection
- Date (Day / Month / Year)
- User role selection
- Payment tenure selection

---

## Typical HTML You’ll See

### Standard Select Dropdown
```html
<select id="country">
  <option value="">Select</option>
  <option value="IN">India</option>
  <option value="US">United States</option>
</select>
```

### Dropdown with Name Attribute
```html
<select name="role">
  <option value="admin">Admin</option>
  <option value="user">User</option>
</select>
```

---

## Locating Static Dropdowns (Stable)

### Preferred Locators
- `id`
- `name`
- Label-based XPath

```java
WebElement countryDropdown = driver.findElement(By.id("country"));
```

---

## Selecting Options (Correct Way)

⚠️ **Always use Selenium `Select` class** for static dropdowns.

```java
Select select = new Select(countryDropdown);
```

### Select by Visible Text (Most Stable)
```java
select.selectByVisibleText("India");
```

### Select by Value
```java
select.selectByValue("IN");
```

### Select by Index (Avoid in real projects)
```java
select.selectByIndex(1);
```

---

## Verifying Selected Option

```java
String selected = select.getFirstSelectedOption().getText();
Assert.assertEquals(selected, "India");
```

---

## Validate All Options in Dropdown

```java
List<WebElement> options = select.getOptions();

for (WebElement option : options) {
    System.out.println(option.getText());
}
```

---

## Check If Dropdown Allows Multiple Selection

```java
Assert.assertFalse(select.isMultiple());
```

---

## Real-World Validation Scenario

Example: Ensure "Select" is default value

```java
String defaultOption = select.getFirstSelectedOption().getText();
Assert.assertEquals(defaultOption, "Select");
```

---

## Common Mistakes ❌

1. Clicking `<option>` directly without `Select` class
2. Using index-based selection
3. Treating dynamic dropdowns as static
4. Not validating default option
5. Ignoring disabled options

---

## Best Practices ✅

- Use `selectByVisibleText()` whenever possible
- Always validate selected value
- Avoid index-based selection in production
- Confirm dropdown is not multi-select unless expected
- Wrap `Select` usage inside Page Object

---

## Interview Notes 🎯

**Q: When do you use `Select` class?**  
A: Only when the HTML element is `<select>`.

**Q: Can you use `Select` on custom dropdowns?**  
A: No. It works only for native `<select>` elements.

**Q: How do you get all dropdown values?**  
A: Using `getOptions()` method.

---

## Real-Project Tip 💡

Always confirm dropdown behavior in browser dev tools before choosing automation strategy.

---

## Summary

- Static dropdowns use `<select>` tag
- Selenium `Select` class is mandatory
- Visible text selection is safest
- Validation is as important as selection

Selenium 4 compliant • Production safe • Interview ready

