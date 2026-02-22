---
sidebar_position: 2
---

# Fundamentals & Core Architecture

This section explains **how Extent Reports actually works internally** and why many implementations fail in real-time projects. Understanding this architecture prevents flaky, incorrect, and untrustworthy reports.

---

## 1️⃣ What Extent Reports Is (and Is Not)

### ✅ What It Is
- A **reporting layer** for test automation
- Collects test events, logs, media, and metadata
- Produces human-readable HTML reports

### ❌ What It Is NOT
- ❌ Not a test execution engine
- ❌ Not a logging framework replacement
- ❌ Not responsible for test flow control

> Treat Extent Reports as an **observer**, not a controller.

---

## 2️⃣ Core Components (Internal Model)

### `ExtentReports`
- Central report engine
- Owns configuration, system info, and lifecycle
- Must exist **once per test run**

### `ExtentTest`
- Represents **one logical test** in the report
- Holds logs, status, media, and metadata
- Must be **isolated per executing thread**

### Reporter (Spark)
- Responsible for rendering HTML
- Reads data from `ExtentReports`
- Does not store test state

---

## 3️⃣ Correct Ownership Model (Very Important)

| Component | Ownership | Lifetime |
|--------|----------|---------|
| ExtentReports | Framework | Entire Suite |
| ExtentTest | Test Thread | Single Test |
| Reporter | Framework | Entire Suite |

❌ Creating these inside test methods breaks this model.

---

## 4️⃣ Execution Lifecycle (Real-Time Flow)

1. Test suite starts
2. `ExtentReports` initialized once
3. Reporter attached
4. Test starts → `ExtentTest` created
5. Logs added during execution
6. Test ends → status finalized
7. Suite ends → report flushed

This lifecycle must be **listener-driven**, not test-driven.

---

## 5️⃣ Why Many Implementations Fail

### ❌ Common Architectural Mistakes
- Creating `ExtentTest` inside `@Test`
- Using static `ExtentTest` variables
- Initializing reports per test
- Flushing report multiple times

### 🔥 Resulting Problems
- Log mixing in parallel runs
- Incorrect pass/fail mapping
- Random report corruption
- CI instability

---

## 6️⃣ Single-Responsibility Principle

Extent Reports should:
- Observe test execution
- Record outcomes
- Attach evidence

It should **never**:
- Control test logic
- Decide retries
- Handle assertions

---

## 7️⃣ Real-World Architecture Rule

> **If Extent Reports is removed, tests should still execute normally.**

If removing reporting breaks your framework, the design is wrong.

---

## 🧠 Key Takeaways

- One report per execution
- One test per thread
- Zero test-level initialization
- Listener-driven lifecycle
- Architecture first, features second
