---
sidebar_position: 3
title: TreeSet 
---
<!-- # 03-treeset -->

## The `TreeSet` Class in Java

`TreeSet` is an implementation of the **Set** interface that stores
elements in **sorted order**. Internally it uses a **Red-Black Tree**,
which guarantees elements remain sorted according to:

-   Natural ordering (Comparable)
-   A custom Comparator

Unlike `HashSet` and `LinkedHashSet`, `TreeSet` guarantees **sorted
iteration**.

------------------------------------------------------------------------

## Key Characteristics

-   **Sorted Elements** -- Natural order or custom comparator
-   **No Duplicates** -- Same behavior as any `Set`
-   **Time Complexity** -- `O(log n)` for add, remove, contains
-   **Null Not Allowed** -- Adding null throws `NullPointerException`
-   **NavigableSet Features** -- Supports navigation methods like
    `ceiling`, `floor`, `higher`, `lower`

------------------------------------------------------------------------

## Common Use Cases

-   Maintaining **sorted unique data**
-   Performing **range queries**
-   Finding **nearest values**
-   Leaderboards or ranking systems
-   Ordered datasets

------------------------------------------------------------------------

## Important Methods
| Method               | Description                      |
|----------------------|----------------------------------|
| `add(E e)`           | Adds element                     |
| `remove(Object o)`   | Removes element                  |
| `first()`            | Returns smallest element         |
| `last()`             | Returns largest element          |
| `ceiling(E e)`       | Smallest element ≥ given         |
| `floor(E e)`         | Largest element ≤ given          |
| `higher(E e)`        | Next greater element             |
| `lower(E e)`         | Next smaller element             |
------------------------------------------------------------------------

## Example 1: Basic TreeSet

``` java
import java.util.TreeSet;
import java.util.Set;

public class TreeSetExample {

    public static void main(String[] args) {

        Set<Integer> numbers = new TreeSet<>();

        numbers.add(5);
        numbers.add(3);
        numbers.add(8);
        numbers.add(1);

        System.out.println(numbers);

        System.out.println(numbers.contains(5));

        numbers.remove(3);

        System.out.println(numbers);

        for(Integer n : numbers){
            System.out.println(n);
        }
    }
}
```

------------------------------------------------------------------------

## Example 2: Custom Sorting (Descending)

``` java
import java.util.Comparator;
import java.util.TreeSet;

public class CustomSortingExample {

    public static void main(String[] args) {

        TreeSet<Integer> numbers =
            new TreeSet<>(Comparator.reverseOrder());

        numbers.add(5);
        numbers.add(3);
        numbers.add(8);
        numbers.add(1);

        System.out.println(numbers);
    }
}
```

------------------------------------------------------------------------

## Example 3: Navigable Methods

``` java
import java.util.TreeSet;

public class NavigableMethodsExample {

    public static void main(String[] args) {

        TreeSet<Integer> numbers = new TreeSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);

        System.out.println("First: " + numbers.first());
        System.out.println("Last: " + numbers.last());

        System.out.println("Ceiling 25: " + numbers.ceiling(25));
        System.out.println("Floor 25: " + numbers.floor(25));

        System.out.println("Higher 20: " + numbers.higher(20));
        System.out.println("Lower 20: " + numbers.lower(20));
    }
}
```

------------------------------------------------------------------------

## Performance Characteristics
| Operation    | Complexity     |
|--------------|----------------|
| add()        | O(log n)       |
| remove()     | O(log n)       |
| contains()   | O(log n)       |
| iteration    | O(n) sorted    |

TreeSet is slower than `HashSet` because of tree balancing.

------------------------------------------------------------------------

## When to Use TreeSet

Use TreeSet when:

-   You need **sorted elements**
-   You need **range operations**
-   You need **navigation queries**

Avoid when:

-   Order does not matter → use `HashSet`
-   You only need insertion order → use `LinkedHashSet`

------------------------------------------------------------------------

## Comparison: TreeSet vs HashSet vs LinkedHashSet
| Feature        | TreeSet          | HashSet      | LinkedHashSet              |
|----------------|------------------|--------------|----------------------------|
| Order          | Sorted           | No order     | Insertion order            |
| Complexity     | O(log n)         | O(1)         | O(1)                       |
| Null Support   | Not allowed      | One null     | One null                   |
| Structure      | Red‑Black Tree   | Hash table   | Hash table + linked list   |