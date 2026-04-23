---
sidebar_position: 2
title: LinkedHashSet
---


## The `LinkedHashSet` Class in Java

The `LinkedHashSet` class is an implementation of the `Set` interface
that combines the features of a **hash table** and a **linked list**. It
maintains the **insertion order** of elements, making it ideal for
scenarios where you need both uniqueness and predictable iteration
order.

------------------------------------------------------------------------

## Key Characteristics of `LinkedHashSet`

-   **Uniqueness**: Duplicate elements are not allowed.
-   **Insertion Order**: Maintains the order elements were added.
-   **Performance**: Basic operations like `add`, `remove`, and
    `contains` are typically **O(1)**.
-   **Null Handling**: Allows **one null element**.
-   **Memory Overhead**: Slightly higher than `HashSet` because it
    maintains a linked list.

------------------------------------------------------------------------

## Common Use Cases

-   Maintaining **unique elements with insertion order**
-   Removing duplicates while preserving order
-   Scenarios where predictable iteration order is required
-   Lightweight caching scenarios

------------------------------------------------------------------------

## Important Methods
| Method                         | Description                            |
|--------------------------------|----------------------------------------|
| `boolean add(E e)`             | Adds element if not already present    |
| `boolean remove(Object o)`     | Removes element                        |
| `boolean contains(Object o)`   | Checks existence                       |
| `int size()`                   | Returns number of elements             |
| `boolean isEmpty()`            | Checks if set is empty                 |
| `void clear()`                 | Removes all elements                   |
------------------------------------------------------------------------

## Example 1: Basic Operations

``` java
import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetExample {

    public static void main(String[] args) {

        Set<String> colors = new LinkedHashSet<>();

        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");
        colors.add("Red");

        System.out.println(colors);

        System.out.println(colors.contains("Green"));

        colors.remove("Blue");

        System.out.println(colors);

        for(String color : colors){
            System.out.println(color);
        }
    }
}
```

------------------------------------------------------------------------

## Example 2: Maintaining Insertion Order

``` java
import java.util.LinkedHashSet;
import java.util.Set;

public class InsertionOrderExample {

    public static void main(String[] args) {

        Set<Integer> numbers = new LinkedHashSet<>();

        numbers.add(3);
        numbers.add(1);
        numbers.add(2);

        System.out.println(numbers);
    }
}
```

------------------------------------------------------------------------

## Example 3: Removing Duplicates While Preserving Order

``` java
import java.util.*;

public class RemoveDuplicatesWithOrderExample {

    public static void main(String[] args) {

        List<String> fruits = new ArrayList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Cherry");

        System.out.println("Original List: " + fruits);

        Set<String> uniqueFruits = new LinkedHashSet<>(fruits);

        System.out.println("Unique Fruits: " + uniqueFruits);
    }
}
```

------------------------------------------------------------------------

## Performance Characteristics
| Operation    | Complexity |
|--------------|------------|
| add()        | O(1)       |
| remove()     | O(1)       |
| contains()   | O(1)       |
| iteration    | O(n)       |

Slightly slower than `HashSet` due to maintaining a linked structure.

------------------------------------------------------------------------

## When to Use LinkedHashSet

Use `LinkedHashSet` when:

-   You need **unique elements**
-   You need **insertion order preserved**
-   Iteration order must be predictable

Avoid when:

-   Order does not matter → use `HashSet`
-   Sorted order required → use `TreeSet`

------------------------------------------------------------------------

## Comparison: LinkedHashSet vs HashSet vs TreeSet
| Feature        | LinkedHashSet              | HashSet      | TreeSet        |
|----------------|----------------------------|--------------|----------------|
| Order          | Insertion order            | No order     | Sorted         |
| Performance    | O(1)                       | O(1)         | O(log n)       |
| Null Support   | One null                   | One null     | No null        |
| Structure      | Hash table + linked list   | Hash table   | Red‑Black tree |