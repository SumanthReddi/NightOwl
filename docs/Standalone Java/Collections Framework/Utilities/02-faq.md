---
sidebar_position: 6
title: Frequently Asked Questions 
---

## Frequently Asked Questions (FAQ) About Java Collections

This section answers common questions developers have about the **Java
Collections Framework**.

------------------------------------------------------------------------

# General Questions

### Q1: What is the Java Collections Framework?

**Answer:**\
The Java Collections Framework is a unified architecture for
representing and manipulating collections of objects.

It provides:

-   Interfaces (`List`, `Set`, `Map`, `Queue`)
-   Implementations (`ArrayList`, `HashSet`, `HashMap`, etc.)
-   Algorithms for searching, sorting, and manipulation.

------------------------------------------------------------------------

### Q2: Why should I use collections instead of arrays?

Collections provide several advantages:

-   Dynamic resizing
-   Rich APIs
-   Built‑in algorithms
-   Generics (type safety)
-   Thread-safe alternatives

Arrays have **fixed size** and limited utility methods.

------------------------------------------------------------------------

### Q3: What are the core interfaces of the Collections Framework?

Core interfaces include:

-   `Collection`
-   `List`
-   `Set`
-   `Map`
-   `Queue`
-   `Deque`

`Collection` is the root interface for most structures except `Map`.

------------------------------------------------------------------------

# Implementation Questions

### Q4: When should I use `ArrayList` vs `LinkedList`?

Use **ArrayList** when:

-   Frequent reads
-   Random access
-   Memory efficiency

Use **LinkedList** when:

-   Frequent insertions/removals at ends

In most real applications, **ArrayList performs better**.

------------------------------------------------------------------------

### Q5: What is the difference between `HashMap` and `TreeMap`?
| Feature       | HashMap      | TreeMap          |
|---------------|--------------|------------------|
| Ordering      | No order     | Sorted           |
| Performance   | O(1)         | O(log n)         |
| Structure     | Hash table   | Red‑black tree   |
------------------------------------------------------------------------

### Q6: Can a Map contain null keys or values?

-   `HashMap` → allows **1 null key** and multiple null values
-   `LinkedHashMap` → same behavior
-   `TreeMap` → **null keys not allowed**

------------------------------------------------------------------------

### Q7: What is the difference between `HashSet` and `TreeSet`?

| Feature          | HashSet   | TreeSet   |
|------------------|-----------|-----------|
| Ordering         | None      | Sorted    |
| Performance      | O(1)      | O(log n)  |
| Implementation   | HashMap   | TreeMap   |
------------------------------------------------------------------------

# Thread Safety Questions

### Q8: Are Java collections thread-safe?

Most collections are **not thread-safe**.

Examples:

-   `ArrayList`
-   `HashMap`

Thread-safe alternatives:

-   `ConcurrentHashMap`
-   `CopyOnWriteArrayList`
-   `BlockingQueue`

------------------------------------------------------------------------

### Q9: Difference between `synchronizedList` and `CopyOnWriteArrayList`?

| Feature    | synchronizedList            | CopyOnWriteArrayList       |
|------------|-----------------------------|----------------------------|
| Locking    | Uses synchronized methods   | No locking                 |
| Writes     | Normal                      | Creates new array          |
| Best Use   | Moderate concurrency        | Read-heavy systems         |

------------------------------------------------------------------------

### Q10: What is a `BlockingQueue`?

A **BlockingQueue** blocks threads when:

-   Queue is empty (consumer waits)
-   Queue is full (producer waits)

Examples:

-   `ArrayBlockingQueue`
-   `LinkedBlockingQueue`
-   `PriorityBlockingQueue`

Used in **producer-consumer systems**.

------------------------------------------------------------------------

# Streams and Functional Programming

### Q11: What is the Streams API?

The Streams API (Java 8) allows functional processing of collections.

Examples of operations:

-   `filter`
-   `map`
-   `sorted`
-   `reduce`
-   `collect`

------------------------------------------------------------------------

### Q12: Difference between intermediate and terminal operations?

Intermediate operations:

-   Return another stream
-   Lazy evaluation

Examples:

-   `filter`
-   `map`
-   `sorted`

Terminal operations:

-   Produce a result
-   Trigger execution

Examples:

-   `collect`
-   `forEach`
-   `count`

------------------------------------------------------------------------

### Q13: When should I use parallel streams?

Use parallel streams when:

-   Dataset is large
-   Operation is CPU intensive
-   Task can be split into independent subtasks

Avoid for:

-   small datasets
-   IO operations

------------------------------------------------------------------------

# Memory and Performance

### Q14: How can I reduce memory usage in collections?

Strategies:

-   Preallocate capacity
-   Use primitive collections
-   Avoid unnecessary boxing
-   Trim unused capacity

Libraries:

-   FastUtil
-   Eclipse Collections

------------------------------------------------------------------------

### Q15: What does `trimToSize()` do?

`trimToSize()` reduces an ArrayList's internal array capacity to match
its size.

Example:

``` java
ArrayList<String> list = new ArrayList<>(100);
list.add("A");
list.trimToSize();
```

This releases unused memory.

------------------------------------------------------------------------

### Q16: What is a weak reference in collections?

Weak references allow objects to be garbage collected if no strong
references exist.

Example:

`WeakHashMap`

Keys can be automatically removed by the garbage collector.

------------------------------------------------------------------------

# Advanced Topics

### Q17: How do I create immutable collections?

Java 9 introduced factory methods:

    List.of()
    Set.of()
    Map.of()

These create **unmodifiable collections**.

------------------------------------------------------------------------

### Q18: What is a multimap?

A **multimap** maps one key to multiple values.

Example:

    key → [value1, value2, value3]

Library support:

-   Guava `Multimap`
-   Eclipse Collections

------------------------------------------------------------------------

### Q19: How do I implement a custom collection?

Extend helper classes like:

-   `AbstractCollection`
-   `AbstractList`
-   `AbstractSet`

Then implement required methods such as:

-   `size()`
-   `iterator()`
-   `add()`

------------------------------------------------------------------------

# Troubleshooting

### Q20: Why do I get `ConcurrentModificationException`?

This happens when a collection is modified during iteration.

Example:

``` java
for(String s : list){
    list.remove(s);
}
```

Solution:

Use iterator removal:

``` java
Iterator<String> it = list.iterator();
while(it.hasNext()){
    if(condition){
        it.remove();
    }
}
```

------------------------------------------------------------------------

### Q21: Why does TreeMap or TreeSet throw `NullPointerException`?

They require elements to be **comparable**.

`null` cannot be compared, so it is not allowed.

------------------------------------------------------------------------

### Q22: Why is my HashMap slow?

Possible reasons:

-   Poor `hashCode()` implementation
-   Too many collisions
-   Large load factor
-   Excessive resizing

Ensure `equals()` and `hashCode()` are implemented correctly.

------------------------------------------------------------------------

This FAQ section helps clarify many of the **common misconceptions and
practical issues developers face when using Java collections**.
