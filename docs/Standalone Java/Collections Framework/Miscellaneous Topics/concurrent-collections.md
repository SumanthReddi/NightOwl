---
sidebar_position: 1
title: Concurrent Collections
---
<!-- # 01-concurrent-collections -->

## Concurrent Collections in Java

Concurrent collections are specialized implementations of the Java
Collection Framework designed for **thread-safe** operations in
multi-threaded environments. Unlike their non-concurrent counterparts
(e.g., `ArrayList`, `HashMap`), concurrent collections provide
mechanisms to handle concurrent access without explicit synchronization,
making them highly efficient and scalable.

------------------------------------------------------------------------

## Key Characteristics of Concurrent Collections

-   **Thread Safety**: Designed to handle concurrent read and write
    operations safely.
-   **Scalability**: Optimized for high-performance in multi-threaded
    environments.
-   **Lock-Free or Fine-Grained Locking**: Many concurrent collections
    use lock-free algorithms or fine-grained locking to minimize
    contention.
-   **No External Synchronization Required**: Unlike synchronized
    wrappers (e.g., `Collections.synchronizedList()`), concurrent
    collections manage thread safety internally.

------------------------------------------------------------------------

## Common Concurrent Collections in Java

### 1. ConcurrentHashMap

-   A thread-safe implementation of `Map`.
-   Supports concurrent reads and writes without locking the entire map.
-   Provides atomic operations like `putIfAbsent()` and
    `computeIfAbsent()`.

``` java
import java.util.concurrent.ConcurrentHashMap;

public class ConcurrentHashMapExample {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

        map.put("Alice", 95);
        map.put("Bob", 87);

        map.putIfAbsent("Alice", 100);
        map.putIfAbsent("Charlie", 92);

        System.out.println("Map: " + map);
    }
}
```

------------------------------------------------------------------------

### 2. CopyOnWriteArrayList

-   Thread-safe variant of `List`.
-   Creates a new copy of the array for every modification.
-   Ideal for **read-heavy and write-light scenarios**.

``` java
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class CopyOnWriteArrayListExample {
    public static void main(String[] args) {

        List<String> list = new CopyOnWriteArrayList<>();

        list.add("Apple");
        list.add("Banana");

        for (String fruit : list) {
            System.out.println(fruit);
            list.add("Cherry");
        }

        System.out.println("Final List: " + list);
    }
}
```

------------------------------------------------------------------------

### 3. ConcurrentLinkedQueue

-   Lock-free thread-safe queue.
-   Best suited for **high concurrency environments** and
    producer-consumer patterns.

``` java
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

public class ConcurrentLinkedQueueExample {
    public static void main(String[] args) {

        Queue<String> queue = new ConcurrentLinkedQueue<>();

        queue.offer("Alice");
        queue.offer("Bob");

        System.out.println("Poll: " + queue.poll());
        System.out.println("Remaining: " + queue);
    }
}
```

------------------------------------------------------------------------

### 4. BlockingQueue Implementations

Includes:

-   `ArrayBlockingQueue`
-   `LinkedBlockingQueue`
-   `PriorityBlockingQueue`

Blocking queues support **thread coordination** using methods like:
| Method      | Behavior                         |
|-------------|----------------------------------|
| `put()`     | Waits if queue is full           |
| `take()`    | Waits if queue is empty          |
| `offer()`   | Inserts without blocking         |
| `poll()`    | Retrieves without blocking       |

``` java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class BlockingQueueExample {
    public static void main(String[] args) throws InterruptedException {

        BlockingQueue<String> queue = new ArrayBlockingQueue<>(10);

        Thread producer = new Thread(() -> {
            try {
                queue.put("Message");
                System.out.println("Produced: Message");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        Thread consumer = new Thread(() -> {
            try {
                String message = queue.take();
                System.out.println("Consumed: " + message);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        producer.start();
        consumer.start();

        producer.join();
        consumer.join();
    }
}
```

------------------------------------------------------------------------

### 5. ConcurrentSkipListMap and ConcurrentSkipListSet

-   Thread-safe sorted collections.
-   Based on **Skip List data structure**.
-   Provide concurrent alternatives to `TreeMap` and `TreeSet`.

------------------------------------------------------------------------

## Performance Characteristics

-   **Read Operations**: Fast and often lock-free.
-   **Write Operations**: Slightly slower than non-concurrent
    collections due to internal synchronization.
-   **Memory Usage**: Higher due to internal concurrency control
    mechanisms.

------------------------------------------------------------------------

## When to Use Concurrent Collections

Use concurrent collections when:

-   Multiple threads access shared collections
-   Thread safety is required
-   High concurrency performance is important

Avoid when:

-   Application is strictly single-threaded
-   Synchronization overhead is unnecessary

------------------------------------------------------------------------

## Concurrent vs Non-Concurrent Collections
| Feature                         | Concurrent Collections   | Non-Concurrent Collections         |
|---------------------------------|--------------------------|-------------------------------------|
| Thread Safety                   | Built-in                 | Requires external synchronization   |
| Performance in Multithreading   | High                     | Low                                 |
| Scalability                     | High                     | Limited                             |
| Typical Usage                   | Multi-threaded apps      | Single-threaded apps                |
------------------------------------------------------------------------

## Summary

Concurrent collections provide:

1.  Built-in thread safety
2.  High scalability in multi-threaded systems
3.  Lock-free or fine-grained locking strategies
4.  Efficient concurrent data structures for modern applications
