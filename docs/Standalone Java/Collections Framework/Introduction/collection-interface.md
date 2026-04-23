---
sidebar_position: 2
title: Collection Interface
---


## The `Collection` Interface in Java

The `Collection` interface is the **root interface** in the Java
Collection Framework hierarchy. It defines the basic operations that all
collection types (e.g., `List`, `Set`, `Queue`) must implement. While
you rarely instantiate `Collection` directly, understanding its methods
is crucial for working with concrete implementations like `ArrayList`,
`HashSet`, and `PriorityQueue`.

------------------------------------------------------------------------

## Key Characteristics of `Collection`

-   **Generic**: Uses generics (`<E>`) to ensure type safety.
-   **Polymorphism**: Allows you to write code that works with any
    collection type.
-   **Core Operations**: Provides methods for adding, removing, and
    querying elements.

------------------------------------------------------------------------

## Methods in the `Collection` Interface
| Method                         | Description                                                              |
|--------------------------------|--------------------------------------------------------------------------|
| `boolean add(E e)`             | Adds the specified element to the collection                             |
| `boolean remove(Object o)`     | Removes a single instance of the specified element                       |
| `boolean contains(Object o)`   | Returns `true` if the collection contains the specified element          |
| `int size()`                   | Returns the number of elements                                           |
| `boolean isEmpty()`            | Returns `true` if the collection contains no elements                    |
| `Iterator<E> iterator()`       | Returns an iterator                                                      |
| `Object[] toArray()`           | Returns an array containing all elements                                 |
| `boolean addAll(Collection<? extends E> c)` | Adds all elements from another collection                                |
| `boolean removeAll(Collection<?> c)`        | Removes all matching elements                                            |
| `boolean retainAll(Collection<?> c)`        | Retains only elements contained in the given collection                  |
| `void clear()`                 | Removes all elements                                                     |
------------------------------------------------------------------------

## Code Examples

### Example 1: Basic Operations

``` java
import java.util.*;

public class CollectionExample {

    public static void main(String[] args) {

        Collection<String> fruits = new ArrayList<>();
        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        System.out.println("Fruits: " + fruits);    // → [Apple, Banana, Cherry]

        // Check size
        System.out.println("Size: " + fruits.size());   // → 3

        // Check if an element exists
        System.out.println("Contains Banana? " + fruits.contains("Banana"));    // → true

        // Remove an element
        fruits.remove("Cherry");
        System.out.println("After removal: " + fruits);     // → [Apple, Banana]

        // Convert to array
        Object[] fruitArray = fruits.toArray();
        System.out.println(Arrays.toString(fruitArray));    // → [Apple, Banana]
    }
}
```

------------------------------------------------------------------------

### Example 2: Bulk Operations

``` java
import java.util.*;

public class BulkOperationsExample {

    public static void main(String[] args) {

        Collection<String> fruits = new ArrayList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        Collection<String> toRemove = Arrays.asList("Banana", "Cherry");

        // Remove all matching elements
        fruits.removeAll(toRemove);

        System.out.println("After removeAll: " + fruits);   // → [Apple]

        // Retain only matching elements
        fruits.addAll(Arrays.asList("Apple", "Orange"));
        fruits.retainAll(Collections.singleton("Apple"));
        System.out.println("After retainAll: " + fruits);       // → [Apple]
    }
}
```

------------------------------------------------------------------------

## When to Use the `Collection` Interface

Use the `Collection` interface when:

-   You want **generic reusable methods**
-   You want to write **implementation-independent code**
-   You want your code to work with **List, Set, Queue implementations**

Avoid instantiating `Collection` directly --- instead use
implementations such as:

-   `ArrayList`
-   `HashSet`
-   `LinkedList`
-   `PriorityQueue`
