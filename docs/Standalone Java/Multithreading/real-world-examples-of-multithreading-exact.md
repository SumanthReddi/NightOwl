---
sidebar_position: 9
title: Real-World Examples of Multithreading
---

# Real-World Examples of Multithreading

Multithreading is not just a theoretical concept—it’s a practical tool used to build robust applications and solve real-world problems. In this section, we’ll explore real-world examples of multithreading in standalone Java programs.

---

## 1. Example: Simulating a Banking System with Concurrent Transactions

In a banking system, multiple transactions (e.g., deposits and withdrawals) may occur concurrently. Proper synchronization ensures that account balances remain consistent.

### Code Example: Concurrent Transactions

```java
class BankAccount {
    private int balance;

    public BankAccount(int initialBalance) {
        this.balance = initialBalance;
    }

    // Synchronized method to ensure thread safety
    public synchronized void deposit(int amount) {
        balance += amount;
        System.out.println(Thread.currentThread().getName() + " deposited " + amount + ". New balance: " + balance);
    }

    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " withdrew " + amount + ". New balance: " + balance);
        } else {
            System.out.println(Thread.currentThread().getName() + " failed to withdraw " + amount + ". Insufficient balance.");
        }
    }
}

public class BankingSystemExample {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);

        // Thread for deposits
        Thread depositThread = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                account.deposit(100);
                try {
                    Thread.sleep(200); // Simulate delay
                } catch (InterruptedException e) {
                    System.out.println("Deposit thread interrupted.");
                }
            }
        }, "Deposit-Thread");

        // Thread for withdrawals
        Thread withdrawThread = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                account.withdraw(150);
                try {
                    Thread.sleep(300); // Simulate delay
                } catch (InterruptedException e) {
                    System.out.println("Withdrawal thread interrupted.");
                }
            }
        }, "Withdrawal-Thread");

        depositThread.start();
        withdrawThread.start();
    }
}
```

**Output**:
```
Deposit-Thread deposited 100. New balance: 1100
Withdrawal-Thread withdrew 150. New balance: 950
Deposit-Thread deposited 100. New balance: 1050
Withdrawal-Thread withdrew 150. New balance: 900
...
```

**Explanation**:
- The `BankAccount` class uses synchronized methods to ensure thread-safe deposits and withdrawals.
- Two threads simulate concurrent transactions, maintaining consistency in the account balance.

---

## 2. Example: Building a Web Crawler Using Multithreading

A web crawler fetches data from multiple URLs concurrently. Multithreading improves performance by fetching multiple pages simultaneously.

### Code Example: Multithreaded Web Crawler

```java
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class WebCrawlerExample {
    public static void main(String[] args) {
        String[] urls = {
            "https://example.com/page1",
            "https://example.com/page2",
            "https://example.com/page3"
        };

        // Create a fixed thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (String url : urls) {
            executor.submit(() -> {
                try {
                    URL site = new URL(url);
                    HttpURLConnection connection = (HttpURLConnection) site.openConnection();
                    connection.setRequestMethod("GET");
                    int responseCode = connection.getResponseCode();
                    System.out.println(Thread.currentThread().getName() + " fetched " + url + " with response code: " + responseCode);
                } catch (Exception e) {
                    System.out.println("Error fetching " + url + ": " + e.getMessage());
                }
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
pool-1-thread-1 fetched https://example.com/page1 with response code: 200
pool-1-thread-2 fetched https://example.com/page2 with response code: 200
pool-1-thread-3 fetched https://example.com/page3 with response code: 200
```

**Explanation**:
- A fixed thread pool fetches multiple URLs concurrently using the `ExecutorService`.
- Each thread fetches a URL and prints its HTTP response code.

---

## Key Takeaways

- Use multithreading to handle concurrent transactions in systems like banking.
- Build scalable applications like web crawlers by leveraging thread pools for parallel processing.
- Always ensure thread safety when working with shared resources (e.g., synchronized methods).
