---
sidebar_position: 6
title: Thread Pools
---

# Thread Pools

A **thread pool** is a collection of pre-created, reusable threads that execute tasks concurrently. Instead of creating a new thread for each task (which can be resource-intensive), thread pools reuse existing threads, improving performance and scalability.

In Java, the `ExecutorService` framework provides a robust way to manage thread pools.

---

## Why Use Thread Pools?

- **Efficiency**: Reusing threads reduces the overhead of thread creation and destruction.
- **Scalability**: Limits the number of concurrent threads, preventing system overload.
- **Ease of Use**: Simplifies thread management with built-in methods like `submit()` and `shutdown()`.

---

## Types of Thread Pools

The `Executors` class provides factory methods to create different types of thread pools:
1. **Fixed Thread Pool**: A pool with a fixed number of threads.
2. **Cached Thread Pool**: Creates new threads as needed but reuses idle threads.
3. **Scheduled Thread Pool**: Executes tasks after a delay or at fixed intervals.

---

## Example: Using a Fixed Thread Pool

Below is an example of using a fixed thread pool to execute multiple tasks concurrently.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
    public static void main(String[] args) {
        // Create a fixed thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // Submit tasks to the thread pool
        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " is running on thread " + Thread.currentThread().getName());
                try {
                    Thread.sleep(1000); // Simulate task execution time
                } catch (InterruptedException e) {
                    System.out.println("Task interrupted.");
                }
                System.out.println("Task " + taskId + " completed.");
            });
        }

        // Shutdown the executor after all tasks are submitted
        executor.shutdown();
        System.out.println("All tasks submitted. Waiting for completion...");
    }
}
```

**Output**:
```
All tasks submitted. Waiting for completion...
Task 1 is running on thread pool-1-thread-1
Task 2 is running on thread pool-1-thread-2
Task 3 is running on thread pool-1-thread-3
Task 1 completed.
Task 4 is running on thread pool-1-thread-1
Task 2 completed.
Task 5 is running on thread pool-1-thread-2
Task 3 completed.
Task 4 completed.
Task 5 completed.
```

**Explanation**:
- A fixed thread pool with 3 threads is created using `Executors.newFixedThreadPool(3)`.
- Five tasks are submitted to the pool. Since there are only 3 threads, tasks are executed concurrently in batches.
- The `shutdown()` method ensures that the executor stops accepting new tasks after all submitted tasks are completed.

---

## Key Takeaways

- Use thread pools to manage threads efficiently and improve application performance.
- The `ExecutorService` framework simplifies thread pool management.
- Common thread pool types include fixed, cached, and scheduled thread pools.
- Always call `shutdown()` to terminate the executor gracefully.
