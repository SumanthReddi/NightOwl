---
sidebar_position: 1
title: Collection Hierarchy
---

# Collection Hierarchy -- Deep Conceptual Foundation

Before learning ArrayList, HashMap, or any implementation, you must
understand the **entire collection architecture design**.

This document covers:

-   Why Collections Framework was introduced
-   Core interfaces
-   Full hierarchy structure
-   Iterable vs Collection
-   List vs Set vs Queue
-   Map hierarchy (separate branch)
-   Design principles
-   Generics integration
-   Internal philosophy
-   Interview reasoning
-   Automation relevance

------------------------------------------------------------------------

# 1️⃣ Why Collections Framework Exists

Before Java 1.2:

• Only arrays available\
• Fixed size\
• No standard data structure API\
• No common interfaces

Collections Framework introduced to:

✓ Provide reusable data structures\
✓ Standardize APIs\
✓ Improve performance\
✓ Enable polymorphism\
✓ Support Generics (Java 5+)

------------------------------------------------------------------------

# 2️⃣ Core Design Principle

Everything revolves around **interfaces first, implementations later**.

This enables:

• Loose coupling\
• Flexibility\
• Runtime polymorphism

Example:

``` java
List<String> list = new ArrayList<>();
```

We code to interface, not implementation.

------------------------------------------------------------------------

# 3️⃣ Overall Hierarchy Structure

Main branches:

    Iterable
       ↑
    Collection
       ↑
     ┌───────────────┬───────────────┬───────────────┐
     List            Set             Queue

Separate branch:

    Map (NOT part of Collection)

Important:

Map does NOT extend Collection.

------------------------------------------------------------------------

# 4️⃣ Iterable Interface

Root interface for all collections.

Method:

``` java
Iterator<T> iterator();
```

Enables enhanced for-loop:

``` java
for(String s : list) {
    System.out.println(s);
}
```

Without Iterable → no for-each loop.

------------------------------------------------------------------------

# 5️⃣ Collection Interface

Extends Iterable.

Defines basic operations:

``` java
boolean add(E e);
boolean remove(Object o);
int size();
boolean contains(Object o);
void clear();
```

All List, Set, Queue inherit these.

------------------------------------------------------------------------

# 6️⃣ List Interface

Characteristics:

• Ordered collection\
• Allows duplicates\
• Indexed access

Implementations:

• ArrayList\
• LinkedList\
• Vector\
• Stack

Example:

``` java
List<String> list = new ArrayList<>();
list.add("A");
list.add("A");  // duplicates allowed
```

------------------------------------------------------------------------

# 7️⃣ Set Interface

Characteristics:

• No duplicates\
• Unordered (usually)

Implementations:

• HashSet\
• LinkedHashSet\
• TreeSet

Example:

``` java
Set<String> set = new HashSet<>();
set.add("A");
set.add("A");  // ignored
```

------------------------------------------------------------------------

# 8️⃣ Queue Interface

Characteristics:

• FIFO behavior\
• Used in scheduling / processing

Implementations:

• PriorityQueue\
• LinkedList

Example:

``` java
Queue<String> queue = new LinkedList<>();
queue.offer("A");
queue.poll();
```

------------------------------------------------------------------------

# 9️⃣ Map Interface (Separate Branch)

Map does NOT extend Collection.

Why?

Because:

Collection works with single elements\
Map works with key-value pairs

Structure:

    Map
     ├── HashMap
     ├── LinkedHashMap
     ├── TreeMap
     ├── Hashtable
     └── ConcurrentHashMap

Example:

``` java
Map<String, Integer> map = new HashMap<>();
map.put("A", 1);
```

------------------------------------------------------------------------

# 🔟 Generics in Collections

Before Java 5:

Collections stored Object type.

After Java 5:

``` java
List<String> list = new ArrayList<>();
```

Provides:

✓ Type safety\
✓ Compile-time checks\
✓ No casting required

------------------------------------------------------------------------

# 1️⃣1️⃣ Why Interfaces Over Concrete Classes?

Bad practice:

``` java
ArrayList<String> list = new ArrayList<>();
```

Better:

``` java
List<String> list = new ArrayList<>();
```

Because later you can switch to:

``` java
List<String> list = new LinkedList<>();
```

Without changing rest of code.

------------------------------------------------------------------------

# 1️⃣2️⃣ Common Interview Confusions

Q: Is Map part of Collection? A: No.

Q: What is difference between Iterable and Collection? A: Iterable
allows iteration. Collection adds data manipulation methods.

Q: Which allows duplicates? A: List.

Q: Which maintains insertion order? A: LinkedHashSet / LinkedHashMap.

------------------------------------------------------------------------

# 1️⃣3️⃣ Automation Framework Relevance

Collections heavily used in:

• Storing WebElements\
• Managing test data\
• API response parsing\
• JSON mapping\
• Configuration storage\
• Deduplication logic\
• Sorting results

Example:

``` java
List<WebElement> elements = driver.findElements(By.tagName("a"));
```

Understanding hierarchy helps choose correct structure.

------------------------------------------------------------------------

# 1️⃣4️⃣ Design Philosophy Summary

The framework is designed around:

✓ Abstraction\
✓ Polymorphism\
✓ Reusability\
✓ Performance optimization\
✓ Separation of concerns

Collections are not random classes --- they are carefully architected.

------------------------------------------------------------------------

# Final Mastery Checklist

You must clearly understand:

✓ Entire hierarchy structure\
✓ Iterable vs Collection\
✓ List vs Set vs Queue\
✓ Why Map is separate\
✓ Generics role\
✓ Interface-first coding principle

Next file:

iterable-interface.md
