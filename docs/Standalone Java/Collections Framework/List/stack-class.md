---
sidebar_position: 4
title: Stack Class
---


## The `Stack` Class in Java

The `Stack` class is a legacy implementation of a **Last-In-First-Out
(LIFO)** stack in Java. It extends the `Vector` class and provides
additional methods for stack-specific operations such as `push`, `pop`,
and `peek`. While it is still part of the Java API, its usage is
generally discouraged in favor of modern alternatives like `Deque`
implementations (e.g., `ArrayDeque`).

------------------------------------------------------------------------

## Key Characteristics of `Stack`

-   **LIFO Behavior**: Last element inserted is the first one removed.
-   **Legacy Implementation**: Introduced in Java 1.0.
-   **Thread Safety**: Inherits synchronization from `Vector`.
-   **Limited Versatility** compared to modern collections.

------------------------------------------------------------------------

## Common Use Cases

-   Expression parsing
-   Backtracking algorithms
-   Undo/redo functionality
-   Legacy systems using `Stack`

------------------------------------------------------------------------

## Important Methods

  Method                   Description
  ------------------------ -----------------------------
  `E push(E item)`         Push element to top
  `E pop()`                Remove and return top
  `E peek()`               View top element
  `boolean empty()`        Check if stack empty
  `int search(Object o)`   Returns position of element

------------------------------------------------------------------------

## Example 1: Basic Stack Operations

``` java
import java.util.Stack;

public class StackExample {

    public static void main(String[] args) {

        Stack<String> stack = new Stack<>();

        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");

        System.out.println("Stack: " + stack);

        System.out.println("Top element: " + stack.peek());

        System.out.println("Popped: " + stack.pop());
        System.out.println("Popped: " + stack.pop());

        System.out.println("Remaining Stack: " + stack);
    }
}
```

------------------------------------------------------------------------

## Example 2: Searching an Element

``` java
import java.util.Stack;

public class StackSearchExample {

    public static void main(String[] args) {

        Stack<String> stack = new Stack<>();

        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");

        int position = stack.search("Apple");

        System.out.println("Position of Apple: " + position);
    }
}
```

------------------------------------------------------------------------

## Example 3: Checking if Stack is Empty

``` java
import java.util.Stack;

public class StackEmptyExample {

    public static void main(String[] args) {

        Stack<String> stack = new Stack<>();

        System.out.println("Is stack empty? " + stack.empty());

        stack.push("Apple");

        System.out.println("Is stack empty? " + stack.empty());
    }
}
```

------------------------------------------------------------------------

## Performance Characteristics

| Operation   | Complexity |
|-------------|------------|
| push()      | O(1)       |
| pop()       | O(1)       |
| peek()      | O(1)       |
| search()    | O(n)       |

Synchronization overhead can make it slower than modern alternatives.

------------------------------------------------------------------------

## When to Use Stack

Use `Stack` when:

-   Maintaining legacy systems
-   Explicit synchronized stack behavior required

Prefer modern alternatives:

-   `ArrayDeque`
-   `Deque` interface

------------------------------------------------------------------------

## Stack vs ArrayDeque

| Feature          | Stack                | ArrayDeque              |
|------------------|----------------------|-------------------------|
| Data Structure   | Vector-based array   | Resizable deque         |
| Thread Safety    | Synchronized         | Not synchronized        |
| Performance      | Slower               | Faster                  |
| Versatility      | Stack only           | Stack + Queue + Deque   |
