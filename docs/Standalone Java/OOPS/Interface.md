---
sidebar_position: 8
---

## What Is an Interface?

An **interface** in Java is a blueprint for a class, specifying a set of **method signatures** that the implementing classes must provide.

- It enables **abstraction**, meaning it hides the implementation details and only shows the method signatures.
- All methods in an interface are **public** and **abstract** by default; implementations supply the method bodies.
- From Java 8 onwards, interfaces can also have **default** and **static** methods with a method body.

***

## Syntax: Declaring an Interface

To declare an interface, use the `interface` keyword.

```java
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

- All fields are by default `public static final`.
- Abstract methods must be implemented by the implementing class.
- `default` and `static` methods can have bodies in the interface.

***

## Implementing an Interface

Use the `implements` keyword in a class to implement an interface:

```java
class MyClass implements MyInterface {
    // Implementation of abstract method
    @Override
    public void myMethod() {
        System.out.println("Implemented myMethod");
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.myMethod();          // Calls implemented method
        obj.defaultMethod();     // Calls default method from interface
        System.out.println(MyInterface.MY_CONSTANT); // Access constant
        MyInterface.staticMethod(); // Calls static method

        // Polymorphism example
        MyInterface intfObj = new MyClass();
        intfObj.myMethod();
    }
}
```

- Must override all abstract methods.
- Can call default and static methods directly.

***

## Key Properties of Interfaces

- **No objects** can be created for an interface directly.
- Interfaces enable **multiple inheritance** (Classes can implement more than one interface).
- Methods are always **public abstract** and attributes **public static final** by default.
- Interfaces cannot have constructors, instance fields, or method bodies for abstract methods.

***

## Example: Multiple Interfaces

A class can implement more than one interface:

```java
interface InterfaceA {
    void methodA();
}
interface InterfaceB {
    void methodB();
}

class Demo implements InterfaceA, InterfaceB {
    public void methodA() { System.out.println("methodA"); }
    public void methodB() { System.out.println("methodB"); }
}
```

- This provides flexibility and solves the **multiple inheritance** problem in Java.

***

## Extending Interfaces

Interfaces can **extend** other interfaces:

```java
interface BaseInterface {
    void baseMethod();
}
interface ExtendedInterface extends BaseInterface {
    void extendedMethod();
}
class MyClass implements ExtendedInterface {
    public void baseMethod() { System.out.println("baseMethod"); }
    public void extendedMethod() { System.out.println("extendedMethod"); }
}
```

- Must implement all methods from the extended interface and its base.

***

## Why and When To Use Interfaces?

- To **achieve abstraction**: Hide implementation details and expose functionality.
- To enable **polymorphism**: Classes with different implementations can be used interchangeably via an interface type.
- To allow **loose coupling**: Classes depend on behavior, not on specific implementations.
- To emulate **multiple inheritance**: Java classes can implement multiple interfaces to inherit multiple sets of behaviors.

***

## Important Notes

- Interfaces are widely used in frameworks, libraries, and large-scale Java applications.
- Popular Java APIs (like Java Collections) use interfaces (`List`, `Set`, `Map`) for flexibility.
- Use interfaces to design clean, maintainable, and scalable code.

***

## Quick Comparison: Interface vs Abstract Class

| Feature | Interface  | Abstract Class  |
| :-- | :-- | :-- |
| Instantiation | Not possible  | Not possible  |
| Multiple Inheritance | Possible  | Not possible  |
| Methods | Only abstract, static, default  | Concrete + abstract |
| Fields | public static final only  | Any modifier |
| Constructors | Not allowed  | Allowed |


***

## Summary

- An **interface** defines a contract that implementing classes must follow.
- Use interfaces to achieve abstraction, loose coupling, and multiple inheritance in Java.
- Implement all abstract methods, use default/static methods if needed, and remember no constructor or instance fields allowed in interfaces.

