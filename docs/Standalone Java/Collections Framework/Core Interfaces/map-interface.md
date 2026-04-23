---
sidebar_position: 3
title: Map Interface
---


## The `Map` Interface in Java

The `Map` interface is one of the core interfaces in the Java Collection
Framework. It represents a collection that maps **keys to values**,
where each key is unique and each value is associated with a key. Unlike
`List` or `Set`, `Map` does **not** extend the `Collection` interface.

------------------------------------------------------------------------

## Key Characteristics of `Map`

-   **Key-Value Pairs**: Data stored as key → value.
-   **Unique Keys**: Duplicate keys are not allowed.
-   **Values Can Duplicate**: Multiple keys can map to the same value.
-   **Order Depends on Implementation**.
-   **Null Handling** depends on implementation.

------------------------------------------------------------------------

## Common Implementations

### HashMap

-   Hash table based
-   Average **O(1)** operations
-   No ordering guarantee
-   Allows **1 null key + multiple null values**

### LinkedHashMap

-   Maintains **insertion order**
-   Uses linked list + hash table

### TreeMap

-   Uses **Red-Black Tree**
-   Keys are **sorted**
-   Operations **O(log n)**

### Hashtable

-   Legacy synchronized implementation
-   **No null keys or values**

------------------------------------------------------------------------

## Important Methods

| Method                                  | Description                         |
|-----------------------------------------|-------------------------------------|
| `V put(K key, V value)`                 | Adds or updates a key-value mapping |
| `V get(Object key)`                     | Returns value for the key           |
| `V remove(Object key)`                   | Removes entry for the key           |
| `boolean containsKey(Object key)`        | Checks key presence                 |
| `boolean containsValue(Object value)`    | Checks value presence               |
| `Set<K> keySet()`                        | Returns all keys                    |
| `Collection<V> values()`                  | Returns all values                  |
| `Set<Map.Entry<K,V>> entrySet()`          | Returns key-value entries           |

------------------------------------------------------------------------

## Example 1: HashMap

``` java
import java.util.HashMap;
import java.util.Map;

public class HashMapExample {

    public static void main(String[] args) {

        // Create a HashMap
        Map<String, Integer> fruitCounts = new HashMap<>();

        // Insert key-value pairs
        fruitCounts.put("Apple", 3);
        fruitCounts.put("Banana", 5);
        fruitCounts.put("Cherry", 7);

        // HashMap does NOT guarantee order of elements
        System.out.println(fruitCounts);

        // Possible Output (order may vary):
        // {Apple=3, Banana=5, Cherry=7}

        // Get value by key
        System.out.println("Apple count: " + fruitCounts.get("Apple")); // Apple count: 3

        // Check if key exists
        if (fruitCounts.containsKey("Banana")) {
            System.out.println("Banana exists");    // Banana exists
        }

        // Remove a key
        fruitCounts.remove("Cherry");

        // Iterate through the map
        for (Map.Entry<String, Integer> entry : fruitCounts.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }

        // Output (order not guaranteed):
        // Apple : 3
        // Banana : 5
    }
}
```

------------------------------------------------------------------------

## Example 2: LinkedHashMap

``` java
import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapExample {

    public static void main(String[] args) {

        // Create a LinkedHashMap
        Map<String, Integer> scores = new LinkedHashMap<>();

        // Insert key-value pairs
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);

        // LinkedHashMap maintains insertion order
        System.out.println(scores);

        // Output:
        // {Alice=95, Bob=87, Charlie=92}
    }
}
```

------------------------------------------------------------------------

## Example 3: TreeMap

``` java
import java.util.TreeMap;
import java.util.Map;

public class TreeMapExample {

    public static void main(String[] args) {

        // Create a TreeMap
        Map<String, Integer> ages = new TreeMap<>();

        // Insert key-value pairs
        ages.put("Charlie", 25);
        ages.put("Alice", 30);
        ages.put("Bob", 22);

        // TreeMap automatically sorts keys in natural (alphabetical) order
        System.out.println(ages);

        // Output:
        // {Alice=30, Bob=22, Charlie=25}
    }
}
```

------------------------------------------------------------------------

## Map vs Other Collections

| Feature      | Map              | List       | Set                |
|--------------|------------------|------------|--------------------|
| Structure    | Key-Value pairs  | Elements   | Unique Elements    |
| Duplicates   | Keys unique      | Allowed    | Not allowed        |
| Index Access | No               | Yes        | No                 |
| Lookup       | By Key           | By Index   | By Value           |

------------------------------------------------------------------------

## When to Use Map

Use **Map** when:

-   You need **key → value mapping**
-   You want **fast lookup by key**
-   You need **dictionary-like data structure**

Recommendations:

-   **HashMap** → general purpose
-   **LinkedHashMap** → maintain order
-   **TreeMap** → sorted keys
