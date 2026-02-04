---
sidebar_position: 2
title: Sheet
---

# Sheet – Logical Grouping of Test Data

A **Sheet** represents a single tab inside an Excel workbook.

In automation:
- Each sheet usually represents a dataset or scenario group
- Sheet names are often meaningful (LoginData, UserData, APIData)

## Why Sheets Matter

Sheets allow logical separation of:
- different test flows
- environments
- feature-specific data

Accessing sheets correctly prevents:
- reading wrong data
- silent test failures
- incorrect environment execution

## Key Concepts to Understand

- Sheets can be accessed by name or index
- Name-based access is safer and more readable
- Sheets may exist but still contain no data

## Automation Design Rule

Always access sheets by **explicit name**, never by hard-coded index.

This avoids failures when Excel structure changes.
