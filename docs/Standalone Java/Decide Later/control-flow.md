---
sidebar_position: 5
---

# Control Flow Statements in Java (Directing Program Execution)

## Why This File Exists
Control flow decides **which code runs, when, and how often**.

Many bugs happen due to:
- wrong conditions
- misplaced loops
- misunderstanding `break` and `continue`

This file explains **how Java executes decisions and loops**, clearly and predictably.

---

## Categories of Control Flow

Java control flow can be grouped into:

1. Conditional statements  
2. Looping statements  
3. Jump statements  

Each category controls execution differently.

---

## 1. Conditional Statements

### if / else

Used to execute code based on conditions.

```java
if (age >= 18) {
    vote();
} else {
    deny();
}
```

Rules:
- Condition must be boolean
- Only one block executes

---

### else-if Ladder

```java
if (score >= 90) {
    grade = "A";
} else if (score >= 75) {
    grade = "B";
} else {
    grade = "C";
}
```

Evaluated **top to bottom**.

---

## switch Statement

### Traditional switch

```java
switch (day) {
    case 1:
        print("Mon");
        break;
    case 2:
        print("Tue");
        break;
    default:
        print("Unknown");
}
```

⚠️ `break` is mandatory to prevent fall-through.

---

### Modern switch (Java 14+)

```java
String dayName = switch (day) {
    case 1 -> "Mon";
    case 2 -> "Tue";
    default -> "Unknown";
};
```

Benefits:
- No fall-through
- More readable
- Expression-based

---

## 2. Looping Statements

### for Loop

```java
for (int i = 0; i < 5; i++) {
    print(i);
}
```

Use when:
- iteration count is known

---

### while Loop

```java
while (condition) {
    execute();
}
```

Use when:
- condition-based looping is needed

---

### do-while Loop

```java
do {
    execute();
} while (condition);
```

Executes **at least once**, even if condition is false.

---

## Enhanced for-each Loop

```java
for (String name : names) {
    print(name);
}
```

Use for:
- iterating collections or arrays
- readability

Avoid when:
- index access is required

---

## 3. Jump Statements

### break

Exits loop or switch.

```java
if (found) {
    break;
}
```

---

### continue

Skips current iteration.

```java
if (value < 0) {
    continue;
}
```

---

### return

Exits method entirely.

```java
return result;
```

---

## Nested Control Flow

Control statements can be nested:

```java
for (...) {
    if (...) {
        while (...) {
        }
    }
}
```

⚠️ Deep nesting reduces readability.

---

## Common Mistakes

- Forgetting `break` in switch
- Infinite loops due to wrong condition
- Overusing nested loops
- Misusing `continue`
- Writing complex conditions

---

## Best Practices

- Keep conditions simple
- Prefer early returns
- Avoid deep nesting
- Use enhanced for-loop for readability
- Use modern switch when possible

---

## Interview Notes

- Difference between `while` and `do-while`
- Switch fall-through behavior
- When to use for vs while
- `break` vs `continue`
- Modern switch advantages

---

## Summary

Control flow determines:
- decision making
- repetition
- exit paths

Clear control flow = predictable programs.
