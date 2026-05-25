---
sidebar_position: 2
title: Data Driven Testing
description: Execute Robot Framework tests using external and reusable test data
tags:
  - robotframework
  - datadriven
  - excel
  - framework
---

# 📊 Data Driven Testing

> Data-driven testing separates test logic from test data so the same flow can execute with multiple inputs.

---

## 🎯 Why This Matters

Hardcoding test values creates duplication and increases maintenance effort.

Data-driven frameworks improve:

- Reusability
- Coverage
- Maintenance
- Scalability

:::info

One test flow + many datasets = Data Driven Testing

:::

---

## 🧠 Quick Memory Rule

:::tip

Logic stays constant

Data changes

:::

---

## 📘 What is Data Driven Testing?

In data-driven testing, test logic remains unchanged while input values come from external sources.

Common data sources:

- Excel
- CSV
- Database
- JSON
- API responses
- Variable files

---

## 🏗 High Level Flow

Understanding the execution flow:

```text
Test Case
      ↓
Read External Data
      ↓
Pass Data To Keywords
      ↓
Execute Test
      ↓
Validate Results
```

---

## 💻 Simple Example

Hardcoded approach:

```robot
Input Text
...    id=username
...    Admin
```

Data-driven approach:

```robot
Input Text
...    id=username
...    ${USERNAME}
```

---

## 📁 Excel Driven Example

Large projects often use Excel datasets.

```text
Excel File

UserName
Password
ExpectedResult
```

Robot Flow:

```text
Read Excel
      ↓
Get Row Data
      ↓
Pass Variables
      ↓
Execute Test
```

---

## 🔥 Real Project Example

:::note

Program code automation pattern:

Program Code
      ↓
Read User Test Data
      ↓
Update Dataset
      ↓
Run Fulfillment Flow
      ↓
Save Reservation Number

This pattern reduces duplicate test creation.

:::

---

## ⚖️ Data Source Comparison

| Source | Usage |
|---|---|
| Excel | Enterprise datasets |
| CSV | Simple datasets |
| Database | Dynamic values |
| JSON | APIs |
| Variable Files | Framework configs |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoding values
- Duplicating datasets
- Mixing logic and test data
- Creating giant Excel sheets
- Using static values everywhere

:::

---

## 🎤 Interview Questions

<details>
<summary>What is Data Driven Testing?</summary>

Test logic remains fixed while input data changes.

</details>

<details>
<summary>Why separate test logic and data?</summary>

To improve reuse and reduce maintenance effort.

</details>

---

## ⚡ Cheat Sheet

```text
Test Logic
      ↓
External Data
      ↓
Variables
      ↓
Execution
```

---

## 🔗 Related Notes

- Framework Design
- Reusable Components
- Excel Snippets
