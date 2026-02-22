---
sidebar_position: 4
title: ArrayDeque Internal Working
---

# ArrayDeque 

This document explains:

-   What ArrayDeque is
-   Why it is faster than Stack and LinkedList
-   Circular array internal structure
-   Head and tail pointer mechanics
-   Resize mechanism
-   Time complexity analysis
-   Null restrictions
-   Fail-fast behavior
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is ArrayDeque?

ArrayDeque is a resizable-array implementation of the Deque interface.

Definition:

``` java
public class ArrayDeque<E>
    extends AbstractCollection<E>
    implements Deque<E>, Cloneable, Serializable
```

Important:

• No capacity restriction (grows automatically)\
• Not thread-safe\
• Does NOT allow null elements\
• Faster than Stack and LinkedList in most cases

------------------------------------------------------------------------

# 2️⃣ Internal Data Structure

Core fields (simplified):

``` java
transient Object[] elements;
transient int head;
transient int tail;
```

ArrayDeque uses:

✔ Circular array\
✔ Head pointer\
✔ Tail pointer

------------------------------------------------------------------------

# 3️⃣ Circular Array Concept

Unlike ArrayList (which shifts elements), ArrayDeque treats array as
circular.

Example (capacity 8):

Index: 0 1 2 3 4 5 6 7\
Values: \[*,*,A,B,C,*,*,\_\]

head = 2\
tail = 5

If we remove from front → head moves forward.\
If we add at rear → tail moves forward.

When end reached → wraps around to 0.

This avoids shifting elements.

------------------------------------------------------------------------

# 4️⃣ addFirst(e)

Logic:

1.  Decrement head
2.  Wrap using bitmask
3.  Insert element

Pseudo:

``` java
head = (head - 1) & (elements.length - 1);
elements[head] = e;
```

Time Complexity: O(1)

------------------------------------------------------------------------

# 5️⃣ addLast(e)

Logic:

1.  Insert at tail
2.  Increment tail
3.  Wrap if needed

``` java
elements[tail] = e;
tail = (tail + 1) & (elements.length - 1);
```

Time Complexity: O(1)

------------------------------------------------------------------------

# 6️⃣ Why Bitwise AND Used?

ArrayDeque capacity is always power of 2.

So instead of modulo:

index % length

It uses:

index & (length - 1)

Faster computation.

------------------------------------------------------------------------

# 7️⃣ removeFirst()

``` java
E result = elements[head];
elements[head] = null;
head = (head + 1) & (elements.length - 1);
```

O(1)

------------------------------------------------------------------------

# 8️⃣ removeLast()

``` java
tail = (tail - 1) & (elements.length - 1);
E result = elements[tail];
elements[tail] = null;
```

O(1)

------------------------------------------------------------------------

# 9️⃣ Resize Mechanism

When head == tail after insertion → array is full.

Resize steps:

1.  Create new array (double size)
2.  Copy elements in correct order
3.  Reset head = 0
4.  Reset tail = oldSize

Resize cost: O(n)\
Amortized add cost: O(1)

------------------------------------------------------------------------

# 🔟 Example -- Basic Usage

``` java
Deque<Integer> deque = new ArrayDeque<>();

deque.addLast(10);
deque.addLast(20);
deque.addFirst(5);

System.out.println(deque);  // [5, 10, 20]
```

------------------------------------------------------------------------

# 1️⃣1️⃣ Using as Stack (Recommended)

``` java
Deque<Integer> stack = new ArrayDeque<>();

stack.push(1);
stack.push(2);
System.out.println(stack.pop()); // 2
```

Better than Stack class (no synchronization overhead).

------------------------------------------------------------------------

# 1️⃣2️⃣ Using as Queue

``` java
Deque<String> queue = new ArrayDeque<>();

queue.offerLast("A");
queue.offerLast("B");

System.out.println(queue.pollFirst()); // A
```

------------------------------------------------------------------------

# 1️⃣3️⃣ Time Complexity

  Operation     Complexity
  ------------- ------------
  addFirst      O(1)
  addLast       O(1)
  removeFirst   O(1)
  removeLast    O(1)
  contains      O(n)

------------------------------------------------------------------------

# 1️⃣4️⃣ Null Restriction

ArrayDeque does NOT allow null.

``` java
deque.add(null);  // NullPointerException
```

Reason:

Null used internally as empty slot marker.

------------------------------------------------------------------------

# 1️⃣5️⃣ Fail-Fast Behavior

ArrayDeque iterator is fail-fast.

If modified during iteration →

ConcurrentModificationException.

------------------------------------------------------------------------

# 1️⃣6️⃣ Why Faster Than LinkedList?

ArrayDeque advantages:

• Better locality of reference\
• No node object overhead\
• No pointer chasing\
• Lower memory footprint

LinkedList uses separate node objects.

------------------------------------------------------------------------

# 1️⃣7️⃣ Interview Traps

Q: Internal structure? A: Circular array.

Q: Why capacity always power of 2? A: Enables fast bitwise wraparound.

Q: Does ArrayDeque allow null? A: No.

Q: Why preferred over Stack? A: Faster, no synchronization.

------------------------------------------------------------------------

# 1️⃣8️⃣ Automation Framework Relevance

Useful for:

• Stack-based parsing in frameworks\
• Maintaining execution history\
• Sliding window validation\
• Retry mechanisms\
• Undo/redo stack

Example:

``` java
Deque<String> executionStack = new ArrayDeque<>();

executionStack.push("Login");
executionStack.push("Submit Form");
executionStack.pop();
```

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Circular array concept\
✓ Head & tail pointer logic\
✓ Bitwise wrapping\
✓ Resize behavior\
✓ O(1) operations\
✓ Null restriction reasoning\
✓ Why faster than LinkedList\
✓ Automation use cases\
✓ Interview clarity

Next file:

blockingqueue-overview.md
