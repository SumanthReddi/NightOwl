---
sidebar_position: 8
---

# Built-in Libraries

Robot Framework provides several **built-in libraries** that are available
out of the box. These libraries are heavily used in real-world frameworks
and reduce the need for custom code.

---

## Why Built-in Libraries Matter

- Avoid reinventing the wheel
- Reduce custom Python code
- Improve readability
- Increase stability

Most production Robot Framework projects rely on built-in libraries daily.

---

## BuiltIn Library

The **BuiltIn** library is always available.

Common keywords:
- Log
- Set Variable
- Run Keyword If
- Run Keywords
- Should Be Equal
- Fail

Used for:
- Flow control
- Assertions
- Dynamic execution

---

## Collections Library

Used to work with lists and dictionaries.

Common keywords:
- Create List
- Append To List
- Get From Dictionary
- Dictionary Should Contain Key

Used heavily in:
- Data-driven testing
- API response validation

---

## String Library

Used for string manipulation.

Common keywords:
- Replace String
- Split String
- Convert To Upper Case
- Should Be Equal As Strings

Helpful for:
- Dynamic data handling
- Response parsing

---

## OperatingSystem Library

Used for file system and OS-level operations.

Common keywords:
- File Should Exist
- Remove File
- Create Directory
- Run

Used in:
- File uploads/downloads
- Report handling
- CI/CD pipelines

---

## DateTime Library

Used for date and time operations.

Common keywords:
- Get Current Date
- Convert Date
- Add Time To Date

Useful for:
- Timestamp validation
- Time-based test data

---

## Process Library

Used to execute external commands and processes.

Common keywords:
- Run Process
- Start Process
- Terminate Process

Used in:
- Starting/stopping services
- Integration testing
- CI workflows

---

## Best Practices ✅

- Prefer built-in libraries over custom code
- Keep usage readable
- Combine with user-defined keywords
- Avoid overcomplicating simple operations

---

## Common Mistakes ❌

- Writing custom Python for simple tasks
- Ignoring built-in capabilities
- Misusing OS/process commands in tests

---

## Key Takeaways

- Built-in libraries are powerful and stable
- They cover most common automation needs
- Essential for clean framework design

---

## What’s Next?

👉 **Control Flow and Error Handling**
