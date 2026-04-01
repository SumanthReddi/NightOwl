---
sidebar_position: 4
title: Queue Best Practices
---
<!-- # 03-queue-best-practices -->

## Best Practices for Using `Queue` Implementations in Java

When working with Queue implementations in Java, choosing the correct
implementation is important for performance, scalability, and
maintainability. This guide summarizes best practices and common
pitfalls.

------------------------------------------------------------------------

## 1. Choosing the Right Queue Implementation

### Use `PriorityQueue` when

-   Elements must be processed by **priority**
-   Ordering depends on **natural ordering or comparator**
-   Algorithms like **Dijkstra or task scheduling** are used

### Use `ArrayDeque` when

-   You need a **fast queue or stack**
-   You require **double-ended operations**
-   Performance and memory efficiency matter

### Use `LinkedList` when

-   You require a **deque implementation**
-   Frequent insertions/removals in the middle are needed

### Use `ConcurrentLinkedQueue` or `BlockingQueue` when

-   Multiple threads must safely access the queue

------------------------------------------------------------------------

## 2. Avoiding Common Pitfalls

### Do Not Insert `null`

Most queue implementations do not allow null values.

``` java
Queue<Integer> queue = new PriorityQueue<>();
// queue.add(null); // Throws NullPointerException
```

------------------------------------------------------------------------

### Avoid Modifying Queue During Iteration

Direct modification during iteration may cause
`ConcurrentModificationException`.

Use the iterator's remove method.

``` java
Iterator<String> it = queue.iterator();

while(it.hasNext()){
    String name = it.next();
    if(name.equals("Bob")){
        it.remove();
    }
}
```

------------------------------------------------------------------------

### Understand PriorityQueue Ordering

If objects are inserted into a PriorityQueue, they must either:

-   Implement `Comparable`
-   Or provide a `Comparator`

``` java
PriorityQueue<Task> tasks =
        new PriorityQueue<>(Comparator.comparingInt(t -> t.priority));
```

------------------------------------------------------------------------

### Do Not Use ArrayDeque Like a List

`ArrayDeque` does not support index-based access.

``` java
Deque<Integer> deque = new ArrayDeque<>();

deque.add(1);
deque.add(2);

// deque.get(1); // Compilation error
```

Use `ArrayList` instead when random access is needed.

------------------------------------------------------------------------

## 3. Performance Considerations
| Operation       | PriorityQueue   | ArrayDeque      | LinkedList      |
|-----------------|-----------------|-----------------|-----------------|
| Add             | O(log n)        | O(1)            | O(1)            |
| Remove          | O(log n)        | O(1)            | O(1)            |
| Random Access   | Not Supported   | Not Supported   | O(n)            |
| Memory Usage    | Medium          | Low             | High            |
------------------------------------------------------------------------

## 4. Thread Safety

Most queue implementations are **not thread-safe**.

### Synchronized Wrapper

``` java
Queue<String> queue =
    Collections.synchronizedCollection(new ArrayDeque<>());
```

### Concurrent Queues

``` java
Queue<String> queue = new ConcurrentLinkedQueue<>();
```

### Blocking Queues

Used in producer-consumer problems.

``` java
BlockingQueue<String> queue =
        new ArrayBlockingQueue<>(10);
```

------------------------------------------------------------------------

## 5. Best Practices for Real Scenarios

### Task Scheduling

``` java
PriorityQueue<Task> tasks =
    new PriorityQueue<>(Comparator.comparingInt(t -> t.priority));

tasks.add(new Task("Task A",3));
tasks.add(new Task("Task B",1));

while(!tasks.isEmpty()){
    System.out.println(tasks.poll());
}
```

------------------------------------------------------------------------

### Stack Using ArrayDeque

Prefer `ArrayDeque` instead of legacy `Stack`.

``` java
Deque<Integer> stack = new ArrayDeque<>();

stack.push(10);
stack.push(20);

System.out.println(stack.pop());
System.out.println(stack.pop());
```

------------------------------------------------------------------------

### Producer Consumer with BlockingQueue

``` java
BlockingQueue<String> queue =
        new ArrayBlockingQueue<>(10);

queue.put("Message");

System.out.println(queue.take());
```

------------------------------------------------------------------------

## 6. Recommendations for Large Applications

### Prefer Primitive Collections

Libraries like:

-   Eclipse Collections
-   FastUtil

can reduce memory overhead for primitive queues.

------------------------------------------------------------------------

