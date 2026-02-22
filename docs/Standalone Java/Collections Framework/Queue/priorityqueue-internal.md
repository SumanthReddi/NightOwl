---
sidebar_position: 2
title: PriorityQueue Internal Working
---

# PriorityQueue

This document explains:

-   What PriorityQueue really is
-   Why it is NOT FIFO
-   Internal Binary Heap structure
-   Array representation logic
-   Heapify-up & Heapify-down algorithms
-   Natural ordering vs Comparator
-   Capacity growth behavior
-   Iterator behavior
-   Thread-safety rules
-   Performance complexity
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is PriorityQueue?

PriorityQueue is a Queue implementation that orders elements based on
priority instead of insertion order.

By default: It is a **Min-Heap**.

That means: The smallest element (according to compareTo or Comparator)
is always at the head.

Definition:

``` java
public class PriorityQueue<E>
    extends AbstractQueue<E>
    implements java.io.Serializable
```

------------------------------------------------------------------------

# 2️⃣ Why It Is Not FIFO

Normal Queue → First In First Out\
PriorityQueue → Highest (or Lowest) Priority First

Example:

``` java
PriorityQueue<Integer> pq = new PriorityQueue<>();

pq.offer(30);
pq.offer(10);
pq.offer(20);

System.out.println(pq.poll()); // 10
```

Even though 30 inserted first, 10 is removed first.

------------------------------------------------------------------------

# 3️⃣ Internal Data Structure

PriorityQueue is implemented using a **Binary Heap** stored in an array.

Core field (simplified):

``` java
transient Object[] queue;
private int size;
```

The heap is:

✔ Complete binary tree\
✔ Stored in array form\
✔ Maintains heap property

------------------------------------------------------------------------

# 4️⃣ Array Representation Logic

Index relationships:

parent(i) = (i - 1) / 2\
left(i) = 2*i + 1\
right(i) = 2*i + 2

Example internal array:

Index: 0 1 2 3 4\
Value: 10 20 30 40 50

Tree structure:

          10
        /          20      30
     /     40    50

------------------------------------------------------------------------

# 5️⃣ Heap Property (Min-Heap)

For every node:

Parent \<= Children

This guarantees smallest element always at index 0.

------------------------------------------------------------------------

# 6️⃣ Insertion (offer / add)

Steps:

1.  Insert element at end of array
2.  Perform heapify-up (bubble up)

Pseudo logic:

``` java
while (i > 0 && parent > current) {
    swap(parent, current);
}
```

Time Complexity: O(log n)

------------------------------------------------------------------------

# 7️⃣ Removal (poll)

Steps:

1.  Remove root (index 0)
2.  Move last element to root
3.  Perform heapify-down

Pseudo logic:

``` java
while (child exists) {
    pick smaller child
    if parent > child → swap
}
```

Time Complexity: O(log n)

------------------------------------------------------------------------

# 8️⃣ peek()

``` java
pq.peek();
```

Returns root element without removal.

Time Complexity: O(1)

------------------------------------------------------------------------

# 9️⃣ Constructors

Natural ordering:

``` java
PriorityQueue<Integer> pq = new PriorityQueue<>();
```

Custom ordering (Max-Heap):

``` java
PriorityQueue<Integer> pq =
    new PriorityQueue<>(Comparator.reverseOrder());
```

------------------------------------------------------------------------

# 🔟 Capacity & Growth

Default initial capacity: 11

When full:

Capacity grows automatically (roughly 1.5x for larger sizes).

Resize cost: O(n) but happens rarely.

------------------------------------------------------------------------

# 1️⃣1️⃣ contains()

``` java
pq.contains(20);
```

Time Complexity: O(n)

Because no hashing used.

------------------------------------------------------------------------

# 1️⃣2️⃣ Iterator Behavior

Iterator:

• Fail-fast\
• Does NOT guarantee sorted order\
• Traverses internal heap structure

Example:

``` java
for(Integer n : pq) {
    System.out.println(n);
}
```

Order is NOT sorted order.

------------------------------------------------------------------------

# 1️⃣3️⃣ Null Handling

PriorityQueue does NOT allow null.

``` java
pq.offer(null); // NullPointerException
```

Reason:

Comparison cannot be performed on null.

------------------------------------------------------------------------

# 1️⃣4️⃣ Thread Safety

PriorityQueue is NOT thread-safe.

For concurrent environment use:

``` java
PriorityBlockingQueue
```

------------------------------------------------------------------------

# 1️⃣5️⃣ Performance Summary

  Operation   Complexity
  ----------- ------------
  offer       O(log n)
  poll        O(log n)
  peek        O(1)
  contains    O(n)

------------------------------------------------------------------------

# 1️⃣6️⃣ Example -- Custom Object

``` java
class Task {
    String name;
    int priority;

    Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
}

PriorityQueue<Task> tasks = new PriorityQueue<>(
    Comparator.comparingInt(t -> t.priority)
);

tasks.offer(new Task("Login", 5));
tasks.offer(new Task("Report", 1));

System.out.println(tasks.poll().name); // Report
```

------------------------------------------------------------------------

# 1️⃣7️⃣ Interview Traps

Q: Is iteration sorted? A: No.

Q: Is PriorityQueue FIFO? A: No.

Q: What is internal structure? A: Binary Heap (array-based).

Q: Can we store null? A: No.

Q: Default heap type? A: Min-Heap.

------------------------------------------------------------------------

# 1️⃣8️⃣ Automation Framework Relevance

Useful for:

• Priority-based test execution\
• Scheduling retry logic\
• Event dispatch systems\
• Task management in frameworks

Example:

``` java
PriorityQueue<String> testQueue =
    new PriorityQueue<>();

testQueue.offer("LowPriorityTest");
testQueue.offer("HighPriorityTest");
```

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Binary Heap concept\
✓ Heapify-up and heapify-down\
✓ Array index math\
✓ Natural vs Comparator ordering\
✓ O(log n) operations\
✓ Null & thread-safety rules\
✓ Automation use-cases\
✓ Interview clarity

Next file:

deque-interface.md
