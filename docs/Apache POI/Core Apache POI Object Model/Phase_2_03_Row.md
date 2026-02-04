---
sidebar_position: 3
title: Row
---

# Row – One Record of Test Data

A **Row** represents a horizontal line of cells in a sheet.

In automation frameworks:
- Each row usually maps to one test case
- Header rows define column meaning
- Data rows define input values

## Why Rows Matter

Most automation loops iterate over rows.

Common problems occur when:
- rows are missing
- rows are empty
- row indexing assumptions are wrong

## Key Concepts to Understand

- Row indexing starts from zero
- Header row is usually at index 0
- Data rows typically start at index 1
- A row object may not exist even if the row looks empty in Excel

## Automation Design Rule

Never assume a row exists.
Always check before reading values.

This avoids runtime exceptions and flaky tests.
