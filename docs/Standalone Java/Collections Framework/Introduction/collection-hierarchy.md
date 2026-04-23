---
sidebar_position: 1
title: Collection Hierarchy
---


## Collection Framework Hierarchy in Java

The **Java Collection Framework (JCF)** is a unified architecture for
representing and manipulating collections of objects. It provides a set
of interfaces, implementations, and algorithms that reduce programming
effort, increase performance, and improve interoperability.

Understanding the **hierarchical structure** of the framework is
essential before diving into individual classes or interfaces. This
guide walks you through the entire hierarchy---from root interfaces to
concrete implementations---with clear visual mapping and practical
insights.

------------------------------------------------------------------------

### High-Level Overview

At its core, the Collection Framework is built around **interfaces**
that define contracts, and **classes** that provide concrete
implementations. The hierarchy can be divided into two major branches:

1.  **The `Collection` branch** --- for groups of elements (e.g.,
    `List`, `Set`, `Queue`)
2.  **The `Map` branch** --- for key-value associations (e.g.,
    `HashMap`, `TreeMap`)

Important: `Map` does **not** extend `Collection`. It is a *sibling*
interface at the top level.

Here's the full class/interface hierarchy in ASCII form (you can
visualize this as a tree):
```
    java.lang.Object
    └── java.util.Collection<E>             ← Root interface for element containers
        ├── java.util.List<E>               ← Ordered, allows duplicates
        │   ├── java.util.ArrayList<E>
        │   ├── java.util.LinkedList<E>
        │   ├── java.util.Vector<E>
        │   └── java.util.Stack<E>
        │
        ├── java.util.Set<E>                ← Unordered, no duplicates (by contract)
        │   ├── java.util.HashSet<E>
        │   ├── java.util.LinkedHashSet<E>
        │   └── java.util.TreeSet<E>
        │
        └── java.util.Queue<E>              ← FIFO (or priority-based) processing
            ├── java.util.PriorityQueue<E>
            ├── java.util.ArrayDeque<E>
            └── java.util.LinkedList<E>     ← Also implements List & Deque
            └── java.util.concurrent.BlockingQueue<E>   (subinterface)
                ├── java.util.concurrent.ArrayBlockingQueue<E>
                ├── java.util.concurrent.LinkedBlockingQueue<E>
                └── java.util.concurrent.SynchronousQueue<E>

    java.lang.Object
        └── java.util.Map<K,V>              ← Key-value pairs (NOT a Collection!)
            ├── java.util.HashMap<K,V>
            ├── java.util.LinkedHashMap<K,V>
            ├── java.util.TreeMap<K,V>
            └── java.util.Hashtable<K,V>
```
Note:

-   `LinkedList` implements `List`, `Deque`, and `Queue`
-   `ArrayDeque` implements `Deque` but **not** `List`
-   `Stack` is a legacy class and usually replaced by `ArrayDeque`

------------------------------------------------------------------------

## Core Interfaces and Their Roles

### 1. `Collection<E>` --- The Root Interface

All element-based collections (except `Map`) inherit from this
interface.

| Method                         | Purpose                   |
|--------------------------------|---------------------------|
| `boolean add(E e)`             | Adds an element           |
| `boolean remove(Object o)`     | Removes first occurrence  |
| `int size()`                   | Returns number of elements|
| `boolean isEmpty()`            | Checks if empty           |
| `Iterator<E> iterator()`       | Returns iterator          |
| `boolean contains(Object o)`   | Checks existence          |
| `Object[] toArray()`           | Converts to array         |

Example:

``` java
import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        // Polymorphic assignment: any Collection implementation works
        Collection<String> coll = new ArrayList<>();

        coll.add("Apple");
        coll.add("Banana");
        coll.add("Apple");  // Duplicates allowed in List, but not in Set!

        System.out.println("Size: " + coll.size());     // → 3
        System.out.println("Contains Banana? " + coll.contains("Banana"));      // → true
        // Iterate using Iterator (fail-fast behavior)
        Iterator<String> it = coll.iterator();

        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
```

Tip: You rarely instantiate `Collection` directly. It is mostly used for
abstraction.

------------------------------------------------------------------------

### 2. `Iterable<T>`

Defined in `java.lang.Iterable`. It is the **most fundamental interface
for iteration**.

Only one abstract method:

``` java
Iterator<T> iterator();
```

This enables:

-   Enhanced for-loop
-   Streams
-   Functional APIs

Example:

``` java
import java.util.*;

class Countdown implements Iterable<Integer> {

    private final int start;

    public Countdown(int start) {
        this.start = start;
    }

    @Override
    public Iterator<Integer> iterator() {

        return new Iterator<>() {
            private int current = start;

            @Override
            public boolean hasNext() {
                return current > 0;
            }

            @Override
            public Integer next() {
                if (!hasNext()) {
                    throw new NoSuchElementException();
                }
                return current--;
            }
        };
    }
}

// Usage:
public class IterableExample {
    public static void main(String[] args) {
        Countdown countdown = new Countdown(5);
        for (int i : countdown) {
            System.out.println(i);  // → 5, 4, 3, 2, 1
        }
    }
}
```
