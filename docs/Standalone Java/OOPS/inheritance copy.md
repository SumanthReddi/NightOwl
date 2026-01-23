---
sidebar_position: 3
---

# Inheritance in Java (Code Reuse with Responsibility)

## Priority
CORE_JAVA_OOP

---

## Why This File Exists
Inheritance is powerful — and dangerous when misused.

Many designs break because:
- inheritance is used just for reuse
- relationships are modeled incorrectly
- changes ripple through subclasses

This file explains:
- what inheritance really means
- when to use it
- when NOT to use it

---

## What Is Inheritance (Correct Meaning)

Inheritance represents an **IS-A relationship**.

Example:
- Dog **is an** Animal
- Car **is not an** Engine

In Java, inheritance allows a class to:
- reuse behavior
- extend functionality
- specialize a parent class

---

## Basic Inheritance Example

```java
class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}
```

Here:
- `Dog` inherits `eat()`
- `Dog` adds new behavior

---

## How Inheritance Works Internally

When an object is created:

```java
Dog d = new Dog();
```

- Memory is allocated for both `Animal` and `Dog` parts
- Parent constructor runs first
- Child constructor runs next

This order matters.

---

## Constructor Chaining

```java
class Animal {
    Animal() {
        System.out.println("Animal created");
    }
}

class Dog extends Animal {
    Dog() {
        System.out.println("Dog created");
    }
}
```

Output:
```
Animal created
Dog created
```

Parent constructor always executes first.

---

## Method Inheritance

- Public and protected methods are inherited
- Private methods are NOT inherited
- Static methods belong to class, not object

Inheritance does NOT override:
- fields
- static methods

---

## Inheritance vs Code Duplication

Inheritance avoids duplication **only when behavior truly belongs to parent**.

Bad design:
```java
class Car extends Engine { }
```

This creates incorrect relationships.

---

## When Inheritance Is a Good Choice

Use inheritance when:
- IS-A relationship exists
- behavior is common and stable
- subclasses truly specialize parent

Examples:
- Exception hierarchy
- Collection hierarchy

---

## When Inheritance Is Dangerous

Avoid inheritance when:
- behavior varies a lot
- parent changes frequently
- only reuse is desired

In such cases, prefer **composition**.

---

## Tight Coupling Problem

Inheritance creates:
- strong dependency on parent
- fragile designs

Changes in parent:
- may break child classes
- propagate bugs

---

## Why Java Supports Single Inheritance

Java allows:
- single class inheritance
- multiple interface implementation

Reason:
- avoids diamond problem
- keeps model simpler

---

## Common Mistakes

- Using inheritance for reuse only
- Breaking IS-A rule
- Overusing inheritance
- Ignoring constructor order

---

## Best Practices

- Validate IS-A relationship
- Keep parent classes stable
- Prefer composition over inheritance
- Use inheritance sparingly

---

## Interview Notes

- What is inheritance?
- IS-A vs HAS-A
- Constructor execution order
- Why Java supports single inheritance
- When to avoid inheritance

---

## Summary

Inheritance enables reuse and specialization,
but introduces tight coupling.

Use it carefully, not automatically.
