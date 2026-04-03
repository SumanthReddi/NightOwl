---
sidebar_position: 2
---

# Selenium Architecture

Understanding Selenium architecture is critical for writing **stable, scalable,
and debuggable automation frameworks**. It explains how your test code actually
controls a browser.

---

## High-Level Selenium Architecture

Selenium follows a **client–server architecture**.

```
Test Script
   ↓
Selenium Client (Language Binding)
   ↓
WebDriver API
   ↓
Browser Driver
   ↓
Real Browser
```

Each layer has a clear responsibility.

---

## Selenium Client (Language Binding)

This is the Selenium library for your programming language.

Examples:
- Java → selenium-java
- Python → selenium
- C# → Selenium.WebDriver

Responsibilities:
- Exposes Selenium APIs
- Translates commands into WebDriver protocol

---

## WebDriver

WebDriver is a **standardized browser automation interface**.

Responsibilities:
- Defines commands like click, sendKeys, navigate
- Acts as a bridge between test code and browser driver
- Uses W3C WebDriver standard

---

## Browser Drivers

Browser drivers act as **adapters** between WebDriver and browsers.

Examples:
- ChromeDriver → Chrome
- GeckoDriver → Firefox
- EdgeDriver → Edge
- SafariDriver → Safari

Responsibilities:
- Receive WebDriver commands
- Translate them into browser-specific instructions

---

## Real Browser

The actual browser:
- Renders UI
- Executes JavaScript
- Responds to user actions

Selenium **does not simulate browsers** — it controls real ones.

---

## JSON Wire Protocol vs W3C WebDriver

### JSON Wire Protocol (Old)
- Selenium 2 / early Selenium 3
- Non-standard
- Vendor-specific behavior

### W3C WebDriver (Current)
- Standardized protocol
- Selenium 4 compliant
- Cross-browser consistency

Modern Selenium uses **only W3C WebDriver**.

---

## Why Architecture Matters

Understanding architecture helps with:
- Debugging driver issues
- Solving version mismatches
- Explaining failures in CI
- Designing scalable frameworks

---

## Common Misconceptions ❌

- Selenium directly talks to browser ❌
- Selenium simulates browser ❌
- WebDriver = browser ❌

---

## Key Takeaways

- Selenium uses a layered architecture
- WebDriver is the core interface
- Browser drivers are mandatory
- Selenium 4 uses W3C standard
