---
sidebar_position: 6
title: StringBuilder
---
<!-- ## StringBuilder -->

### What Is StringBuilder?

`StringBuilder` is a class in Java used to create **mutable strings**.

Unlike `String`, which is **immutable**, `StringBuilder` allows
modifying the same object without creating new objects.

> **StringBuilder = Mutable sequence of characters used for efficient
> string manipulation**

------------------------------------------------------------------------

## Simple Example

``` java
StringBuilder sb = new StringBuilder("Hello");

sb.append(" World");

System.out.println(sb); // Hello World
```

------------------------------------------------------------------------

# Common StringBuilder Methods

## 1. append()

Adds text to the end of the string.

``` java
StringBuilder sb = new StringBuilder("Java");

sb.append(" Programming");

System.out.println(sb); // Java Programming
```


------------------------------------------------------------------------

## 2. insert()

Inserts text at a specified index.

``` java
StringBuilder sb = new StringBuilder("Java");

sb.insert(4, " Language");

System.out.println(sb); // Java Language
```

------------------------------------------------------------------------

## 3. replace()

Replaces characters between specified indexes.

``` java
StringBuilder sb = new StringBuilder("Java Programming");

sb.replace(5, 16, "Language");

System.out.println(sb); // Java Language
```


------------------------------------------------------------------------

## 4. delete()

Deletes characters from the string.

``` java
StringBuilder sb = new StringBuilder("Java Programming");

sb.delete(4, 16);

System.out.println(sb); // Java
```


------------------------------------------------------------------------

## 5. reverse()

Reverses the characters in the string.

``` java
StringBuilder sb = new StringBuilder("Java");

sb.reverse();

System.out.println(sb); // avaJ
```


------------------------------------------------------------------------

## 6. capacity()

Returns the current capacity of the builder.

``` java
StringBuilder sb = new StringBuilder();

System.out.println(sb.capacity()); //16
```

------------------------------------------------------------------------

## 7. length()

Returns the number of characters in the string.

``` java
StringBuilder sb = new StringBuilder("Java");

System.out.println(sb.length()); //4
```

------------------------------------------------------------------------

## 8. charAt()

Returns character at a specified index.

``` java
StringBuilder sb = new StringBuilder("Java");

System.out.println(sb.charAt(2)); // v
```

------------------------------------------------------------------------

## 9. setCharAt()

Changes character at a specified index.

``` java
StringBuilder sb = new StringBuilder("Java");

sb.setCharAt(0, 'R');

System.out.println(sb); // Rava
```

------------------------------------------------------------------------

## 10. toString()

Converts `StringBuilder` to `String`.

``` java
StringBuilder sb = new StringBuilder("Java");

String str = sb.toString();

System.out.println(str); // Java
```


------------------------------------------------------------------------

## Summary

-   `StringBuilder` is **mutable**
-   It allows efficient string manipulation
-   It avoids creating multiple objects
-   Common methods include:

``` java
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