---
sidebar_position: 8
---

# Multi-Select Dropdown

## UI Behavior (Real Project Context)
Multi-select dropdowns allow users to select **multiple options from a single `<select>` element**. They are less common in modern UIs but still appear in:
- Admin panels
- Report filters
- Legacy enterprise applications

HTML uses the `multiple` attribute.

---

## Typical HTML You’ll See

```html
<select id="skills" multiple>
  <option value="java">Java</option>
  <option value="selenium">Selenium</option>
  <option value="api">API</option>
</select>
```

---

## Locating Multi-Select Dropdown

```java
WebElement skillsDropdown = driver.findElement(By.id("skills"));
Select select = new Select(skillsDropdown);
```

⚠️ Always verify it supports multiple selection.

```java
Assert.assertTrue(select.isMultiple());
```

---

## Selecting Multiple Options

### Select by Visible Text
```java
select.selectByVisibleText("Java");
select.selectByVisibleText("Selenium");
```

### Select by Value
```java
select.selectByValue("api");
```

---

## Unselect Options

### Unselect Specific Option
```java
select.deselectByVisibleText("Java");
```

### Unselect All (Very Useful)
```java
select.deselectAll();
```

---

## Verify Selected Options

```java
List<WebElement> selectedOptions = select.getAllSelectedOptions();

for (WebElement option : selectedOptions) {
    System.out.println(option.getText());
}

Assert.assertEquals(selectedOptions.size(), 2);
```

---

## Validate Selection Order (If Required)

```java
List<String> actual = selectedOptions.stream()
    .map(WebElement::getText)
    .toList();

List<String> expected = List.of("Java", "Selenium");
Assert.assertEquals(actual, expected);
```

---

## Real-World Scenario

Example: Select multiple report filters and validate backend request payload contains all values.

---

## Common Mistakes ❌

1. Using multi-select logic on non-multi dropdowns
2. Forgetting to check `isMultiple()`
3. Using index-based selection
4. Not clearing selections before reusing dropdown
5. Confusing custom dropdowns with native multi-selects

---

## Best Practices ✅

- Always verify `isMultiple()` before multi-select actions
- Prefer visible text selection
- Use `deselectAll()` between test cases
- Wrap logic inside Page Object methods
- Validate selection count and values

---

## Interview Notes 🎯

**Q: How do you identify a multi-select dropdown?**  
A: By checking the `multiple` attribute or using `isMultiple()`.

**Q: How do you select multiple values?**  
A: Call `selectByVisibleText()` or `selectByValue()` multiple times.

**Q: How do you clear selections?**  
A: Using `deselectAll()`.

---

## Real-Project Tip 💡

Multi-select dropdowns are often replaced by custom components — always inspect HTML before deciding automation strategy.

---

## Summary

- Multi-select uses `<select multiple>`
- Selenium `Select` class is required
- Supports select & deselect operations
- Must validate selected values explicitly

Selenium 4 compliant • Enterprise-safe • Interv