---
sidebar_position: 1
title: ArrayList
---

# ArrayList

This document explains:

-   Internal data structure of ArrayList
-   elementData\[\] array mechanics
-   Default capacity behavior
-   Capacity growth formula
-   ensureCapacity() logic
-   Resizing cost analysis
-   Add / Remove internal behavior
-   modCount & fail-fast mechanism
-   Memory footprint discussion
-   Performance complexity breakdown
-   Automation framework relevance
-   Interview-level edge cases

------------------------------------------------------------------------

# 1️⃣ What is ArrayList?

ArrayList is a resizable array implementation of List.

Definition:

``` java
public class ArrayList<E> 
        extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, Serializable
```

Important:

• Backed by dynamic array\
• Allows duplicates\
• Maintains insertion order\
• Not thread-safe\
• Fast random access

------------------------------------------------------------------------

# 2️⃣ Internal Data Structure

Core field inside ArrayList:

``` java
transient Object[] elementData;
private int size;
```

elementData → underlying array\
size → number of elements currently stored

Capacity ≠ Size

Capacity = array length\
Size = actual elements stored

------------------------------------------------------------------------

# 3️⃣ Default Capacity Behavior

In Java 8+:

When created using:

``` java
ArrayList<String> list = new ArrayList<>();
```

Initial capacity is 0.

But first element addition triggers resize to 10.

So default capacity = 10 (after first add).

------------------------------------------------------------------------

# 4️⃣ Capacity Growth Formula

When array becomes full:

New capacity calculated as:

    newCapacity = oldCapacity + (oldCapacity >> 1)

Which equals:

1.5 × oldCapacity

Example:

Old: 10\
New: 15\
Next: 22\
Next: 33

This balances memory usage & performance.

------------------------------------------------------------------------

# 5️⃣ ensureCapacity()

You can manually set capacity:

``` java
list.ensureCapacity(100);
```

Useful when expected size known.

Avoids multiple resizing operations.

------------------------------------------------------------------------

# 6️⃣ add(E e) -- Internal Flow

``` java
public boolean add(E e) {
    ensureCapacityInternal(size + 1);
    elementData[size++] = e;
    return true;
}
```

Steps:

1.  Ensure capacity
2.  Insert element
3.  Increase size

Time Complexity:

O(1) amortized

------------------------------------------------------------------------

# 7️⃣ Resizing Cost

When capacity exceeded:

1.  New larger array created
2.  Old elements copied
3.  Old array discarded

Copy operation cost = O(n)

But resizing doesn't happen every time. Hence amortized O(1).

------------------------------------------------------------------------

# 8️⃣ get(int index)

``` java
return (E) elementData[index];
```

Time Complexity: O(1)

Reason: Direct index access.

This is why ArrayList is fast for random access.

------------------------------------------------------------------------

# 9️⃣ add(int index, E element)

Inserts at specific position.

Steps:

1.  Shift elements to right
2.  Insert element

Time Complexity: O(n)

Because shifting required.

------------------------------------------------------------------------

# 🔟 remove(int index)

``` java
System.arraycopy(elementData, index+1,
                 elementData, index,
                 size-index-1);
size--;
```

Shifts elements left.

Time Complexity: O(n)

------------------------------------------------------------------------

# 1️⃣1️⃣ modCount Mechanism

ArrayList extends AbstractList.

AbstractList maintains:

``` java
protected transient int modCount = 0;
```

Whenever structural modification happens:

modCount++

Iterator stores expectedModCount.

If mismatch → ConcurrentModificationException.

Fail-fast behavior implemented here.

------------------------------------------------------------------------

# 1️⃣2️⃣ Memory Footprint

Each ArrayList object contains:

• Object header\
• elementData reference\
• size\
• modCount

Underlying array stores references (not objects).

So memory depends on:

Number of elements + unused capacity.

------------------------------------------------------------------------

# 1️⃣3️⃣ Time Complexity Summary

  Operation   Complexity
  ----------- ----------------
  add() end   O(1) amortized
  add(i)      O(n)
  remove(i)   O(n)
  get(i)      O(1)
  contains    O(n)

------------------------------------------------------------------------

# 1️⃣4️⃣ When to Use ArrayList

Best for:

✓ Frequent reads\
✓ Random access\
✓ Iteration\
✓ Appending elements

Not ideal for:

✗ Frequent middle insertions\
✗ Frequent removals from beginning

------------------------------------------------------------------------

# 1️⃣5️⃣ Automation Framework Relevance

ArrayList commonly used for:

• Storing WebElements\
• Maintaining execution steps\
• Capturing logs\
• Test data storage\
• Collecting API responses

Example:

``` java
List<WebElement> elements = driver.findElements(By.tagName("a"));
```

Random access useful when validating specific index elements.

------------------------------------------------------------------------

# 1️⃣6️⃣ Interview Questions

Q: Default capacity of ArrayList? A: 10 (after first element added).

Q: Growth factor? A: 1.5 times old capacity.

Q: Why is get() O(1)? A: Backed by array.

Q: Why is remove slow? A: Requires shifting elements.

Q: Is ArrayList thread-safe? A: No.

------------------------------------------------------------------------

# 1️⃣7️⃣ Advanced Edge Case

Creating with capacity:

``` java
new ArrayList<>(1000);
```

Allocates array of size 1000 immediately.

Better when expected size known.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Internal elementData\[\]\
✓ Capacity vs size\
✓ Growth formula\
✓ Resizing cost\
✓ modCount fail-fast logic\
✓ Performance trade-offs\
✓ Automation usage\
✓ Interview-level clarity

Next file:

linkedlist-internal.md
