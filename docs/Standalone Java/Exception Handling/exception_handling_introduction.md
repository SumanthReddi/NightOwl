---
sidebar_position: 1
title: Introduction
---

# Introduction to Exception Handling

In Java, a program normally executes statements one after another in a smooth flow. However, during execution, unexpected problems can occur. These problems are called **exceptions**.

Understanding what exceptions are and why they occur is the first step toward writing reliable Java programs.

In this section, we’ll explore:

- what exceptions are
- why they occur
- how they affect program execution
- why understanding exceptions is important in programming

---

## What Are Exceptions?

An **exception** in Java is an event that disrupts the normal flow of program execution. It occurs when something unexpected happens during runtime, such as:

- dividing a number by zero
- accessing an invalid array index
- using a null reference
- converting invalid text into a number
- trying to read a file that does not exist

When an exception occurs, the JVM creates an object of type `Throwable` (or one of its subclasses) and "throws" it. If the exception is not handled appropriately, the program terminates abruptly, displaying an error message known as a **stack trace**.

---

## Runtime Problem vs Compile-Time Error

It is important to understand that an exception is different from a compile-time error.

A **compile-time error** is detected by the compiler before the program runs.

Example:

```java
int x = "hello";
```

This code does not compile because the data types are incompatible.

A **runtime problem** happens after the program has compiled, while it is executing.

Example:

```java
int result = 10 / 0;
```

This code compiles successfully, but throws an exception at runtime.

So, exceptions are **runtime problems**, not compile-time errors.

---

## Example: ArithmeticException

Here’s an example of an exception occurring in a standalone Java program:

```java
public class ArithmeticExceptionExample {
    public static void main(String[] args) {
        int result = 10 / 0; // This will throw ArithmeticException
        System.out.println("Result: " + result);
    }
}
```

### Output

```text
Exception in thread "main" java.lang.ArithmeticException: / by zero
```

In this example:

- the program attempts to divide `10` by `0`
- Java throws an `ArithmeticException`
- the program terminates because the exception is not handled

---

## Example: ArrayIndexOutOfBoundsException

Here’s another example of an exception occurring when accessing an invalid array index:

```java
public class ArrayIndexOutOfBoundsExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        System.out.println(numbers[5]); // This will throw ArrayIndexOutOfBoundsException
    }
}
```

### Output

```text
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3
```

In this example:

- the program attempts to access index `5`
- the array contains only 3 elements
- Java throws an `ArrayIndexOutOfBoundsException`

---

## Why Exceptions Matter

Exceptions matter because real-world programs do not always run in perfect conditions.

Without understanding exceptions:

- programs may stop suddenly
- users may see confusing technical errors
- important operations may remain incomplete
- debugging becomes more difficult

By understanding exceptions, developers can write programs that are easier to debug, maintain, and improve.

This chapter focuses on understanding the problem first. In later topics, you will learn how Java provides mechanisms to handle exceptions properly.

---

## Common Types of Exceptions

At a high level, Java exceptions are often discussed in two broad categories:

1. **Checked Exceptions**  
   These are checked at compile time.

   Examples:
   - `IOException`
   - `FileNotFoundException`

2. **Unchecked Exceptions**  
   These occur at runtime.

   Examples:
   - `ArithmeticException`
   - `NullPointerException`
   - `ArrayIndexOutOfBoundsException`

You do not need to study them in depth here. They will be covered properly in the next topic: **Types of Exceptions in Java**.

---

## Key Takeaways

- An exception is a runtime event that interrupts the normal flow of a program.
- Exceptions can occur even when a program compiles successfully.
- Java creates an exception object and searches for a handler.
- If no handler is found, the program terminates and displays a stack trace.
- Common examples include `ArithmeticException` and `ArrayIndexOutOfBoundsException`.

---

## Summary

In this chapter, you learned:

- what an exception is
- why exceptions occur
- how exceptions differ from compile-time errors
- what happens when an exception occurs
- why exceptions are important in Java programming