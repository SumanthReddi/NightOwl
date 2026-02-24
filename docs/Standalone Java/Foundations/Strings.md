---
sidebar_position: 7
---
# Strings

## 1. What is a String in Java?

In Java, a **String** is a **sequence of characters**. Strings are **immutable** objects, meaning once created, their values cannot be changed.

Strings are represented by the `java.lang.String` class.

### Key Characteristics

-   Immutable (cannot be changed after creation)
-   Stored in String Constant Pool (for literals)
-   Final class (cannot be extended)
-   Thread-safe due to immutability
-   Implements Serializable, Comparable, CharSequence

``` java
String s = "Hello World";
```

------------------------------------------------------------------------

## 2. Why String is Immutable

Once created, the internal value cannot change.

### Reasons

✔ Security (URLs, file paths, credentials)\
✔ Thread safety\
✔ HashCode caching (important for HashMap)\
✔ String Pool optimization

### Example

``` java
String s = "Hello";
s.concat(" Java");

System.out.println(s); // Hello
```

Correct:

``` java
s = s.concat(" Java");
```

------------------------------------------------------------------------

## 3. String Constant Pool (SCP)

A special memory area inside heap where unique string literals are
stored.
- Java maintains a **String Pool** to store unique string literals.
- Helps in saving memory by avoiding duplicate String objects.

### Benefits

-   Memory efficiency
-   Faster comparisons
-   Reuse of objects

### Example

``` java
String a = "Test";
String b = "Test";

System.out.println(a == b); // true (same reference)
```

Using new:

``` java
String a = new String("Test");
String b = new String("Test");

System.out.println(a == b); // false
```

------------------------------------------------------------------------

## 4. Creating Strings

### 4.1 Literal (Recommended)

``` java
String s = "Java";
```

Stored in SCP.

### 4.2 Using new

``` java
String s = new String("Java");
```

Creates new object in heap.

------------------------------------------------------------------------

## 5. Important String Methods

| Method                      | Description                            |
|----------------------------|----------------------------------------|
| `length()`                 | Returns the number of characters       |
| `charAt(int index)`       | Returns character at given index       |
| `substring(int begin)`    | Returns substring from index           |
| `substring(int, int)`     | Returns substring between two indexes  |
| `toLowerCase()`           | Converts to lowercase                  |
| `toUpperCase()`           | Converts to uppercase                  |
| `trim()`                  | Removes leading and trailing spaces    |
| `equals(String)`          | Compares content (case-sensitive)      |
| `equalsIgnoreCase(String)`| Compares ignoring case                 |
| `compareTo(String)`       | Lexicographically compares strings     |
| `contains(String)`        | Checks if substring is present         |
| `replace(old, new)`       | Replaces characters or words           |
| `split(String regex)`     | Splits string into array               |
| `startsWith(prefix)`      | Checks start of the string             |
| `endsWith(suffix)`        | Checks end of the string               |

Examples:

### length()

Returns number of characters.

``` java
String s = "Automation";
System.out.println(s.length()); // 10
```

### charAt()

Returns character at index.

``` java
System.out.println(s.charAt(2)); // t
```

### substring()

Extracts part of string.

``` java
System.out.println(s.substring(3));    // omation
System.out.println(s.substring(3, 6)); // oma
```

### equals() vs ==

-   `==` → reference comparison
-   `equals()` → content comparison

``` java
String x = "Java";
String y = new String("Java");

System.out.println(x == y);      // false
System.out.println(x.equals(y)); // true
```

### compareTo()

Lexicographical comparison means it will compare char by char. It will compare unicode values of both strings.

```java
String a = "Java";
String b = "java";
a.compareTo(b);         // -32
```

### contains()

Checks if substring exists.

``` java
System.out.println("Hello Java".contains("Java")); // true
```

### replace()
Replaces characters or words.

``` java
System.out.println("banana".replace('a', 'o')); // bonono
```

### split()

Splits string using regex delimiter.

``` java
String data = "A,B,C";
String[] arr = data.split(",");
```

### trim()

Removes leading/trailing spaces.

``` java
String s = "   Java   ";
System.out.println(s.trim()); // "Java"
```

### Case Conversion

``` java
"Java".toUpperCase();
"JAVA".toLowerCase();
```

------------------------------------------------------------------------

## 6. String Concatenation and Performance

