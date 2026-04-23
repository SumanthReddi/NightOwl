---
sidebar_position: 4
title: equals() vs == in String 
---

## Overview

In Java, both `==` and `equals()` are used to compare objects, but they
work differently when comparing **Strings**.

-   `==` compares **memory references (addresses)**
-   `equals()` compares **actual string values (content)**

> **Rule:** Use `equals()` when comparing String values.

------------------------------------------------------------------------

## Using == Operator

The `==` operator checks whether two references **point to the same
object in memory**.

#### Example

``` java
String s1 = "Java";
String s2 = "Java";

System.out.println(s1 == s2); // true
```

#### Explanation

Both `s1` and `s2` refer to the **same object in the String Constant
Pool**.

#### Memory representation
```
    String Pool

    +---------+
    | "Java"  |  ← s1, s2
    +---------+
```
------------------------------------------------------------------------

## Using equals() Method

The `equals()` method compares the **actual content of the strings**.

#### Example

``` java
String s1 = new String("Java");
String s2 = new String("Java");

System.out.println(s1.equals(s2)); // true
```

#### Explanation

Even though `s1` and `s2` are **different objects**, their **values are
the same**, so `equals()` returns `true`.

------------------------------------------------------------------------

## Example Showing Difference

``` java
String s1 = new String("Java");
String s2 = new String("Java");

System.out.println(s1 == s2); // false
System.out.println(s1.equals(s2)); // true
```

#### Explanation

-   `==` → compares memory addresses
-   `equals()` → compares actual text

------------------------------------------------------------------------

## Comparison Table

| Feature | == Operator | equals() Method |
|--------|-------------|----------------|
| Comparison type | Reference comparison | Value comparison |
| Checks | Memory address | String content |
| Works for objects | Yes | Yes |
| Recommended for strings | No | Yes |

------------------------------------------------------------------------

## When to Use

Use `==` when:

-   You want to check if **two references point to the same object**.

Use `equals()` when:

-   You want to compare **actual string values**.

Example

``` java
String s1 = "Java";
String s2 = "Java";

if(s1.equals(s2)){
    System.out.println("Strings are equal");
}
```

------------------------------------------------------------------------

## Summary

-   `==` compares **memory references**
-   `equals()` compares **string values**
-   Always use **`equals()` for string content comparison**
-   `==` should only be used when checking **object references**
