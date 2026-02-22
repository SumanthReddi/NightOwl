---
sidebar_position: 1
---

# Classes and Objects

## Why This File Exists
Object-Oriented Programming starts with **classes and objects**.

Many developers use them daily but don’t clearly understand:
- what a class really represents
- how objects are created in memory
- why OOP was introduced in the first place

This file builds the **mental model** required for all OOP concepts.

---

## Why Object-Oriented Programming Exists

Before OOP:
- programs were written as large procedural code
- data and behavior were loosely connected
- maintenance was difficult as systems grew

OOP was introduced to:
- model real-world entities
- group data with behavior
- improve readability and maintainability

---

## What Is a Class

A **class** is a blueprint or template.

It defines:
- properties (fields / variables)
- behaviors (methods)

Example:
```java
class User {
    String name;
    int age;

    void login() {
        System.out.println("User logged in");
    }
}
```

A class does **not** occupy memory by itself.

---

## What Is an Object

An **object** is a real instance of a class.

- Created at runtime
- Occupies memory
- Has its own state

Example:
```java
User u1 = new User();
User u2 = new User();
```

Here:
- `u1` and `u2` are separate objects
- both follow the same class blueprint

---

## Class vs Object (Clear Difference)

| Aspect | Class | Object |
|------|-------|--------|
| Nature | Blueprint | Instance |
| Memory | No | Yes |
| Created | At compile-time | At runtime |
| Count | One definition | Many instances |

---

## Object Creation Process (Important)

```java
User u = new User();
```

Steps:
1. Memory allocated on heap
2. Instance variables initialized
3. Constructor executed
4. Reference returned

Understanding this helps with:
- constructors
- memory management
- object lifecycle

---

## Reference Variables

```java
User u = new User();
```

- `u` is a reference variable
- stores address of object
- lives on stack
- object lives on heap

Multiple references can point to same object.

---

## Object State and Behavior

- **State** → values of fields
- **Behavior** → methods

Example:
```java
u.name = "Alex";   // state
u.login();         // behavior
```

OOP binds state and behavior together.

---

## Anonymous Objects

```java
new User().login();
```

- Object without reference
- Used once
- Eligible for GC after use

Use sparingly for clarity.

---

## Why This Matters

Understanding classes and objects helps you:
- design better systems
- reason about memory
- understand inheritance and polymorphism
- debug reference-related issues

---

## Common Mistakes

- Thinking class occupies memory
- Confusing reference with object
- Creating unnecessary objects
- Overusing anonymous objects

---

## Best Practices

- Design classes around responsibility
- Keep classes cohesive
- Avoid large “God classes”
- Create objects only when needed

---

## Interview Notes

- Difference between class and object
- How objects are created in Java
- Where objects and references are stored
- Why OOP was introduced

---

## Summary

- Class defines structure and behavior
- Object represents real instance
- OOP starts with understanding this relationship

All other OOP concepts build on this.
