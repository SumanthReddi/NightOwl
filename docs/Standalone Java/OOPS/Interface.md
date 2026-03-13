---
sidebar_position: 8
---

# Interface in Java

An **interface** in Java is a blueprint for a class that defines **what
a class must do**, but **not how it does it**.

Interfaces specify **method signatures** that implementing classes must
provide. They help achieve **abstraction**, **loose coupling**, and
**polymorphism** in Java applications.

> **Interface = A contract that implementing classes must follow**

------------------------------------------------------------------------

## Simple Definition

> **Interface:** A reference type in Java that defines a set of methods
> which implementing classes must implement.

------------------------------------------------------------------------

## What Is an Interface?

An interface defines **behavior without implementation**.

Key points:

-   It specifies **method signatures only**.
-   The implementing class provides the **actual implementation**.
-   Interfaces help hide implementation details and expose only
    functionality.
-   From **Java 8 onwards**, interfaces can also contain `default` and
    `static` methods with implementations.

------------------------------------------------------------------------

## Syntax: Declaring an Interface

To declare an interface, use the `interface` keyword.

``` java
public interface MyInterface {

    // Constant declaration
    int MY_CONSTANT = 10;

    // Abstract method (no body)
    void myMethod();

    // Static method (Java 8+)
    static void staticMethod() {
        System.out.println("Static method in interface.");
    }

    // Default method (Java 8+)
    default void defaultMethod() {
        System.out.println("Default method in interface.");
    }

}
```

Important rules:

-   Fields are **public static final** by default.
-   Methods are **public abstract** by default.
-   `default` and `static` methods can have implementations.

------------------------------------------------------------------------

## Implementing an Interface

A class implements an interface using the `implements` keyword.

``` java
class MyClass implements MyInterface {

    @Override
    public void myMethod() {
        System.out.println("Implemented myMethod");
    }

}
```

------------------------------------------------------------------------

## Complete Example

``` java
class MyClass implements MyInterface {

    @Override
    public void myMethod() {
        System.out.println("Implemented myMethod");
    }

}

public class Main {

    public static void main(String[] args) {

        MyClass obj = new MyClass();

        obj.myMethod();              
        obj.defaultMethod();         

        System.out.println(MyInterface.MY_CONSTANT);

        MyInterface.staticMethod();

        // Polymorphism example
        MyInterface intfObj = new MyClass();
        intfObj.myMethod();

    }

}
```

------------------------------------------------------------------------

## Key Properties of Interfaces

-   Interfaces **cannot be instantiated**.
-   A class must **implement all abstract methods**.
-   Interfaces support **multiple inheritance**.
-   Fields are always **public static final**.
-   Methods are **public abstract** by default.

------------------------------------------------------------------------

## Example: Multiple Interfaces

A class can implement **multiple interfaces**.

``` java
interface InterfaceA {
    void methodA();
}

interface InterfaceB {
    void methodB();
}

class Demo implements InterfaceA, InterfaceB {

    public void methodA() {
        System.out.println("methodA");
    }

    public void methodB() {
        System.out.println("methodB");
    }

}
```

This solves Java's **multiple inheritance limitation for classes**.

------------------------------------------------------------------------

## Extending Interfaces

Interfaces can also extend other interfaces.

``` java
interface BaseInterface {
    void baseMethod();
}

interface ExtendedInterface extends BaseInterface {
    void extendedMethod();
}

class MyClass implements ExtendedInterface {

    public void baseMethod() {
        System.out.println("baseMethod");
    }

    public void extendedMethod() {
        System.out.println("extendedMethod");
    }

}
```

A class implementing the child interface must implement **all inherited
methods**.

------------------------------------------------------------------------

## Why and When To Use Interfaces

Interfaces are used to:

-   Achieve **abstraction**
-   Enable **polymorphism**
-   Promote **loose coupling**
-   Support **multiple inheritance**
-   Design **flexible APIs and frameworks**

Many Java libraries rely heavily on interfaces such as:

-   `List`
-   `Set`
-   `Map`

------------------------------------------------------------------------

## Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|--------|-----------|---------------|
| Instantiation | Not possible | Not possible |
| Multiple Inheritance | Supported | Not supported |
| Methods | Abstract + default + static | Abstract + concrete |
| Fields | public static final only | Any type |
| Constructors | Not allowed | Allowed |

------------------------------------------------------------------------

## Summary

-   An **interface defines a contract** for classes.
-   Implementing classes must provide the method implementations.
-   Interfaces support **abstraction, polymorphism, and loose
    coupling**.
-   They allow Java to simulate **multiple inheritance of behavior**.
