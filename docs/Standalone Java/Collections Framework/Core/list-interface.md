---
sidebar_position: 6
title: List Interface
---

# List Interface

This document explains:

-   What List really represents
-   Ordered nature of List
-   Positional access operations
-   ListIterator deep dive
-   Index-based performance implications
-   equals() contract in List
-   Internal behavior expectations
-   Interview edge cases
-   Automation framework relevance

------------------------------------------------------------------------

# 1️⃣ What is List?

List is an ordered collection that:

• Preserves insertion order\
• Allows duplicates\
• Allows positional (index-based) access

Definition:

``` java
public interface List<E> extends Collection<E>
```

------------------------------------------------------------------------

# 2️⃣ Key Characteristics

  Feature          Supported?
  ---------------- --------------------------------
  Ordered          ✅ Yes
  Duplicates       ✅ Yes
  Null elements    ✅ (depends on implementation)
  Indexed access   ✅ Yes

------------------------------------------------------------------------

# 3️⃣ Core Additional Methods in List

Beyond Collection methods, List introduces:

## add(int index, E element)

``` java
list.add(1, "Java");
```

Inserts at specific position.

Time complexity depends on implementation.

------------------------------------------------------------------------

## get(int index)

``` java
String value = list.get(0);
```

ArrayList → O(1)\
LinkedList → O(n)

------------------------------------------------------------------------

## set(int index, E element)

Replaces element at position.

``` java
list.set(0, "Updated");
```

------------------------------------------------------------------------

## remove(int index)

Removes element at index.

``` java
list.remove(0);
```

Shifts elements in ArrayList.

------------------------------------------------------------------------

## indexOf(Object o)

Returns first index of element.

------------------------------------------------------------------------

## lastIndexOf(Object o)

Returns last occurrence index.

------------------------------------------------------------------------

# 4️⃣ ListIterator (Advanced Iterator)

List provides a more powerful iterator:

``` java
ListIterator<E> listIterator();
```

Capabilities:

• Forward traversal\
• Backward traversal\
• Modify elements\
• Add elements during iteration

Example:

``` java
ListIterator<String> it = list.listIterator();

while(it.hasNext()) {
    System.out.println(it.next());
}

while(it.hasPrevious()) {
    System.out.println(it.previous());
}
```

------------------------------------------------------------------------

# 5️⃣ Difference: Iterator vs ListIterator

  Feature                Iterator   ListIterator
  ---------------------- ---------- --------------
  Forward traversal      ✅         ✅
  Backward traversal     ❌         ✅
  Modify element         ❌         ✅
  Add during iteration   ❌         ✅

------------------------------------------------------------------------

# 6️⃣ equals() Contract in List

Two lists are equal if:

• Same size\
• Same elements\
• Same order

Example:

``` java
List<String> l1 = Arrays.asList("A", "B");
List<String> l2 = Arrays.asList("A", "B");

System.out.println(l1.equals(l2));  // true
```

Order matters.

------------------------------------------------------------------------

# 7️⃣ Performance Awareness

  Operation   ArrayList   LinkedList
  ----------- ----------- ------------
  get(i)      O(1)        O(n)
  add() end   O(1)\*      O(1)
  add(i)      O(n)        O(n)
  remove(i)   O(n)        O(n)

\*Amortized

Choosing correct implementation matters.

------------------------------------------------------------------------

# 8️⃣ Common Implementations

• ArrayList\
• LinkedList\
• Vector (legacy)\
• Stack (legacy, extends Vector)

We will deep-dive into each later.

------------------------------------------------------------------------

# 9️⃣ Null Handling

Most List implementations allow null.

Example:

``` java
List<String> list = new ArrayList<>();
list.add(null);
```

Be cautious in equals() comparisons.

------------------------------------------------------------------------

# 🔟 Edge Case -- Concurrent Modification

Modifying list during iteration without iterator.remove():

``` java
for(String s : list) {
    list.add("New");   // Exception
}
```

Throws ConcurrentModificationException.

------------------------------------------------------------------------

# 1️⃣1️⃣ Automation Framework Relevance

Common usages:

• Storing WebElements • Maintaining test execution order • Capturing
error messages • Sorting API responses • Tracking execution steps

Example:

``` java
List<WebElement> buttons = driver.findElements(By.tagName("button"));
```

Order preservation is important in UI testing.

------------------------------------------------------------------------

# 1️⃣2️⃣ Interview Questions

Q: Difference between List and Set? A: List allows duplicates &
maintains order.

Q: Which List implementation is best? A: Depends on use-case (random
access vs frequent insertions).

Q: Is List thread-safe? A: No, unless using synchronized wrapper.

Q: Can List contain null? A: Yes (implementation dependent).

------------------------------------------------------------------------

# 1️⃣3️⃣ Design Philosophy

List is designed for:

✓ Ordered data\
✓ Indexed retrieval\
✓ Flexible insertion\
✓ Duplicate storage

Underlying implementation determines performance behavior.

------------------------------------------------------------------------

# Final Mastery Checklist

You should understand:

✓ Ordered nature of List\
✓ Positional access methods\
✓ ListIterator capabilities\
✓ equals() behavior\
✓ Performance differences\
✓ Automation usage\
✓ Interview-level reasoning

Next file:

arraylist-internal.md
