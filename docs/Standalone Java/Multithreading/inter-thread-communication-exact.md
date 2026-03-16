---
sidebar_position: 5
title: Inter-Thread Communication
---

# Inter-Thread Communication

Inter-thread communication allows threads to coordinate their actions by signaling each other. In Java, this is achieved using the `wait()`, `notify()`, and `notifyAll()` methods from the `Object` class. These methods are typically used in conjunction with synchronization.

---

## Key Concepts

1. **`wait()`**:
   - Causes the current thread to wait until another thread calls `notify()` or `notifyAll()` on the same object.
   - Must be called within a synchronized block or method.

2. **`notify()`**:
   - Wakes up a single thread that is waiting on the object's monitor.

3. **`notifyAll()`**:
   - Wakes up all threads that are waiting on the object's monitor.

---

## Example: Producer-Consumer Problem

The **Producer-Consumer Problem** is a classic example of inter-thread communication. The producer generates data and puts it into a shared buffer, while the consumer retrieves data from the buffer. Synchronization ensures that the producer doesn't add data when the buffer is full and the consumer doesn't retrieve data when the buffer is empty.

### Code Example

```java
class SharedBuffer {
    private int content;
    private boolean isEmpty = true;

    // Producer adds data to the buffer
    public synchronized void produce(int value) throws InterruptedException {
        while (!isEmpty) {
            wait(); // Wait until the buffer is empty
        }
        content = value;
        isEmpty = false;
        System.out.println("Produced: " + content);
        notify(); // Notify the consumer that data is available
    }

    // Consumer retrieves data from the buffer
    public synchronized int consume() throws InterruptedException {
        while (isEmpty) {
            wait(); // Wait until the buffer has data
        }
        isEmpty = true;
        System.out.println("Consumed: " + content);
        notify(); // Notify the producer that the buffer is empty
        return content;
    }
}

public class ProducerConsumerExample {
    public static void main(String[] args) {
        SharedBuffer buffer = new SharedBuffer();

        // Producer thread
        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++) {
                    buffer.produce(i);
                    Thread.sleep(1000); // Simulate production time
                }
            } catch (InterruptedException e) {
                System.out.println("Producer interrupted.");
            }
        });

        // Consumer thread
        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++) {
                    buffer.consume();
                    Thread.sleep(1000); // Simulate consumption time
                }
            } catch (InterruptedException e) {
                System.out.println("Consumer interrupted.");
            }
        });

        producer.start();
        consumer.start();
    }
}
```

**Output**:
```
Produced: 1
Consumed: 1
Produced: 2
Consumed: 2
Produced: 3
Consumed: 3
Produced: 4
Consumed: 4
Produced: 5
Consumed: 5
```

**Explanation**:
- The `produce()` method adds data to the buffer and notifies the consumer.
- The `consume()` method retrieves data from the buffer and notifies the producer.
- The `wait()` method ensures that the producer waits when the buffer is full and the consumer waits when the buffer is empty.

---

## Key Takeaways

- Use `wait()`, `notify()`, and `notifyAll()` for inter-thread communication.
- Always call these methods within a synchronized block or method.
- Solve coordination problems like the Producer-Consumer Problem using inter-thread communication.
