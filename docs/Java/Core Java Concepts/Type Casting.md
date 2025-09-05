---
sidebar_position: 10
---
## What Is Type Casting?

**Type casting** in Java means converting a variable of one data type into another data type.

- Used when you want to perform operations between different data types.
- Essential for mathematical operations, working with user input, and interfacing with APIs.

***

## Types of Type Casting

There are **two main types** of type casting in Java:

### 1. Widening (Implicit) Casting

- Also called **automatic type casting** or **upcasting**.
- Converts a smaller data type to a larger data type (less to more bytes).
- **No data loss** occurs.
- Java does this **automatically**.


#### Example: int → double

```java
int myInt = 9;
double myDouble = myInt; // Automatic: int to double

System.out.println(myInt);      // 9
System.out.println(myDouble);   // 9.0
```

- Other widening casts: `byte → short → char → int → long → float → double`

***

### 2. Narrowing (Explicit) Casting

- Also called **manual type casting** or **downcasting**.
- Converts a larger data type to a smaller data type (more to fewer bytes).
- **Potential data loss** (e.g., fraction truncated, overflow).
- You must tell Java to do it **explicitly** with a cast operator.


#### Example: double → int

```java
double myDouble = 9.78;
int myInt = (int) myDouble; // Manual: double to int

System.out.println(myDouble);   // 9.78
System.out.println(myInt);      // 9
```

- Other narrowing casts: `double → float → long → int → char → short → byte`

***

## Syntax

**Widening (automatic):**

```java
largerType var = smallerTypeValue;
```

**Narrowing (explicit):**

```java
smallerType var = (smallerType) largerTypeValue;
```


***

## Real-Life Example: Ensuring Accurate Division

If you divide two integers, the result is always an integer!
To get a more precise result, cast one value to `double`:

```java
int score = 423;
int maxScore = 500;
double percent = (double) score / maxScore * 100.0;
System.out.println("User's percentage: " + percent);
// Output: User's percentage: 84.6...
```

- Without casting, `score / maxScore` would be 0 (integer division if score < maxScore).[^4][^1]

***

## Type Casting With Objects (Reference Types)

Type casting is also used when working with objects and class hierarchies:

- **Upcasting:** (Parent reference for a child object) – automatic and safe.
- **Downcasting:** (Child reference for a parent object) – must be explicit and compiler-checked.


#### Example:

```java
class Animal {}
class Dog extends Animal {}

Animal a = new Dog();      // Upcasting (automatic)
Dog d = (Dog) a;           // Downcasting (explicit)
```


***

## Common Mistakes \& Data Loss

- **Fractional data lost:** When narrowing a floating-point type to an integer, decimals are truncated.
- **Overflow:** Assigning a large `int` to a `byte` can wrap around to unexpected values.
- **Incompatible Types:** Not all types can be cast; e.g., `int` to `boolean` is not allowed.[^6]

***

## Quick Table: Widening vs. Narrowing

| From | To | Type | Automatic? | Data Loss? |
| :-- | :-- | :-- | :-- | :-- |
| int | double | Widening | Yes | No |
| double | int | Narrowing | No | Possible |
| short | int | Widening | Yes | No |
| long | byte | Narrowing | No | Possible |


***

## Other Useful Casts

- **int to String:** `String s = String.valueOf(num);`
- **String to int:** `int num = Integer.parseInt(s);`[^5]

***

## Key Points

- Use **widening/implicit casting** for ease and safety.
- Use **narrowing/manual casting** with caution due to possible data loss.
- Type casting applies to both primitives and reference types in Java.

***

