---
sidebar_position: 10
---

# Cucumber / BDD Integration

This section explains how Extent Reports integrates with **Cucumber-based BDD frameworks** in real-time projects. The goal is to produce **business-readable reports** without breaking thread safety or framework discipline.

---

## 1️⃣ BDD Reporting Philosophy

In BDD frameworks:
- Feature files represent business intent
- Scenarios represent test cases
- Steps represent actions

Extent Reports should **mirror this hierarchy**, not flatten it.

---

## 2️⃣ Feature → Scenario → Step Mapping

### Recommended Mapping

| Cucumber Element | Extent Representation |
|-----------------|----------------------|
| Feature | Parent test |
| Scenario | Child test |
| Step | Log entry |

This keeps reports readable for both QA and business stakeholders.

---

## 3️⃣ Hooks-Based Lifecycle Control

### Why Hooks Are Mandatory

Cucumber does not provide TestNG-style listeners for each step. Hooks act as the lifecycle controller.

Common hooks used:
- `@Before`
- `@After`
- `@AfterStep`

---

## 4️⃣ Creating Tests in Hooks

### Scenario Start

```java
@Before
public void beforeScenario(Scenario scenario) {
    ExtentTest scenarioTest = extent.createTest(scenario.getName());
    ExtentTestManager.setTest(scenarioTest);
}
```

Each scenario gets its **own thread-bound ExtentTest**.

---

## 5️⃣ Step-Level Logging (Best Practice)

### Automatic Step Logging

```java
@AfterStep
public void afterStep(Scenario scenario) {
    ExtentTestManager.getTest().info("Step executed");
}
```

Avoid manual logging inside step definitions unless necessary.

---

## 6️⃣ Screenshot on Scenario Failure

```java
@After
public void afterScenario(Scenario scenario) {
    if (scenario.isFailed()) {
        // capture screenshot
        ExtentTestManager.getTest().fail("Scenario failed");
    }
}
```

Screenshots must be:
- Captured once
- Attached to the failed scenario

---

## 7️⃣ Thread Safety in Cucumber

Important rules:
- One scenario = one thread
- Use `ThreadLocal<ExtentTest>`
- Clean up after scenario execution

Cucumber parallel execution breaks without this.

---

## 8️⃣ Common BDD Reporting Mistakes

❌ Creating ExtentTest inside step definitions
❌ Logging every Gherkin keyword manually
❌ Duplicating scenario names
❌ Ignoring thread cleanup

---

## 🧠 Key Takeaways

- Hooks control reporting lifecycle
- Keep reports business-readable
- Thread safety rules still apply
- Minimal manual logging

---

## 🔜 Next Document

➡️ **CI/CD Integration**

This will cover Jenkins and GitLab report publishing, artifacts, and pipeline best practices.
