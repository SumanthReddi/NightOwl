---
sidebar_position: 1
title: PriorityQueue 
---


## The `PriorityQueue` Class in Java

`PriorityQueue` is a **Queue implementation** that orders elements based
on **priority** rather than insertion order.

Unlike standard queues (FIFO), the element with the **highest priority**
(usually the smallest element) is processed first.

Internally, `PriorityQueue` uses a **binary heap** data structure.

------------------------------------------------------------------------

## Key Characteristics

-   **Priority-Based Ordering** -- Elements are ordered by natural order
    or comparator
-   **Duplicates Allowed**
-   **No Null Elements** -- Adding `null` throws `NullPointerException`
-   **Heap-Based Structure**
-   **Fast Head Access** -- `peek()` is constant time

------------------------------------------------------------------------

## Common Use Cases

-   Task scheduling systems
-   Job processing queues
-   Algorithms like **Dijkstra's shortest path**
-   Graph algorithms such as **Prim's MST**
-   Systems requiring **priority-based execution**

------------------------------------------------------------------------

## Important Methods
| Method         | Description                                 |
|----------------|---------------------------------------------|
| `add(E e)`     | Inserts element (throws exception if full)  |
| `offer(E e)`   | Inserts element (preferred in queues)       |
| `peek()`       | Retrieves head without removing             |
| `poll()`       | Retrieves and removes head                  |
| `size()`       | Returns number of elements                  |
| `isEmpty()`    | Checks if queue is empty                    |
| `clear()`      | Removes all elements                        |
------------------------------------------------------------------------

## Example 1: Basic Operations

``` java
import java.util.PriorityQueue;

public class PriorityQueueExample {

    public static void main(String[] args) {

        PriorityQueue<Integer> numbers = new PriorityQueue<>();

        numbers.add(5);
        numbers.add(3);
        numbers.add(8);

        System.out.println(numbers);

        System.out.println(numbers.peek());

        System.out.println(numbers.poll());
        System.out.println(numbers.poll());

        System.out.println(numbers);

    }
}
```

Output

    [3,5,8]
    3
    3
    5
    [8]

------------------------------------------------------------------------

## Example 2: Custom Comparator (Descending Order)

``` java
import java.util.Comparator;
import java.util.PriorityQueue;

public class CustomComparatorExample {

    public static void main(String[] args) {

        PriorityQueue<Integer> numbers =
                new PriorityQueue<>(Comparator.reverseOrder());

        numbers.add(5);
        numbers.add(3);
        numbers.add(8);

        System.out.println(numbers);

        System.out.println(numbers.poll());
        System.out.println(numbers.poll());

    }
}
```

Output

    [8,5,3]
    8
    5

------------------------------------------------------------------------

## Example 3: PriorityQueue with Objects

``` java
import java.util.PriorityQueue;

class Task implements Comparable<Task>{

    String name;
    int priority;

    Task(String name,int priority){
        this.name=name;
        this.priority=priority;
    }

    public int compareTo(Task other){
        return Integer.compare(this.priority,other.priority);
    }

    public String toString(){
        return name + "(" + priority + ")";
    }
}

public class PriorityQueueObjectExample{

    public static void main(String[] args){

        PriorityQueue<Task> tasks = new PriorityQueue<>();

        tasks.add(new Task("Task A",3));
        tasks.add(new Task("Task B",1));
        tasks.add(new Task("Task C",2));

        while(!tasks.isEmpty()){
            System.out.println(tasks.poll());
        }

    }
}
```

Output

    Task B(1)
    Task C(2)
    Task A(3)

------------------------------------------------------------------------

## Performance Characteristics

| Operation   | Complexity |
|-------------|------------|
| add()       | O(log n)   |
| poll()      | O(log n)   |
| remove()    | O(log n)   |
| peek()      | O(1)       |
| iteration   | O(n)       |

------------------------------------------------------------------------

## When to Use PriorityQueue

Use when:

-   Elements must be processed by **priority**
-   You need a **min-heap or max-heap**
-   Implementing **graph algorithms**

Avoid when:

-   Strict **FIFO order** is required
-   Ordered iteration is necessary

------------------------------------------------------------------------

## Comparison: PriorityQueue vs ArrayDeque vs LinkedList
| Feature         | PriorityQueue   | ArrayDeque      | LinkedList      |
|-----------------|-----------------|-----------------|-----------------|
| Order           | Priority        | FIFO            | FIFO / LIFO     |
| Performance     | O(log n)        | O(1)            | O(1)            |
| Null Elements   | Not allowed     | Not allowed     | Allowed         |
| Duplicates      | Allowed         | Allowed         | Allowed         |