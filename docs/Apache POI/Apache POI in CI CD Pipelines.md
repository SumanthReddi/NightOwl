---
sidebar_position: 16
---

# Apache POI in CI/CD Pipelines

Using Apache POI locally is easy, but **CI/CD environments introduce constraints** that testers must handle carefully.
Many automation failures happen only in CI because Excel handling was not designed for pipelines.

This section explains **CI-safe Apache POI usage**.

---

## Why CI/CD Changes Things

CI/CD environments:
- Run on shared machines
- Have restricted file permissions
- Clean workspace frequently
- Run tests in parallel

Rule:
> Code that works locally may fail in CI if file handling is careless.

---

## File Paths in CI/CD

Best practices:
- Use **relative paths**
- Store Excel under `src/test/resources`
- Avoid absolute system paths

Example:
```
src/test/resources/testdata/LoginData.xlsx
```

Avoid:
- User-specific paths
- Desktop paths
- Hardcoded machine paths

---

## Read-Only vs Writable Files

In CI:
- Source-controlled Excel files should be **read-only**
- Writing should happen only to:
  - `target/`
  - `build/`
  - CI workspace output folders

Rule:
> Never modify committed test data files in CI.

---

## Writing Results in CI

Recommended approaches:
- Write results to a separate Excel file
- Generate execution reports instead of updating input Excel
- Archive output files as CI artifacts

---

## Parallel Execution in CI

Important considerations:
- Avoid parallel writes to Excel
- Read Excel once before parallel execution
- Cache data in memory

Excel is **not thread-safe**.

---

## Workspace Cleanup Awareness

CI tools often:
- Clean workspace before run
- Remove files after run

Ensure:
- Excel files are packaged with code
- Output paths exist before writing

---

## Jenkins / GitLab Specific Awareness

- Jenkins agents may have limited permissions
- GitLab runners may be containerized
- File locks behave differently

Always:
- Close streams
- Handle exceptions gracefully

---

## Common CI/CD Failures ❌

- FileNotFoundException in CI only
- Permission denied errors
- Data not written to Excel
- Parallel execution corruption

Most are caused by **path and permission issues**.

---

## CI-Safe POI Checklist ✅

- Relative paths only
- Read input Excel, write outputs separately
- Close all streams
- Avoid parallel Excel writes
- Log file paths for debugging

---

## Interview-Ready Questions

**Q: Why does Apache POI fail in CI but not locally?**  
A: Due to path, permission, or workspace differences.

**Q: Should we update Excel test data in CI?**  
A: No, CI should treat test data as read-only.

---

## Key Takeaways

- CI environments are restrictive
- Path handling is critical
- Excel is not thread-safe
- Read-only input, separate output
- CI-safe design prevents flaky builds
