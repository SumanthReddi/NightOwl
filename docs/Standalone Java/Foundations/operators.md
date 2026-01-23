---
sidebar_position: 4
---

# Operators in Java (How Expressions Really Work)

## Priority
CORE_JAVA_FUNDAMENTALS

---

## Why This File Exists
Operators look simple, but many **logic bugs** come from misunderstanding how Java evaluates expressions.

This file explains:
- Types of operators in Java
- How expressions are evaluated
- Common pitfalls seen in real code and interviews

This is **pure Java language knowledge**, required before control flow and conditions.

---

## Categories of Operators in Java

Java operators can be grouped into:

1. Arithmetic operators  
2. Relational operators  
3. Logical operators  
4. Assignment operators  
5. Unary operators  
6. Ternary operator  

Each category has specific behavior.

---

## 1. Arithmetic Operators

Used for mathematical operations.

```java
int a = 10;
int b = 3;

a + b;   // 13
a - b;   // 7
a * b;   // 30
a / b;   // 3
a % b;   // 1
```

⚠️ Important:
- Integer division truncates decimals
- `%` gives remainder, not percentage

---

## 2. Relational Operators

Used for comparisons. Result is always `boolean`.

```java
a > b;
a < b;
a >= b;
a <= b;
a == b;
a != b;
```

### `==` vs `equals()` (Intro)

- `==` compares **values for primitives**
- `==` compares **references for objects**
- `equals()` compares **logical equality** (if implemented)

Deep dive comes later, but remember:
> `==` is NOT safe for object comparison

---

## 3. Logical Operators

Used to combine boolean expressions.

```java
&&   // logical AND
||   // logical OR
!    // logical NOT
```

### Short-Circuit Behavior (Very Important)

```java
if (a != 0 && (b / a) > 2) {
}
```

- Second condition executes **only if first is true**
- Prevents exceptions
- Improves performance

---

## 4. Assignment Operators

```java
=
+=
-=
*=
/=
%=
```

Example:
```java
int x = 5;
x += 3;   // x = x + 3
```

---

## 5. Unary Operators

Operate on a single operand.

```java
++x;   // pre-increment
x++;   // post-increment
--x;
-x;
```

### Pre vs Post Increment

```java
int x = 5;
System.out.println(x++); // prints 5
System.out.println(++x); // prints 7
```

Understanding this avoids subtle bugs.

---

## 6. Ternary Operator

Compact conditional expression.

```java
int max = (a > b) ? a : b;
```

Use sparingly:
- Good for simple conditions
- Bad for complex logic

---

## Operator Precedence (Awareness)

Java evaluates expressions based on precedence.

Example:
```java
int result = 10 + 2 * 3; // 16
```

Rule:
> Multiplication happens before addition

Use parentheses to avoid confusion.

---

## Common Mistakes

- Using `==` for object comparison
- Forgetting short-circuit behavior
- Misunderstanding pre/post increment
- Writing unreadable ternary expressions
- Assuming division gives decimals

---

## Best Practices

- Use parentheses for clarity
- Avoid complex expressions
- Use `equals()` for object comparison
- Prefer readability over cleverness

---

## Interview Notes

- Difference between `==` and `equals()`
- Short-circuit operators
- Pre vs post increment
- Operator precedence basics
- Integer division behavior

---

## Summary

Operators control how expressions behave.

Understanding them deeply prevents:
- logic bugs
- runtime errors
- interview confusion
