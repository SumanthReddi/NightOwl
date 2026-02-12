---
sidebar_position: 1
---

# Selenium Interview Questions

## How to Use This Document
These questions are **real interview questions** asked for Selenium UI automation roles. Answers are **concise, practical, and Selenium 4+ compliant**.

Focus is on **UI automation**, not API, DB, TestNG, or framework tools.

---

## Core Selenium Concepts

### Q1. What is Selenium?
**Answer:** Selenium is a browser automation tool used to automate web applications by interacting with UI elements through WebDriver.

---

### Q2. What is WebDriver?
**Answer:** WebDriver is an API that controls browsers programmatically and communicates using the W3C WebDriver protocol.

---

### Q3. Difference between Selenium 3 and Selenium 4?
**Answer:** Selenium 4 is W3C-compliant, has native Shadow DOM support, relative locators, new window API, and improved Grid.

---

## Locators & Elements

### Q4. Which locator is most reliable?
**Answer:** `id`, followed by `name`, stable CSS selectors. XPath is last option.

---

### Q5. Why should index-based XPath be avoided?
**Answer:** It breaks easily when UI layout changes.

---

## Synchronization

### Q6. Difference between implicit and explicit wait?
**Answer:** Implicit wait applies globally; explicit wait waits for a specific condition. Explicit wait is preferred.

---

### Q7. Why is Thread.sleep bad?
**Answer:** It causes unnecessary delays and flaky tests because it does not wait for conditions.

---

## Dynamic UI Handling

### Q8. What causes StaleElementReferenceException?
**Answer:** DOM re-rendering or page refresh invalidates the element reference.

---

### Q9. How do you handle dynamic elements?
**Answer:** Use explicit waits and re-locate elements after DOM changes.

---

## Advanced UI Topics

### Q10. Can Selenium handle Shadow DOM?
**Answer:** Yes, Selenium 4 can handle open Shadow DOM using `getShadowRoot()`.

---

### Q11. Can Selenium handle authentication popups?
**Answer:** Not directly. Use credential-in-URL for basic auth.

---

## Selenium Grid

### Q12. What is Selenium Grid?
**Answer:** A tool for parallel and distributed test execution across browsers and machines.

---

### Q13. Does Grid fix flaky tests?
**Answer:** No. It exposes flaky tests; it does not fix them.

---

## CI/CD & Stability

### Q14. Why tests pass locally but fail in CI?
**Answer:** Slower environment, headless mode, timing issues, or parallel execution.

---

### Q15. How do you reduce flaky tests?
**Answer:** Use proper waits, stable locators, and clean framework design.

---

## Scenario-Based Questions

### Q16. Button is visible but not clickable. What do you do?
**Answer:** Wait for overlays/loaders to disappear and use `elementToBeClickable`.

---

### Q17. Element exists but Selenium cannot find it.
**Answer:** Check timing, iframe context, or Shadow DOM.

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
