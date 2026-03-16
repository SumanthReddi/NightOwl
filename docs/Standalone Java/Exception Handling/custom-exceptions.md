---
sidebar_position: 7
title: Custom Exceptions
---

# Custom Exceptions

In Java, you can define your own exceptions by creating a subclass of the `Exception` class or its subclasses. These are called **custom exceptions** and are useful for signaling specific error conditions that are unique to your application.

In this section, we’ll explore:
- Why and when to use custom exceptions.
- How to create and throw custom exceptions.
- Practical examples of using custom exceptions.

---

## Why Use Custom Exceptions?

Custom exceptions allow you to:
1. **Signal Specific Errors**:
   - Provide meaningful error messages tailored to your application's logic.
2. **Improve Code Readability**:
   - Make your code more expressive by using descriptive exception names.
3. **Handle Unique Scenarios**:
   - Handle error conditions that are not covered by built-in exceptions.

For example:
- A banking application might throw a `NegativeBalanceException` if a user tries to withdraw more money than their account balance.
- A test automation framework might throw a `TestValidationException` if a validation step fails.

---

## Creating Custom Exceptions

To create a custom exception, extend the `Exception` class (for checked exceptions) or the `RuntimeException` class (for unchecked exceptions).

### Syntax for Custom Exceptions

```java
public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}
```

### Example: Creating a Checked Custom Exception

```java
// Custom checked exception
public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

// Using the custom exception
public class CustomExceptionExample {
    public static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above.");
        } else {
            System.out.println("Valid age.");
        }
    }

    public static void main(String[] args) {
        try {
            validateAge(16); // This will throw InvalidAgeException
        } catch (InvalidAgeException e) {
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
- The `InvalidAgeException` class extends `Exception`, making it a checked exception.
- The `validateAge` method throws the custom exception if the age is less than 18.
- The `catch` block in the `main` method handles the exception.

---

## Creating Unchecked Custom Exceptions

Unchecked custom exceptions extend the `RuntimeException` class. These exceptions do not need to be declared in the method signature or handled explicitly.

### Example: Creating an Unchecked Custom Exception

```java
// Custom unchecked exception
public class NegativeNumberException extends RuntimeException {
    public NegativeNumberException(String message) {
        super(message);
    }
}

// Using the custom exception
public class UncheckedCustomExceptionExample {
    public static void checkNumber(int number) {
        if (number < 0) {
            throw new NegativeNumberException("Number cannot be negative.");
        } else {
            System.out.println("Valid number.");
        }
    }

    public static void main(String[] args) {
        try {
            checkNumber(-5); // This will throw NegativeNumberException
        } catch (NegativeNumberException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Error: Number cannot be negative.
```

**Explanation**:
- The `NegativeNumberException` class extends `RuntimeException`, making it an unchecked exception.
- The `checkNumber` method throws the custom exception if the number is negative.
- The `catch` block in the `main` method handles the exception.

---

## Best Practices for Custom Exceptions

1. **Use Descriptive Names**:
   - Name your custom exceptions clearly to indicate the specific error condition (e.g., `InvalidAgeException`, `NegativeBalanceException`).

2. **Provide Meaningful Error Messages**:
   - Include detailed error messages to help developers understand the cause of the exception.

   ```java
   throw new InvalidAgeException("User age is below the minimum allowed limit.");
   ```

3. **Choose Between Checked and Unchecked Exceptions Wisely**:
   - Use **checked exceptions** for recoverable errors that the caller should handle.
   - Use **unchecked exceptions** for programming errors or unrecoverable conditions.

4. **Avoid Overusing Custom Exceptions**:
   - Only create custom exceptions when built-in exceptions are insufficient to describe the error condition.

---

## Practical Example: Custom Exception in Test Automation

Here’s an example of using a custom exception in a test automation framework:

```java
// Custom exception for test validation
public class TestValidationException extends Exception {
    public TestValidationException(String message) {
        super(message);
    }
}

// Using the custom exception in a test
public class TestAutomationExample {
    public static void validateLoginButtonVisibility(boolean isVisible) throws TestValidationException {
        if (!isVisible) {
            throw new TestValidationException("Login button is not visible.");
        } else {
            System.out.println("Login button is visible.");
        }
    }

    public static void main(String[] args) {
        try {
            boolean loginButtonVisible = false; // Simulate a hidden login button
            validateLoginButtonVisibility(loginButtonVisible);
        } catch (TestValidationException e) {
            System.out.println("Test failed: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Test failed: Login button is not visible.
```

**Explanation**:
- The `TestValidationException` class is used to signal a test failure due to a missing login button.
- The `validateLoginButtonVisibility` method throws the custom exception if the login button is not visible.

---

## Key Takeaways

- Custom exceptions allow you to define specific error conditions that are unique to your application.
- To create a custom exception, extend the `Exception` class (for checked exceptions) or the `RuntimeException` class (for unchecked exceptions).
- Best practices include using descriptive names, providing meaningful error messages, and choosing between checked and unchecked exceptions wisely.
- Custom exceptions are particularly useful in scenarios like test automation, where specific validation failures need to be signaled.

---
