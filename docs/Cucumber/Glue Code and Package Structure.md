---
sidebar_position: 13
---

# Glue Code & Package Structure

Glue code tells Cucumber **where to find step definitions, hooks, and supporting classes**.
Incorrect glue configuration is one of the **most common causes of execution failures** in Cucumber projects.

This section explains **what glue really is and how to structure packages cleanly**.

---

## What is Glue in Cucumber?

`glue` is a configuration that:
- Points Cucumber to step definition packages
- Helps Cucumber locate hooks
- Connects feature files to executable code

Without correct glue:
> Scenarios run but steps remain **undefined**.

---

## Where Glue is Defined

Glue is defined in:
- Runner class (`@CucumberOptions`)
- Test framework integration (TestNG / JUnit)

Conceptually:
```
Feature File → Glue → Step Definitions
```

---

## What Belongs in Glue Packages

Glue packages typically contain:
- Step definition classes
- Hooks classes
- Shared context classes

They should NOT contain:
- Page Objects
- Utility classes
- Test runners

---

## Recommended Package Structure

Clean structure example:
```
src/test/java
 └── steps
     ├── login
     ├── payment
     └── common
 └── hooks
 └── runners
 └── pages
 └── utils
```

Glue should point only to:
```
steps, hooks
```

---

## Feature Files Location

Best practice:
```
src/test/resources/features
```

Feature files:
- Should not be under Java packages
- Should be cleanly organized by module

---

## Multiple Glue Packages

Glue can accept:
- One package
- Multiple packages

Example concept:
```
glue = {"steps.login", "steps.common", "hooks"}
```

---

## Common Glue Issues ❌

- Wrong package name
- Step classes outside glue path
- Typo in glue configuration
- Multiple step definitions for same step

These cause:
- Undefined steps
- Duplicate step errors

---

## How to Debug Glue Issues

- Check package names carefully
- Use dry run
- Verify step definition annotations
- Avoid overlapping glue paths

---

## Best Practices

- Keep glue minimal
- Separate steps by domain
- Avoid deep package nesting
- Keep naming consistent

---

## Interview-Ready Questions

**Q: What is glue in Cucumber?**  
A: It tells Cucumber where to find step definitions and hooks.

**Q: What happens if glue is misconfigured?**  
A: Steps remain undefined.

---

## Key Takeaways

- Glue connects feature files to code
- Only steps and hooks belong in glue
- Clean package structure prevents errors
- Most undefined-step issues are glue-related
