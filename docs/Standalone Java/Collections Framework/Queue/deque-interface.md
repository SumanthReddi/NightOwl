---
sidebar_position: 3
title: Deque Interface 
---
<!-- # 04-deque-in-queues -->

## The Role of `Deque` in Queue Implementations

The `Deque` (Double-Ended Queue) interface plays a dual role in the Java
Collections Framework.\
It can behave both as a **queue (FIFO)** and a **stack (LIFO)**, making
it one of the most versatile interfaces in the Java Collections
Framework.

While the `Queue` interface primarily supports **single-ended
operations**, `Deque` allows operations at **both the front and the
back**.

------------------------------------------------------------------------

## Key Characteristics of `Deque`

-   Supports **double-ended operations**
-   Can function as both **FIFO (queue)** and **LIFO (stack)**
-   Implementations like `ArrayDeque` are **high performance**
-   Most implementations are **not thread-safe**
-   Thread-safe alternative: `ConcurrentLinkedDeque`

------------------------------------------------------------------------

## Deque vs Queue
| Feature                 | Deque                       | Queue                         |
|-------------------------|-----------------------------|-------------------------------|
| Ordering                | FIFO and LIFO               | Primarily FIFO                |
| Ends of Operation       | Both front and rear         | Mostly rear insertion, front removal |
| Typical Methods         | `addFirst`, `addLast`, `removeFirst`, `removeLast` | `offer`, `poll`, `peek` |
| Flexibility             | High                        | Moderate                      |
------------------------------------------------------------------------

## Using Deque as a Queue (FIFO)

``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class DequeAsQueueExample {

    public static void main(String[] args) {

        Deque<String> queue = new ArrayDeque<>();

        queue.offer("Alice");
        queue.offer("Bob");

        System.out.println("Queue: " + queue);

        System.out.println("Poll: " + queue.poll());

        System.out.println("Remaining: " + queue);
    }
}
```

------------------------------------------------------------------------

## Using Deque as a Stack (LIFO)

``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class DequeAsStackExample {

    public static void main(String[] args) {

        Deque<Integer> stack = new ArrayDeque<>();

        stack.push(10);
        stack.push(20);

        System.out.println("Stack: " + stack);

        System.out.println("Pop: " + stack.pop());

        System.out.println("Remaining: " + stack);
    }
}
```

------------------------------------------------------------------------

## Important Deque Methods
| Method            | Description                          |
|-------------------|--------------------------------------|
| `addFirst()`      | Inserts element at the front         |
| `addLast()`       | Inserts element at the rear          |
| `offerFirst()`    | Inserts element at front safely      |
| `offerLast()`     | Inserts element at rear safely       |
| `removeFirst()`   | Removes first element                |
| `removeLast()`    | Removes last element                 |
| `peekFirst()`     | Retrieves first element              |
| `peekLast()`      | Retrieves last element               |
| `push()`          | Stack push operation                 |
| `pop()`           | Stack pop operation                  |
------------------------------------------------------------------------

## When to Use Deque

Use `Deque` when:

-   You need **both queue and stack behavior**
-   Elements must be added/removed from **both ends**
-   You want a **fast stack implementation (`ArrayDeque`)**
-   You want a **flexible data structure for algorithms**

------------------------------------------------------------------------

## Best Implementation Choice

Prefer **ArrayDeque** in most cases.

Reasons:

-   Faster than `LinkedList`
-   Better memory locality
-   No node allocation overhead

------------------------------------------------------------------------

## When NOT to Use Deque

Avoid using `Deque` when:

-   You strictly require **priority-based ordering** → use
    `PriorityQueue`
-   You require **blocking behavior for threads** → use `BlockingQueue`
-   You need **thread-safe deque operations** → use
    `ConcurrentLinkedDeque`

------------------------------------------------------------------------

## Summary

`Deque` is one of the most flexible interfaces in Java collections.

It allows:

1.  Queue behavior (FIFO)
2.  Stack behavior (LIFO)
3.  Double-ended operations
4.  Efficient implementations like `ArrayDeque`

Because of this versatility, `Deque` is often the **preferred
replacement for the legacy `Stack` class** and a powerful alternative to
standard queues.
