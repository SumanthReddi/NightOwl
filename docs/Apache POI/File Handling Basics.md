---
sidebar_position: 5
---

# File Handling Basics (FileInputStream & FileOutputStream)

Apache POI works with Excel files through **Java file streams**.
Incorrect file handling is one of the **top reasons for POI failures** in automation projects.

This section explains file handling **conceptually**, before code-heavy topics.

---

## Why File Handling Matters

Excel files are external resources.
Java cannot read or write them unless:
- A file stream is opened correctly
- The stream is closed properly

Poor file handling leads to:
- File not found errors
- File lock issues
- Data not written to Excel

---

## FileInputStream (Reading Files)

### What is FileInputStream?

`FileInputStream` is used to **read data from a file**.

In Apache POI, it is used to:
- Open existing Excel files
- Read test data

Concept flow:
```
Excel File → FileInputStream → Workbook
```

Key idea:
> Without FileInputStream, POI cannot read Excel data.

---

## When to Use FileInputStream

Use FileInputStream when:
- Reading test data
- Fetching existing Excel content
- Loading Excel into Workbook

Common usage scenarios:
- Data-driven testing
- Regression data loading

---

## FileOutputStream (Writing Files)

### What is FileOutputStream?

`FileOutputStream` is used to **write data into a file**.

In Apache POI, it is used to:
- Write execution results
- Update Excel data
- Create new Excel files

Concept flow:
```
Workbook → FileOutputStream → Excel File
```

---

## When to Use FileOutputStream

Use FileOutputStream when:
- Writing test results (PASS/FAIL)
- Saving dynamic values
- Updating Excel sheets

Important rule:
> Writing does NOT happen automatically — you must explicitly save.

---

## Reading vs Writing – Comparison

| Aspect | FileInputStream | FileOutputStream |
|---|---|---|
| Purpose | Read file | Write file |
| Used with | Reading Excel | Writing Excel |
| Direction | File → Program | Program → File |

---

## Closing Streams (VERY IMPORTANT)

File streams must always be closed.

Why?
- Prevent file locking
- Release memory
- Avoid data corruption

Best practice:
- Close streams in `finally` block
- Or use try-with-resources

Unclosed streams cause:
- File access errors
- CI/CD failures

---

## Common File Handling Mistakes ❌

- Forgetting to close stream
- Using FileInputStream for writing
- Wrong file path
- Hardcoding absolute paths
- Opening same file multiple times

---

## File Paths in Automation Projects

Best practices:
- Use relative paths
- Store Excel files inside project
- Avoid user-specific paths

Example:
```
src/test/resources/testdata/LoginData.xlsx
```

This makes tests **CI/CD friendly**.

---

## Interview-Ready Questions

**Q: Difference between FileInputStream and FileOutputStream?**  
A: InputStream reads files; OutputStream writes files.

**Q: Why must streams be closed?**  
A: To prevent file locking and memory leaks.

---

## Key Takeaways

- File streams connect POI with Excel
- InputStream is for reading
- OutputStream is for writing
- Closing streams is mandatory
- Correct file paths ensure stability

---

## What’s Next?

👉 **Reading Excel Data (Conceptual Flow)**
