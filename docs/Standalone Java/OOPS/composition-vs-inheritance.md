---
sidebar_position: 6
---

# Composition vs Inheritance in Java (HAS-A vs IS-A)

## Priority
CORE_JAVA_OOP

---

## Why This File Exists
Inheritance is often overused when **composition is the better choice**.

This file explains:
- Difference between IS-A and HAS-A
- Why composition is preferred in modern Java design
- How poor inheritance creates fragile systems
- Practical rules to choose correctly

This topic separates **average developers** from **good designers**.

---

## The Core Difference (One Line)

- **Inheritance** → IS-A relationship  
- **Composition** → HAS-A relationship  

Choosing the wrong one leads to tight coupling and bugs.

---

## Inheritance (Quick Recap)

Inheritance means:
```java
class Dog extends Animal { }
```

Dog **is an** Animal.

Characteristics:
- Strong coupling
- Behavior inherited automatically
- Changes in parent affect child

---

## Composition (What It Means)

Composition means:
```java
class Car {
    private Engine engine;
}
```

Car **has an** Engine.

Characteristics:
- Loose coupling
- Behavior delegated, not inherited
- Easy to change implementation

---

## Why Composition Is Preferred

Composition:
- avoids fragile hierarchies
- allows runtime flexibility
- limits change impact
- supports better testing

Inheritance:
- locks behavior at compile time
- spreads changes unintentionally
- is harder to refactor

---

## Example: Bad Inheritance

```java
class Bird {
    void fly() {}
}

class Penguin extends Bird {
}
```

Problem:
- Penguin cannot fly
- IS-A relationship is broken

---

## Same Example Using Composition

```java
interface FlyBehavior {
    void fly();
}

class Bird {
    private FlyBehavior flyBehavior;
}
```

Now:
- Flying is optional
- Behavior can vary per bird

---

## Tight Coupling Problem

Inheritance creates:
- dependency on parent implementation
- difficulty in changing behavior
- ripple effects

Composition avoids this by **delegation**.

---

## When Inheritance Is Acceptable

Use inheritance when:
- IS-A relationship is true
- behavior is stable
- hierarchy is shallow
- parent is designed for extension

Examples:
- Exception hierarchy
- Collection framework

---

## When Composition Is Better

Use composition when:
- behavior varies
- runtime flexibility is needed
- change is expected
- reuse is the only goal

Modern Java favors composition.

---

## Composition + Interfaces (Best Combo)

```java
class Service {
    private Logger logger;
}
```

- Depends on interface
- Implementation can change
- Follows Dependency Inversion

---

## Common Mistakes

- Using inheritance for reuse only
- Deep inheritance hierarchies
- Ignoring IS-A rule
- Fear of composition

---

## Best Practices

- Prefer composition over inheritance
- Validate IS-A relationship strictly
- Keep inheritance hierarchies shallow
- Use interfaces for composition

---

## Interview Notes

- Difference between composition and inheritance
- HAS-A vs IS-A
- Why composition is preferred
- Real-world examples
- When inheritance is justified

---

## Summary

Inheritance couples.
Composition composes.

Good design chooses **composition by default**,
and inheritance only when truly needed.
