---
sidebar_position: 4
title: Reading Excel
---

# Reading Excel for Selenium Test Data

This phase is where Apache POI starts delivering **real value** in a Selenium automation framework.

The goal of this phase is to:
- read Excel data reliably
- avoid flaky failures caused by bad assumptions
- convert Excel rows into clean Java data structures
- keep Selenium tests completely unaware of Excel internals

This is the **most important phase** for data-driven automation.

---

## Why Reading Excel Correctly Matters

In real automation projects:
- Excel files are edited frequently
- cells are left empty
- formats change silently
- data grows over time

If Excel reading logic is weak:
- tests fail randomly
- debugging becomes slow
- CI pipelines lose trust

A production-grade framework treats Excel as **untrusted input**.

---

## Typical Excel Structure for Selenium Tests

Most automation Excel files follow this pattern:

- One header row
- Multiple data rows
- Each row represents one test scenario

Example:

| username | password | run |
|--------|----------|-----|
| user1  | pass123  | Y   |
| user2  | pass456  | N   |

The framework:
- reads headers as keys
- reads rows as values
- decides execution based on data, not structure

---

## Opening Workbook and Sheet (Safe Pattern)

Always open Excel files using **try-with-resources**.

```java
Path filePath = Paths.get("test-data/login-data.xlsx");

try (Workbook workbook = WorkbookFactory.create(filePath.toFile())) {
    Sheet sheet = workbook.getSheet("LoginData");
}
```

Why this pattern is preferred:
- supports both `.xls` and `.xlsx`
- prevents file locking issues
- ensures proper resource cleanup

---

## Reading Header Row

The header row defines the **meaning of each column**.

```java
Row headerRow = sheet.getRow(0);
int columnCount = headerRow.getLastCellNum();
```

Important rules:
- header row is usually at index 0
- headers should never be hard-coded in Java
- column order should not matter

---

## Reading Data Rows Safely

Never assume rows exist.

```java
for (int i = 1; i <= sheet.getLastRowNum(); i++) {
    Row row = sheet.getRow(i);
    if (row == null) {
        continue;
    }
}
```

This avoids:
- NullPointerExceptions
- flaky execution when rows are deleted or skipped

---

## Converting a Row into Key-Value Data

This is the **most common and reusable pattern** in Selenium frameworks.

```java
DataFormatter formatter = new DataFormatter();
Map<String, String> rowData = new HashMap<>();

for (int j = 0; j < columnCount; j++) {
    String key = formatter.formatCellValue(headerRow.getCell(j));
    String value = formatter.formatCellValue(row.getCell(j));
    rowData.put(key, value);
}
```

Why this works well:
- column order no longer matters
- missing cells are handled gracefully
- tests access data by meaningful names

---

## Using Excel Data in Selenium Tests

Selenium tests should receive **already-parsed data**, never Excel objects.

```java
String username = rowData.get("username");
String password = rowData.get("password");
```

This keeps:
- tests readable
- logic clean
- Excel changes isolated

---

## Execution Control Using Excel

A common automation pattern is execution flags.

```java
if (!rowData.get("run").equalsIgnoreCase("Y")) {
    continue;
}
```

This allows:
- enabling/disabling tests without code changes
- selective execution in CI pipelines

---

## Design Rules for Reading Excel (Lock These)

- Never read Excel inside test methods
- Never return POI objects to tests
- Always convert Excel data to Java structures
- Centralize Excel reading logic
- Log meaningful errors when data is invalid

These rules separate **junior scripts** from **production frameworks**.

---

## What This Phase Does NOT Handle

- writing results to Excel
- updating existing cells
- handling formulas
- styling or reporting

Those are covered in later phases.

---

## Phase 4 Outcome

After completing this phase, you should be able to:
- read Excel files reliably
- convert rows into reusable Java data
- feed Selenium tests clean inputs
- avoid common Excel-related flakiness
