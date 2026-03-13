---
sidebar_position: 10
title: Compile-Time vs Runtime Concatenation
---
<!-- # Compile-Time vs Runtime Concatenation in Java -->

In Java, string concatenation can happen at **compile-time** or **runtime** depending on how the strings are created.

------------------------------------------------------------------------

## Compile-Time Concatenation

Compile-time concatenation occurs when **string literals are combined by
the compiler before the program runs**.

The Java compiler automatically merges the strings into a **single
string in the String Constant Pool**.

### Example

``` java
String s = "Hello" + " " + "World";

System.out.println(s);
```

### Output

    Hello World

### Explanation

The compiler converts the code into:

``` java
String s = "Hello World";
```

So only **one object** is created in the **String Constant Pool**.

### Memory Representation

    String Constant Pool

    +--------------+
    | "Hello World"|
    +--------------+
            ↑
            s

------------------------------------------------------------------------

## Runtime Concatenation

Runtime concatenation happens when **variables or objects are involved
in concatenation**.

In this case, the concatenation is performed **during program
execution**.

### Example

``` java
String s1 = "Hello";
String s2 = "World";

String s3 = s1 + " " + s2;

System.out.println(s3);
```

### Output

    Hello World

### Explanation

Since variables are used, Java performs concatenation at runtime using
**StringBuilder internally**.

Equivalent behavior:

``` java
StringBuilder sb = new StringBuilder();
sb.append(s1);
sb.append(" ");
sb.append(s2);

String s3 = sb.toString();
```

------------------------------------------------------------------------

## Key Differences

  Feature           Compile-Time Concatenation   Runtime Concatenation
  ----------------- ---------------------------- -----------------------------
  When it happens   During compilation           During execution
  Operands          String literals only         Variables or objects
  Memory            Stored in String Pool        Created in heap
  Performance       Faster                       Slightly slower
  Object creation   Usually one object           May create multiple objects

------------------------------------------------------------------------

## Example Showing Both

``` java
public class Test {

    public static void main(String[] args) {

        String s1 = "Java" + "Programming";   // Compile-time

        String a = "Java";
        String b = "Programming";

        String s2 = a + b;                    // Runtime

        System.out.println(s1);
        System.out.println(s2);

    }

}
```

### Output

    JavaProgramming
    JavaProgramming

------------------------------------------------------------------------

## Summary

-   **Compile-time concatenation** happens when only string literals are
    used.
-   The compiler merges literals and stores the result in the **String
    Constant Pool**.
-   **Runtime concatenation** occurs when variables are involved.
-   Java internally uses **StringBuilder** for runtime concatenation.

Compile-time concatenation is generally **more memory-efficient**, while
runtime concatenation provides **flexibility when working with
variables**.
