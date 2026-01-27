---
sidebar_position: 9
---

# Feature File Design from User Stories

Good Cucumber feature files start **from user stories**, not from automation steps.
This section explains how to convert **requirements into clean, executable Gherkin scenarios**.

---

## What is a User Story?

A user story typically follows this format:

> As a **user**  
> I want to **perform an action**  
> So that **I get a benefit**

Example:
> As a user, I want to log in so that I can access my account.

---

## Acceptance Criteria (AC)

Acceptance criteria define **conditions of satisfaction** for a user story.

Example:
- User can log in with valid credentials
- Error message is shown for invalid credentials
- Locked users cannot log in

Each acceptance criterion should map to **at least one scenario**.

---

## Mapping User Story → Gherkin

### Step-by-step mapping

```
User Story
   ↓
Acceptance Criteria
   ↓
Scenarios
   ↓
Automation
```

Rule:
> **Do not skip acceptance criteria** — they drive scenarios.

---

## One Story, Multiple Scenarios

Example:

User Story: Login functionality

Scenarios:
- Successful login
- Login with invalid password
- Login with locked account

Each scenario validates **one behavior**.

---

## Feature File Structure Best Practice

```
Feature: Login functionality
  As a registered user
  I want to log in
  So that I can access my dashboard
```

Scenarios go below the feature description.

---

## Avoid UI & Technical Leakage ❌

Feature files should NOT contain:
- Button names
- Page names
- API endpoints
- Database queries

Example ❌:
```
When user clicks login button
```

Correct ✅:
```
When user submits valid credentials
```

---

## Granularity Guidelines

- Feature → user story
- Scenario → acceptance criterion
- Step → business action

Avoid:
- Too many scenarios in one feature
- Mixing unrelated behaviors

---

## Common Design Mistakes ❌

- Writing one scenario per test case ID
- Copying manual test steps
- Writing automation-focused scenarios
- Ignoring business language

---

## Interview-Ready Questions

**Q: How do you convert a user story into Cucumber scenarios?**  
A: By mapping acceptance criteria to scenarios.

**Q: Should feature files contain UI steps?**  
A: No, they should describe behavior only.

---

## Key Takeaways

- Start from user stories
- Acceptance criteria drive scenarios
- One behavior per scenario
- Avoid technical language
- Good design improves collaboration
