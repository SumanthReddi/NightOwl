---
sidebar_position: 9
---

# Abstraction and Interfaces in Java (Designing Contracts, Not Implementations)

## Priority
CORE_JAVA_OOP

---

## Why This File Exists
Abstraction is often confused with encapsulation and inheritance.

This file explains:
- What abstraction really means
- Why Java introduced abstract classes and interfaces
- How abstraction enables loose coupling
- When to choose abstract classes vs interfaces

This is **core Java design knowledge**, critical for clean architecture.

---

## What Is Abstraction (Correct Meaning)

Abstraction means:
> Exposing **what an object does**, not **how it does it**.

It focuses on:
- behavior contracts
- hiding implementation details
- programming to capabilities

---

## Why Abstraction Is Needed

Without abstraction:
- code depends on concrete classes
- changes ripple everywhere
- testing and extension become hard

Abstraction allows:
- flexibility
- easier extension
- stable APIs

---

## Abstract Classes

### What Is an Abstract Class

An abstract class:
- cannot be instantiated
- may contain abstract and concrete methods
- represents an **IS-A relationship**

Example:
```java
abstract class Vehicle {
    abstract void move();

    void start() {
        System.out.println("Starting vehicle");
    }
}
```

---

### Characteristics of Abstract Classes

- Can have state (fields)
- Can have constructors
- Can have implemented methods
- Supports single inheritance

Used when:
- base behavior exists
- subclasses share common logic

---

## Interfaces

### What Is an Interface

An interface defines a **pure contract**.

Example:
```java
interface Payment {
    void pay(double amount);
}
```

Implementation:
```java
class CardPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid by card");
    }
}
```

---

### Characteristics of Interfaces

- No instance state
- Methods are public by default
- Supports multiple inheritance
- Focused on capability, not hierarchy

---

## Interface Evolution (Java 8+)

Interfaces can have:
- default methods
- static methods

```java
interface Logger {
    default void log(String msg) {
        System.out.println(msg);
    }
}
```

This allows backward compatibility.

---

## Abstract Class vs Interface (Clear Comparison)

| Aspect | Abstract Class | Interface |
|-----|---------------|-----------|
| Inheritance | Single | Multiple |
| State | Yes | No |
| Constructors | Yes | No |
| Methods | Abstract + Concrete | Abstract + Default |
| Purpose | Base class | Contract |

---

## When to Use What (Rule of Thumb)

Use **abstract class** when:
- you share code
- you control class hierarchy

Use **interface** when:
- you define capability
- multiple inheritance is needed
- API stability matters

---

## Abstraction and Polymorphism

Abstraction enables polymorphism:

```java
Payment p = new CardPayment();
p.pay(100);
```

Caller depends on interface, not implementation.

---

## Common Mistakes

- Using abstract classes where interfaces fit better
- Adding state to interfaces conceptually
- Breaking contracts in implementations
- Overusing default methods

---

## Best Practices

- Program to interfaces
- Keep interfaces small and focused
- Avoid fat interfaces
- Use abstract classes for shared logic

---

## Interview Notes

- What is abstraction?
- Difference between abstract class and interface
- Can interfaces have methods?
- Why Java supports multiple interfaces
- When to prefer interface over abstract class

---

## Summary

Abstraction is about:
- contracts
- behavior
- flexibility

Interfaces and abstract classes are tools to achieve it.
