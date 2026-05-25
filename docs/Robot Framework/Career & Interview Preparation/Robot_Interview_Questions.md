---
sidebar_position: 2
title: Robot Interview Questions
description: Frequently asked Robot Framework interview questions with senior-level focus
tags:
  - robotframework
  - interview
  - qa
---

# 🎤 Robot Interview Questions

> Senior Robot Framework interviews focus less on memorization and more on architecture, tradeoffs and problem solving.

---

## 🎯 Why This Matters

Interview questions often evaluate:

- Framework understanding
- Design choices
- Debugging ability
- CI/CD knowledge
- Real project ownership

:::info

Strong answers explain both **what** and **why**.

:::

---

## 🧠 Quick Memory Rule

:::tip

Concept

↓

Example

↓

Decision

↓

Tradeoff

:::

---

## 📘 Core Questions

<details>
<summary>What is Robot Framework?</summary>

An open-source keyword-driven automation framework used for UI, API, database and end-to-end testing.

</details>

<details>
<summary>What are keyword types?</summary>

- BuiltIn Keywords
- Library Keywords
- User Keywords
- Custom Python Keywords

</details>

<details>
<summary>Difference between Resource and Library?</summary>

Resources contain reusable user keywords.

Libraries provide actual functionality.

</details>

---

## 🌐 UI Questions

<details>
<summary>SeleniumLibrary vs Browser Library?</summary>

SeleniumLibrary uses WebDriver.

Browser Library uses Playwright and supports auto-waiting.

</details>

<details>
<summary>How do you reduce flaky tests?</summary>

- Better waits
- Stable locators
- Retry patterns
- Remove shared dependencies

</details>

---

## 🔌 API Questions

<details>
<summary>How do you chain APIs?</summary>

Extract values from one response and reuse them in future requests.

</details>

<details>
<summary>How do you validate APIs?</summary>

Status, body, JSON fields, headers and database checks.

</details>

---

## 🗄 Database Questions

<details>
<summary>Why validate databases?</summary>

UI/API responses alone do not confirm backend correctness.

</details>

---

## 🔥 Senior Scenario

:::note

Question:

How would you redesign a slow framework?

Expected discussion:

- Parallel execution
- Framework cleanup
- Tagging
- Retry analysis
- CI optimization

:::

---

## 🚫 Common Mistakes

:::danger

Avoid:

- One-line answers
- Pure theory
- No project examples

:::

---

## ⚡ Cheat Sheet

```text
Framework

UI

API

Database

CI/CD

Architecture
```

---

## 🔗 Related Notes

- Scenario Based Questions
- Framework Design
- Career & Interview Preparation
