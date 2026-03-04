---
sidebar_position: 5
title: Deque Interface
---
<!-- # 05-deque-interface -->

## The `Deque` Interface in Java

The `Deque` (Double-Ended Queue) interface is a subinterface of the
`Queue` interface in the Java Collection Framework. It represents a
collection that supports element insertion and removal at **both ends**
(front and back). This makes it highly versatile, as it can be used as
both a **queue** (FIFO) and a **stack** (LIFO).

------------------------------------------------------------------------

## Key Characteristics of `Deque`

-   **Double-Ended Operations**: Supports adding, removing, and
    inspecting elements at both the front and the back.
-   **Versatility**: Can function as a queue (FIFO), stack (LIFO), or a
    general-purpose deque.
-   **Dynamic Capacity**: Most implementations are dynamically
    resizable.
-   **Thread Safety**: Most implementations are not synchronized;
    concurrent variants exist.

------------------------------------------------------------------------

## Common Implementations

### ArrayDeque

-   Resizable-array implementation
-   Very fast due to good memory locality
-   **Does not allow null elements**

### LinkedList

-   Implements **List + Deque**
-   Allows `null`
-   Slightly slower due to node allocation

### ConcurrentLinkedDeque

-   Thread-safe implementation
-   Non-blocking and suitable for concurrent applications

------------------------------------------------------------------------

## Important Methods

| Method              | Description                              |
|---------------------|------------------------------------------|
| `addFirst(E e)`     | Inserts element at front                 |
| `addLast(E e)`      | Inserts element at end                   |
| `removeFirst()`     | Removes first element                    |
| `removeLast()`      | Removes last element                     |
| `getFirst()`        | Retrieves first element                  |
| `getLast()`         | Retrieves last element                   |
| `offerFirst(E e)`   | Inserts at front (safe version)          |
| `offerLast(E e)`    | Inserts at end (safe version)            |
| `pollFirst()`       | Retrieves & removes first element        |
| `pollLast()`        | Retrieves & removes last element         |
| `peekFirst()`       | Retrieves first element                  |
| `peekLast()`        | Retrieves last element                   |

------------------------------------------------------------------------

## Example 1: ArrayDeque Operations

``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class ArrayDequeExample {

    public static void main(String[] args) {

        Deque<String> tasks = new ArrayDeque<>();

        tasks.addFirst("Task 1");
        tasks.addLast("Task 2");
        tasks.addFirst("Task 0");

        System.out.println(tasks);

        System.out.println("First: " + tasks.peekFirst());
        System.out.println("Last: " + tasks.peekLast());

        System.out.println("Removed First: " + tasks.pollFirst());
        System.out.println("Removed Last: " + tasks.pollLast());

        System.out.println("Remaining: " + tasks);
    }
}
```

------------------------------------------------------------------------

## Example 2: Deque as Stack

``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class StackExample {

    public static void main(String[] args) {

        Deque<Integer> stack = new ArrayDeque<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Stack: " + stack);

        System.out.println("Pop: " + stack.pop());
        System.out.println("Pop: " + stack.pop());

        System.out.println("Remaining: " + stack);
    }
}
```

------------------------------------------------------------------------

## Example 3: Deque as Queue

``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class QueueExample {

    public static void main(String[] args) {

        Deque<String> queue = new ArrayDeque<>();

        queue.offer("Alice");
        queue.offer("Bob");
        queue.offer("Charlie");

        System.out.println(queue);

        System.out.println("Poll: " + queue.poll());
        System.out.println("Poll: " + queue.poll());

        System.out.println("Remaining: " + queue);
    }
}
```

------------------------------------------------------------------------

## Deque vs Other Collections

| Feature      | Deque                | Queue             | List      |
|--------------|----------------------|-------------------|-----------|
| Ends         | Both ends            | One end           | Indexed   |
| Order        | Flexible             | FIFO / Priority   | Ordered   |
| Index Access | No                   | No                | Yes       |

------------------------------------------------------------------------

## When to Use Deque

Use **Deque** when:

-   You need **efficient operations at both ends**
-   Implementing **stack (LIFO)** or **queue (FIFO)**
-   Building algorithms like **sliding window**, **BFS**, or
    **palindrome checks**

Recommendation:

-   **ArrayDeque** → best general-purpose implementation
