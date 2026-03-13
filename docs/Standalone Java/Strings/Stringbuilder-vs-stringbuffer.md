---
sidebar_position: 8
title: StringBuilder vs StringBuffer 
---
## StringBuilder vs StringBuffer

Both **StringBuilder** and **StringBuffer** are classes in Java used to
create **mutable strings**.\
They allow modification of string content without creating new objects
like the `String` class.

The key difference between them is **thread safety**.

------------------------------------------------------------------------

## Simple Definition

-   **StringBuilder:** Mutable string class that is **not thread-safe**,
    but faster.
-   **StringBuffer:** Mutable string class that is **thread-safe
    (synchronized)**.

------------------------------------------------------------------------

## Example: StringBuilder

``` java
StringBuilder sb = new StringBuilder("Java");

sb.append(" Programming");

System.out.println(sb); // Java Programming
```


------------------------------------------------------------------------

## Example: StringBuffer

``` java
StringBuffer sb = new StringBuffer("Java");

sb.append(" Programming");
 
System.out.println(sb); //  Java Programming
```


------------------------------------------------------------------------

## Key Differences

| Feature | StringBuilder | StringBuffer |
|--------|---------------|--------------|
| Thread Safety | Not thread-safe | Thread-safe |
| Synchronization | Not synchronized | Synchronized |
| Performance | Faster | Slower |
| Introduced | Java 5 | Java 1.0 |
| Use Case | Single-threaded applications | Multi-threaded applications |

------------------------------------------------------------------------

## Performance Difference

Because `StringBuffer` methods are **synchronized**, only one thread can
access them at a time.

This makes it:

-   **Safe for multi-threaded environments**
-   **Slightly slower than StringBuilder**

`StringBuilder` does **not use synchronization**, so it performs faster
in single-threaded scenarios.

------------------------------------------------------------------------

## When To Use

Use **StringBuilder** when:

-   Application is **single-threaded**
-   Performance is important
-   Frequent string modifications are required

Use **StringBuffer** when:

-   Application is **multi-threaded**
-   Thread safety is required
-   Multiple threads may modify the same string

------------------------------------------------------------------------

## Summary

-   Both classes create **mutable strings**
-   `StringBuilder` is **faster but not thread-safe**
-   `StringBuffer` is **thread-safe but slightly slower**
-   Choose based on **thread safety requirements**
