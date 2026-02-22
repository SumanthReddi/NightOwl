---
sidebar_position: 3
title: TreeSet 
---

# TreeSet

This document explains:

-   What TreeSet is
-   Internal Red-Black Tree structure
-   Natural ordering
-   Comparable vs Comparator
-   Null restrictions
-   Performance complexity
-   Internal balancing logic
-   When to use TreeSet
-   Automation relevance
-   Interview traps
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is TreeSet?

TreeSet is a SortedSet implementation.

Definition:

``` java
public class TreeSet<E>
    extends AbstractSet<E>
    implements NavigableSet<E>, Cloneable, Serializable
```

Important:

• Maintains sorted order\
• Does not allow duplicates\
• Does NOT allow null (in natural ordering)\
• Not thread-safe\
• Backed internally by TreeMap

------------------------------------------------------------------------

# 2️⃣ Internal Structure

TreeSet internally uses:

``` java
private transient NavigableMap<E,Object> m;
```

And TreeMap uses:

Red-Black Tree

So:

TreeSet = Red-Black Tree (self-balancing BST)

------------------------------------------------------------------------

# 3️⃣ What is Red-Black Tree?

A Red-Black Tree is:

• Self-balancing Binary Search Tree\
• Ensures height ≈ log(n)\
• Maintains balance using coloring rules

Guarantees:

Search → O(log n)\
Insert → O(log n)\
Delete → O(log n)

------------------------------------------------------------------------

# 4️⃣ Natural Ordering

TreeSet sorts elements using:

1️⃣ Comparable (natural ordering) OR 2️⃣ Comparator (custom ordering)

Example -- Natural Ordering:

``` java
TreeSet<Integer> set = new TreeSet<>();

set.add(30);
set.add(10);
set.add(20);

System.out.println(set);  // [10, 20, 30]
```

Automatically sorted.

------------------------------------------------------------------------

# 5️⃣ Comparable Example

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

TreeSet<Student> set = new TreeSet<>();
set.add(new Student(3));
set.add(new Student(1));
set.add(new Student(2));

System.out.println(set);  // [1, 2, 3]
```

------------------------------------------------------------------------

# 6️⃣ Comparator Example

``` java
TreeSet<String> set = new TreeSet<>(
    (a, b) -> b.compareTo(a)   // reverse order
);

set.add("A");
set.add("C");
set.add("B");

System.out.println(set);  // [C, B, A]
```

------------------------------------------------------------------------

# 7️⃣ Null Handling

TreeSet does NOT allow null when using natural ordering.

Example:

``` java
TreeSet<String> set = new TreeSet<>();
set.add(null);  // NullPointerException
```

Because null cannot be compared.

------------------------------------------------------------------------

# 8️⃣ Duplicate Handling

Duplicate determined using compareTo() or Comparator.

If compareTo returns 0 → treated as duplicate.

Important:

Even if equals() returns false, if compareTo() returns 0 → element
considered duplicate.

------------------------------------------------------------------------

# 9️⃣ Performance Comparison

  Structure   Complexity
  ----------- --------------
  HashSet     O(1) average
  TreeSet     O(log n)

TreeSet slower but sorted.

------------------------------------------------------------------------

# 🔟 NavigableSet Features

TreeSet implements NavigableSet.

Additional methods:

``` java
set.first();
set.last();
set.higher(10);
set.lower(10);
set.ceiling(10);
set.floor(10);
```

Example:

``` java
TreeSet<Integer> numbers = new TreeSet<>();
numbers.add(10);
numbers.add(20);
numbers.add(30);

System.out.println(numbers.higher(10));  // 20
```

------------------------------------------------------------------------

# 1️⃣1️⃣ When to Use TreeSet

Use when:

✓ Need sorted data\
✓ Need range queries\
✓ Need navigation (higher/lower)

Avoid when:

✗ Order not required\
✗ Need maximum performance\
✗ Frequent hash-based lookup needed

------------------------------------------------------------------------

# 1️⃣2️⃣ Automation Framework Relevance

Useful for:

• Sorting API responses\
• Validating sorted UI lists\
• Maintaining ordered unique test data\
• Range validations

Example:

``` java
TreeSet<Integer> scores = new TreeSet<>(apiScores);

if(scores.first() < 0) {
    System.out.println("Invalid score");
}
```

------------------------------------------------------------------------

# 1️⃣3️⃣ Interview Questions

Q: What is internal structure of TreeSet? A: Red-Black Tree (via
TreeMap).

Q: Why null not allowed? A: Because elements must be comparable.

Q: Difference between HashSet and TreeSet? A: HashSet → hash-based,
O(1). TreeSet → sorted, O(log n).

Q: What happens if compareTo inconsistent with equals? A: Set behavior
becomes unpredictable.

------------------------------------------------------------------------

# 1️⃣4️⃣ Advanced Insight

If compareTo() is inconsistent with equals():

Set may behave incorrectly (violate Set contract).

Example:

compareTo returns 0 but equals false → element considered duplicate.

So Comparable implementation must be consistent with equals.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Red-Black Tree concept\
✓ Natural ordering\
✓ Comparable vs Comparator\
✓ Null restriction\
✓ O(log n) performance\
✓ NavigableSet features\
✓ Automation usage\
✓ Interview-level clarity

Next file:

map-interface.md
