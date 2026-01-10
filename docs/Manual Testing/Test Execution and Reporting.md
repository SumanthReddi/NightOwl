---
sidebar_position: 12
---

# Test Execution and Reporting

Test execution is where **planning turns into action**.
Reporting is how testers **communicate quality status** to stakeholders.
Together, they decide whether a product is **ready to move forward or not**.

---

## What is Test Execution?

Test execution is the process of:
- Running test cases
- Comparing actual vs expected results
- Recording outcomes
- Logging defects when failures occur

Execution answers:
> **Is the application behaving as expected?**

---

## Test Execution Workflow

Typical flow:
```
Test Cases Ready
   ↓
Test Environment Ready
   ↓
Execute Test Cases
   ↓
Update Status (Pass / Fail / Blocked)
   ↓
Log Defects (if any)
```

Execution should always follow a **planned approach**, not random testing.

---

## Test Execution Statuses

Each test case is marked with a status:

### ✅ Pass
- Actual result matches expected result

### ❌ Fail
- Actual result differs from expected result
- Defect must be logged

### ⏸️ Blocked
- Test cannot be executed due to dependency
- Example: environment down, prerequisite failed

### ⏭️ Skipped
- Test not executed intentionally
- Example: out of scope for this cycle

---

## Defect Logging During Execution

When a test fails:
1. Reproduce the issue
2. Confirm it is not a data or environment issue
3. Log a clear defect

Good defect report includes:
- Summary
- Steps to reproduce
- Expected vs actual result
- Screenshots / logs
- Environment details

Poor defect reporting slows down fixing.

---

## Daily Status Reporting (DSR)

### What is DSR?

Daily Status Report communicates **testing progress** to stakeholders.

Typical DSR includes:
- Total test cases
- Executed / pending count
- Pass / fail count
- Open defects
- Risks or blockers

Purpose:
> Transparency and trust.

---

## Test Metrics (Awareness)

Metrics help measure **testing effectiveness**.

Common metrics:
- Test case execution percentage
- Pass / fail rate
- Defect count
- Defect severity distribution

Note:
> Metrics guide decisions, they should not be used to pressure testers.

---

## Test Summary Report

Prepared at the end of testing cycle.

Includes:
- Scope covered
- Test results
- Defect summary
- Risks and limitations
- Release recommendation

This report supports **go / no-go decisions**.

---

## Common Execution Mistakes ❌

- Executing without environment readiness
- Not updating test case status
- Logging duplicate defects
- Hiding failures
- Skipping reporting

---

## Interview-Ready Questions

**Q: What are test execution statuses?**  
A: Pass, Fail, Blocked, and Skipped.

**Q: What is a test summary report?**  
A: A report summarizing testing activities and release readiness.

---

## Key Takeaways

- Execution validates real behavior
- Statuses provide visibility
- Reporting builds stakeholder confidence
- Metrics support decisions
- Clear communication is a tester’s responsibility

---

## What’s Next?

👉 **Defect Life Cycle**
