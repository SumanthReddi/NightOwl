---
sidebar_position: 23
---

# Cucumber with API Automation (Rest Assured Patterns)

Using Cucumber for API automation requires a **behavior-first approach** with clean separation between
feature files, step definitions, and API client logic.

This section explains **how to design scalable Cucumber + Rest Assured frameworks**.

---

## Core Principle

> **Gherkin describes API behavior.  
> Step definitions coordinate requests.  
> API clients execute Rest Assured calls.**

Avoid putting request/response logic directly in step definitions.

---

## Recommended Layered Architecture

```
Feature Files (API behavior)
        ↓
Step Definitions (orchestration)
        ↓
API Client / Service Layer
        ↓
Rest Assured
```

This structure ensures:
- Reusability
- Clean steps
- Easier maintenance

---

## Designing API Feature Files

Feature files should:
- Describe outcomes (status, state changes)
- Avoid endpoints and headers
- Use business language

❌ Avoid:
- URLs
- JSON schemas
- Header names

✅ Prefer:
- “user creates an order”
- “order status should be confirmed”

---

## Step Definitions for APIs

Step definitions should:
- Build intent (create, update, fetch)
- Call API client methods
- Store responses in scenario context

Avoid:
- Large JSON strings
- Inline assertions-heavy logic

---

## API Client / Service Layer

API clients should:
- Encapsulate endpoints
- Handle authentication
- Build requests
- Return responses

Benefits:
- Centralized changes
- Reuse across scenarios
- Cleaner steps

---

## Response Handling & Validation

Best practices:
- Store response in scenario context
- Validate status codes and key fields
- Avoid validating every field unless required

Rule:
> Validate behavior, not implementation details.

---

## Data-Driven API Scenarios

Use:
- Scenario Outline for multiple datasets
- Data Tables for structured payloads

Avoid:
- Massive examples tables
- Mixing positive and negative cases

---

## API + DB Validation (Awareness)

In real projects:
- APIs update databases
- Validate DB state after API calls

Pattern:
```
API Action
   ↓
DB Validation
```

Keep DB logic outside steps.

---

## Error Handling & Negative Scenarios

Negative cases should:
- Be explicit in feature files
- Validate error codes/messages
- Not reuse positive steps blindly

---

## Common Anti-Patterns ❌

- Writing endpoints in Gherkin
- Putting Rest Assured code in steps
- Hardcoding auth tokens
- Over-validating responses

---

## CI/CD Considerations

In CI:
- API tests run faster than UI
- Often executed earlier in pipeline
- Failures block downstream stages

---

## Interview-Ready Questions

**Q: Where should Rest Assured code live in Cucumber?**  
A: In API client/service classes.

**Q: Should endpoints be written in feature files?**  
A: No, feature files should describe behavior.

---

## Key Takeaways

- Separate behavior from implementation
- Keep steps thin
- Centralize API logic
- Validate outcomes, not internals
- Design for reuse and CI speed