---
sidebar_position: 3
title: Iterable Interface
---
<!-- # 03-iterable-interface -->

## The `Iterable` Interface in Java

The `Iterable` interface is the foundation of iteration in Java. It is
implemented by all collection types (e.g., `List`, `Set`, `Queue`) and
enables the use of enhanced for-loops (`for (T t : iterable)`) and
streams (`stream()`). Understanding `Iterable` is essential for working
with collections effectively.

------------------------------------------------------------------------

## Key Characteristics of `Iterable`

-   **Single Abstract Method**: Defines the `iterator()` method.
-   **Enhanced For-Loop**: Enables iteration without explicitly creating
    an `Iterator`.
-   **Stream Support**: Required for creating streams (`stream()` and
    `parallelStream()`).

------------------------------------------------------------------------

## Methods in the `Iterable` Interface
| Method                                               | Description                                                              |
|------------------------------------------------------|--------------------------------------------------------------------------|
| `Iterator<T> iterator()`                             | Returns an iterator over the elements                                    |
| `default void forEach(Consumer<? super T> action)`   | Performs the given action for each element (Java 8+)                     |
| `default Spliterator<T> spliterator()`               | Creates a Spliterator for parallel traversal (Java 8+)                   |
------------------------------------------------------------------------

## Code Examples

### Example 1: Enhanced For-Loop

``` java
import java.util.*;

public class IterableExample {

    public static void main(String[] args) {

        List<String> fruits = Arrays.asList("Apple", "Banana", "Cherry");

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

------------------------------------------------------------------------

### Example 2: Using forEach

``` java
import java.util.*;

public class ForEachExample {

    public static void main(String[] args) {

        List<String> fruits = Arrays.asList("Apple", "Banana", "Cherry");

        fruits.forEach(fruit -> System.out.println(fruit));
    }
}
```

------------------------------------------------------------------------

### Example 3: Custom Iterable Implementation

``` java
import java.util.*;

class Countdown implements Iterable<Integer> {

    private final int start;

    public Countdown(int start) {
        this.start = start;
    }

    @Override
    public Iterator<Integer> iterator() {

        return new Iterator<>() {

            private int current = start;

            @Override
            public boolean hasNext() {
                return current > 0;
            }

            @Override
            public Integer next() {

                if (!hasNext()) {
                    throw new NoSuchElementException();
                }

                return current--;
            }
        };
    }
}

public class CustomIterableExample {

    public static void main(String[] args) {

        Countdown countdown = new Countdown(5);

        for (int i : countdown) {
            System.out.println(i);
        }
    }
}
```

------------------------------------------------------------------------

## Why `Iterable` Matters

-   **Uniform Iteration**: Enables consistent iteration across all
    collections.
-   **Integration with Modern APIs**: Required for streams (`stream()`
    and `parallelStream()`).
-   **Custom Types**: Allows custom types to integrate seamlessly with
    the Collection Framework.
