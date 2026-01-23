---
sidebar_position: 4
---

# Polymorphism in Java (One Interface, Many Behaviors)

## Priority
CORE_JAVA_OOP

---

## Why This File Exists
Polymorphism is the **core power of OOP**, yet it’s often explained poorly.

Many developers confuse:
- overloading vs overriding
- compile-time vs runtime behavior
- reference type vs object type

This file builds a **clear mental model** of polymorphism in Java.

---

## What Is Polymorphism (Correct Meaning)

Polymorphism means:
> The same method call can behave differently based on the object type.

It allows Java code to:
- be flexible
- be extensible
- depend on abstractions, not implementations

---

## Two Types of Polymorphism in Java

Java supports:

1. **Compile-time polymorphism** (method overloading)  
2. **Runtime polymorphism** (method overriding)

They are completely different mechanisms.

---

## Compile-Time Polymorphism (Overloading)

Already covered briefly, but recap:

```java
int add(int a, int b) { }
double add(double a, double b) { }
```

Decision is made:
- at compile time
- based on method signature

❌ No runtime decision involved.

---

## Runtime Polymorphism (Overriding)

### What Is Method Overriding

A subclass provides its **own implementation** of a parent method.

```java
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

---

## Dynamic Method Dispatch (Key Concept)

```java
Animal a = new Dog();
a.sound();
```

Output:
```
Dog barks
```

Explanation:
- Reference type → `Animal`
- Object type → `Dog`
- JVM calls method based on **object type**

This decision happens **at runtime**.

---

## Reference Type vs Object Type

| Aspect | Reference Type | Object Type |
|------|---------------|-------------|
| Checked at | Compile time | Runtime |
| Method call decision | No | Yes |
| Fields access | Reference-based | — |

Important:
> Fields are NOT polymorphic

---

## What Can Be Overridden

✔ Instance methods  
❌ Static methods  
❌ Final methods  
❌ Private methods  

Static methods are **hidden**, not overridden.

---

## Covariant Return Types

Java allows:
- overridden methods to return subtypes

```java
Animal get() { }
Dog get() { }
```

This improves flexibility.

---

## Polymorphism Benefits

- Loose coupling
- Extensibility
- Open/Closed Principle
- Cleaner designs

This is why interfaces and abstract classes exist.

---

## Common Mistakes

- Confusing overloading with overriding
- Expecting fields to be polymorphic
- Calling overridden methods from constructors
- Misunderstanding reference vs object type

---

## Best Practices

- Program to interfaces
- Use `@Override` annotation
- Avoid logic in constructors relying on overrides
- Keep overrides behavior-compatible

---

## Interview Notes

- What is polymorphism?
- Compile-time vs runtime polymorphism
- Dynamic method dispatch
- Reference type vs object type
- Can static methods be overridden?

---

## Summary

Polymorphism allows:
- one interface
- many implementations

It is the foundation of flexible Java designs.
