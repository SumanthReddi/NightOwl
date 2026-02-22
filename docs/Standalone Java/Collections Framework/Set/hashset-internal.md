---
sidebar_position: 1
title: HashSet Internal Working
---

# HashSet

This document explains:

-   How HashSet is implemented internally
-   Relationship between HashSet and HashMap
-   Hashing mechanism
-   Bucket structure
-   Collision handling
-   Load factor & resizing
-   Performance degradation scenarios
-   equals() & hashCode() contract importance
-   Automation relevance
-   Interview-level clarity
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is HashSet?

HashSet is the most commonly used implementation of Set.

Definition:

``` java
public class HashSet<E>
    extends AbstractSet<E>
    implements Set<E>, Cloneable, Serializable
```

Important:

• Does NOT maintain insertion order\
• Does NOT allow duplicates\
• Allows one null\
• Not thread-safe\
• Backed internally by HashMap

------------------------------------------------------------------------

# 2️⃣ HashSet is Backed by HashMap

Internally, HashSet uses a HashMap.

Core field inside HashSet:

``` java
private transient HashMap<E,Object> map;
private static final Object PRESENT = new Object();
```

When you do:

``` java
set.add("Java");
```

Internally it does:

``` java
map.put("Java", PRESENT);
```

So:

Element → Key\
Dummy Object → Value

This is why uniqueness depends on HashMap logic.

------------------------------------------------------------------------

# 3️⃣ Internal Data Structure

HashMap internally uses:

Array of buckets:
```
    Node<K,V>[] table;
```
Each bucket may contain:

• Single node\
• Linked list (if collision)\
• Red-Black Tree (Java 8+, if heavy collision)

HashSet inherits this behavior.

------------------------------------------------------------------------

# 4️⃣ Hashing Mechanism

When you add element:

1.  Compute hashCode()

2.  Apply hash spreading function

3.  Determine bucket index:

    index = (n - 1) & hash

4.  If bucket empty → insert

5.  If not → check equals()

6.  If duplicate → ignore

------------------------------------------------------------------------

# 5️⃣ Collision Handling

If two elements have same bucket index:

Before Java 8: → Stored as linked list

After Java 8: If list length \> 8 → converted to Red-Black Tree

This improves worst-case performance.

------------------------------------------------------------------------

# 6️⃣ Load Factor & Resizing

Default values:

Initial capacity: 16\
Load factor: 0.75

Threshold = capacity × load factor

Example:

16 × 0.75 = 12

When size exceeds 12 → resize occurs.

Resizing steps:

1.  Double capacity
2.  Rehash all elements
3.  Redistribute into new buckets

Resize cost: O(n)

------------------------------------------------------------------------

# 7️⃣ Time Complexity

  Operation   Average   Worst Case
  ----------- --------- ------------
  add         O(1)      O(n)
  remove      O(1)      O(n)
  contains    O(1)      O(n)

Worst case occurs with heavy hash collisions.

------------------------------------------------------------------------

# 8️⃣ Example -- Basic Usage

``` java
Set<String> set = new HashSet<>();

set.add("A");
set.add("B");
set.add("A");

System.out.println(set);  // [A, B]
```

Duplicate ignored.

------------------------------------------------------------------------

# 9️⃣ Example -- Custom Object Without equals/hashCode

``` java
class User {
    int id;
    User(int id) { this.id = id; }
}

Set<User> users = new HashSet<>();
users.add(new User(1));
users.add(new User(1));

System.out.println(users.size());  // 2 (unexpected)
```

Because default equals compares memory address.

------------------------------------------------------------------------

# 🔟 Correct Custom Object Implementation

``` java
class User {
    int id;

    User(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if(this == o) return true;
        if(!(o instanceof User)) return false;
        User u = (User) o;
        return this.id == u.id;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}
```

Now duplicates prevented correctly.

------------------------------------------------------------------------

# 1️⃣1️⃣ Performance Degradation Scenario

If many objects have same hashCode:

``` java
@Override
public int hashCode() {
    return 1;  // bad practice
}
```

All elements go into same bucket.

Performance degrades to O(n).

------------------------------------------------------------------------

# 1️⃣2️⃣ Null Handling

HashSet allows only one null.

Because:

hashCode() of null handled specially in HashMap.

Example:

``` java
set.add(null);
set.add(null);

System.out.println(set.size());  // 1
```

------------------------------------------------------------------------

# 1️⃣3️⃣ Automation Framework Relevance

HashSet useful for:

• Removing duplicate test data\
• Checking uniqueness in API responses\
• Comparing expected vs actual results\
• Fast membership checking

Example:

``` java
Set<String> expected = new HashSet<>(Arrays.asList("ADMIN", "USER"));
Set<String> actual = new HashSet<>(responseRoles);

if(expected.equals(actual)) {
    System.out.println("Roles match");
}
```

------------------------------------------------------------------------

# 1️⃣4️⃣ Interview Questions

Q: How does HashSet ensure uniqueness? A: Uses hashCode() and equals().

Q: What is default load factor? A: 0.75

Q: What happens during resize? A: Capacity doubles and elements
rehashed.

Q: Is HashSet ordered? A: No.

Q: Can HashSet contain null? A: Yes, one null.

------------------------------------------------------------------------

# 1️⃣5️⃣ Advanced Insight

HashSet performance heavily depends on good hashCode implementation.

Poor hash distribution → performance degradation.

Java 8 treeification improves worst-case from O(n) to O(log n).

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ HashMap backing mechanism\
✓ Bucket structure\
✓ Collision handling\
✓ Load factor & resize\
✓ equals/hashCode importance\
✓ Performance trade-offs\
✓ Automation usage\
✓ Interview-level reasoning

Next file:

linkedhashset.md
