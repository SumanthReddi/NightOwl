---
sidebar_position: 2
title: String Immutability 
---

# String Immutability -- Complete Deep Dive

Immutability is the most important property of String.

This document covers:

-   What immutability really means
-   How String enforces immutability internally
-   JVM-level reasoning
-   Security implications
-   HashCode caching mechanism
-   Reflection edge cases
-   Performance impact
-   How to design your own immutable class
-   Automation relevance

------------------------------------------------------------------------

# 1️⃣ What Does Immutable Mean?

An immutable object:

• Cannot change its internal state after creation\
• Any "modification" results in a new object

Example:

``` java
String s = "Java";
s.concat(" Rocks");

System.out.println(s);  // Output: Java
```

Why?

Because concat() creates a NEW String object.

------------------------------------------------------------------------

# 2️⃣ Proof of Immutability (Memory View)

``` java
String s1 = "Hello";
String s2 = s1.concat(" World");
```

Memory:

Heap: "Hello" "Hello World"

s1 → "Hello"\
s2 → "Hello World"

Original object unchanged.

------------------------------------------------------------------------

# 3️⃣ How String Enforces Immutability Internally

Key factors:

### 1. Class is final

``` java
public final class String
```

No subclass can modify behavior.

------------------------------------------------------------------------

### 2. Internal storage is private & final

Pre Java 9:

``` java
private final char[] value;
```

Post Java 9:

``` java
private final byte[] value;
private final byte coder;
```

• private → no external access\
• final → reference cannot change

------------------------------------------------------------------------

### 3. No setter methods

There is NO method like:

``` java
setValue()
```

------------------------------------------------------------------------

### 4. Defensive copying in constructors

Example:

``` java
public String(char value[]) {
    this.value = Arrays.copyOf(value, value.length);
}
```

Even if you pass a mutable array, it copies it.

------------------------------------------------------------------------

# 4️⃣ Why Immutability is Critical

## 1️⃣ Security

Used in:

-   File paths
-   Network connections
-   Class loading
-   Database URLs

If mutable → attacker could modify path after validation.

------------------------------------------------------------------------

## 2️⃣ Thread Safety

Immutable objects are inherently thread-safe.

No synchronization required.

------------------------------------------------------------------------

## 3️⃣ String Pool Safety

Because Strings cannot change, same object safely reused.

------------------------------------------------------------------------

## 4️⃣ HashCode Caching

String stores hash value internally:

``` java
private int hash;
```

First time hashCode() is called:

• Hash calculated\
• Stored in hash field

Next time:

• Cached value returned

If mutable → hashcode would break HashMap contract.

------------------------------------------------------------------------

# 5️⃣ What Happens Internally During concat()

Example:

``` java
String s = "Java";
s = s.concat(" Rocks");
```

Internally:

1.  New char/byte array created
2.  Old + new characters copied
3.  New String object returned

Original untouched.

------------------------------------------------------------------------

# 6️⃣ Reflection Edge Case (Advanced Interview)

Although String is immutable normally, using reflection:

``` java
import java.lang.reflect.Field;

String s = "Hello";

Field valueField = String.class.getDeclaredField("value");
valueField.setAccessible(true);

char[] value = (char[]) valueField.get(s);
value[0] = 'J';

System.out.println(s);
```

This can modify String in older Java versions.

Modern JVM protections + module system reduce this risk.

This is why immutability must be enforced carefully.

------------------------------------------------------------------------

# 7️⃣ Performance Implications

Bad Practice:

``` java
String s = "";
for(int i=0; i<1000; i++){
    s = s + i;
}
```

Each iteration:

• New String created\
• Old becomes eligible for GC

Better:

``` java
StringBuilder sb = new StringBuilder();
for(int i=0; i<1000; i++){
    sb.append(i);
}
String result = sb.toString();
```

------------------------------------------------------------------------

# 8️⃣ Designing Your Own Immutable Class

Rules:

1.  Make class final
2.  Make fields private & final
3.  No setters
4.  Defensive copying for mutable objects

Example:

``` java
public final class Employee {

    private final String name;
    private final int id;

    public Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }
}
```

If field is mutable:

``` java
private final Date date;

public Date getDate() {
    return new Date(date.getTime());
}
```

Return copy, not original.

------------------------------------------------------------------------

# 9️⃣ Automation Relevance

In automation:

• Test data should not mutate unexpectedly\
• Config values must remain constant\
• Thread-safe execution across parallel tests

Immutable objects reduce flaky tests.

------------------------------------------------------------------------

# 🔟 Advanced Interview Questions

Q: Why is String immutable?\
Answer: Security + Thread safety + Pool optimization + HashMap
integrity.

Q: How does String cache hashCode?\
Answer: Stores computed value in internal field.

Q: Can immutable objects be garbage collected?\
Answer: Yes, if no references exist.

Q: Is String 100% safe from modification?\
Answer: Normally yes, but reflection can bypass.

------------------------------------------------------------------------

# Final Mastery Checklist

You should now understand:

✓ What immutability truly means\
✓ Internal enforcement mechanisms\
✓ HashCode caching logic\
✓ Security reasoning\
✓ Performance impact\
✓ How to design immutable class

Next file:

string-pool.md
