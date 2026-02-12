---
sidebar_position: 1
---

# Actions Class

## Introduction

The **Actions** class in Selenium 4 provides advanced user interaction capabilities for both **mouse and keyboard gestures**. It models real user behavior using the W3C input action specification.

Use Actions when:

* Hover is required
* Drag-and-drop is needed
* Complex keyboard combinations are required
* Standard `click()` fails

Selenium 4 fully aligns with the **W3C WebDriver standard**, making Actions more stable and predictable than earlier versions.

---

## Basic Setup

```java
import org.openqa.selenium.interactions.Actions;

Actions actions = new Actions(driver);
```

Execute using:

```java
actions.perform();
```

`build().perform()` is optional in Selenium 4 and mainly useful for complex multi-step chains.

---

# 🖱 Mouse Interactions

## 1. Simple Click

```java
actions.click(element).perform();
```

Use when normal `element.click()` fails due to overlays or JS listeners.

---

## 2. Click and Hold

```java
actions.clickAndHold(element).perform();
```

Often used for drag operations.

---

## 3. Release

```java
actions.release().perform();
```

Typically chained after `clickAndHold()`.

---

## 4. Double Click

```java
actions.doubleClick(element).perform();
```

---

## 5. Right Click (Context Click)

```java
actions.contextClick(element).perform();
```

---

## 6. Hover (Mouse Over)

```java
actions.moveToElement(element).perform();
```

Required for menus, tooltips, hidden controls.

---

## 7. Move by Offset

```java
actions.moveByOffset(50, 100).perform();
```

Moves relative to current pointer position.

---

## 8. Drag and Drop

### Standard

```java
actions.dragAndDrop(source, target).perform();
```

### By Offset

```java
actions.dragAndDropBy(source, 100, 0).perform();
```

### Custom Reliable Pattern

```java
actions.clickAndHold(source)
       .moveToElement(target)
       .release()
       .perform();
```

---

# ⌨ Keyboard Interactions (Frequently Missed Concepts)

Keyboard handling is a major part of the Actions API and is often underused.

---

## 1. sendKeys via Actions

```java
actions.sendKeys("Hello World").perform();
```

Useful when no element is directly focused.

---

## 2. keyDown() and keyUp()  🔥 IMPORTANT

Used for modifier keys like:

* SHIFT
* CONTROL
* ALT
* COMMAND

### Example: Typing Uppercase

```java
actions.keyDown(Keys.SHIFT)
       .sendKeys("selenium")
       .keyUp(Keys.SHIFT)
       .perform();
```

---

## 3. Copy-Paste Example (CTRL + A, CTRL + C, CTRL + V)

```java
actions.keyDown(Keys.CONTROL)
       .sendKeys("a")
       .sendKeys("c")
       .keyUp(Keys.CONTROL)
       .perform();
```

Then paste:

```java
actions.keyDown(Keys.CONTROL)
       .sendKeys("v")
       .keyUp(Keys.CONTROL)
       .perform();
```

---

## 4. Sending Keys to Specific Element

```java
actions.sendKeys(element, "Text Input").perform();
```

---

## 5. Multiple Modifier Keys

Example: CTRL + SHIFT + T

```java
actions.keyDown(Keys.CONTROL)
       .keyDown(Keys.SHIFT)
       .sendKeys("t")
       .keyUp(Keys.SHIFT)
       .keyUp(Keys.CONTROL)
       .perform();
```

---

## 6. Using pause() Between Actions

```java
actions.clickAndHold(source)
       .pause(Duration.ofSeconds(1))
       .moveToElement(target)
       .release()
       .perform();
```

Useful for slow drag animations.

---

# 🔄 Composite Actions (Chaining)

Actions allows combining mouse + keyboard:

```java
actions.moveToElement(element)
       .click()
       .keyDown(Keys.SHIFT)
       .sendKeys("abc")
       .keyUp(Keys.SHIFT)
       .perform();
```

This simulates real human behavior.

---

# 🧠 Scroll & Wheel Actions (Selenium 4)

## Scroll to Element

```java
actions.scrollToElement(element).perform();
```

