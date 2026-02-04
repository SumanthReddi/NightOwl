---
sidebar_position: 7
---

# Writing Results Back to Excel

This phase focuses on **writing automation execution results back to Excel** in a way that is:
- safe
- predictable
- maintainable
- suitable for CI pipelines

Writing to Excel is **more dangerous than reading from it**.
If done incorrectly, it can corrupt test data, overwrite files, or introduce flaky behavior.

This phase teaches how to write results **deliberately and defensively**.

---

## Why Writing to Excel Needs Special Care

In real automation projects:
- the same Excel file may be reused across executions
- data may be partially filled
- execution may fail midway
- CI pipelines may rerun jobs

If writing logic is careless:
- original test data can be lost
- execution history becomes unreliable
- debugging past runs becomes impossible

Writing to Excel must be treated as a **controlled operation**, not a side effect.

---

## Common Automation Use Cases for Writing Excel

Automation frameworks typically write:

- PASS / FAIL status
- execution timestamp
- error messages (on failure)
- dynamic values (order ID, reservation ID, reference number)
- environment or browser used

These values are usually written:
- to a separate result column
- or to a dedicated results sheet

---

## Decide First: Overwrite vs Append

Before writing any code, decide **how results should be stored**.

### Overwrite Strategy
- Each execution replaces previous results
- Simpler to implement
- Loses historical data

### Append Strategy
- Each execution adds new rows or columns
- Preserves execution history
- Requires careful design

Most Selenium frameworks start with **overwrite** and evolve to **append** later.

---

## Safe Read–Modify–Write Flow

Never write directly to an Excel file without reading it first.

Correct flow:
```
Read Workbook
→ Modify in memory
→ Write back to disk
```

This ensures:
- existing data is preserved
- structure is respected
- changes are intentional

---

## Writing a Simple Result Column

Example scenario:
- Existing test data sheet
- Add or update a column named `status`

### Conceptual Steps
1. Open workbook
2. Access correct sheet
3. Locate row to update
4. Create or update cell
5. Save workbook

### Minimal Example

```java
Row row = sheet.getRow(rowIndex);
Cell cell = row.createCell(statusColumnIndex);
cell.setCellValue("PASS");
```

This snippet should live inside a **dedicated Excel writer utility**, not in tests.

---

## Writing Dynamic Runtime Values

Dynamic values (like order IDs) are often generated during test execution.

Example:
```java
row.createCell(orderIdColumnIndex)
   .setCellValue(orderId);
```

Design guideline:
- write dynamic values only after successful steps
- never overwrite original input columns
- keep input and output clearly separated

---

## Adding Timestamps

Timestamps help correlate Excel results with CI runs.

```java
row.createCell(timeColumnIndex)
   .setCellValue(LocalDateTime.now().toString());
```

This allows:
- tracing execution history
- debugging failures
- comparing runs across environments

---

## Handling Missing Rows or Cells

When writing:
- rows may not exist
- cells may not exist

Always handle this safely:
```java
Row row = sheet.getRow(rowIndex);
if (row == null) {
    row = sheet.createRow(rowIndex);
}
```

Writing logic must never assume structure.

---

## Where Writing Logic Belongs

Writing Excel logic must be:
- centralized
- reusable
- isolated from Selenium tests

Correct placement:
- ExcelWriter utility class
- data-access layer

Incorrect placement:
- inside test methods
- inside page objects

---

## Design Rules for Writing Results

Lock these rules early:

- Never overwrite original test input unintentionally
- Never write Excel inside Selenium actions
- Always log what was written and where
- Handle partial failures gracefully
- Keep write operations minimal

These rules prevent long-term data corruption.

---

## What This Phase Does NOT Cover

- formatting or coloring cells
- merged cells
- reporting dashboards
- performance optimization

Those belong to later phases.

---

## Phase 7 Outcome

After completing this phase, you should:
- safely write execution results to Excel
- avoid corrupting test data
- design predictable result storage
- integrate Excel writing cleanly with Selenium automation

You are now ready for:

**Phase 8: Updating Existing Excel Files & Execution Control**
