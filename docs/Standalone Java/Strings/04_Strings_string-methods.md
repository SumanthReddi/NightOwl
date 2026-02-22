---
sidebar_position: 5
title: String Methods
---

# String Methods -- Complete Deep Dive

This document covers:

-   Frequently used String methods
-   Internal behavior insights
-   Time complexity considerations
-   Edge cases
-   Regex-based methods
-   Performance implications
-   Automation framework relevance
-   Interview-focused traps

------------------------------------------------------------------------

# 1️⃣ length()

Returns number of characters in string.

``` java
String s = "Java";
System.out.println(s.length());  // 4
```

Time Complexity: O(1)\
Reason: Length stored internally in array metadata.

------------------------------------------------------------------------

# 2️⃣ charAt(int index)

Returns character at specific index.

``` java
String s = "Java";
System.out.println(s.charAt(0));  // J
```

Edge Case:

``` java
s.charAt(10);  // StringIndexOutOfBoundsException
```

Time Complexity: O(1)

------------------------------------------------------------------------

# 3️⃣ substring(int beginIndex, int endIndex)

Extracts portion of string.

``` java
String s = "Automation";
System.out.println(s.substring(0, 4));  // Auto
```

Rules:

-   beginIndex inclusive
-   endIndex exclusive

Time Complexity: O(n) (new object created)

------------------------------------------------------------------------

# 4️⃣ indexOf()

Returns first occurrence index.

``` java
String s = "Java Programming";
System.out.println(s.indexOf("Pro"));  // 5
```

If not found → returns -1

Time Complexity: O(n)

------------------------------------------------------------------------

# 5️⃣ contains()

Checks if substring exists.

``` java
s.contains("Java");  // true
```

Internally calls indexOf()

Time Complexity: O(n)

------------------------------------------------------------------------

# 6️⃣ equalsIgnoreCase()

``` java
String a = "JAVA";
String b = "java";

System.out.println(a.equalsIgnoreCase(b));  // true
```

Useful for case-insensitive validations.

------------------------------------------------------------------------

# 7️⃣ toLowerCase() / toUpperCase()

``` java
String s = "Java";
System.out.println(s.toUpperCase());  // JAVA
```

Creates new String object (immutability).

------------------------------------------------------------------------

# 8️⃣ trim()

Removes leading and trailing spaces.

``` java
String s = "  Java  ";
System.out.println(s.trim());  // "Java"
```

Note: Does not remove internal spaces.

------------------------------------------------------------------------

# 9️⃣ replace()

``` java
String s = "Java";
System.out.println(s.replace("J", "L"));  // Lava
```

Creates new object.

------------------------------------------------------------------------

# 🔟 split() -- Regex Based

``` java
String s = "Java,Python,JS";
String[] arr = s.split(",");
```

Important:

split() uses REGEX internally.

Example:

``` java
String s = "192.168.0.1";
String[] parts = s.split("\\.");
```

Must escape dot because dot is regex special character.

Time Complexity: O(n)

------------------------------------------------------------------------

# 1️⃣1️⃣ startsWith() / endsWith()

``` java
String s = "Automation";
s.startsWith("Auto");  // true
s.endsWith("tion");    // true
```

Time Complexity: O(n)

------------------------------------------------------------------------

# 1️⃣2️⃣ compareTo()

Lexicographical comparison.

``` java
String a = "Apple";
String b = "Banana";

System.out.println(a.compareTo(b));  // negative value
```

Used in sorting.

``` Implements Comparable`<String>`{=html}. ```

------------------------------------------------------------------------

# 1️⃣3️⃣ valueOf()

Converts primitive to String.

``` java
int x = 10;
String s = String.valueOf(x);
```

Safer than concatenation in some scenarios.

------------------------------------------------------------------------

# 1️⃣4️⃣ format()

``` java
String s = String.format("Name: %s Age: %d", "John", 25);
```

Used for formatted output.

------------------------------------------------------------------------

# 1️⃣5️⃣ join() (Java 8+)

``` java
String result = String.join("-", "2025", "06", "01");
System.out.println(result);  // 2025-06-01
```

------------------------------------------------------------------------

# 1️⃣6️⃣ matches() (Regex)

``` java
String email = "test@example.com";
System.out.println(email.matches("^[A-Za-z0-9+_.-]+@(.+)$"));
```

Important: matches() checks FULL string, not partial.

------------------------------------------------------------------------

# 1️⃣7️⃣ toCharArray()

``` java
char[] arr = "Java".toCharArray();
```

Useful in algorithm problems.

------------------------------------------------------------------------

# 1️⃣8️⃣ getBytes()

``` java
byte[] bytes = "Java".getBytes();
```

Used in encoding/decoding tasks.

------------------------------------------------------------------------

# Performance Notes

• Most methods create new String object\
• Avoid repeated substring/concat in loops\
• split() is regex-based → expensive for large data\
• Prefer StringBuilder for heavy manipulation

------------------------------------------------------------------------

# Automation Framework Relevance

Common uses:

• Parsing API responses\
• Extracting dynamic IDs\
• Validating response messages\
• Splitting CSV test data\
• Case-insensitive assertions

Example:

``` java
if("success".equalsIgnoreCase(responseMessage)){
    System.out.println("Test Passed");
}
```

------------------------------------------------------------------------

# Interview Traps

Q: What is time complexity of contains()?\
A: O(n)

Q: Does trim() remove all whitespace?\
A: Only leading and trailing.

Q: Why split("\\.") instead of split(".")?\
A: Dot is regex wildcard.

Q: Does substring() modify original string?\
A: No, creates new object.

------------------------------------------------------------------------

# Mastery Checklist

You should now understand:

✓ Core String methods\
✓ Regex impact\
✓ Time complexity basics\
✓ Performance implications\
✓ Edge cases\
✓ Automation usage

Next file:

stringbuilder.md
