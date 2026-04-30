---
sidebar_position: 1
title: GitLab CI Pipeline Configuration
description: Production-ready GitLab CI design for Robot Framework with environment control, modular jobs, parallel execution, artifacts, and quality gates.
---

# Robot Framework: GitLab CI Pipeline Configuration

> Stable pipelines don’t come from “just running tests in CI”.  
> They come from deliberate pipeline design.

---

## 🎯 Why This Matters

Common pipeline pain points:

- Works locally, fails in CI  
- Environment mismatch  
- Slow execution  
- Missing reports  
- Random failures in parallel runs  

> In most cases, tests are not flaky — pipeline design is weak.

---

# 🧱 Production CI Design Model

Think of CI in layers:

```text
Layer 1 → Environment Management
Layer 2 → Pipeline Structure
Layer 3 → Parallel Execution
Layer 4 → Reporting & Quality Gates
```

Each layer solves a specific reliability problem.

---

# 1️⃣ Environment Management (Foundation)

## ❌ Bad

```yaml
robot --variable ENVIRONMENT:staging
```

Hardcoded → breaks across environments.

---

## ✅ Good

```yaml
variables:
  ENVIRONMENT: ${ENVIRONMENT:-staging}
  API_URL: ${API_URL}
  DB_HOST: ${DB_HOST}
```

Use runtime variables.

---

## Validate Early

```yaml
validate_env:
  stage: setup
  script:
    - |
      if [ -z "$API_URL" ]; then
        echo "Missing API_URL"
        exit 1
      fi
```

👉 Fail fast instead of debugging later.

---

# 2️⃣ Pipeline Structure (Scalability)

## ❌ Monolithic

```yaml
all_tests:
  script:
    - robot tests/
```

Problems:

- slow  
- hard to debug  
- not scalable  

---

## ✅ Modular Jobs

```yaml
stages:
  - setup
  - test
  - report

setup:
  stage: setup
  script:
    - pip install -r requirements.txt

api_tests:
  stage: test
  script:
    - robot tests/api

ui_tests:
  stage: test
  script:
    - robot tests/ui
```

---

## Add Dependencies

```yaml
api_tests:
  needs: ["setup"]
```

👉 Ensures correct execution order.

---

# 3️⃣ Parallel Execution (Speed + Stability)

## ❌ Sequential

```yaml
robot tests/
```

---

## ✅ Parallel Jobs

```yaml
api_tests:
  stage: test
  script:
    - robot tests/api
  parallel: 4
```

---

## Better: Use Pabot

```bash
pabot --processes 4 tests/
```

👉 Handles:

- test distribution  
- parallel execution  
- better resource usage  

---

## ⚠️ Important

Parallel failures usually come from:

- shared test data  
- DB conflicts  
- static users  

👉 Always use **dynamic data**.

---

# 🏢 Real Insight

Before:

- 20–30 min pipelines  
- random failures  

After:

- ~5–8 min pipelines  
- stable execution  

Main change: **parallel + modular design**

---

# 4️⃣ Artifacts & Reporting

## Store Reports

```yaml
artifacts:
  paths:
    - reports/
  reports:
    junit: reports/output.xml
```

---

## Why It Matters

- Debug failures  
- Track history  
- Integrate with dashboards  

---

# 5️⃣ Retry Strategy

```yaml
retry: 2
```

Use for:

- network glitches  
- temporary failures  

Avoid using it to hide real issues.

---

# 6️⃣ Quality Gate (Optional but Powerful)

```yaml
quality_gate:
  stage: report
  script:
    - python check_results.py
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
```

Use for:

- pass % threshold  
- blocking bad releases  

---

# 📁 Recommended Structure

```text
.gitlab-ci.yml
tests/
reports/
resources/
requirements.txt
```

---

# ⚠️ Common Issues

## Works Locally, Fails in CI

- missing env variables  
- different Python versions  

---

## Parallel Failures

- shared users  
- same DB records  

---

## Missing Reports

- wrong artifact path  
- job fails before upload  

---

## Slow Pipelines

- no parallelization  
- heavy setup step  

---

# ❌ Common Mistakes

- hardcoded environments  
- single large job  
- no artifacts  
- ignoring dependencies  
- shared test data  

---

# ✅ Best Practices

- use environment variables  
- split jobs logically  
- enable parallel execution  
- store reports  
- keep setup reusable  
- isolate test data  

---

# 📈 Maturity Model

## Beginner
Single job pipeline.

## Intermediate
Separate API/UI jobs.

## Advanced
Parallel + artifacts + env control.

## Expert
Full CI strategy with quality gates + scalable infra.

---

# 💡 Practical Insight

When pipelines fail:

Check in order:

1. Environment setup  
2. Data isolation  
3. Job structure  
4. Parallel execution  

Tests are usually not the root cause.

---

# 🏁 Final Verdict

A good CI pipeline makes automation usable.

Strong pipeline gives:

- faster feedback  
- stable execution  
- scalable testing  
- reliable releases  

Weak pipeline creates noise and distrust.

---

# 📚 What To Learn Next

1. Jenkins Pipelines  
2. GitHub Actions  
3. Test Reporting Strategy  
4. Pabot Deep Dive  
5. Full CI/CD Architecture  

---

## Summary

> Tests prove functionality.  
> Pipelines prove reliability.
