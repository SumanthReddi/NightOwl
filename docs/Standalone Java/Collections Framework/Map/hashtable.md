---
sidebar_position: 4
title: Hashtable
---

# Hashtable 

This document explains:

-   What Hashtable is
-   Historical background
-   Internal structure
-   Synchronization mechanism
-   Null restrictions
-   Difference between HashMap and Hashtable
-   Performance implications
-   Concurrency limitations
-   Automation relevance
-   Interview traps
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is Hashtable?

Hashtable is a legacy Map implementation introduced in Java 1.0.

Definition:

``` java
public class Hashtable<K,V>
    extends Dictionary<K,V>
    implements Map<K,V>, Cloneable, Serializable
```

Important:

• Thread-safe (synchronized methods)\
• Does NOT allow null key\
• Does NOT allow null value\
• Legacy class\
• Not recommended in modern code

------------------------------------------------------------------------

# 2️⃣ Historical Context

Before Java 1.2 (Collections Framework):

• Hashtable was primary key-value structure\
• Vector used for dynamic arrays

After Java 1.2:

• HashMap introduced\
• Hashtable retained for backward compatibility

------------------------------------------------------------------------

# 3️⃣ Internal Structure

Similar to pre-Java 8 HashMap.

Uses:

``` java
Entry<K,V>[] table;
```

Entry structure:

``` java
private static class Entry<K,V> {
    final int hash;
    final K key;
    V value;
    Entry<K,V> next;
}
```

Collision handling → Linked List

Hashtable does NOT use Red-Black Tree (even in modern Java).

------------------------------------------------------------------------

# 4️⃣ Synchronization Mechanism

All major methods are synchronized.

Example:

``` java
public synchronized V put(K key, V value)
```

This means:

• Entire method locked\
• Only one thread at a time\
• Performance overhead

------------------------------------------------------------------------

# 5️⃣ Null Restrictions

Hashtable does NOT allow:

• Null key\
• Null value

Example:

``` java
Hashtable<String, String> table = new Hashtable<>();
table.put(null, "Test");   // NullPointerException
table.put("A", null);      // NullPointerException
```

Reason:

Avoid ambiguity in multi-threaded environments.

------------------------------------------------------------------------

# 6️⃣ Example -- Basic Usage

``` java
Hashtable<String, Integer> table = new Hashtable<>();

table.put("A", 1);
table.put("B", 2);

System.out.println(table);
```

------------------------------------------------------------------------

# 7️⃣ Difference: HashMap vs Hashtable

  Feature         HashMap         Hashtable
  --------------- --------------- ----------------
  Thread-safe     ❌ No           ✅ Yes
  Null key        One allowed     ❌ Not allowed
  Null value      Allowed         ❌ Not allowed
  Performance     Faster          Slower
  Treeification   Yes (Java 8+)   ❌ No

------------------------------------------------------------------------

# 8️⃣ Performance Implications

Because of synchronization:

• Slower than HashMap\
• Lock contention in multi-threading\
• Reduced scalability

Modern alternative:

• ConcurrentHashMap

------------------------------------------------------------------------

# 9️⃣ Compound Operation Issue

Even though methods synchronized:

Compound operations not atomic.

Example:

``` java
if(table.containsKey("A")) {
    table.remove("A");
}
```

Still vulnerable to race condition.

------------------------------------------------------------------------

# 🔟 Iteration Example

``` java
for(Map.Entry<String, Integer> entry : table.entrySet()) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}
```

Iteration is also synchronized internally.

------------------------------------------------------------------------

# 1️⃣1️⃣ When to Use Hashtable?

Practically:

Almost never in new applications.

Only used for:

• Legacy system compatibility\
• Old APIs requiring Hashtable

Prefer:

• HashMap (single-threaded) • ConcurrentHashMap (multi-threaded)

------------------------------------------------------------------------

# 1️⃣2️⃣ Automation Framework Relevance

Rarely used in automation.

Modern automation frameworks use:

• HashMap for config & payload • ConcurrentHashMap for parallel test
execution

Hashtable adds unnecessary locking overhead.

------------------------------------------------------------------------

# 1️⃣3️⃣ Interview Questions

Q: Is Hashtable thread-safe? A: Yes (method-level synchronization).

Q: Why null not allowed in Hashtable? A: To avoid ambiguity in
concurrent environment.

Q: Difference between HashMap and Hashtable? A: Synchronization + null
handling.

Q: Does Hashtable use Red-Black Tree? A: No.

------------------------------------------------------------------------

# 1️⃣4️⃣ Advanced Insight

Hashtable synchronizes entire method.

ConcurrentHashMap synchronizes segments (better scalability).

Thus Hashtable does not scale well in high concurrency.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Legacy design\
✓ Synchronization behavior\
✓ Null restriction\
✓ Performance trade-offs\
✓ Why modern code avoids it\
✓ Interview-level clarity

Next file:

concurrenthashmap.md
