---
sidebar_position: 11
---

# JDBC for Automation Testing (Backend & Database Validation)

## Priority
FRAMEWORK_CORE

---

## Context (Why this topic exists NOW)
At this stage, your automation framework:
- validates UI behavior
- handles configurations
- runs reliably in CI

But a critical question appears:
**Did the system actually save the data correctly?**

Selenium can only validate what is visible on the UI.
Java JDBC exists to validate **what is stored in the backend database**.

---

## What Selenium Cannot Do (The Gap)
Selenium can:
- verify UI messages
- validate screen-level behavior

Selenium cannot:
- read database records
- validate backend state
- verify audit or transaction data

This creates false confidence:
❌ UI success but DB failure  
❌ Data inconsistencies not detected  

---

## What Java JDBC Adds (The Fix)
JDBC allows automation to:
- connect to databases
- execute SQL queries
- validate persisted data
- ensure end-to-end correctness

In simple words:
> Selenium checks what the user sees.  
> JDBC checks what the system actually stored.

---

## What is JDBC (Automation View)
JDBC (Java Database Connectivity) is a Java API
used to interact with relational databases using SQL.

In automation:
- JDBC is used only for **validation**
- Never for data manipulation

---

## JDBC Core Flow (Must Know)

1. Load driver  
2. Create connection  
3. Execute query  
4. Process results  
5. Close resources  

```java
Connection conn = DriverManager.getConnection(url, user, password);
PreparedStatement stmt = conn.prepareStatement(query);
ResultSet rs = stmt.executeQuery();
```

---

## Why PreparedStatement (Always Use This)

### Automation Problem
Using plain SQL strings leads to:
- SQL injection risks
- parsing errors

### Java Fix
```java
PreparedStatement stmt =
    conn.prepareStatement("SELECT status FROM orders WHERE id = ?");
stmt.setInt(1, orderId);
```

PreparedStatement is:
- safer
- faster
- cleaner

---

## Reading Data from ResultSet

```java
if (rs.next()) {
    String status = rs.getString("status");
    Assert.assertEquals(status, "SUCCESS");
}
```

ResultSet allows:
- column-based access
- row-by-row validation

---

## Transactions (Conceptual Understanding)

### Automation Reality
- Most validations are read-only
- Transactions are rarely controlled manually

Know that:
- Auto-commit exists
- Rollback is rarely needed in automation

---

## Where JDBC Is Used in Automation

- Verify account creation
- Validate transaction status
- Check audit tables
- Confirm API side effects

JDBC is used **after UI or API actions**.

---

## Real Automation Example

```java
String query =
    "SELECT status FROM applications WHERE reservation_id = ?";

PreparedStatement stmt = conn.prepareStatement(query);
stmt.setString(1, reservationId);

ResultSet rs = stmt.executeQuery();

Assert.assertTrue(rs.next());
Assert.assertEquals(rs.getString("status"), "APPROVED");
```

This validates:
- UI action
- backend persistence

---

## Resource Management (Very Important)

### Automation Problem
DB connections left open.

### Java Fix
Use try-with-resources.

```java
try (Connection conn = getConnection();
     PreparedStatement stmt = conn.prepareStatement(query);
     ResultSet rs = stmt.executeQuery()) {
    // validation
}
```

Prevents:
- connection leaks
- CI failures

---

## Common Mistakes (Very Common)

- Hardcoding DB credentials
- Using Statement instead of PreparedStatement
- Leaving connections open
- Writing data to DB in tests
- Overusing DB validations

---

## Best Practices (Automation-Approved)

- Use JDBC only for validation
- Externalize DB configs
- Always close connections
- Validate only critical data
- Keep DB logic out of test classes

---

## Interview Notes

- Why JDBC is used in automation
- Selenium vs JDBC responsibilities
- PreparedStatement vs Statement
- ResultSet usage
- Resource management importance

---

## Summary (Human Understanding)
Selenium tells you the UI worked.
JDBC tells you the system worked.

True end-to-end automation
requires both.
