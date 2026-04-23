---
sidebar_position: 2
title: Synchronization & Waits
description: The complete production-focused guide to Robot Framework synchronization, waits, retries, timeouts, and eliminating flaky UI timing failures.
---

# Robot Framework: Synchronization & Waits

> Most flaky UI tests are not functional failures.  
> They are synchronization failures.

---

## 🎯 Why This Topic Matters

Modern applications are dynamic:

- AJAX / API-driven rendering  
- Loading spinners  
- Delayed buttons  
- React / Angular route updates  
- Background processing  
- Slow CI environments

If automation acts before the application is ready, tests fail randomly.

Common symptoms:

- Element not found  
- Click intercepted  
- Timeout errors  
- Stale element reference  
- Pass locally, fail in pipeline

> In many teams, “Selenium is flaky” really means “wait strategy is weak.”

---

# 🤖 What Is Synchronization?

Synchronization means aligning test execution with the **real application state**.

Bad:

```robotframework
Click Button    Save
Sleep    5s
```

Better:

```robotframework
Click Button    Save
Wait Until Page Contains    Saved Successfully
```

This waits for reality, not guesses.

---

# 🧱 The 4-Layer Synchronization Model

```text
Layer 1 → Smart Wait Strategy
Layer 2 → Timeout Management
Layer 3 → Retry & Recovery
Layer 4 → Business-State Validation
```

Strong teams use all four layers.

---

# 1️⃣ Smart Wait Strategy

## Core Wait Types

| Wait Type | Best Use Case |
|---|---|
| Element Visible | Ready to interact |
| Element Enabled | Clickable / editable |
| Text Appears | Confirmation shown |
| Element Gone | Loader finished |
| URL / Title Change | Navigation complete |
| Retry Wait | Temporary instability |

---

## Best SeleniumLibrary Wait Keywords

```robotframework
Wait Until Page Contains Element    id=username
Wait Until Element Is Visible       id=login
Wait Until Element Is Enabled       id=submit
Wait Until Page Contains            Order Confirmed
Wait Until Page Does Not Contain Element    css=.spinner
```

---

## Wait for Business State (Better Than DOM Only)

Weak:

```robotframework
Wait Until Element Is Visible    id=status
```

Strong:

```robotframework
Wait Until Element Contains    id=status    Approved
```

This validates completion, not just visibility.

---

# 🚫 The Biggest Mistake: Sleep

## Avoid

```robotframework
Sleep    3s
```

Why it fails:

- Too short in slow env  
- Too long in fast env  
- Slows suites massively  
- Creates random failures

## Replace With

```robotframework
Wait Until Element Is Visible    id=submit
Click Button    id=submit
```

---

# 2️⃣ Timeout Management

Random timeout values create chaos.

Bad:

```robotframework
timeout=5s
timeout=17s
timeout=9s
```

Use standards:

```robotframework
${SHORT_WAIT}    5s
${MEDIUM_WAIT}   10s
${LONG_WAIT}     20s
```

---

## Environment-Based Timeouts

CI is often slower than local.

```robotframework
${TIMEOUT}    ${10s if '${ENV}' == 'local' else 20s}
```

Useful for GitLab CI / Jenkins.

---

## Operation-Based Timeouts

```robotframework
Login        → 10s
Checkout     → 20s
Report Load  → 30s
```

Match timeout to business process complexity.

---

# 3️⃣ Retry & Recovery

One temporary delay should not fail the suite.

## Powerful Built-in Pattern

```robotframework
Wait Until Keyword Succeeds    20s    2s    Element Should Be Visible    id=dashboard
```

Meaning:

```text
Retry every 2 seconds for max 20 seconds
```

Excellent for:

- async updates  
- delayed backend sync  
- unstable environments

---

## Example: Payment Status

```robotframework
Wait Until Keyword Succeeds    30s    3s    Verify Payment Approved
```

---

# 4️⃣ Business-State Validation

