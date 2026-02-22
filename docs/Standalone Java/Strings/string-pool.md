---
sidebar_position: 3
title: String Constant Pool
---

## String Constant Pool -- Complete Architect-Level Deep Dive

This document explains:

-   What String Constant Pool really is
-   Where it lives in memory (JVM evolution)
-   How it works internally
-   How JVM checks & stores strings
-   Garbage collection behavior
-   intern() deep mechanics
-   Performance implications
-   Memory myths
-   Advanced interview traps
-   Automation relevance

------------------------------------------------------------------------

# 1️⃣ What is String Constant Pool?

String Constant Pool (SCP) is a special memory region inside the heap
that stores unique string literals.

Purpose:

• Avoid duplicate string objects\
• Reduce memory consumption\
• Improve performance\
• Enable reference equality optimization

Only **string literals** are automatically stored in the pool.

------------------------------------------------------------------------

# 2️⃣ JVM Evolution -- Where is the Pool Located?

Before Java 7: - Stored in PermGen (Permanent Generation)

After Java 7: - Moved to Heap memory

Why moved? PermGen had fixed size → frequent OutOfMemoryError.

Now: String pool lives inside heap and is GC-managed.

------------------------------------------------------------------------

# 3️⃣ How Pool Works Internally

When JVM encounters:

``` java
String s = "Java";
```

Steps:

1.  JVM checks if "Java" exists in pool
2.  If not → create and store in pool
3.  Reference returned to variable

If already exists: - No new object created - Reference reused

------------------------------------------------------------------------

# 4️⃣ Literal Reuse Example

``` java
String a = "Test";
String b = "Test";

System.out.println(a == b);  // true
```

Why?

Both references point to same pool object.

------------------------------------------------------------------------

# 5️⃣ new Keyword Bypasses Pool

``` java
String a = new String("Test");
String b = new String("Test");

System.out.println(a == b);  // false
```

Explanation:

Each call creates a NEW object in heap.

Pool still has only one "Test" literal.

------------------------------------------------------------------------

# 6️⃣ Visual Memory Model

Example:

``` java
String s1 = "Hello";
String s2 = new String("Hello");
```

Memory:

Stack: s1 → pool object s2 → heap object

Heap: Pool → "Hello" Heap object → "Hello"

Two separate objects.

------------------------------------------------------------------------

# 7️⃣ intern() Deep Mechanics
It is used to take a copy of a string present in Non Contant Pool & shift it to Constant Pool.

Example:

``` java
String s1 = new String("Java");
String s2 = s1.intern();

System.out.println(s1 == s2);  // false
```

Explanation:

• s1 → heap object\
• s2 → pool object

intern():

-   If string exists in pool → return reference
-   If not → add to pool and return reference

------------------------------------------------------------------------

# 8️⃣ Advanced intern() Scenario

``` java
String s1 = new String("abc");
String s2 = "abc";
System.out.println(s1.intern() == s2);  // true
```

Because:

intern() returns pool reference.

------------------------------------------------------------------------

# 9️⃣ Pool & Garbage Collection

Important concept:

Pool is NOT permanent.

If no references exist to a pooled string → it can be garbage collected.

Example:

``` java
String s = new String("Temp").intern();
s = null;
```

If no other references exist → eligible for GC.

------------------------------------------------------------------------

# 🔟 Common Memory Myth

Myth: Strings in pool cannot be garbage collected.

Reality: Since Java 7 → pool is in heap → GC applies.

------------------------------------------------------------------------

# 1️⃣1️⃣ Performance Advantage

Without pool:

``` java
String s1 = "abc";
String s2 = "abc";
```

Two objects would be created.

With pool: Only one object created.

Massive memory savings in large systems.

------------------------------------------------------------------------

# 1️⃣2️⃣ Edge Case -- Compile-Time Optimization

``` java
String s1 = "Ja" + "va";
String s2 = "Java";

System.out.println(s1 == s2);  // true
```

Compiler optimizes literals.

------------------------------------------------------------------------

But:

``` java
String part = "Ja";
String s3 = part + "va";

System.out.println(s3 == s2);  // false
```

Runtime concatenation → new object.

------------------------------------------------------------------------

# 1️⃣3️⃣ Advanced Interview Questions

Q: Can String pool cause memory leak? A: No, since Java 7 pool is
GC-managed.

Q: Why use intern()? A: To reduce duplicate strings in memory-heavy
systems.

Q: How does JVM check equality in pool? A: Uses hash-based lookup
internally.

Q: Does new String() always create 2 objects? A: Only if literal not
already in pool.

------------------------------------------------------------------------

# 1️⃣4️⃣ Automation Relevance

In automation frameworks:

• Thousands of locator strings • Repeated API payload keys • Repeated
configuration strings

Pool ensures memory optimization.

But:

Avoid excessive new String() usage.

------------------------------------------------------------------------

# Final Mastery Checklist

You should understand:

✓ Pool location evolution\
✓ How literals are stored\
✓ Object counting logic\
✓ intern() internal behavior\
✓ GC behavior of pool\
✓ Compile-time optimization\
✓ Performance implications
