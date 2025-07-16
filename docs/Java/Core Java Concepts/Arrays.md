---
sidebar_position: 5
---

<!-- # 📘 Java Arrays - Complete Notes -->

## 📌 What is an Array?
An **array** is a **collection of elements of the same data type**, stored in contiguous memory locations.

### ✅ Key Points
- Arrays in Java are **objects**.
- Arrays can be of **primitive types** or **objects**.
- The **size is fixed** once declared.

---

## 🔢 Array Declaration & Initialization

### Syntax:
```java
datatype[] arrayName;       // Preferred
datatype arrayName[];       // Legal but not preferred
```

### Initialization:
```java
int[] numbers = new int[5]; // Declares array of size 5 with default values (0)
```

### Declaration + Initialization:
```java
int[] marks = {90, 85, 76, 92, 88}; // Static initialization
```

---

## 🧠 Default Values
| Data Type | Default Value |
|-----------|----------------|
| int       | 0              |
| double    | 0.0            |
| boolean   | false          |
| Object    | null           |

---

## 🔁 Accessing & Modifying Elements
```java
int[] arr = {10, 20, 30};
System.out.println(arr[1]); // Output: 20
arr[1] = 25;
```

---

## 🔄 Looping through Arrays

### For loop:
```java
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
```

### Enhanced For loop (for-each):
```java
for (int num : arr) {
    System.out.println(num);
}
```

---

## 📐 Array Length
```java
int len = arr.length; // No parenthesis (it's a field, not method)
```

---

## 📊 Types of Arrays

### 1. **Single Dimensional Array**
```java
int[] nums = new int[3];
```

### 2. **Multi-Dimensional Array**
```java
int[][] matrix = new int[3][3];
matrix[0][1] = 5;
```

#### Initialization Example:
```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
```

---

## 🧩 Jagged Arrays
An array of arrays where inner arrays can have different lengths.

```java
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[3];
jagged[2] = new int[1];
```

---

## ⚙️ Common Operations

### Finding Maximum Element:
```java
int max = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max)
        max = arr[i];
}
```

### Sum of Array:
```java
int sum = 0;
for (int n : arr)
    sum += n;
```

---

## 🧰 Utility Methods from `java.util.Arrays`

```java
import java.util.Arrays;
```

### Sorting:
```java
Arrays.sort(arr);
```

### Printing:
```java
System.out.println(Arrays.toString(arr));
```

### Comparing Arrays:
```java
boolean isEqual = Arrays.equals(arr1, arr2);
```

### Copying Arrays:
```java
int[] copy = Arrays.copyOf(original, newLength);
```

---

## ❗ ArrayIndexOutOfBoundsException
Occurs when accessing an index outside the range `0 to array.length - 1`.

```java
int[] arr = new int[3];
System.out.println(arr[5]); // Throws exception
```

---

## 📌 Pros & Cons

### ✅ Advantages:
- Fast access via index
- Simple to use
- Efficient in memory for fixed-size data

### ❌ Limitations:
- Fixed size
- No built-in dynamic resizing
- Can’t mix data types

---

## 🆚 Array vs ArrayList (Quick Comparison)

| Feature        | Array                  | ArrayList                |
|----------------|------------------------|--------------------------|
| Size           | Fixed                  | Dynamic                  |
| Type           | Primitives/Objects     | Objects only             |
| Performance    | Faster (less overhead) | Slower (more overhead)   |
| Utilities      | Basic                  | Rich (add/remove/search) |
| Syntax         | Native                 | Uses methods             |

---

## 📘 Best Practices

- Use enhanced for-loop when no index is needed.
- Validate index access to avoid exceptions.
- Prefer `ArrayList` if dynamic resizing is needed.

---

## 🧪 Sample Program

```java
import java.util.Arrays;

public class ArrayExample {
    public static void main(String[] args) {
        int[] nums = {5, 3, 7, 1};
        Arrays.sort(nums);

        for (int n : nums) {
            System.out.println(n);
        }

        System.out.println("Max: " + nums[nums.length - 1]);
    }
}
```

# 📘 Java Arrays - Complete Theoretical + Practical Notes

## 🧠 What is an Array?

An **Array** in Java is a **data structure** that allows you to store multiple values of the same data type in a single variable, instead of declaring separate variables for each value.

### Example:
Instead of:
```java
int mark1 = 90;
int mark2 = 85;
int mark3 = 76;
```

You can write:
```java
int[] marks = {90, 85, 76};
```

---

## 🎯 Why Use Arrays?

- **Efficient Data Management:** Store multiple elements without multiple variables.
- **Indexed Access:** Quickly access any element using its index.
- **Improves Code Readability and Maintenance**

---

## 🏗️ Memory Representation

Arrays are stored in **contiguous memory locations**, which allows efficient indexed access.

```
Index:   0     1     2     3     4
Data :  10    20    30    40    50
```

---

## 📚 Characteristics of Arrays in Java

1. **Fixed Size:** Once created, its size cannot be changed.
2. **Homogeneous Elements:** All elements must be of the same type.
3. **Indexed Access:** First index is 0, last index is (length - 1).
4. **Stored in Heap Memory:** Arrays are objects in Java and allocated in heap.

---

## 🔎 Array Object in Java

When you create an array, Java internally does:

```java
int[] arr = new int[5];
```

Java creates an object of type `int[]` with default values set to 0.

---

## 🧾 Types of Arrays

### Single Dimensional Array

A simple linear structure:
```java
int[] arr = {1, 2, 3};
```

### Multi-Dimensional Array

Used to represent tables, matrices:
```java
int[][] matrix = {
    {1, 2},
    {3, 4}
};
```

### Jagged Array

Array of arrays with different column sizes:
```java
int[][] jagged = new int[2][];
jagged[0] = new int[3]; // Row 0 has 3 columns
jagged[1] = new int[2]; // Row 1 has 2 columns
```

---

## 🧮 Array vs Collections

| Feature        | Array        | Collection (ArrayList, etc.) |
|----------------|--------------|-------------------------------|
| Size           | Fixed        | Dynamic                      |
| Performance    | Fast         | Slower (more overhead)       |
| Type Support   | Primitives   | Only Objects                 |
| Methods        | Few          | Rich API Support             |

---

## 🧪 Internal Working

- Java arrays are internally represented as **zero-based indexed objects**.
- The length is stored as `arr.length`.
- Java runtime checks every access for bounds (`ArrayIndexOutOfBoundsException`).

---

## 💡 When to Use Arrays

- When you know the **number of elements** in advance.
- When **memory optimization** is crucial.
- When you need **fast access** via index.

If you need dynamic size, prefer `ArrayList`.

---

## ✅ Summary

- Arrays are essential building blocks for storing multiple items.
- Java treats arrays as objects.
- They offer fast access but have size limitations.
- Understanding arrays builds foundation for mastering **collections**, **data structures**, and **algorithms**.

---

## 📘 See Also

- `java.util.ArrayList`
- `System.arraycopy()`
- `java.util.Arrays` class
