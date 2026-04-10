---
sidebar_position: 4
title: Types of Manual Testing
---

## Types of Manual Testing

Manual testing involves **human testers executing test cases without automation tools**.  
Different types of manual testing are used to verify different aspects of a system.

Understanding these testing types helps testers **choose the right testing approach for different scenarios**.

:::info Why Testing Types Matter
Each testing type focuses on a different quality aspect such as functionality, integration, usability, or stability.
:::

---

## 1️⃣ Black Box Testing

**What is it?**

Testing performed **without knowledge of internal code or system architecture**.  
Testers focus only on **inputs and outputs**.

**When to use**

- Functional testing
- UI testing
- User workflow validation

**Example**

Testing whether a **login form works with valid and invalid credentials**.

---

## 2️⃣ White Box Testing

**What is it?**

Testing performed with **full knowledge of the internal code and system structure**.

Focus areas include:

- Code logic
- Code paths
- Branch coverage

**When to use**

- Algorithm validation
- Code coverage testing

**Example**

Verifying that **all conditional branches in the code are executed**.

---

## 3️⃣ Gray Box Testing

**What is it?**

A combination of **black box testing and white box testing**.

Testers have **partial knowledge of the internal structure**.

**When to use**

- API testing
- Database validation
- Integration testing

**Example**

Testing a web application while validating **database queries in the backend**.

---

## 4️⃣ Unit Testing

**What is it?**

Testing **individual components or units of code**.

Usually performed by **developers during the development phase**.

**Example**

Testing a function that calculates tax.

```java
calculateTax(amount)
```

---

## 5️⃣ Integration Testing

**What is it?**

Testing how **different modules interact with each other**.

**When to use**

After unit testing, to ensure modules work **together correctly**.

**Example**

Verifying that a **payment gateway integrates correctly with the shopping cart system**.

---

## 6️⃣ System Testing

**What is it?**

Testing the **entire system end-to-end**.

Ensures the software meets **functional and business requirements**.

**Example**

Testing an **e-commerce website workflow**:

1. Search product
2. Add to cart
3. Checkout
4. Payment
5. Order confirmation

---

## 7️⃣ User Acceptance Testing (UAT)

**What is it?**

Testing performed by **end users or business stakeholders** to verify the system meets business needs.

**When to use**

Before the application is released to production.

**Example**

Business users verifying that a **CRM system supports their workflow**.

---

## 8️⃣ Exploratory Testing

**What is it?**

Testing where testers **explore the application without predefined test cases**.

It relies on:

- Tester experience
- Creativity
- Domain knowledge

**Example**

Exploring an application to discover **unexpected behavior or usability issues**.

:::tip Exploratory Testing Advantage
Exploratory testing often discovers **edge cases that scripted tests might miss**.
:::

---

## 9️⃣ Regression Testing

**What is it?**

Re-testing existing functionality to ensure **new changes did not break existing features**.

**When to use**

- After bug fixes
- After new feature additions
- After UI updates

**Example**

Ensuring existing features still work **after a UI redesign**.

---

## 🔟 Smoke Testing

**What is it?**

A **quick high-level test** to ensure the build is stable enough for further testing.

**When to use**

After **every new build or deployment**.

**Example checks**

- Application launches successfully
- Login functionality works
- Major features load correctly

:::warning Important
If smoke testing fails, the build is usually **rejected and sent back to development**.
:::

---

## 📌 Key Takeaways

- **Black Box Testing** → Tests functionality without internal knowledge
- **White Box Testing** → Tests internal logic and code structure
- **Gray Box Testing** → Combines both approaches
- **Unit Testing** → Tests individual components
- **Integration Testing** → Tests interactions between modules
- **System Testing** → Tests the complete system
- **User Acceptance Testing (UAT)** → Validates business requirements
- **Exploratory Testing** → Unscripted discovery testing
- **Regression Testing** → Ensures new changes do not break existing features
- **Smoke Testing** → Quick build verification test

