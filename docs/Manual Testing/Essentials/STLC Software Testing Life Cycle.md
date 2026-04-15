---
sidebar_position: 3
title: STLC
---

## Software Testing Life Cycle (STLC)

The **Software Testing Life Cycle (STLC)** is a structured process that defines the steps involved in testing software.  
It ensures that testing is **systematic, organized, and aligned with project goals**.

:::info Why STLC Matters
STLC helps testers **plan, execute, and track testing activities effectively**, ensuring higher software quality and early defect detection.
:::

---

## 📖 What is STLC?

**Definition**

STLC is a sequence of activities performed during the testing process to ensure software quality.

**Goal**

- Identify defects early
- Ensure the software meets **business and functional requirements**
- Deliver **reliable and high‑quality applications**

---

## 🔄 Phases of STLC

Each phase of STLC has specific **objectives and deliverables** that guide the testing process.

---

### 1️⃣ Requirement Analysis

**What happens**

- Business and technical requirements are analyzed
- Testers determine what features need testing

**Deliverables**

- List of **testable requirements**
- **Test objectives**
- Requirement clarifications

:::tip Tester Involvement
Testers should participate in requirement discussions to identify **missing or ambiguous requirements early**.
:::

---

### 2️⃣ Test Planning

**What happens**

- Define the **testing strategy and scope**
- Estimate testing effort and timelines
- Identify resources and tools

**Deliverables**

- **Test Plan Document**
- **Risk Analysis Report**
- Resource and schedule planning

---

### 3️⃣ Test Case Development

**What happens**

- Testers create detailed **test cases and test scenarios**
- Prepare required **test data**

**Deliverables**

- Test cases
- Test scripts
- Test data

Example:

```text
Test Case: Verify login with valid credentials
Steps:
1. Enter username
2. Enter password
3. Click Login
Expected Result: User is redirected to dashboard
```

---

### 4️⃣ Test Environment Setup

**What happens**

- Configure hardware, software, and network required for testing
- Ensure the environment replicates production behavior

**Deliverables**

- Configured **test environment**
- **Smoke test results** confirming system readiness

---

### 5️⃣ Test Execution

**What happens**

- Execute test cases
- Identify and report defects
- Retest fixed defects
- Perform regression testing

**Deliverables**

- Test execution report
- Defect reports
- Updated test case results

---

### 6️⃣ Test Closure

**What happens**

- Evaluate testing results
- Verify testing objectives are achieved
- Document lessons learned

**Deliverables**

- **Test Summary Report**
- Testing metrics
- Improvement recommendations

---

## ⚖️ STLC vs SDLC

| Aspect | STLC | SDLC |
|------|------|------|
| Focus | Testing process | Entire software development process |
| Starts When | After requirements are defined | At the beginning of the project |
| Ends When | After testing is completed | After deployment and maintenance |

---

## 🤝 Why STLC is Important

- **Structured testing approach**
- **Early defect detection**
- **Better collaboration between teams**
- **Improved product quality**

:::warning Important
Skipping STLC phases can lead to **missed defects, poor coverage, and unstable releases**.
:::

---

## 📌 Key Takeaways

- STLC defines a **step‑by‑step testing workflow**
- The six phases are:

1. Requirement Analysis  
2. Test Planning  
3. Test Case Development  
4. Test Environment Setup  
5. Test Execution  
6. Test Closure  

- STLC ensures **systematic testing and better software quality**
- STLC is a **part of SDLC**, focused specifically on testing
