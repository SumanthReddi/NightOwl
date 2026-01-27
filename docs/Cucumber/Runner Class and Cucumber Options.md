---
sidebar_position: 15
---

# Runner Class & Cucumber Options

The **Runner Class** is the control center for executing Cucumber tests.
It tells Cucumber **what to run, where to find it, and how to report results**.

Understanding the runner properly prevents **undefined steps, wrong executions, and CI failures**.

---

## What is a Runner Class?

A runner class:
- Triggers Cucumber execution
- Connects Cucumber with TestNG or JUnit
- Configures features, glue, tags, plugins, and dry run

Cucumber itself does not start execution — the runner does.

---

## Runner Responsibilities

The runner controls:
- Feature file location
- Step definition (glue) location
- Tags for selective execution
- Reporting plugins
- Dry run behavior

Think of the runner as the **execution configuration file**.

---

## Common Runner Integrations

- **Cucumber + TestNG** (most common in automation)
- **Cucumber + JUnit**

Choice depends on:
- Existing framework
- Parallel execution needs
- Reporting preferences

---

## Key Cucumber Options (Conceptual)

### features
- Path to `.feature` files
- Can point to folder or single file

Best practice:
- Point to a folder, not individual files

---

### glue
- Package(s) containing step definitions and hooks
- Must be accurate

Incorrect glue = undefined steps.

---

### tags
- Controls which scenarios run
- Enables smoke, regression, sanity runs

Tag logic belongs in runner, not feature files.

---

### plugin
- Controls reporting
- HTML, JSON, pretty output, etc.

Plugins do not affect execution logic — only reporting.

---

### dryRun
- Validates step definitions
- Does NOT execute automation code

Used to:
- Detect undefined steps
- Validate glue configuration

---

## Typical Execution Flow

```
Runner Starts
   ↓
Features Located
   ↓
Glue Loaded
   ↓
Scenarios Filtered by Tags
   ↓
Steps Matched
   ↓
Execution Happens
   ↓
Reports Generated
```

---

## Multiple Runners Strategy

Large projects often use:
- Smoke runner
- Regression runner
- API runner

Each runner:
- Uses different tags
- Same feature files

Avoid one massive runner for everything.

---

## Common Runner Mistakes ❌

- Wrong feature path
- Incorrect glue package
- Hardcoding tags
- Mixing JUnit and TestNG configs
- Forgetting dry run during setup

---

## CI/CD Awareness

In CI:
- Runner controls execution scope
- Tags drive pipeline stages
- Reports generated via plugins

Runner configuration should be **environment-agnostic**.

---

## Interview-Ready Questions

**Q: What is the purpose of a runner class?**  
A: To configure and trigger Cucumber execution.

**Q: What does dryRun do?**  
A: Validates step definitions without executing tests.

---

## Key Takeaways

- Runner controls execution
- CucumberOptions define behavior
- Correct glue is critical
- Tags enable selective runs
- Dry run saves setup time
