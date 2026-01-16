---
sidebar_position: 1
---

## Introduction

Mouse interactions in Selenium WebDriver allow automation of user gestures such as hover, single click, double click, right click, drag‑and‑drop, and scrolling.
Selenium provides a low‑level Actions API that models a mouse as a pointer device and lets tests build complex sequences of pointer movements and button presses.

## Actions class basics

The `Actions` class in Selenium is the main entry point for mouse and keyboard interactions in Java.
It is created by passing a WebDriver instance and then used to build and execute high‑level methods like `click`, `doubleClick`, `contextClick`, `moveToElement`, and `dragAndDrop`.

Key setup points:

- Import: `org.openqa.selenium.interactions.Actions` in Java.
- Initialize once per test or per page: `Actions actions = new Actions(driver);`.
- Execute actions using `perform()`; `build().perform()` is mainly needed for older multi‑step chains and is now optional in most simple usages.


## Simple click and click‑and‑hold

A normal WebElement `click()` calls a simple JavaScript click on the element, but Actions can perform a real pointer click that first moves to the element and then presses and releases the mouse button.
This is useful when standard `click()` fails due to overlays, offset positioning, or custom JavaScript handlers.

Common methods:

- `click(element)`: Move pointer to center of the element, press and release left button once.
- `clickAndHold(element)`: Move pointer and press the button without releasing, useful for drag operations or press‑and‑hold UIs.
- `release(element)` or `release()`: Release the pressed mouse button, typically used with `clickAndHold` to finish a drag sequence.


## Double click and right click

Some web applications require double clicks or context menu clicks, which can be simulated via Actions.
These operations also move the pointer to the target element before performing the actual button actions.

Important methods:

- `doubleClick(element)`: Performs a double left‑button click on the element, often used for opening items or triggering special actions.
- `contextClick(element)`: Performs a right‑click on the element, typically opening a context menu that can then be handled by further locators.


## Hover and move operations

Hover actions are essential for menus, tooltips, and hidden elements that appear only when the mouse pointer is over a specific region.
Actions provides element‑based and coordinate‑based movement to control the pointer precisely.

Useful movement methods:

- `moveToElement(element)`: Move the mouse to the center of the target element to trigger hover effects.
- `moveToElement(element, xOffset, yOffset)`: Move relative to the element’s top‑left corner, helpful for sliders and canvases.
- `moveByOffset(xOffset, yOffset)`: Move relative to the current pointer position, useful in combination with low‑level pointer sequences.


## Drag and drop interactions

Drag‑and‑drop is implemented as a combination of click‑and‑hold, move, and release, but Selenium also exposes higher‑level helper methods.
These help automate typical UI patterns like dragging cards, files, widgets, or sliders.

Core drag methods:

- `dragAndDrop(source, target)`: Click‑and‑hold `source`, move to `target`, and release, performing a full drag‑and‑drop in one call.
- `dragAndDropBy(source, xOffset, yOffset)`: Drag the element from its current location by the specified offset, good for sliders or grid moves.

For tricky apps, a custom chain such as `clickAndHold(source).moveToElement(target).release().perform()` can be used when the high‑level helper does not work reliably.

## Low‑level pointer actions

Beyond the high‑level Actions methods, Selenium exposes low‑level pointer control using `PointerInput` and `Sequence`, mainly needed for advanced scenarios and fine‑grained testing.
These APIs allow specifying pointer origin, coordinates, button codes (left, right, back, forward), and durations between events.

Examples of what low‑level pointer actions can do:

- Move from viewport origin or current pointer location using `PointerInput.Origin.viewport()` and custom coordinates.
- Simulate browser back and forward mouse buttons with `MouseButton.BACK` or `MouseButton.FORWARD`, which can drive navigation without calling standard navigation APIs.

In typical frameworks, keep low‑level sequences wrapped behind utility methods so tests remain readable.

## Scroll and wheel actions (Selenium 4)

Selenium 4 introduced dedicated wheel actions for scrolling, implemented as another input source controlled through the Actions API.
This removes the need to rely on JavaScript scrolling for many common scenarios and improves cross‑browser behavior.

Common scrolling patterns:

- Scroll to element: Scroll the page so that a specific element becomes visible, then interact with it.
- Scroll by fixed amount: Scroll by a given x and y offset from the top‑left of the viewport using wheel actions or helper methods like `scrollByAmount`.


## Actions vs WebElement click

Basic interactions such as button clicks or simple links can often be handled using WebElement methods alone.
The Actions API should be preferred when the app relies on hover, drag, complex pointer gestures, or when standard clicks are blocked by overlays, animations, or custom JavaScript.

Guideline overview:

- Use `element.click()` when the element is immediately visible, clickable, and no advanced gesture is needed.
- Use Actions when:
    - The element becomes visible only on hover.
    - Drag‑and‑drop is required.
    - Precise offsets or complex sequences are needed.


## Best practices for mouse actions

Well‑structured mouse interactions reduce flakiness and make UI tests more stable.
Combining Actions with robust waits and careful element selection is critical, especially with dynamic, JavaScript‑heavy interfaces.

Key best practices:

- Always wait for elements to be visible and interactable before performing mouse actions, preferably using explicit waits.
- Scroll elements into view before interacting if they are off‑screen, either using wheel actions or JavaScript as a fallback.
- Prefer high‑level Actions methods first; use low‑level pointer sequences only when absolutely necessary and encapsulate them in helper methods.
- Avoid mixing many overlapping interaction techniques in the same step (for example, do not chain JavaScript click, Actions click, and Robot events for the same control unless debugging).


## Summary table of common mouse methods

| Use case | Recommended method chain (Java) |
| :-- | :-- |
| Simple pointer click | `actions.click(element).perform();` |
| Hover over element | `actions.moveToElement(element).perform();` |
| Double click | `actions.doubleClick(element).perform();`  |
| Right click (context menu) | `actions.contextClick(element).perform();`  |
| Drag element to another element | `actions.dragAndDrop(src, dst).perform();`  |
| Drag element by offset | `actions.dragAndDropBy(src, x, y).perform();` |
| Click and hold, then release | `actions.clickAndHold(src).moveToElement(dst).release().perform();` |
| Move by offset from current pos | `actions.moveByOffset(x, y).perform();` [^1][^4] |
| Scroll to bring element into view | Scroll or wheel actions, then `moveToElement(element).click()` |


