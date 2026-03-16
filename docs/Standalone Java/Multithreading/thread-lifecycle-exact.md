---
sidebar_position: 3
title: Thread Lifecycle
---

# Thread Lifecycle

In Java, every thread goes through a series of states during its lifetime. Understanding the thread lifecycle is crucial for managing threads effectively.

---

## Thread States

The lifecycle of a thread consists of the following states:

1. **New**:
   - The thread is created but not yet started.
   - Example: `Thread thread = new Thread();`

2. **Runnable**:
   - The thread is ready to run and waiting for CPU time.
   - Transition occurs when the `start()` method is called.

3. **Running**:
   - The thread is actively executing its `run()` method.

4. **Blocked/Waiting**:
   - The thread is paused or waiting for a resource or another thread.
   - Causes include synchronization, `sleep()`, or `wait()`.

5. **Terminated**:
   - The thread has completed execution or was terminated.

---

## State Transitions

Below is a diagram of the thread lifecycle:

```
New → Runnable → Running → Blocked/Waiting → Terminated
```

---

## Example: Demonstrating Thread Lifecycle

The following example demonstrates how a thread transitions through its lifecycle:

```java
class LifecycleThread extends Thread {
    public void run() {
        System.out.println("Thread is running: " + Thread.currentThread().getName());
        try {
            Thread.sleep(1000); // Simulate work (Blocked/Waiting state)
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted.");
        }
        System.out.println("Thread finished: " + Thread.currentThread().getName());
    }
}

public class ThreadLifecycleExample {
    public static void main(String[] args) throws InterruptedException {
        LifecycleThread thread = new LifecycleThread();

        System.out.println("State after creation: " + thread.getState()); // New

        thread.start();
        System.out.println("State after start(): " + thread.getState()); // Runnable

        Thread.sleep(500); // Allow the thread to enter the Running state
        System.out.println("State during execution: " + thread.getState()); // Running or Blocked/Waiting

        thread.join(); // Wait for the thread to finish
        System.out.println("State after termination: " + thread.getState()); // Terminated
    }
}
```

**Output**:
```
State after creation: NEW
State after start(): RUNNABLE
Thread is running: Thread-0
State during execution: TIMED_WAITING
Thread finished: Thread-0
State after termination: TERMINATED
```

**Explanation**:
- The thread starts in the **New** state.
- After calling `start()`, it transitions to the **Runnable** state.
- During execution, it may enter the **Blocked/Waiting** state (e.g., due to `sleep()`).
- Finally, the thread enters the **Terminated** state after completing its task.

---

## Key Takeaways

- A thread transitions through the following states: **New**, **Runnable**, **Running**, **Blocked/Waiting**, and **Terminated**.
- Use methods like `start()`, `sleep()`, and `join()` to manage thread states.
- Always check the thread's state using `getState()` for debugging purposes.
