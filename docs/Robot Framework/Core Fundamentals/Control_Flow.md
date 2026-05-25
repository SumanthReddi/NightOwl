---
sidebar_position: 4
title: Control Flow
description: Loops, conditions and execution control in Robot Framework
tags:
  - robotframework
  - loops
  - conditions
  - controlflow
---

# 🔄 Control Flow

> Control flow determines how Robot Framework executes logic using conditions, loops and execution decisions.

---

## 🎯 Why This Matters

Real automation frameworks are rarely linear.

Applications behave differently depending on:

- Test data
- Environment
- API responses
- User states
- Business rules

Control flow allows tests to adapt dynamically.

:::info

Without control flow, every scenario requires a separate test case.

:::

---

## 🧠 Quick Memory Rule

:::tip

Memory Formula

Condition → Decide

Loop → Repeat

Control Keyword → Direct execution

:::

---

## 📘 Types of Control Flow

Robot Framework supports:

- IF / ELSE
- FOR loops
- WHILE loops
- BREAK
- CONTINUE
- Run Keyword If
- Exit keywords

---

## 🏗 Execution Flow

```text
Test Starts
      ↓
Evaluate Condition
      ↓
TRUE ?
 ↓           ↓
YES         NO
 ↓           ↓
Execute    Execute
Path A     Path B
```

---

## 📚 IF ELSE Statements

Used when execution depends on conditions.

Example:

```robot
IF    ${status}=="Approved"

     Log    Application Approved

ELSE

     Log    Application Rejected

END
```

---

## 🔁 FOR Loop

FOR loops repeat actions.

Example:

```robot
FOR    ${user}    IN

...    user1
...    user2
...    user3

    Log     ${user}

END
```

---

## 🔄 WHILE Loop

WHILE repeats until a condition becomes false.

```robot
WHILE    ${count}<5

     Log    ${count}

END
```

---

## ⛔ BREAK and CONTINUE

BREAK exits loop.

CONTINUE skips current iteration.

```robot
BREAK

CONTINUE
```

---

## 📚 Run Keyword If

Legacy and still seen in many frameworks.

```robot
Run Keyword If
...    ${status}
...    Log
...    Success
```

---

## 🔥 Real Project Example

:::note

Credit card fulfillment:

Different applications follow different flows.

Pre-approved users:

Direct submission

Regular users:

Additional verification

Conditional execution handles this efficiently.

:::

---

## ⚖️ Comparison

| Type | Usage |
|---|---|
| IF | Conditional path |
| FOR | Repeat known items |
| WHILE | Repeat until condition |
| BREAK | Exit loop |
| CONTINUE | Skip iteration |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Nested loops everywhere
- Huge IF conditions
- Infinite WHILE loops
- Business logic duplication

:::

---

## 🎤 Interview Questions

<details>
<summary>Difference between FOR and WHILE?</summary>

FOR executes known iterations.

WHILE executes until a condition changes.

</details>

<details>
<summary>Why avoid deeply nested loops?</summary>

Maintenance and debugging become difficult.

</details>

---

## ⚡ Cheat Sheet

```robot
IF

ELSE

FOR

WHILE

BREAK

CONTINUE

Run Keyword If
```

---

## 🔗 Related Notes

- Syntax & Keywords
- Framework Design
- BuiltIn Utilities
