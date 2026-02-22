---
sidebar_position: 10
title: Compile-Time vs Runtime Concatenation
---

# Compile-Time vs Runtime Concatenation -- Deep JVM-Level Analysis

This document explains:

-   What happens during compilation
-   Constant folding & constant pool behavior
-   Runtime concatenation mechanics
-   StringBuilder generation
-   invokedynamic (Java 9+)
-   Memory implications
-   Performance differences
-   Interview edge cases
-   Automation relevance

------------------------------------------------------------------------

# 1️⃣ What is Compile-Time Concatenation?

Compile-time concatenation happens when all parts are constants.

Example:

``` java
String s = "Hel" + "lo";
```

Compiler performs constant folding.

It converts the above into:

``` java
String s = "Hello";
```

Only ONE object created in String Pool.

------------------------------------------------------------------------

# 2️⃣ Proof Using ==

``` java
String s1 = "Hello";
String s2 = "Hel" + "lo";

System.out.println(s1 == s2);  // true
```

Why?

Because compiler optimized it into same pooled literal.

------------------------------------------------------------------------

# 3️⃣ What is Runtime Concatenation?

Occurs when at least one operand is a variable.

Example:

``` java
String part = "Hel";
String s = part + "lo";
```

This cannot be resolved at compile time.

So it becomes runtime concatenation.

------------------------------------------------------------------------

# 4️⃣ What Actually Happens at Runtime

Compiler converts:

``` java
String s = part + "lo";
```

Into:

``` java
String s = new StringBuilder()
                .append(part)
                .append("lo")
                .toString();
```

So:

• New StringBuilder created\
• Buffer allocated\
• Characters copied\
• New String object created

Not stored in pool automatically.

------------------------------------------------------------------------

# 5️⃣ Memory Difference

Compile-time:

Stack: s → pool object

Heap (Pool): "Hello"

------------------------------------------------------------------------

Runtime:

Stack: s → heap object

Heap: Pool → maybe "Hello" Heap object → new "Hello"

Two separate objects.

------------------------------------------------------------------------

# 6️⃣ Java 9+ Optimization (invokedynamic)

Before Java 9:

Compiler used explicit StringBuilder bytecode.

After Java 9:

Uses invokedynamic instruction for concatenation.

JVM dynamically decides best strategy.

Example:

``` java
String s = a + b + c;
```

May optimize differently depending on context.

However:

In loops → still inefficient without manual builder.

------------------------------------------------------------------------

# 7️⃣ Tricky Interview Cases

Case 1:

``` java
final String part = "Hel";
String s = part + "lo";

System.out.println(s == "Hello");  // true
```

Because final variable with constant value → treated as compile-time
constant.

------------------------------------------------------------------------

Case 2:

``` java
String part = "Hel";
String s = part + "lo";

System.out.println(s == "Hello");  // false
```

Because not final → runtime concatenation.

------------------------------------------------------------------------

Case 3:

``` java
String s1 = "A" + "B" + "C";
String s2 = "ABC";

System.out.println(s1 == s2);  // true
```

Fully optimized at compile-time.

------------------------------------------------------------------------

# 8️⃣ Performance Implications

Compile-time concatenation:

• Zero runtime overhead\
• Single pooled object

Runtime concatenation:

• Object allocation\
• Buffer allocation\
• Character copy\
• GC pressure

Inside loops → can become O(n²).

------------------------------------------------------------------------

# 9️⃣ Automation Framework Relevance

Dynamic XPath:

``` java
String xpath = "//input[@id='" + id + "']";
```

This is runtime concatenation.

Safe because small operation.

But in heavy report generation loops → use StringBuilder.

------------------------------------------------------------------------

# 🔟 Bytecode-Level Insight (Conceptual)

Compile-time literal:

Bytecode loads constant from pool.

Runtime concatenation:

Bytecode uses invokedynamic (Java 9+) or StringBuilder chain (pre Java
9).

Understanding this shows difference in runtime cost.

------------------------------------------------------------------------

# 1️⃣1️⃣ Common Interview Questions

Q: Why does "Hel" + "lo" use same object as "Hello"?\
A: Compiler constant folding.

Q: Why does variable concatenation create new object?\
A: Cannot be resolved at compile-time.

Q: What happens if variable is final?\
A: If compile-time constant → treated as literal.

Q: Is concatenated string automatically interned?\
A: No, unless explicitly calling intern().

------------------------------------------------------------------------

# 1️⃣2️⃣ Advanced Edge Case

``` java
String s = ("Hel" + "lo").intern();
```

Already compile-time optimized → intern() returns same reference.

------------------------------------------------------------------------

# Final Mastery Checklist

You should now understand:

✓ Constant folding\
✓ Compile-time optimization\
✓ Runtime StringBuilder generation\
✓ invokedynamic optimization\
✓ Memory differences\
✓ Interview edge cases\
✓ Automation usage context

Next file:

string-hashcode-caching.md
