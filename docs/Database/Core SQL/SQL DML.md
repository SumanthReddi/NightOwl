---
sidebar_position: 5
title: SQL DML
---

# SQL DML

> **DML (Data Manipulation Language)** is used to work with data inside tables.

It includes the commands used to **insert, update, delete, and read records**.

For automation testers, DML is important mainly for **test data setup, cleanup, and controlled validation support**.

---

## 📌 Core DML Commands

| Command | Purpose |
|---|---|
| `SELECT` | Read existing data |
| `INSERT` | Add new rows |
| `UPDATE` | Modify existing rows |
| `DELETE` | Remove rows |

> 💡 In most QA projects, `SELECT` is used the most.

---

## INSERT

Used to create new rows in a table.

### Example

```sql
INSERT INTO users (user_id, username, status)
VALUES (201, 'test_user', 'ACTIVE');
```

### Common Tester Usage

- Create test users
- Seed preconditions
- Prepare scenario data

### Caution

- Duplicate records may occur
- Shared environment may get polluted

---

## UPDATE

Used to modify existing records.

### Example

```sql
UPDATE users
SET status = 'BLOCKED'
WHERE user_id = 201;
```

### Common Tester Usage

- Simulate blocked user
- Change account state
- Prepare negative scenarios

### Important Rule

Always use a `WHERE` clause.

```sql
UPDATE users
SET status = 'BLOCKED';
```

The above query updates **all rows**.

---

## DELETE

Used to remove records from a table.

### Example

```sql
DELETE FROM users
WHERE user_id = 201;
```

### Common Tester Usage

- Remove temporary test data
- Cleanup records after execution

### Important Rule

Use carefully and target exact rows.

```sql
DELETE FROM users;
```

The above query deletes **all rows**.

---

## Transactions & Rollback

Some databases allow undoing changes before commit.

```sql
ROLLBACK;
```

### Why It Matters

- Uncommitted data may not be visible
- Failed tests may leave partial data
- Auto-commit behavior differs by system

---

## Recommended Tester Approach

Use business flows first, database changes second.

```text
UI / API Action
      ↓
Validate using SELECT
      ↓
Use DML only when setup is required
```

---

## Safer Alternatives

Instead of direct DB writes, prefer:

- API-based data creation
- Test data utilities
- Reset scripts
- Soft-delete flags

---

## Common Mistakes

- Running UPDATE without WHERE
- Running DELETE without WHERE
- Reusing same test data
- Assuming auto-commit
- Using DML in shared environments

---

## Best Practices

- Prefer read-only DB access
- Keep DML limited to setup
- Use unique data values
- Clean data after tests
- Log affected row counts
- Never run DML in production

---

## Key Takeaways

- DML changes actual data
- INSERT adds rows
- UPDATE modifies rows
- DELETE removes rows
- Use carefully in test environments
- Validation should mostly rely on SELECT
