---
sidebar_position: 2
---

# Encapsulation in Java (Data Hiding and Controlled Access)

## Priority
CORE_JAVA_OOP

---

## Why This File Exists
Encapsulation is often reduced to “getters and setters”, which is **incorrect and incomplete**.

This file explains:
- Why encapsulation exists
- What problem it solves
- How Java enforces it
- When getters/setters are good or bad

Encapsulation is about **protecting invariants**, not generating boilerplate.

---

## What Is Encapsulation (Correct Definition)

Encapsulation means:
> **Hiding internal state and exposing behavior in a controlled way**

It binds:
- data (fields)
- behavior (methods)

and prevents **direct external manipulation**.

---

## Why Encapsulation Is Needed

Without encapsulation:
- any class can change your object’s state
- invariants can be broken
- bugs become hard to trace

Example problem:
```java
user.age = -10; // invalid state
```

Encapsulation prevents this.

---

## Access Modifiers (The Enforcement Tool)

Java enforces encapsulation using **access modifiers**:

| Modifier | Scope |
|-------|-------|
| private | Same class only |
| default | Same package |
| protected | Package + subclasses |
| public | Everywhere |

Encapsulation usually means **private fields**.

---

## Basic Encapsulation Example

```java
class User {
    private int age;

    public void setAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Invalid age");
        }
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}
```

Here:
- state is protected
- rules are enforced in one place

---

## Getters and Setters (Reality Check)

Getters/setters are:
✔ useful for validation  
✔ useful for immutability  
❌ harmful when used blindly  

Bad encapsulation:
```java
public void setAge(int age) {
    this.age = age; // no validation
}
```

This exposes internal state without protection.

---

## Encapsulation ≠ Data Hiding Only

Encapsulation is also about:
- exposing **behavior**, not data
- meaningful methods

Better design:
```java
user.updateAge(25);
user.isAdult();
```

Not:
```java
user.setAge(25);
user.getAge();
```

---

## Immutability and Encapsulation

Encapsulation enables immutability:

```java
class User {
    private final String name;

    User(String name) {
        this.name = name;
    }
}
```

- No setters
- State cannot change after creation

This is strong encapsulation.

---

## Package-Level Encapsulation

Using default access:
- hides implementation within package
- exposes only public API

Common in large systems.

---

## Why This Matters

Encapsulation helps you:
- prevent invalid states
- reduce bugs
- control change impact
- design clean APIs

This becomes critical in large codebases.

---

## Common Mistakes

- Making fields public
- Generating getters/setters blindly
- Confusing encapsulation with boilerplate
- Breaking invariants through setters

---

## Best Practices

- Make fields private by default
- Expose behavior, not data
- Validate state changes
- Prefer immutability when possible
- Use package-private thoughtfully

---

## Interview Notes

- What is encapsulation?
- Why not expose fields directly?
- Are getters/setters always good?
- How does encapsulation improve design?
- Difference between encapsulation and abstraction

---

## Summary

Encapsulation is about:
- protecting state
- enforcing rules
- exposing safe behavior

Good encapsulation prevents bugs before they exist.
