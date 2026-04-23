---
sidebar_position: 3
title: String Constant Pool
---

## What is the String Constant Pool?

The **String Constant Pool (SCP)** is a special memory area inside the
**Java Heap** where Java stores **string literals**.

It helps Java **optimize memory usage** by reusing identical string
objects.

> **String Constant Pool = A memory area where Java stores unique string literals.**

------------------------------------------------------------------------

## Example

``` java
String s1 = "Java";
String s2 = "Java";
```

Both `s1` and `s2` point to the **same object** in the String Constant
Pool.

### Memory Representation
```
    String Constant Pool

    +---------+
    | "Java"  |  ← s1, s2
    +---------+
```
Java does **not create a new object** for `s2` because `"Java"` already
exists in the pool.

------------------------------------------------------------------------

## How the String Pool Works

When a string literal is created:

1.  JVM checks if the string already exists in the **String Constant
    Pool**.
2.  If it exists → JVM returns the **existing reference**.
3.  If it does not exist → JVM **creates a new object in the pool**.

------------------------------------------------------------------------

## Example Demonstration

``` java
public class Test {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = "Java";

        System.out.println(s1 == s2); // True
    } 
}
```

Explanation:

-   `==` compares **memory references**
-   Both variables refer to the **same object in the pool**

------------------------------------------------------------------------

## String Created with `new` Keyword

When using `new`, Java **creates a new object in heap memory**, even if
the string already exists in the pool.

Example:

``` java
String s1 = "Java";
String s2 = new String("Java");

System.out.println(s1 == s2); // False
```

### Memory Representation
```
    String Constant Pool

    +---------+
    | "Java"  | ← s1
    +---------+

    Heap

    +---------+
    | "Java"  | ← s2
    +---------+
```
Here:

-   `s1` points to the **String Pool**
-   `s2` points to a **new object in heap memory**

------------------------------------------------------------------------

## Benefits of String Constant Pool

### Memory Optimization

Duplicate strings are **not created**, saving memory.

### Performance Improvement

Reusing objects reduces **object creation overhead**.

### Faster String Comparisons

Since multiple references can point to the same object, comparisons can
be faster.

------------------------------------------------------------------------

## Important Points

-   Only **string literals** are stored in the String Pool.
-   The pool stores **unique strings only**.
-   Strings created using `new` are stored in **heap memory**.
-   Use `intern()` to place a string into the pool.

Example:

``` java
String s1 = new String("Java");
String s2 = s1.intern();
```

------------------------------------------------------------------------

## Summary

-   The **String Constant Pool** stores unique string literals.
-   It prevents duplicate objects from being created.
-   It improves **memory usage and performance**.
-   Strings created using literals are stored in the **pool**, while
    `new String()` creates objects in the **heap**.