For critical flows, validate beyond UI.

```robotframework
Click Button    Submit
Wait Until Page Contains    Order Confirmed

${rows}=    Query    SELECT status FROM orders WHERE id=${ORDER_ID}
Should Be Equal    ${rows[0][0]}    CONFIRMED
```

UI + DB gives stronger trust.

---

# 🏢 Real Project Example

Old test:

```robotframework
Click Button    Submit
Sleep    10s
Page Should Contain    Success
```

Problems:

- slow in QA  
- still failed in UAT  
- wasted time every run

Improved:

```robotframework
Click Button    Submit
Wait Until Page Contains    Success    timeout=20s
```

Result:

- faster when quick  
- waits when slow  
- fewer false failures

---

# 🌐 SPA / React / Angular Apps

Use combined waits:

```robotframework
Wait Until Location Contains    /dashboard
Wait Until Element Is Visible   css=.dashboard-card
```

Single-page apps often load page sections after route change.

---

# 📄 Loader / Spinner Handling

Very common in enterprise apps.

```robotframework
Wait Until Page Does Not Contain Element    css=.loading-spinner
```

Then continue actions safely.

---

# ⚠️ Parallel Execution Notes

With Pabot:

- CPU load increases  
- browsers compete for resources  
- timing differs

So waits become even more important.

Use:

- proper cleanup  
- unique users  
- stable timeouts

---

# 📁 Recommended Reusable Wait Keywords

```robotframework
*** Keywords ***
Wait For Login Page
    Wait Until Element Is Visible    id=username
    Wait Until Element Is Visible    id=password
    Wait Until Element Is Enabled    id=login

Wait For Dashboard
    Wait Until Location Contains    /dashboard
    Wait Until Element Is Visible   css=.menu
```

Reusable waits reduce duplication.

---

# ❌ Common Mistakes

### Sleep Everywhere

Classic flaky suite pattern.

### Waiting Only for Visibility

Visible does not always mean clickable.

### Tiny Timeouts

Fails in slow env.

### Huge Timeouts Everywhere

Slow feedback.

### No Spinner Handling

Actions happen too early.

### No Retry Strategy

One temporary miss fails test.

---

# ✅ Best Practices

- Prefer explicit waits over sleep  
- Wait for business outcomes, not only DOM presence  
- Use retry waits for unstable flows  
- Centralize timeout values  
- Handle loaders/spinners  
- Use environment-aware timing  
- Build reusable wait keywords  
- Review flaky tests for timing first

---

# 🔧 Practical Login Example

```robotframework
Wait Until Element Is Visible    id=username
Input Text    id=username    ${USER}

Wait Until Element Is Visible    id=password
Input Text    id=password    ${PASS}

Wait Until Element Is Enabled    id=login
Click Button    id=login

Wait Until Page Contains Element    css=.dashboard
```

---

# 📈 Maturity Model

## Beginner

Uses `Sleep`.

## Intermediate

Uses explicit waits.

## Advanced

Uses business-state waits + retries + timeout strategy.

## Expert

Uses reusable wait framework + CI tuning + backend validation.

---

# 💡 My Practical Opinion

When teams say:

> “UI automation fails randomly.”

I inspect synchronization first.

Usually the issue is:

- acting too early  
- fixed sleeps  
- no retry logic  
- loaders ignored  
- weak validation

---

# 🏁 Final Verdict

Synchronization is one of the highest ROI skills in UI automation.

Strong waits give:

- stable tests  
- faster suites  
- fewer false failures  
- cleaner pipelines  
- better trust in automation

Weak waits create noise and frustration.

---

# 📚 What To Learn Next

1. File Upload / Download Handling  
2. Headless Execution  
3. Page Object Model Pattern  
4. BrowserLibrary Comparison  
5. Test Stability Engineering

---

## Summary

> Fast tests are good.  
> Reliable tests are better.  
> Fast **and** reliable tests come from proper synchronization.
