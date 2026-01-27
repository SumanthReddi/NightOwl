---
sidebar_position: 9
---

# Framework-Level Integration

This section explains **how Extent Reports fits into a real automation framework**. At this level, reporting is no longer a utility—it becomes a stable infrastructure component.

---

## 1️⃣ Why Framework-Level Design Matters

In real projects:
- Hundreds of tests run in parallel
- Multiple environments exist
- CI pipelines trigger executions

Without framework-level design:
- Reports break unpredictably
- Configuration becomes scattered
- Maintenance cost explodes

---

## 2️⃣ Extent Manager (Singleton Pattern)

### Purpose
- Provide a single `ExtentReports` instance
- Prevent duplicate initialization
- Centralize configuration

### Responsibilities
- Initialize ExtentReports
- Attach reporter
- Set system info
- Return shared instance

> Only the framework should know **how** Extent Reports is created.

---

## 3️⃣ Centralized Configuration

### Config-Driven Flags (Recommended)

- Enable / disable screenshots
- Enable / disable step logging
- Environment name
- Browser name

These values should come from:
- Properties file
- Environment variables
- CI parameters

Hardcoding is not acceptable at scale.

---

## 4️⃣ Report Naming Strategy

### Correct Strategy
- One report per execution
- Timestamp at folder level

Example:
```
reports/
 └── 2026-01-26_18-30-Run/
     └── index.html
```

### Why This Works
- CI-friendly
- Historical tracking
- No overwrites

---

## 5️⃣ Utility Layer Integration

Extent Reports should be accessed via:
- `ExtentTestManager`
- Common logging utilities

Test classes should **never** reference ExtentReports directly.

---

## 6️⃣ Retry & Failure Strategy

Recommended approach:
- Retry logic via TestNG `IRetryAnalyzer`
- Reporting reflects final outcome only

Do NOT:
- Log retries as separate tests
- Duplicate failed logs

---

## 7️⃣ Clean Shutdown & Stability

At framework shutdown:
- Flush report once
- Release ThreadLocal resources
- Close file handles

Improper shutdown causes corrupted reports.

---

## 🧠 Key Takeaways

- Reporting is infrastructure, not utility
- Centralization is mandatory
- Config-driven behavior scales
- Clean shutdown prevents corruption

---

## 🔜 Next Document

➡️ **Cucumber / BDD Integration**

This will cover feature-scenario mapping, hooks, and clean BDD-style reporting.
