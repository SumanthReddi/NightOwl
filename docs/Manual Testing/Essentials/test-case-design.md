---
sidebar_position: 5
title: Test Case Design
---

## 🧩 Test Case Design

A **test case** is a set of conditions or steps used to verify whether a software application works as expected.

Well-designed test cases ensure **consistent testing, better coverage, and early defect detection**.

:::info Why Test Cases Matter
Clear and structured test cases help testers execute tests consistently and make it easier for teams to reproduce issues.
:::

---

## 📖 What is a Test Case?

**Definition**

A test case defines:

- Inputs
- Actions
- Expected results

for a specific test scenario.

**Goal**

Ensure the software behaves **correctly under different conditions**.

---

## 🧱 Components of a Test Case

Every test case should include the following elements.

### 1️⃣ Test Case ID

A unique identifier used for tracking.

Example:

```
TC_Login_001
```

---

### 2️⃣ Test Title / Description

A short description of the scenario being tested.

Example:

**Verify login with valid credentials**

---

### 3️⃣ Preconditions

Conditions that must be satisfied before executing the test.

Example:

- User account exists in the system
- Application is accessible

---

### 4️⃣ Test Steps

Step-by-step instructions to execute the test.

Example:

1. Open login page  
2. Enter username  
3. Enter password  
4. Click **Login**

---

### 5️⃣ Test Data

Input values used for the test.

Example:

```
Username: testuser
Password: password123
```

---

### 6️⃣ Expected Result

The result expected if the system behaves correctly.

Example:

User is **redirected to the dashboard**.

---

### 7️⃣ Actual Result

The actual outcome observed during execution.

This field is filled **after running the test**.

---

### 8️⃣ Status

Indicates the result of the test.

Possible values:

- Pass
- Fail
- Blocked

---

## 🧾 Test Case Template Example

| Field | Details |
|------|------|
| Test Case ID | TC_Login_001 |
| Title | Verify login with valid credentials |
| Preconditions | User exists in the system |
| Test Steps | 1. Enter username <br/> 2. Enter password <br/> 3. Click Login |
| Test Data | Username: testuser <br/> Password: password123 |
| Expected Result | User is redirected to dashboard |
| Actual Result | Filled after execution |
| Status | Pass / Fail |

---

## ✍️ Best Practices for Writing Test Cases

### 1️⃣ Be Clear and Concise

Use simple and precise language.

Example:

❌ Check if the page works  
✅ Verify the login button redirects to the dashboard

---

### 2️⃣ Use Unique Identifiers

Each test case should have a **unique ID**.

Example:

```
TC_Login_001
TC_Login_002
TC_Login_003
```

---

### 3️⃣ Include Complete Details

Ensure all fields are present:

- Preconditions
- Steps
- Test data
- Expected results

This makes test cases **easy to execute and reproduce**.

---

### 4️⃣ Focus on One Functionality

Each test case should validate **only one feature**.

This improves clarity and simplifies debugging.

---

### 5️⃣ Prioritize Important Test Cases

Focus on **critical workflows** such as:

- Login
- Payment
- Account creation
- Checkout

---

### 6️⃣ Make Test Cases Reusable

Design test cases so they can be reused across:

- Multiple releases
- Different environments
- Regression testing

---

## 🧠 Common Test Case Design Techniques

### 1️⃣ Equivalence Partitioning

Divide input values into **valid and invalid groups**.

Example:

For an age field **18–60**

Test values:

- 17 → Invalid
- 25 → Valid
- 61 → Invalid

---

### 2️⃣ Boundary Value Analysis

Test values at the **edge of input ranges**.

Example:

For age **18–60** test:

- 17
- 18
- 60
- 61

:::tip Why Boundaries Matter
Most defects occur at **boundary conditions**, making this technique highly effective.
:::

---

### 3️⃣ Decision Table Testing

Used when multiple conditions affect the outcome.

Example:

Login form scenarios:

| Username | Password | Result |
|------|------|------|
| Valid | Valid | Login Success |
| Valid | Invalid | Error |
| Invalid | Valid | Error |
| Invalid | Invalid | Error |

---

### 4️⃣ Error Guessing

Uses tester experience to anticipate issues.

Example:

- Submitting forms with empty fields
- Entering special characters
- Uploading unsupported files

---

## 📌 Key Takeaways

- A test case includes **ID, title, steps, data, expected result, and status**
- Clear test cases improve **test execution and defect tracking**
- Good test cases are **clear, reusable, and focused**
- Techniques like **equivalence partitioning and boundary analysis** improve coverage
