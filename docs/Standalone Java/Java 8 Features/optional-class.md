---
sidebar_position: 5
title: Optional Class
---

# Optional Class

The `Optional` class was introduced in Java 8 to address the common issue of `NullPointerException`. It provides a way to handle null values safely and explicitly, making your code more robust and readable.

## What Is the Optional Class?

The `Optional` class is a container object that may or may not contain a non-null value. It forces you to think about and handle the possibility of null values explicitly, reducing the risk of runtime errors.

## Why Use Optional?

- Avoids `NullPointerException` by providing a clear way to handle null values.
- Encourages better coding practices by making null handling explicit.
- Simplifies code readability and maintainability.

## Common Methods of Optional

### 1. Creating an Optional

- `Optional.of(value)`: Creates an Optional with a non-null value.
- `Optional.ofNullable(value)`: Creates an Optional that may or may not contain a value.
- `Optional.empty()`: Creates an empty Optional.

### 2. Checking for Values

- `isPresent()`: Returns `true` if a value is present.
- `isEmpty()`: Returns `true` if no value is present (introduced in Java 11).

### 3. Retrieving Values

- `get()`: Retrieves the value if present; throws `NoSuchElementException` if empty.
- `orElse(defaultValue)`: Returns the value if present, or a default value if empty.
- `orElseGet(Supplier)`: Returns the value if present, or a value provided by a `Supplier` if empty.

### 4. Performing Actions

- `ifPresent(Consumer)`: Performs an action if a value is present.
- `ifPresentOrElse(Consumer, Runnable)`: Performs an action if a value is present, or a fallback action if empty (introduced in Java 9).

## Example: Using Optional

Here’s an example demonstrating how to use the `Optional` class:

```java
import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        // Create an Optional with a value
        Optional<String> optionalValue = Optional.of("Java 8");

        // Check if a value is present
        if (optionalValue.isPresent()) {
            System.out.println("Value: " + optionalValue.get()); // Output: Value: Java 8
        }

        // Handle null values safely
        String nullValue = null;
        Optional<String> optionalNull = Optional.ofNullable(nullValue);

        // Use orElse to provide a default value
        String result = optionalNull.orElse("Default Value");
        System.out.println("Result: " + result); // Output: Result: Default Value

        // Perform an action if a value is present
        optionalValue.ifPresent(value -> System.out.println("Found: " + value)); // Output: Found: Java 8
    }
}
```

**Explanation**:
- The `Optional.of("Java 8")` creates an Optional containing the value `"Java 8"`.
- The `Optional.ofNullable(null)` creates an empty Optional.
- The `orElse` method provides a default value when the Optional is empty.
- The `ifPresent` method performs an action only if a value is present.

## Key Takeaways

- Use `Optional` to handle null values safely and explicitly.
- Avoid calling `get()` directly without checking `isPresent()` to prevent runtime exceptions.
- Use methods like `orElse`, `orElseGet`, and `ifPresent` to handle values effectively.