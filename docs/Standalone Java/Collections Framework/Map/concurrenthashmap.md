---
sidebar_position: 5
title: ConcurrentHashMap
---

## ConcurrentHashMap in Java: A Key Tool for Parallel Test Automation

The `ConcurrentHashMap` is a thread-safe implementation of the `Map`
interface that allows concurrent read and write operations without
locking the entire map. It is particularly useful in test automation
frameworks where multiple threads (e.g., parallel test execution) need
to access or modify shared data safely.

------------------------------------------------------------------------

## Why Use ConcurrentHashMap in Automation Testing?

In parallel test execution (e.g., using TestNG, JUnit 5, or custom
threading), you often need to share mutable state between threads.

Examples:

-   Storing test results (pass/fail counts)
-   Caching API tokens or session IDs
-   Sharing configuration data across tests

Using a regular `HashMap` can lead to race conditions, while
`Collections.synchronizedMap()` locks the entire map and reduces
performance.

`ConcurrentHashMap` provides **fine‑grained concurrency**, making it
safe and performant.

------------------------------------------------------------------------

## Key Characteristics

-   Thread-safe concurrent operations
-   No global locking
-   High scalability under multi-threaded workloads
-   Does not allow `null` keys or values

------------------------------------------------------------------------

# Example 1: Tracking Test Results in Parallel Execution

``` java
import java.util.concurrent.ConcurrentHashMap;

public class TestResultTracker {

    private static final ConcurrentHashMap<String, String> testResults =
            new ConcurrentHashMap<>();

    public static void recordTestResult(String testName, String result) {
        testResults.put(testName, result);
    }

    public static void printResults() {
        testResults.forEach((testName, result) ->
                System.out.println(testName + ": " + result));
    }

    public static void main(String[] args) {

        Thread t1 = new Thread(() -> recordTestResult("TestA", "PASS"));
        Thread t2 = new Thread(() -> recordTestResult("TestB", "FAIL"));
        Thread t3 = new Thread(() -> recordTestResult("TestC", "PASS"));

        t1.start();
        t2.start();
        t3.start();

        try {
            t1.join();
            t2.join();
            t3.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        printResults();
    }
}
```

------------------------------------------------------------------------

# Example 2: Counting Failures Across Tests

``` java
import java.util.concurrent.ConcurrentHashMap;

public class FailureCounter {

    private static final ConcurrentHashMap<String, Integer> failureCount =
            new ConcurrentHashMap<>();

    public static void incrementFailure(String testName) {
        failureCount.merge(testName, 1, Integer::sum);
    }

    public static void printFailures() {
        failureCount.forEach((testName, count) ->
                System.out.println(testName + ": " + count + " failures"));
    }

    public static void main(String[] args) {

        Thread t1 = new Thread(() -> {
            incrementFailure("TestA");
            incrementFailure("TestA");
        });

        Thread t2 = new Thread(() -> incrementFailure("TestB"));

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        printFailures();
    }
}
```

------------------------------------------------------------------------

# Common Automation Use Cases

### Shared Data Between Threads

-   Store API tokens
-   Store browser sessions
-   Store environment configs

### Test Result Tracking

Maintain pass/fail status for tests executed in parallel.

### Counters and Metrics

Track:

-   retries
-   failures
-   API call counts

------------------------------------------------------------------------

# Best Practices

### 1. Avoid Additional Synchronization

`ConcurrentHashMap` is already thread-safe.

Do not wrap it in synchronized blocks.

------------------------------------------------------------------------

### 2. Use Atomic Operations

Useful methods:

-   `putIfAbsent()`
-   `computeIfAbsent()`
-   `merge()`
-   `replace()`

These prevent race conditions.

------------------------------------------------------------------------

### 3. Be Careful with Iteration

Iteration is **weakly consistent**.

If strict consistency is required, create a copy first.

------------------------------------------------------------------------

### 4. Handle Null Values

`ConcurrentHashMap` does not allow:

-   null keys
-   null values

Ensure your code validates inputs.

------------------------------------------------------------------------

# Comparison
| Feature         | ConcurrentHashMap     | synchronizedMap   | HashMap           |
|-----------------|-----------------------|-------------------|-------------------|
| Thread Safety   | Fine‑grained          | Global lock       | Not thread-safe   |
| Performance     | High                  | Low               | High (unsafe)     |
| Null Support    | Not allowed           | Allowed           | Allowed           |
| Best Use        | Parallel automation   | Legacy systems    | Single-thread apps|
------------------------------------------------------------------------

# When to Avoid ConcurrentHashMap

Avoid it when:

-   Application is single-threaded
-   Parallel execution is not used
-   Strict iteration consistency is required

------------------------------------------------------------------------

# Summary

`ConcurrentHashMap` is one of the most important data structures for
**parallel test automation frameworks**.

It provides:

-   safe concurrent access
-   high performance
-   scalable multi-threaded behavior

Use atomic operations like `merge()` and `computeIfAbsent()` to write
safe concurrent code.
