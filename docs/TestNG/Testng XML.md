---
sidebar_position: 14
---

## Testng.xml

> **Purpose**  
`testng.xml` is the execution control file in TestNG.  
It defines **what to run, how to run, execution order, grouping, parameters, listeners, and parallelism** — without modifying Java code.

**Single file controls:**

- Which tests run
- Parallel settings
- Browser parameters
- Groups to include/exclude
- Listeners

```xml
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="E2ESuite" parallel="methods" thread-count="4">
    <!-- Global listeners -->
    <listeners>
        <listener class-name="ScreenshotListener"/>
        <listener class-name="ExtentReportListener"/>
    </listeners>
    
    <!-- Chrome Tests -->
    <test name="Chrome">
        <parameter name="browser" value="chrome"/>
        <groups>
            <run>
                <include name="smoke"/>
                <exclude name="slow"/>
            </run>
        </groups>
        <classes>
            <class name="tests.LoginTest"/>
        </classes>
    </test>
    
    <!-- Firefox Tests -->
    <test name="Firefox">
        <parameter name="browser" value="firefox"/>
        <classes>
            <class name="tests.CrossBrowserTest"/>
        </classes>
    </test>
</suite>
```

---

## 📌 Table of Contents

1. Suite (`<suite>`)
2. Test (`<test>`)
3. Classes & Class (`<classes>`, `<class>`)
4. Including & Excluding Methods (with Regex)
5. Packages
6. Groups
7. Parameters
8. Listeners
9. Execution Order (Diagram)
10. Priority vs XML Order
11. Parallel Execution (Diagram)
12. Retry Analyzer
13. What XML Can & Cannot Do
14. CI / Best Practices
15. Common Pitfalls
16. Key Takeaways

---

## 1️⃣ `<suite>` — Root Level

```xml
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="RegressionSuite">
</suite>
```

### Rules
- Mandatory root element
- Only **one `<suite>` per XML**
- All execution starts here

---

### `<suite>` Attributes (Complete)

```xml
<suite
    name="RegressionSuite"
    verbose="2"
    parallel="tests"
    thread-count="4"
    preserve-order="true"
    time-out="300000"
    junit="false"
    skipfailedinvocationcounts="false">
```

| Attribute | Default | Description |
|---|---|---|
| `name` | — | Suite name |
| `verbose` | 1 | Log level (0–10) |
| `parallel` | — | Parallel execution |
| `thread-count` | 1 | Max threads |
| `preserve-order` | false | Maintain order |
| `time-out` | — | Suite timeout (ms) |
| `junit` | false | JUnit compatibility |
| `skipfailedinvocationcounts` | false | Retry behavior |

---

## 2️⃣ `<test>` — Logical Execution Unit

```xml
<test name="LoginTests">
</test>
```

### Key Points
- Independent execution context
- Own parameters
- Ideal for cross-browser execution
- Can run in parallel

### `<test>` Attributes

```xml
<test name="ChromeTests" verbose="2" preserve-order="true">
```

| Attribute | Notes |
|---|---|
| `name` | Required |
| `verbose` | Overrides suite |
| `preserve-order` | Overrides suite |

---

## 3️⃣ `<classes>` & `<class>`

```xml
<classes>
    <class name="tests.LoginTest"/>
</classes>
```

### Rules
- Fully-qualified class name required
- Wildcards ❌ not allowed
- Must contain at least one `@Test`

### Multiple Classes

```xml
<classes>
    <class name="tests.LoginTest"/>
    <class name="tests.PaymentTest"/>
</classes>
```

Execution order:
- XML order works **only if**
  - `preserve-order=true`
  - No parallel execution

---

## 4️⃣ Including & Excluding Methods

### Default Behavior

```xml
<class name="tests.SampleTest"/>
```

✅ All `@Test` methods execute

---

### Include Only (Whitelist)

```xml
<methods>
    <include name="testLogin"/>
</methods>
```

- ONLY specified methods execute
- All others skipped

---

### Exclude Only (Blacklist)

```xml
<methods>
    <exclude name="testLogout"/>
</methods>
```

- All methods execute
- Except excluded ones

