---
sidebar_position: 3
title: Scenario Based Questions
description: Senior-level scenario and design questions for QA automation interviews
tags:
  - robotframework
  - interview
  - scenarios
---

# 🧩 Scenario Based Questions

> Senior interviews often focus on real-world situations instead of direct syntax questions.

---

## 🎯 Why This Matters

Scenario discussions evaluate:

- Problem-solving
- Architecture thinking
- Debugging approach
- Tradeoffs
- Decision making

:::info

Interviewers often care more about your thinking process than the final answer.

:::

---

## 🧠 Quick Memory Rule

:::tip

Understand

↓

Analyze

↓

Options

↓

Decision

:::

---

## 📘 Scenario: Flaky Regression

:::note

Question:

Regression execution randomly fails in CI but passes locally.

How would you investigate?

Expected approach:

- Review logs
- Review screenshots/videos
- Validate environment differences
- Check waits
- Analyze shared data
- Review cloud execution

:::

---

## 📘 Scenario: Slow Execution

:::note

Question:

Regression increased from 45 minutes to 4 hours.

What would you improve?

Expected discussion:

- Parallel execution
- Tags
- Duplicate cleanup
- Retry review
- CI optimization

:::

---

## 📘 Scenario: Design Framework From Scratch

:::note

Question:

Design a Robot Framework architecture for:

UI + API + Database + CI

Expected discussion:

```text
tests
keywords
resources
utilities
config
reports
```

Framework layers and execution strategy should be discussed.

:::

---

## 📘 Scenario: Database Validation

:::note

Question:

API response returns success but database data looks incorrect.

How would you investigate?

Expected discussion:

- Query backend
- Validate business logic
- Check audit records
- Review processing timing

:::

---

## 📘 Scenario: Cloud Failures

:::note

Question:

Sauce Labs passes locally but fails in CI.

Expected discussion:

- Timing differences
- Browser configuration
- Synchronization
- Environment review

:::

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Jumping to solutions
- No debugging approach
- Ignoring tradeoffs
- One-line answers

:::

---

## ⚡ Cheat Sheet

```text
Logs

Environment

Data

Synchronization

Architecture
```

---

## 🔗 Related Notes

- Robot Interview Questions
- Root Cause Analysis
- Reliability & Troubleshooting
