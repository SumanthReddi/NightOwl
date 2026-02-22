---
sidebar_position: 10
---

# Performance, Large Files & SXSSF

This phase focuses on **performance realities** of Apache POI in Selenium automation.

Up to this point, the framework works correctly.
Now we ask a different question:

> Will it still work when data grows, executions increase, and CI pipelines get busy?

This phase helps you understand **limits, trade-offs, and safe scaling strategies**.

---

## Why Performance Becomes a Problem

Apache POI is powerful, but it is **not free**.

Performance issues usually appear when:
- Excel files grow large
- execution results are written frequently
- multiple sheets are processed
- CI pipelines run repeatedly

If performance is ignored:
- memory usage spikes
- builds become slow
- pipelines fail unpredictably

---

## Understanding XSSF Memory Behavior

XSSF (used for `.xlsx`) loads:
- the entire workbook
- all sheets
- all rows and cells

…into memory.

This is fine for:
- small to medium Excel files
- configuration-style data
- limited reporting

It becomes a problem for:
- thousands of rows
- large regression datasets
- heavy write operations

---

## Typical Symptoms of Memory Issues

Common signs include:
- `OutOfMemoryError`
- slow execution near the end of runs
- CI jobs killed by the system
- local execution working but CI failing

These symptoms often appear **late**, not immediately.

---

## What SXSSF Solves

SXSSF is the **streaming version of XSSF**.

Key characteristics:
- keeps only a limited number of rows in memory
- writes older rows to disk
- drastically reduces memory footprint

SXSSF is designed for:
- large result files
- bulk data writing
- long-running CI jobs

---

## When You Should Use SXSSF

Use SXSSF when:
- writing very large Excel files
- generating execution reports with thousands of rows
- memory usage becomes unstable

Do NOT use SXSSF when:
- reading Excel files
- updating existing cells frequently
- random access to rows is required

SXSSF is write-optimized, not read-optimized.

---

## Performance Design Guidelines

To keep Excel handling performant:

- avoid reading the same file repeatedly
- batch read operations where possible
- batch write operations at the end of execution
- avoid cell-by-cell writes inside tight loops
- reuse styles instead of recreating them

Performance issues are usually architectural, not API-related.

---

## CI Pipeline Considerations

In CI environments:
- memory is limited
- disk I/O is slower
- parallel jobs compete for resources

Recommended practices:
- keep Excel files small
- generate one report per execution
- clean up temporary files
- avoid sharing Excel files across parallel jobs

CI amplifies all Excel-related problems.

---

## Concurrency Limitations of Excel

Excel files are **not thread-safe**.

Problems arise when:
- multiple tests write to the same file
- parallel execution shares input/output Excel
- retries overlap with previous runs

Mitigation strategies:
- copy Excel files per execution
- avoid parallel writes
- serialize report generation

Concurrency safety must be designed explicitly.

---

## Realistic Scalability Boundaries

Be honest about Excel limitations:

Excel is good for:
- configuration data
- moderate test datasets
- human-readable reports

Excel is bad for:
- very large datasets
- analytics and trends
- concurrent access

Knowing when to move away from Excel is part of senior-level automation design.

---

## What This Phase Does NOT Cover

- distributed data storage
- advanced reporting dashboards
- database-backed test data

Those belong to different tools entirely.

---

## Phase 10 Outcome

After completing this phase, you should:
- understand Apache POI performance limits
- know when SXSSF is appropriate
- design Excel usage that scales safely
- avoid CI failures caused by Excel misuse

This completes the **core Apache POI roadmap for Selenium automation**.
