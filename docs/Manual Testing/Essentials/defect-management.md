---
sidebar_position: 6
title: Defect Management
---

## 🐞 Defect Management

**Defect management** is the process of identifying, reporting, tracking, and resolving issues (defects) in software.

Effective defect management ensures that bugs are **identified, tracked, and resolved systematically**, reducing the risk of failures in production.

:::info Why Defect Management Matters
A structured defect management process helps teams fix issues faster and maintain **software quality and stability**.
:::

---

## 📖 What is a Defect?

**Definition**

A **defect (or bug)** is any deviation between:

- **Expected behavior** (as per requirements)
- **Actual behavior** (what the application does)

**Goal**

Identify and resolve defects **before they impact end users**.

---

## 🔄 Defect Lifecycle

The defect lifecycle describes the stages a defect goes through from **identification to resolution**.

---

### 1️⃣ New

- The defect is identified and reported for the first time.
- Status: **New**

---

### 2️⃣ Assigned

- The defect is assigned to a developer for analysis and fixing.
- Status: **Assigned**

---

### 3️⃣ In Progress

- The developer starts working on the defect.
- Status: **In Progress**

---

### 4️⃣ Fixed

- The developer resolves the issue in the code.
- Status: **Fixed**

---

### 5️⃣ Retest

- The tester verifies whether the issue has been resolved.
- Status: **Retest**

---

### 6️⃣ Reopen

- If the defect still exists, it is reopened for further fixing.
- Status: **Reopen**

---

### 7️⃣ Closed

- The tester confirms the defect is fixed and closes it.
- Status: **Closed**

---

### 8️⃣ Deferred

- The defect is postponed to a future release due to low priority or other constraints.
- Status: **Deferred**

---

### 9️⃣ Rejected

- The defect is rejected if it is not considered a valid issue.
- Status: **Rejected**

:::warning Important
Sometimes defects are rejected if they are **expected behavior or caused by incorrect testing**.
:::

---

## 📝 Defect Reporting

A **well-written defect report** helps developers reproduce and fix issues quickly.

A defect report typically includes the following details.

---

### 1️⃣ Defect ID

A unique identifier used for tracking.

Example:

```
DEF_001
```

---

### 2️⃣ Title

A short description of the issue.

Example:

**Login fails with valid credentials**

---

### 3️⃣ Steps to Reproduce

Detailed steps required to reproduce the issue.

Example:

1. Enter username
2. Enter password
3. Click Login

---

### 4️⃣ Expected Result

The expected system behavior.

Example:

User should be **redirected to the dashboard**.

---

### 5️⃣ Actual Result

The behavior observed during testing.

Example:

Error message is displayed.

---

### 6️⃣ Severity

Indicates the **impact of the defect on the system**.

Common severity levels:

- Critical
- High
- Medium
- Low

---

### 7️⃣ Priority

Indicates the **urgency of fixing the defect**.

Common priority levels:

- Immediate
- High
- Medium
- Low

---

### 8️⃣ Attachments

Additional evidence such as:

- Screenshots
- Logs
- Screen recordings

These help developers **understand the issue faster**.

---

## ⚖️ Severity vs Priority

| Aspect | Severity | Priority |
|------|------|------|
| Definition | Impact of the defect on the system | Urgency of fixing the defect |
| Levels | Critical, High, Medium, Low | Immediate, High, Medium, Low |
| Example | System crash | Fix before next release |

---

## ✅ Best Practices for Defect Management

### 1️⃣ Report Defects Early

Identify and report defects **as soon as they are discovered**.

This reduces development rework.

---

### 2️⃣ Provide Clear Steps

Always include **clear steps to reproduce the issue**.

This helps developers reproduce and fix the defect faster.

---

### 3️⃣ Use a Defect Tracking Tool

Common tools used for defect tracking:

- Jira
- Bugzilla
- TestRail

These tools help teams **track and manage defects systematically**.

---

### 4️⃣ Prioritize Based on Impact

Focus on defects with **high severity and high priority** first.

---

### 5️⃣ Collaborate with Developers

Work closely with developers to:

- Explain the issue
- Provide additional evidence
- Verify fixes

---

### 6️⃣ Analyze Defect Trends

Review defect data to identify:

- Recurring issues
- Risk areas
- Process improvements

---

## 📌 Key Takeaways

- A defect is a **difference between expected and actual behavior**
- The defect lifecycle includes stages such as **New, Assigned, Fixed, Retest, and Closed**
- A good defect report contains **ID, title, steps, expected result, actual result, severity, and priority**
- **Severity** measures the impact of the defect
- **Priority** determines how urgently the defect should be fixed
- Effective defect management improves **software quality and stability**
