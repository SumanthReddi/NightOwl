---
sidebar_position: 2
title: ArrayDeque 
---


## The `ArrayDeque` Class in Java

`ArrayDeque` (Array Double Ended Queue) is a **resizable-array
implementation of the Deque interface**.

It supports insertion and removal of elements from **both ends**, making
it suitable for:

-   **Queue (FIFO)**
-   **Stack (LIFO)**
-   **Double-ended queue (Deque)**

Internally it uses a **circular resizable array**, which makes it faster
and more memory efficient than `LinkedList` for most operations.

------------------------------------------------------------------------

## Key Characteristics

-   **Double-Ended Operations** -- Insert and remove from both ends
-   **Resizable Array** -- Automatically grows when needed
-   **No Capacity Limit** -- Dynamically resizes
-   **Not Thread-Safe**
-   **Better Performance than LinkedList** for deque operations
-   **No Null Elements Allowed**

------------------------------------------------------------------------

## Common Use Cases

-   Implementing **queues**
-   Implementing **stacks**
-   Sliding window algorithms
-   BFS algorithms
-   General-purpose **double-ended queue operations**

------------------------------------------------------------------------

## Important Methods
| Method              | Description                     |
|---------------------|---------------------------------|
| `addFirst(E e)`     | Inserts element at front        |
| `addLast(E e)`      | Inserts element at end          |
| `offerFirst(E e)`   | Inserts element at front        |
| `offerLast(E e)`    | Inserts element at end          |
| `peekFirst()`       | Retrieves first element         |
| `peekLast()`        | Retrieves last element          |
| `pollFirst()`       | Removes first element           |
| `pollLast()`        | Removes last element            |
| `push(E e)`         | Stack push (adds to front)      |
| `pop()`             | Stack pop (removes from front)  |
------------------------------------------------------------------------

## Example 1: Using ArrayDeque as Queue

``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class ArrayDequeQueueExample {

    public static void main(String[] args) {

        Deque<String> queue = new ArrayDeque<>();

        queue.offer("Alice");
        queue.offer("Bob");
        queue.offer("Charlie");

        System.out.println(queue);

        System.out.println(queue.poll());
        System.out.println(queue.poll());

        System.out.println(queue);

    }
}
```

Output

    [Alice, Bob, Charlie]
    Alice
    Bob
    [Charlie]

------------------------------------------------------------------------

## Example 2: Using ArrayDeque as Stack

``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class ArrayDequeStackExample {

    public static void main(String[] args) {

        Deque<Integer> stack = new ArrayDeque<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println(stack);

        System.out.println(stack.pop());
        System.out.println(stack.pop());

        System.out.println(stack);

    }
}
```

Output

    [30, 20, 10]
    30
    20
    [10]

------------------------------------------------------------------------

## Example 3: Double Ended Operations

``` java
import java.util.ArrayDeque;
import java.util.Deque;

public class ArrayDequeDequeExample {

    public static void main(String[] args) {

        Deque<String> deque = new ArrayDeque<>();

        deque.addFirst("Task 1");
        deque.addLast("Task 2");
        deque.addFirst("Task 0");

        System.out.println(deque);

        System.out.println(deque.peekFirst());
        System.out.println(deque.peekLast());

        deque.pollFirst();
        deque.pollLast();

        System.out.println(deque);

    }
}
```

------------------------------------------------------------------------

## Performance Characteristics
| Operation            | Complexity |
|----------------------|------------|
| addFirst/addLast     | O(1)       |
| pollFirst/pollLast   | O(1)       |
| push/pop             | O(1)       |
| iteration            | O(n)       |

`ArrayDeque` is usually **faster than LinkedList** because it avoids
node allocations.

------------------------------------------------------------------------

## When to Use ArrayDeque

Use when:

-   Implementing **stack**
-   Implementing **queue**
-   Need fast **double-ended operations**
-   High-performance deque operations

Avoid when:

-   Random access is required
-   Frequent middle insertions are needed

------------------------------------------------------------------------

## Comparison: ArrayDeque vs LinkedList
| Feature          | ArrayDeque          | LinkedList            |
|------------------|---------------------|-----------------------|
| Data Structure   | Resizable Array     | Doubly Linked List    |
| Performance      | Faster              | Slightly slower       |
| Memory Usage     | Lower               | Higher                |
| Random Access    | Not supported       | Not efficient (O(n))  |