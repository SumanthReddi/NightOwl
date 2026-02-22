---
sidebar_position: 15
title: LinkedHashMap 
---

# LinkedHashMap -- Deep Internal Analysis with Code Examples

This document explains:

-   What LinkedHashMap is
-   How it differs from HashMap
-   Internal structure (Hash table + Doubly Linked List)
-   Insertion-order vs Access-order modes
-   LRU cache mechanism
-   Performance characteristics
-   Memory overhead
-   When to use LinkedHashMap
-   Automation relevance
-   Interview-level clarity

------------------------------------------------------------------------

# 1️⃣ What is LinkedHashMap?

LinkedHashMap is an ordered version of HashMap.

Definition:

``` java
public class LinkedHashMap<K,V>
    extends HashMap<K,V>
    implements Map<K,V>
```

Important:

• Maintains predictable iteration order\
• Allows one null key\
• Allows multiple null values\
• Not thread-safe\
• Slightly slower than HashMap

------------------------------------------------------------------------

# 2️⃣ Internal Structure

LinkedHashMap extends HashMap.

But in addition to bucket structure, it maintains:

A doubly linked list of entries.

Each node contains:

-   hash
-   key
-   value
-   next (bucket chain)
-   before (linked list)
-   after (linked list)

So structure =

Hash table (for O(1) lookup) + Doubly linked list (for order
maintenance)

------------------------------------------------------------------------

# 3️⃣ Insertion-Order Mode (Default)

``` java
LinkedHashMap<String, Integer> map = new LinkedHashMap<>();

map.put("C", 3);
map.put("A", 1);
map.put("B", 2);

System.out.println(map);  // {C=3, A=1, B=2}
```

Order maintained as inserted.

------------------------------------------------------------------------

# 4️⃣ Access-Order Mode

Special constructor:

``` java
LinkedHashMap<String, Integer> map =
    new LinkedHashMap<>(16, 0.75f, true);
```

Third parameter = accessOrder

When true:

Entries reordered when accessed.

Example:

``` java
map.put("A", 1);
map.put("B", 2);
map.get("A");

System.out.println(map);
```

Now "A" moves to end.

Used for LRU cache.

------------------------------------------------------------------------

# 5️⃣ LRU Cache Example

Override removeEldestEntry():

``` java
LinkedHashMap<String, Integer> cache =
    new LinkedHashMap<>(3, 0.75f, true) {

    protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() > 3;
    }
};

cache.put("A", 1);
cache.put("B", 2);
cache.put("C", 3);
cache.put("D", 4);

System.out.println(cache);  // Oldest removed
```

Automatically removes least recently used entry.

------------------------------------------------------------------------

# 6️⃣ Difference: HashMap vs LinkedHashMap

  Feature             HashMap   LinkedHashMap
  ------------------- --------- -----------------
  Order maintained    ❌ No     ✅ Yes
  Access-order mode   ❌        ✅ Yes
  Memory usage        Lower     Higher
  Performance         Faster    Slightly slower

------------------------------------------------------------------------

# 7️⃣ Performance Characteristics

  Operation   Complexity
  ----------- ------------
  put         O(1) avg
  get         O(1) avg
  remove      O(1) avg

Slight overhead for maintaining linked list.

------------------------------------------------------------------------

# 8️⃣ Memory Overhead

Each entry stores:

-   before reference
-   after reference

So more memory than HashMap.

------------------------------------------------------------------------

# 9️⃣ When to Use LinkedHashMap

Use when:

✓ Need predictable iteration order\
✓ Need LRU cache behavior\
✓ Need consistent output order

Avoid when:

✗ Order does not matter\
✗ Memory-sensitive system

------------------------------------------------------------------------

# 🔟 Automation Framework Relevance

LinkedHashMap useful for:

• Maintaining ordered API request payloads\
• Preserving JSON field order\
• Logging ordered test steps\
• Implementing LRU-based caching in test frameworks

Example:

``` java
Map<String, String> headers = new LinkedHashMap<>();
headers.put("Authorization", "Bearer token");
headers.put("Content-Type", "application/json");
```

Maintains header order.

------------------------------------------------------------------------

# 1️⃣1️⃣ Interview Questions

Q: Difference between HashMap and LinkedHashMap? A: LinkedHashMap
maintains order via linked list.

Q: What is access-order mode? A: Reorders entries based on access.

Q: How to implement LRU cache? A: Override removeEldestEntry().

Q: Is LinkedHashMap thread-safe? A: No.

------------------------------------------------------------------------

# 1️⃣2️⃣ Advanced Insight

LinkedHashMap still uses HashMap's hashing mechanism.

Order maintenance does not affect bucket indexing.

Treeification (Java 8+) still applies for heavy collisions.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Hash table + linked list hybrid structure\
✓ Insertion-order vs access-order\
✓ LRU cache implementation\
✓ Performance trade-offs\
✓ Memory overhead\
✓ Automation usage\
✓ Interview-level clarity

Next file:

treemap.md
