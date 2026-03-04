---
sidebar_position: 2
title: Immutable Collections
---
<!-- # 02-immutable-collections -->

## Immutable Collections in Java

Immutable collections are unmodifiable collections that cannot be
altered after creation. Introduced in **Java 9**, these collections
provide a convenient and efficient way to create read-only collections
using factory methods like `List.of()`, `Set.of()`, and `Map.of()`.

Immutable collections are ideal for scenarios where **data integrity**
and **thread safety** are critical.

------------------------------------------------------------------------

## Key Characteristics of Immutable Collections

-   **Unmodifiable** -- Once created, elements cannot be added, removed,
    or modified.
-   **Compact Memory Footprint** -- Optimized for small collections.
-   **Thread Safe** -- Immutable objects are inherently safe for
    concurrent access.
-   **No Null Values** -- `null` elements are not allowed and will throw
    `NullPointerException`.

------------------------------------------------------------------------

## Common Use Cases

Immutable collections are useful for:

-   Configuration data
-   Constants
-   Lookup tables
-   Read-only datasets
-   Functional programming pipelines
-   Multi-threaded environments

------------------------------------------------------------------------

## Factory Methods (Java 9+)

Java 9 introduced convenient factory methods for creating immutable
collections.
| Method                     | Description                                           |
|----------------------------|-------------------------------------------------------|
| `List.of(E... elements)`   | Creates an immutable list                             |
| `Set.of(E... elements)`    | Creates an immutable set                              |
| `Map.of(K, V...)`          | Creates an immutable map (up to 10 key-value pairs)   |
| `Map.ofEntries()`          | Creates an immutable map with unlimited entries       |
------------------------------------------------------------------------

## Example: Immutable List

``` java
import java.util.List;

public class ImmutableListExample {

    public static void main(String[] args) {

        List<String> fruits = List.of("Apple","Banana","Cherry");

        System.out.println(fruits);

        // fruits.add("Mango"); // UnsupportedOperationException

    }

}
```

------------------------------------------------------------------------

## Example: Immutable Set

``` java
import java.util.Set;

public class ImmutableSetExample {

    public static void main(String[] args) {

        Set<String> colors = Set.of("Red","Green","Blue");

        System.out.println(colors);

        // colors.remove("Blue"); // UnsupportedOperationException

    }

}
```

------------------------------------------------------------------------

## Example: Immutable Map

``` java
import java.util.Map;

public class ImmutableMapExample {

    public static void main(String[] args) {

        Map<String,Integer> scores = Map.of(
                "Alice",95,
                "Bob",87,
                "Charlie",92
        );

        System.out.println(scores);

        // scores.put("David",88); // UnsupportedOperationException

    }

}
```

------------------------------------------------------------------------

## Example: Map.ofEntries()

Useful when more than 10 entries are required.

``` java
import java.util.Map;

public class ImmutableMapEntriesExample {

    public static void main(String[] args) {

        Map<String,Integer> scores = Map.ofEntries(
                Map.entry("Alice",95),
                Map.entry("Bob",87),
                Map.entry("Charlie",92),
                Map.entry("David",88)
        );

        System.out.println(scores);

    }

}
```

------------------------------------------------------------------------

## Performance Characteristics
| Aspect      | Behavior     |
|-------------|--------------|
| Creation    | Fast         |
| Memory      | Compact      |
| Iteration   | Fast         |
| Modification| Not allowed  |

Immutable collections are often **more memory efficient** for small
datasets.

------------------------------------------------------------------------

## When to Use Immutable Collections

Use them when:

-   Data should **never change**
-   You want **safe sharing across threads**
-   Prevent **accidental modification**
-   Define **constants** or **configuration data**

Avoid when:

-   Data changes frequently
-   Collections grow dynamically

------------------------------------------------------------------------

## Immutable vs Mutable Collections
| Feature         | Immutable             | Mutable                           |
|-----------------|-----------------------|-----------------------------------|
| Modification    | Not allowed           | Allowed                           |
| Thread Safety   | Built-in              | Requires synchronization          |
| Null Support    | Not allowed           | Depends on implementation         |
| Typical Use     | Constants / configs   | Dynamic data                      |
------------------------------------------------------------------------

## Summary

Immutable collections provide:

1.  Safety from accidental modification
2.  Built-in thread safety
3.  Cleaner code using factory methods
4.  Efficient small collections

They are widely used in modern Java applications for **configuration,
constants, and functional programming pipelines**.
