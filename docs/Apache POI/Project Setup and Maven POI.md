---
sidebar_position: 3
title: Project Setup & Maven Configuration
---

# Project Setup & Maven Configuration (Apache POI for Selenium Automation)

This phase moves from **conceptual understanding** to **practical setup**.

By the end of this phase, you should clearly understand:
- how Apache POI is added to a Java automation project
- how dependencies are managed safely
- how a Selenium framework should be structured to use POI correctly
- where Excel files and POI utilities belong

This phase intentionally introduces **real code**, but only where it helps learning — not copy-paste noise.

---

## Why Project Setup Matters in Production

Most Apache POI issues in automation projects are caused by:
- wrong dependency versions
- mixed POI modules
- poor folder structure
- POI code scattered across tests

A clean setup ensures:
- predictable local and CI execution
- easier upgrades
- fewer runtime surprises

Apache POI is a **framework-level dependency**, not a test-level dependency.

---

## Maven Dependency Setup (Production-Safe)

Apache POI must always be managed via a build tool.

### Recommended Maven Configuration

```xml
<properties>
    <poi.version>5.2.5</poi.version>
</properties>

<dependencies>
    <dependency>
        <groupId>org.apache.poi</groupId>
        <artifactId>poi</artifactId>
        <version>${poi.version}</version>
    </dependency>

    <dependency>
        <groupId>org.apache.poi</groupId>
        <artifactId>poi-ooxml</artifactId>
        <version>${poi.version}</version>
    </dependency>
</dependencies>
```

### Why This Matters

- `poi` → core POI functionality
- `poi-ooxml` → support for `.xlsx`
- single version property → avoids mismatch issues

Never mix POI versions across dependencies.

---

## Common Dependency Mistakes (Avoid These)

- Adding only `poi` without `poi-ooxml`
- Hard-coding versions in multiple places
- Using outdated POI versions without understanding impact
- Mixing HSSF and XSSF dependencies unnecessarily

These mistakes usually surface as runtime errors, not compile errors.

---

## Recommended Project Structure

A Selenium automation project using Apache POI should follow **clear separation of concerns**.

```
src/
 ├── main/
 │   ├── java/
 │   │   ├── pages/
 │   │   ├── utils/
 │   │   │   └── excel/
 │   │   │       └── ExcelReader.java
 │   │   └── config/
 │   └── resources/
 └── test/
     └── java/
```

Excel files should live **outside source code**:

```
test-data/
 ├── login-data.xlsx
 ├── user-data.xlsx
 └── execution-control.xlsx
```

This structure keeps:
- code clean
- data editable
- CI execution predictable

---

## Where Apache POI Code Belongs

Apache POI code must live in:
- utility classes
- data access layers

Apache POI code must NOT live in:
- test classes
- page objects
- assertion logic

This rule prevents tight coupling between data handling and test logic.

---

## Minimal Workbook Creation Example

This is the **smallest valid POI interaction**.

```java
Workbook workbook = new XSSFWorkbook();
Sheet sheet = workbook.createSheet("Sample");
```

This shows:
- Workbook represents the Excel file
- Sheet represents a tab

At this stage, we care more about **understanding the object chain** than doing real work.

---

## Opening an Existing Excel File Safely

```java
try (FileInputStream fis = new FileInputStream("test-data/login-data.xlsx");
     Workbook workbook = new XSSFWorkbook(fis)) {

    Sheet sheet = workbook.getSheet("LoginData");

}
```

Key points:
- try-with-resources prevents file locks
- workbook lifecycle is controlled centrally
- sheet is accessed by name

---

## Early Automation Design Rules

At this phase, lock these rules in your mind:

- Tests should never know Excel file paths
- Excel reading should never happen inside test methods
- Workbook creation and closing must be centralized
- POI usage should be invisible to test logic

If these rules are followed early, later phases become much simpler.

---

## What This Phase Intentionally Does NOT Cover

- looping rows and cells
- handling cell types
- data-driven execution
- reporting

Those belong to later phases, where they can be taught **without confusion**.

---

## Phase 3 Outcome

After completing this phase, you should:
- have Apache POI correctly configured in Maven
- understand where POI fits in a Selenium project
- be comfortable creating and opening workbooks
- avoid structural mistakes that break frameworks later