---
sidebar_position: 1
title: Introduction to Multithreading
---

# Introduction to Multithreading

Multithreading allows a program to perform multiple tasks concurrently, improving performance and responsiveness. In Java, threads are lightweight processes that share the same memory space, making them ideal for parallel execution.

---

## What Is Multithreading?

Multithreading is a programming technique where multiple threads (smaller units of a process) run concurrently within a single program. Each thread performs a specific task independently or collaboratively.

---

## Why Use Multithreading?

- **Concurrency**: Perform multiple tasks simultaneously.
- **Performance**: Utilize multi-core processors effectively.
- **Responsiveness**: Keep applications responsive while performing background tasks.

---

## Example: Simple Multithreading

Below is an example of two threads running concurrently:

```java
class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try {
                Thread.sleep(500); // Sleep for 500ms
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }
}

public class MultithreadingExample {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        MyThread thread2 = new MyThread();

        thread1.setName("Thread-1");
        thread2.setName("Thread-2");

        thread1.start(); // Start thread1
        thread2.start(); // Start thread2
    }
}
```

**Output**:
```
Thread-1: 1
Thread-2: 1
Thread-1: 2
Thread-2: 2
...
```

**Explanation**:
- Two threads (`thread1` and `thread2`) run concurrently, printing numbers from 1 to 5.
- The `start()` method begins thread execution, invoking the `run()` method.