---
sidebar_position: 8
title: Advanced Topics
---

# Advanced Topics in Multithreading

This section explores advanced multithreading concepts that are essential for building robust and scalable applications. We’ll cover:
1. **Deadlocks**: Causes and prevention.
2. **`ThreadLocal`**: Thread-specific data storage.
3. **ForkJoin Framework**: Parallel processing using `ForkJoinPool`.

---

## 1. Deadlocks

A **deadlock** occurs when two or more threads are waiting for each other to release resources, resulting in a standstill.

### Example: Detecting and Resolving Deadlocks

```java
public class DeadlockExample {
    public static void main(String[] args) {
        final Object resource1 = new Object();
        final Object resource2 = new Object();

        // Thread 1
        Thread thread1 = new Thread(() -> {
            synchronized (resource1) {
                System.out.println("Thread 1: Holding resource 1...");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    System.out.println("Thread 1 interrupted.");
                }
                System.out.println("Thread 1: Waiting for resource 2...");
                synchronized (resource2) {
                    System.out.println("Thread 1: Holding resource 1 and resource 2.");
                }
            }
        });

        // Thread 2
        Thread thread2 = new Thread(() -> {
            synchronized (resource2) {
                System.out.println("Thread 2: Holding resource 2...");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    System.out.println("Thread 2 interrupted.");
                }
                System.out.println("Thread 2: Waiting for resource 1...");
                synchronized (resource1) {
                    System.out.println("Thread 2: Holding resource 2 and resource 1.");
                }
            }
        });

        thread1.start();
        thread2.start();
    }
}
```

**Output** (Potential Deadlock):
```
Thread 1: Holding resource 1...
Thread 2: Holding resource 2...
Thread 1: Waiting for resource 2...
Thread 2: Waiting for resource 1...
```

**Explanation**:
- Both threads hold one resource and wait for the other, causing a deadlock.
- To prevent deadlocks, acquire resources in a consistent order or use timeouts.

---

## 2. `ThreadLocal`

`ThreadLocal` provides thread-specific storage, ensuring that each thread has its own independent copy of a variable.

### Example: Using `ThreadLocal`

```java
public class ThreadLocalExample {
    // Create a ThreadLocal variable
    private static ThreadLocal<Integer> threadLocalValue = ThreadLocal.withInitial(() -> 0);

    public static void main(String[] args) {
        Runnable task = () -> {
            // Get the current thread's value
            int value = threadLocalValue.get();
            System.out.println(Thread.currentThread().getName() + " initial value: " + value);

            // Update the value
            threadLocalValue.set(value + 1);
            System.out.println(Thread.currentThread().getName() + " updated value: " + threadLocalValue.get());
        };

        // Create multiple threads
        Thread thread1 = new Thread(task, "Thread-1");
        Thread thread2 = new Thread(task, "Thread-2");

        thread1.start();
        thread2.start();
    }
}
```

**Output**:
```
Thread-1 initial value: 0
Thread-2 initial value: 0
Thread-1 updated value: 1
Thread-2 updated value: 1
```

**Explanation**:
- Each thread maintains its own copy of the `threadLocalValue` variable.
- Changes made by one thread do not affect the value seen by other threads.

---

## 3. ForkJoin Framework

The **ForkJoin Framework** is designed for parallel processing of tasks. It uses a `ForkJoinPool` to divide tasks into smaller subtasks and execute them concurrently.

### Example: Parallel Processing with `ForkJoinPool`

```java
import java.util.concurrent.RecursiveTask;
import java.util.concurrent.ForkJoinPool;

public class ForkJoinExample {
    public static void main(String[] args) {
        // Create a ForkJoinPool
        ForkJoinPool pool = new ForkJoinPool();

        // Define a task to compute the sum of numbers from 1 to 100
        SumTask task = new SumTask(1, 100);

        // Execute the task
        int result = pool.invoke(task);
        System.out.println("Sum of numbers from 1 to 100: " + result);
    }
}

// RecursiveTask to compute the sum of numbers
class SumTask extends RecursiveTask<Integer> {
    private int start;
    private int end;

    public SumTask(int start, int end) {
        this.start = start;
        this.end = end;
    }

    @Override
    protected Integer compute() {
        if (end - start <= 10) {
            // Base case: Compute the sum directly
            int sum = 0;
            for (int i = start; i <= end; i++) {
                sum += i;
            }
            return sum;
        } else {
            // Divide the task into two subtasks
            int mid = (start + end) / 2;
            SumTask leftTask = new SumTask(start, mid);
            SumTask rightTask = new SumTask(mid + 1, end);

            // Fork the left task and compute the right task
            leftTask.fork();
            int rightResult = rightTask.compute();
            int leftResult = leftTask.join();

            // Combine results
            return leftResult + rightResult;
        }
    }
}
```

**Output**:
```
Sum of numbers from 1 to 100: 5050
```

**Explanation**:
- The `ForkJoinPool` divides the task of summing numbers into smaller subtasks.
- Each subtask computes its portion of the sum, and the results are combined.

---

## Key Takeaways

- **Deadlocks**: Avoid deadlocks by acquiring resources in a consistent order or using timeouts.
- **`ThreadLocal`**: Use `ThreadLocal` for thread-specific data storage.
- **ForkJoin Framework**: Use the `ForkJoinPool` for parallel processing of tasks.
