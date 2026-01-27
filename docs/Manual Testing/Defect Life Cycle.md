---
sidebar_position: 13
---

# Defect Life Cycle

The defect life cycle explains **how a defect is identified, tracked, fixed, verified, and closed**.
Understanding this cycle is essential for effective communication between **QA, development, and stakeholders**.

In real projects, defect handling reflects **tester professionalism**.

---

## What is a Defect?

A **defect** is any deviation between:
- Expected behavior (requirement)
- Actual behavior (application)

Common terms used interchangeably:
- Bug
- Defect
- Issue

Context matters more than terminology.

---

## Why Defect Life Cycle is Important

- Ensures defects are not lost
- Provides visibility to all stakeholders
- Tracks fix progress
- Supports release decisions

Without a defined life cycle:
- Defects are missed
- Accountability is unclear
- Quality suffers

---

## Typical Defect Life Cycle States

```
New → Assigned → Open → Fixed → Retest → Closed
               ↘ Rejected
               ↘ Deferred
               ↘ Duplicate
```

State names may vary slightly across tools, but **flow remains the same**.

---

## 1️⃣ New

- Defect is logged by tester
- Awaiting review

Tester responsibility:
- Ensure defect is reproducible
- Provide clear details

---

## 2️⃣ Assigned

- Defect is assigned to a developer or team
- Ownership is established

---

## 3️⃣ Open

- Developer starts working on the defect
- Root cause analysis happens

---

## 4️⃣ Fixed

- Developer fixes the issue
- Defect is moved to fixed status

Important:
> Fixed does not mean verified.

---

## 5️⃣ Retest

- Tester re-tests the defect
- Confirms whether fix works

Outcomes:
- Pass → Close defect
- Fail → Reopen defect

---

## 6️⃣ Closed

- Defect fix is verified
- No further action required

---

## Additional Defect States

### ❌ Rejected
- Not a valid defect
- Works as designed

### ⏸️ Deferred
- Fix postponed to future release

### 🔁 Duplicate
- Same issue already logged

### 🔓 Reopened
- Fix failed during retesting

---

## Severity vs Priority (CRITICAL)

### Severity
- Impact of defect on system

Examples:
- Critical
- Major
- Minor
- Trivial

### Priority
- Urgency of fixing defect

Examples:
- High
- Medium
- Low

Key rule:
> High severity does not always mean high priority.

---

## Defect Life Cycle in Agile

In Agile:
- Defects are tracked within sprints
- Faster turnaround
- Continuous feedback
- Regression after fixes

Tester role:
- Immediate verification
- Close collaboration with developers

---

## Common Defect Management Mistakes ❌

- Poor defect description
- Missing screenshots/logs
- Logging duplicates
- Reopening without evidence
- Treating environment issues as defects

---

## Interview-Ready Questions

**Q: What is a defect life cycle?**  
A: The process a defect goes through from identification to closure.

**Q: Difference between severity and priority?**  
A: Severity is impact; priority is urgency.

---

## Key Takeaways

- Defect life cycle ensures quality control
- Clear states improve tracking
- Retesting is mandatory
- Severity and priority are different
- Strong defect handling builds credibility
