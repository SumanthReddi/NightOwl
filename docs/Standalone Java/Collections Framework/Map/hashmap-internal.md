---
sidebar_position: 1
title: HashMap
---
<!-- # 01-hashmap -->

## The `HashMap` Class in Java

`HashMap` is one of the most widely used implementations of the **Map**
interface in the Java Collection Framework.

It stores data in **key--value pairs**, where:

-   Keys must be **unique**
-   Values can be **duplicated**

Internally, `HashMap` uses a **hash table** to store entries, which
enables very fast operations.

------------------------------------------------------------------------

## Key Characteristics

-   **Unique Keys** -- Duplicate keys overwrite existing values
-   **No Order Guarantee** -- Iteration order is unpredictable
-   **Null Support** -- Allows **one null key** and **multiple null
    values**
-   **High Performance** -- Average **O(1)** time complexity

------------------------------------------------------------------------

## Common Use Cases

-   Caching systems
-   Lookup tables
-   Mapping IDs to objects
-   Counting frequencies
-   Configuration storage

------------------------------------------------------------------------

## Important Methods
| Method                          | Description                         |
|---------------------------------|-------------------------------------|
| `put(K key, V value)`           | Inserts or updates a key-value pair |
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
import java.util.HashMap;
import java.util.Map;

public class HashMapExample {

    public static void main(String[] args) {

        Map<String,Integer> fruitCounts = new HashMap<>();

        fruitCounts.put("Apple",3);
        fruitCounts.put("Banana",5);
        fruitCounts.put("Cherry",7);

        System.out.println(fruitCounts);

        System.out.println(fruitCounts.get("Apple"));

        System.out.println(fruitCounts.containsKey("Banana"));

        fruitCounts.remove("Cherry");

        System.out.println(fruitCounts);

        for(Map.Entry<String,Integer> entry : fruitCounts.entrySet()){

            System.out.println(entry.getKey()+" : "+entry.getValue());

        }
    }
}
```

------------------------------------------------------------------------

## Example 2: Null Keys and Values

``` java
import java.util.HashMap;
import java.util.Map;

public class HashMapNullExample {

    public static void main(String[] args) {

        Map<String,String> colors = new HashMap<>();

        colors.put("Red","Primary");
        colors.put(null,"Unknown");
        colors.put("Blue",null);

        System.out.println(colors);
    }
}
```

------------------------------------------------------------------------

## Example 3: Iterating HashMap

``` java
import java.util.HashMap;
import java.util.Map;

public class HashMapIterationExample {

    public static void main(String[] args) {

        Map<String,Integer> scores = new HashMap<>();

        scores.put("Alice",95);
        scores.put("Bob",87);
        scores.put("Charlie",92);

        for(String key : scores.keySet()){
            System.out.println(key);
        }

        for(Integer value : scores.values()){
            System.out.println(value);
        }

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

Performance depends heavily on **good hashCode() implementation**.

------------------------------------------------------------------------

## When to Use HashMap

Use HashMap when:

-   You need **fast key-based lookup**
-   Ordering **does not matter**
-   You need **high performance**

Avoid when:

-   Order matters → use `LinkedHashMap`
-   Sorted keys required → use `TreeMap`

------------------------------------------------------------------------

## Comparison: HashMap vs LinkedHashMap vs TreeMap
| Feature      | HashMap      | LinkedHashMap              | TreeMap        |
|--------------|--------------|----------------------------|----------------|
| Order        | No order     | Insertion order            | Sorted         |
| Complexity   | O(1)         | O(1)                       | O(log n)       |
| Null Key     | Allowed      | Allowed                    | Not allowed    |
| Structure    | Hash table   | Hash table + linked list   | Red-Black Tree |