---

### Include + Exclude Together

```xml
<methods>
    <include name="test.*"/>
    <exclude name="testDeprecated"/>
</methods>
```

**Rule**
1. Include list built first
2. Exclude removes from include list

➡️ **Exclude always wins**

---

### Regex Support (Java Regex)

| Regex | Matches |
|---|---|
| `test.*` | testLogin, testPay |
| `.*Payment` | makePayment |
| `login|logout` | login OR logout |
| `^testA$` | Only testA |

⚠️ Regex applies **only to method names**

---

### Dependency Trap

```java
@Test
public void login(){}

@Test(dependsOnMethods="login")
public void payment(){}
```

```xml
<include name="payment"/>
```

❌ `login()` NOT auto-included  
❌ `payment()` FAILS

➡️ XML does **NOT** resolve dependencies

---

## 5️⃣ `<packages>`

```xml
<packages>
    <package name="tests.smoke.*"/>
</packages>
```

- Recursive execution
- Wildcards supported
- Cleaner than listing classes

### Package Exclusion

```xml
<package name="tests.*">
    <exclude name="tests.legacy.*"/>
</package>
```

---

## 6️⃣ `<groups>`

### Group Definition (Code)

```java
@Test(groups = {"smoke", "login"})
```

### XML Execution

```xml
<groups>
    <run>
        <include name="smoke"/>
        <exclude name="regression"/>
    </run>
</groups>
```

### Rules
- OR logic for includes
- Exclude has higher priority
- Regex supported

```xml
<include name="smoke|sanity"/>
```

---

## 7️⃣ `<parameters>`

### Parameter Hierarchy

```
Method
  ↑
Test
  ↑
Suite
```

```xml
<suite>
    <parameter name="browser" value="chrome"/>
    <test>
        <parameter name="browser" value="edge"/>
```

➡️ `edge` is used

### Missing Parameters

```java
@Parameters("env")
@Optional("uat")
```

---

## 8️⃣ `<listeners>`

```xml
<listeners>
    <listener class-name="listeners.ExtentListener"/>
</listeners>
```

### Execution Order
1. XML listeners
2. Annotation listeners
3. Service loader listeners

---

## 9️⃣ 🔄 Execution Flow Diagram

```
@BeforeSuite
   ↓
@BeforeTest
   ↓
@BeforeClass
   ↓
@BeforeMethod
   ↓
@Test
   ↓
@AfterMethod
   ↓
@AfterClass
   ↓
@AfterTest
   ↓
@AfterSuite
```

---

## 🔟 Priority vs XML Order

```java
@Test(priority = 1)
```

- Priority overrides XML order
- XML order works only if:
  - `preserve-order=true`
  - No priority
  - No parallel execution

---

## 1️⃣1️⃣ Parallel Execution

### `parallel="tests"`

```
Thread 1 → Test A
Thread 2 → Test B
```

### `parallel="classes"`

```
Thread 1 → Class A
Thread 2 → Class B
```

### `parallel="methods"`

```
Thread 1 → testLogin
Thread 2 → testLogout
Thread 3 → testPayment
```

⚠️ Order ignored  
⚠️ Shared data risks

---

## 1️⃣2️⃣ Retry Analyzer

- Implemented in Java
- Enabled via listener
- Retry count cannot be set in XML

---

## 1️⃣3️⃣ What XML Cannot Do

❌ Define DataProviders  
❌ Override dependencies  
❌ Change priorities  
❌ Control assertions  
❌ Modify retry logic  

---

## 1️⃣4️⃣ CI / Best Practices

- One XML per purpose (smoke, regression)
- Prefer groups over method names
- Parallelize at `<test>` level
- Externalize secrets
- Keep XML under version control

---

## 1️⃣5️⃣ Common Pitfalls

- Parallel + static variables
- Missing dependency methods
- Mixing priority with preserve-order
- One giant XML for all runs
- Hardcoding credentials

---

## 🧠 Key Takeaways

- Include = whitelist
- Exclude = blacklist
- Exclude always wins
- XML never resolves dependencies
- Groups > method names
- Parallel execution ignores order
