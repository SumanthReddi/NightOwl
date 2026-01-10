---
sidebar_position: 15
---

# Common Apache POI Errors and Fixes

Apache POI failures are usually **runtime issues**, not compile-time errors.
Knowing the common errors and their fixes helps automation testers **debug faster and design safer frameworks**.

This section lists **real project errors**, why they occur, and how to fix them.

---

## 1️⃣ FileNotFoundException

### Why it happens
- Wrong file path
- File does not exist
- Incorrect relative path in CI

### Fix
- Verify file location
- Use relative paths
- Keep Excel under `src/test/resources`

---

## 2️⃣ NullPointerException (Most Common)

### Why it happens
- Row does not exist
- Cell does not exist
- Sheet name is incorrect

### Fix
- Check if sheet exists
- Check if row exists
- Check if cell exists before reading

Rule:
> Never assume Excel structure is perfect.

---

## 3️⃣ IllegalStateException

### Why it happens
- Trying to read a numeric cell as string
- Cell type mismatch

### Fix
- Check cell type before reading
- Convert values safely

---

## 4️⃣ OfficeXmlFileException

### Why it happens
- Using HSSF for `.xlsx`
- Using XSSF for `.xls`

### Fix
- Use correct API
- Prefer `WorkbookFactory`

---

## 5️⃣ File Lock / Permission Issues

### Why it happens
- Stream not closed
- Excel opened manually during execution
- CI permission restrictions

### Fix
- Always close streams
- Do not open Excel during execution
- Ensure write permissions in CI

---

## 6️⃣ Data Not Written to Excel

### Why it happens
- Workbook not saved
- OutputStream not closed
- Writing inside wrong sheet

### Fix
- Write workbook explicitly
- Close output stream
- Validate sheet and row indexes

---

## 7️⃣ Performance Issues

### Why it happens
- Reading Excel repeatedly
- Writing inside loops
- Large datasets

### Fix
- Read once, cache data
- Write once at end
- Split large Excel files

---

## 8️⃣ Parallel Execution Failures

### Why it happens
- Multiple threads writing to Excel
- Shared workbook access

### Fix
- Avoid parallel writes
- Synchronize writes
- Write results after execution

---

## Debugging Tips for Apache POI

- Log row and column indexes
- Log sheet names
- Print cell types during debugging
- Validate Excel manually

---

## Interview-Ready Questions

**Q: Why does NullPointerException occur frequently in POI?**  
A: Due to missing rows or cells.

**Q: How do you fix IllegalStateException?**  
A: By checking cell type before reading.

---

## Key Takeaways

- Most POI errors are runtime
- Excel structure issues cause failures
- Safe checks prevent crashes
- Correct API usage matters
- Good design reduces debugging time

---

## What’s Next?

👉 **Apache POI in CI/CD Pipelines**
