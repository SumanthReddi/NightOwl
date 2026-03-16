---
sidebar_position: 8
title: Frequently Asked Questions (FAQs)
---

# Frequently Asked Questions (FAQs)

This section addresses common questions and misconceptions about Java 8 features. These FAQs aim to clarify doubts and provide actionable insights for developers.

---

## 1. What is the difference between a Lambda Expression and an Anonymous Class?

- **Lambda Expression**:
  - A concise way to represent a functional interface.
  - Does not require explicit type declarations or curly braces for single-line implementations.
- **Anonymous Class**:
  - A more verbose way to implement interfaces or extend classes.
  - Requires explicit syntax, including type declarations and curly braces.

### Example

```java
// Using Anonymous Class
Runnable runnable = new Runnable() {
    public void run() {
        System.out.println("Hello, World!");
    }
};

// Using Lambda Expression
Runnable lambdaRunnable = () -> System.out.println("Hello, World!");
```

**Key Difference**:
- The Lambda Expression is shorter and easier to read.

---

## 2. Why does my Stream code not execute immediately?

Streams use **lazy evaluation**, meaning intermediate operations (e.g., `filter`, `map`) are not executed until a terminal operation (e.g., `forEach`, `collect`) is called.

### Example

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

// Intermediate operation (not executed yet)
Stream<String> stream = names.stream().filter(name -> name.startsWith("A"));

// Terminal operation triggers execution
stream.forEach(System.out::println);
```

**Explanation**:
- The `filter` operation is not executed until `forEach` is called.

---

## 3. How do I avoid NullPointerException when using Optional?

Always use methods like `isPresent()`, `orElse`, or `orElseGet` to handle null values safely.

### Example

```java
Optional<String> optionalValue = Optional.ofNullable(null);

// Safe way to retrieve value
String result = optionalValue.orElse("Default Value");
System.out.println(result); // Output: Default Value
```

**Explanation**:
- The `orElse` method provides a default value if the Optional is empty.

---

## 4. What is the difference between `LocalDate` and `ZonedDateTime`?

- **`LocalDate`**:
  - Represents a date without time or time zone (e.g., `2023-10-05`).
- **`ZonedDateTime`**:
  - Represents a date and time with a time zone (e.g., `2023-10-05T14:30:00+02:00[Europe/Paris]`).

### Example

```java
LocalDate localDate = LocalDate.now();
ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("Europe/Paris"));

System.out.println("LocalDate: " + localDate);
System.out.println("ZonedDateTime: " + zonedDateTime);
```

**Output**:
```text
LocalDate: 2023-10-05
ZonedDateTime: 2023-10-05T14:30:00+02:00[Europe/Paris]
```

**Explanation**:
- Use `LocalDate` for simple date operations and `ZonedDateTime` for time zone-aware operations.

---

## 5. Can I use Streams with parallel processing?

Yes, you can use the `parallelStream()` method to process data in parallel, leveraging multi-core processors.

### Example

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Process in parallel
int sum = numbers.parallelStream()
                 .mapToInt(Integer::intValue)
                 .sum();

System.out.println("Sum: " + sum); // Output: Sum: 15
```

**Explanation**:
- The `parallelStream()` method divides the work across multiple threads for faster processing.

---

## 6. Are Default Methods in Interfaces similar to Abstract Classes?

No, they are different:
- **Default Methods**:
  - Provide a default implementation in interfaces.
  - Allow adding new methods to interfaces without breaking existing implementations.
- **Abstract Classes**:
  - Can have constructors, state (fields), and non-default methods.
  - Support inheritance but cannot be implemented by multiple classes.

### Example

```java
interface Vehicle {
    default void stop() {
        System.out.println("Vehicle stopped.");
    }
}

abstract class Car {
    abstract void start();
}
```

**Key Difference**:
- Interfaces with default methods focus on behavior, while abstract classes can include state and behavior.

---

## 7. Why should I prefer the new Date and Time API over the old `Date` and `Calendar` classes?

The new Date and Time API is:
- **Immutable**: Thread-safe and safer for concurrent use.
- **Intuitive**: Easier to use with clear method names.
- **Comprehensive**: Includes classes for dates, times, durations, and time zones.

### Example

```java
// Old API (error-prone)
Date oldDate = new Date();

// New API (modern and safe)
LocalDate newDate = LocalDate.now();
```

**Explanation**:
- The new API avoids the pitfalls of the old `Date` and `Calendar` classes.

---

## Key Takeaways

- Use Lambda Expressions for concise code instead of anonymous classes.
- Streams use lazy evaluation; terminal operations trigger execution.
- Use `Optional` to handle null values safely.
- Prefer `LocalDate` for simple dates and `ZonedDateTime` for time zone-aware operations.
- Default Methods enhance interfaces without breaking existing code.
- The new Date and Time API is modern, thread-safe, and easier to use.