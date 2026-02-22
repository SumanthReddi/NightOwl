---
sidebar_position: 2
title: Variables and Scope
---

## Variables and Scope in Java (Lifetime, Visibility, and Behavior)

### Why This File Exists
Many Java bugs happen not because of logic, but because of **wrong assumptions about variable scope and lifetime**.

This file explains:
- Types of variables in Java
- Where each variable lives
- How long each variable exists
- Why scope rules matter

This knowledge is foundational for methods, OOP, and debugging.

---

## Types of Variables in Java (Big Picture)

Java has **four main variable types**:

1. Local variables  
2. Instance variables  
3. Static variables  
4. Parameters  

Each behaves differently.

---

## 1. Local Variables

### What They Are
- Declared inside methods, blocks, or constructors
- Exist only within that block

Example:
```java
void calculate() {
    int sum = 10;
}
```

### Characteristics
- Stored in stack
- No default values
- Must be initialized before use
- Destroyed when method ends

---

## 2. Instance Variables

### What They Are
- Declared inside a class
- Outside methods
- Belong to object instances

Example:
```java
class User {
    String name;
}
```

### Characteristics
- Stored on heap (as part of object)
- Have default values (`null`, `0`, `false`)
- Created when object is created
- Destroyed when object is garbage collected

---

## 3. Static Variables

### What They Are
- Declared with `static` keyword
- Belong to the class, not objects

Example:
```java
class Config {
    static String env = "QA";
}
```

### Characteristics
- One copy per class
- Loaded when class is loaded
- Lives for entire application lifecycle
- Shared across all instances

---

## 4. Method Parameters

### What They Are
- Variables passed to methods

Example:
```java
void login(String username) {
}
```

### Characteristics
- Treated like local variables
- Exist only during method execution

---

## Scope Rules (Visibility)

Scope defines **where a variable can be accessed**.

```java
if (true) {
    int x = 10;
}
// x is NOT accessible here
```

Variables are visible:
- only within their declared block
- not outside braces `{}`

---

## Variable Shadowing

### What Is Shadowing
When a local variable has the same name as an instance variable.

Example:
```java
class User {
    String name;

    void setName(String name) {
        this.name = name;
    }
}
```

Without `this`, instance variable would be hidden.

---

## Lifetime Summary Table

| Variable Type | Memory | Lifetime |
|-------------|--------|----------|
| Local | Stack | Method execution |
| Instance | Heap | Object lifetime |
| Static | Heap (class) | Application lifetime |
| Parameter | Stack | Method execution |

---

## Why Scope Matters

Understanding scope helps you:
- avoid unexpected values
- write thread-safe code later
- debug effectively
- design clean classes

---

## Common Mistakes

- Assuming local variables have default values
- Overusing static variables
- Forgetting variable shadowing
- Misunderstanding variable lifetime

---

## Best Practices

- Keep variable scope as small as possible
- Avoid unnecessary static variables
- Use meaningful variable names
- Be explicit when shadowing (`this`)

---

## Interview Notes

- Types of variables in Java
- Difference between instance and static variables
- Variable scope rules
- What is variable shadowing?
- Lifetime of variables

---

## Summary

Variables differ by:
- where they live
- how long they live
- who can access them

Understanding scope prevents subtle bugs.
