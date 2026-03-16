---
sidebar_position: 4
title: Thread Synchronization
---

# Thread Synchronization

Thread synchronization ensures that only one thread can access a shared resource at a time, preventing issues like **race conditions** and **data inconsistency**. In Java, synchronization is achieved using the `synchronized` keyword.

---

## Why Use Synchronization?

- **Race Conditions**: Occur when multiple threads access shared data concurrently, leading to unpredictable results.
- **Data Consistency**: Ensures that shared resources are accessed in a controlled manner.

---

## Using the `synchronized` Keyword

The `synchronized` keyword can be applied to:
1. **Methods**: Ensures that only one thread can execute the method at a time.
2. **Blocks**: Locks a specific block of code for exclusive access.

---

## Example: Preventing Race Conditions

Below is an example of two threads incrementing a shared counter without and with synchronization.

### Without Synchronization (Race Condition)

```java
class Counter {
    private int count = 0;

    public void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class RaceConditionExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Runnable task = () -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        };

        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);

        thread1.start();
        thread2.start();

        thread1.join();
        thread2.join();

        System.out.println("Final Count: " + counter.getCount());
    }
}
```

**Output** (Unpredictable):
```
Final Count: 1987 (or some other inconsistent value)
```

**Explanation**:
- Both threads access and modify the `count` variable concurrently, leading to a race condition.

---

### With Synchronization (Thread Safety)

```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizationExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Runnable task = () -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        };

        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);

        thread1.start();
        thread2.start();

        thread1.join();
        thread2.join();

        System.out.println("Final Count: " + counter.getCount());
    }
}
```

**Output**:
```
Final Count: 2000
```

**Explanation**:
- The `synchronized` keyword ensures that only one thread can execute the `increment()` method at a time, preventing race conditions.

---

## Key Takeaways

- Use synchronization to prevent race conditions and ensure data consistency.
- Apply the `synchronized` keyword to methods or blocks to control access to shared resources.
- Avoid overusing synchronization, as it can lead to performance bottlenecks.
