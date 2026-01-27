---
sidebar_position: 24
---

# Error Handling, Retries & Flaky Test Control

Flaky tests reduce trust in automation. This section explains **how to handle errors, apply retries responsibly, and design stable Cucumber frameworks**—especially for CI/CD.

---

## What is a Flaky Test?

A flaky test:
- Passes sometimes, fails sometimes
- Fails without code changes
- Often caused by timing, shared state, or environment instability

Rule:
> **Retries hide problems; fixes solve them.**

---

## Common Causes of Flakiness

- Timing/synchronization issues
- Shared or static state
- Test data collisions
- Environment instability
- Over-parallelization
- External dependency failures

---

## Error Handling Strategy

### Fail Fast
- Validate preconditions early
- Stop execution when a critical step fails
- Avoid cascading failures

### Clear Assertions
- Assert only what matters
- Use meaningful messages
- Avoid over-asserting

---

## Retry Strategies (Use Sparingly)

Retries should be:
- **Framework-level**, not step-level
- **Limited** (1–2 retries max)
- **Transparent** in reports

Use retries when:
- External systems are temporarily unstable
- Network hiccups occur
- Known transient issues exist

Avoid retries for:
- Assertion failures
- Business logic defects
- Deterministic failures

---

## Where Retries Belong

- Test framework layer (e.g., TestNG retry analyzer)
- Runner configuration (not inside steps)
- Never inside feature files

---

## Designing for Stability

- Use scenario-level isolation
- Control test data lifecycle
- Prefer explicit waits over sleeps
- Mock or stub unstable dependencies (when possible)
- Separate smoke vs regression scopes

---

## Flaky Test Triage Process

```
Detect
  ↓
Classify (timing / data / env)
  ↓
Fix root cause
  ↓
Verify stability
  ↓
Remove retry if possible
```

---

## CI/CD Considerations

- Do not mask failures with aggressive retries
- Track flaky tests separately
- Fail fast on critical paths (smoke)
- Quarantine unstable tests temporarily

---

## Common Anti-Patterns ❌

- Blind retries for all failures
- Retrying inside steps or hooks
- Ignoring flaky test metrics
- Increasing waits everywhere

---

## Interview-Ready Questions

**Q: What is a flaky test?**  
A: A test that fails intermittently without code changes.

**Q: When should retries be used?**  
A: Only for transient, non-deterministic failures.

---

## Key Takeaways

- Flakiness must be fixed, not hidden
- Retries are a last resort
- Design for isolation and determinism
- CI visibility is essential
- Stable tests build trust