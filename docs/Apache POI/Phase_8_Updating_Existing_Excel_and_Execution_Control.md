---
sidebar_position: 8
---

# Updating Existing Excel Files & Execution Control

This phase builds on reading and writing by focusing on **updating existing Excel files safely across multiple executions**.

In real Selenium automation:
- Excel files are reused
- executions are rerun
- partial failures happen
- CI pipelines retry jobs

Updating Excel incorrectly leads to **data corruption and misleading results**.
This phase teaches **controlled, repeatable update strategies**.

---

## Why Updating Excel Is Different from Writing

Writing usually assumes:
- new file
- clean state
- single execution

Updating assumes:
- file already exists
- data already present
- previous execution artifacts remain

This makes update logic more fragile if not designed carefully.

---

## Typical Automation Scenarios That Require Updates

Common real-world scenarios:
- update execution status after test completion
- write reservation / order IDs back to input rows
- update retry count or execution attempt
- mark tests as executed in CI reruns

These operations require **precise targeting of rows and cells**.

---

## Identifying the Correct Row to Update

Never rely only on row index.

Safer identification strategies:
- unique test case ID column
- combination of test name + environment
- execution ID passed from CI

Example conceptual flow:
```
Find row where testCaseId = "TC_LOGIN_01"
→ update only that row
```

This avoids accidental updates to wrong rows.

---

## Read → Modify → Write (Mandatory Flow)

Every update must follow this sequence:

```
Open Workbook
→ Locate Target Sheet
→ Locate Target Row
→ Update Specific Cell(s)
→ Write Workbook Back
```

Skipping any step risks overwriting unrelated data.

---

## Updating Specific Cells Safely

Before updating:
- check if row exists
- check if cell exists

```java
Row row = sheet.getRow(rowIndex);
if (row == null) {
    row = sheet.createRow(rowIndex);
}

Cell cell = row.getCell(colIndex);
if (cell == null) {
    cell = row.createCell(colIndex);
}

cell.setCellValue("PASS");
```

This defensive approach is required in production frameworks.

---

## Execution Control Using Excel Updates

Some frameworks update Excel to control future runs.

Examples:
- mark test as executed
- increment retry count
- disable test after repeated failure

Design caution:
- Excel should assist execution, not control logic deeply
- excessive write-back logic increases fragility

Execution control must remain **simple and transparent**.

---

## Handling Partial Failures

In CI pipelines:
- execution may stop mid-way
- some rows get updated, others don’t

Design strategies:
- write status only at end of test
- avoid writing intermediate states unless necessary
- log update failures clearly

Excel should never silently hide execution problems.

---

## Concurrency and Parallel Execution Considerations

Excel files are **not concurrency-safe**.

Risks:
- parallel tests writing same file
- CI retries overlapping updates
- file locks on shared environments

Mitigation strategies:
- one Excel file per execution
- copy input file before execution
- avoid writing in parallel threads

Parallel safety must be designed intentionally.

---

## Where Update Logic Belongs

Update logic must be:
- centralized
- reusable
- isolated from test steps

Correct placement:
- ExcelUpdater / ExcelWriter utility

Incorrect placement:
- test methods
- page objects
- Selenium hooks

---

## Design Rules for Updating Excel

Lock these rules early:

- Always identify rows explicitly
- Never rely solely on row index
- Never update input columns unintentionally
- Avoid parallel writes
- Log every update action

These rules prevent silent data corruption.

---

## What This Phase Does NOT Cover

- styling or formatting
- reporting dashboards
- performance tuning
- large dataset streaming

Those topics come later.

---

## Phase 8 Outcome

After completing this phase, you should:
- safely update existing Excel files
- handle reruns and retries cleanly
- avoid corrupting shared test data
- design predictable execution control

You are now ready for:

**Phase 9: Excel-Based Reporting & Formatting**
