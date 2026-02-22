---
sidebar_position: 3
title: Pass-by-Value
---

## Pass-by-Value in Java (Why Java Is NOT Pass-by-Reference)

## Why This File Exists
“Java is pass-by-reference” is one of the **most common incorrect statements** about Java.

This file explains:
- How Java passes arguments to methods
- Why primitives and objects appear to behave differently
- The exact rule Java follows

Understanding this removes confusion in:
- method calls
- object modification
- debugging unexpected behavior

---

## The Golden Rule (Memorize This)

> **Java is ALWAYS pass-by-value**  
> No exceptions.

The confusion comes from **what value is passed**.

---

## What Pass-by-Value Means

Pass-by-value means:
- A **copy of the value** is passed to the method
- The original variable is not directly accessible

The key question is:
> What is the value?

---

## Case 1: Passing Primitive Types

```java
void update(int x) {
    x = 20;
}

int a = 10;
update(a);
System.out.println(a);
```

Output:
```
10
```

Explanation:
- Value `10` is copied into `x`
- Changing `x` does not affect `a`

Simple and intuitive.

---

## Case 2: Passing Object References

```java
void updateName(Person p) {
    p.name = "John";
}

Person p1 = new Person();
p1.name = "Alex";
updateName(p1);
System.out.println(p1.name);
```

Output:
```
John
```

This creates confusion.

---

## Why Objects Appear Pass-by-Reference

What actually happens:
- The **reference value** is copied
- Both variables point to the same object

So:
- Object state can be modified
- Reference itself cannot be changed

---

## Proof: Reference Reassignment Fails

```java
void reassign(Person p) {
    p = new Person();
    p.name = "Bob";
}

Person p1 = new Person();
p1.name = "Alex";
reassign(p1);
System.out.println(p1.name);
```

Output:
```
Alex
```

Explanation:
- Reference copy is reassigned
- Original reference remains unchanged

---

## Visual Summary

```
Primitive:
a ──► 10   (copied)

Object:
p1 ──► [Person]
 p  ──► [Person]  (same object, copied reference)
```

---

## Why Java Chose Pass-by-Value

- Simpler language model
- Avoids unpredictable side effects
- More secure and consistent behavior

Pass-by-reference would make Java error-prone.

---

## Common Misconceptions

❌ Java passes objects by reference  
✔ Java passes **object references by value**  

❌ Objects behave like references  
✔ Only references are copied  

---

## Why This Matters

Understanding this helps you:
- predict method behavior
- avoid unintended mutations
- write safer APIs
- answer interview questions correctly

---

## Common Mistakes

- Claiming Java is pass-by-reference
- Expecting reassignment to affect caller
- Not understanding reference copying

---

## Best Practices

- Avoid mutating objects unnecessarily
- Be explicit about method side effects
- Prefer immutability where possible

---

## Interview Notes

- Is Java pass-by-value or pass-by-reference?
- Why do objects behave differently than primitives?
- Can a method change the caller’s object reference?
- Explain with an example

---

## Summary

Java passes:
- primitive values → by value
- object references → by value

Java is **always pass-by-value**.
