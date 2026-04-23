---
sidebar_position: 2
title: Database Connectivity (Oracle / MySQL / PostgreSQL)
description: Learn how to connect Robot Framework to Oracle, MySQL, and PostgreSQL using DatabaseLibrary with secure configs, reusable patterns, and production-ready practices.
---

# Robot Framework: Database Connectivity (Oracle / MySQL / PostgreSQL)

> Reliable database testing starts with reliable database connectivity.

---

## 🎯 Why This Matters

Many database test failures are caused by:

- wrong drivers  
- invalid credentials  
- firewall / network issues  
- hardcoded configs  
- environment mismatch  
- missing client libraries  
- poor connection lifecycle handling

> Often the database is healthy.  
> The connection strategy is not.

---

# 🤖 Supported Databases in Real Projects

Common enterprise databases:

- Oracle  
- MySQL / MariaDB  
- PostgreSQL  
- SQL Server  
- SQLite (local testing)

This guide focuses on:

- Oracle  
- MySQL  
- PostgreSQL

---

# 🧱 Production Connectivity Model

```text
Layer 1 → Correct Driver
Layer 2 → Secure Configuration
Layer 3 → Reusable Connection Keywords
Layer 4 → Validation & Troubleshooting
Layer 5 → CI/CD Environment Support
```

---

# ⚙️ Robot Framework Library

```robotframework
*** Settings ***
Library    DatabaseLibrary
```

---

# 1️⃣ MySQL Connectivity

## Common Drivers

- pymysql  
- mysqlclient

## Example

```robotframework
Connect To Database
...    pymysql
...    ${DB_NAME}
...    ${DB_USER}
...    ${DB_PASSWORD}
...    ${DB_HOST}
...    ${DB_PORT}
```

---

## Query Example

```robotframework
${rows}=    Query    SELECT id,name FROM users
Length Should Be    ${rows}    5
```

---

# 2️⃣ PostgreSQL Connectivity

## Common Driver

- psycopg2

## Example

```robotframework
Connect To Database
...    psycopg2
...    ${DB_NAME}
...    ${DB_USER}
...    ${DB_PASSWORD}
...    ${DB_HOST}
...    ${DB_PORT}
```

---

## Query Example

```robotframework
${rows}=    Query    SELECT status FROM orders WHERE id=101
Should Be Equal    ${rows[0][0]}    COMPLETED
```

---

# 3️⃣ Oracle Connectivity

## Common Drivers

- oracledb (modern preferred)
- cx_Oracle (legacy/common older setups)

## Example

```robotframework
Connect To Database
...    oracledb
...    ${SERVICE_NAME}
...    ${DB_USER}
...    ${DB_PASSWORD}
...    ${DB_HOST}
...    ${DB_PORT}
```

---

## Query Example

```robotframework
${rows}=    Query    SELECT RES_NO FROM APPLICATIONS WHERE ID=101
Length Should Be    ${rows}    1
```

---

# 🏢 Real Project Example

A test passed UI submission, but account was never created.

DB validation on Oracle showed:

```text
No record inserted
```

UI-only automation missed it.  
DB connectivity exposed it immediately.

---

# 🔐 Secure Configuration

Never hardcode credentials.

❌ Bad:

```robotframework
${DB_PASSWORD}=    Welcome123
```

✅ Better:

```robotframework
${DB_PASSWORD}=    %{DB_PASSWORD}
```

Use:

- CI secret variables  
- Vault tools  
- Jenkins credentials  
- GitLab masked vars

---

# 📁 Recommended Variable File

```text
resources/variables/db.robot
```

```robotframework
*** Variables ***
${DB_TYPE}        oracle
${DB_HOST}        localhost
${DB_PORT}        1521
${DB_NAME}        testdb
${DB_USER}        qa_user
${DB_PASSWORD}    %{DB_PASSWORD}
```

---

# 🔁 Reusable Connection Keyword

