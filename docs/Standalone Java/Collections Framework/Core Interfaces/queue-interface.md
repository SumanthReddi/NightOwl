---
sidebar_position: 4
title: Queue Interface
---
<!-- # 04-queue-interface -->

## The `Queue` Interface in Java

The `Queue` interface is one of the core interfaces in the Java
Collection Framework. It represents a collection designed for holding
elements prior to processing, typically following a **FIFO
(First-In-First-Out)** order. However, some implementations (e.g.,
`PriorityQueue`) process elements based on priority rather than
insertion order.

------------------------------------------------------------------------

## Key Characteristics of `Queue`

-   **Ordering**: Most implementations follow FIFO.
-   **Priority Processing**: `PriorityQueue` orders elements based on
    priority.
-   **Head Operations**: Supports retrieving or removing the head
    element.
-   **Concurrent Variants**: Some implementations support blocking
    operations for multithreaded systems.

------------------------------------------------------------------------

## Common Implementations

### PriorityQueue

-   Elements ordered by **natural order** or **Comparator**
-   Not strictly FIFO
-   Internal structure: **Heap**

### ArrayDeque

-   Resizable array implementation
-   Faster than `LinkedList` for most queue operations
-   Can act as **queue or stack**

### LinkedList

-   Doubly linked list
-   Implements **List + Deque + Queue**
-   Suitable for FIFO queues

### BlockingQueue (Subinterface)

-   Used in **concurrent programming**
-   Examples:
    -   `ArrayBlockingQueue`
    -   `LinkedBlockingQueue`

------------------------------------------------------------------------

## Important Methods

| Method               | Description                                                      |
|----------------------|------------------------------------------------------------------|
| `boolean offer(E e)` | Inserts element if possible                                      |
| `E poll()`           | Retrieves and removes head (returns null if empty)               |
| `E remove()`         | Retrieves and removes head (throws exception if empty)           |
| `E peek()`           | Retrieves but does not remove head                               |
| `E element()`        | Retrieves head but throws exception if empty                     |

------------------------------------------------------------------------

## Example 1: PriorityQueue

``` java
import java.util.PriorityQueue;
import java.util.Queue;

public class PriorityQueueExample {

    public static void main(String[] args) {

        // Create a PriorityQueue
        Queue<Integer> numbers = new PriorityQueue<>();

        // Add elements
        numbers.offer(5);
        numbers.offer(3);
        numbers.offer(8);

        // PriorityQueue does NOT maintain insertion order.
        // It arranges elements based on natural ordering (min-heap for integers).
        System.out.println("Queue: " + numbers);

        // Possible Output (internal heap order):
        // Queue: [3, 5, 8]

        // Poll removes the smallest element first
        System.out.println("Poll: " + numbers.poll());    // Poll: 3
      
        System.out.println("Poll: " + numbers.poll());  // Poll: 5

        // Remaining element
        System.out.println("Remaining: " + numbers);      // Remaining: [8]
      
    }
}
```

------------------------------------------------------------------------

## Example 2: ArrayDeque as Queue

``` java
import java.util.ArrayDeque;
import java.util.Queue;

public class ArrayDequeExample {

    public static void main(String[] args) {

        // Create an ArrayDeque used as a Queue
        Queue<String> tasks = new ArrayDeque<>();

        // Add elements (FIFO order)
        tasks.offer("Task 1");
        tasks.offer("Task 2");
        tasks.offer("Task 3");

        // ArrayDeque maintains insertion order when used as a Queue
        System.out.println("Tasks: " + tasks);  // Tasks: [Task 1, Task 2, Task 3]

        // Poll removes the first inserted element (FIFO)
        System.out.println("Poll: " + tasks.poll());     // Poll: Task 1

        System.out.println("Poll: " + tasks.poll());    // Poll: Task 2

        // Remaining element
        System.out.println("Remaining: " + tasks);   // Remaining: [Task 3]
       
    }
}
```

------------------------------------------------------------------------

## Example 3: LinkedList as Queue

``` java
import java.util.LinkedList;
import java.util.Queue;

public class LinkedListExample {

    public static void main(String[] args) {

        // Create a LinkedList used as a Queue
        Queue<String> messages = new LinkedList<>();

        // Add elements (FIFO order)
        messages.offer("Message 1");
        messages.offer("Message 2");
        messages.offer("Message 3");

        // LinkedList maintains insertion order
        System.out.println("Messages: " + messages);     // Messages: [Message 1, Message 2, Message 3]

        // Peek returns the first element without removing it
        System.out.println("Peek: " + messages.peek());  // Peek: Message 1       

        // Poll removes the first element (FIFO)
        System.out.println("Poll: " + messages.poll());   // Poll: Message 1

        System.out.println("Poll: " + messages.poll());   // Poll: Message 2

        // Remaining element in the queue
        System.out.println("Remaining: " + messages);      // Remaining: [Message 3]
     
    }
}
```

------------------------------------------------------------------------

## Queue vs Other Collections

| Feature      | Queue             | List      | Set                |
|--------------|-------------------|-----------|--------------------|
| Ordering     | FIFO / Priority   | Ordered   | Usually unordered  |
| Duplicates   | Allowed           | Allowed   | Not allowed        |
| Index Access | No                | Yes       | No                 |

------------------------------------------------------------------------

## When to Use Queue

Use **Queue** when:

-   Tasks must be processed in **order**
-   Implementing **task scheduling**
-   Handling **producer-consumer systems**
-   Implementing **BFS algorithms**

Recommendations:

-   **PriorityQueue** → priority-based processing
-   **ArrayDeque** → high performance queue/stack
-   **LinkedList** → flexible queue implementation
-   **BlockingQueue** → concurrent task processing
