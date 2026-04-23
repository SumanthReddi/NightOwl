---
sidebar_position: 5
title: String Methods
---


Java provides many built-in methods in the `String` class to manipulate
and analyze text.

Strings are **immutable**, meaning every operation returns a **new String object** instead of modifying the original.

------------------------------------------------------------------------

## Common String Methods

| Method | Description |
|------|-------------|
| length() | Returns the length of the string |
| charAt() | Returns character at a specific index |
| substring() | Extracts a part of the string |
| equals() | Compares string values |
| equalsIgnoreCase() | Compares strings ignoring case |
| toUpperCase() | Converts string to uppercase |
| toLowerCase() | Converts string to lowercase |
| trim() | Removes leading and trailing spaces |
| contains() | Checks if substring exists |
| replace() | Replaces characters or substrings |
| startsWith() | Checks if string starts with given text |
| endsWith() | Checks if string ends with given text |
| indexOf() | Returns index of first occurrence |
| lastIndexOf() | Returns index of last occurrence |
| concat() | Concatenates two strings |
| split() | Splits string into array |

------------------------------------------------------------------------

# Examples of String Methods

## 1. length()

Returns the number of characters in the string.

``` java
String s = "Java";

System.out.println(s.length()); // 4
```
------------------------------------------------------------------------

## 2. charAt()

Returns character at a specific index.

``` java
String s = "Java";

System.out.println(s.charAt(2)); // v
```

------------------------------------------------------------------------

## 3. substring()

Extracts a portion of the string.

``` java
String s = "Java Programming";

System.out.println(s.substring(5)); // Programming
```

------------------------------------------------------------------------

## 4. equals()

Compares two string values.

``` java
String s1 = "Java";
String s2 = "Java";

System.out.println(s1.equals(s2)); // true
```

------------------------------------------------------------------------

## 5. toUpperCase()

Converts string to uppercase.

``` java
String s = "java";

System.out.println(s.toUpperCase()); // JAVA
```

------------------------------------------------------------------------

## 6. toLowerCase()

Converts string to lowercase.

``` java
String s = "JAVA";

System.out.println(s.toLowerCase()); // java
```

------------------------------------------------------------------------

## 7. trim()

Removes leading and trailing spaces.

``` java
String s = "  Java  ";

System.out.println(s.trim()); // Java
```

------------------------------------------------------------------------

## 8. contains()

Checks if substring exists.

``` java
String s = "Java Programming";

System.out.println(s.contains("Java")); // true
```

------------------------------------------------------------------------

## 9. replace()

Replaces characters or substrings.

``` java
String s = "Java";

System.out.println(s.replace('a','o')); // Jovo
```

------------------------------------------------------------------------

## 10. concat()

Joins two strings.

``` java
String s1 = "Java";
String s2 = " Programming";

System.out.println(s1.concat(s2)); // Java Programming
```

------------------------------------------------------------------------

## 11. startsWith()

Checks starting text.

``` java
String s = "Java Programming";

System.out.println(s.startsWith("Java")); // true
```

------------------------------------------------------------------------

## 12. endsWith()

Checks ending text.

``` java
String s = "Java Programming";

System.out.println(s.endsWith("Programming")); // true
```

------------------------------------------------------------------------

## 13. indexOf()

Returns index of first occurrence.

``` java
String s = "Java Programming";

System.out.println(s.indexOf("a")); // 1
```

------------------------------------------------------------------------

## 14. split()

Splits string into array.

``` java
String s = "Java Python C++";

String[] arr = s.split(" ");

for(String str : arr){
    System.out.println(str); // Java  Python  C++
}
```

------------------------------------------------------------------------

## Summary

Important String methods:
``` java
    length()
    charAt()
    substring()
    equals()
    toUpperCase()
    toLowerCase()
    trim()
    contains()
    replace()
    concat()
    startsWith()
    endsWith()
    indexOf()
    split()
```
These methods are widely used for **string manipulation and text
processing in Java applications**.