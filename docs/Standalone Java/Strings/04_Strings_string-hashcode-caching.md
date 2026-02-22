---
sidebar_position: 11
title: String HashCode Caching
---

# String hashCode Caching -- Deep Internal Analysis

This document explains:

-   How hashCode() works in String
-   Why hash value is cached
-   Internal implementation details
-   Mathematical formula used
-   Relationship with equals()
-   Impact on HashMap performance
-   Collision scenarios
-   Why immutability is required
-   JVM & memory implications
-   Interview-level reasoning

------------------------------------------------------------------------

# 1️⃣ Why hashCode Matters

hashCode() is heavily used in:

• HashMap\
• HashSet\
• Hashtable\
• ConcurrentHashMap

When you use String as a key:

``` java
Map<String, String> map = new HashMap<>();
map.put("username", "admin");
```

hashCode determines:

1.  Bucket location
2.  equals() determines exact match

------------------------------------------------------------------------

# 2️⃣ Internal Implementation of String.hashCode()

Simplified version from JDK:

``` java
public int hashCode() {
    int h = hash;
    if (h == 0 && value.length > 0) {
        for (int i = 0; i < value.length; i++) {
            h = 31 * h + value[i];
        }
        hash = h;
    }
    return h;
}
```

Important fields:

``` java
private int hash;   // cached hash value
```

------------------------------------------------------------------------

# 3️⃣ The Hash Formula

Formula:

    h = 31*h + char

Example:

String "ABC"

ASCII values: A = 65 B = 66 C = 67

Calculation:

h = 0\
h = 31*0 + 65 = 65\
h = 31*65 + 66 = 2081\
h = 31\*2081 + 67 = 64678

Final hash = 64678

------------------------------------------------------------------------

# 4️⃣ Why 31?

31 chosen because:

• Prime number\
• Good distribution\
• 31 \* i can be optimized as: (i \<\< 5) - i (bit shifting
optimization)

This makes it efficient at JVM level.

------------------------------------------------------------------------

# 5️⃣ What is Hash Caching?

Notice this line:

``` java
int h = hash;
```

First time:

• hash is 0\
• Loop runs\
• Computed value stored in hash field

Next time:

• hash != 0\
• Method returns cached value\
• No loop executed

Time complexity:

First call → O(n)\
Next calls → O(1)

------------------------------------------------------------------------

# 6️⃣ Why Hash Caching is Safe

Because String is immutable.

If content never changes:

• hashCode will never change\
• Safe to cache

If String were mutable:

• Changing content would invalidate hash\
• HashMap would break

This is one major reason String must be immutable.

------------------------------------------------------------------------

# 7️⃣ Relation Between equals() and hashCode()

Contract:

If equals() returns true → hashCode() must be equal.

String overrides both equals() and hashCode() consistently.

Example:

``` java
String s1 = new String("Java");
String s2 = new String("Java");

System.out.println(s1.equals(s2));      // true
System.out.println(s1.hashCode());      // same value
System.out.println(s2.hashCode());      // same value
```

------------------------------------------------------------------------

# 8️⃣ HashMap Flow with String Key

When inserting:

1.  Compute hashCode()
2.  Determine bucket index
3.  If collision → use equals() to check match

Because hashCode cached:

• Fast repeated lookups\
• Efficient map performance

------------------------------------------------------------------------

# 9️⃣ Collision Scenario

Different strings can have same hashCode.

Example:

"FB" and "Ea"

They produce same hash value.

But equals() differentiates them.

So:

Hash collision ≠ equality.

------------------------------------------------------------------------

# 🔟 Performance Implication

If hashCode not cached:

Every lookup in HashMap would require O(n) time for key hashing.

With caching:

First time O(n), then O(1).

Massive performance benefit in systems using many string keys.

------------------------------------------------------------------------

# 1️⃣1️⃣ Memory Impact

Each String object has:

• char\[\] or byte\[\]\
• int hash field

Extra 4 bytes per String for caching.

But saves repeated computation cost.

------------------------------------------------------------------------

# 1️⃣2️⃣ Automation Framework Relevance

In automation:

• API response validation\
• JSON parsing\
• Map-based test data\
• Configuration storage

Since keys often Strings:

Cached hash improves performance in large test suites.

------------------------------------------------------------------------

# 1️⃣3️⃣ Interview Questions

Q: Why is hashCode cached in String?\
A: Because String is immutable and hash computation is expensive.

Q: Why must equals() and hashCode() be consistent?\
A: To maintain correct behavior in hash-based collections.

Q: Can two different strings have same hashCode?\
A: Yes (collision possible).

Q: What happens if you override equals but not hashCode?\
A: Breaks HashMap behavior.

------------------------------------------------------------------------

# 1️⃣4️⃣ Advanced Insight

hash field default value is 0.

Edge case:

If actual computed hash is 0?

Then caching still works because:

String length \> 0 condition ensures calculation happens only once.

------------------------------------------------------------------------

# Final Mastery Checklist

You should now understand:

✓ String hash algorithm\
✓ Why 31 is used\
✓ Caching mechanism\
✓ Relationship with immutability\
✓ HashMap internal impact\
✓ Collision handling\
✓ Interview-level reasoning

Next file:

common-string-programs.md
