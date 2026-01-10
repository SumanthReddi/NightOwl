---
sidebar_position: 6
---

# Levels of Testing

Levels of testing describe **where and when testing is performed in the software development process**.
Each level has a **specific goal**, and understanding these levels helps testers know **responsibility, scope, and expectations**.

---

## Why Levels of Testing Matter

- Clarifies **ownership** (developer vs tester vs business)
- Ensures **progressive validation**
- Prevents defect leakage to production
- Aligns testing with SDLC

Key idea:
> Defects should be caught **as early as possible**.

---

## The Four Main Levels of Testing

1. Unit Testing  
2. Integration Testing  
3. System Testing  
4. Acceptance Testing (UAT)

These levels are **sequential but overlapping** in modern projects.

---

## 1️⃣ Unit Testing

### What is Unit Testing?

Unit testing verifies **individual components or functions** in isolation.

### Who Performs It?
- Developers

### Characteristics
- Code-level testing
- Fast execution
- Automated
- Focused on logic correctness

### Tester’s Involvement (Awareness)
- Review unit test coverage
- Understand limitations
- Raise gaps if critical paths are missed

---

## 2️⃣ Integration Testing

### What is Integration Testing?

Integration testing verifies **interaction between modules or systems**.

Examples:
- UI → API
- API → Database
- Service → Service

### Who Performs It?
- Testers and developers (shared responsibility)

### Tester Focus
- Data flow validation
- Interface contracts
- Error handling

Common issues found:
- Data mismatch
- API contract issues
- Configuration problems

---

## 3️⃣ System Testing

### What is System Testing?

System testing validates the **entire application as a whole** against requirements.

### Who Performs It?
- Testers (QA team)

### Scope
- Functional testing
- Regression testing
- End-to-end scenarios

This is the **primary phase for manual and automation testing**.

---

## 4️⃣ Acceptance Testing (UAT)

### What is Acceptance Testing?

Acceptance testing verifies whether the system is **acceptable for business use**.

### Who Performs It?
- Business users
- Product owners
- Clients

### Tester’s Role
- Support UAT
- Prepare test data
- Assist defect verification
- Perform production-like validation

---

## Levels of Testing – Comparison

| Level | Focus | Performed By |
|---|---|---|
| Unit | Individual components | Developers |
| Integration | Module interaction | Dev + QA |
| System | End-to-end system | QA |
| Acceptance | Business validation | Business |

---

## Levels of Testing in Agile Projects

In Agile:
- Unit testing happens continuously
- Integration testing is frequent
- System testing happens every sprint
- UAT may happen per sprint or release

Testing is **continuous**, not phase-bound.

---

## Common Misconceptions ❌

- Unit testing is tester’s job ❌
- Integration testing is optional ❌
- UAT means no QA involvement ❌

Reality:
> Each level has a clear owner and purpose.

---

## Interview-Ready Questions

**Q: Difference between system testing and UAT?**  
A: System testing validates requirements; UAT validates business acceptance.

**Q: Who is responsible for unit testing?**  
A: Developers.

---

## Key Takeaways

- Levels define testing scope and responsibility
- Early testing reduces cost
- System testing is QA’s primary focus
- UAT ensures business confidence
- All levels together ensure quality

---

## What’s Next?

👉 **Functional Testing Types (Smoke, Sanity, Regression, Re-testing, Exploratory)**
