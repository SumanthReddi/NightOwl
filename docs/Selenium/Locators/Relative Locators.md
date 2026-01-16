---
sidebar_position: 8
---

Relative locators in Selenium 4 let you find an element based on its **position** relative to another element: above, below, toLeftOf, toRightOf, or near.

***

## What are relative locators?

Relative locators (also called **friendly locators**) are new locator methods in Selenium 4 that use element coordinates (via `getBoundingClientRect()`) instead of only attributes like id or name.
They help when the target element has no stable attributes, but another nearby element is easy to locate.

Available methods in Java:

- `above(...)` – element(s) located vertically above a reference element.
- `below(...)` – element(s) vertically below a reference element.
- `toLeftOf(...)` – element(s) to the left of a reference element.
- `toRightOf(...)` – element(s) to the right of a reference element.
- `near(...)` – element(s) within roughly 50 pixels of a reference element, in any direction.

***

## Basic syntax (Java)

In Java, you use the `RelativeLocator.with(...)` factory plus one or more relative methods.

```java
import static org.openqa.selenium.support.locators.RelativeLocator.with;

WebElement reference = driver.findElement(By.id("password"));

WebElement username = driver.findElement(
        with(By.tagName("input")).above(reference)
);
```

Key points:

```
- `with(By ...)` defines **what type** of element you are looking for (e.g., any `<input>`, `<button>`, `<label>`).
```

- `above(reference)` adds a **positional constraint** relative to a known element (WebElement or another locator).

***

## Examples of each relative locator

### above()

Find an input **above** the password field (typical login form).

```java
WebElement password = driver.findElement(By.id("password"));

WebElement username = driver.findElement(
        with(By.tagName("input")).above(password)
);
username.sendKeys("user");
```

Use when:

- The field above has no good id/name but the element below does (e.g., password has stable id, username does not).

***

### below()

Find an input **below** the username field.

```java
WebElement username = driver.findElement(By.id("username"));

WebElement password = driver.findElement(
        with(By.tagName("input")).below(username)
);
password.sendKeys("secret");
```

Use when:

- Layout is vertical and you know the element above.

***

### toLeftOf()

Find a button **to the left of** a known button (e.g., Login to the left of Reset).

```java
WebElement resetBtn = driver.findElement(By.name("btnReset"));

WebElement loginBtn = driver.findElement(
        with(By.tagName("input")).toLeftOf(resetBtn)
);
loginBtn.click();
```

Use when:

- Two buttons are side by side with stable locator for only one of them.

***

### toRightOf()

Find a button **to the right of** another button.

```java
WebElement loginBtn = driver.findElement(By.name("btnLogin"));

WebElement resetBtn = driver.findElement(
        with(By.tagName("input")).toRightOf(loginBtn)
);
resetBtn.click();
```

Use when:

- Similar labels/buttons line up horizontally and you know one of them.

***

### near()

Find a label **near** an input (within ~50px).

```java
WebElement username = driver.findElement(By.id("username"));

WebElement label = driver.findElement(
        with(By.tagName("label")).near(username)
);
String text = label.getText();
```

Use when:

- You only know “a label near this field” but not the direction (above, left, etc.).
- Useful for dynamic UIs with small spacing.

***

## Chaining relative locators

You can combine multiple positional constraints for more precision.

```java
WebElement password = driver.findElement(By.name("password"));
WebElement resetBtn = driver.findElement(By.name("btnReset"));

WebElement loginBtn = driver.findElement(
        with(By.tagName("input"))
                .below(password)       // below password
                .toLeftOf(resetBtn)    // and left of Reset
);
loginBtn.click();
```

Chaining is helpful when:

- There are multiple inputs below the password field, but only one is also left of the Reset button.

***

## How they work internally

- Selenium calls `getBoundingClientRect()` in JavaScript to get each element’s `top`, `bottom`, `left`, `right` coordinates.
- For `above`/`below`, WebDriver compares Y‑coordinates; for `toLeftOf`/`toRightOf`, it compares X‑coordinates; for `near`, it calculates distance and filters within a default radius (~50 px).

***

## Best practices and limitations

- Always **combine with a base locator** (`with(By.tagName("input"))`) so Selenium knows which tag/type you want.
- Prefer relative locators when attributes are dynamic but layout is consistent; do not overuse them where a clean id/css/xpath exists.
- They depend on visual layout, so large responsive changes or A/B tests can affect results.