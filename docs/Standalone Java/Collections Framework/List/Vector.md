---
sidebar_position: 3
title: Vector
---


## The `Vector` Class in Java

The `Vector` class is one of the oldest implementations of the `List`
interface in the Java Collection Framework. It was introduced in Java
1.0 and represents a **dynamic array** similar to `ArrayList`. However,
unlike `ArrayList`, `Vector` is **synchronized**, making it thread-safe.

------------------------------------------------------------------------

## Key Characteristics of `Vector`

-   **Synchronized** (thread-safe)
-   **Dynamic resizing**
-   **Legacy collection**
-   **Slower than ArrayList** due to synchronization

------------------------------------------------------------------------

## Common Use Cases

-   Legacy systems
-   Situations requiring **built‑in synchronization**
-   When explicit thread safety is needed without wrappers

------------------------------------------------------------------------

## Important Methods
| Method                                | Description                   |
|---------------------------------------|-------------------------------|
| `addElement(E obj)`                   | Adds element to vector        |
| `elementAt(int index)`                | Returns element at index      |
| `insertElementAt(E obj, int index)`   | Inserts element at index      |
| `removeElementAt(int index)`          | Removes element at index      |
| `removeAllElements()`                 | Clears vector                 |
| `capacity()`                          | Returns internal capacity     |
| `setSize(int newSize)`                 | Changes size                  |
------------------------------------------------------------------------

## Example 1: Basic Vector Operations

``` java
import java.util.Vector;

public class VectorExample {

    public static void main(String[] args) {

        Vector<String> fruits = new Vector<>();

        fruits.addElement("Apple");
        fruits.addElement("Banana");
        fruits.addElement("Cherry");

        System.out.println(fruits);

        System.out.println("First fruit: " + fruits.elementAt(0));

        fruits.set(1,"Mango");

        System.out.println("After replace: " + fruits);

        fruits.remove("Cherry");

        System.out.println("After removal: " + fruits);
    }
}
```

------------------------------------------------------------------------

## Example 2: Capacity Growth

``` java
import java.util.Vector;

public class VectorCapacityExample {

    public static void main(String[] args) {

        Vector<Integer> numbers = new Vector<>(2);

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        System.out.println(numbers);

        System.out.println("Capacity: " + numbers.capacity());
    }
}
```

------------------------------------------------------------------------

## Example 3: Thread‑Safe Iteration

``` java
import java.util.Vector;

public class VectorThreadSafetyExample {

    public static void main(String[] args) {

        Vector<String> tasks = new Vector<>();

        tasks.add("Task 1");
        tasks.add("Task 2");

        synchronized(tasks) {
            for(String task : tasks) {
                System.out.println(task);
            }
        }
    }
}
```

------------------------------------------------------------------------

## Performance Characteristics

| Operation   | Complexity        |
|-------------|-------------------|
| get()       | O(1)              |
| set()       | O(1)              |
| add()       | O(1) amortized    |
| remove()    | O(n)              |

Synchronization overhead makes operations slower than `ArrayList`.

------------------------------------------------------------------------

## When to Use Vector

Use **Vector** when:

-   Legacy APIs require it
-   Built‑in synchronization is necessary

Prefer alternatives:

-   `ArrayList`
-   `Collections.synchronizedList()`
-   `CopyOnWriteArrayList`

------------------------------------------------------------------------

## Vector vs ArrayList
| Feature         | Vector             | ArrayList           |
|-----------------|--------------------|---------------------|
| Thread Safety   | Synchronized       | Not synchronized    |
| Performance     | Slower             | Faster              |
| Resizing        | Doubles capacity   | Grows by ~50%       |
| Introduced      | Java 1.0           | Java 1.2            |