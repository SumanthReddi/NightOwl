---
sidebar_position: 10
---

# File Handling & I/O 
## File Handling & I/O for Automation Testing (Configuration & Test Data)

<!-- ## Priority
AUTOMATION_CORE -->

---

## Context (Why this topic exists NOW)
After stabilizing parallel execution, the next unavoidable problem appears:

- URLs are hardcoded
- Credentials are inside code
- Environment-specific values require code changes
- Test data cannot be reused across environments

Selenium cannot read files, environments, or configurations.
Java File I/O exists to make automation **configurable and scalable**.

---

## What Selenium Cannot Do (The Gap)
Selenium can:
- interact with browsers

Selenium cannot:
- read configuration files
- switch environments dynamically
- externalize test data
- manage file-based inputs

Without Java I/O:
❌ code changes for every environment  
❌ insecure credentials  
❌ unscalable frameworks  

---

## What Java File I/O Adds (The Fix)
Java allows automation frameworks to:
- read configuration files
- load environment-specific values
- separate code from data
- manage resources cleanly

In simple words:
> Selenium runs tests.  
> Java decides **how and where tests run**.

---

## Properties Files (MOST IMPORTANT)

### Automation Problem
Hardcoded URLs and credentials.

### Java Fix
Use `.properties` files.

```properties
base.url=https://test.example.com
browser=chrome
timeout=10
```

---

### Reading Properties in Java

```java
Properties props = new Properties();
props.load(new FileInputStream("config.properties"));

String baseUrl = props.getProperty("base.url");
```

This enables:
- environment switching
- CI compatibility
- secure configuration

---

## FileInputStream & Resource Handling

### Automation Problem
Files not closing properly.

### Java Fix
```java
try (FileInputStream fis = new FileInputStream("config.properties")) {
    props.load(fis);
}
```

Ensures:
- no resource leaks
- clean execution

---

## Reading Text & CSV Files

### Automation Problem
External test data management.

### Java Fix
```java
List<String> lines = Files.readAllLines(Paths.get("data.csv"));
```

Used for:
- test scenarios
- input combinations

---

## Basic JSON Reading (Automation-Level)

### Automation Problem
API payloads and responses stored externally.

### Java Fix (Conceptual)
- Use libraries like Jackson or Gson
- Java I/O loads the file
- Library parses content

You don’t parse JSON manually.
Java provides the input; libraries do the parsing.

---

## Configuration Best Practice (Framework-Level)

Structure:
```
config/
├── qa.properties
├── uat.properties
└── prod.properties
```

Load based on:
- system property
- CI variable

---

## Real Automation Example

```java
String env = System.getProperty("env", "qa");
String fileName = "config/" + env + ".properties";

Properties props = new Properties();
props.load(new FileInputStream(fileName));
```

Same code.
Different environment.
No changes needed.

---

## Common Mistakes (Very Common)

- Hardcoding URLs and credentials
- Not closing file streams
- Storing sensitive data in code
- Mixing test data with test logic
- Overengineering file readers

---

## Best Practices (Automation-Approved)

- Externalize all environment-specific data
- Use properties for configuration
- Keep file I/O logic centralized
- Never commit secrets to code
- Prefer simplicity over clever file handling

---

## Interview Notes

- Why configuration files are needed in automation
- How Java reads properties files
- try-with-resources usage
- Difference between config and test data
- How CI passes environment values

---

## Summary (Human Understanding)
Selenium knows how to automate.
Java decides **what to automate and where**.

File handling separates:
- code
- configuration
- data

That separation makes automation scalable.
