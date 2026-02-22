---
sidebar_position: 4
title: equals() vs == in String 
---

# equals() vs == in String -- Complete Deep Dive

This topic is one of the most frequently asked interview questions.

Understanding this requires clarity on:

-   Reference comparison
-   Content comparison
-   How String overrides equals()
-   How hashCode relates to equality
-   Null safety patterns
-   JVM behavior
-   Real-world automation implications

------------------------------------------------------------------------

# 1️⃣ What Does == Do?

The == operator compares **references**, not content.

Example:

``` java
String a = "Java";
String b = "Java";

System.out.println(a == b);  // true
```

Why true?

Because both references point to the same object in the String Pool.

------------------------------------------------------------------------

Example 2:

``` java
String a = new String("Java");
String b = new String("Java");

System.out.println(a == b);  // false
```

Why false?

Because both objects are different in heap memory.

------------------------------------------------------------------------

# 2️⃣ What Does equals() Do?

In String class, equals() is overridden to compare content.

Simplified implementation:

``` java
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String) anObject;
        if (value.length == anotherString.value.length) {
            for (int i = 0; i < value.length; i++) {
                if (value[i] != anotherString.value[i])
                    return false;
            }
            return true;
        }
    }
    return false;
}
```

It compares character-by-character.

------------------------------------------------------------------------

# 3️⃣ Memory-Level Explanation

Example:

``` java
String s1 = "Test";
String s2 = new String("Test");
```

Memory:

s1 → pool object\
s2 → heap object

``` java
s1 == s2       // false
s1.equals(s2)  // true
```

------------------------------------------------------------------------

# 4️⃣ Important Interview Scenario

``` java
String s1 = "Hello";
String s2 = "Hel" + "lo";

System.out.println(s1 == s2);  // true
```

Because compile-time optimization makes both point to pool.

------------------------------------------------------------------------

But:

``` java
String part = "Hel";
String s3 = part + "lo";

System.out.println(s1 == s3);  // false
```

Because runtime concatenation creates new object.

------------------------------------------------------------------------

# 5️⃣ equals() and Null Safety

Bad practice:

``` java
String s = null;
s.equals("Java");   // NullPointerException
```

Safe practice:

``` java
"Java".equals(s);
```

Always call equals on known constant.

------------------------------------------------------------------------

# 6️⃣ hashCode() Relation

Important rule:

If equals() returns true → hashCode() must be same.

String overrides both equals() and hashCode().

Internal hashCode logic:

``` java
public int hashCode() {
    int h = hash;
    if (h == 0 && value.length > 0) {
        for (char c : value) {
            h = 31 * h + c;
        }
        hash = h;
    }
    return h;
}
```

Notice:

• Hash is cached\
• Computed only once

------------------------------------------------------------------------

# 7️⃣ Why hashCode Matters

In HashMap:

1.  hashCode determines bucket
2.  equals determines exact match

If equals true but hashCode different → map breaks.

This is why immutability is critical.

------------------------------------------------------------------------

# 8️⃣ Performance Considerations

== is faster (reference comparison).

equals() requires content comparison → slower for long strings.

But correctness is more important than micro-optimization.

------------------------------------------------------------------------

# 9️⃣ Automation Relevance

In automation frameworks:

Wrong:

``` java
if(response == "Success")
```

Correct:

``` java
if("Success".equals(response))
```

Using == can cause flaky validations.

------------------------------------------------------------------------

# 🔟 Advanced Interview Questions

Q: Why does String override equals()?\
A: To compare content instead of reference.

Q: When does == return true?\
A: When both references point to same object.

Q: Is equals() faster than ==?\
A: No. equals() does content comparison.

Q: Can two different strings have same hashCode?\
A: Yes (collision possible). But equals() will differentiate.

------------------------------------------------------------------------

# Final Mastery Checklist

You should now clearly understand:

✓ Reference vs content comparison\
✓ How equals() works internally\
✓ Relation with hashCode\
✓ Null-safe comparison pattern\
✓ Performance impact\
✓ Automation implications

Next file:

string-methods.md
