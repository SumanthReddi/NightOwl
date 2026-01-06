---
sidebar_position: 12
---

## TestNG Listeners & Retry Handling — Complete Guide

This document is for **TestNG Listeners and Retry mechanisms**.


---

## 1. What are TestNG Listeners?

Listeners in TestNG allow you to **hook into the test execution lifecycle** and execute custom logic when specific events occur.

They are widely used for:
- Reporting (Extent / Allure)
- Retry logic
- Logging
- Screenshot capture
- Notifications & metrics
- CI stability improvements

Listeners let you add behavior **without modifying test code**.

---

## 2. Why Listeners are Important

### Without Listeners ❌
- Reporting logic mixed into test methods
- Repetitive failure-handling code
- Difficult retry management
- Poor scalability

### With Listeners ✅
- Centralized cross-cutting concerns
- Clean test methods
- Extensible execution behavior
- CI-friendly architecture

---

## 3. Commonly Used TestNG Listener Interfaces

| Listener Interface | Purpose |
|---|---|
| `ITestListener` | Track test start, success, failure, skip |
| `ISuiteListener` | Suite-level start and finish |
| `IInvokedMethodListener` | Before/after every method |
| `IRetryAnalyzer` | Retry failed tests |
| `IAnnotationTransformer` | Modify annotations at runtime |
| `IExecutionListener` | Execution start and end |

---

## 4. `ITestListener` — MOST IMPORTANT ⭐

```java
public class TestListener implements ITestListener {

    public void onTestStart(ITestResult result) {}

    public void onTestSuccess(ITestResult result) {}

    public void onTestFailure(ITestResult result) {}

    public void onTestSkipped(ITestResult result) {}

    public void onStart(ITestContext context) {}

    public void onFinish(ITestContext context) {}
}
```

### Typical Use Cases
- Logging test execution
- Reporting status
- Screenshot capture on failure
- Retry tracking

---

## 5. Screenshot on Failure (Industry Pattern)

```java
@Override
public void onTestFailure(ITestResult result) {
    WebDriver driver = DriverManager.getDriver();
    ScreenshotUtil.capture(driver, result.getName());
}
```

### Best Practices
- Use `ThreadLocal<WebDriver>`
- Never initialize WebDriver inside listeners
- Keep listeners lightweight

---

## 6. Registering Listeners

### 6.1 Using `testng.xml` (RECOMMENDED)

```xml
<listeners>
    <listener class-name="listeners.TestListener"/>
</listeners>
```

✔️ Applies to entire suite  
✔️ Clean and centralized  
✔️ Best for large frameworks  

---

### 6.2 Using `@Listeners` Annotation

```java
@Listeners(listeners.TestListener.class)
public class LoginTest {}
```

⚠️ Applies only to that test class  
⚠️ Not scalable for large projects  

---

### 6.3 Service Loader (Advanced)

- Uses `META-INF/services`
- Auto-loads listeners
- Rarely needed in typical automation projects

---

## 7. Listener Execution Order (Important)

1. XML-registered listeners  
2. `@Listeners` annotation  
3. Service-loader listeners  

Understanding this avoids **duplicate execution issues**.

---

## 8. Retry Handling with `IRetryAnalyzer` ⭐

### Why Retry is Needed
- Network instability
- Browser flakiness
- CI timing issues

Retries must be **controlled**, not abused.

---

### Implement `IRetryAnalyzer`

```java
public class RetryAnalyzer implements IRetryAnalyzer {

    private int retryCount = 0;
    private static final int MAX_RETRY = 2;

    @Override
    public boolean retry(ITestResult result) {
        if (retryCount < MAX_RETRY) {
            retryCount++;
            return true;
        }
        return false;
    }
}
```

---

### Attach Retry to Test

```java
@Test(retryAnalyzer = RetryAnalyzer.class)
public void flakyTest() {}
```

⚠️ This approach does not scale well in large projects.

---

## 9. Global Retry using `IAnnotationTransformer` ⭐ (BEST PRACTICE)

Instead of annotating every test, apply retry **globally**.

```java
public class RetryTransformer implements IAnnotationTransformer {

    @Override
    public void transform(
        ITestAnnotation annotation,
        Class testClass,
        Constructor testConstructor,
        Method testMethod) {

        annotation.setRetryAnalyzer(RetryAnalyzer.class);
    }
}
```

Register in `testng.xml`:

```xml
<listener class-name="listeners.RetryTransformer"/>
```

✔️ Centralized retry logic  
✔️ Cleaner test classes  
✔️ CI-friendly  

---

## 10. Listener vs RetryAnalyzer — Clear Difference

| Listener | RetryAnalyzer |
|---|---|
| Observes execution events | Controls re-execution |
| Reporting / logging | Stability control |
| Global behavior | Per-test decision |
| Cannot retry alone | Triggers retry |

➡️ Use **both together** for stable automation.

---

## 11. `ISuiteListener`

```java
public class SuiteListener implements ISuiteListener {

    public void onStart(ISuite suite) {}

    public void onFinish(ISuite suite) {}
}
```

### Use Cases
- Report initialization
- Global setup & cleanup
- Environment metadata capture

---

## 12. Common Real-World Mistakes ❌

- Heavy logic inside listener methods
- Retrying every failure blindly
- High retry count masking real defects
- Creating WebDriver inside listeners
- Non-thread-safe listeners with parallel execution
- Forgetting listener registration

---

## 13. Senior-Level Best Practices ✅

- Keep listeners lightweight and stateless
- Make all listeners thread-safe
- Retry only known flaky scenarios
- Keep retry count low (1–2)
- Separate reporting and retry responsibilities
- Log retries clearly in reports
- Prefer XML-based registration

---

## 14. CI/CD Considerations

- Retries increase execution time
- Track retries separately in reports
- Fail build if retry threshold is exceeded
- Never hide consistent failures with retries

---

## 15. Key Takeaways 🎯

- Listeners extend TestNG behavior cleanly
- `ITestListener` is mandatory knowledge
- RetryAnalyzer stabilizes flaky tests
- AnnotationTransformer enables global retry
- Correct listener usage = stable CI pipelines
