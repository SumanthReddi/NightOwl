---
sidebar_position: 2
title: LinkedList
---


## The `LinkedList` Class in Java

The `LinkedList` class is another implementation of the `List` interface
in the Java Collection Framework. Unlike `ArrayList`, which uses a
dynamic array, `LinkedList` is based on a **doubly-linked list**. This
makes it particularly efficient for scenarios involving frequent
insertions and deletions.

------------------------------------------------------------------------

## Key Characteristics of `LinkedList`

-   **Doubly Linked Structure** (previous + next node)
-   **Efficient insertions and deletions**
-   **Slower random access**
-   Implements **List + Deque**
-   **Not thread-safe**

------------------------------------------------------------------------

## Common Use Cases

-   Frequent **insertions and deletions**
-   Implementing **queues**
-   Implementing **stacks**
-   Implementing **deques**

------------------------------------------------------------------------

## Important Methods

| Method              | Description                         |
|---------------------|-------------------------------------|
| `addFirst(E e)`     | Inserts element at beginning        |
| `addLast(E e)`      | Inserts element at end              |
| `getFirst()`        | Retrieves first element             |
| `getLast()`         | Retrieves last element              |
| `removeFirst()`     | Removes first element               |
| `removeLast()`      | Removes last element                |
| `offerFirst(E e)`   | Adds element to front               |
| `offerLast(E e)`    | Adds element to end                 |
| `pollFirst()`       | Retrieves & removes first element   |
| `pollLast()`        | Retrieves & removes last element    |

------------------------------------------------------------------------

## Example 1: Basic List Operations

``` java
import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {

    public static void main(String[] args) {

        List<String> fruits = new LinkedList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        System.out.println("Fruits: " + fruits);

        System.out.println("First fruit: " + fruits.get(0));

        fruits.set(1, "Mango");

        System.out.println("After replacement: " + fruits);

        fruits.remove("Cherry");

        System.out.println("After removal: " + fruits);
    }
}
```

------------------------------------------------------------------------

## Example 2: LinkedList as Deque

``` java
import java.util.LinkedList;

public class LinkedListAsDequeExample {

    public static void main(String[] args) {

        LinkedList<String> tasks = new LinkedList<>();

        tasks.addFirst("Task 1");
        tasks.addLast("Task 2");
        tasks.addFirst("Task 0");

        System.out.println(tasks);

        System.out.println("First Task: " + tasks.peekFirst());
        System.out.println("Last Task: " + tasks.peekLast());

        System.out.println("Removed First: " + tasks.pollFirst());
        System.out.println("Removed Last: " + tasks.pollLast());

        System.out.println("Remaining Tasks: " + tasks);
    }
}
```

------------------------------------------------------------------------

## Example 3: LinkedList as Stack

``` java
import java.util.LinkedList;

public class LinkedListAsStackExample {

    public static void main(String[] args) {

        LinkedList<Integer> stack = new LinkedList<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Stack: " + stack);

        System.out.println("Popped: " + stack.pop());
        System.out.println("Popped: " + stack.pop());

        System.out.println("Remaining Stack: " + stack);
    }
}
```

------------------------------------------------------------------------

## Performance Characteristics

| Operation       | Complexity |
|-----------------|------------|
| get(index)      | O(n)       |
| addFirst()      | O(1)       |
| addLast()       | O(1)       |
| removeFirst()   | O(1)       |
| removeLast()    | O(1)       |

------------------------------------------------------------------------

## When to Use LinkedList

Use **LinkedList** when:

-   Many **insertions/deletions**
-   Implementing **Deque**
-   Implementing **Stack / Queue**

Avoid when:

-   **Random access** is required frequently.

------------------------------------------------------------------------

## LinkedList vs ArrayList

| Feature                | LinkedList           | ArrayList        |
|------------------------|----------------------|------------------|
| Structure              | Doubly Linked List   | Dynamic Array    |
| Random Access          | Slow O(n)            | Fast O(1)        |
| Insert/Delete Middle   | Faster               | Slower           |
| Memory                 | Higher               | Lower            |
