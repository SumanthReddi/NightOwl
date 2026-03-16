---
sidebar_position: 4
title: Default and Static Methods in Interfaces
---

# Default and Static Methods in Interfaces

Java 8 introduced **Default Methods** and **Static Methods** in interfaces, making interfaces more flexible and powerful. These features allow you to add new methods to interfaces without breaking existing implementations.

## What Are Default Methods?

A **Default Method** is a method in an interface that has a default implementation. It allows you to add new functionality to interfaces while maintaining backward compatibility with existing implementations.

### Syntax

```java
default void methodName() {
    // Default implementation
}
```

### Example: Using Default Methods

```java
interface Vehicle {
    void start(); // Abstract method

    // Default method
    default void stop() {
        System.out.println("Vehicle stopped.");
    }
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car started.");
    }
}

public class DefaultMethodExample {
    public static void main(String[] args) {
        Vehicle car = new Car();
        car.start(); // Output: Car started.
        car.stop();  // Output: Vehicle stopped.
    }
}
```

**Explanation**:
- The `stop` method is a default method in the `Vehicle` interface.
- The `Car` class inherits the default implementation of `stop` without needing to implement it.

## What Are Static Methods?

A **Static Method** in an interface is similar to static methods in classes. It belongs to the interface itself and cannot be overridden by implementing classes.

### Syntax

```java
static void methodName() {
    // Static implementation
}
```

### Example: Using Static Methods

```java
interface MathOperations {
    // Static method
    static int add(int a, int b) {
        return a + b;
    }
}

public class StaticMethodExample {
    public static void main(String[] args) {
        int result = MathOperations.add(5, 3);
        System.out.println("Result: " + result); // Output: Result: 8
    }
}
```

**Explanation**:
- The `add` method is a static method in the `MathOperations` interface.
- You can call it directly using the interface name (`MathOperations.add`).

## Key Takeaways

- **Default Methods**: Provide a default implementation in interfaces, allowing backward compatibility.
- **Static Methods**: Belong to the interface itself and are called using the interface name.
- Both features enhance the flexibility of interfaces in Java 8.
