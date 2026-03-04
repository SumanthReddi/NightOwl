---
sidebar_position: 4
title:  Set Best Pracrives
---
<!-- # 04-set-best-practices -->

## Best Practices for Using `Set` Implementations in Java

When working with `Set` implementations in Java, it is important to
choose the correct implementation and follow best practices to ensure
good performance, maintainability, and correctness.

------------------------------------------------------------------------

## 1. Choosing the Right Implementation

Different `Set` implementations serve different purposes.

### Use `HashSet` When

-   Fast lookups are required
-   Order does not matter
-   You want the best average performance

### Use `LinkedHashSet` When

-   You need to maintain **insertion order**
-   You still want fast operations

### Use `TreeSet` When

-   You need **sorted elements**
-   You need navigation methods like `first()`, `last()`, `ceiling()`

------------------------------------------------------------------------

## 2. Avoiding Common Pitfalls

### Adding Duplicate Elements

Sets do not allow duplicates. The `add()` method returns `false` if the
element already exists.

``` java
Set<String> fruits = new HashSet<>();

boolean added = fruits.add("Apple");
added = fruits.add("Apple"); // returns false
```

------------------------------------------------------------------------

### Using `null` with `TreeSet`

`TreeSet` does not allow `null`.

``` java
Set<Integer> numbers = new TreeSet<>();
// numbers.add(null); // Throws NullPointerException
```

------------------------------------------------------------------------

### Modifying a Set During Iteration

This causes `ConcurrentModificationException`.

Safe approach:

``` java
Iterator<String> it = fruits.iterator();

while (it.hasNext()) {
    String fruit = it.next();
    
    if (fruit.equals("Banana")) {
        it.remove();
    }
}
```

------------------------------------------------------------------------

### Forgetting Comparators with TreeSet

If objects are not `Comparable`, you must provide a `Comparator`.

``` java
Set<String> names = new TreeSet<>(Comparator.reverseOrder());
```

------------------------------------------------------------------------

## 3. Performance Comparison

  Operation   HashSet   LinkedHashSet     TreeSet
  ----------- --------- ----------------- ----------
  Add         O(1)      O(1)              O(log n)
  Remove      O(1)      O(1)              O(log n)
  Contains    O(1)      O(1)              O(log n)
  Ordering    None      Insertion order   Sorted
  Memory      Low       Medium            Higher

------------------------------------------------------------------------

## 4. Thread Safety

Most `Set` implementations are **not thread-safe**.

### Option 1: Synchronized Wrapper

``` java
Set<String> syncSet =
Collections.synchronizedSet(new HashSet<>());
```

### Option 2: Concurrent Collection

``` java
Set<String> concurrentSet =
new ConcurrentSkipListSet<>();
```

------------------------------------------------------------------------

## 5. Useful Patterns

### Removing Duplicates

``` java
List<String> fruits =
Arrays.asList("Apple","Banana","Apple");

Set<String> unique =
new HashSet<>(fruits);
```

------------------------------------------------------------------------

### Sorting a Set

``` java
Set<Integer> numbers =
new HashSet<>(Arrays.asList(5,2,8,1));

Set<Integer> sorted =
new TreeSet<>(numbers);
```

------------------------------------------------------------------------

### Mathematical Set Operations

``` java
Set<Integer> set1 = new HashSet<>(Arrays.asList(1,2,3));
Set<Integer> set2 = new HashSet<>(Arrays.asList(2,3,4));

Set<Integer> union = new HashSet<>(set1);
union.addAll(set2);

Set<Integer> intersection = new HashSet<>(set1);
intersection.retainAll(set2);

Set<Integer> difference = new HashSet<>(set1);
difference.removeAll(set2);
```

------------------------------------------------------------------------

## 6. Large Scale Application Recommendations

### Primitive Collections

Libraries like:

-   Eclipse Collections
-   FastUtil

reduce memory overhead caused by boxing.

------------------------------------------------------------------------

### Profile Performance

Use profilers to detect inefficient `Set` usage.

------------------------------------------------------------------------

### Immutable Sets

``` java
Set<String> set =
Set.of("Apple","Banana","Cherry");
```

Immutable sets prevent modification.

------------------------------------------------------------------------

## Summary

1.  Choose the right `Set` implementation.
2.  Avoid modifying collections during iteration.
3.  Understand time complexity of operations.
4.  Use concurrent collections when needed.
5.  Prefer immutable sets for read‑only data.
