---
sidebar_position: 8
---

# Advanced Configuration & Customization

This section covers **controlled customization** of Extent Reports used in real-time enterprise projects. The goal is clarity and traceability—not visual overengineering.

---

## 1️⃣ Report Themes & Appearance

### Supported Themes
- `Theme.STANDARD`
- `Theme.DARK`

```java
spark.config().setTheme(Theme.DARK);
```

### Real-Time Recommendation
- Use **STANDARD** for business users
- Use **DARK** for developer-heavy teams

Avoid custom CSS unless explicitly required.

---

## 2️⃣ Report Identity & Metadata

### Report Name & Title

```java
spark.config().setReportName("UI Automation Results");
spark.config().setDocumentTitle("Test Execution Report");
```

These should be **stable and environment-aware**, not test-specific.

---

## 3️⃣ System Information (Mandatory in Enterprises)

```java
extent.setSystemInfo("OS", System.getProperty("os.name"));
extent.setSystemInfo("Java Version", System.getProperty("java.version"));
extent.setSystemInfo("Browser", browserName);
extent.setSystemInfo("Environment", env);
extent.setSystemInfo("Build", buildNumber);
```

### Why This Matters
- Debugging CI failures
- Audit trails
- Release validation

---

## 4️⃣ Test Categorization & Tagging

### Categories
```java
test.assignCategory("Smoke", "Regression");
```

### Authors
```java
test.assignAuthor("Automation Team");
```

### Devices
```java
test.assignDevice("Chrome_Desktop");
```

Used heavily in large test suites for filtering.

---

## 5️⃣ Dynamic Naming (Safe Usage)

Allowed:
- Test name
- Browser
- Environment

```java
extent.createTest(testName + " [Chrome][QA]");
```

Avoid adding timestamps to test names—use them in report folders instead.

---

## 6️⃣ Parent–Child Tests (Nodes)

### When to Use
- Data-driven tests
- Multi-step workflows

```java
ExtentTest parent = extent.createTest("Checkout Flow");
ExtentTest child = parent.createNode("Valid Payment");
```

Do not overuse nodes; they add complexity.

---

## 7️⃣ What NOT to Customize

❌ Heavy CSS/JS overrides
❌ Emojis in logs for enterprise reports
❌ Dynamic UI manipulation
❌ Screenshot styling hacks

Customization should never affect reliability.

---

## 🧠 Key Takeaways

- Keep customization minimal and meaningful
- Metadata > visuals
- Categorization helps at scale
- Stability always beats aesthetics

---

## 🔜 Next Document

➡️ **Framework-Level Integration**

This will cover Extent Manager design, config-driven behavior, and scalable architecture patterns.
