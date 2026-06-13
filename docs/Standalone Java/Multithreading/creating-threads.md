---
sidebar_position: 2
title: Creating Threads
---

# Creating Threads

In Java, there are two primary ways to create threads:
1. **Extending the `Thread` class**.
2. **Implementing the `Runnable` interface**.

Both approaches allow you to define the task a thread should execute using the `run()` method.

---

## 1. Extending the `Thread` Class

To create a thread by extending the `Thread` class, override its `run()` method. The `start()` method is used to begin execution.

### Example: Extending the `Thread` Class

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.setName("MyThread-1");
        thread.start(); // Start the thread
    }
}
```

**Output**:
```
Thread running: MyThread-1
```

**Explanation**:
- The `MyThread` class extends `Thread` and overrides the `run()` method.
- The `start()` method invokes the `run()` method in a new thread.

---

## 2. Implementing the `Runnable` Interface

The `Runnable` interface provides a more flexible way to create threads. It allows a class to define the `run()` method without inheriting from `Thread`.

### Example: Implementing the `Runnable` Interface

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable(), "MyRunnable-1");
        thread.start(); // Start the thread
    }
}
```

**Output**:
```
Thread running: MyRunnable-1
```

**Explanation**:
- The `MyRunnable` class implements the `Runnable` interface and defines the `run()` method.
- A `Thread` object is created with the `Runnable` instance, and the `start()` method begins execution.

---

## Key Differences Between the Two Approaches

| **Aspect**              | **Extending `Thread`**                          | **Implementing `Runnable`**                     |
|--------------------------|------------------------------------------------|-----------------------------------------------|
| **Inheritance**         | Limits flexibility (Java does not support multiple inheritance). | More flexible (can extend another class).      |
| **Use Case**            | Suitable for simple thread creation.           | Preferred for complex applications.            |

---

## Key Takeaways

- Use the `Thread` class for quick and simple thread creation.
- Use the `Runnable` interface for better flexibility and reusability.
- Always call the `start()` method to begin thread execution (not the `run()` method directly).
