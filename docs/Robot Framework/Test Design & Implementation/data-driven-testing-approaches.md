---
sidebar_position: 6
title: Data-Driven Testing Approaches
description: Learn how to use Robot Framework data-driven testing with CSV, Excel, JSON, YAML, and dynamic data sources for scalable and maintainable automation.
---

# Robot Framework: Data-Driven Testing Approaches

> Strong automation avoids repeating the same test with different inputs.  
> Data-driven testing helps one test design validate many scenarios.

---

## 🎯 Why This Matters

Many teams start with separate tests like:

```text
Valid Login Test
Invalid Login Test
Locked User Test
Expired Password Test
```

Over time this causes:

- Duplicate steps  
- Hard maintenance  
- Bigger suites  
- Slow execution  
- Inconsistent coverage

> Often the issue is not too many scenarios.  
> It is too many duplicated test cases.

Data-driven testing solves this by separating:

```text
Test Logic + Test Data
```

---

## 🤖 What Is Data-Driven Testing?

A single reusable test flow runs multiple times with different inputs.

Example:

```text
username | password | expected_result
admin    | pass123  | success
admin    | wrong    | failure
locked   | pass123  | locked
```

Same logic, different data.

---

## 🧱 Benefits of Data-Driven Testing

- Less duplicate code  
- Easier maintenance  
- Better scenario coverage  
- Faster additions of new cases  
- Cleaner reporting  
- Stronger regression packs

---

## 🚀 Basic Template Example

```robotframework
*** Test Cases ***
Login Validation
    [Template]    Validate Login

    admin     pass123    success
    admin     wrong      failure
    locked    pass123    locked
```

Keyword:

```robotframework
*** Keywords ***
Validate Login
    [Arguments]    ${user}    ${pass}    ${expected}
```

This is the simplest built-in pattern.

---

## 📄 CSV Data Source

Useful for simple tabular inputs.

### login.csv

```csv
username,password,expected
admin,pass123,success
admin,wrong,failure
locked,pass123,locked
```

### Usage Idea

Load CSV rows and loop through them.

Best for:

- login combinations  
- small regression sets  
- easy business review

---

## 📊 Excel Data Source

Very common in enterprise teams.

Useful when:

- business users maintain data  
- many columns exist  
- formulas or grouped sheets needed  
- legacy processes already use Excel

Examples:

- banking rules  
- customer profiles  
- rate combinations  
- program code data

Since you already use Excel in automation, this is highly practical.

---

## 📦 JSON / YAML Data Source

Better for structured or nested data.

### Example YAML

```yaml
users:
  - username: admin
    password: pass123
    role: superadmin
  - username: user1
    password: pass456
    role: standard
```

Useful for:

- API payloads  
- environment configs  
- nested business objects  
- reusable structured test data

---

## 💾 Database Data Source

Useful when realistic data is required.

Example:

```robotframework
${rows}=    Query    SELECT username,password FROM users WHERE active='Y'
```

Best for:

- production-like scenarios  
- backend validations  
- large datasets  
- frequently changing data

Use carefully to avoid unstable dependencies.

---

## 🌐 API-Based Dynamic Data

Generate fresh data through services.

Example:

```robotframework
${user}=    Create Test User API
```

Useful for:

- unique users  
- temporary accounts  
- orders  
- fresh tokens  
- isolated test runs

Very useful in CI/CD pipelines.

---

## 🏗️ Recommended Data Source Strategy

```text
Small static cases      → CSV
Business-managed data   → Excel
Structured objects      → JSON/YAML
Realistic live data     → Database
Unique runtime data     → API generation
```

Choose based on need, not trend.

---

## 🔁 Example: Excel Login Validation

```robotframework
*** Test Cases ***
Validate All Login Rows
    FOR    ${row}    IN    @{rows}
        Validate Login    ${row.user}    ${row.pass}    ${row.expected}
    END
```

---

## 🔐 Keep Data Separate from Logic

❌ Bad:

```robotframework
Input Text    id=user    admin
Input Text    id=pass    pass123
```

✅ Better:

```robotframework
Input Text    id=user    ${USERNAME}
Input Text    id=pass    ${PASSWORD}
```

Data belongs outside the test logic.

---

## 🏢 Real Project Example

A team had 40 separate login tests.

Each had same steps, different credentials.

Converted into one template + Excel sheet.

Benefits:

- fewer files  
- easier updates  
- faster additions  
- cleaner reports

---

## 📁 Recommended Folder Structure

```text
project/
├── tests/
├── resources/
├── data/
│   ├── login.csv
│   ├── customers.xlsx
│   ├── payloads.json
│   └── config.yaml
└── reports/
```

Keep test data centralized.

---

## ⚠️ Data Quality Matters

Bad test data causes false failures.

Examples:

- expired accounts  
- reused emails  
- invalid IDs  
- outdated environment values  
- duplicate records

Many “flaky tests” are actually bad data problems.

---

## ✅ Validation Before Execution

Validate data before using it.

```robotframework
Should Not Be Empty    ${USERNAME}
Should Not Be Empty    ${PASSWORD}
```

For files:

- required columns exist  
- values in correct format  
- no duplicate keys  
- no blank mandatory rows

---

## 🔄 Parallel Execution Consideration

If running with Pabot:

Avoid shared mutable data.

Bad:

```text
All tests use same username
```

Better:

```text
Generate unique usernames per worker
```

This prevents collisions.

---

## ❌ Common Mistakes

### Hardcoding Data in Tests

Leads to duplication.

### Using Excel for Everything

Sometimes CSV/YAML is simpler.

### Shared Accounts Across Tests

Causes collisions.

### No Data Validation

Creates false failures.

### Huge Random Datasets

Hard to debug.

### Mixing Config with Test Cases

Keep separate.

---

## ✅ Best Practices

- Separate logic from data  
- Use right data source for scenario  
- Keep datasets clean  
- Version control test data  
- Generate unique runtime data when needed  
- Validate files before execution  
- Keep reports understandable

---

## 🔧 Practical Examples

### Template Test

```robotframework
[Template]    Validate Login
```

### Read Environment Value

```robotframework
${env}=    Get Environment Variable    ENV
```

### Dynamic Email

```robotframework
testuser_${timestamp}@mail.com
```

### DB Source

```robotframework
SELECT id FROM customer WHERE active='Y'
```

---

## 📈 Scaling Model

### Beginner Stage

Use templates + CSV.

### Intermediate Stage

Excel + reusable keywords.

### Advanced Stage

YAML/JSON + APIs + DB + dynamic generation.

---

## 💡 My Practical Opinion

When teams say:

> “Our regression pack is too big.”

Often the issue is duplicated tests, not true coverage.

Good data-driven design reduces suite size while increasing scenario coverage.

---

## 🏁 Final Verdict

Data-driven testing is one of the highest ROI practices in automation.

Strong usage gives:

- fewer duplicate tests  
- easier maintenance  
- better coverage  
- faster expansion  
- cleaner suites

Poor usage creates data chaos.

---

## 📚 What To Learn Next

1. SeleniumLibrary Wait Strategies  
2. API Dynamic Response Handling  
3. Excel Automation Patterns  
4. Parallel Execution with Pabot  
5. CI/CD Test Parameterization

---

## Summary

> Good tests separate behavior from data.  
> Great frameworks make adding new scenarios mostly a data change.
