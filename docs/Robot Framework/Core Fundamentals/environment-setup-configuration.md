---
sidebar_position: 2
title: Environment Setup & Configuration
description: Build a reliable Robot Framework environment with Python, libraries, browser drivers, project structure, CI/CD setup, and production-ready best practices.
---

# Robot Framework: Environment Setup & Configuration

> Practical setup guidance focused on **stable execution**, **team consistency**, and **fewer flaky failures**.

---

## 🎯 Why This Matters

Many automation engineers jump directly into writing test cases.

That works for learning.

But in real projects, many failures happen **before the first test even starts**.

Common causes:

- Wrong Python version  
- Missing libraries  
- Browser / driver mismatch  
- CI runner differences  
- Missing database client setup  
- Secrets mismanagement  
- Local vs pipeline drift  

> Good automation starts with good environment engineering.

---

## 🤖 What Is Environment Setup?

Environment setup means preparing everything required to run Robot Framework successfully.

It includes four major areas:

### Core Components

- Python installation  
- Robot Framework installation  
- Required libraries  
- IDE / editor setup

### Execution Components

- Browsers  
- Drivers  
- Virtual environments  
- OS dependencies

### Project Components

- Config files  
- Variables  
- Test data folders  
- Shared resources

### Delivery Components

- CI/CD pipelines  
- Reports  
- Runtime variables

---

## 🏗️ Recommended Setup Layers

Think in four layers:

```text
Layer 1 → Core Framework
Layer 2 → Libraries & Tooling
Layer 3 → Project Configuration
Layer 4 → Runtime / CI Environment
```

This keeps troubleshooting easier.

---

## Layer 1: Core Framework

### Install Python

Recommended versions:

- Python 3.9  
- Python 3.10  
- Python 3.11

Check version:

```bash
python --version
```

---

### Create Virtual Environment

```bash
python -m venv .venv
```

Activate:

**Windows**

```bash
.venv\Scripts\activate
```

**Mac / Linux**

```bash
source .venv/bin/activate
```

---

### Install Robot Framework

```bash
pip install robotframework
```

Verify:

```bash
robot --version
```

---

## Layer 2: Libraries & Tooling

### Common Libraries

```bash
pip install robotframework-seleniumlibrary
pip install robotframework-requests
pip install robotframework-databaselibrary
pip install robotframework-pabot
```

### Browser Drivers

For Selenium-based automation:

- Chrome + ChromeDriver  
- Edge + EdgeDriver  
- Firefox + GeckoDriver

> Driver/browser version mismatch is a common failure cause.

Check versions:

```bash
google-chrome --version
chromedriver --version
```

---

## Layer 3: Project Configuration

## Recommended Folder Structure

```text
project/
├── tests/
├── resources/
├── libraries/
├── data/
├── reports/
├── config/
└── requirements.txt
```

### Purpose of Each Folder

| Folder | Purpose |
|---|---|
| tests | Test suites |
| resources | Shared keywords |
| libraries | Python custom libraries |
| data | Input files |
| reports | Execution outputs |
| config | Environment-specific settings |

---

## Layer 4: Runtime / CI Environment

This is where many teams struggle.

Examples:

- Local machine uses GUI browser  
- CI uses headless browser  
- Local has DB client installed  
- CI runner does not  
- Different OS packages exist

This creates:

> Works locally, fails in pipeline.

---

## 📦 Use requirements.txt

Always pin versions.

```txt
robotframework==7.1
robotframework-seleniumlibrary==6.1.3
robotframework-requests==0.9.6
robotframework-databaselibrary==1.4.0
robotframework-pabot==4.0.0
```

Install:

```bash
pip install -r requirements.txt
```

This improves consistency across machines.

---

## 🔐 Use Environment Variables for Secrets

Avoid hardcoding credentials.

❌ Bad:

```robotframework
${PASSWORD}=admin123
```

✅ Better:

```bash
export DB_PASSWORD=secret
```

Use inside Robot:

```robotframework
${password}=    Get Environment Variable    DB_PASSWORD
```

Useful for:

- Database passwords  
- API tokens  
- URLs  
- CI secrets

---

## 💻 VS Code Setup

Recommended extensions:

- Robot Framework Language Server  
- Python  
- YAML  
- GitLens

Benefits:

- Syntax highlighting  
- Auto completion  
- Better navigation  
- Easier debugging

---

## 🚀 GitLab CI Example

```yaml
stages:
  - test

robot_tests:
  stage: test
  script:
    - python -m venv .venv
    - source .venv/bin/activate
    - pip install -r requirements.txt
    - robot tests/
```

Simple and effective starting point.

---

## 🧠 Real Production Lessons

### 1. Version Drift Causes Random Failures

Local:

```text
Python 3.11
```

CI:

```text
Python 3.9
```

Result: unexpected differences.

**Fix:** Pin versions and verify in pipeline.

---

### 2. Browser Auto Updates Break Tests

Chrome updates automatically.

Driver remains old.

Result:

```text
Session not created
```

**Fix:** Check browser + driver compatibility regularly.

---

### 3. Missing Oracle Client Breaks DB Tests

Typical error:

```text
DPI-1047: Cannot locate Oracle Client
```

**Fix:** Install Oracle client properly in CI/local runtime.

---

### 4. Hardcoded Secrets Become Risky

Use CI variables or secret managers.

---

## ✅ Best Practices

### Use Virtual Environments

Avoid global package conflicts.

### Pin Versions

Never depend on `latest`.

### Separate Config Per Environment

```text
dev.yaml
qa.yaml
stage.yaml
prod.yaml
```

### Keep Secrets External

Use env vars or vault tools.

### Review Setup Monthly

Upgrade intentionally, not accidentally.

---

## ❌ Common Mistakes

| Mistake | Impact |
|---|---|
| Global installs only | Dependency conflicts |
| No requirements.txt | Inconsistent setup |
| Hardcoded passwords | Security risk |
| No CI parity | Local vs CI failures |
| Browser auto updates | Sudden failures |

---

## 🔧 Quick Health Check Commands

```bash
python --version
robot --version
pip list
google-chrome --version
chromedriver --version
```

Run periodically.

---

## 📚 What To Learn Next

1. Test Case Structure & Syntax  
2. Variables Management  
3. Built-in Keywords & Libraries  
4. SeleniumLibrary Setup  
5. CI/CD Execution Strategy  

---

## 🏁 Final Verdict

Environment setup is not a beginner-only topic.

It is a **professional engineering topic**.

Strong setup gives:

- Reliable execution  
- Faster onboarding  
- Stable pipelines  
- Easier debugging  
- Lower maintenance cost

Weak setup creates many so-called flaky tests that are actually setup issues.

---

## Summary

> Many automation failures are setup failures first.

If your environment is clean, repeatable, and version-controlled, Robot Framework becomes far easier to scale.
