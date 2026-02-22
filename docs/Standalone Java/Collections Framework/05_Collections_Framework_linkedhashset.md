---
sidebar_position: 11
title: LinkedHashSet
---

# LinkedHashSet -- Deep Internal Analysis with Code Examples

This document explains:

-   What LinkedHashSet is
-   How it differs from HashSet
-   Internal structure (LinkedHashMap backing)
-   Order maintenance mechanism
-   Performance characteristics
-   Memory overhead
-   When to use LinkedHashSet
-   Automation relevance
-   Interview-level clarity

------------------------------------------------------------------------

# 1️⃣ What is LinkedHashSet?

LinkedHashSet is an ordered version of HashSet.

Definition:

``` java
public class LinkedHashSet<E>
    extends HashSet<E>
    implements Set<E>, Cloneable, Serializable
```

Important:

• Maintains insertion order\
• Does not allow duplicates\
• Allows one null\
• Not thread-safe\
• Backed by LinkedHashMap

------------------------------------------------------------------------

# 2️⃣ Internal Working

LinkedHashSet extends HashSet.

But internally, HashSet uses HashMap.

LinkedHashSet instead uses LinkedHashMap.

LinkedHashMap maintains a doubly-linked list of entries to preserve
order.

So LinkedHashSet = Hash table + Linked list for order.

------------------------------------------------------------------------

# 3️⃣ Internal Structure Concept

Each entry stores:

• Key (actual element) • Hash value • Next (for bucket chaining) •
Before & After references (for order maintenance)

Structure:

Hash bucket structure + doubly linked list across entries.

------------------------------------------------------------------------

# 4️⃣ Order Preservation Example

``` java
Set<String> set = new LinkedHashSet<>();

set.add("C");
set.add("A");
set.add("B");

System.out.println(set);  // [C, A, B]
```

Insertion order maintained.

------------------------------------------------------------------------

# 5️⃣ Difference: HashSet vs LinkedHashSet

  Feature            HashSet           LinkedHashSet
  ------------------ ----------------- -----------------
  Order maintained   ❌ No             ✅ Yes
  Backed by          HashMap           LinkedHashMap
  Memory usage       Lower             Higher
  Performance        Slightly faster   Slightly slower

------------------------------------------------------------------------

# 6️⃣ Performance Characteristics

  Operation   Complexity
  ----------- --------------
  add         O(1) average
  remove      O(1) average
  contains    O(1) average

Same as HashSet (slight overhead for maintaining linked list).

------------------------------------------------------------------------

# 7️⃣ Memory Overhead

LinkedHashSet stores additional references for:

• before pointer • after pointer

So memory usage \> HashSet.

------------------------------------------------------------------------

# 8️⃣ Example -- Remove Duplicates but Keep Order

``` java
List<String> list = Arrays.asList("A", "B", "A", "C");

Set<String> set = new LinkedHashSet<>(list);

System.out.println(set);  // [A, B, C]
```

Useful when order matters.

------------------------------------------------------------------------

# 9️⃣ Example -- Iteration Order

``` java
LinkedHashSet<Integer> numbers = new LinkedHashSet<>();

numbers.add(10);
numbers.add(20);
numbers.add(30);

for(Integer n : numbers) {
    System.out.println(n);
}
```

Output order same as insertion.

------------------------------------------------------------------------

# 🔟 When to Use LinkedHashSet

Use when:

✓ Need uniqueness\
✓ Need predictable iteration order\
✓ Moderate performance acceptable

Avoid when:

✗ Memory sensitive application\
✗ Order does not matter (use HashSet)

------------------------------------------------------------------------

# 1️⃣1️⃣ Automation Framework Relevance

LinkedHashSet useful for:

• Removing duplicate test steps while preserving order\
• Deduplicating API response list but keeping original order\
• Validating UI elements appear in specific order

Example:

``` java
List<String> response = Arrays.asList("ADMIN", "USER", "ADMIN");

Set<String> uniqueOrdered = new LinkedHashSet<>(response);

System.out.println(uniqueOrdered);  // [ADMIN, USER]
```

------------------------------------------------------------------------

# 1️⃣2️⃣ Interview Questions

Q: Difference between HashSet and LinkedHashSet? A: Order maintenance
via linked list.

Q: Is performance same as HashSet? A: Almost same; slight overhead.

Q: Does LinkedHashSet allow null? A: Yes, one null.

Q: Is it thread-safe? A: No.

------------------------------------------------------------------------

# 1️⃣3️⃣ Advanced Insight

LinkedHashSet preserves insertion order, NOT sorting.

For sorting behavior → use TreeSet.

Internally relies on LinkedHashMap access-order vs insertion-order
modes.

Default mode = insertion order.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ LinkedHashMap backing\
✓ Order maintenance mechanism\
✓ Performance trade-offs\
✓ Memory overhead\
✓ When to choose LinkedHashSet\
✓ Automation usage\
✓ Interview-level clarity

Next file:

treeset.md
