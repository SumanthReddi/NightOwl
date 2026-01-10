---
sidebar_position: 2
---

## Robot Framework Architecture

Understanding Robot Framework architecture is critical to designing
**clean, scalable, and maintainable automation frameworks**.

Robot Framework follows a **layered, keyword-driven architecture** where
test intent is clearly separated from implementation.

---

## Core Architectural Components

Robot Framework is built around the following core components:

### 1. Test Suites
- A collection of test cases
- Represented by `.robot` files or folders
- Folder-level suites can contain child suites

---

### 2. Test Cases
- Individual automated tests
- Written in plain text using tabular syntax
- Describe **what to test**, not how it is implemented

---

### 3. Keywords
Keywords are the heart of Robot Framework.

Types of keywords:
- Built-in keywords
- Library keywords
- User-defined keywords

Keywords abstract implementation details and improve reusability.

---

### 4. Libraries
Libraries provide the actual automation capabilities.

Examples:
- SeleniumLibrary → UI automation
- RequestsLibrary → API automation
- DatabaseLibrary → DB validation
- Custom Python libraries → project-specific logic

Robot Framework itself does **not** interact with applications directly —
libraries do.

---

### 5. Resource Files
- Contain reusable keywords and variables
- Promote separation of concerns
- Shared across multiple test suites

---

## Execution Flow (High-Level)

The execution flow follows this order:

```
Test Suite
   ↓
Test Case
   ↓
Keyword
   ↓
Library Method
   ↓
Application / System Under Test
```

Robot Framework acts as an **orchestrator**, coordinating execution.

---

## Responsibility Separation (Very Important)

| Layer | Responsibility |
|---|---|
| Test Cases | Define test intent |
| Keywords | Define actions |
| Libraries | Perform implementation |
| Resource Files | Share reusable logic |

Mixing these responsibilities leads to poor framework design.

---

## Architecture in Real Projects

In real-world projects:
- Test cases stay readable
- Business intent remains visible
- Technical changes impact only libraries
- Maintenance cost stays low

This is why Robot Framework scales well in large automation suites.

---

## Common Architecture Mistakes ❌

- Writing logic directly in test cases
- Avoiding user-defined keywords
- Hardcoding implementation details
- Treating Robot as a scripting tool

---

## Key Takeaways

- Robot Framework uses keyword-driven architecture
- Clear separation of intent and implementation
- Libraries perform actual automation
- Resource files improve reuse
- Proper architecture enables scalability

---

## What’s Next?

👉 **Installation and Setup**
