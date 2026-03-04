---
sidebar_position: 1
title: List Interface
---
<!-- # 01-list-interface -->

## The `List` Interface in Java

The `List` interface is one of the core interfaces in the Java
Collection Framework. It represents an **ordered collection** (also
known as a sequence) that allows **duplicate elements**. The order of
elements in a `List` is determined by their position (index), and each
element can be accessed directly using its index.

------------------------------------------------------------------------

## Key Characteristics of `List`

-   **Ordered**: Elements are stored in insertion order.
-   **Indexed Access**: Elements can be accessed using their index.
-   **Duplicates Allowed**: Multiple identical elements can exist.
-   **Positional Operations**: Supports inserting, updating, and
    removing elements by index.

------------------------------------------------------------------------

## Common Implementations of `List`

### ArrayList

-   Resizable array implementation
-   Fast random access (`O(1)` for `get()`)
-   Slower for insertions/deletions in the middle (`O(n)`)

### LinkedList

-   Doubly-linked list implementation
-   Efficient insertions and deletions
-   Slower random access (`O(n)`)

### Vector

-   Legacy synchronized implementation
-   Thread-safe but slower due to synchronization

### Stack

-   Extends `Vector`
-   LIFO data structure
-   Methods: `push()`, `pop()`, `peek()`

------------------------------------------------------------------------

## Important Methods in `List`

| Method                                          | Description                                                |
|-------------------------------------------------|------------------------------------------------------------|
| `void add(int index, E element)`                | Inserts an element at a specific<br/>index                 |
| `E get(int index)`                              | Returns the element at a given<br/>index                   |
| `E set(int index, E element)`                   | Replaces the element at a given<br/>index                  |
| `E remove(int index)`                           | Removes the element at the given<br/>index                 |
| `int indexOf(Object o)`                         | Returns first occurrence index                              |
| `int lastIndexOf(Object o)`                     | Returns last occurrence index                               |
| `List<E> subList(int fromIndex, int toIndex)`   | Returns a portion of the list                               |
------------------------------------------------------------------------

## Example 1: Basic List Operations

``` java
import java.util.ArrayList;
import java.util.List;

public class ListExample {

    public static void main(String[] args) {

        List<String> fruits = new ArrayList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        System.out.println("First fruit: " + fruits.get(0));

        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        fruits.remove("Banana");

        System.out.println("After removal: " + fruits);

        fruits.set(1, "Mango");

        System.out.println("After replacement: " + fruits);

        int index = fruits.indexOf("Mango");

        System.out.println("Index of Mango: " + index);
    }
}
```

------------------------------------------------------------------------

## Example 2: Using subList()

``` java
import java.util.ArrayList;
import java.util.List;

public class SubListExample {

    public static void main(String[] args) {

        List<Integer> numbers = new ArrayList<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);

        List<Integer> subList = numbers.subList(1, 4);

        System.out.println("Sublist: " + subList);

        subList.set(0, 25);

        System.out.println("Modified sublist: " + subList);

        System.out.println("Original list after modification: " + numbers);
    }
}
```

------------------------------------------------------------------------

## List vs Other Collections

| Feature      | List                      | Set               | Queue                |
|--------------|---------------------------|-------------------|----------------------|
| Order        | Maintains insertion order | Usually unordered | FIFO or priority     |
| Duplicates   | Allowed                   | Not allowed       | Allowed              |
| Index Access | Yes                       | No                | No                   |

------------------------------------------------------------------------

## When to Use List

Use a **List** when:

-   You need ordered data
-   You require index-based access
-   Duplicates must be allowed

Recommendations:

-   Use **ArrayList** for most cases
-   Use **LinkedList** for frequent insert/delete operations
-   Avoid **Vector** unless legacy thread safety is required
