---
sidebar_position: 2
---
Here is a detailed list of different types of XPath and CSS selectors that you can include in the introduction to Selenium locators:

***

### XPath Types in Selenium

1. **Absolute XPath**
    - Specifies the full path from the root `/html` to the target element.
    - Example:

```xpath
/html/body/div[^1]/form/input[^2]
```

    - Fragile, as any DOM change breaks this path.
2. **Relative XPath**
    - Starts with `//` and finds element anywhere in the DOM with specified conditions.
    - Example:

```xpath
//input[@id='username']
```

3. **XPath by Attribute**
    - Finds element matching attribute(s).
    - Example:

```xpath
//input[@name='password']
```

4. **XPath by Text**
    - Locates element by exact inner text.
    - Example:

```xpath
//button[text()='Submit']
```

5. **XPath using contains()**
    - Partial match for attribute or text value.
    - Example (attribute):

```xpath
//input[contains(@id, 'user')]
```

    - Example (text):

```xpath
//a[contains(text(), 'Login')]
```

6. **XPath using starts-with()**
    - Matches attribute starting with specified string.
    - Example:

```xpath
//input[starts-with(@name, 'user')]
```

7. **XPath using ends-with()** (supported in XPath 2.0, not widely supported in Selenium)
    - Matches attribute ending with specified string.
8. **XPath with Logical Operators**
    - Combine conditions with `and`, `or`.
    - Example:

```xpath
//input[@type='text' and @name='username']
```

9. **XPath Axes** (navigate relationships)
    - `parent::`, `child::`, `ancestor::`, `descendant::`, `following-sibling::`, etc.
    - Example:

```xpath
//label[text()='Username']/following-sibling::input
```

10. **Indexed XPath**
    - Select element by position among siblings.
    - Example:

```xpath
(//input[@type='text'])[^2] 
```

### XPath Locator Types and Examples

| XPath Locator | Example | Description |
| :-- | :-- | :-- |
| **Absolute XPath** | `/html/body/div[^1]/input[^2]` | Full path from root; fragile |
| **Relative XPath** | `//input[@id='username']` | Search anywhere in DOM |
| **Contains (Attribute)** | `//input[contains(@id,'user')]` | Partial attribute match |
| **Starts-With** | `//input[starts-with(@name,'user')]` | Attribute starts with value |
| **Ends-With** | (Not fully supported in Selenium XPath) | Attribute ends with value |
| **Text Match** | `//button[text()='Submit']` | Exact text content match |
| **Logical And/Or** | `//input[@type='text' and @name='username']` | Combine conditions |
| **Axes (Sibling/Parent)** | `//label[text()='Username']/following-sibling::input` | Navigate relationships |
| **Indexed XPath** | `(//input[@type='text'])[^2]` | Selecting element by index |


***

### CSS Selector Types in Selenium

1. **By ID**
    - `#id`
    - Example:

```css
#loginButton
```

2. **By Class Name**
    - `.className`
    - Example:

```css
.btn-primary
```

3. **By Attribute**
    - `[attribute='value']`
    - Example:

```css
input[name='username']
```

4. **By Partial Attribute Match**
    - Starts with: `[attr^='value']`

```css
input[name^='user']
```

    - Ends with: `[attr$='value']`

```css
input[name$='name']
```

    - Contains: `[attr*='value']`

```css
input[name*='serna']
```

5. **By Tag and Class**
    - Tag with class
    - Example:

```css
button.btn-primary
```

6. **By Descendant**
    - Select elements inside another
    - Example:

```css
div.form-group input
```

7. **By Child**
    - Direct child selector (`>`)
    - Example:

```css
div.container > input
```

8. **By Sibling**
    - Adjacent sibling (`+`) or general sibling (`~`)
    - Example:

```css
label + input
```

9. **Using Multiple Classes**
    - Example:

```css
.btn.btn-primary
```


### CSS Selector Types and Examples

| CSS Selector Type | Example | Description |
| :-- | :-- | :-- |
| **ID Selector** | `#loginButton` | Select element by ID |
| **Class Selector** | `.btn-primary` | Select by class name |
| **Attribute Selector** | `input[name='email']` | Select elements by attribute |
| **Starts-With Attribute** | `input[name^='user']` | Attribute starts with value |
| **Ends-With Attribute** | `input[name$='name']` | Attribute ends with value |
| **Contains Attribute** | `input[name*='serna']` | Attribute contains substring |
| **Descendant Selector** | `div.form-group input` | Select element inside container |
| **Child Selector** | `div.container > input` | Select direct child only |
| **Sibling Selector** | `label + input` | Next sibling selector |
| **Multiple Classes** | `.btn.btn-primary` | Element with multiple classes |


***

### Summary Table

| Locator Type | Syntax Example | Description |
| :-- | :-- | :-- |
| Absolute XPath | `/html/body/div[^1]/input[^1]` | Full path from root |
| Relative XPath | `//input[@id='username']` | Anywhere in DOM, attribute based |
| XPath Contains | `//input[contains(@id,'user')]` | Partial attribute match |
| XPath Starts-With | `//input[starts-with(@name,'us')]` | Attribute starts with value |
| XPath Axes | `//label[text()='Name']/following-sibling::input` | Relational navigation |
| CSS ID Selector | `#loginBtn` | Select by id |
| CSS Class Selector | `.btn-primary` | Select by class |
| CSS Attribute Selector | `input[name='email']` | Select by attribute |
| CSS Attribute Partial | `[name^='user']`, `[name$='name']` | Partial attribute match |
| CSS Descendant | `div.form-group input` | Descendant elements |


### Key Tips

- Use **ID** locators when unique and available — fastest and most stable.
- Use **CSS Selectors** for complex style/class matching with good performance.
- Use **XPath** for complex UI trees, text matches, or relations when CSS is insufficient.
- Prefer **Relative XPath** over Absolute XPath for robust tests.
- Use `contains()`, `starts-with()` in XPath and CSS attribute selectors for dynamic attributes.
- Avoid overly complex locators that are brittle and difficult to maintain.


This includes the main XPath and CSS locator types used in Selenium WebDriver for robust web element identification and automation.
