---
sidebar_position: 4
title: Headless Browser Execution
description: Learn how to run Robot Framework tests in headless mode using SeleniumLibrary with stable browser options, CI/CD optimization, debugging, and production-ready practices.
---

# Robot Framework: Headless Browser Execution

> Headless execution is not just running without a UI.  
> It is about faster, scalable, CI-ready automation.

---

## 🎯 Why This Matters

Modern teams run automation in:

- GitLab CI  
- Jenkins  
- GitHub Actions  
- Docker containers  
- Cloud runners

These environments often do not have a visible desktop session.

That is where headless browsers become essential.

Common benefits:

- Faster execution  
- Lower resource usage  
- Easier CI/CD integration  
- Better parallel scalability  
- 24/7 scheduled execution

> Many teams think headless means unstable.  
> Usually the issue is poor configuration.

---

# 🤖 What Is Headless Mode?

A browser runs normally, but without opening a visible GUI window.

Examples:

- Chrome Headless  
- Edge Headless  
- Firefox Headless

Your automation still performs:

- clicks  
- typing  
- validations  
- navigation  
- screenshots

Only the browser window is hidden.

---

# 🧱 Core Headless Strategy

```text
Layer 1 → Correct Browser Options
Layer 2 → Stable Viewport Size
Layer 3 → CI/CD Integration
Layer 4 → Debugging & Reliability
```

---

# 1️⃣ Correct Browser Options

## Chrome Example

```robotframework
Open Browser
...    ${URL}
...    chrome
...    options=add_argument(--headless=new)
```

Recommended additional options for CI:

```text
--no-sandbox
--disable-dev-shm-usage
--window-size=1920,1080
```

---

## Full Example

```robotframework
Open Browser
...    ${URL}
...    chrome
...    options=add_argument(--headless=new);add_argument(--no-sandbox);add_argument(--disable-dev-shm-usage);add_argument(--window-size=1920,1080)
```

Useful in Linux runners.

---

## Firefox Example

```robotframework
Open Browser
...    ${URL}
...    firefox
...    options=add_argument(-headless)
```

---

# 2️⃣ Stable Viewport Size

Many failures happen because headless defaults to small resolution.

Use explicit size:

```robotframework
Set Window Size    1920    1080
```

or browser arg:

```text
--window-size=1920,1080
```

This prevents:

- hidden buttons  
- responsive layout shifts  
- click failures

---

# 🏢 Real Project Example

A test passed locally with GUI but failed in CI headless mode.

Reason:

```text
Save button moved into mobile menu due to small viewport.
```

Fix:

```robotframework
Set Window Size    1920    1080
```

Issue resolved.

---

# 3️⃣ CI/CD Integration

Headless is ideal for pipelines.

## GitLab CI Example

```yaml
robot_tests:
  script:
    - robot tests/
```

Framework decides:

```text
local run  → headed mode
pipeline   → headless mode
```

---

## Environment-Based Toggle

```robotframework
IF    '${ENV}' == 'ci'
    Open Headless Browser
ELSE
    Open Normal Browser
END
```

Very practical.

---

# 4️⃣ Debugging & Reliability

Headless failures feel harder because no UI is visible.

Use artifacts.

## Screenshot on Failure

```robotframework
Test Teardown    Run Keyword If Test Failed    Capture Page Screenshot
```

## Save Logs

- Robot logs  
- browser console logs  
- screenshots  
- HTML reports

---

# 🔁 Reusable Keyword Pattern

```robotframework
*** Keywords ***
Open Test Browser
    [Arguments]    ${url}

    Open Browser
    ...    ${url}
    ...    chrome
    ...    options=add_argument(--headless=new)

    Set Window Size    1920    1080
```

Centralized browser logic is cleaner.

---

# ⚡ Performance Benefits

Typical improvements:

- faster startup  
- less memory usage  
- more parallel sessions

Especially useful for smoke suites and pipelines.

---

# 📄 When GUI Mode Is Better

Use headed mode when:

- developing new tests  
- debugging locators  
- visually inspecting flows  
- complex drag/drop debugging  
- demoing automation

Best teams use both modes.

---

# 🌐 Parallel Execution

Headless works well with Pabot.

```text
8 headless browsers > easier than 8 visible browsers on same machine
```

Still monitor CPU/RAM.

---

# 📁 Recommended Config Structure

```text
config/
├── local.yaml
├── ci.yaml
└── browsers.yaml
```

Example:

```yaml
browser: chrome
headless: true
width: 1920
height: 1080
```

---

# ❌ Common Mistakes

### No Window Size

Causes responsive layout failures.

### Assuming Headless = Faster Always

Heavy apps still consume resources.

### No Screenshots on Failure

Hard debugging.

### Different Local vs CI Config

Creates confusion.

### Running Too Many Parallel Browsers

Machine overload.

### Only Testing Headless

Misses visual regressions.

---

# ✅ Best Practices

- Use explicit window size  
- Add CI-safe Chrome options  
- Capture screenshots on failure  
- Reuse browser open keywords  
- Keep local and CI configs controlled  
- Use headless for regression/smoke  
- Use GUI mode for debugging

---

# 🔧 Practical Examples

## Open Chrome Headless

```robotframework
Open Browser
...    ${URL}
...    chrome
...    options=add_argument(--headless=new)
```

## CI Safe Chrome

```robotframework
Open Browser
...    ${URL}
...    chrome
...    options=add_argument(--headless=new);add_argument(--no-sandbox);add_argument(--disable-dev-shm-usage)
```

## Set Resolution

```robotframework
Set Window Size    1920    1080
```

---

# 📈 Maturity Model

## Beginner

Just adds `--headless`.

## Intermediate

Adds viewport + screenshots.

## Advanced

Environment-driven config + CI pipelines + parallel runs.

## Expert

Containerized scalable browser execution with diagnostics.

---

# 💡 My Practical Opinion

When teams say:

> “Headless tests are flaky.”

Usually I inspect:

- viewport size  
- browser args  
- missing waits  
- CI resource limits  
- no screenshots/logs

Headless itself is rarely the problem.

---

# 🏁 Final Verdict

Headless execution is essential for modern automation pipelines.

Strong implementation gives:

- faster CI runs  
- scalable execution  
- lower costs  
- stable pipelines  
- continuous feedback

Poor implementation creates avoidable failures.

---

# 📚 What To Learn Next

1. Page Object Model Pattern  
2. BrowserLibrary Comparison  
3. Parallel Execution with Pabot  
4. Docker with Robot Framework  
5. CI/CD Artifact Management

---

## Summary

> Headless mode should increase speed and scale — not reduce reliability.  
> Proper configuration makes the difference.
