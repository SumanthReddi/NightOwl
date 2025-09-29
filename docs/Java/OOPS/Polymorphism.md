---
sidebar_position: 5
---

**Polymorphism** means "many forms"—it is the ability of a single entity (method, object) to take multiple forms and behave differently in different situations in Java.

***

## Key Idea

In Java polymorphism allows:

- The same method call to invoke different method implementations depending on the type of the object that calls it.
- Flexibility and extensibility in code by allowing objects to be accessed through references of their superclass or interface types.

***

## Types of Polymorphism in Java

### 1. Compile-Time Polymorphism (Static Binding)

- Also called **Method Overloading**.
- Multiple methods with the same name but different parameter types or counts.
- Resolved during compile time by the Java compiler.
- Example:

```java
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

***

### 2. Run-Time Polymorphism (Dynamic Binding)

- Also called **Method Overriding**.
- A subclass provides a specific implementation for a method already defined in its superclass.
- Resolved during runtime by JVM based on the actual object type.
- Uses parent class reference to refer to child class object.
- Example:

```java
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
        myDog.sound();  // Output: Dog barks
    }
}
```

***

## Why Use Polymorphism?

- **Code Reusability:** One interface controls access to multiple implementations.
- **Extensibility:** New subclasses can provide new behaviors without changing existing code.
- **Simplifies code management:** You can write code using superclass references without knowing the exact subclass.

***

## Method Overloading vs Method Overriding

| Aspect                 | Method Overloading                  | Method Overriding                 |
|------------------------|-----------------------------------|---------------------------------|
| Execution time         | Compile-time                      | Run-time                        |
| Occurs between         | Methods in the same class          | Superclass and subclass          |
| Signature             | Same method name, different parameters | Same method name and parameters  |
| Return type           | Can be different                  | Must be same (or covariant)      |
| Polymorphism type     | Static polymorphism               | Dynamic polymorphism            |
| Access modifier changes| Allowed                         | Cannot reduce visibility         |

***

## Polymorphism Example with Shapes

```java
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
        Shape s;
        
        s = new Circle();
        s.draw(); // Output: Drawing a circle
        
        s = new Rectangle();
        s.draw(); // Output: Drawing a rectangle
    }
}
```

***

## How Java Resolves Overriding Calls

- Java decides which overridden method to invoke based on the **actual object type** at runtime, not on the reference type.
- This is enabled by JVM's dynamic dispatch mechanism.

***

## Restrictions and Best Practices

- Private, static, and final methods **cannot be overridden**.
- Use `@Override` annotation to help detect mistakes during overriding.
- Polymorphism applies to **methods**, not instance variables (fields).

***

## Summary

- Polymorphism is a powerful OOP concept allowing methods to have multiple forms.
- It is implemented via **method overloading** (compile-time) and **method overriding** (run-time).
- Enhances code flexibility, extensibility, and maintainability.
- Critical for achieving runtime decision making and dynamic behavior for objects.