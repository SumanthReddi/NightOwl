---
sidebar_position: 27
---

# Cucumber Interview Questions & Scenarios

This section consolidates **conceptual, practical, and scenario-based interview questions** on Cucumber.
The focus is on **how experienced automation engineers think**, not just definitions.

---

## Core Concept Questions

**Q: What is Cucumber?**  
A: A BDD tool that executes behavior written in Gherkin as automated tests.

**Q: Is Cucumber an automation tool?**  
A: No. It is a BDD framework that integrates with automation tools.

**Q: Difference between BDD and TDD?**  
A: BDD focuses on behavior; TDD focuses on code-level tests.

---

## Gherkin & Feature Design

**Q: What should not be written in Gherkin?**  
A: UI actions, locators, API endpoints, technical details.

**Q: Scenario vs Scenario Outline?**  
A: Scenario tests one behavior; Outline tests the same behavior with multiple data sets.

**Q: Background vs Hooks?**  
A: Background is for business preconditions; Hooks are for technical setup.

---

## Step Definitions

**Q: Where should assertions be written?**  
A: In step definitions or assertion/helper layers.

**Q: What are Cucumber Expressions?**  
A: A readable alternative to regex for step matching.

**Q: How do steps share data?**  
A: Using scenario-scoped context objects.

---

## Runner & Execution

**Q: What is glue?**  
A: It tells Cucumber where to find step definitions and hooks.

**Q: What does dryRun do?**  
A: Validates step definitions without executing tests.

**Q: Can Cucumber run in parallel?**  
A: Yes, via TestNG/JUnit configuration.

---

## Tags & CI/CD

**Q: How are tags used in CI?**  
A: To control execution scope like smoke or regression.

**Q: Why avoid full regression on every commit?**  
A: It slows pipelines and reduces feedback speed.

---

## Framework Design Scenarios

**Scenario:** Tests pass locally but fail in CI  
**Possible causes:**  
- Shared state  
- Environment differences  
- Timing issues  

**Scenario:** Undefined steps suddenly appear  
**Possible causes:**  
- Glue misconfiguration  
- Step wording change  

**Scenario:** Tests fail randomly in parallel runs  
**Possible causes:**  
- Static variables  
- Shared drivers  

---

## Anti-Pattern Detection

**Q: Identify bad practice in this framework:**  
- Selenium code in steps  
- Large Background blocks  
- Hardcoded test data  

**Expected answer:** Refactor to layered architecture.

---

## Senior-Level Questions

**Q: How do you design Cucumber for large projects?**  
A: Use clean architecture, tagging strategy, parallel safety, CI integration.

**Q: When should Cucumber NOT be used?**  
A: When business collaboration or behavior clarity is not required.

---

## Key Takeaways

- Interviews test design thinking, not syntax
- Explain *why*, not just *what*
- Real-world scenarios matter most
- Clean architecture answers stand out

---

## End of Cucumber Section 🎉

Next recommended sections:
- Selenium Deep Dive
- API Automation Advanced
- Framework Design Patterns
