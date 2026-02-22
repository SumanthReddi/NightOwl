---
sidebar_position: 7
title: Fail-Fast vs Fail-Safe Iterators
---

# Fail-Fast vs Fail-Safe Iterators 

This document explains:

-   What fail-fast means
-   What fail-safe means
-   modCount mechanism
-   ConcurrentModificationException
-   Structural modification concept
-   Behavior in HashMap, ArrayList, etc.
-   Behavior in ConcurrentHashMap
-   Real concurrency implications
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is Fail-Fast?

Fail-fast iterator:

✔ Immediately throws exception if collection is structurally modified\
✔ Detects modification during iteration\
✔ Used in most non-concurrent collections

Exception thrown:

``` java
ConcurrentModificationException
```

------------------------------------------------------------------------

# 2️⃣ Example -- Fail-Fast Behavior

``` java
List<Integer> list = new ArrayList<>();
list.add(1);
list.add(2);
list.add(3);

for(Integer i : list) {
    list.add(4);   // Structural modification
}
```

Output:

ConcurrentModificationException

------------------------------------------------------------------------

# 3️⃣ Why It Happens -- modCount Mechanism

Most collections maintain an internal variable:

``` java
protected transient int modCount;
```

When:

• add() • remove() • clear()

are called → modCount increments.

Iterator stores expectedModCount.

If during iteration:

modCount != expectedModCount → throw exception.

------------------------------------------------------------------------

# 4️⃣ What is Structural Modification?

Structural modification =

Changing size or structure of collection.

Examples:

✔ add() ✔ remove() ✔ clear()

Not structural:

✔ set(index, value)

------------------------------------------------------------------------

# 5️⃣ Correct Way to Modify During Iteration

Use iterator's remove():

``` java
Iterator<Integer> it = list.iterator();

while(it.hasNext()) {
    if(it.next() == 2) {
        it.remove();
    }
}
```

Safe because iterator updates expectedModCount.

------------------------------------------------------------------------

# 6️⃣ What is Fail-Safe?

Fail-safe iterator:

✔ Does NOT throw exception\
✔ Operates on snapshot of collection\
✔ Used in concurrent collections

Example:

• ConcurrentHashMap\
• CopyOnWriteArrayList

------------------------------------------------------------------------

# 7️⃣ Example -- Fail-Safe Behavior

``` java
ConcurrentHashMap<String, Integer> map =
    new ConcurrentHashMap<>();

map.put("A", 1);

for(String key : map.keySet()) {
    map.put("B", 2);  // No exception
}
```

No ConcurrentModificationException.

------------------------------------------------------------------------

# 8️⃣ How Fail-Safe Works

Two common strategies:

1️⃣ Snapshot copy (CopyOnWriteArrayList)\
2️⃣ Weakly consistent iterator (ConcurrentHashMap)

Weakly consistent means:

• Reflects some modifications\
• Not guaranteed to reflect all

------------------------------------------------------------------------

# 9️⃣ Fail-Fast vs Fail-Safe Comparison

  Feature                    Fail-Fast   Fail-Safe
  -------------------------- ----------- ------------------------
  Throws exception           Yes         No
  Uses original collection   Yes         No (copy or weak view)
  Performance                Faster      Slower (copy cost)
  Thread-safe                No          Yes (usually)

------------------------------------------------------------------------

# 🔟 Collections That Are Fail-Fast

• ArrayList\
• LinkedList\
• HashMap\
• HashSet\
• TreeMap\
• TreeSet

------------------------------------------------------------------------

# 1️⃣1️⃣ Collections That Are Fail-Safe

• ConcurrentHashMap\
• CopyOnWriteArrayList\
• CopyOnWriteArraySet

------------------------------------------------------------------------

# 1️⃣2️⃣ Important Clarification

Fail-fast is:

✔ Best-effort detection\
✔ Not guaranteed in all cases\
✔ Not a synchronization mechanism

It detects bugs, not prevents them.

------------------------------------------------------------------------

# 1️⃣3️⃣ Common Interview Traps

Q: Is fail-fast thread-safe? A: No.

Q: Does fail-safe guarantee consistent view? A: No, only weakly
consistent.

Q: What variable tracks modification? A: modCount.

Q: Does set() cause ConcurrentModificationException? A: No (not
structural).

------------------------------------------------------------------------

# 1️⃣4️⃣ Automation Framework Relevance

Important when:

• Modifying test data during iteration\
• Running parallel tests\
• Using shared collections in thread pools\
• Designing concurrent caching mechanisms

Example safe removal:

``` java
Iterator<String> it = roles.iterator();
while(it.hasNext()) {
    if(it.next().equals("TEMP")) {
        it.remove();
    }
}
```

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ modCount mechanism\
✓ Structural modification concept\
✓ Why ConcurrentModificationException occurs\
✓ Snapshot vs weakly consistent iteration\
✓ Thread-safety implications\
✓ Automation concurrency relevance\
✓ Interview-level clarity

Next file:

synchronized-collections.md
