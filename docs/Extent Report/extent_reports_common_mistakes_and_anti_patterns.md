---
sidebar_position: 12
---

# Common Mistakes & Anti-Patterns

This section documents **real mistakes repeatedly seen in production automation frameworks**. Avoiding these is as important as knowing the correct implementation.

---

## 1️⃣ Creating Reports Inside Test Classes ❌

### Why People Do This
- Simplicity
- Copy-paste from tutorials

### Why It Fails
- Breaks parallel execution
- Causes duplicate reports
- Violates separation of concerns

✔ **Correct**: Initialize reports in listeners / framework layer

---

## 2️⃣ Using Static `ExtentTest` Variables ❌

```java
public static ExtentTest test;
```

### Why It Fails
- Shared across threads
- Log mixing
- Wrong screenshots

✔ **Correct**: Use `ThreadLocal<ExtentTest>`

---

## 3️⃣ Flushing Reports Multiple Times ❌

### Common Misuse
- Flushing after every test
- Flushing inside `@AfterMethod`

### Impact
- Corrupted HTML
- Missing logs

✔ **Correct**: Flush once in suite completion

---

## 4️⃣ Logging Everything ❌

Examples:
- Every Selenium call
- Every framework method

### Impact
- Huge unreadable reports
- Business users stop reading

✔ **Correct**: Log intent, not implementation

---

## 5️⃣ Screenshot Abuse ❌

### What Goes Wrong
- Screenshot on every step
- Overwriting screenshot files

### Impact
- Slow execution
- Incorrect attachments

✔ **Correct**: Screenshot on failure + critical steps only

---

## 6️⃣ Hardcoded Paths ❌

### Examples
- `C:/Users/...`
- Local desktop paths

### Impact
- CI failures
- Non-portable framework

✔ **Correct**: Relative paths + workspace-aware locations

---

## 7️⃣ Ignoring Thread Cleanup ❌

### What Happens
- Memory leaks
- Unstable reports in long runs

✔ **Correct**:
```java
extentTest.remove();
```

---

## 8️⃣ Over-Customization ❌

### Examples
- Heavy CSS/JS
- UI hacks

### Impact
- Fragile reports
- Upgrade pain

✔ **Correct**: Minimal, meaningful customization

---

## 9️⃣ Mixing Reporting With Assertions ❌

### Bad Practice
```java
test.fail("Assertion failed");
Assert.fail();
```

### Impact
- Duplicate failures
- Confusing reports

✔ **Correct**: Assertions fail tests, listeners report them

---

## 🔍 Self-Audit Checklist

Before committing your framework, confirm:

✔ One report per execution
✔ ThreadLocal usage present
✔ Listeners control lifecycle
✔ CI reports always published
✔ No test-level report code

---

## 🧠 Final Takeaway

> **Most Extent Reports problems are design problems, not library problems.**

Avoiding these anti-patterns guarantees stable, trustworthy reports.

---

## 🎯 Roadmap Complete

You now have a **fully real-time, enterprise-grade Extent Reports roadmap** suitable for:
- Production frameworks
- CI/CD pipelines
- Team-wide standardization
- Senior-level interviews
