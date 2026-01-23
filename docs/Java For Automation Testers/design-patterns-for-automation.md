---
sidebar_position: 12
---
# Design Patterns
## Design Patterns for Automation Frameworks (Making Frameworks Scalable)

<!-- ## Priority
FRAMEWORK_CORE -->

---

## Context (Why this topic exists NOW)
At this stage, your automation framework:
- runs reliably
- supports parallel execution
- validates UI and backend
- handles configuration and data

Now a new problem appears:
- Framework code grows rapidly
- Responsibilities mix together
- Small changes cause widespread breakage

Selenium does not guide architecture.
Design Patterns exist to give **structure and discipline** to growing frameworks.

---

## What Selenium Cannot Do (The Gap)
Selenium can:
- automate browsers

Selenium cannot:
- enforce clean architecture
- manage object creation consistently
- separate responsibilities
- support easy extensibility

Without patterns:
❌ rigid frameworks  
❌ difficult maintenance  
❌ unsafe scaling  

---

## What Design Patterns Add (The Fix)
Design patterns provide:
- proven solutions to recurring problems
- predictable structure
- clean separation of concerns

In simple words:
> Selenium runs tests.  
> Design patterns make frameworks survivable.

---

## Patterns You MUST Know (Automation-Relevant Only)

---

## 1. Singleton Pattern (Driver Management)

### Automation Problem
Multiple WebDriver instances created unintentionally.

### Pattern Fix
Ensure only one driver instance per thread.

```java
public class DriverFactory {

    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

    private DriverFactory() {}

    public static WebDriver getDriver() {
        return driver.get();
    }
}
```

Singleton ensures:
- controlled access
- consistent driver lifecycle

---

## 2. Factory Pattern (Browser Creation)

### Automation Problem
Browser creation logic scattered everywhere.

### Pattern Fix
Centralize browser creation.

```java
public class BrowserFactory {

    public static WebDriver create(String browser) {
        switch (browser) {
            case "chrome":
                return new ChromeDriver();
            case "edge":
                return new EdgeDriver();
            default:
                throw new IllegalArgumentException("Unsupported browser");
        }
    }
}
```

Factory enables:
- easy browser addition
- cleaner setup logic

---

## 3. Strategy Pattern (Execution Behavior)

### Automation Problem
Changing execution behavior requires code changes everywhere.

### Pattern Fix
Encapsulate behavior.

```java
public interface ExecutionStrategy {
    void execute();
}
```

Different strategies:
- local execution
- grid execution
- cloud execution

---

## 4. Builder Pattern (Test Data Creation)

### Automation Problem
Complex test data objects.

### Pattern Fix
Readable data creation.

```java
User user = User.builder()
                .name("John")
                .role("Admin")
                .build();
```

Builder improves:
- readability
- immutability
- maintainability

---

## 5. Observer Pattern (Listeners & Reporting)

### Automation Problem
Cross-cutting concerns mixed with tests.

### Pattern Fix
Listeners observe events.

Examples:
- test started
- test failed
- test finished

Used for:
- reporting
- screenshots
- logging

---

## Patterns You Should Avoid (or Limit)

❌ Prototype  
❌ Flyweight  
❌ Interpreter  

They add complexity without automation benefit.

---

## Real Framework Flow Example

```text
Test
 → TestNG (Observer)
 → DriverFactory (Singleton + Factory)
 → Page Objects (OOP)
 → Utilities (Generics)
 → Reports (Observer)
```

Patterns work together, not in isolation.

---

## Common Mistakes (Very Common)

- Overusing patterns everywhere
- Implementing patterns without understanding problem
- Mixing multiple patterns unnecessarily
- Copying patterns blindly from blogs

---

## Best Practices (Automation-Approved)

- Use patterns only when problem exists
- Keep implementations simple
- Document pattern usage in framework
- Avoid pattern over-engineering

---

## Interview Notes

- Why design patterns are needed in automation
- Singleton vs static usage
- Factory vs Builder differences
- Strategy pattern real use cases
- Observer pattern in TestNG listeners

---

## Summary (Human Understanding)
Design patterns do not add features.
They prevent **framework collapse**.

A framework without patterns
will not survive scale.
