---
sidebar_position: 3
title: LinkedHashMap 
---

## The `LinkedHashMap` Class in Java

`LinkedHashMap` is a `Map` implementation that combines a **hash table**
with a **doubly‑linked list**. It provides the fast lookup of `HashMap`
while also **maintaining a predictable order of entries**.

By default, it preserves **insertion order**, but it can optionally
maintain **access order** (useful for LRU caches).

------------------------------------------------------------------------

## Key Characteristics

-   **Unique Keys** -- Duplicate keys replace existing values
-   **Maintains Order** -- Preserves insertion order
-   **Optional Access Order** -- Can track recently accessed entries
-   **Allows Nulls** -- One `null` key and multiple `null` values
-   **Fast Operations** -- `O(1)` average for put/get/remove

------------------------------------------------------------------------

## Common Use Cases

-   When **iteration order must match insertion order**
-   Implementing **LRU caches**
-   Applications requiring **predictable map traversal**
-   Systems maintaining **history of inserted entries**

------------------------------------------------------------------------

## Important Methods
| Method                          | Description                  |
|---------------------------------|------------------------------|
| `put(K key, V value)`           | Inserts key-value pair       |
| `get(Object key)`               | Retrieves value              |
| `remove(Object key)`            | Removes entry                |
| `containsKey(Object key)`       | Checks if key exists         |
| `containsValue(Object value)`   | Checks if value exists       |
| `keySet()`                      | Returns keys                 |
| `values()`                      | Returns values               |
| `entrySet()`                    | Returns entries              |
------------------------------------------------------------------------

## Example 1: Basic Usage

``` java
import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapExample {

    public static void main(String[] args) {

        Map<String,Integer> fruitCounts = new LinkedHashMap<>();

        fruitCounts.put("Apple",3);
        fruitCounts.put("Banana",5);
        fruitCounts.put("Cherry",7);

        System.out.println(fruitCounts);

        System.out.println(fruitCounts.get("Apple"));

        fruitCounts.remove("Cherry");

        System.out.println(fruitCounts);
    }
}
```

------------------------------------------------------------------------

## Example 2: Maintaining Insertion Order

``` java
import java.util.LinkedHashMap;
import java.util.Map;

public class InsertionOrderExample {

    public static void main(String[] args) {

        Map<Integer,String> numbers = new LinkedHashMap<>();

        numbers.put(3,"Three");
        numbers.put(1,"One");
        numbers.put(2,"Two");

        System.out.println(numbers);

    }
}
```
```
Output:

    {3=Three, 1=One, 2=Two}
```
------------------------------------------------------------------------

## Example 3: Implementing an LRU Cache

``` java
import java.util.LinkedHashMap;
import java.util.Map;

public class LRUCacheExample {

    public static void main(String[] args) {

        Map<String,String> cache = new LinkedHashMap<>(16,0.75f,true){

            protected boolean removeEldestEntry(Map.Entry<String,String> eldest){
                return size() > 3;
            }

        };

        cache.put("A","Apple");
        cache.put("B","Banana");
        cache.put("C","Cherry");
        cache.put("D","Date");

        System.out.println(cache);

        cache.get("B");

        cache.put("E","Elderberry");

        System.out.println(cache);

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

Because it maintains a linked list internally, memory usage is slightly
higher than `HashMap`.

------------------------------------------------------------------------

## When to Use LinkedHashMap

Use when:

-   Order of entries matters
-   You need **deterministic iteration**
-   Implementing **LRU caches**

Avoid when:

-   Order does not matter → `HashMap`
-   Sorted keys required → `TreeMap`

------------------------------------------------------------------------

## Comparison: LinkedHashMap vs HashMap vs TreeMap
| Feature       | LinkedHashMap              | HashMap     | TreeMap        |
|---------------|----------------------------|-------------|----------------|
| Ordering      | Insertion / Access order   | None        | Sorted         |
| Performance   | O(1)                       | O(1)        | O(log n)       |
| Null Keys     | 1 allowed                  | 1 allowed   | Not allowed    |
| Null Values   | Allowed                    | Allowed     | Not allowed    |