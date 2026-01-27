---
sidebar_position: 12
---

# SeleniumLibrary UI Automation

SeleniumLibrary enables **web UI automation** in Robot Framework by providing
high-level keywords built on top of Selenium WebDriver.

Robot Framework itself does not automate browsers — **SeleniumLibrary does**.

---

## What is SeleniumLibrary?

SeleniumLibrary is a Robot Framework library that:
- Wraps Selenium WebDriver
- Exposes browser actions as readable keywords
- Hides low-level WebDriver complexity

Used for:
- Web UI testing
- End-to-end automation
- Cross-browser testing

---

## Browser Management

Common browser keywords:

```robot
Open Browser    https://example.com    chrome
Close Browser
Close All Browsers
Maximize Browser Window
```

Best practice:
- Open browser in **Test Setup**
- Close browser in **Test Teardown**

---

## Locators in Robot Framework

Robot supports multiple locator strategies:

- id
- name
- xpath
- css
- class
- link

Example:

```robot
Click Element    id=loginBtn
Input Text       xpath=//input[@name='username']    admin
```

Best practices:
- Prefer id or name
- Avoid brittle XPath
- Centralize locators in keywords

---

## Wait Mechanisms

Avoid using `Sleep`.

Preferred waits:
- Wait Until Element Is Visible
- Wait Until Element Is Enabled
- Wait Until Page Contains Element

Example:

```robot
Wait Until Element Is Visible    id=dashboard
```

---

## User Actions

Common actions:
- Click Element
- Input Text
- Select From List By Value
- Mouse Over
- Press Keys

---

## Handling Alerts, Frames, and Windows

### Alerts
```robot
Handle Alert    ACCEPT
```

### Frames
```robot
Select Frame    id=frame1
Unselect Frame
```

### Windows
```robot
Switch Window    NEW
```

---

## Page Object Style in Robot Framework

Recommended approach:
- Encapsulate UI actions inside keywords
- Keep test cases readable
- Avoid Selenium code in test cases

---

## Common Mistakes ❌

- Using Sleep
- Writing locators in test cases
- Hardcoding waits
- Mixing UI logic with validation

---

## Best Practices ✅

- Use explicit waits
- One keyword = one UI responsibility
- Isolate UI logic
- Design for maintainability

---

## Key Takeaways

- SeleniumLibrary handles UI automation
- Keywords abstract Selenium complexity
- Proper waits prevent flakiness
- Clean structure scales well
