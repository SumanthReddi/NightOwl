---
sidebar_position: 11
title: SOLID Principles 
---

## SOLID Principles in Java (Design Rules That Prevent Pain)

## Why This File Exists
SOLID is often memorized, rarely understood.

This file explains:
- Why SOLID principles exist
- What problem each principle solves
- How they relate to Java OOP concepts
- How ignoring SOLID causes real design pain

SOLID is not about theory — it’s about **change safety**.

---

## What SOLID Really Is

SOLID is a set of **design principles** that help you:
- reduce coupling
- increase maintainability
- make systems easier to change

SOLID does NOT:
- enforce rules at compile time
- require frameworks
- replace good judgment

---

## S — Single Responsibility Principle (SRP)

### Definition
> A class should have **only one reason to change**.

---

### Bad Example

```java
class ReportService {
    void generateReport() {}
    void saveToFile() {}
    void sendEmail() {}
}
```

Multiple responsibilities:
- business logic
- persistence
- communication

---

### Better Design

```java
class ReportGenerator {}
class ReportSaver {}
class EmailNotifier {}
```

Each class changes for **one reason**.

---

## O — Open/Closed Principle (OCP)

### Definition
> Software entities should be **open for extension**, closed for modification.

---

### Bad Example

```java
if(type.equals("CARD")) {}
else if(type.equals("UPI")) {}
```

Adding new type → modifying existing code.

---

### Better Design

```java
interface Payment {
    void pay();
}
```

New behavior = new implementation.

---

## L — Liskov Substitution Principle (LSP)

### Definition
> Subtypes must be substitutable for their base types.

---

### Violation Example

```java
class Bird {
    void fly() {}
}

class Penguin extends Bird {}
```

Penguin breaks expectation.

---

### Correct Design

Use composition or interfaces instead of forced inheritance.

---

## I — Interface Segregation Principle (ISP)

### Definition
> Clients should not be forced to depend on methods they do not use.

---

### Bad Interface

```java
interface Worker {
    void work();
    void eat();
}
```

---

### Better Design

```java
interface Workable { void work(); }
interface Eatable { void eat(); }
```

Small, focused interfaces.

---

## D — Dependency Inversion Principle (DIP)

### Definition
> Depend on abstractions, not concretions.

---

### Bad Design

```java
class OrderService {
    private MySQLDatabase db;
}
```

---

### Better Design

```java
class OrderService {
    private Database db;
}
```

Concrete injected at runtime.

---

## How SOLID Fits Together

- Encapsulation → protects state
- Inheritance → reuse carefully
- Polymorphism → extension
- Abstraction → dependency control
- Composition → flexibility

SOLID ties them together.

---

## Common Misconceptions

- SOLID = too many classes ❌
- SOLID = over-engineering ❌
- SOLID = only for frameworks ❌

SOLID is about **change tolerance**.

---

## When NOT to Overuse SOLID

Avoid:
- premature abstraction
- unnecessary interfaces
- forcing patterns

Balance matters.

---

## Common Mistakes

- Violating SRP unintentionally
- Misusing inheritance (LSP violation)
- Fat interfaces (ISP violation)
- Direct dependency on concretes (DIP violation)

---

## Best Practices

- Apply SOLID incrementally
- Refactor toward SOLID
- Focus on change points
- Use interfaces where variation exists

---

## Interview Notes

- Explain each SOLID principle
- Real examples of violations
- How SOLID improves maintainability
- Difference between SRP and ISP
- DIP vs Dependency Injection

---

## Summary

SOLID principles exist to:
- reduce pain during change
- keep designs flexible
- prevent fragile systems

Good design is invisible — until it’s violated.
