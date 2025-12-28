---
sidebar_position: 2
---

## What is a window handle?

A window handle is a unique string ID that represents a specific browser window or tab within a single WebDriver session.
Selenium does not distinguish between “window” and “tab”; both are addressed using these window handles for switching and control.

***

## Core methods and syntax (Java)

Selenium WebDriver exposes a few core methods for window handling in Java.

- Get current window handle (parent/main):
    - Syntax:
        - `String parentHandle = driver.getWindowHandle();`
- Get all window handles (all open windows/tabs):
    - Syntax:
        - `Set<String> handles = driver.getWindowHandles();`
- Switch to a window/tab by handle:
    - Syntax:
        - `driver.switchTo().window(handle);`
- Maximize/Minimize the browser:
    - Syntax:
        - `driver.manage.window.maximize()`     // maximize the window
        - `driver.manage.window.minimize()`     // minimize the window
- Open a new tab or window and switch (Selenium 4):
    - Syntax:
        - `driver.switchTo().newWindow(WindowType.TAB);`
        - `driver.switchTo().newWindow(WindowType.WINDOW);`
- Close current window and quit all:
    - Syntax:
        - `driver.close();`  // closes current window only
        - `driver.quit();`   // closes all windows and ends session

***

## Basic algorithm: parent and single child window

Typical flow when a click opens one new window:

1. Store parent window handle using `getWindowHandle()`.
2. Perform action that opens the new window/tab.
3. Get all handles using `getWindowHandles()` and iterate them.
4. For any handle not equal to parent handle, switch using `driver.switchTo().window(childHandle);`.
5. Perform required actions in child window, then close it and switch back to parent.

Essential Java syntax pattern:

- Get parent: `String parent = driver.getWindowHandle();`
- Get all: `Set<String> handles = driver.getWindowHandles();`
- Loop:
    - `for (String handle : handles) { if (!handle.equals(parent)) driver.switchTo().window(handle); }`

***

## Handling multiple child windows/tabs (more than two)

When more than one child window opens, you still use the same `getWindowHandles()` set but need a clear strategy to select the correct handle.
Common approaches include iterating and identifying a window by title, URL, or other properties after switching.

Typical patterns:

- By title:
    - Loop through each handle, switch, then check `driver.getTitle()` and break when it matches the expected title.
- By URL fragment:
    - After switching, verify `driver.getCurrentUrl()` contains a specific path or domain for that window.
- Store handles in a List/array to index them when the open order is stable (e.g., index 0 = main, 1 = login popup, 2 = help page).

***

## Opening new tabs/windows explicitly (Selenium 4)

Selenium 4 introduced `newWindow` to open and switch in a single step.
This removes the need for JavaScript or keyboard tricks for new tabs in many cases.

Key syntaxes (Java):

- New tab and switch: `driver.switchTo().newWindow(WindowType.TAB);`
- New window and switch: `driver.switchTo().newWindow(WindowType.WINDOW);`

After opening, use `getWindowHandle()` to store the new handle if needed, and later `switchTo().window(handle)` to return.

***

## Tabs vs windows and special cases

WebDriver treats browser windows and tabs the same way at API level; both are “windows” with handles.
If multiple tabs exist in the same top‑level window, sometimes there is only one OS‑level window but multiple handles within the session.

Important points:

- Always use `driver.switchTo().window(handle)` before locating or interacting with elements in another tab/window.
- When the application uses keyboard shortcuts to open tabs, you may combine window handles with `sendKeys` (for example, `Keys.CONTROL + "t"`) and then re‑query `getWindowHandles()`.

***

## Returning to parent/main window

In real test flows, you often need to come back to the main application window.
The safest way is to store the parent handle as soon as the session starts or before opening new windows.

Typical pattern:

- Store: `String parent = driver.getWindowHandle();` at the beginning.
- After working in child windows, call `driver.switchTo().window(parent);` to restore focus.

***

## Closing specific windows and cleanup

Properly closing windows avoids stale handles and resource leakage.
Closing behavior:

- `driver.close()` closes only the currently focused window; WebDriver remains valid if at least one window is still open.
- After closing a child, switch back to a valid handle (usually the parent) before further actions.

Best practice patterns:

- After `driver.close()` on a child, immediately call `driver.switchTo().window(parentHandle);`.
- At the end of a test or suite, call `driver.quit()` to close all windows and end the WebDriver session.

***

## Best practices and common pitfalls

Robust window handling is critical for stable tests, especially with pop‑ups, OAuth, or payment gateways.
Many flaky tests come from incorrect assumptions about handle order or using stale handle sets.

Key best practices:

- **Always refresh handles after window changes**
    - After opening or closing windows, call `driver.getWindowHandles()` again; do not reuse old sets or lists.
- **Do not rely purely on index order**
    - Handle order may differ across browsers and runs; prefer identifying windows by title or URL.
- **Guard against missing handles**
    - Check if the desired handle exists in the current `getWindowHandles()` set before switching to avoid `NoSuchWindowException`.
- **Minimize open windows**
    - Close unused children quickly; many open tabs slow down execution and increase risk of stale handles.
- **Centralize window utilities in framework**
    - Create helper methods like `switchToWindowByTitle`, `switchToNewWindow`, `closeAllExceptParent` to keep test code clean and reusable.

***

## Quick reference table (Java)

| Concept | Method / Syntax (Java) |
| :-- | :-- |
| Get current (parent) handle | `String parent = driver.getWindowHandle();` |
| Get all handles | `Set<String> handles = driver.getWindowHandles();` |
| Switch to specific window | `driver.switchTo().window(handle);` |
| Open new tab and switch | `driver.switchTo().newWindow(WindowType.TAB);`  |
| Open new window and switch | `driver.switchTo().newWindow(WindowType.WINDOW);`  |
| Return to parent window | `driver.switchTo().window(parent);`  |
| Close current window | `driver.close();`  |
| Close all windows/end session | `driver.quit();` |