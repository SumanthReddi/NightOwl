---
sidebar_position: 2
title: Third Party Libraries
---


While the Java Collections Framework provides a robust set of tools,
third-party libraries offer additional features, optimizations, and
utilities that can simplify and enhance your work with collections.

These libraries are especially useful in:

-   Large-scale applications
-   Performance-critical systems
-   Memory-sensitive environments
-   Functional-style collection processing

This guide introduces three widely used libraries:

-   **Eclipse Collections**
-   **Guava**
-   **FastUtil**

------------------------------------------------------------------------

# 1. Eclipse Collections

Eclipse Collections is a comprehensive library that extends the Java
Collections Framework with powerful APIs and memory‑efficient data
structures.

### Key Features

-   Rich functional APIs (`select`, `reject`, `collect`)
-   Primitive collections (`IntList`, `LongSet`)
-   Immutable collections
-   Advanced structures like **Multimaps** and **Bags**

### Example

``` java
import org.eclipse.collections.api.list.MutableList;
import org.eclipse.collections.impl.factory.Lists;

public class EclipseCollectionsExample {

    public static void main(String[] args) {

        MutableList<String> fruits =
            Lists.mutable.with("Apple","Banana","Cherry");

        MutableList<String> filtered =
            fruits.select(f -> f.startsWith("A"));

        System.out.println(filtered);

        MutableList<Integer> lengths =
            fruits.collect(String::length);

        System.out.println(lengths);
    }
}
```

### When to Use

Use Eclipse Collections when you need:

-   Functional-style APIs
-   Primitive collections
-   Rich collection operations

------------------------------------------------------------------------

# 2. Guava

Guava is a widely used Google library that provides utilities for
collections, caching, concurrency, and more.

### Key Features

-   Immutable collections
-   Multimaps
-   Tables (row-column maps)
-   Utility helpers for collections

### Example

``` java
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;

import java.util.List;

public class GuavaExample {

    public static void main(String[] args) {

        List<String> fruits =
            ImmutableList.of("Apple","Banana","Cherry");

        System.out.println(fruits);

        List<List<String>> partitions =
            Lists.partition(fruits,2);

        System.out.println(partitions);
    }
}
```

### When to Use

Use Guava when you need:

-   Immutable collections
-   Multimap support
-   Utility helpers for collections

------------------------------------------------------------------------

# 3. FastUtil

FastUtil is designed for **high‑performance primitive collections**.

It avoids **boxing and unboxing**, which improves both memory usage and
performance.

### Key Features

-   Primitive collections (`IntArrayList`, `IntSet`, etc.)
-   Extremely memory efficient
-   Very fast operations for primitive data

### Example

``` java
import it.unimi.dsi.fastutil.ints.IntArrayList;

public class FastUtilExample {

    public static void main(String[] args) {

        IntArrayList numbers = new IntArrayList();

        numbers.add(1);
        numbers.add(2);
        numbers.add(3);

        int sum = numbers.stream().sum();

        System.out.println(sum);
    }
}
```

### When to Use

Use FastUtil when:

-   Handling very large primitive datasets
-   Memory usage matters
-   Performance is critical

------------------------------------------------------------------------

# Library Comparison
| Feature               | Eclipse Collections | Guava                | FastUtil                 |
|-----------------------|---------------------|----------------------|--------------------------|
| Primitive Collections | Yes                 | No                   | Yes                      |
| Immutable Collections | Yes                 | Yes                  | No                       |
| Advanced Structures   | Multimaps, Bags     | Multimaps, Tables    | No                       |
| Functional APIs       | Rich                | Limited              | Minimal                  |
| Performance           | General optimized   | General purpose      | Primitive optimized      |
------------------------------------------------------------------------

# Choosing the Right Library

### Use Eclipse Collections

Best for:

-   Functional programming style
-   Rich collection APIs
-   Advanced collection operations

### Use Guava

Best for:

-   Immutable collections
-   Multimaps and utilities
-   Projects already using Guava

### Use FastUtil

Best for:

-   Primitive datasets
-   High‑performance scenarios
-   Memory-sensitive applications

------------------------------------------------------------------------

# Best Practices

1.  First evaluate whether standard Java collections are sufficient.
2.  Introduce third‑party libraries only when needed.
3.  Choose the library that best fits your requirements.
4.  Be mindful of dependency management and version compatibility.

------------------------------------------------------------------------

Third-party collection libraries can significantly improve
**performance, readability, and functionality** when used appropriately
in large-scale Java applications.
