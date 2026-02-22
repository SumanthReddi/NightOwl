---
sidebar_position: 6
title: StringBuilder
---

## StringBuilder -- Complete Deep Dive

This document covers:

-   Why StringBuilder exists
-   Problem with String concatenation
-   Internal implementation details
-   Capacity & growth mechanism
-   Performance behavior
-   Time complexity analysis
-   Thread safety discussion
-   JVM optimization behavior
-   Automation framework relevance
-   Interview traps

------------------------------------------------------------------------

# 1️⃣ Why StringBuilder Exists

Problem:

String is immutable.

Example:

``` java
String s = "";
for(int i = 0; i < 5; i++){
    s = s + i;
}
```

Each iteration:

• New String object created\
• Old object becomes garbage\
• Multiple heap allocations\
• Performance overhead

This leads to:

O(n²) time complexity for repeated concatenation.

------------------------------------------------------------------------

# 2️⃣ What is StringBuilder?

StringBuilder is a mutable sequence of characters.

Declaration:

``` java
public final class StringBuilder
    extends AbstractStringBuilder
    implements java.io.Serializable, CharSequence
```

Key Properties:

• Mutable\
• Not thread-safe\
• Faster than StringBuffer\
• Uses expandable internal array

------------------------------------------------------------------------

# 3️⃣ Internal Implementation

Internally:

``` java
char[] value;
int count;
```

value → character array\
count → number of characters currently stored

Unlike String:

• Array is NOT final\
• Can grow dynamically

------------------------------------------------------------------------

# 4️⃣ Capacity & Growth Mechanism

Default constructor:

``` java
StringBuilder sb = new StringBuilder();
```

Initial capacity: 16

If capacity exceeded:

New capacity formula:

    newCapacity = (oldCapacity * 2) + 2

Example:

Initial: 16\
After overflow → 34\
Next → 70

------------------------------------------------------------------------

Example:

``` java
StringBuilder sb = new StringBuilder(5);
sb.append("HelloWorld");
```

Capacity automatically increases.

------------------------------------------------------------------------

# 5️⃣ Common Methods

## append()

``` java
sb.append("Java");
sb.append(100);
```

Time Complexity: Amortized O(1)

------------------------------------------------------------------------

## insert()

``` java
sb.insert(0, "Start ");
```

Time Complexity: O(n)

------------------------------------------------------------------------

## delete()

``` java
sb.delete(0, 5);
```

Time Complexity: O(n)

------------------------------------------------------------------------

## reverse()

``` java
sb.reverse();
```

Time Complexity: O(n)

------------------------------------------------------------------------

## toString()

``` java
String result = sb.toString();
```

Creates immutable String object.

------------------------------------------------------------------------

# 6️⃣ Performance Comparison

Example:

``` java
// Using String
String s = "";
for(int i=0; i<1000; i++){
    s += i;
}
```

Creates 1000+ objects.

------------------------------------------------------------------------

Better:

``` java
StringBuilder sb = new StringBuilder();
for(int i=0; i<1000; i++){
    sb.append(i);
}
String result = sb.toString();
```

Only one final String object created.

------------------------------------------------------------------------

# 7️⃣ Time Complexity Analysis

append() → O(1) amortized\
insert() → O(n)\
delete() → O(n)\
reverse() → O(n)

Repeated concatenation using String → O(n²)

------------------------------------------------------------------------

# 8️⃣ JVM Concatenation Optimization

Compiler converts:

``` java
String s = a + b;
```

To:

``` java
new StringBuilder()
    .append(a)
    .append(b)
    .toString();
```

Since Java 9:

Uses invokedynamic for optimization.

But in loops, manual StringBuilder is still better.

------------------------------------------------------------------------

# 9️⃣ Thread Safety

StringBuilder is NOT synchronized.

Not safe for multi-threaded use without external synchronization.

If thread safety required → use StringBuffer.

------------------------------------------------------------------------

# 🔟 Memory Behavior

Stack: sb → reference

Heap: char\[\] buffer count variable

Buffer expands dynamically.

Old buffer becomes eligible for GC.

------------------------------------------------------------------------

# 1️⃣1️⃣ Automation Framework Relevance

Used in:

• Building dynamic XPath\
• Creating JSON payloads\
• Generating test logs\
• Constructing large API request bodies

Example:

``` java
StringBuilder json = new StringBuilder();
json.append("{");
json.append(""name":"John"");
json.append("}");
```

Better performance than String concatenation.

------------------------------------------------------------------------

# 1️⃣2️⃣ Interview Questions

Q: Why is StringBuilder faster than String?\
A: Because it is mutable and avoids multiple object creation.

Q: What is default capacity?\
A: 16 characters.

Q: How does capacity grow?\
A: (oldCapacity \* 2) + 2

Q: Is StringBuilder thread-safe?\
A: No.

Q: Does toString() return same internal array?\
A: No, it creates new String object.

------------------------------------------------------------------------

# 1️⃣3️⃣ Common Mistake

Creating new StringBuilder inside loop:

``` java
for(...) {
    StringBuilder sb = new StringBuilder();
}
```

This defeats purpose.

Better to reuse builder.

------------------------------------------------------------------------

# Final Mastery Checklist

You should now understand:

✓ Why StringBuilder exists\
✓ Internal buffer mechanism\
✓ Growth formula\
✓ Performance characteristics\
✓ JVM concatenation optimization\
✓ Thread-safety behavior\
✓ Automation usage
