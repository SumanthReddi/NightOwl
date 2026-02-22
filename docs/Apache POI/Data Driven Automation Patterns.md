---
sidebar_position: 6
title: Data-Driven Automation Patterns
---

# Data-Driven Automation Patterns (Apache POI + Selenium)

This phase connects **Excel data handling** with **actual Selenium test execution**.

Up to now, you have learned:
- how Excel is read
- how data is stabilized
- how cell types are handled safely

Now we focus on **patterns** — how production automation frameworks use that data **cleanly, consistently, and scalably**.

This phase is about **design**, not just syntax.

---

## What Data-Driven Automation Really Means

Data-driven automation does **not** mean:
- reading Excel inside test methods
- looping Excel rows directly in tests
- mixing Selenium actions with POI logic

It means:
- Excel provides data
- Java structures represent data
- Selenium tests consume data

Excel should disappear once data enters the framework.

---

## Common Excel-to-Test Mapping Strategies

In real frameworks, there are three common patterns:

1. Row → Key-Value Map  
2. Row → Domain Object (POJO)  
3. Row → Test Invocation (Iterator / Data Provider)

For Selenium automation, **Map-based and POJO-based** approaches are the most common.

---

## Pattern 1: Row to Key-Value Map

This is the **most flexible and widely used pattern**.

### Why This Pattern Works Well
- Column order does not matter
- New columns do not break tests
- Tests access data by meaningful names

### Conceptual Flow

Excel Row  → `Map<String, String>`  → Selenium Test

### Example: Row to Map Conversion

```java
Map<String, String> testData = new HashMap<>();

Row headerRow = sheet.getRow(0);
Row dataRow = sheet.getRow(rowIndex);

for (int i = 0; i < headerRow.getLastCellNum(); i++) {
    String key = formatter.formatCellValue(headerRow.getCell(i));
    String value = formatter.formatCellValue(dataRow.getCell(i));
    testData.put(key, value);
}
```

This conversion should happen **once**, inside an Excel utility.

---

## Using Map Data in Selenium Tests

Selenium tests should receive **already-parsed data**.

```java
String username = testData.get("username");
String password = testData.get("password");
```

Tests should never:
- access Excel files
- know column indexes
- depend on Excel structure

This separation keeps tests readable and stable.

---

## Pattern 2: Execution Control Using Excel

A very common real-world requirement is **run control**.

Example Excel column:
```
run = Y / N
```

### Execution Control Logic

```java
if (!testData.get("run").equalsIgnoreCase("Y")) {
    continue;
}
```

This allows:
- skipping tests without code changes
- selective execution in CI
- quick regression control

Execution control must live **outside test logic**, usually in the test runner or data provider.

---

## Pattern 3: Row to POJO (Structured Data)

For large or complex datasets, mapping Excel rows to objects improves clarity.

### Example POJO

```java
public class LoginData {
    private String username;
    private String password;
    private String role;

    // getters and setters
}
```

### Conceptual Mapping

Excel Row  
→ LoginData object  
→ Selenium Test

This approach:
- improves type safety
- documents expected data
- reduces string-based errors

---

## Choosing Between Map and POJO

| Use Case | Recommended |
|--------|------------|
Small / changing datasets | Map |
Stable, structured data | POJO |
Business-critical flows | POJO |
Quick automation | Map |

Both patterns are valid when used correctly.

---

## Iterating Test Cases from Excel

In most frameworks:
- Excel rows drive test execution
- each valid row triggers one test

Typical loop:

```java
for (Map<String, String> testData : allTestData) {
    if (!testData.get("run").equalsIgnoreCase("Y")) {
        continue;
    }
    executeTest(testData);
}
```

This loop belongs in:
- test runner
- data provider
- orchestration layer

Not inside Selenium test methods.

---

## Integration with Selenium Page Objects

Correct integration looks like this:

```
Excel → Utility → Map / POJO → Test → Page Object
```

Incorrect integration looks like this:

```
Excel → Test → Page Object
```

Page Objects should only receive **clean values**, never Excel concerns.

---

## Design Rules for Data-Driven Frameworks

Lock these rules early:

- Excel reading logic must be centralized
- Selenium tests must be Excel-agnostic
- Data structures must be stable
- Execution control must be externalized
- Adding new columns must not break tests

These rules define **production-grade automation**.

---

## What This Phase Does NOT Cover

- writing results back to Excel
- updating execution status
- reporting and formatting
- large dataset performance

Those are covered in the next phases.

---

## Phase 6 Outcome

After completing this phase, you should be able to:
- design data-driven Selenium tests cleanly
- map Excel data to Java structures
- control execution using Excel
- scale test data without breaking tests
