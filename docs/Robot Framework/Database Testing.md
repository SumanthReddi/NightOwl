---
sidebar_position: 14
---

# Database Testing

Database testing in Robot Framework is used to **validate backend data**
after UI or API operations. It is commonly used for **integration validation**
rather than full-scale database testing.

---

## Database Testing in Automation Context

Automation engineers use database testing to:
- Verify data persistence
- Validate API side effects
- Confirm UI actions reflect in DB
- Cross-check business rules

Robot Framework supports DB testing via **DatabaseLibrary** and similar libraries.

---

## DatabaseLibrary Overview

DatabaseLibrary allows:
- Connecting to databases
- Executing SQL queries
- Fetching and validating results

Supported databases:
- Oracle
- MySQL
- PostgreSQL
- SQL Server
- SQLite

---

## Connecting to a Database

```robot
Connect To Database    pymysql    dbname    user    password    host    port
```

Connection is usually done in:
- Suite Setup
- Test Setup (if isolation is needed)

---

## Executing Queries

### SELECT Queries (Most Common)

```robot
${result}=    Query    SELECT * FROM users WHERE id=1
```

Used for:
- Validation
- Data verification
- Assertions

---

### INSERT / UPDATE / DELETE (Awareness Only)

Automation tests should **avoid destructive operations** unless:
- Test data is isolated
- Transactions are rolled back

Read-only validation is preferred.

---

## Result Validation

Query results are returned as:
- Lists of tuples

Validation examples:
```robot
Should Not Be Empty    ${result}
```

---

## Database Testing Best Practices

- Use DB validation only when needed
- Prefer API validation first
- Avoid hardcoded data
- Clean up test data if created
- Use read-only queries

---

## Common Mistakes ❌

- Running destructive queries in shared DB
- Hardcoding credentials
- Overusing DB validation
- Skipping cleanup

---

## Key Takeaways

- Database testing supports backend validation
- DatabaseLibrary enables SQL execution
- Use DB checks responsibly
- Combine with API/UI tests

---

## What’s Next?

👉 **Data Driven Testing**
