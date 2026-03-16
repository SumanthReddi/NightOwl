---
sidebar_position: 6
title: Throw and Throws Keywords
---

# Throw and Throws Keywords

In Java, the `throw` and `throws` keywords are used to handle exceptions explicitly. While they sound similar, they serve different purposes:
- **`throw`**: Used to explicitly throw an exception within a method.
- **`throws`**: Used in a method signature to declare that a method might pass an exception to the caller.

In this section, we’ll explore:
- The syntax and usage of `throw` and `throws`.
- Practical examples of throwing and declaring exceptions.
- Key differences between `throw` and `throws`.

---

## 1. The `throw` Keyword

The `throw` keyword is used to explicitly throw an exception within a method. It allows you to create and throw custom exceptions or rethrow existing ones.

### Syntax of `throw`

```java
throw new ExceptionType("Error message");
```

### Example: Throwing a Custom Exception

```java
public class ThrowExample {
    public static void validateAge(int age) {
        if (age < 18) {
            throw new ArithmeticException("Age must be 18 or above.");
        } else {
            System.out.println("Valid age.");
        }
    }

    public static void main(String[] args) {
        try {
            validateAge(16); // This will throw an exception
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Error: Age must be 18 or above.
```

**Explanation**:
- The `validateAge` method throws an `ArithmeticException` if the age is less than 18.
- The `catch` block in the `main` method handles the exception.

---

## 2. The `throws` Keyword

The `throws` keyword is used in a method signature to declare that a method might throw one or more exceptions. It delegates the responsibility of handling the exception to the caller.

### Syntax of `throws`

```java
public void methodName() throws ExceptionType {
    // Code that might throw an exception
}
```

### Example: Declaring Checked Exceptions

```java
import java.io.FileReader;
import java.io.FileNotFoundException;

public class ThrowsExample {
    public static void readFile(String fileName) throws FileNotFoundException {
        FileReader file = new FileReader(fileName); // This may throw FileNotFoundException
    }

    public static void main(String[] args) {
        try {
            readFile("nonExistentFile.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Error: nonExistentFile.txt (No such file or directory)
```

**Explanation**:
- The `readFile` method declares that it might throw a `FileNotFoundException` using the `throws` keyword.
- The caller (`main` method) is responsible for handling the exception using a `try-catch` block.

---

## Key Differences Between `throw` and `throws`

| **Aspect**              | **`throw`**                                   | **`throws`**                                |
|--------------------------|-----------------------------------------------|--------------------------------------------|
| **Purpose**             | Used to explicitly throw an exception.       | Used to declare that a method might throw an exception. |
| **Location**            | Inside a method body.                        | In the method signature.                   |
| **Applies To**          | A single exception instance.                 | One or more exception types.               |
| **Example**             | `throw new ArithmeticException("Error");`    | `public void method() throws IOException`  |

---

## Best Practices for Using `throw` and `throws`

1. **Use `throw` for Explicit Errors**:
   - Use `throw` to signal specific error conditions, especially when validating input or enforcing business rules.

   ```java
   public static void checkBalance(double balance) {
       if (balance < 0) {
           throw new IllegalArgumentException("Balance cannot be negative.");
       }
   }
   ```

2. **Declare Checked Exceptions with `throws`**:
   - Always declare checked exceptions in the method signature using `throws` so that callers are aware of potential exceptions.

   ```java
   public void connectToDatabase() throws SQLException {
       // Code to connect to the database
   }
   ```

3. **Avoid Overusing `throws` for Runtime Exceptions**:
   - Runtime exceptions (unchecked exceptions) do not need to be declared using `throws`. Overusing `throws` for unchecked exceptions can clutter the code.

4. **Provide Meaningful Error Messages**:
   - When throwing exceptions, include descriptive error messages to aid debugging.

   ```java
   throw new NullPointerException("Attempted to access a null object.");
   ```

---

## Practical Example: Combining `throw` and `throws`

Here’s an example that combines both `throw` and `throws`:

```java
import java.io.FileReader;
import java.io.FileNotFoundException;

public class CombinedExample {
    public static void readFile(String fileName) throws FileNotFoundException {
        if (fileName == null || fileName.isEmpty()) {
            throw new IllegalArgumentException("File name cannot be null or empty.");
        }
        FileReader file = new FileReader(fileName); // This may throw FileNotFoundException
    }

    public static void main(String[] args) {
        try {
            readFile(""); // This will throw IllegalArgumentException
        } catch (IllegalArgumentException | FileNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Error: File name cannot be null or empty.
```

**Explanation**:
- The `readFile` method uses `throw` to validate the file name and `throws` to declare the `FileNotFoundException`.
- The `main` method handles both exceptions using a multi-catch block.

---

## Key Takeaways

- The `throw` keyword is used to explicitly throw an exception within a method.
- The `throws` keyword is used in a method signature to declare that a method might throw one or more exceptions.
- `throw` is used inside the method body, while `throws` is used in the method signature.
- Best practices include providing meaningful error messages, declaring checked exceptions, and avoiding overuse of `throws` for runtime exceptions.

---
