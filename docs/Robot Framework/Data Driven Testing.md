---
sidebar_position: 15
---

# Data Driven Testing

Data-driven testing allows the same test logic to run with **multiple data sets**.
Robot Framework provides powerful, built-in support for data-driven testing
without complex coding.

---

## Why Data Driven Testing?

Without data-driven testing:
- Tests are duplicated
- Maintenance effort increases
- Coverage is limited

With data-driven testing:
- One test covers many scenarios
- Data changes without changing logic
- Tests scale easily

---

## Data Driven Approaches in Robot Framework

Robot Framework supports multiple data-driven approaches.

---

## Test Templates (Most Common)

Test Templates allow defining test logic once and passing data dynamically.

### Example

```robot
*** Test Cases ***
Valid Login
    [Template]    Login With Credentials
    admin    secret
    user1    password1

*** Keywords ***
Login With Credentials
    [Arguments]    ${username}    ${password}
    Log    Logging in with ${username}
```

Used heavily in:
- Login tests
- API payload validation
- Input variation testing

---

## FOR Loop Based Data Driven Testing

Used when test logic requires loops.

```robot
FOR    ${user}    IN    @{USERS}
    Log    ${user}
END
```

Better for:
- Iterative validations
- Complex logic

---

## External Data Sources

Robot Framework supports external data from:
- CSV files
- Excel files
- Variable files
- Python libraries

Used for:
- Large datasets
- Environment-based data

---

## Template vs FOR Loop

| Template | FOR Loop |
|---|---|
| Cleaner | More flexible |
| Declarative | Procedural |
| Preferred | Use when needed |

---

## Data Driven Best Practices

- Prefer templates for clarity
- Externalize large datasets
- Keep logic inside keywords
- Avoid hardcoding data

---

## Common Mistakes ❌

- Overusing loops
- Mixing logic with data
- Hardcoding datasets
- Creating unreadable tests

---

## Key Takeaways

- Robot Framework excels at data-driven testing
- Test Templates are preferred
- FOR loops handle complex cases
- Clean separation improves maintainability
