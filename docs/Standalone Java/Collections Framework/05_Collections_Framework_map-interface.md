---
sidebar_position: 13
title: Map Interface
---

# Map Interface -- Deep Conceptual & Practical Coverage

This document explains:

-   Why Map is separate from Collection
-   Key-value mapping concept
-   Core methods & contracts
-   equals() & hashCode() behavior
-   Entry interface
-   Iteration techniques
-   Null handling rules
-   Performance awareness
-   Automation relevance
-   Interview-level clarity
-   Code examples

------------------------------------------------------------------------

# 1️⃣ Why Map is NOT Part of Collection

Map does NOT extend Collection.

Reason:

Collection stores single elements. Map stores key-value pairs.

Structure:

Key → Value

Thus Map is a separate hierarchy.

------------------------------------------------------------------------

# 2️⃣ What is Map?

Definition:

``` java
public interface Map<K,V>
```

Key characteristics:

• Keys must be unique\
• Values can be duplicate\
• One key maps to one value\
• Not ordered (unless implementation specifies)

------------------------------------------------------------------------

# 3️⃣ Core Methods

## put(K key, V value)

``` java
map.put("A", 1);
```

If key already exists → value replaced.

------------------------------------------------------------------------

## get(Object key)

``` java
int value = map.get("A");
```

Returns null if key not found.

------------------------------------------------------------------------

## containsKey(Object key)

``` java
map.containsKey("A");
```

------------------------------------------------------------------------

## containsValue(Object value)

Less efficient than containsKey().

------------------------------------------------------------------------

## remove(Object key)

Removes mapping by key.

------------------------------------------------------------------------

## size()

Returns number of key-value pairs.

------------------------------------------------------------------------

# 4️⃣ Overwriting Behavior

``` java
Map<String, Integer> map = new HashMap<>();

map.put("A", 1);
map.put("A", 2);

System.out.println(map);  // {A=2}
```

Key must be unique.

------------------------------------------------------------------------

# 5️⃣ Entry Interface

Map provides nested interface:

``` java
Map.Entry<K,V>
```

Used for iteration.

Example:

``` java
for(Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}
```

------------------------------------------------------------------------

# 6️⃣ Iteration Techniques

## 1️⃣ Using entrySet()

``` java
for(Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " " + e.getValue());
}
```

Efficient method.

------------------------------------------------------------------------

## 2️⃣ Using keySet()

``` java
for(String key : map.keySet()) {
    System.out.println(key + " " + map.get(key));
}
```

Less efficient (extra lookup).

------------------------------------------------------------------------

## 3️⃣ Using forEach (Java 8)

``` java
map.forEach((k, v) -> 
    System.out.println(k + " " + v)
);
```

------------------------------------------------------------------------

# 7️⃣ equals() and hashCode() in Map

Two maps equal if:

• Same key-value mappings

Order does not matter (for HashMap).

Example:

``` java
Map<String, Integer> m1 = new HashMap<>();
Map<String, Integer> m2 = new HashMap<>();

m1.put("A", 1);
m2.put("A", 1);

System.out.println(m1.equals(m2));  // true
```

------------------------------------------------------------------------

# 8️⃣ Null Handling

  Implementation   Null Key                Null Value
  ---------------- ----------------------- ------------------
  HashMap          One null                Multiple allowed
  LinkedHashMap    One null                Multiple allowed
  TreeMap          ❌ (natural ordering)   Multiple allowed
  Hashtable        ❌                      ❌

------------------------------------------------------------------------

# 9️⃣ Performance Awareness

  Operation   HashMap    TreeMap
  ----------- ---------- ----------
  put         O(1) avg   O(log n)
  get         O(1) avg   O(log n)
  remove      O(1) avg   O(log n)

------------------------------------------------------------------------

# 🔟 Example -- Counting Frequency

``` java
String str = "programming";
Map<Character, Integer> freq = new HashMap<>();

for(char c : str.toCharArray()) {
    freq.put(c, freq.getOrDefault(c, 0) + 1);
}

System.out.println(freq);
```

------------------------------------------------------------------------

# 1️⃣1️⃣ Example -- Iterating Safely

``` java
Iterator<Map.Entry<String, Integer>> it = map.entrySet().iterator();

while(it.hasNext()) {
    Map.Entry<String, Integer> entry = it.next();
    if(entry.getValue() < 0) {
        it.remove();
    }
}
```

Avoid modifying map directly during iteration.

------------------------------------------------------------------------

# 1️⃣2️⃣ Automation Framework Relevance

Map heavily used in automation:

• Storing configuration • API response parsing • JSON mapping • Test
data key-value storage • Database column mapping

Example:

``` java
Map<String, String> headers = new HashMap<>();
headers.put("Authorization", "Bearer token");
```

------------------------------------------------------------------------

# 1️⃣3️⃣ Interview Questions

Q: Why Map not part of Collection? A: Because it stores key-value pairs.

Q: Can Map contain duplicate keys? A: No.

Q: Which Map maintains insertion order? A: LinkedHashMap.

Q: Which Map maintains sorted order? A: TreeMap.

Q: Difference between containsKey and containsValue? A: containsValue is
slower.

------------------------------------------------------------------------

# 1️⃣4️⃣ Advanced Insight

Map equality ignores order (except specific implementations).

HashMap iteration order unpredictable.

Never rely on HashMap iteration order.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Why Map is separate\
✓ Core methods & contracts\
✓ Entry interface\
✓ Iteration best practices\
✓ Null rules\
✓ Performance trade-offs\
✓ Automation usage\
✓ Interview-level clarity

Next file:

hashmap-internal.md
