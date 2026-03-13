---
sidebar_position: 6
---

# Polymorphism

**Polymorphism** means **"many forms"**. It is the ability of a **single
method, object, or interface to behave in multiple ways** depending on
the situation.

The word comes from:

-   **Poly** → many
-   **Morph** → forms

> **Polymorphism = One interface, many implementations**

------------------------------------------------------------------------

## Simple Definition

> **Polymorphism:** The ability of a method or object to take multiple
> forms depending on the situation.

------------------------------------------------------------------------

## What Is Polymorphism (Correct Meaning)

Polymorphism means:

> The same method call can behave differently based on the object type.

It allows Java code to:

-   be flexible
-   be extensible
-   depend on abstractions, not implementations

------------------------------------------------------------------------

## Key Idea

In Java, polymorphism allows:

-   The **same method call** to invoke **different method
    implementations** depending on the type of object.
-   Code to work with **superclass or interface references** while
    executing subclass implementations.
-   Systems to remain **flexible and extendable**.

------------------------------------------------------------------------

## Real-World Example

Think about a **payment system**.

A user can make a payment using:

-   Credit Card
-   UPI
-   Debit Card

The action is always:

>    **pay()**

But the **implementation differs** depending on the payment type.

Example structure:
```
    pay()
     ├── CreditCardPayment
     ├── UpiPayment
     └── DebitCardPayment
```
This is a simple conceptual example of **polymorphism**.

------------------------------------------------------------------------

# Two Types of Polymorphism in Java

Java supports two main types:

1.  **Compile-time polymorphism** (method overloading)\
2.  **Runtime polymorphism** (method overriding)

These are different mechanisms.

## 1. Compile-Time Polymorphism (Static Binding)

Also called **Method Overloading**.

Characteristics:

-   Multiple methods with the **same name**
-   **Different parameters** (type, number, or order)
-   Resolved during **compile time** by the Java compiler

Example:

``` java
class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }

}
```

Usage:

``` java
Calculator c = new Calculator();

c.add(2,3);
c.add(2,3,4);
c.add(2.5,3.5);
```

Here the compiler decides **which method to call**.


## 2. Runtime Polymorphism (Dynamic Binding)

Also called **Method Overriding**.

Characteristics:

-   A **child class overrides a parent class method**
-   Same method **name and parameters**
-   JVM decides **which method to run at runtime**
-   Uses **parent reference pointing to child object**

Example:

``` java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Test {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.sound();   // Dog barks
    }
}
```

Even though the reference type is **Animal**, the method executed
belongs to **Dog**.

This is **runtime polymorphism**.

# Why Dog Method Runs Instead of Animal

In Java every variable has two types:

| Type | Meaning |
|------|--------|
| Reference type | Type of variable |
| Object type | Actual object created |

Example:

``` java
Animal myDog = new Dog();
```
| Part | Meaning |
|------|--------|
| Animal | reference type |
| Dog | actual object type |

So the variable **myDog refers to a Dog object**.

When the method is called:

``` java
myDog.sound();
```

The JVM checks the **actual object type (Dog)** and executes:

    Dog.sound()

This mechanism is called **Dynamic Method Dispatch**.

It means the method call is resolved **at runtime based on the object
type**, not the reference type.

This behavior enables **runtime polymorphism**.


------------------------------------------------------------------------

## Why Use Polymorphism?

Polymorphism provides major advantages:

-   **Code Reusability**\
    One interface can control multiple implementations.

-   **Extensibility**\
    New classes can be added without modifying existing code.

-   **Flexibility**\
    Programs depend on **abstractions instead of concrete
    implementations**.

-   **Cleaner code architecture**

------------------------------------------------------------------------

## Method Overloading vs Method Overriding

| Aspect | Method Overloading | Method Overriding |
|------|-------------------|------------------|
| Execution time | Compile-time | Run-time |
| Occurs between | Methods in same class | Parent and child class |
| Method signature | Same name, different parameters | Same name and parameters |
| Return type | Can differ | Must be same or covariant |
| Polymorphism type | Static polymorphism | Dynamic polymorphism |
| Access modifier changes | Allowed | Cannot reduce visibility |

------------------------------------------------------------------------

## Polymorphism Example with Shapes

``` java
class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a rectangle");
    }
}

public class PolymorphismTest {
    public static void main(String[] args) {
        Shape s1 = new Circle();
        s1.draw();  // Drawing a circle

        Shape s2 = new Rectangle();
        s2.draw();  // Drawing a rectangle
    }
}
```
------------------------------------------------------------------------

## How Java Resolves Overriding Calls

Java determines which method to execute based on the **actual object
type at runtime**, not the reference type.

This mechanism is called **Dynamic Method Dispatch**.

------------------------------------------------------------------------

## Restrictions and Best Practices

-   `private`, `static`, and `final` methods **cannot be overridden**
-   Always use the **@Override annotation**
-   Polymorphism applies to **methods**, not instance variables

------------------------------------------------------------------------

## Summary

Polymorphism is a fundamental OOP concept that allows **objects and
methods to take multiple forms**.

It is implemented through:

-   **Method Overloading (compile-time polymorphism)**
-   **Method Overriding (runtime polymorphism)**

Benefits include:

-   flexibility
-   extensibility
-   reusable code
-   cleaner architecture
