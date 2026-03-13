---
sidebar_position: 2
title: String Immutability 
---
<!-- # String Immutability in Java -->

## What is String Immutability?

In Java, **String objects are immutable**, which means once a `String`
object is created, **its value cannot be changed**.

If you try to modify a string, Java **creates a new object instead of changing the existing one**.

> **String Immutability = The value of a String object cannot be changed after creation.**

------------------------------------------------------------------------

## Example

``` java
String s = "Hello";

s.concat(" World");

System.out.println(s); // Hello
```

Explanation:

The method `concat()` creates a **new string object**, but since it is
not assigned to a variable, the original string remains unchanged.

------------------------------------------------------------------------

## Correct Way

``` java
String s = "Hello";

s = s.concat(" World");

System.out.println(s); // Hello World
```


Here:

-   `"Hello"` remains unchanged.
-   `"Hello World"` is created as a **new object**.

------------------------------------------------------------------------

## Memory Representation

``` java
String s1 = "Java";
s1 = s1.concat(" Programming");
```

Memory concept:

    String Constant Pool

    +--------+
    | "Java" |
    +--------+
         |
         v
    +---------------------+
    | "Java Programming"  |
    +---------------------+

The original `"Java"` string **is not modified**.\
A **new object** `"Java Programming"` is created.

------------------------------------------------------------------------

## Why Strings Are Immutable

Java designers made strings immutable for several reasons:

### 1. Security

Strings are widely used in:

-   file paths
-   network connections
-   database URLs

Immutability prevents accidental modification.

------------------------------------------------------------------------

### 2. String Pool Optimization

Since strings cannot change, Java safely **reuses objects in the String
Pool**, saving memory.

Example:

``` java
String s1 = "Java";
String s2 = "Java";
```

Both variables point to the **same object**.

------------------------------------------------------------------------

### 3. Thread Safety

Immutable objects are **automatically thread-safe** because their values
cannot change.

Multiple threads can use the same string safely.

------------------------------------------------------------------------

### 4. Hashcode Caching

Strings are frequently used as keys in:

-   `HashMap`
-   `HashSet`

Immutability allows Java to **cache hashcodes**, improving performance.

------------------------------------------------------------------------

## Demonstration Program

``` java
public class Test {

    public static void main(String[] args) {

        String s1 = "Java";

        String s2 = s1.concat(" Programming");

        System.out.println(s1); // Java
        System.out.println(s2); // Java Programming

    }

}
```


------------------------------------------------------------------------

## Summary

-   `String` objects in Java are **immutable**.
-   Any modification creates a **new object**.
-   Original strings remain unchanged.
-   Benefits include:

```
    Security
    Memory optimization (String Pool)
    Thread safety
    Performance improvements
```