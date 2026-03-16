---
sidebar_position: 3
title: Java Exception Hierarchy
---

# Java Exception Hierarchy

In Java, all exceptions and errors are represented as classes that inherit from the `Throwable` class. Understanding the exception hierarchy is important because it helps developers identify the type of problem that occurred and decide how that problem should be handled.

---

## Overview of the Hierarchy

The `Throwable` class is the root of the Java exception hierarchy. It has two major direct subclasses:

1. `Exception`
2. `Error`

A simplified view of the hierarchy looks like this:

```text
Throwable
├── Error
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── ...
└── Exception
    ├── RuntimeException
    │   ├── ArithmeticException
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   └── ...
    └── Checked Exceptions
        ├── IOException
        │   ├── FileNotFoundException
        │   └── ...
        ├── SQLException
        └── ...
```

This structure shows that both exceptions and errors come from the same root, but Java treats them differently.

---

## 1. The `Throwable` Class

`Throwable` is the base class for everything that can be thrown by the JVM or by application code using the `throw` keyword.

It provides useful methods such as:

- `getMessage()` – returns the message associated with the problem
- `printStackTrace()` – prints the stack trace for debugging
- `toString()` – returns the name of the exception class along with the message

### Example: Using `getMessage()` and `printStackTrace()`

```java
public class ThrowableExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error Message: " + e.getMessage());
            System.out.println("Stack Trace:");
            e.printStackTrace();
        }
    }
}
```

### Possible Output

```text
Error Message: / by zero
Stack Trace:
java.lang.ArithmeticException: / by zero
    at ThrowableExample.main(ThrowableExample.java:5)
```

### Explanation

- `ArithmeticException` belongs to the `Throwable` hierarchy
- `getMessage()` returns the error message
- `printStackTrace()` helps identify where the exception occurred

---

## 2. The `Exception` Class

The `Exception` class represents conditions that applications may want to handle.

It is the main branch used for application-level problems. Most exception handling in Java focuses on objects that come under `Exception`.

The `Exception` class is broadly divided into:

- **checked exceptions**
- **unchecked exceptions**

### Checked Exceptions

Checked exceptions are checked by the compiler. They must be handled or declared.

Examples:

- `IOException`
- `FileNotFoundException`
- `SQLException`

### Example: Checked Exception

```java
import java.io.FileReader;
import java.io.FileNotFoundException;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("nonExistentFile.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Checked Exception: " + e.getMessage());
        }
    }
}
```

### Possible Output

```text
Checked Exception: nonExistentFile.txt (No such file or directory)
```

### Explanation

- `FileNotFoundException` is a subclass of `IOException`
- `IOException` is a subclass of `Exception`
- because it is checked, Java requires it to be handled or declared

---

## 3. The `RuntimeException` Class

`RuntimeException` is a subclass of `Exception`.

All exceptions that extend `RuntimeException` are called **unchecked exceptions**. These are not checked by the compiler.

They usually occur because of:

- invalid logic
- incorrect assumptions
- improper use of objects
- invalid data handling

Common examples include:

- `ArithmeticException`
- `NullPointerException`
- `ArrayIndexOutOfBoundsException`
- `NumberFormatException`

### Example: Runtime Exception

```java
public class RuntimeExceptionExample {
    public static void main(String[] args) {
        String text = null;
        System.out.println(text.length());
    }
}
```

### Possible Output

```text
Exception in thread "main" java.lang.NullPointerException
```

### Explanation

- `NullPointerException` is a subclass of `RuntimeException`
- `RuntimeException` is a subclass of `Exception`
- the compiler does not force the programmer to handle it

This is why `RuntimeException` is a very important part of the hierarchy.

---

## 4. The `Error` Class

The `Error` class represents serious problems that are usually outside the control of the application.

Errors are different from exceptions because they generally indicate failures related to:

- the JVM
- memory
- class loading
- system-level runtime problems

Applications usually do not try to recover from errors in normal code.

Common examples include:

- `OutOfMemoryError`
- `StackOverflowError`
- `VirtualMachineError`
- `NoClassDefFoundError`

### Example: StackOverflowError

```java
public class ErrorExample {
    public static void recursiveMethod() {
        recursiveMethod();
    }

    public static void main(String[] args) {
        recursiveMethod();
    }
}
```

### Possible Output

```text
Exception in thread "main" java.lang.StackOverflowError
```

### Explanation

- the method calls itself indefinitely
- the stack keeps growing
- the JVM eventually throws `StackOverflowError`

Although errors are part of the `Throwable` hierarchy, they are not handled the same way as exceptions in normal application code.

---

## Key Relationships in the Hierarchy

Some important relationships to remember:

- `Throwable` is the root class
- `Exception` and `Error` are direct subclasses of `Throwable`
- `RuntimeException` is a subclass of `Exception`
- checked exceptions are subclasses of `Exception` that are not subclasses of `RuntimeException`

This means:

- every `RuntimeException` is an `Exception`
- every `Exception` is a `Throwable`
- every `Error` is a `Throwable`
- not every `Exception` is a `RuntimeException`

---

## Why Understanding the Hierarchy Matters

Understanding the hierarchy helps in several ways:

- it helps you catch more specific exceptions
- it prevents overly broad exception handling
- it helps you understand compiler rules for checked exceptions
- it improves debugging by showing how exception types are related
- it builds the foundation for learning `try-catch`, `throw`, `throws`, and custom exceptions

For example, if you understand that `FileNotFoundException` is a subclass of `IOException`, you can decide whether to catch the specific exception or its parent type.

---

## Key Takeaways

- `Throwable` is the root of the Java exception hierarchy
- `Exception` and `Error` are the two major subclasses of `Throwable`
- `RuntimeException` is a subclass of `Exception`
- checked exceptions and unchecked exceptions are both part of the `Exception` branch
- errors represent serious problems and are usually not handled in normal application code

---

## Summary

In this chapter, you learned:

- the overall structure of the Java exception hierarchy
- the role of `Throwable`
- the difference between `Exception` and `Error`
- where `RuntimeException` fits in the hierarchy
- why hierarchy knowledge is important for effective exception handling
