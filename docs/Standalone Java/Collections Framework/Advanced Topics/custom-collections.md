---
sidebar_position: 1
title: Custom Collections
---
<!-- # 01-custom-collections -->

## Implementing Custom Collections in Java

While the Java Collections Framework provides many predefined collection
types, there are situations where you may want to build a **custom
collection**. This can help you enforce domain rules, add additional
behavior, or optimize for a specific use case.

Custom collections are typically implemented by **extending existing
interfaces or abstract classes** such as:

-   `Collection`
-   `List`
-   `Set`
-   `AbstractCollection`
-   `AbstractList`
-   `AbstractSet`

------------------------------------------------------------------------

## Key Steps for Implementing Custom Collections

### 1. Choose the Appropriate Interface

Decide which collection type best represents the behavior you want.

Examples:

-   Use **List** when order and index access matter
-   Use **Set** when duplicates must be prevented
-   Use **Collection** for generic collection behavior

------------------------------------------------------------------------

### 2. Extend Abstract Classes

Instead of implementing everything from scratch, extend helper classes
like:

-   `AbstractList`
-   `AbstractSet`
-   `AbstractCollection`

These provide partial implementations and reduce boilerplate code.

------------------------------------------------------------------------

### 3. Implement Required Methods

You must implement essential methods depending on the class you extend.

Common ones include:

-   `get()`
-   `set()`
-   `iterator()`
-   `size()`

------------------------------------------------------------------------

### 4. Override Optional Methods

For performance improvements you may override:

-   `contains()`
-   `add()`
-   `remove()`
-   `size()`

------------------------------------------------------------------------

### 5. Consider Thread Safety

If your collection will be used in multi‑threaded environments:

-   Add synchronization
-   Use concurrent utilities
-   Or clearly document that the class is **not thread‑safe**

------------------------------------------------------------------------

# Example 1: Creating a Custom List

This example creates a **fixed-size list** by extending `AbstractList`.

``` java
import java.util.AbstractList;

public class FixedSizeList<E> extends AbstractList<E> {

    private final E[] elements;

    @SuppressWarnings("unchecked")
    public FixedSizeList(int size) {
        elements = (E[]) new Object[size];
    }

    @Override
    public E get(int index) {
        if(index < 0 || index >= elements.length){
            throw new IndexOutOfBoundsException();
        }
        return elements[index];
    }

    @Override
    public E set(int index, E element) {
        if(index < 0 || index >= elements.length){
            throw new IndexOutOfBoundsException();
        }

        E old = elements[index];
        elements[index] = element;
        return old;
    }

    @Override
    public int size() {
        return elements.length;
    }
}
```

### Usage Example

``` java
public class CustomListExample {

    public static void main(String[] args) {

        FixedSizeList<String> list = new FixedSizeList<>(5);

        list.set(0,"Apple");
        list.set(1,"Banana");
        list.set(2,"Cherry");

        System.out.println(list.get(1));

        for(int i=0;i<list.size();i++){
            System.out.println(list.get(i));
        }
    }
}
```

------------------------------------------------------------------------

# Example 2: Creating a Custom Set

This example wraps a `HashSet` and adds **logging behavior**.

``` java
import java.util.AbstractSet;
import java.util.HashSet;
import java.util.Iterator;

public class LoggingSet<E> extends AbstractSet<E> {

    private final HashSet<E> delegate = new HashSet<>();

    @Override
    public boolean add(E e) {
        System.out.println("Adding: " + e);
        return delegate.add(e);
    }

    @Override
    public boolean remove(Object o) {
        System.out.println("Removing: " + o);
        return delegate.remove(o);
    }

    @Override
    public Iterator<E> iterator() {
        return delegate.iterator();
    }

    @Override
    public int size() {
        return delegate.size();
    }
}
```

### Usage Example

``` java
public class CustomSetExample {

    public static void main(String[] args) {

        LoggingSet<String> set = new LoggingSet<>();

        set.add("Apple");
        set.add("Banana");

        set.remove("Apple");

        for(String item : set){
            System.out.println(item);
        }
    }
}
```

------------------------------------------------------------------------

# Best Practices for Custom Collections

1.  **Reuse Existing Components**
    -   Wrap existing collections when possible.
2.  **Follow Interface Contracts**
    -   Respect behavior defined by `Collection`, `List`, or `Set`.
3.  **Optimize Frequently Used Operations**
    -   Override methods like `contains()` or `size()` if needed.
4.  **Handle Edge Cases**
    -   Invalid index
    -   Null values
    -   Empty collections
5.  **Document Behavior**
    -   Especially when behavior differs from standard collections.

------------------------------------------------------------------------

# When to Use Custom Collections

Use custom collections when:

-   Built‑in collections cannot support your domain logic
-   You need additional validation or behavior
-   Performance must be optimized for a specific scenario

Avoid creating custom collections unless necessary because they increase
**maintenance complexity**.

------------------------------------------------------------------------

# Custom vs Built‑in Collections

| Feature      | Custom Collections                   | Built‑in Collections         |
|--------------|--------------------------------------|-------------------------------|
| Flexibility  | Highly customizable                  | Limited behavior              |
| Performance  | Optimizable for specific use cases   | General‑purpose               |
| Maintenance  | Requires developer maintenance       | Maintained by Java            |
| Use Case     | Domain‑specific logic                | General applications          |

------------------------------------------------------------------------

Custom collections should be used carefully. In most cases,
**composition (wrapping existing collections)** is preferable to
building a collection from scratch.
