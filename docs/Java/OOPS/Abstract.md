---
sidebar_position: 2
---

## What Is an Abstract Class?

An **abstract class** in Java is a class that **cannot be instantiated** directly. It is intended to be a **base class** for other classes.

- Declared with the `abstract` keyword.
- Can contain both **abstract methods** (no body) and **concrete methods** (with body).
- Defines a **common template** for subclasses, but some behavior is left for subclasses to implement.

***

## Why Use Abstract Classes?

- To provide **partial implementation** of functionality.
- To **enforce subclasses** to complete the missing (abstract) methods.
- To promote **code reuse** (shared fields, methods).
- To create a **common interface** with flexibility in implementation.

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

## Key Points

- Cannot instantiate an **abstract class**.
- Can have **abstract and non-abstract methods**, constructors, and member variables.
- Subclasses **must override all abstract methods** to be concrete.
- Supports **partial abstraction**.
- Provides **code reuse** and a common parent type.

***

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
