---
sidebar_position: 18
---

# Dry Run & Undefined Steps

Dry Run is one of the most **misunderstood yet powerful features** in Cucumber.
It helps validate feature files and step definitions **without executing automation code**.

---

## What is Dry Run?

Dry Run mode:
- Checks whether every Gherkin step has a matching step definition
- Does NOT execute automation logic
- Does NOT launch browser or call APIs

Purpose:
> Validate mapping between feature files and step definitions.

---

## Why Dry Run is Important

Dry Run helps:
- Identify undefined steps early
- Validate glue configuration
- Speed up framework setup
- Avoid unnecessary execution

It is especially useful during:
- Initial framework creation
- Feature file development
- Step refactoring

---

## How Dry Run Works (Conceptually)

```
Runner Starts (dryRun=true)
   ↓
Feature Files Parsed
   ↓
Steps Matched Against Step Definitions
   ↓
Undefined Steps Reported
   ↓
Execution Stops
```

No hooks, no automation logic executed.

---

## Undefined Steps

An undefined step means:
- No matching step definition found
- Glue path is incorrect
- Step annotation does not match wording

Example output:
```
Undefined step: When user logs in with valid credentials
```

---

## How to Fix Undefined Steps

Checklist:
- Verify step wording matches exactly
- Check Cucumber Expression vs Regex
- Confirm glue package path
- Ensure step class is under glue
- Avoid duplicate step patterns

---

## Dry Run vs Normal Run

| Aspect | Dry Run | Normal Run |
|---|---|---|
| Automation executed | ❌ | ✅ |
| Browser/API calls | ❌ | ✅ |
| Step validation | ✅ | ✅ |
| Speed | Very fast | Slower |

---

## Common Mistakes ❌

- Leaving dry run enabled in CI
- Assuming dry run executes hooks
- Using dry run to debug logic
- Ignoring undefined step warnings

---

## Best Practices

- Enable dry run during framework setup
- Disable dry run before real execution
- Use dry run after refactoring steps
- Treat undefined steps as build blockers

---

## Interview-Ready Questions

**Q: What does dryRun do in Cucumber?**  
A: It validates step definitions without executing tests.

**Q: Does dryRun execute hooks?**  
A: No, it only checks step mappings.

---

## Key Takeaways

- Dry run validates step mappings
- Saves time during setup
- Helps detect glue issues early
- Should not be used in CI runs
- Undefined steps must be fixed immediately