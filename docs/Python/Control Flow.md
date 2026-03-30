---
sidebar_position: 3
title: Python Control Flow and Range Function
---

Python's control flow structures and the `range()` function are essential for managing how code executes based on conditions, loops, and sequences. This document provides a comprehensive overview of these concepts, complete with examples and outputs.

---

### 1. `if`, `elif`, and `else` Statements

These conditional statements execute different blocks of code depending on whether specific conditions evaluate to `True`.

```python
x = 10
if x > 0:
    print("Positive")  # Output: Positive
elif x == 0:
    print("Zero")
else:
    print("Negative")
```

- **Explanation**: 
  - If `x > 0`, the program prints "Positive".
  - If `x == 0`, it prints "Zero".
  - Otherwise, it defaults to printing "Negative".

---

### 2. Nested Conditions

You can nest one condition inside another for more complex decision-making logic.

```python
x = 5
y = 10

if x < 10:
    if y > 5:
        print("x is less than 10 and y is greater than 5")  
        # Output: x is less than 10 and y is greater than 5
```

- **Explanation**:
  - The outer `if` checks if `x < 10`.
  - Inside that block, the inner `if` checks if `y > 5`.
  - Both conditions must be satisfied for the message to print.

---

### 3. `for` Loops

A `for` loop iterates over a sequence (like lists, tuples, strings) or a range of numbers.

```python
# Iterating through a range
for i in range(5):
    print(i)
# Output:
# 0
# 1
# 2
# 3
# 4

# Iterating through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
# Output:
# apple
# banana
# cherry
```

- **Explanation**:
  - In the first example, `range(5)` generates numbers from `0` to `4`.
  - In the second example, the loop iterates over each element in the `fruits` list and prints them.

---

### 4. `while` Loops

The `while` loop repeatedly executes as long as the given condition remains `True`.

```python
count = 0
while count < 3:
    print("Count:", count)  
    # Output:
    # Count: 0
    # Count: 1
    # Count: 2
    count += 1
```

- **Explanation**:
  - The loop starts with `count = 0`.
  - It continues executing until `count` reaches `3`.
  - After each iteration, `count` is incremented by `1`.

---

### 5. `break` and `continue`

- **`break`**: Exits the loop prematurely when a specific condition is met.
- **`continue`**: Skips the rest of the current iteration and moves to the next one.

```python
# Using break
for i in range(5):
    if i == 3:
        break  # Exit the loop when i equals 3
    print(i)
# Output:
# 0
# 1
# 2

# Using continue
for i in range(5):
    if i == 3:
        continue  # Skip iteration when i equals 3
    print(i)
# Output:
# 0
# 1
# 2
# 4
```

- **Explanation**:
  - In the `break` example, the loop stops when `i == 3`, so only values `0`, `1`, and `2` are printed.
  - In the `continue` example, the loop skips printing `3` but continues with subsequent iterations.

---

### 6. `else` with Loops

The `else` block executes after the loop completes normally (i.e., without hitting a `break`).

```python
for i in range(3):
    print(i)
else:
    print("Loop finished")  
    # Output:
    # 0
    # 1
    # 2
    # Loop finished
```

- **Explanation**:
  - The `else` block runs after the `for` loop finishes all its iterations.
  - If a `break` statement were used inside the loop, the `else` block would not execute.

---

### 7. `pass` Statement

The `pass` statement is a no-operation placeholder. It does nothing but allows you to define empty blocks where Python expects some code.

```python
for i in range(5):
    if i == 2:
        pass  # Placeholder; does nothing
    print(i)
# Output:
# 0
# 1
# 2
# 3
# 4
```

- **Explanation**:
  - When `i == 2`, the `pass` statement ensures that the block doesn't cause an error due to being empty.
  - All numbers from `0` to `4` are printed regardless of the `pass`.

---

### 8. The `range()` Function

The `range()` function generates a sequence of numbers for use in loops. It can take up to three arguments: `start`, `stop`, and `step`.

#### Basic Usage (`range(stop)`)

```python
for i in range(5):
    print(i)
# Output:
# 0
# 1
# 2
# 3
# 4
```

- **Explanation**:
  - The `range(5)` generates numbers from `0` to `4` (the upper limit `5` is exclusive).

#### Specifying Start and Stop (`range(start, stop)`)

```python
for i in range(1, 6):
    print(i)
# Output:
# 1
# 2
# 3
# 4
# 5
```

- **Explanation**:
  - The `range(1, 6)` generates numbers starting from `1` and stops before `6`.

#### Adding a Step Value (`range(start, stop, step)`)

```python
# Incrementing with a step
for i in range(1, 6, 2):
    print(i)
# Output:
# 1
# 3
# 5

# Decrementing with a negative step
for i in range(5, 0, -1):
    print(i)
# Output:
# 5
# 4
# 3
# 2
# 1
```

- **Explanation**:
  - The first example increments by `2`, resulting in `1, 3, 5`.
  - The second example decrements by `1`, resulting in `5, 4, 3, 2, 1`.

---

### Practical Use Cases of `range()`

#### Iterating Over Indices of a List

```python
fruits = ["apple", "banana", "cherry"]
for i in range(len(fruits)):
    print(f"Index {i}: {fruits[i]}")
# Output:
# Index 0: apple
# Index 1: banana
# Index 2: cherry
```

- **Explanation**:
  - `range(len(fruits))` generates indices `0, 1, 2`, which are used to access each element of the list.

#### Skipping Elements in a Sequence

```python
numbers = [10, 20, 30, 40, 50, 60]
for i in range(0, len(numbers), 2):
    print(numbers[i])
# Output:
# 10
# 30
# 50
```

- **Explanation**:
  - The `range(0, len(numbers), 2)` generates indices `0, 2, 4`, corresponding to `10, 30, 50`.

---

### Common Pitfalls with `range()`

#### Issue 1: Forgetting That `stop` Is Exclusive

```python
for i in range(1, 5):
    print(i)
# Output:
# 1
# 2
# 3
# 4
```

- **Explanation**:
  - The `range(1, 5)` generates numbers `1, 2, 3, 4` but does not include `5`.

#### Issue 2: Incorrect Step Values

```python
for i in range(1, 5, -1):
    print(i)
# Output: (No output)
```

- **Explanation**:
  - The `range(1, 5, -1)` tries to count backward from `1` to `5`, which is impossible.

---

### Conclusion

This document covers Python's control flow structures (`if`, `elif`, `else`, loops, `break`, `continue`, `else`, and `pass`) and the versatile `range()` function. Understanding these concepts is crucial for writing efficient, readable, and dynamic Python programs.