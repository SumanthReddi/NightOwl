---
sidebar_position: 2
title: Set Interface
---


## The `Set` Interface in Java

The `Set` interface is one of the core interfaces in the Java Collection
Framework. It represents a collection that **does not allow duplicate
elements**. This makes it ideal for scenarios where uniqueness is
required, such as storing unique identifiers, removing duplicates from a
list, or performing mathematical set operations.

------------------------------------------------------------------------

## Key Characteristics of `Set`

-   **Uniqueness**: Duplicate elements are not allowed.
-   **No Guaranteed Order**: Most implementations do not preserve order.
-   **Single Null**: At most one `null` element is allowed depending on
    implementation.

------------------------------------------------------------------------

## Common Implementations

### HashSet

-   Hash table based implementation
-   Average **O(1)** for `add`, `remove`, `contains`
-   No iteration order guarantee

### LinkedHashSet

-   Maintains **insertion order**
-   Slightly slower due to linked list maintenance

### TreeSet

-   Uses **Red‑Black Tree**
-   Elements are **sorted**
-   Operations typically **O(log n)**

------------------------------------------------------------------------

## Important Methods
| Method                         | Description                   |
|--------------------------------|-------------------------------|
| `boolean add(E e)`             | Adds element if not present    |
| `boolean remove(Object o)`     | Removes element                |
| `boolean contains(Object o)`   | Checks if element exists       |
| `int size()`                   | Returns size                   |
| `boolean isEmpty()`            | Checks if set is empty         |
| `Iterator<E> iterator()`       | Returns iterator               |
------------------------------------------------------------------------
## Code Examples: Using the Set Interface

## Example 1: Basic Operations with HashSet

``` java
import java.util.HashSet;
import java.util.Set;

public class HashSetExample {

    public static void main(String[] args) {
        // Create a HashSet
        Set<String> fruits = new HashSet<>();

        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Apple");        // Duplicate element (ignored)

        System.out.println("Fruits: " + fruits);        // → [Apple, Cherry, Banana]

         // Check if an element exists
        System.out.println("Contains Banana? " + fruits.contains("Banana"));    // → true

        // Remove an element
        fruits.remove("Cherry");
        System.out.println("After removal: " + fruits); // → [Apple, Banana]

        // Iterate through the set
        for (String fruit : fruits) {
            System.out.println(fruit); // Apple Banana
        }
    }
}
```

------------------------------------------------------------------------

## Example 2: Maintaining Insertion Order with LinkedHashSet

``` java
import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetExample {

    public static void main(String[] args) {
        // Create a LinkedHashSet
        Set<String> colors = new LinkedHashSet<>();

        // Add elements
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        System.out.println("Colors: " + colors);    // → [Red, Green, Blue]
    }
}
```

------------------------------------------------------------------------

## Example 3: Sorting Elements with TreeSet

``` java
import java.util.TreeSet;
import java.util.Set;

public class TreeSetExample {

    public static void main(String[] args) {
        // Create a TreeSet
        Set<Integer> numbers = new TreeSet<>();

        // Add elements
        numbers.add(50);
        numbers.add(20);
        numbers.add(30);
        numbers.add(10);

        System.out.println("Numbers: " + numbers);      // → [10, 20, 30, 50]
    }
}
```

------------------------------------------------------------------------

## Set vs Other Collections

| Feature      | Set               | List      | Map                |
|--------------|-------------------|-----------|--------------------|
| Order        | Usually unordered | Ordered (insertion order)   | Key‑value pairs    |
| Duplicates   | Not allowed       | Allowed   | Keys must be unique, values can duplicate       |
| Index Access | No                | Yes       | No                 |

------------------------------------------------------------------------

## Mathematical Set Operations

The Set interface supports common mathematical set operations, such as union, intersection, and difference. These operations can be implemented using methods like **addAll(), retainAll(), and removeAll().**

### Example: Union, Intersection, and Difference

``` java
import java.util.HashSet;
import java.util.Set;

public class SetOperations {

    public static void main(String[] args) {
        // Create two sets
        Set<Integer> set1 = new HashSet<>();
        set1.add(1);
        set1.add(2);
        set1.add(3);

        Set<Integer> set2 = new HashSet<>();
        set2.add(3);
        set2.add(4);
        set2.add(5);

        // Union
        Set<Integer> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Union: " + union); // → [1, 2, 3, 4, 5]

        // Intersection
        Set<Integer> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection: " + intersection); // → [3]

        // Difference
        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference: " + difference);    // → [1, 2]
    }
}
```

------------------------------------------------------------------------

## When to Use Set

Use **Set** when:

-   You must **avoid duplicates**
-   You need **fast membership checks**
-   You want **set operations**

Recommendations:

-   **HashSet** → fastest general purpose
-   **LinkedHashSet** → maintain insertion order
-   **TreeSet** → keep elements sorted
