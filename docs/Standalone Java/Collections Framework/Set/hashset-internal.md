---
sidebar_position: 1
title: HashSet 
---
<!-- # 01-hashset -->

## The `HashSet` Class in Java

The `HashSet` class is one of the most commonly used implementations of
the `Set` interface in the Java Collection Framework. It represents a
collection that **does not allow duplicate elements** and provides
constant-time performance for basic operations like `add`, `remove`, and
`contains`. Internally, `HashSet` is backed by a **hash table**, which
ensures fast lookups and insertions.

------------------------------------------------------------------------

## Key Characteristics of `HashSet`

-   **Uniqueness**: Does not allow duplicate elements. If a duplicate is
    added, `add()` returns `false`.
-   **No Guaranteed Order**: Iteration order is not guaranteed.
-   **Null Handling**: Allows **one `null` element**.
-   **Performance**: Basic operations are typically **O(1)** assuming
    good hash distribution.

------------------------------------------------------------------------

## Common Use Cases

-   Storing unique elements.
-   Fast lookup operations.
-   Removing duplicates from collections.
-   Membership checking (`contains`).

------------------------------------------------------------------------

## Important Methods

| Method                         | Description                      |
|--------------------------------|----------------------------------|
| `boolean add(E e)`             | Adds element if not present      |
| `boolean remove(Object o)`     | Removes element                  |
| `boolean contains(Object o)`   | Checks existence                 |
| `int size()`                   | Returns number of elements       |
| `boolean isEmpty()`            | Checks if set is empty           |
| `void clear()`                 | Removes all elements             |

------------------------------------------------------------------------

## Example 1: Basic Operations

``` java
import java.util.HashSet;
import java.util.Set;

public class HashSetExample {

    public static void main(String[] args) {

        Set<String> fruits = new HashSet<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Apple");

        System.out.println("Fruits: " + fruits);

        System.out.println("Contains Banana? " + fruits.contains("Banana"));

        fruits.remove("Cherry");

        System.out.println("After removal: " + fruits);

        for(String fruit : fruits){
            System.out.println(fruit);
        }
    }
}
```

------------------------------------------------------------------------

## Example 2: Removing Duplicates from List

``` java
import java.util.*;

public class RemoveDuplicatesExample {

    public static void main(String[] args) {

        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Cherry");

        System.out.println("Original List: " + fruits);

        Set<String> unique = new HashSet<>(fruits);

        System.out.println("Unique Fruits: " + unique);
    }
}
```

------------------------------------------------------------------------

## Example 3: Handling Null Values

``` java
import java.util.HashSet;
import java.util.Set;

public class HashSetNullExample {

    public static void main(String[] args) {

        Set<String> colors = new HashSet<>();

        colors.add("Red");
        colors.add(null);
        colors.add("Blue");
        colors.add(null);

        System.out.println(colors);
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

Performance depends on good `hashCode()` implementation.

------------------------------------------------------------------------

## When to Use HashSet

Use `HashSet` when:

-   You need **unique elements**
-   **Ordering does not matter**
-   **Fast lookups** are required

Avoid when:

-   Ordering matters → use `LinkedHashSet`
-   Sorting required → use `TreeSet`

------------------------------------------------------------------------

## Comparison: HashSet vs LinkedHashSet vs TreeSet

| Feature        | HashSet      | LinkedHashSet              | TreeSet        |
|----------------|--------------|----------------------------|----------------|
| Order          | No order     | Insertion order            | Sorted         |
| Performance    | O(1)         | O(1) slightly slower       | O(log n)       |
| Null Support   | One null     | One null                   | No null        |
| Structure      | Hash table   | Hash table + linked list   | Red‑Black tree |