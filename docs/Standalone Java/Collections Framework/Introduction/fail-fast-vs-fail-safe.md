---
sidebar_position: 4
title: Fail-Fast vs Fail-Safe Iterators
---

## Fail-Fast vs Fail-Safe Iterators in Java

Iterators in Java are used to traverse collections. However, their
behavior differs based on whether they are **fail-fast** or
**fail-safe**. Understanding these differences is crucial for avoiding
runtime exceptions like `ConcurrentModificationException`.

------------------------------------------------------------------------

## Fail-Fast Iterators

-   **Definition**: Detect structural modifications to the collection
    during iteration and throw a `ConcurrentModificationException`.
-   **Examples**: Iterators returned by `ArrayList`, `HashSet`, and
    `HashMap`.

### How Fail-Fast Works

-   Maintains an internal modification count (`modCount`).
-   If the collection is modified outside the iterator (for example
    using `add()` or `remove()`), the iterator detects the change.

### Example: Fail-Fast Behavior

``` java
import java.util.*;

public class FailFastExample {

    public static void main(String[] args) {

        List<String> fruits = new ArrayList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        Iterator<String> it = fruits.iterator();

        while (it.hasNext()) {

            String fruit = it.next();

            if (fruit.equals("Banana")) {
                fruits.remove(fruit);   // Throws ConcurrentModificationException
            }
        }
    }
}
```

Tip: To avoid `ConcurrentModificationException`, use the iterator's
`remove()` method.

------------------------------------------------------------------------

## Fail-Safe Iterators

-   **Definition**: Do not throw `ConcurrentModificationException`
    because they iterate over a copy of the collection.
-   **Examples**: `CopyOnWriteArrayList`, `ConcurrentHashMap`.

### How Fail-Safe Works

-   Works on a snapshot of the collection.
-   Changes to the original collection do not affect the iterator.

### Example: Fail-Safe Behavior

``` java
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.Iterator;

public class FailSafeExample {

    public static void main(String[] args) {
        CopyOnWriteArrayList<String> fruits = new CopyOnWriteArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        Iterator<String> it = fruits.iterator();
        while (it.hasNext()) {
            String fruit = it.next();
            if (fruit.equals("Banana")) {
                fruits.remove("Cherry"); // No exception
            }
        }
        
        System.out.println(fruits);     // → [Apple, Banana]
    }
}
```

------------------------------------------------------------------------

## Comparison Table
| Feature                 | Fail-Fast                                     | Fail-Safe                         |
|-------------------------|-----------------------------------------------|-----------------------------------|
| Modification Detection  | Throws `ConcurrentModificationException`      | Does not throw exception          |
| Performance             | Faster                                        | Slightly slower                   |
| Collection Copy         | No                                            | Yes                               |
| Use Case                | Single-threaded environments                  | Multithreaded environments        |
------------------------------------------------------------------------

## Key Takeaways

-   **Fail-Fast** iterators detect structural modifications quickly.
-   **Fail-Safe** iterators operate on a copy and allow concurrent
    modifications.
-   Choose based on the **threading model and safety requirements** of
    your application.
