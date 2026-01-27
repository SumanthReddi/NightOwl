---
sidebar_position: 5
---

# Writing Good Gherkin Scenarios

Good Gherkin is the **heart of successful BDD**.
Bad Gherkin leads to unreadable tests, high maintenance, and loss of business trust.

This section explains **how to write clean, meaningful, and maintainable Gherkin scenarios**.

---

## Purpose of a Gherkin Scenario

A scenario should:
- Describe **one business behavior**
- Be understandable by non-technical users
- Act as acceptance criteria
- Be executable as an automated test

Rule:
> If it reads like test steps, not behavior — it’s bad Gherkin.

---

## One Behavior per Scenario (Golden Rule)

Each scenario should validate:
- One outcome
- One business flow

❌ Bad:
- Login + Payment + Logout in one scenario

✅ Good:
- One scenario for login
- One scenario for payment

---

## Use Business Language, Not UI Language

### ❌ Bad Gherkin
```
When user clicks submit button
Then user sees dashboard page
```

### ✅ Good Gherkin
```
When user submits valid credentials
Then user should be logged in successfully
```

---

## Avoid Technical Details

Do NOT include:
- Selenium actions
- XPath / CSS
- API endpoints
- SQL queries

Gherkin is **WHAT**, not **HOW**.

---

## Keep Scenarios Short and Focused

Best practice:
- 5–8 steps per scenario
- Clear flow
- No unnecessary details

Long scenarios = poor maintainability.

---

## Use Consistent Vocabulary

- Use same wording across features
- Avoid synonyms for same action
- Helps step reuse

Example:
- Always use “logs in” instead of “signs in / enters / authenticates”

---

## Avoid Overusing And / But

Use And for readability, not to hide complexity.

❌ Bad:
```
Given A
And B
And C
And D
And E
```

If too many Ands → scenario is too complex.

---

## Write from User’s Perspective

Think like:
- User
- Business
- Product owner

Not like:
- Automation engineer
- Developer

---

## Good vs Bad Scenario Example

### ❌ Bad Example
```
Scenario: Login test
  Given browser is opened
  When user enters username
  And user enters password
  And user clicks login
  Then dashboard page should load
```

### ✅ Good Example
```
Scenario: Successful login with valid credentials
  Given user has a valid account
  When user logs in with valid credentials
  Then user should see the dashboard
```

---

## Common Gherkin Smells ❌

- Too many steps
- UI-centric language
- Technical jargon
- Duplicate scenarios
- Hardcoded test data

---

## Interview-Ready Questions

**Q: What makes a good Gherkin scenario?**  
A: Business-readable, single behavior, no technical details.

**Q: Should UI actions be written in Gherkin?**  
A: No, Gherkin should describe behavior only.

---

## Key Takeaways

- Gherkin should read like acceptance criteria
- One behavior per scenario
- Avoid UI & technical language
- Consistency improves reuse
- Good Gherkin reduces maintenance