---
sidebar_position: 3
title: File Operations (Upload / Download)
description: Learn how to handle file uploads and downloads in Robot Framework using SeleniumLibrary with stable paths, validations, browser settings, and CI-ready practices.
---

# Robot Framework: File Operations (Upload / Download)

> File workflows are common in enterprise automation.  
> Reliable handling requires more than just `Choose File`.

---

## 🎯 Why This Matters

Many UI automation suites fail around file scenarios because of:

- hardcoded local paths  
- missing test files  
- browser download popups  
- no verification after upload  
- downloads not completed before validation  
- parallel execution file conflicts

> Most flaky file tests are design problems, not application problems.

---

# 🤖 Common File Scenarios

Typical automation needs:

- Upload identity documents  
- Upload CSV / Excel imports  
- Upload profile images  
- Download statements / invoices  
- Download reports  
- Validate exported files

Robot Framework + SeleniumLibrary can handle these reliably.

---

# 🧱 Core File Handling Model

```text
Layer 1 → Stable File Paths
Layer 2 → Upload Validation
Layer 3 → Download Management
Layer 4 → Cleanup & Parallel Safety
```

---

# 1️⃣ Stable File Paths

## Avoid Hardcoded Paths

Bad:

```robotframework
Choose File    id=file    C:\Users\name\Desktop\doc.pdf
```

Good:

```robotframework
Choose File    id=file    ${EXECDIR}/files/doc.pdf
```

`${EXECDIR}` uses the execution directory and works better across machines.

---

## Cross-Platform Path Pattern

```robotframework
${path}=    Catenate    SEPARATOR=${/}    ${EXECDIR}    files    doc.pdf
```

Useful for Windows / Linux CI runners.

---

# 2️⃣ Upload Handling

## Basic Upload

```robotframework
Choose File    id=fileUpload    ${EXECDIR}/files/sample.pdf
Click Button   id=submit
```

---

## Validate Before Upload

```robotframework
File Should Exist    ${EXECDIR}/files/sample.pdf
```

Optional:

```robotframework
${size}=    Get File Size    ${EXECDIR}/files/sample.pdf
Should Be True    ${size} > 0
```

---

## Verify Upload Success

Do not stop after selecting file.

```robotframework
Choose File    id=fileUpload    ${FILE}
Click Button   id=submit

Wait Until Page Contains    Upload successful
```

Or:

```robotframework
Element Text Should Be    id=fileName    sample.pdf
```

---

# 📄 File Type Validation Examples

Useful for apps with restrictions.

```robotframework
Choose File    id=fileUpload    invalid.exe
Page Should Contain    Unsupported file type
```

```robotframework
Choose File    id=fileUpload    large.zip
Page Should Contain    File exceeds limit
```

Good negative coverage.

---

# 3️⃣ Download Management

Downloads need browser configuration.

---

## Chrome Download Setup

```robotframework
Open Browser    ${URL}    chrome
```

Use options/preferences to auto-download without popup.

(Usually configured in browser options in framework setup.)

---

## Trigger Download

```robotframework
Click Button    id=downloadReport
```

---

## Wait for File to Appear

```robotframework
Wait Until Keyword Succeeds    20s    2s
...    File Should Exist    ${DOWNLOAD_DIR}/report.xlsx
```

This is much better than `Sleep 10s`.

---

## Validate Download

```robotframework
File Should Exist    ${DOWNLOAD_DIR}/report.xlsx

${size}=    Get File Size    ${DOWNLOAD_DIR}/report.xlsx
Should Be True    ${size} > 0
```

---

# 📊 Validate Export Content

For CSV / text exports:

```robotframework
${content}=    Get File    ${DOWNLOAD_DIR}/report.csv
Should Contain    ${content}    Customer ID
```

For Excel/PDF use dedicated libraries where needed.

---

# 🏢 Real Project Example

A test clicked **Download Report** and passed immediately.

But file generation failed silently.

Improved flow:

```robotframework
Click Button    Download
Wait Until Keyword Succeeds    30s    2s    File Should Exist    report.xlsx
Validate File Size
```

This caught real defects.

---

# 🔁 Reusable Upload Keyword

```robotframework
*** Keywords ***
Upload Document
    [Arguments]    ${locator}    ${file}

    File Should Exist    ${file}
    Choose File         ${locator}    ${file}
```

Reusable and cleaner.

---

# 🔁 Reusable Download Keyword

```robotframework
*** Keywords ***
Wait For Download
    [Arguments]    ${file}

    Wait Until Keyword Succeeds    20s    2s
    ...    File Should Exist    ${file}
```

---

# ⚠️ Parallel Execution Notes

With Pabot:

Avoid shared filenames like:

```text
report.xlsx
```

Better:

```text
report_${INDEX}.xlsx
```

Or separate download folders per worker.

---

# 📁 Recommended Folder Structure

```text
project/
├── files/
│   ├── upload/
│   ├── templates/
│   └── sample-data/
├── downloads/
├── tests/
└── resources/
```

Keep uploads and downloads organized.

---

# ❌ Common Mistakes

### Hardcoded Desktop Paths

Fails on CI or other machines.

### Using Sleep for Downloads

Slow and unreliable.

### No File Verification

False passes.

### Shared Download Folder

Parallel conflicts.

### No Cleanup

Old files cause misleading passes.

### Testing Only Happy Path

Need invalid format / size tests too.

---

# ✅ Best Practices

- Use `${EXECDIR}` or configurable paths  
- Validate file exists before upload  
- Verify success after upload  
- Wait for actual download completion  
- Validate downloaded file size/content  
- Use isolated download folders in parallel runs  
- Clean old files before execution

---

# 🔧 Practical Examples

## Upload PDF

```robotframework
Choose File    id=fileUpload    ${EXECDIR}/files/id-proof.pdf
Click Button   Submit
Wait Until Page Contains    Upload successful
```

## Wait for CSV Download

```robotframework
Click Button    Export

Wait Until Keyword Succeeds    20s    2s
...    File Should Exist    ${DOWNLOAD_DIR}/customers.csv
```

## Validate CSV Content

```robotframework
${content}=    Get File    ${DOWNLOAD_DIR}/customers.csv
Should Contain    ${content}    Customer Name
```

---

# 📈 Maturity Model

## Beginner

Basic `Choose File`.

## Intermediate

Upload/download verification.

## Advanced

Reusable file framework + browser configs + parallel-safe folders.

## Expert

Content validation + CI pipelines + multi-browser reliability.

---

# 💡 My Practical Opinion

When teams say:

> “File tests are flaky.”

Usually I inspect:

- path handling  
- download waits  
- cleanup strategy  
- shared folders  
- missing verification

---

# 🏁 Final Verdict

File operations are common but often under-engineered.

Strong file handling gives:

- stable document tests  
- trusted exports  
- fewer false failures  
- cleaner pipelines  
- scalable parallel runs

Poor file handling creates noisy automation.

---

# 📚 What To Learn Next

1. Headless Execution  
2. Page Object Model Pattern  
3. BrowserLibrary Comparison  
4. Parallel Execution with Pabot  
5. CI/CD Artifact Management

---

## Summary

> Uploading a file is easy.  
> Verifying the full workflow reliably is the real automation skill.
