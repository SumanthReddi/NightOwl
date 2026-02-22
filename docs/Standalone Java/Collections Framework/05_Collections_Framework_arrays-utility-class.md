---
sidebar_position: 26
title: Arrays Utility Class
---

# Arrays Utility Class -- Complete Deep Dive

This document explains:

-   What Arrays class is
-   Why it exists
-   Sorting arrays (primitive & object)
-   Parallel sorting
-   Binary search
-   Copying arrays
-   Filling arrays
-   Comparing arrays
-   Deep comparison for multi-dimensional arrays
-   Converting array to List
-   Stream support
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is Arrays Class?

Arrays is a utility class present in:

``` java
java.util.Arrays
```

Important:

• Contains static methods\
• Works on arrays (not Collections directly)\
• Cannot be instantiated

------------------------------------------------------------------------

# 2️⃣ Sorting Arrays

## Primitive Array Sorting

``` java
int[] arr = {3, 1, 2};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));  // [1, 2, 3]
```

Internally:

• Dual-Pivot QuickSort (for primitives)

Time Complexity: O(n log n)

------------------------------------------------------------------------

## Object Array Sorting

``` java
String[] names = {"B", "A", "C"};
Arrays.sort(names);
```

Internally:

• TimSort (stable sort)

------------------------------------------------------------------------

## Sorting with Comparator

``` java
String[] names = {"B", "A", "C"};
Arrays.sort(names, Comparator.reverseOrder());
```

------------------------------------------------------------------------

# 3️⃣ Parallel Sort (Java 8+)

``` java
Arrays.parallelSort(arr);
```

Uses:

• ForkJoinPool\
• Multi-core processing

Better for large arrays.

------------------------------------------------------------------------

# 4️⃣ Binary Search

``` java
Arrays.sort(arr);
int index = Arrays.binarySearch(arr, 2);
```

Important:

• Array must be sorted\
• Time Complexity: O(log n)

------------------------------------------------------------------------

# 5️⃣ Copying Arrays

## copyOf

``` java
int[] copy = Arrays.copyOf(arr, arr.length);
```

## copyOfRange

``` java
int[] sub = Arrays.copyOfRange(arr, 0, 2);
```

------------------------------------------------------------------------

# 6️⃣ Filling Arrays

``` java
Arrays.fill(arr, 5);
```

Fills entire array with value.

------------------------------------------------------------------------

# 7️⃣ Comparing Arrays

## equals()

``` java
Arrays.equals(arr1, arr2);
```

Compares element by element.

------------------------------------------------------------------------

## deepEquals() (Multi-dimensional)

``` java
int[][] a = {{1,2},{3,4}};
int[][] b = {{1,2},{3,4}};

Arrays.deepEquals(a, b);  // true
```

------------------------------------------------------------------------

# 8️⃣ toString & deepToString

``` java
Arrays.toString(arr);
Arrays.deepToString(a);
```

Useful for debugging.

------------------------------------------------------------------------

# 9️⃣ asList()

``` java
List<Integer> list =
    Arrays.asList(1, 2, 3);
```

Important:

• Returns fixed-size list\
• Backed by array\
• Cannot add/remove elements

Example trap:

``` java
list.add(4);  // UnsupportedOperationException
```

------------------------------------------------------------------------

# 🔟 Stream Support

``` java
int sum = Arrays.stream(arr).sum();
```

Useful with Java 8 Stream API.

------------------------------------------------------------------------

# 1️⃣1️⃣ setAll() (Java 8)

``` java
int[] arr = new int[5];
Arrays.setAll(arr, i -> i * 2);
```

------------------------------------------------------------------------

# 1️⃣2️⃣ Mismatch (Java 9+)

``` java
int index = Arrays.mismatch(arr1, arr2);
```

Returns first differing index.

------------------------------------------------------------------------

# 1️⃣3️⃣ Time Complexity Summary

  Method         Complexity
  -------------- -----------------------
  sort           O(n log n)
  parallelSort   O(n log n) (parallel)
  binarySearch   O(log n)
  equals         O(n)
  copyOf         O(n)

------------------------------------------------------------------------

# 1️⃣4️⃣ Common Mistakes

❌ Using Arrays.asList with primitives:

``` java
int[] arr = {1,2,3};
Arrays.asList(arr);  // Creates List<int[]> not List<Integer>
```

Correct:

``` java
Integer[] arr = {1,2,3};
Arrays.asList(arr);
```

❌ Forgetting to sort before binarySearch.

------------------------------------------------------------------------

# 1️⃣5️⃣ Interview Questions

Q: Difference between Collections.sort and Arrays.sort? A: One works on
List, other on array.

Q: Which sorting algorithm used for primitives? A: Dual-Pivot QuickSort.

Q: Is Arrays.asList modifiable? A: Fixed-size list (no add/remove).

Q: What is deepEquals used for? A: Multi-dimensional arrays.

------------------------------------------------------------------------

# 1️⃣6️⃣ Automation Framework Relevance

Useful for:

• Sorting API array responses\
• Comparing expected vs actual arrays\
• Cloning test data arrays\
• Printing debug logs\
• Converting arrays to Lists for assertions

Example:

``` java
int[] expected = {1,2,3};
int[] actual = {3,2,1};

Arrays.sort(actual);
System.out.println(Arrays.equals(expected, actual));
```

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Arrays.sort internal behavior\
✓ Primitive vs Object sorting\
✓ parallelSort\
✓ binarySearch requirement\
✓ deepEquals usage\
✓ asList trap\
✓ Stream integration\
✓ Automation use cases\
✓ Interview clarity

Next file:

fail-fast-vs-fail-safe.md
