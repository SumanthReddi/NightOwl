---
sidebar_position: 2
title: Types of Exceptions in Java
---

# Types of Exceptions in Java

In Java, problems that occur during program execution are broadly classified into three categories:

1. **Checked Exceptions**
2. **Unchecked Exceptions (Runtime Exceptions)**
3. **Errors**

Understanding these categories is important because Java treats them differently, and developers are expected to respond to them in different ways.

---

## Overview

All exceptions and errors in Java come under the `Throwable` hierarchy.

At a high level:

- **Checked Exceptions** are checked by the compiler
- **Unchecked Exceptions** occur at runtime and are not checked by the compiler
- **Errors** represent serious problems related to the JVM or system environment

This classification helps developers decide:

- which problems must be handled
- which problems should be prevented through good coding
- which problems are usually beyond application-level recovery

---

## 1. Checked Exceptions

### What Are Checked Exceptions?

Checked exceptions are exceptions that the compiler checks at **compile time**.

If a method can throw a checked exception, Java requires the programmer to either:

- handle it using a `try-catch` block, or
- declare it using the `throws` keyword

If neither is done, the program will not compile.

### Why Are They Called "Checked"?

They are called checked exceptions because the compiler checks whether they are properly handled or declared before the program is allowed to run.

### Common Examples

- `FileNotFoundException`
- `IOException`
- `SQLException`
- `ClassNotFoundException`

### Example: FileNotFoundException

```java
import java.io.FileReader;
import java.io.FileNotFoundException;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("nonExistentFile.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Error: File not found.");
        }
    }
}
```

### Output

```text
Error: File not found.
```

### Explanation

- `FileReader` may throw a `FileNotFoundException`
- this is a checked exception
- Java forces the programmer to handle it or declare it

Checked exceptions usually represent situations that the program may reasonably anticipate, such as missing files, network issues, or database access failures.

---

## 2. Unchecked Exceptions (Runtime Exceptions)

### What Are Unchecked Exceptions?

Unchecked exceptions are exceptions that occur at **runtime** and are **not checked by the compiler**.

Java does not force the programmer to handle or declare them.

Most unchecked exceptions are associated with problems in program logic, improper use of objects, invalid assumptions, or incorrect data handling.

### Why Are They Called "Unchecked"?

They are called unchecked because the compiler does not verify whether they are handled.

### Common Examples

- `ArithmeticException`
- `NullPointerException`
- `ArrayIndexOutOfBoundsException`
- `NumberFormatException`
- `IllegalArgumentException`

### Example: ArithmeticException

```java
public class UncheckedExceptionExample {
    public static void main(String[] args) {
        int result = 10 / 0;
        System.out.println(result);
    }
}
```

### Output

```text
Exception in thread "main" java.lang.ArithmeticException: / by zero
```

### Explanation

- dividing by zero causes an `ArithmeticException`
- this is an unchecked exception
- the compiler does not force the programmer to handle it

Unchecked exceptions usually indicate issues that should ideally be prevented through correct coding and proper validation.

---

## 3. Errors

### What Are Errors?

Errors represent serious problems that are usually outside the control of the application.

They are different from exceptions because they generally indicate failures related to:

- the JVM
- system resources
- class loading
- deep runtime problems

In most cases, applications are **not expected to recover** from errors.

### Common Examples

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

- the method keeps calling itself indefinitely
- the call stack keeps growing
- eventually, the JVM throws a `StackOverflowError`

Errors are usually not handled in normal application code because they often indicate serious conditions from which recovery is not practical.

---

## Checked Exceptions vs Unchecked Exceptions

| Aspect | Checked Exceptions | Unchecked Exceptions |
|---|---|---|
| Checked by compiler | Yes | No |
| Handling required | Yes, must be handled or declared | No, optional |
| Occur at | Compile-time checking, runtime occurrence | Runtime |
| Typical cause | External or recoverable conditions | Programming logic issues or invalid runtime assumptions |
| Examples | `IOException`, `SQLException` | `NullPointerException`, `ArithmeticException` |

---

## Exception vs Error

This is another important distinction:

- **Exceptions** are conditions that applications may handle
- **Errors** are serious problems that applications usually should not try to handle routinely

In simple terms:

- checked exceptions -> must be acknowledged
- unchecked exceptions -> should usually be prevented through better coding
- errors -> usually indicate major runtime or system failure

---

## Key Takeaways

- Java classifies runtime problems into checked exceptions, unchecked exceptions, and errors.
- Checked exceptions must be handled or declared.
- Unchecked exceptions are not checked by the compiler.
- Errors represent serious JVM or system-level problems.
- Understanding these categories helps in writing better and more reliable Java programs.

---

## Summary

In this chapter, you learned:

- the three main categories of problems in Java
- what checked exceptions are
- what unchecked exceptions are
- how errors differ from exceptions
- the main differences between checked and unchecked exceptions
