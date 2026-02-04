---
sidebar_position: 5
title: Object Model & Indexing Rules
---

# Object Model & Indexing Rules

Apache POI follows a strict hierarchy:

Workbook → Sheet → Row → Cell

Understanding this hierarchy prevents:
- invalid access
- incorrect loops
- corrupted data handling

## Indexing Rules

- All indexing is zero-based
- Excel UI numbering does not match POI indexing
- Header rows must be explicitly handled

## Common Automation Pitfalls

- Off-by-one errors
- Hard-coded indexes
- Mixing UI row numbers with POI indexes

## Automation Design Rule

Centralize indexing logic inside utilities.
Tests should never worry about row or cell numbers.