Using `+` repeatedly creates many temporary objects.

``` java
String result = "";

for (int i = 0; i < 5; i++) {
    result += i;
}
```

Better approach → StringBuilder.

------------------------------------------------------------------------

## 7. StringBuilder (Mutable, Not Thread-Safe)

### What is StringBuilder?

A mutable sequence of characters introduced in Java 5.

### Characteristics

-   Mutable (can modify without creating new object)
-   Not synchronized → not thread-safe
-   High performance
-   Ideal for single-thread scenarios

``` java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" Java");
```

### Important Methods

#### append()

Adds data at end.

``` java
sb.append(" World");
```

#### insert()

Adds data at specific index.

``` java
sb.insert(5, " Amazing");
```

#### delete()

Removes characters between indices.

``` java
sb.delete(5, 13);
```

#### replace()

Replaces characters in range.

``` java
sb.replace(0, 5, "Hi");
```

#### reverse()

Reverses sequence.

``` java
sb.reverse();
```

#### capacity()

Returns current capacity.

``` java
System.out.println(sb.capacity());
```

#### ensureCapacity()

Ensures minimum capacity.

``` java
sb.ensureCapacity(100);
```

### Complete Example

``` java
public class BuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Java");

        sb.append(" Programming");
        sb.insert(4, " Language");
        sb.replace(0, 4, "Core");
        sb.delete(4, 13);
        sb.reverse();

        System.out.println(sb);
    }
}
```

------------------------------------------------------------------------

## 8. StringBuffer (Mutable, Thread-Safe)

### What is StringBuffer?

A mutable sequence of characters similar to StringBuilder but
synchronized.

### Characteristics

-   Mutable
-   Thread-safe (synchronized)
-   Slower than StringBuilder
-   Used in multi-threaded environments

``` java
StringBuffer sb = new StringBuffer("Hello");
sb.append(" Java");
```

### Methods

Same as StringBuilder:

-   append()
-   insert()
-   delete()
-   replace()
-   reverse()
-   capacity()
-   ensureCapacity()

### Example

``` java
public class BufferDemo {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Multi");

        sb.append(" Thread");
        sb.insert(5, " Safe");
        sb.delete(5, 10);
        sb.reverse();

        System.out.println(sb);
    }
}
```

------------------------------------------------------------------------

## 9. String vs StringBuilder vs StringBuffer


| Feature       | String | StringBuilder | StringBuffer |
|--------------|--------|---------------|--------------|
| Mutable       | No     | Yes           | Yes          |
| Thread-safe   | Yes    | No            | Yes          |
| Performance   | Slow   | Fast          | Medium       |

------------------------------------------------------------------------

## 10. String Interning

Interning ensures that **all identical strings** point to the **same memory location** in the pool.

```java
String a = new String("Test");
String b = a.intern(); // refers to "Test" in the pool
System.out.println(s2 == "Test"); // true
```

------------------------------------------------------------------------

## 11. Conversions

### String → int

``` java
int num = Integer.parseInt("123");
```

### int → String

``` java
String s = String.valueOf(123);
```

### String → char\[\]

``` java
char[] arr = str.toCharArray();
```

------------------------------------------------------------------------

## 12. Practical Programs

### Reverse String

``` java
String input = "Automation";
String rev = new StringBuilder(input).reverse().toString();
```

### Palindrome Check

``` java
String s = "madam";
boolean isPal = s.equals(
    new StringBuilder(s).reverse().toString()
);
```

### Count Vowels

``` java
String s = "Automation";
int count = 0;

for (char c : s.toLowerCase().toCharArray()) {
    if ("aeiou".indexOf(c) != -1) count++;
}
```

------------------------------------------------------------------------

## 13. When to Use What

Use String when:

-   Data is constant
-   Few modifications

Use StringBuilder when:

-   Frequent modifications
-   Single-threaded programs

Use StringBuffer when:

-   Multi-threaded modifications
-   Need synchronization

---

## 💡 Best Practices

- Use `StringBuilder` for string manipulation inside loops.
- Use `.equals()` instead of `==` for comparison.
- Avoid creating strings with `new` unnecessarily.

---

## 🧪 Interview Tips

- Understand **String Pool** and **immutability**
- Practice questions on `substring`, `replace`, `split`
- Know differences between `String`, `StringBuilder`, and `StringBuffer`

---------------------------------------------------------------------