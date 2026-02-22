---
sidebar_position: 1
title: Queue Interface 
---

# Queue Interface

This document explains:

-   What Queue represents
-   FIFO principle
-   Difference between add/offer, remove/poll, element/peek
-   Blocking vs Non-blocking behavior
-   Internal expectations
-   Common implementations
-   PriorityQueue overview
-   Deque relation
-   Automation relevance
-   Interview traps
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is Queue?

Queue represents:

First In → First Out (FIFO)

Definition:

``` java
public interface Queue<E> extends Collection<E>
```

Queue is designed for:

• Processing elements in order\
• Task scheduling\
• Buffering\
• Event handling

------------------------------------------------------------------------

# 2️⃣ Core Queue Methods

Queue provides two versions of insertion, removal and examination
methods.

  Operation   Throws Exception   Returns Special Value
  ----------- ------------------ -----------------------
  Insert      add(e)             offer(e)
  Remove      remove()           poll()
  Examine     element()          peek()

------------------------------------------------------------------------

# 3️⃣ add(E e) vs offer(E e)

## add(E e)

``` java
queue.add("A");
```

• Throws IllegalStateException if capacity restricted and full

## offer(E e)

``` java
queue.offer("A");
```

• Returns false if cannot insert • Preferred in capacity-restricted
queues

------------------------------------------------------------------------

# 4️⃣ remove() vs poll()

## remove()

``` java
queue.remove();
```

• Removes head • Throws NoSuchElementException if empty

## poll()

``` java
queue.poll();
```

• Removes head • Returns null if empty

------------------------------------------------------------------------

# 5️⃣ element() vs peek()

## element()

``` java
queue.element();
```

• Returns head • Throws exception if empty

## peek()

``` java
queue.peek();
```

• Returns head • Returns null if empty

------------------------------------------------------------------------

# 6️⃣ Basic Example (Using LinkedList)

``` java
import java.util.*;

Queue<String> queue = new LinkedList<>();

queue.offer("A");
queue.offer("B");
queue.offer("C");

System.out.println(queue.poll());  // A
System.out.println(queue.poll());  // B
System.out.println(queue);         // [C]
```

LinkedList implements Queue.

------------------------------------------------------------------------

# 7️⃣ Common Implementations

• LinkedList\
• PriorityQueue\
• ArrayDeque\
• ConcurrentLinkedQueue\
• BlockingQueue implementations

------------------------------------------------------------------------

# 8️⃣ PriorityQueue (Overview)

PriorityQueue does NOT follow FIFO strictly.

It orders elements based on:

• Natural ordering\
OR • Comparator

Example:

``` java
PriorityQueue<Integer> pq = new PriorityQueue<>();

pq.offer(30);
pq.offer(10);
pq.offer(20);

System.out.println(pq.poll());  // 10 (smallest first)
```

Internally implemented using binary heap.

Time complexity:

add → O(log n)\
poll → O(log n)

------------------------------------------------------------------------

# 9️⃣ Deque Relation

Deque = Double Ended Queue

Supports:

• Insert/remove from both ends

Implemented by:

• ArrayDeque\
• LinkedList

Example:

``` java
Deque<Integer> deque = new ArrayDeque<>();

deque.addFirst(10);
deque.addLast(20);

System.out.println(deque.removeFirst());  // 10
```

------------------------------------------------------------------------

# 🔟 Queue vs Stack

  Feature     Queue   Stack
  ----------- ------- -------
  Order       FIFO    LIFO
  Insertion   End     Top
  Removal     Front   Top

------------------------------------------------------------------------

# 1️⃣1️⃣ Time Complexity Overview

  Implementation   add        remove     peek
  ---------------- ---------- ---------- ------
  LinkedList       O(1)       O(1)       O(1)
  ArrayDeque       O(1)       O(1)       O(1)
  PriorityQueue    O(log n)   O(log n)   O(1)

------------------------------------------------------------------------

# 1️⃣2️⃣ Automation Framework Relevance

Queue useful for:

• Task scheduling in test frameworks\
• Managing execution pipelines\
• Retry mechanisms\
• Event processing\
• BFS-like traversal problems

Example -- Processing test steps:

``` java
Queue<String> steps = new LinkedList<>();
steps.offer("Login");
steps.offer("Submit Form");
steps.offer("Logout");

while(!steps.isEmpty()) {
    System.out.println("Executing: " + steps.poll());
}
```

------------------------------------------------------------------------

# 1️⃣3️⃣ Interview Questions

Q: Difference between add() and offer()? A: add throws exception, offer
returns false.

Q: Which queue maintains priority? A: PriorityQueue.

Q: Is LinkedList a Queue? A: Yes (implements Queue interface).

Q: Is Queue thread-safe? A: No (unless using concurrent
implementations).

------------------------------------------------------------------------

# 1️⃣4️⃣ Advanced Insight

Queue is abstract behavior.

Internal implementation determines:

• Ordering • Performance • Thread-safety • Capacity restrictions

Always choose correct implementation.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ FIFO principle\
✓ add vs offer difference\
✓ remove vs poll difference\
✓ element vs peek difference\
✓ PriorityQueue behavior\
✓ Deque relation\
✓ Performance trade-offs\
✓ Automation usage\
✓ Interview-level clarity

Next file:

priorityqueue-internal.md
