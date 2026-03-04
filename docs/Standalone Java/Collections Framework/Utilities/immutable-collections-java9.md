---
sidebar_position: 4
title: Immutable Collections 
---

# Immutable Collections in Java 9+

This document explains:

-   What immutable collections are
-   Difference between unmodifiable vs immutable
-   Java 9 factory methods (List.of, Set.of, Map.of)
-   Internal implementation concept
-   Performance characteristics
-   Null restrictions
-   Duplicate handling rules
-   CopyOf methods (Java 10)
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What Are Immutable Collections?

Immutable collection:

✔ Cannot be modified after creation\
✔ No add/remove/update allowed\
✔ No structural changes possible

Once created → state is fixed.

------------------------------------------------------------------------

# 2️⃣ Unmodifiable vs Immutable (Important Difference)

Unmodifiable Collection:

• Read-only view\
• Underlying collection can still change

Example:

``` java
List<String> original = new ArrayList<>();
original.add("A");

List<String> unmod =
    Collections.unmodifiableList(original);

original.add("B");

System.out.println(unmod);  // [A, B]
```

It reflects changes because it's just a wrapper.

------------------------------------------------------------------------

Immutable Collection:

• No underlying modifiable structure\
• Truly fixed data

------------------------------------------------------------------------

# 3️⃣ Java 9 Factory Methods

Java 9 introduced:

``` java
List.of()
Set.of()
Map.of()
```

Example:

``` java
List<String> list = List.of("A", "B", "C");
Set<Integer> set = Set.of(1, 2, 3);
Map<String, Integer> map = Map.of("A", 1, "B", 2);
```

These are immutable.

------------------------------------------------------------------------

# 4️⃣ Modification Attempt

``` java
list.add("D");  // UnsupportedOperationException
set.remove(1);  // UnsupportedOperationException
```

------------------------------------------------------------------------

# 5️⃣ Null Restriction

Immutable factory methods DO NOT allow null.

``` java
List.of("A", null);  // NullPointerException
```

Reason:

Design choice to avoid ambiguity.

------------------------------------------------------------------------

# 6️⃣ Duplicate Restriction

Set.of() does NOT allow duplicates.

``` java
Set.of(1, 1);  // IllegalArgumentException
```

Map.of() does NOT allow duplicate keys.

------------------------------------------------------------------------

# 7️⃣ Internal Implementation Insight

Java uses specialized internal classes:

• ImmutableCollections.ListN\
• ImmutableCollections.SetN\
• ImmutableCollections.MapN

Optimized for:

✔ Small memory footprint\
✔ Fast iteration\
✔ No extra capacity overhead

------------------------------------------------------------------------

# 8️⃣ Performance Characteristics

Because immutable:

✔ No synchronization needed\
✔ Thread-safe by design\
✔ Memory optimized

Better for read-heavy applications.

------------------------------------------------------------------------

# 9️⃣ Map.ofEntries()

For larger maps:

``` java
Map<String, Integer> map = Map.ofEntries(
    Map.entry("A", 1),
    Map.entry("B", 2)
);
```

------------------------------------------------------------------------

# 🔟 Java 10 copyOf()

Java 10 introduced:

``` java
List.copyOf()
Set.copyOf()
Map.copyOf()
```

Example:

``` java
List<String> list = new ArrayList<>();
list.add("A");

List<String> immutable = List.copyOf(list);
```

If source already immutable → returns same instance.

------------------------------------------------------------------------

# 1️⃣1️⃣ Difference from Collections.unmodifiableList()

  Feature            unmodifiableList   List.of
  ------------------ ------------------ ---------
  Wrapper            Yes                No
  Reflect changes    Yes                No
  Null allowed       Yes                No
  Memory optimized   No                 Yes

------------------------------------------------------------------------

# 1️⃣2️⃣ Thread Safety

Immutable collections are:

✔ Naturally thread-safe\
✔ No locking required

Because state never changes.

------------------------------------------------------------------------

# 1️⃣3️⃣ Interview Questions

Q: Difference between unmodifiable and immutable? A: Wrapper vs fixed
structure.

Q: Does List.of allow null? A: No.

Q: Is List.of thread-safe? A: Yes (immutable).

Q: Can Set.of have duplicates? A: No.

Q: Does copyOf create deep copy? A: No, shallow immutable copy.

------------------------------------------------------------------------

# 1️⃣4️⃣ Automation Framework Relevance

Very useful for:

• Static configuration\
• Constant test data\
• Read-only reference data\
• Thread-safe shared constants

Example:

``` java
List<String> roles =
    List.of("ADMIN", "USER");
```

Ensures no accidental modification.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Immutable vs Unmodifiable difference\
✓ Java 9 factory methods\
✓ Null & duplicate restrictions\
✓ copyOf behavior\
✓ Thread-safety advantage\
✓ Memory optimization\
✓ Automation usage\
✓ Interview clarity
