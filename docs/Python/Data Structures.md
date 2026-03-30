---
sidebar_position: 4
title: Python Data Structures
---

Python provides several built-in data structures that are essential for organizing and manipulating data efficiently. These include lists, tuples, sets, dictionaries, and more advanced constructs like list comprehensions. Below is a detailed exploration of each data structure with examples and explanations.

---

### 1. Lists

A **list** is an ordered, mutable collection of elements. It can hold items of different data types and allows dynamic resizing.

#### Basic Operations

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple

# Adding an element
fruits.append("orange")
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']

# Removing an element
fruits.remove("banana")
print(fruits)  # Output: ['apple', 'cherry', 'orange']
```

- **Explanation**:
  - `fruits[0]` accesses the first element.
  - `append()` adds an item to the end of the list.
  - `remove()` deletes the specified item.

#### List Slicing

Slicing allows you to extract sublists using indices.

```python
print(fruits[1:])     # Output: ['cherry', 'orange']
print(fruits[-1])     # Output: orange
```

- **Explanation**:
  - `fruits[1:]` retrieves all elements from index `1` to the end.
  - `fruits[-1]` retrieves the last element.

---

### 2. Tuples

A **tuple** is an ordered, immutable collection. Once created, its elements cannot be changed.

#### Basic Usage

```python
coordinates = (10, 20)
print(coordinates[0])  # Output: 10
```

- **Explanation**:
  - `coordinates[0]` retrieves the first element of the tuple.

#### Tuple Packing and Unpacking

Tuples can be used to group multiple values and unpack them into variables.

```python
a, b = coordinates
print(a, b)  # Output: 10 20
```

- **Explanation**:
  - The tuple `coordinates` is unpacked into variables `a` and `b`.

---

### 3. Sets

A **set** is an unordered collection of unique elements. It automatically removes duplicates and supports mathematical operations like union and intersection.

#### Basic Operations

```python
unique_numbers = {1, 2, 3, 2, 1}
print(unique_numbers)  # Output: {1, 2, 3}

# Adding an element
unique_numbers.add(4)
print(unique_numbers)  # Output: {1, 2, 3, 4}

# Removing an element
unique_numbers.remove(2)
print(unique_numbers)  # Output: {1, 3, 4}
```

- **Explanation**:
  - Duplicates (`2` and `1`) are removed when creating the set.
  - `add()` inserts a new element, while `remove()` deletes an existing one.

#### Set Operations

Sets support operations like union, intersection, and difference.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

print(set1.union(set2))       # Output: {1, 2, 3, 4, 5}
print(set1.intersection(set2))  # Output: {3}
```

- **Explanation**:
  - `union()` combines all unique elements from both sets.
  - `intersection()` finds common elements between the sets.

---

### 4. Dictionaries

A **dictionary** stores key-value pairs, where keys are unique and values can be of any type. It is mutable and unordered (as of Python 3.7, it maintains insertion order).

#### Basic Usage

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(person["name"])  # Output: Alice

# Modifying a value
person["age"] = 31
print(person)  # Output: {'name': 'Alice', 'age': 31, 'city': 'New York'}
```

- **Explanation**:
  - `person["name"]` retrieves the value associated with the key `"name"`.
  - Values can be updated by assigning a new value to an existing key.

#### Looping Through a Dictionary

You can iterate over keys, values, or key-value pairs.

```python
for key, value in person.items():
    print(f"{key} => {value}")
# Output:
# name => Alice
# age => 31
# city => New York
```

- **Explanation**:
  - `items()` returns a view object containing key-value pairs.
  - The `for` loop unpacks each pair into `key` and `value`.

---

### 5. List Comprehensions

List comprehensions provide a concise way to create lists based on existing iterables or conditions.

#### Basic List Comprehension

```python
squares = [x * x for x in range(6)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25]
```

- **Explanation**:
  - The expression `x * x` computes the square of each number in `range(6)`.

#### List Comprehension with Condition

You can filter elements using a condition.

```python
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # Output: [0, 2, 4, 6, 8]
```

- **Explanation**:
  - The condition `if x % 2 == 0` ensures only even numbers are included.

---

### Conclusion

Python's data structures—lists, tuples, sets, dictionaries, and list comprehensions—are powerful tools for managing data effectively. Each structure has unique properties and use cases:

- Use **lists** for ordered, mutable collections.
- Use **tuples** for immutable, fixed-size collections.
- Use **sets** for unordered collections of unique elements.
- Use **dictionaries** for key-value mappings.
- Use **list comprehensions** for concise and efficient list creation.

Mastering these data structures is fundamental to writing clean, efficient, and maintainable Python code.