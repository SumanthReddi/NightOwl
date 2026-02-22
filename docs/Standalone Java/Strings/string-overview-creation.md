---
sidebar_position: 1
title: String Overview & Creation
---

## String Overview & Creation -- Architect Level Understanding

This document is not surface-level.\
It explains Strings from:

-   JVM memory perspective
-   Object model perspective
-   Performance perspective
-   Security perspective
-   Interview perspective
-   Automation framework perspective

------------------------------------------------------------------------

# 1️⃣ What Exactly is String in Java?

String is a **final, immutable, special-cased class** in `java.lang`.

Declaration (simplified):

``` java
public final class String
    implements Serializable, Comparable<String>, CharSequence
```

Important characteristics:

• Final → cannot be subclassed\
• Immutable → state cannot change after creation\
• Frequently used → optimized by JVM\
• Has dedicated memory area → String Constant Pool

------------------------------------------------------------------------

# 2️⃣ Internal Structure of String (Real Implementation Insight)

### Before Java 9

``` java
private final char[] value;
```

### After Java 9 (Compact Strings)

``` java
private final byte[] value;
private final byte coder;
```

Why changed?

To reduce memory footprint.\
If characters are Latin-1 → 1 byte per char instead of 2 bytes.

This is JVM-level optimization.

Important:

• Internal array reference is final\
• No setter methods\
• Any modification returns new object

That is how immutability is enforced.

------------------------------------------------------------------------

# 3️⃣ Where Exactly is String Stored?

There are 3 memory components involved:

1️⃣ Stack → stores reference variable\
2️⃣ Heap → stores actual String object\
3️⃣ String Constant Pool → special region inside heap

Since Java 7 → String pool moved from PermGen to Heap.

------------------------------------------------------------------------

# 4️⃣ String Literal Creation (Compiler-Level Behavior)

``` java
String s1 = "Java";
String s2 = "Java";
```

Step-by-step:

1.  Compiler checks pool
2.  If literal not present → create in pool
3.  s1 references pool object
4.  s2 references same pool object

Objects created: 1

Memory:

Stack: s1 → "Java" s2 → "Java"

Heap (String Pool): "Java"

------------------------------------------------------------------------

# 5️⃣ String Creation Using new Keyword

``` java
String s3 = new String("Java");
```

Execution flow:

1.  JVM checks if "Java" exists in pool
2.  If not → add literal to pool
3.  Create NEW object in heap (outside pool)
4.  s3 references heap object

Total objects created:

If literal not already present → 2\
If already present → 1 new heap object

Important:

Heap object and pool object are DIFFERENT.

------------------------------------------------------------------------

# 6️⃣ Object Creation Counting (Advanced Interview Section)

Case 1:

``` java
String s = "Hello";
```

Objects: 1

Case 2:

``` java
String s = new String("Hello");
```

Objects: 2 (if not in pool)

Case 3:

``` java
String s1 = "abc";
String s2 = new String("abc");
String s3 = s2.intern();
```

If "abc" already exists in pool:

New objects created: 1 (heap object only)

------------------------------------------------------------------------

Case 4 (Very Tricky):

``` java
String s = new String("abc").intern();
```

If "abc" not in pool:

• Literal added to pool\
• Heap object created\
• intern() returns pool reference

Total objects: 2\
But reference s points to pool object.

------------------------------------------------------------------------

# 7️⃣ Compile-Time vs Runtime Concatenation

Compile-time:

``` java
String s = "Hel" + "lo";
```

Compiler optimizes to:

``` java
String s = "Hello";
```

Only 1 pool object created.

------------------------------------------------------------------------

Runtime:

``` java
String part = "Hel";
String s = part + "lo";
```

Here:

• StringBuilder used internally • New object created at runtime • Not
pooled automatically

So:

``` java
System.out.println("Hello" == s); // false
```

------------------------------------------------------------------------

# 8️⃣ Why String is Final? (Theoretical Foundation)

1️⃣ Security\
Used in: - File paths - Network connections - Class loading

If mutable → security vulnerability.

2️⃣ Thread Safety\
Immutable → no synchronization needed.

3️⃣ Hashcode Caching\
String stores hash value internally after first computation.

4️⃣ Pool Optimization\
Immutability ensures pool objects are safe to reuse.

------------------------------------------------------------------------

# 9️⃣ Stack vs Heap Behavior (Precise View)

Example:

``` java
String name = "Sumanth";
```

Stack: name → reference address

Heap (Pool): "Sumanth"

------------------------------------------------------------------------

Example:

``` java
String name2 = new String("Sumanth");
```

Stack: name2 → heap object reference

Heap: Pool → "Sumanth" Heap object → "Sumanth"

Two different objects.

------------------------------------------------------------------------

# 🔟 Hidden Internal Behavior

When concatenating:

``` java
String s = a + b;
```

Compiler converts to:

``` java
String s = new StringBuilder()
               .append(a)
               .append(b)
               .toString();
```

Understanding this explains performance impact.

------------------------------------------------------------------------

# 1️⃣1️⃣ Automation Framework Relevance

In automation:

• Dynamic XPath building\
• JSON payload creation\
• API request construction\
• Logging frameworks\
• Test data parsing

Wrong usage:

``` java
String s = "";
for(int i=0; i<1000; i++){
    s = s + i;
}
```

Creates 1000+ objects → performance issue.

Correct approach → use StringBuilder.

------------------------------------------------------------------------

# 1️⃣2️⃣ Advanced Interview Questions

Q: Where is String Pool located?\
A: In Heap (since Java 7).

Q: Is String stored in stack?\
A: Only reference stored in stack.

Q: Can String Pool be garbage collected?\
A: Yes, if no references exist.

Q: Does intern() create new object every time?\
A: No, only if not present in pool.

------------------------------------------------------------------------

# Final Mastery Checklist

You must clearly understand:

✓ Internal structure\
✓ Pool mechanism\
✓ Object creation counting\
✓ Stack vs Heap behavior\
✓ Compile-time vs runtime differences\
✓ Why String is final\
✓ JVM optimization reasoning

If you understand this deeply, you are no longer beginner in Strings.
