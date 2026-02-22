---
sidebar_position: 16
title: TreeMap 
---

# TreeMap -- Red-Black Tree (Deep Internal Analysis with Code)

This document explains:

-   What TreeMap is
-   Internal Red-Black Tree structure
-   Natural ordering of keys
-   Comparable vs Comparator in TreeMap
-   Null key restrictions
-   NavigableMap features
-   Performance complexity
-   When to use TreeMap
-   Automation relevance
-   Interview traps
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is TreeMap?

TreeMap is a SortedMap implementation.

Definition:

``` java
public class TreeMap<K,V>
    extends AbstractMap<K,V>
    implements NavigableMap<K,V>, Cloneable, Serializable
```

Important:

• Maintains sorted order of keys\
• Does NOT allow null key (natural ordering)\
• Allows multiple null values\
• Not thread-safe\
• Backed internally by Red-Black Tree

------------------------------------------------------------------------

# 2️⃣ Internal Structure

TreeMap uses:

Red-Black Tree (self-balancing Binary Search Tree)

Each node contains:

-   key
-   value
-   left
-   right
-   parent
-   color (RED or BLACK)

Balancing ensures height ≈ log(n)

------------------------------------------------------------------------

# 3️⃣ Time Complexity

  Operation   Complexity
  ----------- ------------
  put         O(log n)
  get         O(log n)
  remove      O(log n)

Because operations depend on tree height.

------------------------------------------------------------------------

# 4️⃣ Natural Ordering (Comparable)

Keys must implement Comparable.

Example:

``` java
TreeMap<Integer, String> map = new TreeMap<>();

map.put(30, "C");
map.put(10, "A");
map.put(20, "B");

System.out.println(map);  // {10=A, 20=B, 30=C}
```

Sorted automatically by key.

------------------------------------------------------------------------

# 5️⃣ Custom Ordering (Comparator)

``` java
TreeMap<String, Integer> map =
    new TreeMap<>((a, b) -> b.compareTo(a));

map.put("A", 1);
map.put("C", 3);
map.put("B", 2);

System.out.println(map);  // {C=3, B=2, A=1}
```

Sorted in reverse order.

------------------------------------------------------------------------

# 6️⃣ Null Key Restriction

``` java
TreeMap<String, Integer> map = new TreeMap<>();
map.put(null, 1);  // NullPointerException
```

Reason:

Keys must be comparable.

------------------------------------------------------------------------

# 7️⃣ Duplicate Keys

Duplicate determined using:

compareTo() or Comparator

If comparison returns 0 → value replaced.

Example:

``` java
map.put(10, "A");
map.put(10, "B");

System.out.println(map);  // {10=B}
```

------------------------------------------------------------------------

# 8️⃣ NavigableMap Features

TreeMap implements NavigableMap.

Useful methods:

``` java
map.firstKey();
map.lastKey();
map.higherKey(10);
map.lowerKey(10);
map.ceilingKey(10);
map.floorKey(10);
```

Example:

``` java
TreeMap<Integer, String> map = new TreeMap<>();
map.put(10, "A");
map.put(20, "B");
map.put(30, "C");

System.out.println(map.higherKey(20));  // 30
System.out.println(map.lowerKey(20));   // 10
```

------------------------------------------------------------------------

# 9️⃣ SubMap / Range View

``` java
SortedMap<Integer, String> sub =
    map.subMap(10, 30);

System.out.println(sub);  // keys between 10 and 30
```

Useful for range queries.

------------------------------------------------------------------------

# 🔟 TreeMap vs HashMap

  Feature            HashMap      TreeMap
  ------------------ ------------ ----------------
  Structure          Hash table   Red-Black Tree
  Order maintained   ❌           ✅ (sorted)
  Time complexity    O(1) avg     O(log n)
  Null key allowed   One          ❌

------------------------------------------------------------------------

# 1️⃣1️⃣ Custom Object as Key

``` java
class Student implements Comparable<Student> {
    int id;

    Student(int id) {
        this.id = id;
    }

    @Override
    public int compareTo(Student s) {
        return this.id - s.id;
    }

    @Override
    public String toString() {
        return String.valueOf(id);
    }
}

TreeMap<Student, String> map = new TreeMap<>();
map.put(new Student(2), "B");
map.put(new Student(1), "A");

System.out.println(map);
```

Sorted by id.

------------------------------------------------------------------------

# 1️⃣2️⃣ Important Contract Rule

compareTo() must be consistent with equals().

If not:

Map may behave unpredictably.

If compareTo returns 0 → treated as duplicate key.

------------------------------------------------------------------------

# 1️⃣3️⃣ When to Use TreeMap

Use when:

✓ Need sorted keys\
✓ Need range queries\
✓ Need navigation methods\
✓ Need consistent ordering

Avoid when:

✗ Order not required\
✗ Need fastest lookup\
✗ Key not naturally comparable

------------------------------------------------------------------------

# 1️⃣4️⃣ Automation Framework Relevance

TreeMap useful for:

• Sorting API response data\
• Generating ordered reports\
• Range validations\
• Maintaining sorted test metrics

Example:

``` java
TreeMap<Integer, String> scores = new TreeMap<>(apiScores);

System.out.println(scores.firstEntry());
System.out.println(scores.lastEntry());
```

------------------------------------------------------------------------

# 1️⃣5️⃣ Interview Questions

Q: Internal structure of TreeMap? A: Red-Black Tree.

Q: Why null key not allowed? A: Because keys must be comparable.

Q: Time complexity of get()? A: O(log n).

Q: Difference between TreeMap and LinkedHashMap? A: TreeMap sorts keys;
LinkedHashMap maintains insertion/access order.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Red-Black Tree backing\
✓ Sorted key behavior\
✓ Comparable vs Comparator\
✓ Null restriction\
✓ O(log n) operations\
✓ NavigableMap features\
✓ Automation usage\
✓ Interview-level clarity

Next file:

hashtable.md
