---
sidebar_position: 3
title: Functional Programming With Collections
---


Functional programming became an important part of modern Java after the
introduction of **Lambda Expressions** and the **Streams API** in **Java
8**.

These features allow developers to process collections in a
**declarative, concise, and expressive** way.

Instead of writing loops and temporary variables, developers can
describe **what they want to do**, and the Java runtime handles **how it
is executed**.

------------------------------------------------------------------------

# Key Concepts of Functional Programming

## 1. Immutability

Functional programming prefers **immutable data**.

Instead of modifying existing data, new data structures are created.

Example:

Streams **do not modify the original collection**.

------------------------------------------------------------------------

## 2. Declarative Programming

Instead of writing step‑by‑step logic:

``` java
for(Integer n : numbers){
    if(n % 2 == 0){
        result.add(n);
    }
}
```

We write:

``` java
numbers.stream()
       .filter(n -> n % 2 == 0)
       .collect(Collectors.toList());
```

This describes **what should happen**, not **how**.

------------------------------------------------------------------------

## 3. Higher Order Functions

A function that **takes another function as input** or **returns a
function**.

Example:

``` java
list.stream().map(x -> x * 2)
```

The `map()` method receives a **function (lambda)**.

------------------------------------------------------------------------

## 4. Lazy Evaluation

Intermediate stream operations do **not execute immediately**.

They only execute when a **terminal operation** is called.

Example:

``` java
stream.filter(...).map(...).collect(...)
```

Execution starts only when `collect()` runs.

------------------------------------------------------------------------

# Functional Programming with Streams

The **Streams API** provides operations for processing collections.

## 1. Filtering

``` java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamFilterExample {

    public static void main(String[] args){

        List<Integer> numbers =
            Arrays.asList(1,2,3,4,5);

        List<Integer> evens =
            numbers.stream()
                   .filter(n -> n % 2 == 0)
                   .collect(Collectors.toList());

        System.out.println(evens);
    }
}
```

Output

    [2,4]

------------------------------------------------------------------------

## 2. Mapping

Mapping transforms each element.

``` java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamMapExample {

    public static void main(String[] args){

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

## 3. Reducing

Reducing combines elements into a single value.

``` java
import java.util.Arrays;

public class StreamReduceExample {

    public static void main(String[] args){

        int sum =
            Arrays.stream(new int[]{1,2,3,4,5})
                  .reduce(0,Integer::sum);

        System.out.println(sum);
    }
}
```

Output

    15

------------------------------------------------------------------------

## 4. Sorting

``` java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamSortExample {

    public static void main(String[] args){

        List<String> fruits =
            Arrays.asList("Banana","Apple","Cherry");

        List<String> sorted =
            fruits.stream()
                  .sorted()
                  .collect(Collectors.toList());

        System.out.println(sorted);
    }
}
```

Output

    [Apple, Banana, Cherry]

------------------------------------------------------------------------

## 5. Grouping

Grouping organizes data by a property.

``` java
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class StreamGroupExample {

    public static void main(String[] args){

        List<String> words =
            Arrays.asList("apple","banana","blueberry","avocado");

        Map<Character,List<String>> grouped =
            words.stream()
                 .collect(Collectors.groupingBy(w -> w.charAt(0)));

        System.out.println(grouped);
    }
}
```

------------------------------------------------------------------------

# Method References

Method references simplify lambda expressions.

## Syntax

    ClassName::method
    object::method
    ClassName::new

Example

``` java
fruits.stream()
      .map(String::toUpperCase)
      .collect(Collectors.toList());
```

This replaces:

``` java
.map(s -> s.toUpperCase())
```

------------------------------------------------------------------------

# Parallel Streams

Parallel streams process data using **multiple threads**.

``` java
import java.util.stream.IntStream;

public class ParallelStreamExample {

    public static void main(String[] args){

        int sum =
            IntStream.range(1,1_000_000)
                     .parallel()
                     .sum();

        System.out.println(sum);
    }
}
```

Parallel streams are useful for:

-   CPU intensive tasks
-   Large datasets

But may not help small datasets.

------------------------------------------------------------------------

# Best Practices

### 1. Use Streams for Complex Operations

Streams are excellent for:

-   filtering
-   mapping
-   grouping
-   aggregation

------------------------------------------------------------------------

### 2. Avoid Side Effects

Lambda expressions should avoid modifying external variables.

Bad example:

``` java
list.stream().forEach(x -> total += x);
```

------------------------------------------------------------------------

### 3. Prefer Method References

Use them to improve readability.

------------------------------------------------------------------------

### 4. Benchmark Parallel Streams

Parallel processing is not always faster.

Always test performance.

------------------------------------------------------------------------

# When to Use Functional Programming

Use functional programming when:

-   Processing collections
-   Performing transformations
-   Writing concise declarative code

Avoid when:

-   Logic is extremely simple
-   Imperative loops are clearer

------------------------------------------------------------------------

# Functional vs Imperative Programming

| Feature      | Functional           | Imperative            |
|--------------|----------------------|-----------------------|
| Style        | Declarative          | Step‑by‑step          |
| Readability  | Concise              | Explicit              |
| Parallelism  | Built‑in             | Manual                |
| Best Use     | Transformations      | Simple loops          |
------------------------------------------------------------------------

Functional programming combined with Java collections enables **cleaner,
safer, and more expressive code** in modern Java applications.
