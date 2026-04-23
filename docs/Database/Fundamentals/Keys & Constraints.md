---
sidebar_position: 3
title: Keys & Constraints
---

# Keys & Constraints

> Understand how data is **identified, related, and protected** inside a database.

For automation testers, this topic helps in writing accurate queries, validating relationships, and debugging backend failures.

## 🎯 Why This Matters

Keys and constraints help you:

- Fetch exact records safely
- Join tables correctly
- Prevent false validations
- Understand insert/update failures
- Improve debugging confidence

---

# Keys

## 📌 What are Keys?

Keys are columns used to uniquely identify rows or connect tables.

> 💡 **Memory Trick:** Keys = Identity + Relationships

## 🆔 Primary Key (PK)

A **Primary Key** uniquely identifies each row in a table.

### Example

```text
USERS
--------------------------------
| user_id (PK) | username |
--------------------------------
| 101          | john     |
| 102          | mary     |
```

### Rules

- Must be unique
- Cannot be NULL
- One primary key per table (can be composite)

### Tester Importance

- Fetch exact rows
- Avoid duplicate validations
- Use reliable WHERE clauses

### Query Example

❌ Weak query:

```sql
SELECT * FROM users LIMIT 1;
```

✅ Better query:

```sql
SELECT *
FROM users
WHERE user_id = 101;
```

## 🔗 Foreign Key (FK)

A **Foreign Key** links one table to another.

### Example

```text
orders.user_id → users.user_id
```

This means every order belongs to a valid user.

### Tester Importance

- Validate parent-child records
- Detect orphan data
- Verify backend consistency

### Real Scenario

When a user places an order:

- Order record is created
- Linked to user using `user_id`

Validation checks:

- Order exists
- User exists
- Relationship is correct

## ⚖️ PK vs FK

| Aspect | Primary Key | Foreign Key |
|---|---|---|
| Purpose | Identify row | Link tables |
| Unique | Must be unique | Can repeat |
| NULL Allowed | No | Sometimes |
| Used in WHERE | Very common | Common |
| Used in JOINS | Yes | Yes |

## 🧩 Composite Key

A key created using multiple columns.

```text
(order_id, product_id)
```

Used when one column alone is not enough.

> 💡 Common in mapping tables and transactional systems.

---

# Constraints

## 📌 What is a Constraint?

A **constraint** is a rule that controls what data can be stored.

> 💡 **Memory Trick:** Constraints = Safety Guards

## 🎯 Why Constraints Matter

When constraints fail:

- Database throws errors
- UI may show generic messages
- API requests may fail
- Tests may fail unexpectedly

Knowing constraints improves root cause analysis.

## 🚫 NOT NULL

Prevents missing values.

```sql
email VARCHAR NOT NULL
```

### Meaning

Every row must contain an email value.

### Tester Example

Submitting a mandatory field as blank.

## 🔁 UNIQUE

Prevents duplicate values.

```sql
email VARCHAR UNIQUE
```

### Meaning

Same email cannot exist twice.

### Tester Example

Duplicate user registration scenario.

## ✅ CHECK

Restricts allowed values.

```sql
status CHECK (status IN ('ACTIVE','INACTIVE','BLOCKED'))
```

### Meaning

Only approved values can be stored.

### Tester Example

Invalid status update rejected.

## ⚠️ Common Constraint Errors

Examples:

- Unique constraint violated
- Cannot insert NULL
- Check constraint failed

> 💡 UI may hide real cause. DB logs often reveal truth.

## ⚖️ Application vs Database Validation

| Validation Type | Application | Database |
|---|---|---|
| User Friendly Errors | Yes | No |
| Final Protection | Partial | Yes |
| Can Be Bypassed | Sometimes | No |

> 🔥 Database constraints are the final authority.

## ⚠️ Common Mistakes

- Ignoring primary keys
- Querying by non-unique columns
- Reusing duplicate test data
- Misreading constraint errors
- Ignoring foreign key relationships

## ✅ Best Practices

- Identify primary key first
- Use PK in WHERE clauses
- Understand FK before joins
- Use unique test data
- Validate negative scenarios intentionally
- Include DB error evidence in defect reports

---

## 🔑 Key Takeaways

- PK uniquely identifies rows
- FK links related tables
- Constraints protect data quality
- Keys improve query accuracy
- Constraints explain backend failures
- Essential for joins, debugging, and testing
