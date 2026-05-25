---
sidebar_position: 1
title: GitLab CI
description: Running Robot Framework automation through GitLab pipelines
tags:
  - robotframework
  - gitlab
  - cicd
---

# ⚙️ GitLab CI

> GitLab CI helps automate execution, scheduling and reporting of Robot Framework suites.

---

## 🎯 Why This Matters

Manual execution creates delays and inconsistency.

CI/CD pipelines help:

- Run tests automatically
- Schedule execution
- Generate reports
- Support parallel runs
- Integrate with deployments

:::info

Modern automation frameworks should execute from pipelines, not local machines.

:::

---

## 🧠 Quick Memory Rule

:::tip

Code

↓

Pipeline

↓

Execution

↓

Report

:::

---

## 📘 What is GitLab CI?

GitLab CI/CD executes automation through `.gitlab-ci.yml` configuration.

Typical workflow:

- Push code
- Trigger pipeline
- Execute tests
- Generate artifacts

---

## 🏗 Pipeline Flow

```text
Developer Push
      ↓
GitLab Pipeline
      ↓
Install Dependencies
      ↓
Run Robot Tests
      ↓
Generate Reports
      ↓
Artifacts
```

---

## 💻 Basic Pipeline Example

```yaml
stages:
   - test

robot_tests:
   stage: test

   script:
      - pip install -r requirements.txt
      - robot tests/

   artifacts:
      paths:
        - reports/
```

---

## 💻 Scheduled Execution

Useful for regression runs:

```text
Daily Regression

Weekly Smoke

Nightly Validation
```

---

## 🔥 Real Project Example

:::note

Enterprise execution:

GitLab

↓

Read Test Data

↓

Sauce Labs Execution

↓

Robot Reports

↓

Artifacts

↓

Team Review

:::

---

## ⚖️ Pipeline Benefits

| Without CI | With CI |
|---|---|
| Manual runs | Automated |
| Delayed feedback | Faster |
| Local dependency | Shared execution |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded environments
- Secrets in yaml
- Huge pipeline jobs
- Missing artifacts

:::

---

## 🎤 Interview Questions

<details>
<summary>Why execute Robot from GitLab?</summary>

For automation, scheduling and team visibility.

</details>

---

## ⚡ Cheat Sheet

```yaml
stages:

script:

artifacts:

robot tests/
```

---

## 🔗 Related Notes

- Sauce Labs
- Pabot Parallel Execution
- Execution Strategies
