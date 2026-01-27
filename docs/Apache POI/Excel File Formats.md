---
sidebar_position: 3
---

# Excel File Formats (.xls vs .xlsx)

Before writing Apache POI code, it is important to understand **Excel file formats**.
Choosing the wrong format or API leads to runtime errors and compatibility issues.

This section explains **.xls vs .xlsx** clearly from an automation tester’s perspective.

---

## Excel File Formats Overview

Excel primarily supports two formats:

| Format | Extension | Introduced |
|---|---|---|
| Old Excel | `.xls` | Excel 97–2003 |
| New Excel | `.xlsx` | Excel 2007+ |

Most modern automation projects use **.xlsx**.

---

## Apache POI APIs for Excel Formats

Apache POI provides different APIs for different formats:

| Format | POI API |
|---|---|
| `.xls` | HSSF |
| `.xlsx` | XSSF |
| Both | Workbook (common interface) |

---

## HSSF (Horrible Spreadsheet Format)

- Used for `.xls` files
- Older Excel format
- Limited rows and columns
- Rarely used in modern projects

Example usage:
```java
Workbook workbook = new HSSFWorkbook(fileInputStream);
```

⚠️ Use only when project explicitly requires `.xls`.

---

## XSSF (XML Spreadsheet Format)

- Used for `.xlsx` files
- Modern Excel format
- Supports large data sets
- Most commonly used in automation

Example usage:
```java
Workbook workbook = new XSSFWorkbook(fileInputStream);
```

---

## Workbook Interface (BEST PRACTICE)

`Workbook` is a **common abstraction** provided by Apache POI.

Why use `Workbook`?
- Avoids format-specific code
- Supports both `.xls` and `.xlsx`
- Cleaner framework design

Best practice:
```java
Workbook workbook = WorkbookFactory.create(fileInputStream);
```

This automatically detects file type.

---

## Row & Column Limits (Awareness)

| Format | Max Rows | Max Columns |
|---|---|---|
| `.xls` | 65,536 | 256 |
| `.xlsx` | 1,048,576 | 16,384 |

For regression data or large datasets:
> `.xlsx` is mandatory.

---

## Common Mistakes ❌

- Using `HSSFWorkbook` for `.xlsx`
- Hardcoding XSSF everywhere
- Ignoring file format in framework design
- Mixing formats within the same project

These cause:
- `OfficeXmlFileException`
- Runtime crashes

---

## Which Format Should You Use?

✔ Use **.xlsx** if:
- New automation framework
- Large datasets
- CI/CD execution

❌ Avoid `.xls` unless:
- Legacy system requires it

---

## Interview-Ready Questions

**Q: Difference between HSSF and XSSF?**  
A: HSSF is for `.xls`, XSSF is for `.xlsx`.

**Q: Why use Workbook interface?**  
A: To write format-independent code.

---

## Key Takeaways

- `.xlsx` is the modern standard
- HSSF = `.xls`, XSSF = `.xlsx`
- Workbook interface is preferred
- Format mismatch causes runtime errors
- Correct format choice improves stability
