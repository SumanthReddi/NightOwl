---
sidebar_position: 2
title: Set Interface
---
<!-- # 02-set-interface -->

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

## Example 1: HashSet

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

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

------------------------------------------------------------------------

## Example 2: LinkedHashSet

``` java
import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetExample {

    public static void main(String[] args) {

        Set<String> colors = new LinkedHashSet<>();

        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        System.out.println("Colors: " + colors);
    }
}
```

------------------------------------------------------------------------

## Example 3: TreeSet

``` java
import java.util.TreeSet;
import java.util.Set;

public class TreeSetExample {

    public static void main(String[] args) {

        Set<Integer> numbers = new TreeSet<>();

        numbers.add(50);
        numbers.add(20);
        numbers.add(30);
        numbers.add(10);

        System.out.println("Numbers: " + numbers);
    }
}
```

------------------------------------------------------------------------

## Set vs Other Collections

| Feature      | Set               | List      | Map                |
|--------------|-------------------|-----------|--------------------|
| Order        | Usually unordered | Ordered   | Key‑value pairs    |
| Duplicates   | Not allowed       | Allowed   | Keys unique        |
| Index Access | No                | Yes       | No                 |

------------------------------------------------------------------------

## Mathematical Set Operations

### Example

``` java
import java.util.HashSet;
import java.util.Set;

public class SetOperations {

    public static void main(String[] args) {

        Set<Integer> set1 = new HashSet<>();
        set1.add(1);
        set1.add(2);
        set1.add(3);

        Set<Integer> set2 = new HashSet<>();
        set2.add(3);
        set2.add(4);
        set2.add(5);

        Set<Integer> union = new HashSet<>(set1);
        union.addAll(set2);

        Set<Integer> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);

        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);

        System.out.println("Union: " + union);
        System.out.println("Intersection: " + intersection);
        System.out.println("Difference: " + difference);
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
