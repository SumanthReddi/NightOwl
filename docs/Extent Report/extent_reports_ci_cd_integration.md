---
sidebar_position: 11
---

# CI/CD Integration

This section explains how Extent Reports is used in **real CI/CD pipelines** such as Jenkins and GitLab. A report that works locally but fails in CI is considered broken.

---

## 1️⃣ CI/CD Reality Check

In CI environments:
- Workspaces are ephemeral
- Paths change per build
- Parallel jobs may run simultaneously

Extent Reports must be **location-agnostic and deterministic**.

---

## 2️⃣ Report Path Strategy (Critical)

### Correct Approach
- Use relative paths
- Generate reports inside project workspace

```java
String reportPath = "reports/index.html";
```

### Incorrect Approach
❌ Absolute local paths
❌ User-specific directories

---

## 3️⃣ Jenkins Integration

### HTML Report Publishing

Steps:
1. Install **HTML Publisher Plugin**
2. Configure post-build action
3. Set report directory: `reports`
4. Set report file: `index.html`

Result:
- Report accessible from Jenkins build page

---

## 4️⃣ Jenkins Best Practices

✔ One report per build
✔ Clean workspace before build
✔ Archive reports as build artifacts
✔ Avoid overwriting previous reports

---

## 5️⃣ GitLab CI Integration

### Artifacts Configuration

```yaml
artifacts:
  when: always
  paths:
    - reports/
```

Result:
- Reports downloadable per pipeline run

---

## 6️⃣ GitLab Best Practices

✔ Keep artifacts small
✔ Use timestamps for report folders
✔ Retain artifacts based on policy

---

## 7️⃣ Parallel Jobs in CI

Important rules:
- Each job generates its own report
- Do not share report directories across jobs

Sharing reports between jobs causes corruption.

---

## 8️⃣ Failure Handling in CI

Best practice:
- Always publish reports (even on failure)
- Use `when: always` in pipelines

CI reports are most valuable when tests fail.

---

## 🧠 Key Takeaways

- CI environments are not local machines
- Relative paths are mandatory
- One report per job/build
- Always publish reports

---

## 🔜 Next Document

➡️ **Common Mistakes & Anti-Patterns**

This final section will list real-world mistakes that break Extent Reports and how to avoid them.
