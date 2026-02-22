---
sidebar_position: 6
title: Method and Method Overloading
---

## Method and Method Overloading in Java (How Behavior Is Defined)


### Why This File Exists
Methods define **what a program does**.

Many Java confusions come from:
- misunderstanding method signatures
- incorrect assumptions about overloading
- confusion between compile-time and runtime behavior

This file explains **how methods work in Java**, clearly and predictably.

---

## What Is a Method

A method is a **block of code** that:
- performs a specific task
- can take input (parameters)
- can return a value

Example:
```java
int add(int a, int b) {
    return a + b;
}
```

---

## Method Structure

```java
access_modifier return_type method_name(parameters) {
    method_body
}
```

Example:
```java
public String getName() {
    return name;
}
```

---

## Method Parameters

- Parameters receive values from caller
- Java uses **pass-by-value** (already covered)

Example:
```java
void print(String msg) {
    System.out.println(msg);
}
```

---

## Return Types

- `void` → no value returned
- Non-void → must return value of declared type

```java
int getCount() {
    return 5;
}
```

Compiler enforces return correctness.

---

## Method Invocation

```java
int result = add(2, 3);
```

At runtime:
- arguments are evaluated
- values are copied into parameters
- method executes

---

## Method Overloading (Compile-Time Polymorphism)

### What Is Overloading
Multiple methods with **same name**, but:
- different parameter list

Example:
```java
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}
```

---

## Overloading Rules (Must Know)

Methods must differ by:
- number of parameters, or
- parameter types, or
- parameter order

❌ NOT by:
- return type only
- access modifier only

---

## Overloading Resolution (Important)

Java decides **which overloaded method to call at compile time**.

Resolution is based on:
- argument types
- method signatures
- most specific match

This is why overloading is **compile-time behavior**.

---

## Ambiguous Overloading (Common Pitfall)

```java
void test(int a, double b) {}
void test(double a, int b) {}
```

Calling:
```java
test(10, 10); // ❌ compile-time error
```

Compiler cannot decide.

---

## Varargs and Overloading

```java
void log(String... messages) {}
```

Rules:
- Varargs must be last parameter
- Overloading with varargs can cause ambiguity

Use carefully.

---

## Why Overloading Exists

- Improves readability
- Provides flexibility
- Keeps related behavior grouped

Used heavily in standard libraries.

---

## Common Mistakes

- Assuming return type enables overloading
- Creating ambiguous overloads
- Overusing overloading unnecessarily
- Confusing overloading with overriding

---

## Best Practices

- Keep overloads logically related
- Avoid ambiguous signatures
- Prefer clarity over cleverness
- Document overloaded methods

---

## Interview Notes

- What is method overloading?
- Overloading rules in Java
- Compile-time vs runtime behavior
- Why return type alone is insufficient
- Varargs and overloading

---

## Summary

Methods define behavior.
Overloading provides flexibility.

Understanding how Java resolves methods
prevents subtle compile-time errors.
