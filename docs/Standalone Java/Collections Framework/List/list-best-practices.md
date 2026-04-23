---
sidebar_position: 5
title: List Best Practices
---

## Best Practices for Using `List` Implementations in Java

When working with `List` implementations in Java, it's important to
choose the right implementation for your use case and follow best
practices to ensure optimal performance, maintainability, and thread
safety.

------------------------------------------------------------------------

## 1. Choosing the Right Implementation

Different `List` implementations have different strengths and
weaknesses.

### Use `ArrayList` When

-   Fast random access is needed (`O(1)` for `get()` / `set()`)
-   Insertions mainly occur at the end
-   Memory efficiency matters

### Use `LinkedList` When

-   Frequent insertions/deletions occur at beginning or middle
-   Using the structure as a deque or stack
-   Memory overhead is not critical

### Avoid `Vector` and `Stack`

-   Legacy classes
-   Synchronization overhead
-   Prefer `ArrayList` or `ArrayDeque`

------------------------------------------------------------------------

## 2. Avoiding Common Pitfalls

### Using `Vector` or `Stack` in Modern Code

These introduce unnecessary synchronization overhead.

Prefer:

    ArrayList
    ArrayDeque

------------------------------------------------------------------------

### Using `LinkedList` for Random Access

`LinkedList` has slow index access (`O(n)`).

Use `ArrayList` instead for index-based access.

------------------------------------------------------------------------

### Modifying a List While Iterating

This can cause `ConcurrentModificationException`.

Safe approach:

``` java
Iterator<String> it = list.iterator();

while (it.hasNext()) {
    String item = it.next();

    if (item.equals("Banana")) {
        it.remove();
    }
}
```

------------------------------------------------------------------------

### Ignoring Capacity Management

Frequent resizing of `ArrayList` can reduce performance.

``` java
List<String> fruits = new ArrayList<>(100);
```

------------------------------------------------------------------------

## 3. Performance Comparison

| Operation       | ArrayList        | LinkedList           |
|-----------------|------------------|----------------------|
| Random Access   | O(1)             | O(n)                 |
| Add at End      | O(1) amortized   | O(1)                 |
| Remove at End   | O(1)             | O(1)                 |
| Insert Middle   | O(n)             | O(1) for node        |
| Memory Usage    | Low              | Higher               |

------------------------------------------------------------------------

## 4. Thread Safety

Most lists are **not thread-safe**.

### Option 1: Synchronized List

``` java
List<String> syncList =
Collections.synchronizedList(new ArrayList<>());
```

### Option 2: Concurrent Collection

``` java
List<String> list =
new CopyOnWriteArrayList<>();
```

------------------------------------------------------------------------

## 5. Useful Patterns

### Removing Duplicates

``` java
List<String> fruits =
Arrays.asList("Apple","Banana","Apple");

List<String> unique =
new ArrayList<>(new HashSet<>(fruits));
```

------------------------------------------------------------------------

### Sorting a List

``` java
numbers.sort(Comparator.naturalOrder());
```

------------------------------------------------------------------------

### Filtering with Streams

``` java
List<Integer> evens =
numbers.stream()
       .filter(n -> n % 2 == 0)
       .toList();
```

------------------------------------------------------------------------

## 6. Large Scale Application Tips

### Prefer Primitive Collections

Libraries:

-   Eclipse Collections
-   FastUtil

They reduce boxing overhead.

------------------------------------------------------------------------

### Profile Performance

Use profilers to detect inefficient list usage.

------------------------------------------------------------------------

### Immutable Lists

``` java
List<String> list =
List.of("Apple","Banana","Cherry");
```

Immutable lists prevent accidental modification.

------------------------------------------------------------------------

## 7.Difference Between List Implementations in Java

| Feature | ArrayList | LinkedList | Vector |
|--------|-----------|------------|--------|
| Type | List | List | List |
| Ordering | Insertion order | Insertion order | Insertion order |
| Duplicates Allowed? | Yes | Yes | Yes |
| Null Elements Allowed? | Yes | Yes | Yes |
| Thread-Safe? | No | No | Yes (synchronized) |
| Underlying Data Structure | Dynamic array | Doubly-linked list | Dynamic array |
| Initial Capacity | Default: 10 | N/A | Default: 10 |
| Growth Strategy | Increases by 50% when full | Dynamically grows | Doubles in size |
| Performance | Add O(1), Get O(1), Remove O(n) | Add/Remove ends O(1), Get O(n) | Similar to ArrayList but slower |
| Memory Overhead | Low | High | Moderate |
| Use Cases | Random access, large datasets | Frequent insert/delete | Legacy thread-safe list |
| Iterator Type | Fail-fast | Fail-fast | Fail-safe (Enumeration) |
| Synchronization | Not synchronized | Not synchronized | Synchronized |

## Explanation of Key Differences

### 1. Ordering
All three implementations (**ArrayList**, **LinkedList**, **Vector**) maintain the **insertion order**, meaning elements are stored and retrieved in the same sequence they were added.

---

### 2. Duplicates and Null Elements
Since all three are implementations of the **List interface**, they allow:

- **Duplicate elements**
- **Null values**

---

### 3. Thread-Safety

- **ArrayList** and **LinkedList** are **not thread-safe**.  
  They are designed for **single-threaded environments** and offer better performance.

- **Vector** is **thread-safe** because its methods are synchronized.  
  However, this synchronization makes it **slower compared to ArrayList and LinkedList**.

---

### 4. Underlying Data Structure

- **ArrayList**
  - Uses a **dynamic array**
  - Efficient for **random access**
  - Slower for **frequent insertions and deletions**

- **LinkedList**
  - Uses a **doubly-linked list**
  - Efficient for **adding/removing elements at both ends**
  - Slower for **random access**

- **Vector**
  - Uses a **dynamic array** similar to `ArrayList`
  - Has **additional synchronization overhead**

---

### 5. Performance

#### ArrayList
- **Add:** `O(1)` amortized (occasionally `O(n)` during resizing)
- **Get:** `O(1)` due to index-based access
- **Remove:** `O(n)` because elements must be shifted

#### LinkedList
- **Add/Remove at Ends:** `O(1)`  
- **Get:** `O(n)` because traversal is required  
- **Remove from Middle:** `O(n)`

#### Vector
- Similar to **ArrayList** in time complexity  
- **Slower due to synchronization**

---

### 6. Memory Overhead

- **ArrayList**
  - Minimal memory overhead
  - Stores elements in an array

- **LinkedList**
  - Higher memory usage
  - Each node stores:
    - value
    - previous pointer
    - next pointer

- **Vector**
  - Moderate memory overhead due to synchronization

---

### 7. Use Cases

#### ArrayList
Ideal when:

- Random access is frequent
- Thread-safety is not required
- Large datasets are stored with fewer insertions/deletions

#### LinkedList
Suitable for:

- Implementing **queues**
- Implementing **stacks**
- Implementing **deques**
- Frequent insertions and deletions

#### Vector
Primarily used for:

- **Legacy systems**
- Situations where **built-in synchronization is required**

---

### 8. Iterator Behavior

- **ArrayList** and **LinkedList**
  - Provide **fail-fast iterators**
  - Throw `ConcurrentModificationException` if the collection is modified during iteration

- **Vector**
  - Provides **fail-safe iterators** via `Enumeration`
  - Does **not throw exceptions** if modified during iteration

---

## Summary

1.  Choose the correct implementation.
2.  Avoid modifying lists during iteration.
3.  Manage ArrayList capacity when size is known.
4.  Use concurrent collections when needed.
5.  Prefer modern APIs like Streams.
