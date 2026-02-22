---
sidebar_position: 9
title: Set Interface
---

# Set Interface -- Deep Conceptual & Practical Coverage

This document explains:

-   What Set represents
-   Mathematical set concept in Java
-   Uniqueness rule
-   Hash-based vs Tree-based sets
-   equals() & hashCode() importance
-   Null handling rules
-   Internal working expectations
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is Set?

Set represents a collection that:

• Does NOT allow duplicate elements\
• Does NOT guarantee index-based access\
• May or may not maintain order (implementation dependent)

Definition:

``` java
public interface Set<E> extends Collection<E>
```

------------------------------------------------------------------------

# 2️⃣ Key Characteristics

  Feature              Supported?
  -------------------- ---------------------------
  Duplicates           ❌ Not allowed
  Insertion Order      Depends on implementation
  Index-based access   ❌ No
  Null allowed         Depends on implementation

------------------------------------------------------------------------

# 3️⃣ Why Duplicates Are Not Allowed

Set uses equals() method to determine duplicates.

Example:

``` java
Set<String> set = new HashSet<>();
set.add("Java");
set.add("Java");

System.out.println(set);  // [Java]
```

Second insertion ignored because equals() returns true.

------------------------------------------------------------------------

# 4️⃣ Importance of equals() and hashCode()

For HashSet:

• hashCode() determines bucket\
• equals() confirms match

If custom object used without overriding equals() & hashCode():

``` java
class Student {
    int id;
    Student(int id) {
        this.id = id;
    }
}

Set<Student> students = new HashSet<>();
students.add(new Student(1));
students.add(new Student(1));

System.out.println(students.size());  // 2 (unexpected)
```

Because default equals() compares memory addresses.

Correct approach:

``` java
@Override
public boolean equals(Object o) {
    if(this == o) return true;
    if(!(o instanceof Student)) return false;
    Student s = (Student) o;
    return this.id == s.id;
}

@Override
public int hashCode() {
    return Integer.hashCode(id);
}
```

Now duplicates prevented correctly.

------------------------------------------------------------------------

# 5️⃣ Common Implementations

• HashSet\
• LinkedHashSet\
• TreeSet

We will deep-dive into each next.

------------------------------------------------------------------------

# 6️⃣ Null Handling

  Implementation   Null Allowed?
  ---------------- -----------------------------------
  HashSet          One null allowed
  LinkedHashSet    One null allowed
  TreeSet          ❌ Not allowed (natural ordering)

Example:

``` java
Set<String> set = new HashSet<>();
set.add(null);
set.add(null);

System.out.println(set.size());  // 1
```

------------------------------------------------------------------------

# 7️⃣ Order Behavior

HashSet → No guaranteed order

LinkedHashSet → Maintains insertion order

TreeSet → Sorted order

Example:

``` java
Set<String> set = new LinkedHashSet<>();
set.add("C");
set.add("A");
set.add("B");

System.out.println(set);  // [C, A, B]
```

------------------------------------------------------------------------

# 8️⃣ Performance Overview

  Operation   HashSet    TreeSet
  ----------- ---------- ----------
  add         O(1) avg   O(log n)
  remove      O(1) avg   O(log n)
  contains    O(1) avg   O(log n)

Performance depends on internal structure.

------------------------------------------------------------------------

# 9️⃣ Example -- Remove Duplicates from List

``` java
List<String> list = Arrays.asList("A", "B", "A", "C");

Set<String> set = new HashSet<>(list);

System.out.println(set);  // [A, B, C]
```

------------------------------------------------------------------------

# 🔟 Example -- Preserve Order While Removing Duplicates

``` java
List<String> list = Arrays.asList("A", "B", "A", "C");

Set<String> set = new LinkedHashSet<>(list);

System.out.println(set);  // [A, B, C]
```

------------------------------------------------------------------------

# 1️⃣1️⃣ Automation Framework Relevance

Set is useful for:

• Removing duplicate test data\
• Ensuring unique IDs\
• Validating uniqueness in API response\
• Comparing expected vs actual sets

Example:

``` java
Set<String> actualRoles = new HashSet<>(responseRoles);

if(actualRoles.size() != responseRoles.size()) {
    System.out.println("Duplicate roles found");
}
```

------------------------------------------------------------------------

# 1️⃣2️⃣ Interview Questions

Q: How does Set prevent duplicates? A: Uses equals() (and hashCode for
HashSet).

Q: Difference between List and Set? A: List allows duplicates & index
access. Set does not.

Q: Can Set contain null? A: Depends on implementation.

Q: Which Set maintains sorted order? A: TreeSet.

------------------------------------------------------------------------

# 1️⃣3️⃣ Advanced Insight

Set is conceptually based on mathematical set theory.

But internal implementation determines:

• Order behavior\
• Performance\
• Null handling

Always choose implementation carefully.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Uniqueness rule\
✓ equals() & hashCode() importance\
✓ Order differences\
✓ Null behavior\
✓ Performance differences\
✓ Automation usage\
✓ Interview-level clarity

Next file:

hashset-internal.md
