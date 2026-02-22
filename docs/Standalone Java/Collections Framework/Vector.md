---
sidebar_position: 7
title: Vector
---

# Vector -- Legacy Synchronized List (Deep Internal Analysis)

This document explains:

-   What Vector is
-   Historical background
-   Internal working
-   Synchronization mechanism
-   Capacity growth behavior
-   Difference from ArrayList
-   Performance implications
-   Why it is considered legacy
-   Interview traps
-   Automation relevance

------------------------------------------------------------------------

# 1️⃣ What is Vector?

Vector is a legacy dynamic array implementation introduced in Java 1.0.

Definition:

``` java
public class Vector<E>
    extends AbstractList<E>
    implements List<E>, RandomAccess, Cloneable, Serializable
```

Important:

• Backed by dynamic array\
• Synchronized (thread-safe)\
• Maintains insertion order\
• Allows duplicates\
• Considered legacy

------------------------------------------------------------------------

# 2️⃣ Historical Context

Before Java 1.2 (Collections Framework):

• Vector was primary dynamic array\
• Stack extends Vector\
• Hashtable existed separately

When Collections Framework introduced (Java 1.2):

• ArrayList replaced Vector for non-thread-safe use\
• Vector retained for backward compatibility

------------------------------------------------------------------------

# 3️⃣ Internal Data Structure

Similar to ArrayList:

``` java
protected Object[] elementData;
protected int elementCount;
protected int capacityIncrement;
```

elementData → underlying array\
elementCount → size\
capacityIncrement → growth strategy

------------------------------------------------------------------------

# 4️⃣ Capacity Growth Behavior

Default behavior:

If capacityIncrement = 0 (default):

Capacity doubles when full.

If capacityIncrement \> 0:

New capacity = oldCapacity + capacityIncrement

Example:

``` java
Vector<String> v = new Vector<>(10, 5);
```

Initial capacity = 10\
When full → 15 → 20 → 25 ...

------------------------------------------------------------------------

# 5️⃣ Synchronization Mechanism

All major methods are synchronized:

``` java
public synchronized boolean add(E e)
```

This means:

• Method-level locking\
• Only one thread at a time\
• Performance overhead

------------------------------------------------------------------------

# 6️⃣ Difference: Vector vs ArrayList

  Feature           Vector         ArrayList
  ----------------- -------------- -----------
  Thread-safe       Yes            No
  Synchronization   Yes            No
  Growth factor     2x (default)   1.5x
  Legacy            Yes            No
  Performance       Slower         Faster

------------------------------------------------------------------------

# 7️⃣ Performance Implication

Because methods are synchronized:

• Lock acquisition overhead\
• Reduced throughput\
• Not ideal for single-threaded systems

In modern applications:

Prefer:

• ArrayList (single-threaded) • Collections.synchronizedList() •
CopyOnWriteArrayList

------------------------------------------------------------------------

# 8️⃣ Why Vector is Legacy

Reasons:

• Introduced before Collections Framework\
• Does not follow modern design patterns fully\
• Excess synchronization\
• Rarely used in modern code

Still present for backward compatibility.

------------------------------------------------------------------------

# 9️⃣ Stack Relationship

Stack extends Vector:

``` java
public class Stack<E> extends Vector<E>
```

Therefore Stack inherits synchronized behavior.

Modern recommendation:

Use Deque (ArrayDeque) instead of Stack.

------------------------------------------------------------------------

# 🔟 Interview Questions

Q: Is Vector thread-safe? A: Yes (method-level synchronization).

Q: Why not use Vector today? A: Unnecessary synchronization overhead.

Q: Difference between Vector and ArrayList? A: Synchronization + growth
strategy.

Q: What happens if capacityIncrement specified? A: Fixed increment
growth instead of doubling.

------------------------------------------------------------------------

# 1️⃣1️⃣ Automation Framework Relevance

Rarely used in automation.

Better options:

• ArrayList for local test data\
• Concurrent collections for parallel test runs

Vector adds unnecessary overhead.

------------------------------------------------------------------------

# 1️⃣2️⃣ Advanced Insight

Even though Vector is synchronized:

Compound operations are not atomic.

Example:

``` java
if(v.size() > 0) {
    v.remove(0);
}
```

Still vulnerable to race conditions.

Requires external synchronization for composite logic.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Vector is legacy dynamic array\
✓ Synchronized methods\
✓ Growth behavior\
✓ Performance trade-offs\
✓ Why modern code avoids it\
✓ Stack relationship\
✓ Interview clarity

Next file:

stack-class.md
