---
sidebar_position: 28
title: Synchronized Collections
---

# Synchronized Collections -- Thread-Safety via Wrappers (Deep Dive)

This document explains:

-   Why synchronized collections exist
-   Collections.synchronizedX methods
-   How synchronization wrapper works internally
-   Iteration rules (VERY important)
-   Performance implications
-   Difference vs Concurrent Collections
-   When to use which
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ Why Synchronized Collections Exist

Normal collections like:

• ArrayList\
• HashMap\
• HashSet

Are NOT thread-safe.

To make them thread-safe, Java provides wrapper methods in:

``` java
java.util.Collections
```

------------------------------------------------------------------------

# 2️⃣ Creating Synchronized Collections

Examples:

``` java
List<Integer> list =
    Collections.synchronizedList(new ArrayList<>());

Set<String> set =
    Collections.synchronizedSet(new HashSet<>());

Map<String, Integer> map =
    Collections.synchronizedMap(new HashMap<>());
```

These return thread-safe wrappers.

------------------------------------------------------------------------

# 3️⃣ How It Works Internally

Wrapper class maintains:

✔ Original collection\
✔ A mutex (lock object)

Every method is synchronized:

``` java
public synchronized boolean add(E e) {
    return list.add(e);
}
```

Entire method locked.

------------------------------------------------------------------------

# 4️⃣ Important Rule -- Iteration Must Be Manually Synchronized

This is a major interview trap.

Wrong:

``` java
for(Integer i : list) {
    System.out.println(i);
}
```

Correct:

``` java
synchronized(list) {
    for(Integer i : list) {
        System.out.println(i);
    }
}
```

Why?

Iterator itself is fail-fast and not automatically synchronized.

------------------------------------------------------------------------

# 5️⃣ Example -- Correct Usage

``` java
List<Integer> list =
    Collections.synchronizedList(new ArrayList<>());

list.add(1);
list.add(2);

synchronized(list) {
    for(Integer i : list) {
        System.out.println(i);
    }
}
```

------------------------------------------------------------------------

# 6️⃣ Performance Characteristics

Because methods are fully synchronized:

✔ Safe\
❌ High lock contention\
❌ Poor scalability under heavy concurrency

Only one thread can access at a time.

------------------------------------------------------------------------

# 7️⃣ Difference: Synchronized Collection vs Concurrent Collection

  Feature       Synchronized Wrapper   Concurrent Collection
  ------------- ---------------------- -----------------------
  Locking       Entire method          Fine-grained / CAS
  Iteration     Must manually sync     Weakly consistent
  Scalability   Low                    High
  Example       synchronizedList       ConcurrentHashMap

------------------------------------------------------------------------

# 8️⃣ Why ConcurrentHashMap Is Better

Instead of:

``` java
Collections.synchronizedMap(new HashMap<>());
```

Prefer:

``` java
ConcurrentHashMap
```

Because:

✔ Better concurrency\
✔ No full-map locking\
✔ Weakly consistent iterators

------------------------------------------------------------------------

# 9️⃣ Structural Modifications

Even with synchronized wrapper:

Compound operations are NOT atomic.

Example:

``` java
if(!map.containsKey("A")) {
    map.put("A", 1);
}
```

Still unsafe.

Need explicit synchronization block.

------------------------------------------------------------------------

# 🔟 Example -- Safe Compound Operation

``` java
synchronized(map) {
    if(!map.containsKey("A")) {
        map.put("A", 1);
    }
}
```

------------------------------------------------------------------------

# 1️⃣1️⃣ Legacy vs Modern Approach

Before java.util.concurrent:

Synchronized wrappers were common.

Modern approach:

• ConcurrentHashMap\
• CopyOnWriteArrayList\
• BlockingQueue

Better scalability.

------------------------------------------------------------------------

# 1️⃣2️⃣ Interview Questions

Q: Does synchronizedList make iteration thread-safe? A: No, must
manually synchronize during iteration.

Q: Difference between synchronizedMap and ConcurrentHashMap? A: Full
locking vs fine-grained locking.

Q: Are compound operations atomic? A: No.

Q: Is synchronizedList fail-safe? A: No, still fail-fast.

------------------------------------------------------------------------

# 1️⃣3️⃣ Automation Framework Relevance

Important when:

• Sharing test data between parallel threads\
• Maintaining shared result map\
• Handling global configuration cache

Better choice for high concurrency:

ConcurrentHashMap.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Wrapper mechanism\
✓ Method-level synchronization\
✓ Manual iteration synchronization rule\
✓ Compound operation problem\
✓ Performance trade-offs\
✓ When to use concurrent collections instead\
✓ Automation relevance\
✓ Interview clarity

Next file:

immutable-collections-java9.md
