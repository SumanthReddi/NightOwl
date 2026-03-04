---
sidebar_position: 4
title: Memory Management
---
<!-- # 04-memory-management -->

## Memory Management and Garbage Collection Considerations for Java Collections

Java collections are powerful, but their memory usage and interaction
with the garbage collector can significantly impact application
performance---especially in large-scale or memory‑constrained systems.

Understanding how collections allocate memory and how garbage collection
interacts with them helps build **high‑performance and memory‑efficient
Java applications**.

------------------------------------------------------------------------

# Key Factors Affecting Memory Usage

## 1. Object Overhead

Every Java object contains metadata such as:

-   Object header
-   Class metadata
-   Reference pointers

Typical overhead: **12--16 bytes per object**.

Wrapper classes like `Integer` or `Double` introduce **extra memory
cost** due to boxing.

Example:

    int → primitive (4 bytes)
    Integer → object (~16+ bytes)

------------------------------------------------------------------------

## 2. Collection Structure Overhead

Different collections have different memory footprints.

| Collection   | Memory Characteristics                            |
|--------------|---------------------------------------------------|
| ArrayList    | Compact array storage                             |
| LinkedList   | Node objects with prev/next references            |
| HashMap      | Bucket array + entry objects                      |
| TreeMap      | Red‑black tree nodes                              |

Example:

    LinkedList node:
    value + prev reference + next reference

This makes `LinkedList` significantly heavier than `ArrayList`.

------------------------------------------------------------------------

## 3. Primitive vs Object Storage

Using primitives avoids boxing overhead.

Libraries like:

-   **FastUtil**
-   **Eclipse Collections**

provide **primitive collections**.

Example:

``` java
import it.unimi.dsi.fastutil.ints.IntArrayList;

public class PrimitiveExample {

    public static void main(String[] args){

        IntArrayList numbers = new IntArrayList();

        numbers.add(1);
        numbers.add(2);
        numbers.add(3);

        System.out.println(numbers);
    }
}
```

------------------------------------------------------------------------

## 4. Capacity vs Size

Collections allocate **extra capacity** to allow growth.

Example:

    ArrayList size = 10
    capacity = 15

Unused capacity consumes memory.

------------------------------------------------------------------------

# Strategies for Efficient Memory Management

## 1. Preallocate Capacity

Reducing resizing operations saves memory and CPU.

``` java
List<String> list = new ArrayList<>(1000);

Map<String,Integer> map = new HashMap<>(500);
```

Resizing operations create new arrays and copy elements.

------------------------------------------------------------------------

## 2. Use Primitive Collections

Primitive collections avoid:

-   Boxing
-   Extra object allocations
-   Additional GC pressure

Libraries:

-   FastUtil
-   Eclipse Collections
-   HPPC

------------------------------------------------------------------------

## 3. Trim Unused Capacity

After populating a collection you can release unused space.

``` java
ArrayList<String> list = new ArrayList<>(100);

list.add("Apple");
list.add("Banana");

list.trimToSize();
```

This reduces the internal array to actual size.

------------------------------------------------------------------------

## 4. Use Immutable Collections

Immutable collections are often more compact.

Example:

``` java
List<String> fruits =
    List.of("Apple","Banana","Cherry");
```

Benefits:

-   No resizing
-   No modification overhead
-   Thread‑safe

------------------------------------------------------------------------

## 5. Avoid Unnecessary Wrappers

Avoid wrapping collections unless needed.

Examples:

    Collections.synchronizedList()
    Collections.unmodifiableList()

These wrappers introduce additional objects.

------------------------------------------------------------------------

# Garbage Collection Considerations

Poor collection management can cause **excessive GC activity**.

------------------------------------------------------------------------

## 1. Minimize Object Creation

Creating millions of temporary objects increases GC pressure.

Example improvement:

-   reuse objects
-   reuse buffers

------------------------------------------------------------------------

## 2. Weak References

Weak references allow objects to be garbage‑collected if no strong
references exist.

Example:

``` java
import java.util.WeakHashMap;

public class WeakMapExample {

    public static void main(String[] args){

        WeakHashMap<String,String> map =
            new WeakHashMap<>();

        map.put("Key1","Value1");
        map.put("Key2","Value2");

        System.gc();

        System.out.println(map);
    }
}
```

Entries may disappear if keys are reclaimed.

------------------------------------------------------------------------

## 3. Compact Data Structures

Using compact structures improves GC performance.

Prefer:

-   arrays
-   primitive collections
-   compact immutable collections

Avoid heavy structures for large datasets.

------------------------------------------------------------------------

## 4. Profile Memory Usage

Always analyze memory behavior using profiling tools.

Common tools:

-   **VisualVM**
-   **JProfiler**
-   **YourKit**
-   **Java Flight Recorder**

These help detect:

-   memory leaks
-   excessive allocations
-   GC pauses

------------------------------------------------------------------------

# Common Pitfalls

## Excessive Resizing

Collections growing repeatedly cause array reallocation.

------------------------------------------------------------------------

## Boxing Overhead

Using `Integer` instead of `int` increases memory usage.

------------------------------------------------------------------------

## Retaining References

Objects referenced by collections cannot be garbage collected.

Example:

    static List cache = new ArrayList();

Objects stay alive for entire JVM lifetime.

------------------------------------------------------------------------

## Using Legacy Collections

Legacy classes include unnecessary synchronization.

Examples:

-   Vector
-   Hashtable

Prefer:

-   ArrayList
-   HashMap

------------------------------------------------------------------------

# Memory Efficiency Comparison

| Collection   | Memory Cost |
|--------------|-------------|
| ArrayList    | Low         |
| LinkedList   | High        |
| HashMap      | Medium      |
| TreeMap      | High        |
| HashSet      | Medium      |

------------------------------------------------------------------------

# Best Practices

1.  Preallocate capacity when possible.
2.  Prefer `ArrayList` over `LinkedList` for most workloads.
3.  Use primitive collections for large numeric datasets.
4.  Trim collections after building them.
5.  Avoid unnecessary wrappers.
6.  Monitor GC activity using profiling tools.

------------------------------------------------------------------------

Efficient memory management with collections leads to **better
scalability, lower GC pauses, and higher application performance**.
