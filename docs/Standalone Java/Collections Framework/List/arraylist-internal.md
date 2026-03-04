---
sidebar_position: 1
title: ArrayList
---
<!-- # 01-arraylist -->

## The `ArrayList` Class in Java

The `ArrayList` class is one of the most commonly used implementations
of the `List` interface in the Java Collection Framework. It represents
a **resizable array** that dynamically grows or shrinks as elements are
added or removed. Unlike arrays in Java, which have a fixed size,
`ArrayList` provides flexibility and convenience for managing
collections of objects.

------------------------------------------------------------------------

## Key Characteristics of `ArrayList`

-   **Dynamic Resizing**: Automatically resizes when elements are added
    or removed.
-   **Random Access**: Fast index-based access (`O(1)` for `get()` and
    `set()`).
-   **Duplicates Allowed**
-   **Maintains Insertion Order**
-   **Not Thread-Safe**

For thread safety you can use:

-   `Collections.synchronizedList()`
-   `CopyOnWriteArrayList`

------------------------------------------------------------------------

## Common Use Cases

-   Maintaining ordered collections
-   Frequent **index-based access**
-   Dynamically changing list sizes

------------------------------------------------------------------------

## Important Methods

| Method                             | Description                   |
|------------------------------------|-------------------------------|
| `boolean add(E e)`                 | Adds element at end           |
| `void add(int index, E element)`   | Adds element at index         |
| `E get(int index)`                 | Returns element               |
| `E set(int index, E element)`      | Replaces element              |
| `E remove(int index)`              | Removes element               |
| `boolean remove(Object o)`         | Removes first occurrence      |
| `int size()`                       | Returns size                  |
| `boolean isEmpty()`                | Checks if empty               |
| `boolean contains(Object o)`       | Checks presence               |
| `Object[] toArray()`               | Converts to array             |

------------------------------------------------------------------------

## Example 1: Basic Operations

``` java
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {

    public static void main(String[] args) {

        List<String> fruits = new ArrayList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        System.out.println("Fruits: " + fruits);

        System.out.println("First fruit: " + fruits.get(0));

        fruits.set(1, "Mango");

        System.out.println("After replacement: " + fruits);

        fruits.remove("Cherry");

        System.out.println("After removal: " + fruits);

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

------------------------------------------------------------------------

## Example 2: Dynamic Resizing

``` java
import java.util.ArrayList;
import java.util.List;

public class DynamicResizingExample {

    public static void main(String[] args) {

        List<Integer> numbers = new ArrayList<>();

        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }

        System.out.println(numbers);

        numbers.removeIf(n -> n % 2 == 0);

        System.out.println("After removing evens: " + numbers);
    }
}
```

------------------------------------------------------------------------

## Example 3: Converting to Array

``` java
import java.util.ArrayList;
import java.util.List;

public class ArrayListToArrayExample {

    public static void main(String[] args) {

        List<String> colors = new ArrayList<>();

        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        String[] colorArray = colors.toArray(new String[0]);

        System.out.println(String.join(", ", colorArray));
    }
}
```

------------------------------------------------------------------------

## Performance Characteristics

| Operation           | Complexity        |
|---------------------|-------------------|
| get()               | O(1)              |
| set()               | O(1)              |
| add() (end)         | O(1) amortized    |
| add() (middle)      | O(n)              |
| remove() (middle)   | O(n)              |

------------------------------------------------------------------------

## When to Use ArrayList

Use **ArrayList** when:

-   Random access is frequent
-   Insertions mostly happen at the **end**
-   You need **ordered collections**

Avoid when:

-   Many insertions/deletions occur in the **middle of the list**
-   Prefer `LinkedList` in those cases.

------------------------------------------------------------------------

## ArrayList vs LinkedList

| Feature                | ArrayList        | LinkedList           |
|------------------------|------------------|----------------------|
| Structure              | Dynamic Array    | Doubly Linked List   |
| Random Access          | Fast O(1)        | Slow O(n)            |
| Insert/Delete Middle   | Slow             | Faster               |
| Memory                 | Lower            | Higher               |
