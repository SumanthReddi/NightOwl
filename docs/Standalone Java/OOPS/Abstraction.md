---
sidebar_position: 4
---
In Java, the **abstract keyword** is used to define classes and methods that are incomplete and meant to be implemented later by subclasses. It represents the concept of *abstraction*, where we hide implementation details and only expose necessary functionality. 

## What Is an Abstract Class?

- Abstraction is the process of **hiding complex implementation details** and showing only the **essential features** to the user.
- It focuses on **what an object does** instead of **how it does it**.
- If a class contains one or more abstract methods, the class itself must be declared abstract.
- Achieved in Java using either **abstract classes** or **interfaces**.
    - abstraction classes achives partial abstraction.
    - interfaces achives 100% of abstraction.

An **abstract class** in Java is a class that **cannot be instantiated** directly (no objects can be created from it). It is intended to be a **base class** for other classes.

- Declared with the `abstract` keyword before the `class` keyword.
- It may contain **abstract methods** (methods without a body) and **concrete methods** (methods with implementation). 
- Defines a **common template** for subclasses, but some behavior is left for subclasses to implement.
- Abstract classes are usually extended by other classes which provide the missing implementations.

***

## Why Use Abstract Classes?

- To provide **partial implementation** of functionality.
- To **enforce subclasses** to complete the missing (abstract) methods.
- To promote **code reuse** (shared fields, methods).
- To create a **common interface** with flexibility in implementation.

### Why Use Abstraction?

- To reduce **complexity** of code for the user.
- To separate **interface** from **implementation**.
- To enable **modular and maintainable** programming.

***

## Abstract Class Syntax

```java
abstract class Animal {
    // Abstract method (no body)
    abstract void sound();

    // Concrete method (has body)
    void sleep() {
        System.out.println("Sleeping");
    }
}
```

- Class must be marked `abstract` if it has abstract methods.
- Concrete methods can have full bodies.
- Can have constructors, fields, methods with any access modifier.

***

## Implementing Abstract Class

A subclass **must implement** all abstract methods or also be abstract.

```java
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();   // Output: Woof
        d.sleep();   // Output: Sleeping
    }
}
```

- Instantiating an abstract class directly: **Not allowed**.
- Subclasses implement the abstract methods.

***

## Abstract Class with Constructor and Fields

```java
abstract class Vehicle {
    String brand;

    Vehicle(String brand) {
        this.brand = brand;
    }

    abstract void move();

    void info() {
        System.out.println("Brand: " + brand);
    }
}

class Car extends Vehicle {
    Car(String brand) {
        super(brand);
    }

    void move() {
        System.out.println("Car is moving");
    }
}
```

- Abstract classes can have constructors, fields, and concrete methods.
- Subclass calls superclass constructor using `super`.

***

## Example: Abstract Class with Multiple Implementations

```java
abstract class Shape {
    abstract double area();

    void display() {
        System.out.println("This is a shape");
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double length, width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double area() {
        return length * width;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape1 = new Circle(3);
        shape1.display();
        System.out.println("Area: " + shape1.area());

        Shape shape2 = new Rectangle(4, 5);
        shape2.display();
        System.out.println("Area: " + shape2.area());
    }
}
```

- Abstract class defines an **abstract method** `area()`.
- Concrete subclasses override this method.

***

### Key Rules of Abstract Classes
- You **cannot instantiate** an abstract class directly.  
- An abstract class can have both **abstract** and **non-abstract** methods.  
- A subclass using `extends` must **override all abstract methods**, unless it is also declared abstract.  
- You can have **constructors in abstract classes**, which run when a subclass object is created.  
- Abstract classes can have **variables, static methods, and final methods** too.  
- Supports **partial abstraction**.
- Provides **code reuse** and a common parent type.

### When to Use Abstract Classes
- When you want to provide a **common template** for other classes but leave some methods undefined.  
- When multiple subclasses are expected to share structure but implement specifics differently.  

For example:
- `Shape` can be an abstract class with an abstract `draw()` method.  
- Subclasses like `Circle`, `Square`, or `Triangle` implement `draw()` differently.  

## Abstract Class vs Interface (Quick Comparison)

| Feature | Abstract Class | Interface |
| :-- | :-- | :-- |
| Instantiation | Cannot instantiate | Cannot instantiate |
| Methods | Abstract and concrete allowed | Methods are abstract by default; Java 8+ allows default/static methods |
| Variables | Can have instance variables | Only public static final constants |
| Inheritance | Single inheritance (only one class) | Multiple inheritance supported |
| Constructors | Allowed | Not allowed |
| Access Modifiers | Any (public, private, protected) | Methods and variables are public by default |


***
