---
sidebar_position: 2
title: Lambda Expressions
---

# Lambda Expressions

Lambda Expressions are one of the most important features introduced in Java 8. They allow you to write shorter and more readable code by replacing anonymous classes with concise syntax.

## What Are Lambda Expressions?

A Lambda Expression is a block of code that can be passed around and executed. It is used to implement functional interfaces, which are interfaces with only one abstract method.

## Syntax of Lambda Expressions

The basic syntax of a Lambda Expression is:

```java
(parameters) -> expression
```

- **Parameters**: The input values for the Lambda.
- **Arrow (`->`)**: Separates the parameters from the body.
- **Expression**: The code to execute.

## Example: Using Lambda Expressions

Here’s an example of how Lambda Expressions simplify code:

```java
// Without Lambda Expression
Runnable runnable = new Runnable() {
    public void run() {
        System.out.println("Hello, World!");
    }
};

// With Lambda Expression
Runnable runnableLambda = () -> System.out.println("Hello, World!");

// Execute the Runnable
new Thread(runnableLambda).start();
```

**Output**:
```text
Hello, World!
```

**Explanation**:
- The Lambda Expression `() -> System.out.println("Hello, World!")` replaces the anonymous class implementation.
- It makes the code shorter and easier to read.

## Functional Interfaces

Functional Interfaces are interfaces with exactly one abstract method. Java 8 provides several built-in functional interfaces in the `java.util.function` package.

### Common Functional Interfaces

1. ```**Predicate<T>**```: Takes an argument and returns a boolean.
   ```java
   Predicate<Integer> isEven = num -> num % 2 == 0;
   System.out.println(isEven.test(4)); // Output: true
   ```

2. ```**Function<T, R>**```: Takes an argument of type `T` and returns a result of type `R`.
   ```java
   Function<String, Integer> stringLength = str -> str.length();
   System.out.println(stringLength.apply("Java")); // Output: 4
   ```

3. ```**Consumer<T>**```: Takes an argument and performs an action without returning a result.
   ```java
   Consumer<String> printMessage = message -> System.out.println(message);
   printMessage.accept("Hello, Lambda!"); // Output: Hello, Lambda!
   ```

4. ```**Supplier<T>**```: Supplies a value of type `T`.
   ```java
   Supplier<Double> randomValue = () -> Math.random();
   System.out.println(randomValue.get()); // Output: A random double value
   ```

## Key Takeaways

- Use Lambda Expressions to replace anonymous classes for functional interfaces.
- Functional Interfaces like `Predicate`, `Function`, `Consumer`, and `Supplier` are part of the `java.util.function` package.
- Lambda Expressions make your code shorter, cleaner, and easier to understand.