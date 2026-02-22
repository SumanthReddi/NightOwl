---
sidebar_position: 6
title: LinkedList Internal Working
---

# LinkedList -- Internal Working & Deep Architecture Analysis

This document explains:

-   Internal data structure of LinkedList
-   Node class structure
-   first / last references
-   Add / Remove internal mechanics
-   Traversal logic
-   Time complexity breakdown
-   Memory overhead vs ArrayList
-   Queue & Deque behavior
-   Fail-fast mechanism
-   Automation relevance
-   Interview-level traps

------------------------------------------------------------------------

# 1️⃣ What is LinkedList?

LinkedList is a doubly-linked list implementation of:

• List\
• Deque\
• Queue

Definition:

``` java
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, Serializable
```

Important:

• Not backed by array\
• Uses nodes\
• Allows duplicates\
• Maintains insertion order\
• Not thread-safe

------------------------------------------------------------------------

# 2️⃣ Internal Data Structure

Core fields:

``` java
transient int size = 0;
transient Node<E> first;
transient Node<E> last;
```

Node structure:

``` java
private static class Node<E> {
    E item;
    Node<E> next;
    Node<E> prev;
}
```

It is a **doubly linked list**.

Each node has:

• Data\
• Reference to next\
• Reference to previous

------------------------------------------------------------------------

# 3️⃣ Visual Structure

Example:

List: \[A, B, C\]

Structure:

null ← A ↔ B ↔ C → null

first → A\
last → C

------------------------------------------------------------------------

# 4️⃣ add(E e) -- Internal Flow

Adding at end:

1.  Create new node
2.  last.next → newNode
3.  newNode.prev → oldLast
4.  Update last reference
5.  size++

Time Complexity: O(1)

------------------------------------------------------------------------

# 5️⃣ add(int index, E element)

Steps:

1.  Locate node at index (traversal required)
2.  Adjust next/prev pointers
3.  Insert new node

Time Complexity:

Traversal → O(n)\
Insertion → O(1)

Overall → O(n)

------------------------------------------------------------------------

# 6️⃣ get(int index)

LinkedList must traverse from:

• start if index \< size/2\
• end if index \> size/2

Time Complexity: O(n)

This is why LinkedList is slow for random access.

------------------------------------------------------------------------

# 7️⃣ remove(int index)

Steps:

1.  Locate node
2.  Adjust prev.next and next.prev
3.  Clear node references
4.  size--

Time Complexity: O(n) due to traversal

------------------------------------------------------------------------

# 8️⃣ Difference from ArrayList

  Feature               ArrayList       LinkedList
  --------------------- --------------- ---------------------
  Backing structure     Dynamic array   Doubly linked nodes
  Random access         O(1)            O(n)
  Insert at beginning   O(n)            O(1)
  Memory usage          Low             High
  Cache friendly        Yes             No

------------------------------------------------------------------------

# 9️⃣ Memory Overhead

Each node stores:

• Object reference (item) • next reference • prev reference

So per element, extra memory cost.

LinkedList uses significantly more memory than ArrayList.

------------------------------------------------------------------------

# 🔟 Deque & Queue Behavior

LinkedList implements Deque.

So it supports:

``` java
addFirst()
addLast()
removeFirst()
removeLast()
peekFirst()
peekLast()
```

Example:

``` java
LinkedList<String> list = new LinkedList<>();
list.addFirst("A");
list.addLast("B");
```

Efficient for queue operations.

------------------------------------------------------------------------

# 1️⃣1️⃣ modCount & Fail-Fast

LinkedList extends AbstractList → uses modCount.

Any structural modification:

modCount++

Iterator compares expectedModCount.

Fail-fast behavior similar to ArrayList.

------------------------------------------------------------------------

# 1️⃣2️⃣ Time Complexity Summary

  Operation     Complexity
  ------------- ------------
  add() end     O(1)
  add(i)        O(n)
  get(i)        O(n)
  remove(i)     O(n)
  addFirst      O(1)
  removeFirst   O(1)

------------------------------------------------------------------------

# 1️⃣3️⃣ When to Use LinkedList

Good for:

✓ Frequent insertions at beginning\
✓ Frequent removals at beginning\
✓ Queue / Deque operations

Not good for:

✗ Frequent random access\
✗ Memory-sensitive systems

------------------------------------------------------------------------

# 1️⃣4️⃣ Automation Framework Relevance

Rarely preferred over ArrayList.

But useful when:

• Implementing queue for processing tasks\
• BFS-like operations\
• Managing ordered test execution pipelines

Example:

``` java
Queue<String> queue = new LinkedList<>();
queue.offer("Task1");
queue.poll();
```

------------------------------------------------------------------------

# 1️⃣5️⃣ Interview Questions

Q: Why is LinkedList slow for get()?\
A: Requires traversal.

Q: Which is better -- ArrayList or LinkedList? A: Depends on use-case.

Q: Does LinkedList use array internally? A: No, it uses nodes.

Q: Why is memory overhead high? A: Each node stores two extra
references.

------------------------------------------------------------------------

# 1️⃣6️⃣ Advanced Insight

Although insertion is O(1) after locating node, locating node itself
costs O(n).

Therefore LinkedList is not always faster for insertions.

Many developers incorrectly assume LinkedList is always better for
insertions.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Node-based structure\
✓ first / last references\
✓ Traversal cost\
✓ Memory overhead\
✓ Queue behavior\
✓ Fail-fast mechanism\
✓ Real-world trade-offs\
✓ Interview-level clarity

Next file:

vector.md
