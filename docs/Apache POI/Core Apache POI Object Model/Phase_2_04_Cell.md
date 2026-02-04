---
sidebar_position: 4
title: Cell
---

# Cell – The Smallest Unit of Data

A **Cell** represents a single value inside a row.

In Selenium automation:
- Cells provide input values
- Cells store runtime-generated output
- Cells often contain mixed data types

## Why Cells Matter

Most Apache POI issues occur at the cell level due to:
- unexpected cell types
- empty cells
- formatting differences

## Key Concepts to Understand

- Cell indexing starts from zero
- Cells may not exist even if column appears empty
- Excel formatting does not guarantee stored type

## Automation Design Rule

Never directly assume a cell contains a String.

Cell values must be handled defensively to ensure stability.
