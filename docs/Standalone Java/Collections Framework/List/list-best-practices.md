---
sidebar_position: 5
title: List Best Practices
---
<!-- # 05-list-best-practices -->

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

## Summary

1.  Choose the correct implementation.
2.  Avoid modifying lists during iteration.
3.  Manage ArrayList capacity when size is known.
4.  Use concurrent collections when needed.
5.  Prefer modern APIs like Streams.
