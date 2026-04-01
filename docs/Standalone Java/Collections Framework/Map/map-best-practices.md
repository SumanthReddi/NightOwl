---
sidebar_position: 6
title: Map Best Practices
---
<!-- # 05-map-best-practices -->

## Best Practices for Using `Map` Implementations in Java

When working with `Map` implementations in Java, it's important to
choose the right implementation for your use case and follow best
practices to ensure optimal performance, maintainability, and
correctness.

This guide covers key considerations, common pitfalls, and
recommendations for using `Map` effectively.

------------------------------------------------------------------------

## 1. Choosing the Right Implementation

Different `Map` implementations have different strengths and weaknesses.

### Use `HashMap` When

-   Fast lookups are required
-   Insertions and deletions must be efficient
-   Order does not matter

### Use `LinkedHashMap` When

-   You need **insertion order**
-   You want predictable iteration order
-   Performance similar to `HashMap` is required

### Use `TreeMap` When

-   Keys must be **sorted**
-   Range queries are required
-   Navigable methods like `firstKey()` or `lastKey()` are needed

### Use `ConcurrentHashMap` When

-   Thread safety is required
-   High-performance concurrent access is needed

Avoid using `Hashtable` in modern code unless required for **legacy
compatibility**.

------------------------------------------------------------------------

## 2. Avoiding Common Pitfalls

### Duplicate Keys

Maps do not allow duplicate keys. When a duplicate key is inserted, the
previous value is replaced.

``` java
Map<String,Integer> map = new HashMap<>();

Integer oldValue = map.put("Apple",3);
oldValue = map.put("Apple",5);  // replaces previous value
```

Always check the return value if overwriting matters.

------------------------------------------------------------------------

### Using `null` with TreeMap

`TreeMap` does not allow `null` keys.

``` java
Map<Integer,String> numbers = new TreeMap<>();

// numbers.put(null,"Unknown"); // Throws NullPointerException
```

------------------------------------------------------------------------

### Modifying a Map While Iterating

Modifying a map directly during iteration causes
`ConcurrentModificationException`.

Use an iterator instead.

``` java
Iterator<Map.Entry<String,Integer>> it = map.entrySet().iterator();

while(it.hasNext()){
    Map.Entry<String,Integer> entry = it.next();
    if(entry.getKey().equals("Bob")){
        it.remove();
    }
}
```

------------------------------------------------------------------------

### Missing Comparator in TreeMap

When storing objects that are not naturally comparable, always provide a
comparator.

``` java
Map<String,Integer> map = new TreeMap<>(Comparator.reverseOrder());
```

------------------------------------------------------------------------

## 3. Performance Considerations
| Operation         | HashMap   | LinkedHashMap   | TreeMap   |
|-------------------|-----------|-----------------|-----------|
| Put               | O(1)      | O(1)            | O(log n)  |
| Get               | O(1)      | O(1)            | O(log n)  |
| Remove            | O(1)      | O(1)            | O(log n)  |
| Iteration Order   | None      | Insertion       | Sorted    |

Memory overhead increases in the order:

HashMap \< LinkedHashMap \< TreeMap

------------------------------------------------------------------------

## 4. Thread Safety

Most map implementations are **not thread-safe**.

### Option 1 --- Synchronized Map

``` java
Map<String,Integer> syncMap =
    Collections.synchronizedMap(new HashMap<>());
```

### Option 2 --- ConcurrentHashMap

``` java
Map<String,Integer> concurrentMap =
    new ConcurrentHashMap<>();
```

`ConcurrentHashMap` is preferred for modern multi-threaded applications.

------------------------------------------------------------------------

## 5. Best Practices for Common Scenarios

### Sorting a Map

Sort by keys:

``` java
Map<String,Integer> sorted = new TreeMap<>(map);
```

Sort by values:

``` java
Map<String,Integer> sorted =
    map.entrySet()
       .stream()
       .sorted(Map.Entry.comparingByValue())
       .collect(Collectors.toMap(
           Map.Entry::getKey,
           Map.Entry::getValue,
           (a,b)->a,
           LinkedHashMap::new
       ));
```

------------------------------------------------------------------------

### Range Queries

`TreeMap` provides powerful range queries.

``` java
TreeMap<Integer,String> map = new TreeMap<>();

map.put(10,"Ten");
map.put(20,"Twenty");
map.put(30,"Thirty");

Map<Integer,String> range = map.subMap(15,25);
```

------------------------------------------------------------------------

### Iterating Over a Map

``` java
for(String key : map.keySet()){
    System.out.println(key);
}

for(Integer value : map.values()){
    System.out.println(value);
}

for(Map.Entry<String,Integer> entry : map.entrySet()){
    System.out.println(entry.getKey()+" : "+entry.getValue());
}
```

------------------------------------------------------------------------

## 6. Recommendations for Large Applications

### Use Immutable Maps

``` java
Map<String,Integer> map =
    Map.of("Alice",95,"Bob",87);
```

Immutable maps prevent accidental modifications.

------------------------------------------------------------------------

### Prefer Primitive Collections

Libraries like:

-   Eclipse Collections
-   FastUtil

