---
sidebar_position: 10
title: Frequently Asked Questions (FAQs)
---

# Frequently Asked Questions (FAQs) on Multithreading

This section addresses common questions and misconceptions about multithreading in Java. These FAQs aim to clarify doubts and provide actionable insights for developers.

---

## 1. What is the difference between a process and a thread?

- **Process**:
  - A process is an independent program with its own memory space.
  - Processes are isolated from each other.
- **Thread**:
  - A thread is a lightweight unit of execution within a process.
  - Threads share the same memory space, making communication between threads easier but requiring synchronization.

---

## 2. Why does my program sometimes behave unpredictably with multiple threads?

Unpredictable behavior often occurs due to **race conditions**, where multiple threads access shared data concurrently without proper synchronization. Use `synchronized` blocks or concurrent collections to ensure thread safety.

---

## 3. How do I debug a deadlock?

To debug a deadlock:
1. Identify threads that are waiting indefinitely for resources.
2. Use tools like **thread dumps** (e.g., `jstack`) to analyze thread states.
3. Avoid deadlocks by acquiring resources in a consistent order or using timeouts.

---

## 4. When should I use `ThreadLocal`?

Use `ThreadLocal` when each thread needs its own independent copy of a variable. It’s useful for scenarios like:
- Storing user-specific data in a web application.
- Avoiding contention on shared variables.

---

## 5. What is the difference between `notify()` and `notifyAll()`?

- **`notify()`**:
  - Wakes up a single thread waiting on the object's monitor.
  - Useful when only one thread can proceed.
- **`notifyAll()`**:
  - Wakes up all threads waiting on the object's monitor.
  - Useful when multiple threads need to be notified.

---

## 6. Why should I use thread pools instead of creating new threads?

Creating new threads for every task is resource-intensive and can lead to performance bottlenecks. Thread pools:
- Reuse threads, reducing overhead.
- Limit the number of concurrent threads, preventing system overload.

---

## 7. How do I handle exceptions in threads?

Uncaught exceptions in threads can terminate the thread silently. To handle exceptions:
- Use a `try-catch` block inside the `run()` method.
- Set a custom `UncaughtExceptionHandler` for the thread.

### Example: Handling Exceptions in Threads

```java
public class ExceptionHandlingExample {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            try {
                System.out.println("Thread running...");
                throw new RuntimeException("Exception in thread.");
            } catch (Exception e) {
                System.out.println("Caught exception: " + e.getMessage());
            }
        });

        thread.setUncaughtExceptionHandler((t, e) -> {
            System.out.println("Uncaught exception in thread " + t.getName() + ": " + e.getMessage());
        });

        thread.start();
    }
}
```

**Output**:
```
Thread running...
Caught exception: Exception in thread.
```

---

## 8. What is the ForkJoin Framework used for?

The ForkJoin Framework is used for parallel processing of tasks that can be divided into smaller subtasks. It’s ideal for:
- Recursive algorithms (e.g., sorting, searching).
- CPU-intensive tasks that benefit from multi-core processors.

---

## Key Takeaways

- Use synchronization to prevent race conditions and ensure thread safety.
- Debug deadlocks using thread dumps and avoid them by acquiring resources in a consistent order.
- Use `ThreadLocal` for thread-specific data storage.
- Prefer thread pools over creating new threads for better performance and scalability.
- Handle exceptions in threads using `try-catch` or `UncaughtExceptionHandler`.
