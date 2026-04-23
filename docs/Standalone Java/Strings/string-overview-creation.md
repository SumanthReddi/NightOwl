---
sidebar_position: 1
title: String Overview & Creation
---


## What is a String?

A **String** in Java is a sequence of characters used to represent text.

In Java, strings are **objects** of the `String` class located in the
`java.lang` package.

> **String = Immutable sequence of characters**

Once a string object is created, **its value cannot be changed**.

------------------------------------------------------------------------

## Key Characteristics of String

-   Strings are **immutable** (cannot be modified after creation)
-   Stored in the **String Constant Pool (SCP)**
-   Frequently used for handling text data
-   Part of the **java.lang package** (no import needed)

------------------------------------------------------------------------

# Ways to Create a String

There are two main ways to create a String in Java.

1.  Using **String Literal**
2.  Using the **new keyword (Constructor)**

------------------------------------------------------------------------

## 1. Creating String Using Literal

``` java
String s = "Hello";
```

### How it works

-   The string `"Hello"` is stored in the **String Constant Pool**
-   If the same string already exists, Java **reuses the existing
    object**

Example:

``` java
String s1 = "Java";
String s2 = "Java";

System.out.println(s1 == s2); // true
```

Both variables reference the **same object in the String Pool**.

------------------------------------------------------------------------

## 2. Creating String Using new Keyword

``` java
String s = new String("Hello");
```

### How it works

-   Creates a **new object in heap memory**
-   Even if `"Hello"` exists in the String Pool, a **new object is created**

Example:

``` java
String s1 = new String("Java");
String s2 = new String("Java");

System.out.println(s1 == s2); // false
```

Because both objects are stored in **different memory locations**.

------------------------------------------------------------------------

# String Creation Using Character Array

Strings can also be created from a **character array**.

``` java
char[] ch = {'J','a','v','a'};

String s = new String(ch);

System.out.println(s); // Java
```


------------------------------------------------------------------------

# String Creation Using StringBuilder or StringBuffer

A string can be created from **StringBuilder** or **StringBuffer** objects.

``` java
StringBuilder sb = new StringBuilder("Hello");

String s = sb.toString();

System.out.println(s);
```

------------------------------------------------------------------------

# String Memory Concept

When a string is created using a **literal**, it goes to the **String Pool**.

Example:

``` java
String s1 = "Java";
String s2 = "Java";
```

Memory representation:

    String Pool
    -------------
    "Java"  ← s1, s2 

Only **one object exists**, both variables reference it.

------------------------------------------------------------------------

# When to Use Each Creation Method

| Method | Usage |
|--------|------|
| String Literal | Preferred for memory efficiency |
| new String() | Creates a new object explicitly |
| char[] | Useful when converting character arrays |
| StringBuilder/StringBuffer | When building dynamic strings |

------------------------------------------------------------------------

# Summary

-   `String` represents text in Java.
-   Strings are **immutable objects**.
-   They can be created using:
    -   String literals
    -   `new` keyword
    -   character arrays
    -   `StringBuilder` / `StringBuffer`
-   Literals are stored in the **String Constant Pool** to save memory.