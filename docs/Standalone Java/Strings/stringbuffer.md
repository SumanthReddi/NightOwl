---
sidebar_position: 7
title: StringBuffer
---
<!-- ## StringBuffer in Java -->

### What Is StringBuffer?

`StringBuffer` is a class in Java used to create **mutable strings that
are thread-safe**.

Unlike `String`, which is **immutable**, `StringBuffer` allows
modification of the same object without creating new objects.

> **StringBuffer = Mutable and thread-safe sequence of characters**

It is mainly used in **multi-threaded environments** where thread safety
is required.

------------------------------------------------------------------------

## Simple Example

``` java
StringBuffer sb = new StringBuffer("Hello");

sb.append(" World");

System.out.println(sb); // Hello World
```

------------------------------------------------------------------------

# Common StringBuffer Methods

## 1. append()

Adds text to the end of the string.

``` java
StringBuffer sb = new StringBuffer("Java");

sb.append(" Programming");

System.out.println(sb); // Java Programming
```


------------------------------------------------------------------------

## 2. insert()

Inserts text at a specified index.

``` java
StringBuffer sb = new StringBuffer("Java");

sb.insert(4, " Language");

System.out.println(sb); //  Java Language
```


------------------------------------------------------------------------

## 3. replace()

Replaces characters between specified indexes.

``` java
StringBuffer sb = new StringBuffer("Java Programming");

sb.replace(5, 16, "Language");

System.out.println(sb); //  Java Language
```


------------------------------------------------------------------------

## 4. delete()

Deletes characters from the string.

``` java
StringBuffer sb = new StringBuffer("Java Programming");

sb.delete(4, 16);

System.out.println(sb); // Java
```


------------------------------------------------------------------------

## 5. reverse()

Reverses the characters in the string.

``` java
StringBuffer sb = new StringBuffer("Java");

sb.reverse();

System.out.println(sb); // avaJ
```


------------------------------------------------------------------------

## 6. capacity()

Returns the current capacity of the buffer.

``` java
StringBuffer sb = new StringBuffer();

System.out.println(sb.capacity()); // 16
```


Default capacity is **16 characters**.

------------------------------------------------------------------------

## 7. length()

Returns the number of characters in the string.

``` java
StringBuffer sb = new StringBuffer("Java");

System.out.println(sb.length()); //4
```


------------------------------------------------------------------------

## 8. charAt()

Returns the character at a specified index.

``` java
StringBuffer sb = new StringBuffer("Java");

System.out.println(sb.charAt(2)); // v
```

------------------------------------------------------------------------

## 9. setCharAt()

Changes the character at a specified index.

``` java
StringBuffer sb = new StringBuffer("Java");

sb.setCharAt(0, 'R');

System.out.println(sb); // Rava
```


------------------------------------------------------------------------

## 10. toString()

Converts `StringBuffer` to `String`.

``` java
StringBuffer sb = new StringBuffer("Java");

String str = sb.toString();

System.out.println(str); // Java
```


------------------------------------------------------------------------

## Summary

-   `StringBuffer` is **mutable**
-   It is **thread-safe (synchronized)**
-   Used in **multi-threaded environments**
-   Common methods include:

```java
    append()
    insert()
    replace()
    delete()
    reverse()
    capacity()
    length()
    charAt()
    setCharAt()
    toString()
```