## Scroll by Amount

```java
actions.scrollByAmount(0, 300).perform();
```

Preferred over JavaScript scroll in modern Selenium.

---

# 🔬 Low-Level Pointer Control (Advanced)

Using `PointerInput` and `Sequence` for:

* Custom coordinates
* Back/Forward mouse buttons
* Fine-grained event timing

Only use in advanced scenarios. Wrap inside utilities.

---

# Actions vs WebElement Methods

| Scenario               | Recommended Approach      |
| ---------------------- | ------------------------- |
| Simple click           | `element.click()`         |
| Hover needed           | `Actions.moveToElement()` |
| Drag and drop          | `Actions.dragAndDrop()`   |
| Modifier keys required | `keyDown()` / `keyUp()`   |
| Complex gesture        | Chained Actions           |

---

# Common Mistakes ❌

* Forgetting `.perform()`
* Not releasing modifier keys
* Mixing JS click + Actions randomly
* Using Actions when simple click works
* Not waiting before performing actions

---

# Best Practices ✅

* Always apply explicit waits before Actions
* Keep complex chains inside page methods
* Prefer high-level APIs first
* Release modifier keys properly
* Use pause() only when necessary

---

# Interview Notes 🎯

**Q: What is keyDown used for?**
To press modifier keys like SHIFT or CONTROL before sending other keys.

**Q: Difference between sendKeys() and Actions sendKeys()?**
WebElement sendKeys targets a specific element. Actions can simulate global keyboard behavior.

**Q: Why use Actions instead of click()?**
For hover, drag, modifier keys, and complex gestures.

---

# Summary

* Actions handles advanced mouse & keyboard gestures
* keyDown/keyUp are critical for modifier combinations
* Selenium 4 provides stable W3C-compliant input actions
* Use Actions intentionally, not everywhere

## Summary Table – Common Actions Methods

| Use Case                           | Recommended Method Chain (Java)                                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| Simple click (real pointer click)  | `actions.click(element).perform();`                                                                                |
| Hover (mouse over)                 | `actions.moveToElement(element).perform();`                                                                        |
| Double click                       | `actions.doubleClick(element).perform();`                                                                          |
| Right click (context menu)         | `actions.contextClick(element).perform();`                                                                         |
| Click and hold                     | `actions.clickAndHold(element).perform();`                                                                         |
| Click–hold → move → release        | `actions.clickAndHold(src).moveToElement(dst).release().perform();`                                                |
| Drag and drop (element to element) | `actions.dragAndDrop(src, dst).perform();`                                                                         |
| Drag by offset (sliders)           | `actions.dragAndDropBy(src, x, y).perform();`                                                                      |
| Move by offset                     | `actions.moveByOffset(x, y).perform();`                                                                            |
| Scroll to element (Selenium 4)     | `actions.scrollToElement(element).perform();`                                                                      |
| Scroll by amount                   | `actions.scrollByAmount(0, 300).perform();`                                                                        |
| Send keys globally                 | `actions.sendKeys("text").perform();`                                                                              |
| Send keys to specific element      | `actions.sendKeys(element, "text").perform();`                                                                     |
| Hold modifier key (SHIFT example)  | `actions.keyDown(Keys.SHIFT).sendKeys("abc").keyUp(Keys.SHIFT).perform();`                                         |
| CTRL + A (select all)              | `actions.keyDown(Keys.CONTROL).sendKeys("a").keyUp(Keys.CONTOL).perform();`                                        |
| Multiple modifier keys             | `actions.keyDown(Keys.CONTROL).keyDown(Keys.SHIFT).sendKeys("t").keyUp(Keys.SHIFT).keyUp(Keys.CONTROL).perform();` |
| Add delay between actions          | `actions.clickAndHold(src).pause(Duration.ofSeconds(1)).release().perform();`                                      |
| Mouse + keyboard combo             | `actions.moveToElement(el).click().keyDown(Keys.SHIFT).sendKeys("abc").keyUp(Keys.SHIFT).perform();`               |

---

Selenium 4 compliant • Covers mouse + keyboard interactions • Interview ready


