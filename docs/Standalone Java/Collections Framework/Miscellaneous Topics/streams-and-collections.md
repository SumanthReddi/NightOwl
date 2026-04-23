---
sidebar_position: 3
title: Streams and Collections
---


## Using Streams with Collections in Java

The **Streams API**, introduced in **Java 8**, provides a powerful and
expressive way to process collections of data. Streams allow operations
like filtering, sorting, mapping, and reducing in a **declarative and
functional style**, making code more readable and concise.

Streams **do not store data** themselves; they operate on data sources
such as collections, arrays, or I/O channels.

------------------------------------------------------------------------

## Key Characteristics of Streams

-   **Functional Programming** -- Supports operations like `filter`,
    `map`, and `reduce`
-   **Lazy Evaluation** -- Intermediate operations execute only when a
    terminal operation runs
-   **No Source Modification** -- The original collection is not
    modified
-   **Parallel Processing** -- Can process data concurrently using
    `parallelStream()`

------------------------------------------------------------------------

## Common Use Cases

Streams are commonly used for:

-   Filtering data
-   Sorting elements
-   Transforming objects
-   Aggregating values
-   Grouping data
-   Partitioning data

------------------------------------------------------------------------

## Types of Stream Operations

### Intermediate Operations

Intermediate operations return a **new stream** and are **lazy**.

Examples:

-   `filter()`
-   `map()`
-   `sorted()`
-   `distinct()`
-   `limit()`

### Terminal Operations

Terminal operations **trigger execution** of the stream pipeline.

Examples:

-   `collect()`
-   `forEach()`
-   `reduce()`
-   `count()`
-   `findFirst()`

------------------------------------------------------------------------

## Example: Filtering Elements

``` java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamFilterExample {

    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);

        List<Integer> evens = numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());

        System.out.println(evens);

    }

}
```

------------------------------------------------------------------------

## Example: Sorting Elements

``` java
import java.util.Arrays;
import java.util.List;
import java.util.Comparator;
import java.util.stream.Collectors;

public class StreamSortExample {

    public static void main(String[] args) {

        List<String> fruits =
                Arrays.asList("Banana","Apple","Cherry");

        List<String> sorted =
                fruits.stream()
                        .sorted()
                        .collect(Collectors.toList());

        System.out.println(sorted);

        List<String> reverseSorted =
                fruits.stream()
                        .sorted(Comparator.reverseOrder())
                        .collect(Collectors.toList());

        System.out.println(reverseSorted);

    }

}
```

------------------------------------------------------------------------

## Example: Mapping Elements

``` java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamMapExample {

    public static void main(String[] args) {

        List<String> fruits =
                Arrays.asList("Apple","Banana","Cherry");

        List<String> upper =
                fruits.stream()
                        .map(String::toUpperCase)
                        .collect(Collectors.toList());

        System.out.println(upper);

    }

}
```

------------------------------------------------------------------------

## Example: Aggregating Data

``` java
import java.util.Arrays;
import java.util.List;
import java.util.Comparator;

public class StreamAggregateExample {

    public static void main(String[] args) {

        List<Integer> numbers =
                Arrays.asList(1,2,3,4,5);

        int sum =
                numbers.stream()
                        .mapToInt(Integer::intValue)
                        .sum();

        System.out.println(sum);

        int max =
                numbers.stream()
                        .max(Comparator.naturalOrder())
                        .orElse(-1);

        System.out.println(max);

    }

}
```

------------------------------------------------------------------------

## Example: Grouping Elements

``` java
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class StreamGroupByExample {

    public static void main(String[] args) {

        List<String> words =
                Arrays.asList("apple","banana","cherry","blueberry","avocado");

        Map<Character,List<String>> grouped =
                words.stream()
                        .collect(Collectors.groupingBy(word -> word.charAt(0)));

        System.out.println(grouped);

    }

}
```

------------------------------------------------------------------------

## Sequential vs Parallel Streams

  Type                Description
  ------------------- -------------------------------------
  Sequential Stream   Processes elements one by one
  Parallel Stream     Splits work across multiple threads

Example:

``` java
numbers.parallelStream()
       .filter(n -> n > 5)
       .forEach(System.out::println);
```

Parallel streams are useful for **large datasets and CPU‑intensive
operations**.

------------------------------------------------------------------------

## Performance Considerations
| Aspect                | Behavior                                           |
|-----------------------|----------------------------------------------------|
| Small datasets        | Traditional loops may be faster                    |
| Large datasets        | Streams can be efficient                           |
| Parallel processing   | Useful for CPU-heavy tasks                         |
| Memory usage          | Slight overhead for complex pipelines              |
------------------------------------------------------------------------

## When to Use Streams

Use Streams when:

-   Performing **transformations**
-   Filtering collections
-   Aggregating data
-   Processing pipelines of operations

Avoid Streams when:

-   Simple loops are clearer
-   Heavy mutation of collections is required

------------------------------------------------------------------------

## Streams vs Traditional Loops
| Feature             | Streams                 | Loops                      |
|---------------------|-------------------------|----------------------------|
| Readability         | Concise                 | Explicit                   |
| Performance         | Slight overhead         | Often faster               |
| Parallelism         | Built-in                | Manual implementation      |
| Complexity handling | Better for pipelines    | Harder for complex logic   |
------------------------------------------------------------------------

## Summary

Streams provide:

1.  Functional-style processing
2.  Concise and readable code
3.  Powerful transformation pipelines
4.  Built-in support for parallel processing

They are widely used in modern Java applications for **data processing
and collection transformations**.
