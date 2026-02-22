---
sidebar_position: 7
title: StringBuffer
---

# StringBuffer -- Complete Deep Dive

This document covers:

-   Why StringBuffer exists
-   How it differs from StringBuilder
-   Internal implementation
-   Synchronization mechanism
-   Performance implications
-   Thread-safety guarantees
-   JVM behavior
-   Real-world use cases
-   Automation relevance
-   Interview edge cases

------------------------------------------------------------------------

# 1️⃣ Why StringBuffer Was Introduced

Before Java 5:

There was no StringBuilder.

Problem: String is immutable → repeated concatenation expensive.

Solution introduced: StringBuffer (mutable + thread-safe).

------------------------------------------------------------------------

# 2️⃣ What is StringBuffer?

Declaration:

``` java
public final class StringBuffer
    extends AbstractStringBuilder
    implements java.io.Serializable, CharSequence
```

Important:

• Mutable\
• Thread-safe\
• Synchronized methods\
• Slower than StringBuilder

------------------------------------------------------------------------

# 3️⃣ Internal Structure

Like StringBuilder, internally:

``` java
char[] value;
int count;
```

Same expandable buffer mechanism.

Difference: Methods are synchronized.

------------------------------------------------------------------------

# 4️⃣ Synchronization Mechanism

Example method:

``` java
public synchronized StringBuffer append(String str) {
    super.append(str);
    return this;
}
```

The `synchronized` keyword ensures:

• Only one thread executes method at a time\
• Lock acquired on current object

This ensures thread safety.

------------------------------------------------------------------------

# 5️⃣ Capacity & Growth

Default capacity: 16

Growth formula (same as StringBuilder):

    newCapacity = (oldCapacity * 2) + 2

Example:

``` java
StringBuffer sb = new StringBuffer();
sb.append("Hello World");
```

Buffer expands if required.

------------------------------------------------------------------------

# 6️⃣ Common Methods

## append()

``` java
StringBuffer sb = new StringBuffer();
sb.append("Java");
sb.append(100);
```

Thread-safe append.

------------------------------------------------------------------------

## insert()

``` java
sb.insert(0, "Start ");
```

------------------------------------------------------------------------

## delete()

``` java
sb.delete(0, 5);
```

------------------------------------------------------------------------

## reverse()

``` java
sb.reverse();
```

------------------------------------------------------------------------

## toString()

``` java
String result = sb.toString();
```

Creates immutable String object.

------------------------------------------------------------------------

# 7️⃣ Performance Comparison

StringBuffer vs StringBuilder:

  Feature           StringBuffer   StringBuilder
  ----------------- -------------- ---------------
  Mutable           Yes            Yes
  Thread-safe       Yes            No
  Synchronization   Yes            No
  Performance       Slower         Faster

Reason:

Every method call in StringBuffer acquires a lock.

------------------------------------------------------------------------

# 8️⃣ When to Use StringBuffer

Use only when:

• Multiple threads modify same object\
• Thread safety required\
• Legacy systems (older Java versions)

In modern code:

Prefer StringBuilder unless synchronization is required.

------------------------------------------------------------------------

# 9️⃣ Example -- Multi-threaded Scenario

``` java
StringBuffer sb = new StringBuffer();

Thread t1 = new Thread(() -> {
    for(int i=0;i<1000;i++){
        sb.append("A");
    }
});

Thread t2 = new Thread(() -> {
    for(int i=0;i<1000;i++){
        sb.append("B");
    }
});

t1.start();
t2.start();
```

Safe because methods synchronized.

If using StringBuilder → race condition possible.

------------------------------------------------------------------------

# 🔟 Memory Behavior

Stack: sb → reference

Heap: Expandable char\[\] buffer count variable

Each append may trigger array resize.

------------------------------------------------------------------------

# 1️⃣1️⃣ Automation Relevance

Rarely needed in automation.

Most test frameworks are single-threaded per test case.

If parallel tests share mutable data → better to avoid shared objects
rather than rely on StringBuffer.

Best practice: Use StringBuilder in most automation scenarios.

------------------------------------------------------------------------

# 1️⃣2️⃣ Interview Questions

Q: Difference between StringBuilder and StringBuffer?\
A: Synchronization & performance.

Q: Is StringBuffer fully thread-safe?\
A: Individual methods are synchronized. Composite operations may still
need external synchronization.

Q: Is StringBuffer faster than String?\
A: Yes (for repeated modification).

Q: Should we use StringBuffer in modern applications?\
A: Rarely, unless strict multi-threaded mutation required.

------------------------------------------------------------------------

# 1️⃣3️⃣ Subtle Interview Trap

Even though methods are synchronized:

This is NOT atomic:

``` java
if(sb.length() > 0) {
    sb.deleteCharAt(0);
}
```

Another thread may modify between calls.

Need external synchronization for compound actions.

------------------------------------------------------------------------

# Final Mastery Checklist

You should understand:

✓ Internal working of StringBuffer\
✓ Synchronization mechanism\
✓ Performance trade-offs\
✓ Thread-safety limitations\
✓ When to use vs avoid\
✓ Automation implications

Next file:

stringbuilder-vs-stringbuffer.md
