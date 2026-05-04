---
sidebar_position: 5
title: Test Case Design
---

# Test Case Design

A **test case** defines *what to test, how to test, and what result to expect*.

Good test cases are not just documentation—they are:
- **execution guides**
- **debugging aids**
- **quality checkpoints**

---

## 🎯 Why Test Cases Matter

- Ensure **consistent execution across testers**
- Improve **test coverage**
- Help **reproduce defects reliably**
- Act as **living documentation**

:::info[Reality Check]
Poor test cases don’t just miss bugs—they waste time during execution and debugging.
:::

---

## 🧠 What Is a Good Test Case?

A strong test case is:

- **Clear** → anyone can execute it  
- **Focused** → tests one behavior  
- **Deterministic** → expected result is unambiguous  
- **Maintainable** → easy to update  

---

## 🧱 Core Components (What Actually Matters)

### 1️⃣ Test Case ID
Unique identifier for tracking and reporting.

```
TC_LOGIN_001
```

---

### 2️⃣ Title (Intent > Description)

Focus on **what is being validated**, not vague wording.

❌ Check login  
✅ Verify login with valid credentials  

---

### 3️⃣ Preconditions

State only **what is required**, not everything.

Example:
- User account exists  
- System is accessible  

---

### 4️⃣ Steps (Execution Logic)

Steps should be:
- **Minimal**
- **Unambiguous**
- **Action-oriented**

Example:
1. Open login page  
2. Enter valid username  
3. Enter valid password  
4. Click Login  

---

### 5️⃣ Test Data

Keep it **explicit and controlled**.

```
Username: testuser
Password: password123
```

---

### 6️⃣ Expected Result (Most Critical)

This must be:
- **Precise**
- **Verifiable**
- **Non-ambiguous**

❌ Login successful  
✅ User is redirected to dashboard and username is displayed  

---

### 7️⃣ Actual Result & Status

Used during execution:

- Actual Result → What happened  
- Status → Pass / Fail / Blocked  

---

## 🧾 Example (Realistic)

| Field | Details |
|------|--------|
| Test Case ID | TC_LOGIN_001 |
| Title | Verify login with valid credentials |
| Preconditions | User exists |
| Steps | Enter username → Enter password → Click Login |
| Test Data | testuser / password123 |
| Expected Result | User lands on dashboard with profile visible |
| Status | Pass |

---

## 🧠 Test Case Design Thinking (Important)

Before writing a test case, ask:

- What can break here?  
- What are edge conditions?  
- What are invalid scenarios?  

👉 Test cases are not about **happy path only**

---

## Design Techniques (Used in Real Testing)

### 1️⃣ Equivalence Partitioning

Reduce test cases by grouping inputs.

Example: Age (18–60)

- Valid → 18–60  
- Invalid → less than 18, greater than 60

---

### 2️⃣ Boundary Value Analysis

Test edges where bugs usually occur.

Test:
- 17, 18, 60, 61  

:::tip[Why this matters]
Most defects occur at **boundaries**, not mid-range values.
:::

---

### 3️⃣ Decision Table

Use when outcome depends on multiple conditions.

| Username | Password | Result |
|----------|----------|--------|
| Valid | Valid | Success |
| Valid | Invalid | Error |
| Invalid | Valid | Error |
| Invalid | Invalid | Error |

---

### 4️⃣ Error Guessing

Based on experience.

Examples:
- Empty inputs  
- Special characters  
- Large inputs  
- Invalid file uploads  

---

## ⚠️ Common Mistakes

- Writing **too many trivial test cases**
- Vague expected results  
- Over-detailed steps (hard to maintain)  
- Ignoring negative scenarios  
- Duplicating test cases  

---

## ✅ Best Practices

- Test **behavior, not implementation**
- Keep test cases **independent**
- Avoid unnecessary duplication  
- Prioritize **high-risk areas**
- Make them **automation-friendly**

---

## 🎯 Real-World Insight

In modern teams:

- Not everything is written as detailed test cases  
- Many tests exist as:
  - automated scripts  
  - exploratory sessions  
  - lightweight scenarios  

👉 Focus on **coverage + clarity**, not documentation overload

---

## 📌 Key Takeaways

- A test case defines **steps, data, and expected outcome**
- Strong test cases are **clear, focused, and verifiable**
- Use techniques like **boundary analysis** to improve coverage
- Think beyond happy paths—test **failures and edges**
- Quality test cases reduce **debugging time and production issues**