reduce memory usage when storing primitives.

------------------------------------------------------------------------

### Profile Performance

Use profiling tools to detect inefficient map usage in large
applications.

------------------------------------------------------------------------

### 7. Difference Between Map Implementations in Java

| Feature | HashMap | LinkedHashMap | TreeMap | Hashtable |
|--------|---------|---------------|--------|-----------|
| Type | Map | Map | Map | Map |
| Ordering | No guaranteed order | Insertion order | Sorted order (natural or comparator) | No guaranteed order |
| Duplicate Keys | Not allowed | Not allowed | Not allowed | Not allowed |
| Duplicate Values | Allowed | Allowed | Allowed | Allowed |
| Null Keys | One null key allowed | One null key allowed | Not allowed | Not allowed |
| Null Values | Multiple null values allowed | Multiple null values allowed | Allowed | Not allowed |
| Thread-Safe | No | No | No | Yes (synchronized) |
| Data Structure | Hash table | Hash table + linked list | Red-black tree | Hash table |
| Put Operation | O(1) | O(1) | O(log n) | O(1) |
| Get Operation | O(1) | O(1) | O(log n) | O(1) |
| Remove Operation | O(1) | O(1) | O(log n) | O(1) |
| Memory Overhead | Low | Moderate | High | Moderate |
| Iterator Type | Fail-fast | Fail-fast | Fail-fast | Fail-safe (Enumeration) |
| Best Use Case | Fast key-value lookup | Maintain insertion order | Sorted keys and range queries | Legacy thread-safe map |

### Explanation of Key Differences

#### 1. Ordering

- **HashMap**  
  Does **not guarantee any specific order** of keys or values.  
  The order depends on the hash codes of the keys.

- **LinkedHashMap**  
  Maintains the **insertion order**, meaning entries are stored and retrieved in the same sequence they were added.

- **TreeMap**  
  Maintains keys in a **sorted order** (natural ordering or using a custom comparator).

- **Hashtable**  
  Similar to `HashMap`, it **does not guarantee any specific order** of keys or values.

---

#### 2. Duplicate Keys and Null Values

- All implementations **do not allow duplicate keys** but allow **duplicate values**.

- **HashMap**
  - Allows **one null key**
  - Allows **multiple null values**

- **LinkedHashMap**
  - Allows **one null key**
  - Allows **multiple null values**

- **TreeMap**
  - **Does not allow null keys**
  - Allows **null values**

- **Hashtable**
  - **Does not allow null keys or null values**

---

#### 3. Thread Safety

- **HashMap**, **LinkedHashMap**, and **TreeMap** are **not thread-safe**.

  If thread safety is required, you can use:

  - `Collections.synchronizedMap()`
  - `ConcurrentHashMap`

- **Hashtable** is **thread-safe** because its methods are **synchronized**.

  However, this synchronization makes it **slower compared to HashMap**.

---

#### 4. Underlying Data Structure

- **HashMap**  
  Uses a **hash table** to store key-value pairs.

- **LinkedHashMap**  
  Uses a **hash table + linked list** to maintain insertion order.

- **TreeMap**  
  Uses a **red-black tree** (balanced binary search tree).

- **Hashtable**  
  Uses a **hash table**, similar to `HashMap`, but with synchronization.

---

#### 5. Performance

**HashMap**

- `put()` → `O(1)`
- `get()` → `O(1)`
- `remove()` → `O(1)`

**LinkedHashMap**

- Similar to `HashMap`
- Slightly slower due to linked list maintenance

**TreeMap**

- `put()` → `O(log n)`
- `get()` → `O(log n)`
- `remove()` → `O(log n)`

**Hashtable**

- Similar to `HashMap`
- Slower due to synchronization

---

#### 6. Memory Overhead

- **HashMap** → Low memory usage
- **LinkedHashMap** → Moderate (extra linked list pointers)
- **TreeMap** → High (tree node pointers)
- **Hashtable** → Moderate (synchronization overhead)

---

#### 7. Use Cases

**HashMap**

Best when:

- Fast key-value lookup is needed
- Ordering is not important

**LinkedHashMap**

Best when:

- Insertion order must be preserved
- Predictable iteration order is required

**TreeMap**

Best when:

- Keys must remain **sorted**
- **Range queries** or ordered traversal is required

**Hashtable**

Used mainly in:

- **Legacy applications**
- Situations requiring **built-in synchronization**

---

#### 8. Iterator Behavior

- **HashMap** and **LinkedHashMap**
  - Provide **fail-fast iterators**
  - Throw `ConcurrentModificationException` if the collection is modified during iteration

- **TreeMap**
  - Also provides **fail-fast iterators**
  - Iterates entries in **sorted order**

- **Hashtable**
  - Provides **fail-safe iterators** via `Enumeration`
  - Does **not throw exceptions** even if the collection is modified during iteration

---

## Summary

Best practices when using maps:

1.  Choose the right map implementation
2.  Understand time complexity of operations
3.  Avoid modifying maps during iteration
4.  Use `ConcurrentHashMap` for concurrency
5.  Prefer immutable maps for read-only data
