---
sidebar_position: 17
---

# Execution, Reports and CI/CD

Execution, reporting, and CI/CD integration are what make Robot Framework
automation **valuable in real projects**. Tests must run reliably, produce
clear reports, and integrate into pipelines.

---

## Executing Robot Framework Tests

Basic execution:

```bash
robot tests/
```

Execute a specific file:

```bash
robot tests/login.robot
```

---

## Tag-Based Execution

Run tests using tags:

```bash
robot --include smoke tests/
robot --exclude regression tests/
```

Used heavily in CI pipelines.

---

## Variable Overrides at Runtime

```bash
robot --variable BROWSER:chrome tests/
```

Allows environment-specific execution.

---

## Output Files Generated

Robot Framework automatically generates:

- `output.xml` → raw execution data
- `log.html` → detailed execution log
- `report.html` → high-level summary

These files are critical for debugging and auditing.

---

## Understanding Reports

- **log.html** → step-by-step details
- **report.html** → pass/fail overview
- **output.xml** → consumed by CI tools

---

## CI/CD Integration

Robot Framework integrates easily with:
- Jenkins
- GitLab CI
- Azure DevOps
- GitHub Actions

Common pipeline flow:
```
Checkout → Install Dependencies → Execute Tests → Publish Reports
```

---

## Headless Execution

Used in CI to avoid GUI:

```robot
Open Browser    ${URL}    chrome    options=add_argument(--headless)
```

---

## Best Practices ✅

- Always publish reports
- Use tag-based execution
- Keep pipelines fast
- Fail fast for smoke tests

---

## Common Mistakes ❌

- Running full regression on every commit
- Ignoring reports
- Hardcoding environment data
- No cleanup in pipelines

---

## Key Takeaways

- Execution control is critical
- Reports provide visibility
- CI/CD integration is mandatory
- Robot Framework is pipeline-friendly

---

## What’s Next?

👉 **Parallel Execution with Pabot**
