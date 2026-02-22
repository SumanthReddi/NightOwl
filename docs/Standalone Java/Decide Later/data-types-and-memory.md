---
sidebar_position: 1
title: Data Types and Memory
---

## Data Types and Memory in Java (How Java Stores Data)

### Why This File Exists
Many Java confusions come from **not knowing where data lives**.

This file explains:
- What data types Java has
- How memory is used for each type
- Why Java behaves differently for primitives vs objects

This is **pure Java language knowledge**, required before OOP and collections.

---

## Java Data Types (Big Picture)

Java data types fall into **two categories**:

1. **Primitive data types**
2. **Reference data types**

This distinction is critical for understanding memory, performance, and behavior.

---

## Primitive Data Types

### What Are Primitives
Primitives store **actual values**, not references.

Common primitives:
- `int`
- `long`
- `double`
- `float`
- `char`
- `boolean`
- `byte`
- `short`

Example:
```java
int x = 10;
```

Here:
- `x` directly stores the value `10`

---

## Primitive Memory Behavior

- Primitives are stored in **stack memory** (for local variables)
- They are fast
- They have fixed size
- They cannot be `null`

This makes primitives:
✔ predictable  
✔ efficient  

---

## Reference Data Types

### What Are References
Reference types store **memory addresses**, not actual objects.

Examples:
- `String`
- arrays
- classes
- interfaces

Example:
```java
String name = "Java";
```

Here:
- `name` stores a reference
- actual object lives elsewhere

---

## Heap vs Stack (Simple View)

### Stack
- Stores local variables
- Stores method calls
- Fast access
- Automatically cleaned

### Heap
- Stores objects
- Shared across methods
- Managed by Garbage Collector

Reference variables usually live on stack,
objects live on heap.

---

## Example: Primitive vs Reference

```java
int a = 10;
int b = a;
b = 20;
```

Result:
- `a` remains `10`
- values are copied

```java
Person p1 = new Person();
Person p2 = p1;
p2.name = "John";
```

Result:
- `p1.name` becomes `"John"`
- reference is copied, not object

---

## Default Values

- Primitives have default values **only for fields**
- Local variables must be initialized

Example:
```java
int x;      // ❌ compile-time error
int y = 0;  // ✔
```

Objects default to `null`.

---

## Why This Matters

Understanding data types and memory helps you:
- avoid bugs
- understand parameter passing
- reason about performance
- prepare for JVM topics

Without this clarity, Java feels inconsistent.

---

## Common Mistakes

- Assuming objects are copied
- Confusing reference with object
- Expecting local variables to have defaults
- Misunderstanding stack vs heap

---

## Best Practices

- Use primitives when possible
- Understand reference sharing
- Avoid unnecessary object creation
- Learn memory concepts early

---

## Interview Notes

- Primitive vs reference data types
- Stack vs heap memory
- Default values in Java
- Why object references behave differently

---

## Summary

Java behaves consistently once you understand:
- what stores values
- what stores references
- where memory is allocated

Memory model explains Java behavior.
