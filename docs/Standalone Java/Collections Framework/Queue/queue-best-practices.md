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

## Summary

Best practices when using queues:

1.  Choose the correct queue implementation
2.  Understand time complexity of operations
3.  Avoid inserting null values
4.  Do not modify queues during iteration
5.  Use concurrent queues for multi-threaded environments
