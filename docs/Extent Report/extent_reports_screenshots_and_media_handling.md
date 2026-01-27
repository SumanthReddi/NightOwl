---
sidebar_position: 5
---

# Screenshots & Media Handling

Screenshots are **non-negotiable** in real-time automation projects. This section explains how to capture and attach screenshots correctly so they remain accurate under parallel execution and CI pipelines.

---

## 1️⃣ When Screenshots Should Be Captured

### Mandatory Cases
- On test failure
- On test skip (environment or dependency issues)

### Optional (Config-Driven)
- On every step
- On critical checkpoints

> ⚠️ Capturing screenshots on every step by default is discouraged due to performance impact.

---

## 2️⃣ Screenshot Capture Strategies

### Viewport Screenshot
- Fast
- Most commonly used
- Default choice in enterprise projects

### Full Page Screenshot
- Useful for UI validations
- Slower and browser-dependent

Choose based on project needs, not convenience.

---

## 3️⃣ File-Based vs Base64 Screenshots

### File-Based Screenshots (Most Common)

```java
ExtentTestManager.getTest()
    .addScreenCaptureFromPath("screenshots/login_error.png");
```

#### Pros
- Easy to debug locally
- CI artifact friendly

#### Cons
- Path handling required

---

### Base64 Screenshots

```java
ExtentTestManager.getTest()
    .addScreenCaptureFromBase64String(base64Image);
```

#### Pros
- No file dependency
- Safer in distributed execution

#### Cons
- Larger report size
- Harder to debug manually

---

## 4️⃣ Parallel-Safe Screenshot Handling

### Rules You MUST Follow

✔ Screenshot name must be unique per test
✔ Use timestamps or test names
✔ Never overwrite screenshot files

```java
String fileName = testName + "_" + System.currentTimeMillis() + ".png";
```

Failure to do this causes screenshot mismatch in reports.

---

## 5️⃣ Screenshot Handling via Listeners (Best Practice)

### Correct Flow
1. Test fails
2. Listener captures screenshot
3. Screenshot attached to current thread's ExtentTest

❌ Never capture screenshots directly inside test methods.

---

## 6️⃣ Media Types Beyond Screenshots

Supported media attachments:
- Images
- Screen recordings (from cloud tools)
- External URLs (logs, dashboards)

Extent Reports **displays**, not records media.

---

## 7️⃣ CI/CD Considerations

### Path Handling
- Use relative paths
- Avoid absolute local paths

### Artifact Publishing
- Archive `reports/` folder
- Include screenshots subfolder

---

## 🧠 Key Takeaways

- Screenshot-on-failure is mandatory
- Listener-based capture is the only safe approach
- Base64 is optional, not default
- Unique naming is critical for parallel runs

---

## 🔜 Next Document

➡️ **Thread Safety & Parallel Execution**

This will deep-dive into `ThreadLocal`, parallel TestNG execution, and how Extent Reports stays stable under load.