### Profile Performance

Always use profiling tools when working with large queues in
high-performance systems.

------------------------------------------------------------------------

### Immutable Queues

Use immutable collections when queues are read-only.

------------------------------------------------------------------------
## 7. Difference Between Queue Implementations in Java

| Feature | PriorityQueue | ArrayDeque | LinkedList |
|--------|---------------|------------|------------|
| **Type** | Queue | Deque | Deque |
| **Ordering** | Priority order (natural or comparator) | Insertion order | Insertion order |
| **Duplicates Allowed** | Yes | Yes | Yes |
| **Null Elements Allowed** | No | No | Yes (not recommended) |
| **Thread-Safe** | No | No | No |
| **Underlying Data Structure** | Binary Heap | Resizable Array | Doubly Linked List |
| **Add Operation Complexity** | O(log n) | O(1) | O(1) |
| **Remove Operation Complexity** | O(log n) | O(1) | O(1) |
| **Peek Operation Complexity** | O(1) | O(1) | O(1) |
| **Random Access** | Not supported | Not supported | O(n) |
| **Memory Overhead** | Moderate | Low | High |
| **Iterator Type** | Fail-fast | Fail-fast | Fail-fast |
| **Common Use Cases** | Priority scheduling, algorithms | Stack/Queue implementation | Frequent insertions/deletions |

### Explanation of Key Differences

#### 1. Ordering
- **PriorityQueue** maintains elements in **priority order** (natural ordering or custom comparator).  
  The element with the **highest priority** (lowest value by default) is always at the head of the queue.
- **ArrayDeque** maintains elements in **insertion order**, meaning elements are stored and retrieved in the same sequence they were added.
- **LinkedList** also maintains elements in **insertion order**, but it can be used as both a **queue and a deque**.

#### 2. Duplicates and Null Elements
- All three implementations (**PriorityQueue**, **ArrayDeque**, **LinkedList**) allow **duplicate elements**.
- **PriorityQueue** does **not allow null elements** because it relies on comparisons to maintain priority order.
- **ArrayDeque** also does **not allow null elements**, as it uses arrays internally and `null` would cause ambiguity.
- **LinkedList** allows **null elements**, but using null values in a queue is **not recommended** because it may create confusion when identifying empty elements.

#### 3. Thread-Safety
- None of the queue implementations (**PriorityQueue**, **ArrayDeque**, **LinkedList**) are **thread-safe** by default.
- If thread-safety is required, consider using concurrent alternatives such as:
  - `PriorityBlockingQueue`
  - `ConcurrentLinkedDeque`

#### 4. Underlying Data Structure
- **PriorityQueue** uses a **binary heap**, which ensures efficient priority ordering.
- **ArrayDeque** uses a **resizable array** and provides very efficient operations at both ends.
- **LinkedList** uses a **doubly-linked list**, where each node stores references to the previous and next elements.

#### 5. Performance
- **PriorityQueue**
  - Add: `O(log n)`
  - Remove: `O(log n)`
  - Peek: `O(1)`

- **ArrayDeque**
  - Add/Remove at ends: `O(1)`
  - Access first/last: `O(1)`

- **LinkedList**
  - Add/Remove at ends: `O(1)`
  - Get: `O(n)` because traversal is required.

#### 6. Memory Overhead
- **PriorityQueue** has **moderate memory overhead** due to its heap structure.
- **ArrayDeque** has **low memory overhead** because it only stores elements in an array.
- **LinkedList** has **high memory overhead** since each node stores additional references to previous and next nodes.

#### 7. Use Cases
- **PriorityQueue**
  - Priority-based task processing
  - Scheduling algorithms
  - Graph algorithms (e.g., Dijkstra)

- **ArrayDeque**
  - Efficient stack or queue implementation
  - Double-ended queue operations

- **LinkedList**
  - Frequent insertions and deletions
  - Queue or deque implementations where memory is not a constraint

#### 8. Iterator Behavior
- **PriorityQueue** and **ArrayDeque** provide **fail-fast iterators**, which throw `ConcurrentModificationException` if the collection is modified during iteration.
- **LinkedList** also provides **fail-fast iterators**, iterating elements in **insertion order**.

---
## Summary

Best practices when using queues:

1.  Choose the correct queue implementation
2.  Understand time complexity of operations
3.  Avoid inserting null values
4.  Do not modify queues during iteration
5.  Use concurrent queues for multi-threaded environments
