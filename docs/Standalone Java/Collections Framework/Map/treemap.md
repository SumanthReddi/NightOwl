---
sidebar_position: 3
title: TreeMap 
---


## The `TreeMap` Class in Java

`TreeMap` is an implementation of the **Map interface** that stores
entries in **sorted order** based on the **natural ordering of keys** or
a **custom comparator**.

Internally, `TreeMap` is implemented using a **Red-Black Tree**, which
guarantees that the map remains sorted and balanced.

------------------------------------------------------------------------

## Key Characteristics

-   **Sorted Keys** -- Entries are automatically sorted by key
-   **Unique Keys** -- Duplicate keys overwrite previous values
-   **No Null Keys** -- Adding a null key throws `NullPointerException`
-   **Allows Null Values** -- Multiple null values allowed
-   **Logarithmic Performance** -- Most operations are `O(log n)`

------------------------------------------------------------------------

## Common Use Cases

-   When **sorted key ordering** is required
-   Implementing **range queries**
-   Navigating keys using **floor/ceiling/higher/lower**
-   Data structures needing **ordered maps**

------------------------------------------------------------------------

## Important Methods
| Method                  | Description                     |
|-------------------------|---------------------------------|
| `put(K key, V value)`   | Inserts key-value pair          |
| `get(Object key)`       | Retrieves value                 |
| `remove(Object key)`    | Removes entry                   |
| `firstKey()`            | Returns smallest key            |
| `lastKey()`             | Returns largest key             |
| `ceilingEntry(K key)`   | Entry ≥ given key               |
| `floorEntry(K key)`     | Entry ≤ given key               |
| `higherEntry(K key)`    | Entry strictly greater          |
| `lowerEntry(K key)`     | Entry strictly smaller          |
------------------------------------------------------------------------

## Example 1: Basic Usage

``` java
import java.util.Map;
import java.util.TreeMap;

public class TreeMapExample {

    public static void main(String[] args) {

        Map<Integer,String> numbers = new TreeMap<>();

        numbers.put(5,"Five");
        numbers.put(3,"Three");
        numbers.put(8,"Eight");
        numbers.put(1,"One");

        System.out.println(numbers);

        System.out.println(numbers.get(5));

        numbers.remove(3);

        System.out.println(numbers);

    }
}
```

Output
```
    {1=One, 3=Three, 5=Five, 8=Eight}
```
------------------------------------------------------------------------

## Example 2: Custom Sorting with Comparator

``` java
import java.util.Comparator;
import java.util.Map;
import java.util.TreeMap;

public class CustomSortingExample {

    public static void main(String[] args) {

        Map<Integer,String> numbers = new TreeMap<>(Comparator.reverseOrder());

        numbers.put(5,"Five");
        numbers.put(3,"Three");
        numbers.put(8,"Eight");
        numbers.put(1,"One");

        System.out.println(numbers);

    }
}
```
```
Output

    {8=Eight, 5=Five, 3=Three, 1=One}
```
------------------------------------------------------------------------

## Example 3: Navigable Methods

``` java
import java.util.Map;
import java.util.TreeMap;

public class NavigableExample {

    public static void main(String[] args) {

        TreeMap<Integer,String> numbers = new TreeMap<>();

        numbers.put(10,"Ten");
        numbers.put(20,"Twenty");
        numbers.put(30,"Thirty");
        numbers.put(40,"Forty");

        System.out.println(numbers.firstKey());
        System.out.println(numbers.lastKey());

        System.out.println(numbers.ceilingEntry(25));
        System.out.println(numbers.floorEntry(25));

        System.out.println(numbers.higherEntry(20));
        System.out.println(numbers.lowerEntry(20));

    }
}
```

------------------------------------------------------------------------

## Example 4: Range Queries

``` java
import java.util.Map;
import java.util.TreeMap;

public class RangeExample {

    public static void main(String[] args) {

        TreeMap<Integer,String> numbers = new TreeMap<>();

        numbers.put(10,"Ten");
        numbers.put(20,"Twenty");
        numbers.put(30,"Thirty");
        numbers.put(40,"Forty");

        Map<Integer,String> sub = numbers.subMap(15,35);
        System.out.println(sub);

        Map<Integer,String> head = numbers.headMap(25);
        System.out.println(head);

        Map<Integer,String> tail = numbers.tailMap(25);
        System.out.println(tail);

    }
}
```

------------------------------------------------------------------------

## Performance Characteristics
| Operation   | Complexity |
|-------------|------------|
| put()       | O(log n)   |
| get()       | O(log n)   |
| remove()    | O(log n)   |
| iteration   | O(n)       |

Because of tree balancing, operations are slower than `HashMap` but
maintain sorted order.

------------------------------------------------------------------------

## When to Use TreeMap

Use when:

-   Keys must be **sorted**
-   You need **range queries**
-   Navigation operations like **floor/ceiling** are required

Avoid when:

-   Order is not required → use `HashMap`
-   You need insertion order → use `LinkedHashMap`

------------------------------------------------------------------------

## Comparison: TreeMap vs HashMap vs LinkedHashMap
| Feature       | TreeMap       | HashMap     | LinkedHashMap   |
|---------------|---------------|-------------|-----------------|
| Ordering      | Sorted        | None        | Insertion       |
| Performance   | O(log n)      | O(1)        | O(1)            |
| Null Keys     | Not allowed   | 1 allowed   | 1 allowed       |
| Null Values   | Allowed       | Allowed     | Allowed         |