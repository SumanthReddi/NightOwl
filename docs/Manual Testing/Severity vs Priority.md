---
sidebar_position: 14
---

# Severity vs Priority

Severity and Priority are often confused, yet they represent **two different dimensions** of a defect.
Understanding the difference is **critical for real projects and interviews**.

---

## What is Severity?

**Severity** describes the **impact of a defect on the system**.

It answers:
> How badly does this defect affect the application?

### Common Severity Levels
- **Critical** – System crash, data loss, security breach
- **Major** – Core functionality broken
- **Minor** – Non-core functionality issue
- **Trivial** – UI or cosmetic issue

Severity is usually decided by **QA**, sometimes jointly with developers.

---

## What is Priority?

**Priority** describes the **urgency of fixing a defect**.

It answers:
> How soon must this defect be fixed?

### Common Priority Levels
- **High** – Must be fixed immediately
- **Medium** – Fix in the current cycle
- **Low** – Fix when time permits

Priority is typically decided by **product owners or business stakeholders**.

---

## Severity vs Priority – Key Differences

| Aspect | Severity | Priority |
|---|---|---|
| Meaning | Impact on system | Urgency to fix |
| Focus | Technical | Business |
| Decided by | QA / Dev | Product / Business |
| Question answered | How bad is it? | How soon to fix? |

---

## Real Project Scenarios

### High Severity + High Priority
- Login failure for all users
- Payment processing broken

### High Severity + Low Priority
- Crash in rarely used admin feature

### Low Severity + High Priority
- Typo on homepage before production release

### Low Severity + Low Priority
- Minor UI alignment issue in internal screen

---

## Common Misunderstandings ❌

- High severity always means high priority ❌
- Priority is decided by QA ❌
- UI issues are always low priority ❌

Reality:
> Business context decides priority.

---

## How Testers Should Handle Severity & Priority

- Assign severity accurately
- Suggest priority, don’t enforce it
- Provide clear business impact
- Communicate with stakeholders

Good testers **inform decisions**, not dictate them.

---

## Interview-Ready Questions

**Q: Can a defect have high priority but low severity?**  
A: Yes, if business impact is high.

**Q: Who decides severity and priority?**  
A: Severity by QA; priority by business.

---

## Key Takeaways

- Severity = impact
- Priority = urgency
- They are independent
- Business context matters
- Clear understanding avoids conflicts
