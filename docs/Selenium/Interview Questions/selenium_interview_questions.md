---
sidebar_position: 1
---

# Selenium Interview Questions

## How to Use This Document
These questions are **real interview questions** asked for Selenium UI automation roles. Answers are **concise, practical, and Selenium 4+ compliant**.

Focus is on **UI automation**, not API, DB, TestNG, or framework tools.

---

## Core Selenium Concepts


<details>
<summary>What is Selenium?</summary>

Selenium is a browser automation tool used to automate web applications by interacting with UI elements through WebDriver.

</details>

<details>
<summary>What is WebDriver?</summary>

WebDriver is an API that controls browsers programmatically and communicates using the W3C WebDriver protocol.

</details>

<details>
<summary>Difference between Selenium 3 and Selenium 4?</summary>

Selenium 4 is W3C-compliant, has native Shadow DOM support, relative locators, new window API, and improved Grid.

</details>

---

## Locators & Elements


<details>
<summary>Which locator is most reliable?</summary>

`id`, followed by `name`, and stable CSS selectors. XPath should be the last option.

</details>

<details>
<summary>Why should index-based XPath be avoided?</summary>

It breaks easily when the UI layout changes.

</details>

---

## Synchronization


<details>
<summary>Difference between implicit and explicit wait?</summary>

Implicit wait applies globally.

Explicit wait waits for a specific condition.

Explicit wait is preferred.

</details>

<details>
<summary>Why is Thread.sleep bad?</summary>

It causes unnecessary delays and flaky tests because it does not wait for conditions.

</details>

---

## Dynamic UI Handling


<details>
<summary>What causes StaleElementReferenceException?</summary>

DOM re-rendering or page refresh invalidates the element reference.

</details>

<details>
<summary>How do you handle dynamic elements?</summary>

Use explicit waits and re-locate elements after DOM changes.

</details>

---

## Advanced UI Topics


<details>
<summary>Can Selenium handle Shadow DOM?</summary>

Yes, Selenium 4 can handle open Shadow DOM using `getShadowRoot()`.

</details>

<details>
<summary>Can Selenium handle authentication popups?</summary>

Not directly. Use credential-in-URL for basic authentication.

</details>

---

## Selenium Grid


<details>
<summary>What is Selenium Grid?</summary>

A tool for parallel and distributed test execution across browsers and machines.

</details>

<details>
<summary>Does Grid fix flaky tests?</summary>

No. It exposes flaky tests; it does not fix them.

</details>

---

## CI/CD & Stability


<details>
<summary>Why do tests pass locally but fail in CI?</summary>

Slower environment, headless mode, timing issues, or parallel execution.

</details>

<details>
<summary>How do you reduce flaky tests?</summary>

Use proper waits, stable locators, and clean framework design.

</details>

---

## Scenario-Based Questions


<details>
<summary>Button is visible but not clickable. What do you do?</summary>

Wait for overlays/loaders to disappear and use `elementToBeClickable`.

</details>

<details>
<summary>Element exists but Selenium cannot find it. What do you do?</summary>

Check timing, iframe context, or Shadow DOM.

</details>

---

## Common Mistakes (Interview Red Flags) ❌

- Using Thread.sleep as solution
- Blaming Selenium for flakiness
- Not understanding waits
- Writing locators in test classes

---

## Interview One-Liners 🎯

- “Most Selenium failures are synchronization issues.”
- “Explicit waits solve UI timing problems.”
- “Grid improves execution speed, not test quality.”

---

## Summary

- Interviews test thinking, not syntax
- Selenium 4 knowledge is expected
- UI stability and waits are critical
- Clear explanations matter
