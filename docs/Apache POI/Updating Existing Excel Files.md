---
sidebar_position: 9
---

# Updating Existing Excel Files

Updating existing Excel files is a **common requirement** in automation frameworks.
Unlike creating new files, updating requires a **read → modify → write** approach to avoid data loss.

This section explains the **safe conceptual approach** for updating Excel using Apache POI.

---

## Why Updating Excel is Needed

Automation testers update Excel to:
- Mark test execution status (PASS / FAIL)
- Append new test results
- Update dynamic values (IDs, tokens, reference numbers)
- Maintain execution history

---

## Core Rule (VERY IMPORTANT)

> **Never write directly to an Excel file without reading it first.**

Correct pattern:
```
Read Workbook
   ↓
Modify Sheet / Row / Cell
   ↓
Write Workbook
   ↓
Save File
```

Skipping the read step overwrites data.

---

## Updating an Existing Cell

Use cases:
- Updating status column
- Correcting expected results
- Updating remarks

Safe mindset:
- Check if row exists
- Check if cell exists
- Create only if missing
- Then update value

Never assume the cell already exists.

---

## Appending New Rows

Common use cases:
- Adding new execution records
- Logging API responses
- Recording audit data

Conceptual steps:
1. Find last used row
2. Create next row
3. Populate cells
4. Save workbook

---

## Updating Multiple Cells Safely

When updating multiple columns:
- Update in memory first
- Write once at the end
- Avoid repeated writes

This improves:
- Performance
- Stability
- File integrity

---

## Handling Concurrent Updates (Awareness)

In parallel execution:
- Multiple threads may try to update Excel
- Excel is **not thread-safe**

Best practice:
- Avoid parallel writes
- Use synchronized write logic
- Or write to separate result files

---

## Common Update Mistakes ❌

- Overwriting input data
- Updating wrong row index
- Forgetting to save workbook
- Writing inside loops repeatedly
- Parallel writes to same file

---

## Excel Structure Tips for Updates

- Keep input data separate from result columns
- Use dedicated result sheets
- Maintain fixed column order
- Avoid manual edits during execution

---

## CI/CD Considerations

- Ensure write permissions
- Use workspace-relative paths
- Avoid updating version-controlled input files

Rule:
> CI pipelines should write outputs, not modify source test data.

---

## Interview-Ready Questions

**Q: Why must we read Excel before updating it?**  
A: To preserve existing data and avoid overwriting.

**Q: Is Excel thread-safe for parallel updates?**  
A: No, Excel is not thread-safe.

---

## Key Takeaways

- Updating requires read → modify → write
- Never assume rows/cells exist
- Avoid parallel writes
- Save workbook only once
- Safe updates prevent data corruption
