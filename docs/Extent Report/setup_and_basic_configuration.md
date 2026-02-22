---
sidebar_position: 3
---

# Setup & Basic Configuration

This section shows **how to set up Extent Reports correctly** so it works reliably in real-time projects, including CI pipelines and parallel execution. Version mismatch and bad initialization are the #1 causes of reporting issues—this avoids both.

---

## 1️⃣ Dependency Management (Version-Safe)

### Maven Dependency (Recommended)
Use a **single Extent Reports dependency**. Avoid mixing legacy reporters.

```xml
<dependency>
  <groupId>com.aventstack</groupId>
  <artifactId>extentreports</artifactId>
  <version>5.x.x</version>
</dependency>
```

> ✅ Stick to **ExtentReports 5.x** for Spark reporting and parallel stability.

### Common Dependency Mistakes
- ❌ Mixing `ExtentHtmlReporter` (legacy) with Spark
- ❌ Multiple Extent versions via transitive deps
- ❌ Copying dependencies from old blogs

---

## 2️⃣ Project Folder Structure (CI-Friendly)

Recommended structure:

```
project-root/
 ├── reports/
 │    ├── index.html
 │    ├── screenshots/
 │    └── logs/
 └── src/
```

### Why This Works
- Relative paths (CI safe)
- Easy artifact publishing
- Clean separation of concerns

---

## 3️⃣ Basic Initialization (Framework-Level Only)

### Correct Initialization Pattern
```java
ExtentReports extent = new ExtentReports();
ExtentSparkReporter spark = new ExtentSparkReporter("reports/index.html");

spark.config().setReportName("Automation Test Results");
spark.config().setDocumentTitle("Execution Report");

extent.attachReporter(spark);
```

### Rules You MUST Follow
- Initialize **once per suite**
- Never initialize inside `@Test`
- Never attach reporters multiple times

---

## 4️⃣ Creating a Test (Minimal Example)

```java
ExtentTest test = extent.createTest("Login Test");
test.pass("Login successful");
```

> ⚠️ This example is only to understand basics. In real frameworks, test creation happens **inside listeners**, not test classes.

---

## 5️⃣ Flushing the Report (Critical Rule)

```java
extent.flush();
```

### When to Flush
- ✅ Once, after all tests complete
- ❌ Never per test
- ❌ Never per method

Flushing multiple times can corrupt the report.

---

## 6️⃣ Environment & System Info

```java
extent.setSystemInfo("OS", System.getProperty("os.name"));
extent.setSystemInfo("Browser", "Chrome");
extent.setSystemInfo("Environment", "QA");
```

### Why This Matters
- Helps debugging CI failures
- Required in enterprise reporting

---

## 7️⃣ Validation Checklist

Before moving ahead, confirm:

✔ Report generates without errors
✔ HTML opens locally and in CI
✔ Only one report per execution
✔ No test-level initialization

---

## 🧠 Key Takeaways

- Version consistency is mandatory
- Initialization belongs to the framework layer
- Flush only once
- This setup is the foundation for thread safety
