---
sidebar_position: 18
---

# UAT and Production Testing

UAT and Production Testing are the **final quality gates** before and after a release.
This phase determines whether the software is **ready for real users**.

Many testers misunderstand this phase — this section clears that confusion.

---

## What is UAT (User Acceptance Testing)?

UAT verifies whether the system meets **business expectations** and is acceptable for end users.

Key focus:
> Does the system solve the business problem?

---

## Who Performs UAT?

- Business users
- Product owners
- Clients

Tester role:
- Support UAT execution
- Prepare test data
- Clarify scenarios
- Verify reported issues

Testers **do not own UAT**, but they **enable it**.

---

## UAT vs System Testing

| Aspect | System Testing | UAT |
|---|---|---|
| Performed by | QA | Business |
| Focus | Requirements | Business acceptance |
| Environment | QA | UAT |
| Goal | Find defects | Accept/reject product |

---

## Tester Responsibilities During UAT

- Ensure UAT environment readiness
- Help business users
- Reproduce UAT defects
- Validate fixes
- Perform regression if needed

Good testers act as **quality partners**, not gatekeepers.

---

## What is Production Testing?

Production testing refers to **limited validation after deployment**.

Important rule:
> Production is NOT a test environment.

---

## Production Smoke Testing

Performed after deployment to ensure:
- Application is up
- Critical flows work
- No deployment issues

Examples:
- Login works
- Home page loads
- Basic transaction works

---

## What Testers Should NOT Do in Production ❌

- Execute full regression
- Use destructive test data
- Experiment with features
- Test negative scenarios

Production testing must be **minimal and safe**.

---

## Post-Release Validation

After release:
- Monitor logs
- Validate critical flows
- Support incident analysis
- Assist rollback decisions

---

## Common Mistakes ❌

- Treating UAT like QA testing
- Blocking business unnecessarily
- Testing aggressively in production
- Ignoring post-release checks

---

## Interview-Ready Questions

**Q: What is UAT?**  
A: Testing performed by business to validate acceptance.

**Q: Can testers test in production?**  
A: Only limited smoke testing post-deployment.

---

## Key Takeaways

- UAT validates business readiness
- Testers support, not own UAT
- Production testing is minimal
- Post-release checks are critical
- Final quality gate before real users

---

## What’s Next?

👉 **Manual Testing in Real Projects**
