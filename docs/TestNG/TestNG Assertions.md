---
sidebar_position: 4
---

## Assertions in TestNG – Hard vs Soft

Assertions decide **PASS or FAIL** of a test.  
In real automation frameworks, **wrong assertion usage causes flaky tests, false positives, and unreliable CI results**.

This section explains **Hard Assertions vs Soft Assertions**, when to use each, and best industry standard practices. 

---

## What is an Assertion?

An assertion is a **validation point** that verifies whether the actual result matches the expected result.

If assertions are wrong:
- Tests pass when they should fail ❌
- Bugs slip into production ❌
- CI results lose credibility ❌

---

## 1️⃣ Hard Assertions (Default Behavior)

Hard assertions **stop test execution immediately** when a validation fails.

### Example

```java
import org.testng.Assert;

@Test
public void loginTest() {
    Assert.assertEquals(actualTitle, "Dashboard");
    Assert.assertTrue(isUserLoggedIn());
    Assert.assertFalse(isErrorDisplayed());
}
```

### Behavior
- If first assertion fails → test stops
- Remaining assertions are **NOT executed**

---

### When to Use Hard Assertions ✅

Use hard assertions when:
- Failure makes further steps meaningless
- Validating critical checkpoints
- Setup or preconditions

Example:
```java
Assert.assertTrue(isLoginSuccessful(), "Login failed, stopping test");
```

---

## 2️⃣ Soft Assertions (TestNG Feature ⭐)

Soft assertions **do not stop execution immediately**.  
All validations run, and failures are reported **at the end**.

### Example

```java
import org.testng.asserts.SoftAssert;

@Test
public void dashboardTest() {
    SoftAssert softAssert = new SoftAssert();

    softAssert.assertEquals(actualTitle, "Dashboard");
    softAssert.assertTrue(isProfileVisible());
    softAssert.assertTrue(isLogoutButtonPresent());

    softAssert.assertAll(); // MANDATORY
}
```

---

### ⚠️ `assertAll()` is Mandatory

If you forget:
```java
softAssert.assertAll();
```

👉 **Test will PASS even if assertions failed** ❌  
This is one of the **most common real-world mistakes**.

---

## 3️⃣ Hard vs Soft Assertions – Comparison

| Aspect | Hard Assertion | Soft Assertion |
|-----|---------------|----------------|
| Execution stops on failure | Yes | No |
| Reports all failures | No | Yes |
| Use case | Critical checks | UI validations |
| Risk | Misses later issues | False pass if assertAll missed |

---

## 4️⃣ Real-World Automation Strategy ⭐

### Recommended Pattern

- **Hard assertion** for critical flow
- **Soft assertions** for UI/content validation

### Example

```java
Assert.assertTrue(isLoginSuccessful(), "Login failed");

SoftAssert softAssert = new SoftAssert();
softAssert.assertEquals(pageTitle, "Dashboard");
softAssert.assertTrue(isProfileVisible());
softAssert.assertAll();
```

This pattern is widely used in **enterprise frameworks**.

---

## 5️⃣ Assertions Inside Loops (Danger Zone)

### Bad Practice ❌

```java
for (String item : items) {
    Assert.assertTrue(item.isDisplayed());
}
```

- Stops at first failure
- Hides other failures

### Better Practice ✅

```java
SoftAssert softAssert = new SoftAssert();

for (String item : items) {
    softAssert.assertTrue(item.isDisplayed(), item + " not visible");
}

softAssert.assertAll();
```

---

## 6️⃣ Assertion Best Practices

- Fail fast for **critical failures**
- Use SoftAssert for **multiple validations**
- Never forget `assertAll()`
- Add **meaningful failure messages**
- Avoid assertions inside utility methods
- Keep assertions close to test logic

---

## 7️⃣ Assertions vs Verification (Interview Concept)

| Assertion | Verification |
|--------|-------------|
| Stops or reports failure | Logs result |
| Used in tests | Used in utilities |
| Affects test status | Does not affect test |

TestNG provides **assertions**, not verifications.

---

## 8️⃣ Common Mistakes (Seen in Real Projects)

- Using only hard assertions everywhere
- Forgetting `assertAll()`
- Asserting too much in one test
- Writing assertions inside Page Objects
- Swallowing assertion failures in try/catch

---

## 9️⃣ Assertions & CI/CD Impact

- Wrong assertions = false green builds
- Soft assertions improve defect visibility
- Clear assertion messages speed up debugging
- Stable assertions = reliable CI

---

## Key Takeaways

- Assertions define test reliability
- Hard assertions stop execution
- Soft assertions collect failures
- `assertAll()` is mandatory
- Balanced usage is expected from senior engineers

---