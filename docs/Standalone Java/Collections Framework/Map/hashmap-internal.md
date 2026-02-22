---
sidebar_position: 1
title: HashMap Internal Working
---

# HashMap

## 1. Internal Structure

HashMap stores data inside:
```java
    Node<K,V>[] table
```
Each bucket contains either: - Linked List (before Java 8 behavior) -
Red-Black Tree (Java 8+ after threshold)

Node structure:
``` java
    static class Node<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;
    }
```
------------------------------------------------------------------------

## 2. Hash Calculation

Steps during put():

1.  Call key.hashCode()

2.  Apply hash spreading:
```
        hash = h ^ (h >>> 16)
```
3.  Calculate bucket index:
```
        index = (n - 1) & hash
```
Where n is table length (power of 2).

------------------------------------------------------------------------

## 3. Why Capacity Is Power of 2

Using:

    (n - 1) & hash

is faster than modulo (%) and distributes better.

------------------------------------------------------------------------

## 4. Load Factor & Threshold

Default values:

-   Initial capacity: 16
-   Load factor: 0.75

Threshold = capacity × loadFactor

Resize happens when:

    size > threshold

------------------------------------------------------------------------

## 5. Resize Mechanism

1.  Capacity doubled
2.  New table created
3.  Existing entries rehashed
4.  Buckets redistributed

Cost: O(n)

------------------------------------------------------------------------

## 6. Collision Handling

Before Java 8: - Linked List

After Java 8: - If bucket size \>= 8 AND table size \>= 64 → Convert to
Red-Black Tree

Worst case improves from O(n) to O(log n)

------------------------------------------------------------------------

## 7. Time Complexity

Operation Average Worst put() O(1) O(n) get() O(1) O(n) remove() O(1)
O(n)

------------------------------------------------------------------------

## 8. equals() & hashCode() Contract

If equals() and hashCode() not overridden properly, duplicate logical
keys may appear.

Correct contract: - Equal objects must have equal hashCodes.

------------------------------------------------------------------------

## 9. Null Handling

HashMap allows: - One null key - Multiple null values

Null key stored in bucket index 0.

------------------------------------------------------------------------

## 10. Concurrency Risk

HashMap is NOT thread-safe.

Issues in multithreading: - Data corruption - Infinite loop during
resize (older Java versions)

Use ConcurrentHashMap instead.

------------------------------------------------------------------------

## 11. Automation Relevance

Used in: - JSON mapping - API payload construction - Test data storage -
Config management

Example:
``` java
    Map<String, String> payload = new HashMap<>();
    payload.put("username", "admin");
```
------------------------------------------------------------------------

## Mastery Checklist

Understand: - Node\[\] structure - Hash spreading - Bucket indexing -
Load factor logic - Resize behavior - Treeification rule -
equals/hashCode contract
