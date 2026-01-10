---
sidebar_position: 3
---

# Cucumber Architecture Overview

Understanding Cucumber architecture is **critical** before writing feature files or step definitions.
This section explains **how different Cucumber components work together** during execution.

---

## High-Level Architecture

Cucumber follows a layered architecture:

```
Feature Files (Gherkin)
        ↓
Step Definitions
        ↓
Automation Code (Selenium / API / DB)
        ↓
Execution Engine
        ↓
Reports
```

Each layer has a **clear responsibility**.

---

## Core Components of Cucumber

### 1️⃣ Feature Files
- Written in **Gherkin language**
- Describe application behavior
- Stored as `.feature` files
- Business-readable

Example:
```
Feature: Login functionality
```

Feature files contain **no automation code**.

---

### 2️⃣ Step Definitions
- Written in Java (or other supported languages)
- Map Gherkin steps to executable code
- Act as a bridge between feature files and automation logic

Rule:
> One step definition = one behavior implementation.

---

### 3️⃣ Automation Layer
This is where actual testing happens:
- Selenium WebDriver (UI)
- API clients (REST Assured)
- Database utilities

Cucumber does **not** automate anything by itself.

---

### 4️⃣ Runner Class
- Controls execution
- Defines feature file location
- Defines glue (step definition packages)
- Enables tags, plugins, dry run

Runner connects **Cucumber to the test framework** (TestNG / JUnit).

---

### 5️⃣ Hooks
- Execute before/after scenarios
- Manage setup and teardown
- Capture screenshots on failure
- Control driver lifecycle

Hooks are **scenario-level controls**.

---

### 6️⃣ Plugins & Reporting
- Generate HTML, JSON, XML reports
- Integrate with Extent reports
- Used for CI/CD reporting

---

## Execution Flow (Step-by-Step)

```
Runner starts execution
   ↓
Feature files are parsed
   ↓
Scenarios are identified
   ↓
Matching step definitions are found
   ↓
Automation code executes
   ↓
Hooks are triggered
   ↓
Reports are generated
```

Understanding this flow helps in **debugging failures**.

---

## Cucumber + Test Framework Integration

Cucumber itself:
- Does not manage assertions
- Does not manage parallel execution
- Does not manage test lifecycle fully

Test frameworks like:
- TestNG
- JUnit

handle execution control.

---

## Common Architecture Mistakes ❌

- Putting logic in feature files
- Writing automation code in step definitions directly
- Mixing hooks and test logic
- Poor package organization

---

## Interview-Ready Questions

**Q: What are the main components of Cucumber?**  
A: Feature files, step definitions, runner, hooks, automation layer.

**Q: Does Cucumber execute Selenium code directly?**  
A: No, Selenium code runs inside step definitions.

---

## Key Takeaways

- Cucumber has layered architecture
- Feature files describe behavior
- Step definitions connect behavior to code
- Runner controls execution
- Hooks manage setup and teardown
- Automation tools do the real work

---

## What’s Next?

👉 **Gherkin Language Basics**