```robotframework
*** Keywords ***
Open Database Connection
    Run Keyword If    '${DB_TYPE}' == 'mysql'
    ...    Connect To Database    pymysql    ${DB_NAME}    ${DB_USER}    ${DB_PASSWORD}    ${DB_HOST}    ${DB_PORT}

    ...    ELSE IF    '${DB_TYPE}' == 'postgres'
    ...    Connect To Database    psycopg2    ${DB_NAME}    ${DB_USER}    ${DB_PASSWORD}    ${DB_HOST}    ${DB_PORT}

    ...    ELSE
    ...    Connect To Database    oracledb    ${DB_NAME}    ${DB_USER}    ${DB_PASSWORD}    ${DB_HOST}    ${DB_PORT}
```

---

# 🔄 Proper Lifecycle Handling

## Suite Level

```robotframework
Suite Setup       Open Database Connection
Suite Teardown    Disconnect From Database
```

Avoid opening/closing repeatedly when not needed.

---

# 🚀 CI/CD Usage

Useful in:

- nightly regression  
- smoke validation after deploy  
- data reconciliation checks  
- backend sanity tests

Use environment variables for host/user/password.

---

# ⚠️ Common Connectivity Issues

## Driver Not Installed

```text
ModuleNotFoundError
```

Install required Python package.

## Firewall / Network Block

Cannot reach DB host.

## Wrong Port

MySQL often 3306  
Postgres often 5432  
Oracle often 1521

## Oracle Client Issues

Some environments require extra client setup.

## Invalid Credentials

Expired password / locked user.

---

# 🔍 Troubleshooting Pattern

Start simple:

```robotframework
Connect To Database
Query    SELECT 1
```

Then expand.

---

# 📄 Query Best Practices

Use targeted queries.

❌ Bad:

```sql
SELECT *
```

✅ Better:

```sql
SELECT status FROM orders WHERE id=101
```

Faster and clearer.

---

# ⚠️ Parallel Execution Notes

Avoid all tests using same records.

Use:

- unique IDs  
- isolated rows  
- cleanup after tests

---

# ❌ Common Mistakes

### Hardcoded Passwords

Security risk.

### No Disconnect

Leaked sessions.

### Wrong Driver

Connection fails.

### Shared Static Test Data

Parallel conflicts.

### Huge Complex SQL in Tests

Move to reusable keywords.

---

# ✅ Best Practices

- Externalize credentials  
- Use reusable connection keywords  
- Validate with simple smoke query first  
- Use suite setup when practical  
- Keep DB checks focused on business value  
- Separate environment configs  
- Clean test data after execution

---

# 🔧 Practical Examples

## Smoke Query

```robotframework
${rows}=    Query    SELECT 1
```

## Verify User Exists

```robotframework
${rows}=    Query
...    SELECT username FROM users WHERE id=101
```

## Verify Status

```robotframework
Should Be Equal    ${rows[0][0]}    ACTIVE
```

---

# 📈 Maturity Model

## Beginner

Single DB connection + simple queries.

## Intermediate

Reusable keywords + env configs.

## Advanced

Multi-DB support + CI integration + cleanup strategy.

## Expert

Enterprise DB validation layer across systems.

---

# 💡 My Practical Opinion

When teams say:

> “Database tests are flaky.”

I inspect:

- connection config  
- credentials  
- network access  
- stale shared data  
- driver mismatch

Usually not the database itself.

---

# 🏁 Final Verdict

Strong database connectivity enables trustworthy backend validation.

Good implementation gives:

- stable DB tests  
- faster debugging  
- multi-environment support  
- stronger regression confidence  
- better production trust

---

# 📚 What To Learn Next

1. Query Execution & Validation  
2. Result Comparison Techniques  
3. Backend Data Verification  
4. Transaction Management  
5. Hybrid UI + API + DB Testing

---

## Summary

> Before validating data, first make connectivity reliable.
