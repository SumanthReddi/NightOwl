---
sidebar_position: 2
title: Hashtable
---
<!-- # 02-hashtable -->

## The `Hashtable` Class in Java

The `Hashtable` class is one of the earliest implementations of the
**Map** interface in Java.\
It stores data as **key-value pairs**, similar to `HashMap`, but it is
**synchronized**, which makes it thread-safe.

However, `Hashtable` is considered a **legacy class** and is generally
replaced by:

-   `HashMap` (for non-threaded use)
-   `ConcurrentHashMap` (for multi-threaded use)

------------------------------------------------------------------------

## Key Characteristics

-   **Unique Keys** -- Duplicate keys overwrite the previous value
-   **No Guaranteed Order** -- Iteration order is unpredictable
-   **No Null Allowed** -- Neither keys nor values can be `null`
-   **Thread Safe** -- All methods are synchronized
-   **Legacy Class** -- Introduced before Java Collections Framework
    (Java 1.0)

------------------------------------------------------------------------

## Common Use Cases

-   Legacy applications that require thread safety
-   Older APIs that depend on `Hashtable`
-   Rare cases where full method-level synchronization is required

------------------------------------------------------------------------

## Important Methods
| Method                          | Description                         |
|---------------------------------|-------------------------------------|
| `put(K key, V value)`           | Inserts key-value pair              |
| `get(Object key)`               | Retrieves value by key              |
| `remove(Object key)`            | Removes entry                       |
| `containsKey(Object key)`       | Checks key existence                |
| `containsValue(Object value)`   | Checks value existence              |
| `keySet()`                      | Returns set of keys                 |
| `values()`                      | Returns collection of values        |
| `entrySet()`                    | Returns key-value entries           |
------------------------------------------------------------------------

## Example 1: Basic Operations

``` java
import java.util.Hashtable;
import java.util.Map;

public class HashtableExample {

    public static void main(String[] args) {

        Map<String,Integer> fruitCounts = new Hashtable<>();

        fruitCounts.put("Apple",3);
        fruitCounts.put("Banana",5);
        fruitCounts.put("Cherry",7);

        System.out.println(fruitCounts);

        System.out.println(fruitCounts.get("Apple"));

        System.out.println(fruitCounts.containsKey("Banana"));

        fruitCounts.remove("Cherry");

        System.out.println(fruitCounts);
    }
}
```

------------------------------------------------------------------------

## Example 2: Null Values Not Allowed

``` java
import java.util.Hashtable;

public class HashtableNullExample {

    public static void main(String[] args) {

        Hashtable<String,String> map = new Hashtable<>();

        // map.put(null,"Unknown");  // Throws NullPointerException
        // map.put("Blue",null);     // Throws NullPointerException

    }
}
```

------------------------------------------------------------------------

## Example 3: Iteration

``` java
import java.util.Hashtable;
import java.util.Map;

public class HashtableIterationExample {

    public static void main(String[] args) {

        Map<String,Integer> scores = new Hashtable<>();

        scores.put("Alice",95);
        scores.put("Bob",87);

        for(Map.Entry<String,Integer> entry : scores.entrySet()){
            System.out.println(entry.getKey()+" : "+entry.getValue());
        }

    }
}
```

------------------------------------------------------------------------

## Performance Characteristics
| Operation   | Complexity |
|-------------|------------|
| put()       | O(1)       |
| get()       | O(1)       |
| remove()    | O(1)       |
| iteration   | O(n)       |

Because methods are synchronized, performance is **slower than
HashMap**.

------------------------------------------------------------------------

## When to Use Hashtable

Use `Hashtable` only when:

-   Maintaining **legacy systems**
-   Full **method-level synchronization** is required

Avoid when:

-   High-performance concurrent systems → use `ConcurrentHashMap`
-   Single-threaded applications → use `HashMap`

------------------------------------------------------------------------

## Comparison: Hashtable vs HashMap vs ConcurrentHashMap
| Feature         | Hashtable            | HashMap       | ConcurrentHashMap                    |
|-----------------|----------------------|---------------|---------------------------------------|
| Thread Safety   | Yes (synchronized)   | No            | Yes                                   |
| Performance     | Slower               | Fast          | Very fast in concurrent systems       |
| Null Keys       | Not allowed          | Allowed (1)   | Not allowed                           |
| Null Values     | Not allowed          | Allowed       | Not allowed                           |
| Era             | Legacy               | Modern        | Modern                                |