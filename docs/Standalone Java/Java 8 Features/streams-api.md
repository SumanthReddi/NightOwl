---
sidebar_position: 3
title: Streams API
---

# Streams API

The Streams API is one of the most powerful features introduced in Java 8. It allows you to process collections of data in a functional and declarative way, making your code shorter and more readable.

## What Is the Streams API?

A Stream is not a data structure but a pipeline for processing data from a source, such as a collection (e.g., `List`, `Set`). Streams enable operations like filtering, mapping, and reducing data without modifying the original collection.

## Key Characteristics of Streams

1. **Lazy Evaluation**: Operations are executed only when needed.
2. **Immutable**: Streams do not modify the original collection.
3. **Functional**: Streams use Lambda Expressions for concise operations.

## Common Stream Operations

### 1. Intermediate Operations

- These operations return a new Stream and are executed lazily.
- Examples:
  - `filter`: Select elements matching a condition.
  - `map`: Transform elements using a function.
  - `sorted`: Sort elements in natural or custom order.

### 2. Terminal Operations

- These operations produce a result or side effect and terminate the Stream.
- Examples:
  - `forEach`: Iterate through elements.
  - `collect`: Convert the Stream into a collection.
  - `reduce`: Combine elements into a single result.

## Example: Using Streams API

Here’s an example demonstrating common Stream operations:

```java
import java.util.Arrays;
import java.util.List;

public class StreamsExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

        // Filter names starting with 'A'
        List<String> filteredNames = names.stream()
                .filter(name -> name.startsWith("A"))
                .toList(); // Collect results into a List
        System.out.println("Filtered Names: " + filteredNames);

        // Map names to their lengths
        List<Integer> nameLengths = names.stream()
                .map(String::length)
                .toList(); // Collect results into a List
        System.out.println("Name Lengths: " + nameLengths);

        // Reduce names to a single string
        String concatenatedNames = names.stream()
                .reduce("", (result, name) -> result + name + " ");
        System.out.println("Concatenated Names: " + concatenatedNames.trim());
    }
}
```

**Output**:
```text
Filtered Names: [Alice]
Name Lengths: [5, 3, 7, 5]
Concatenated Names: Alice Bob Charlie David
```

**Explanation**:
- The `filter` operation selects names starting with "A".
- The `map` operation transforms names into their lengths.
- The `reduce` operation concatenates all names into a single string.

## Key Takeaways

- Use the Streams API for functional-style operations on collections.
- Intermediate operations (e.g., `filter`, `map`) are lazy and return a new Stream.
- Terminal operations (e.g., `forEach`, `collect`) produce a result or side effect.
- Streams do not modify the original collection.
