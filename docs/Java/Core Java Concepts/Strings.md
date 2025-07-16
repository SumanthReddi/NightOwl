---
sidebar_position: 6
---

<!-- # 📘 Java Strings - Complete Notes -->

## 📌 What is a String in Java?

In Java, a **String** is a **sequence of characters**. Strings are **immutable** objects, meaning once created, their values cannot be changed.

Strings are represented by the `java.lang.String` class.

---

## ✅ Key Features

- Strings are **immutable**
- Stored in **String pool** (a special memory area inside the heap)
- Can be created using **literals** or **`new` keyword**
- Java provides rich **methods** for String manipulation

---

## 🛠️ Creating Strings

### Using String Literals
```java
String str = "Hello";
```

### Using `new` Keyword
```java
String str = new String("Hello");
```

---

## 🔁 Immutability

Once a String object is created, it cannot be changed. Any operation on a String returns a **new String object**.

```java
String str = "Java";
str.concat(" World"); // Returns a new String
System.out.println(str); // Prints "Java"
```

---

## 🧠 Memory: String Constant Pool

- Java maintains a **String Pool** to store unique string literals.
- Helps in saving memory by avoiding duplicate String objects.

```java
String a = "hello";
String b = "hello";
System.out.println(a == b); // true (same reference)
```

---

## 🔍 Common String Methods

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

---

## 🆚 `==` vs `.equals()`

- `==` checks **reference equality**
- `.equals()` checks **value equality**

```java
String a = "Hello";
String b = new String("Hello");
System.out.println(a == b);        // false
System.out.println(a.equals(b));   // true
```

---

## 🔄 String Comparison

```java
String a = "Java";
String b = "java";

a.equals(b);            // false
a.equalsIgnoreCase(b);  // true
a.compareTo(b);         // -32
```

---

## 🔃 Converting Between Strings and Other Types

### To char array
```java
char[] chars = str.toCharArray();
```

### To int
```java
int num = Integer.parseInt("123");
```

### From int
```java
String s = String.valueOf(123);
```

---

## 🧵 StringBuilder and StringBuffer

| Feature          | String           | StringBuilder     | StringBuffer     |
|------------------|------------------|-------------------|------------------|
| Mutability       | Immutable        | Mutable           | Mutable          |
| Thread-Safe      | Yes              | No                | Yes              |
| Performance      | Slow             | Fast (single thread) | Slow (multi-threaded) |

```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb); // Hello World
```

---

## 🔄 String Concatenation

### Using `+` Operator
```java
String full = "Java" + " Developer";
```

### Using `concat()`
```java
String result = "Java".concat(" Rocks");
```

### Using `StringBuilder` (best performance)
```java
StringBuilder sb = new StringBuilder();
sb.append("Java");
sb.append(" is awesome");
String result = sb.toString();
```

---

## 🔐 String Interning

Interning ensures that **all identical strings** point to the **same memory location** in the pool.

```java
String a = new String("Test");
String b = a.intern(); // refers to "Test" in the pool
```

---

## 📘 Sample Program

```java
public class StringDemo {
    public static void main(String[] args) {
        String s = "Java Programming";

        System.out.println("Length: " + s.length());
        System.out.println("Upper: " + s.toUpperCase());
        System.out.println("Contains 'Java': " + s.contains("Java"));
        System.out.println("Substring: " + s.substring(5));
    }
}
```

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

---

## 📚 Related Classes

- `StringBuilder`
- `StringBuffer`
- `Pattern` & `Matcher` (for regex)
- `StringTokenizer` (legacy)

---

