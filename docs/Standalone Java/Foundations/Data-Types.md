---
sidebar_position: 3
---

Java supports **two categories** of data types:

- **Primitive Data Types**: Store values directly, fixed size.
- **Non-Primitive (Reference/Object) Data Types**: Store references to objects, flexible size and behaviors.

***

## Primitive Data Types

Primitive data types are predefined by Java and named by a reserved keyword and it can't devide more further.


| Type | Size (bits) | Default Value | Range | Description | Example |
| :-- | :--: | :--: | :--: | :-- | :-- |
| `byte` | 8 | 0 | -128 to 127 | Smallest integer type | `byte b = 100;` |
| `short` | 16 | 0 | -32,768 to 32,767 | Small integer | `short s = 2000;` |
| `int` | 32 | 0 | -2,147,483,648 to 2,147,483,647 | Default integer type | `int n = 250000;` |
| `long` | 64 | 0L | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | Large integer type | `long m = 250000L;` |
| `float` | 32 | 0.0f | 1.4e-45 to 3.4e+38 | Single precision floating-point | `float x = 2.3f;` |
| `double` | 64 | 0.0d | 4.9e-324 to 1.8e+308 | Double precision floating-point | `double y = 5.7d;` |
| `char` | 16 | '\u0000' | Unicode: 0 to 65,535 | Single character (Unicode support) | `char c = 'A';` |
| `boolean` | 1 | false | true/false | Logic | `boolean flag = true;` |


***

### Primitive Groups

- **Integer types:** byte, short, int, long
- **Floating-point types:** float, double
- **Character type:** char
- **Boolean type:** boolean

***

#### Details \& Notes

- **byte/short/int/long:** Same usage but for different numeric ranges to save memory.
- **float:** Ends with 'f' or 'F'. Precision up to 7 decimal digits.
- **double:** Ends with 'd' or 'D'. Precision up to 15 decimal digits.
- **char:** Can store any Unicode character, making it suitable for internationalization.
- **boolean:** Used for flags and logical control; only two possible values.

***

## Non-Primitive (Reference) Data Types

Non-primitives, also called reference types, point to objects created by the programmer or provided by Java.It can divide more further.


| Type | Description | Example |
| :-- | :-- | :-- |
| `String` | Sequence of characters (class) | `String s = "Hello";` |
| `Array` | Collection of similar elements | `int[] arr = {1,2,3};` |
| `Class` | User-defined or Java API class | `MyClass obj = new MyClass();` |
| `Interface` | Template for classes | `Runnable r = new Thread();` |
| `Enum` | Set of constants | `enum Color {RED,GREEN}` |


***

### Non-Primitive Details

- **Strings** are objects; many methods for text processing.
- **Arrays** can be multi-dimensional; element type must be uniform.
- **Classes/Objects** support attributes, methods, and inheritance.
- **Interfaces/enums** structure code and provide abstraction.

***

## Comparison Table

| Feature | Primitive Types | Non-Primitive Types |
| :-- | :-- | :-- |
| Memory Allocation | Stack | Heap (object), Stack (reference) |
| Supports methods | No | Yes |
| Extensible | No | Yes |
| Can be null | No | Yes |
| Size | Fixed | Variable |
| Used for | Simple values | Collections, objects, text, etc. |


***

## Example Code Block

```java
// Primitives
int age = 21;
double salary = 65000.25d;
char grade = 'A';
boolean isActive = true;

// Non-primitives
String name = "Alex";
int[] marks = {85, 93, 78};
Person person = new Person("Alex");
```


***

## Key Points

- Use **primitives** for basic values and calculations.
- Use **non-primitives** for complex data (objects, strings, arrays).
- Non-primitives provide extra functionality via methods and inheritance.
- Primitives are more memory efficient and faster for simple tasks.

***

This covers everything essential about **Java's data types**.
