---
sidebar_position: 20
---

# Robot Framework Interview Questions

This section covers **interview-ready questions and scenarios**
commonly asked for Robot Framework roles — from **beginner to senior automation engineers**.

The focus is on **real project understanding**, not memorization.

---

## Beginner-Level Questions

**Q: What is Robot Framework?**  
A: An open-source, keyword-driven automation framework used for UI, API, and database testing.

**Q: What language is Robot Framework based on?**  
A: Python (with support for Java-based libraries).

**Q: What is a `.robot` file?**  
A: A test suite file containing test cases, keywords, and settings.

---

## Core Concepts

**Q: What are keywords in Robot Framework?**  
A: Keywords represent actions or logic and abstract implementation details.

**Q: Difference between built-in and user-defined keywords?**  
A: Built-in keywords are provided by Robot; user-defined keywords are created by users.

**Q: What are variable types in Robot Framework?**  
A: Scalar, List, and Dictionary.

---

## Selenium & UI Automation

**Q: How does Robot Framework automate browsers?**  
A: Using SeleniumLibrary, which wraps Selenium WebDriver.

**Q: How do you handle waits in Robot Framework?**  
A: Using explicit wait keywords like `Wait Until Element Is Visible`.

---

## API Automation

**Q: Which library is used for API testing?**  
A: RequestsLibrary.

**Q: What is a session in RequestsLibrary?**  
A: A reusable connection holding base URL and headers.

---

## Database Testing

**Q: Why is database testing used in automation?**  
A: To validate backend data after UI or API actions.

**Q: Which library is used for DB testing?**  
A: DatabaseLibrary.

---

## Execution & CI/CD

**Q: How do you run Robot tests in CI?**  
A: Using command-line execution with tags and variables.

**Q: What reports does Robot Framework generate?**  
A: output.xml, log.html, and report.html.

---

## Parallel Execution

**Q: How do you run tests in parallel in Robot Framework?**  
A: Using Pabot.

**Q: What are the risks of parallel execution?**  
A: Shared state, data conflicts, flaky tests.

---

## Debugging & Stability

**Q: How do you debug a failing Robot test?**  
A: By checking logs, using DEBUG level, and isolating failures.

**Q: What causes flaky tests?**  
A: Timing issues, shared state, unstable environments.

---

## Scenario-Based Questions (Senior Level)

**Scenario:** Tests pass locally but fail in CI  
Possible causes:
- Environment differences
- Missing waits
- Parallel execution issues

---

**Scenario:** Tests fail randomly in parallel runs  
Possible causes:
- Shared data
- Static variables
- Browser reuse

---

## Framework Design Questions

**Q: How do you design a scalable Robot Framework?**  
A: Using layered architecture, resource files, custom libraries, tagging, and CI integration.

**Q: When should you avoid Robot Framework?**  
A: When keyword-driven or readable tests are not required.

---

## Key Takeaways

- Interviews focus on design thinking
- Real project scenarios matter
- Clean framework knowledge stands out
- Stability and CI awareness are critical

---

## 🎉 End of Robot Framework Section
