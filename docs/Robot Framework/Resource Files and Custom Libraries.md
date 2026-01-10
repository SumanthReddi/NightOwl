---
sidebar_position: 16
---

# Resource Files and Custom Libraries

Resource files and custom libraries are essential for building **scalable and maintainable**
Robot Framework automation frameworks.

They help enforce **separation of concerns** and reduce duplication.

---

## Resource Files

Resource files are `.robot` files that contain:
- Reusable keywords
- Shared variables

They are imported using the `Resource` setting.

```robot
*** Settings ***
Resource    common_keywords.robot
```

---

## Why Use Resource Files?

- Share keywords across test suites
- Centralize common logic
- Improve maintainability
- Keep test cases clean

---

## What Should Go Into Resource Files

- Common workflows
- Business-level actions
- Reusable validations
- Shared setup logic

---

## What Should NOT Go Into Resource Files ❌

- Test case definitions
- Highly test-specific logic
- Environment-specific data

---

## Resource Files vs Libraries

| Resource File | Library |
|---|---|
| Written in Robot syntax | Written in Python/Java |
| Easy to read | More powerful |
| Good for reuse | Good for complex logic |

Use resource files first, libraries when needed.

---

## Custom Libraries

Custom libraries are written in:
- Python (most common)
- Java (via Jython or remote libraries)

Used when:
- Built-in keywords are insufficient
- Complex logic is required
- External systems need integration

---

## Exposing Python Methods as Keywords

Python methods automatically become Robot keywords.

```python
def login_user(username, password):
    pass
```

Used directly in Robot tests.

---

## Best Practices ✅

- Keep resource files small and focused
- Avoid circular dependencies
- Use libraries for heavy logic
- Follow naming conventions

---

## Common Mistakes ❌

- Overloading resource files
- Mixing responsibilities
- Writing business logic in Python unnecessarily

---

## Key Takeaways

- Resource files promote reuse
- Custom libraries extend capabilities
- Separation of concerns is critical
- Clean design improves scalability

---

## What’s Next?

👉 **Execution, Reports and CI/CD**
