---
sidebar_position: 13
---

# API Automation with RequestsLibrary

RequestsLibrary enables **REST API automation** in Robot Framework by providing
high-level keywords on top of Python’s Requests library.

It is commonly used for **API testing, integration testing, and backend validation**
in automation frameworks.

---

## What is RequestsLibrary?

RequestsLibrary:
- Wraps Python Requests
- Provides session-based API testing
- Integrates cleanly with Robot Framework

Used for:
- REST API automation
- Backend validation
- API + UI hybrid testing

---

## Creating API Sessions

Sessions allow reuse of base URLs and headers.

```robot
Create Session    mysession    https://api.example.com
```

Benefits:
- Cleaner test cases
- Reusable configuration
- Better performance

---

## HTTP Methods

### GET Request
```robot
${response}=    GET On Session    mysession    /users
```

### POST Request
```robot
${response}=    POST On Session    mysession    /users    json=${payload}
```

### PUT / PATCH / DELETE
Used for update and delete operations.

---

## Headers and Payloads

Headers:
```robot
&{headers}=    Create Dictionary    Content-Type=application/json
```

Payloads:
- JSON dictionaries
- External JSON files
- Dynamic data

---

## Response Validation

Common validations:
- Status code
- Response body
- Headers

Example:
```robot
Should Be Equal As Integers    ${response.status_code}    200
```

---

## JSON Parsing

Use built-in and Collections library to parse JSON responses.

Common use cases:
- Field-level validation
- Extracting IDs for next calls

---

## API Test Design Best Practices

- Keep API logic in keywords
- Use sessions consistently
- Validate business behavior
- Avoid UI-style waits

---

## Common Mistakes ❌

- Hardcoding URLs
- No session usage
- Over-validating response structure
- Mixing UI and API logic

---

## Key Takeaways

- RequestsLibrary enables API automation
- Session-based execution is recommended
- Clean validations improve reliability
- API tests are CI-friendly