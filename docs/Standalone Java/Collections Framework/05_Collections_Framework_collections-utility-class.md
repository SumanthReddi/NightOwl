---
sidebar_position: 25
title: Collections Utility Class 
---

# Collections Utility Class -- Deep Dive

This document explains:

-   What Collections class is
-   Why it exists
-   Sorting utilities
-   Searching utilities
-   Reversal & shuffling
-   Synchronized wrappers
-   Unmodifiable wrappers
-   Min/Max operations
-   Frequency & disjoint
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is Collections Class?

Collections is a utility class present in:

``` java
java.util.Collections
```

Important:

• It contains static utility methods\
• Works on Collection objects\
• Cannot be instantiated (private constructor)

------------------------------------------------------------------------

# 2️⃣ Sorting

## sort(List)

``` java
List<Integer> list = Arrays.asList(3, 1, 2);
Collections.sort(list);
System.out.println(list);  // [1, 2, 3]
```

Uses:

• Comparable (natural ordering)\
• Or Comparator if provided

------------------------------------------------------------------------

## sort with Comparator

``` java
Collections.sort(list, Comparator.reverseOrder());
```

------------------------------------------------------------------------

# 3️⃣ Binary Search

``` java
Collections.sort(list);
int index = Collections.binarySearch(list, 2);
```

Important:

• List must be sorted\
• Time complexity: O(log n)

------------------------------------------------------------------------

# 4️⃣ Reverse

``` java
Collections.reverse(list);
```

Reverses list in-place.

------------------------------------------------------------------------

# 5️⃣ Shuffle

``` java
Collections.shuffle(list);
```

Randomly permutes list.

Useful in test data randomization.

------------------------------------------------------------------------

# 6️⃣ Min & Max

``` java
int min = Collections.min(list);
int max = Collections.max(list);
```

Works using Comparable or Comparator.

------------------------------------------------------------------------

# 7️⃣ Frequency

``` java
int count = Collections.frequency(list, 2);
```

Counts occurrences.

Time complexity: O(n)

------------------------------------------------------------------------

# 8️⃣ Disjoint

``` java
boolean result =
    Collections.disjoint(list1, list2);
```

Returns true if no common elements.

------------------------------------------------------------------------

# 9️⃣ Copy

``` java
List<Integer> dest = new ArrayList<>(Arrays.asList(0,0,0));
Collections.copy(dest, list);
```

Important:

Destination must be at least same size.

------------------------------------------------------------------------

# 🔟 Fill

``` java
Collections.fill(list, 5);
```

Replaces all elements.

------------------------------------------------------------------------

# 1️⃣1️⃣ Unmodifiable Collections

``` java
List<Integer> unmod =
    Collections.unmodifiableList(list);
```

• Prevents modification\
• Throws UnsupportedOperationException

Used for read-only views.

------------------------------------------------------------------------

# 1️⃣2️⃣ Synchronized Collections

``` java
List<Integer> syncList =
    Collections.synchronizedList(new ArrayList<>());
```

Wraps collection with synchronization.

Important:

Iteration must be manually synchronized:

``` java
synchronized(syncList) {
    for(Integer i : syncList) {
        System.out.println(i);
    }
}
```

------------------------------------------------------------------------

# 1️⃣3️⃣ Empty & Singleton Collections

``` java
List<String> empty = Collections.emptyList();
Set<String> single = Collections.singleton("A");
```

Immutable collections.

------------------------------------------------------------------------

# 1️⃣4️⃣ Rotate

``` java
Collections.rotate(list, 2);
```

Rotates elements by given distance.

------------------------------------------------------------------------

# 1️⃣5️⃣ Swap

``` java
Collections.swap(list, 0, 1);
```

Swaps two elements.

------------------------------------------------------------------------

# 1️⃣6️⃣ Time Complexity Overview

  Method         Complexity
  -------------- ------------
  sort           O(n log n)
  binarySearch   O(log n)
  reverse        O(n)
  shuffle        O(n)
  frequency      O(n)

------------------------------------------------------------------------

# 1️⃣7️⃣ Interview Questions

Q: Difference between Collection and Collections? A: Collection is
interface; Collections is utility class.

Q: Is unmodifiableList immutable? A: It is a read-only view, not deeply
immutable.

Q: Does synchronizedList make iteration thread-safe? A: No, manual
synchronization required.

Q: What happens if list not sorted before binarySearch? A: Undefined
behavior.

------------------------------------------------------------------------

# 1️⃣8️⃣ Automation Framework Relevance

Useful for:

• Sorting API responses before assertion\
• Randomizing test inputs\
• Frequency validation\
• Checking overlap between datasets\
• Creating immutable config collections

Example:

``` java
List<String> roles = Arrays.asList("USER", "ADMIN");
Collections.sort(roles);
```

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Sorting & searching utilities\
✓ Unmodifiable vs immutable\
✓ Synchronized wrappers\
✓ Binary search requirement\
✓ Common pitfalls\
✓ Automation use cases\
✓ Interview clarity

Next file:

arrays-utility-class.md
