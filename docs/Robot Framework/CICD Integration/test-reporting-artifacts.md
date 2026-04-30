---
sidebar_position: 4
title: Test Reporting & Artifact Management
description: Practical guide to Robot Framework reporting, artifact handling, CI integration, and reliable test visibility without overengineering.
---

# Robot Framework: Test Reporting & Artifact Management

> Reports don’t fail.  
> Poor reporting strategy creates confusion.

---

## 🎯 Why This Matters

Common problems teams face:

- missing reports in CI  
- hard-to-debug failures  
- no historical visibility  
- inconsistent artifacts  
- unclear pass/fail insights  

> A test without clear reporting is almost as bad as no test.

---

# 🧱 Reporting Model

```text
Layer 1 → Report Generation
Layer 2 → Artifact Storage
Layer 3 → Result Interpretation
Layer 4 → CI Integration
```

---

# 1️⃣ Report Generation (Robot Default)

Robot Framework already generates:

- `output.xml`
- `log.html`
- `report.html`

Basic run:

```bash
robot tests/
```

---

## Custom Output Directory

```bash
robot --outputdir reports tests/
```

---

## Add Metadata

```bash
robot   --outputdir reports   --metadata Environment:staging   --metadata Build:123   tests/
```

👉 Helps in debugging across environments.

---

# 2️⃣ Rebot (Post Processing)

```bash
rebot reports/output.xml
```

---

## Combine Multiple Outputs

```bash
rebot outputs/*.xml
```

Used when:

- parallel execution  
- multiple test suites  

---

## Clean Reports

```bash
rebot --removekeywords TAG:secret reports/output.xml
```

👉 Removes sensitive or noisy logs.

---

# 3️⃣ Artifact Management (CI/CD)

## Why Important

- debugging failures  
- sharing results  
- audit/history  

---

## GitLab Example

```yaml
artifacts:
  paths:
    - reports/
```

---

## Jenkins Example

```groovy
post {
  always {
    archiveArtifacts artifacts: 'reports/**'
  }
}
```

---

## Recommended Structure

```text
reports/
├── output.xml
├── log.html
├── report.html
```

---

# 4️⃣ Result Interpretation

Focus on:

- pass/fail count  
- failure reasons  
- execution time  
- test coverage (logical, not %)

---

## Example Validation

```robotframework
Should Be Equal    ${status}    SUCCESS
```

If this fails → check logs, not just report summary.

---

# 5️⃣ Parallel Execution + Reporting

With Pabot:

```bash
pabot --processes 4 tests/
```

Then:

```bash
rebot output.xml
```

👉 Always merge results after parallel runs.

---

# 6️⃣ CI Integration Pattern

```yaml
script:
  - robot --outputdir reports tests/
artifacts:
  paths:
    - reports/
```

---

## Add Quality Check (Optional)

```bash
python check_results.py reports/output.xml
```

Used for:

- pass % threshold  
- blocking bad builds  

---

# ⚠️ Common Problems

## Missing Reports

Cause:

- wrong output path  
- job failure before artifact upload  

---

## Empty Reports

Cause:

- test execution failed early  

---

## Large Logs

Cause:

- too much keyword logging  

---

## Hard to Debug Failures

Cause:

- no metadata  
- unclear logs  

---

# ❌ Common Mistakes

- relying only on report.html  
- not saving artifacts  
- ignoring output.xml  
- mixing multiple runs without merge  
- storing reports without structure  

---

# ✅ Best Practices

- always store reports as artifacts  
- use metadata for context  
- merge results after parallel runs  
- keep logs readable  
- standardize report location  
- use simple quality checks  

---

# 📈 Maturity Model

## Beginner
Uses default Robot reports.

## Intermediate
Stores artifacts in CI.

## Advanced
Merges parallel results + structured storage.

## Expert
Adds trend tracking + quality gates.

---

# 💡 Practical Insight

When reporting feels “broken”:

Check:

1. output path  
2. artifact configuration  
3. parallel merge step  
4. log clarity  

---

# 🏁 Final Verdict

Good reporting gives:

- clear debugging  
- reliable visibility  
- faster issue resolution  

Bad reporting creates noise.

---

# 📚 What To Learn Next

1. CI/CD Integration  
2. Parallel Execution  
3. Test Data Strategy  
4. Debugging Failures  
5. Dashboard Integration  

---

## Summary

> Tests prove behavior.  
> Reports prove understanding.
