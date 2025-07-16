---
sidebar_position: 4
---

<!-- ## Control Flow in Java -->

### Decision-Making Statements
**if Statement:**
```java
if (temperature > 30) {
System.out.println("Hot day!");
}
```

**if-else Statement:**
```java
if (score >= 60) {
System.out.println("Pass");
} else {
System.out.println("Fail");
}
```

**if-else-if Ladder:**
```java
if (marks >= 90) {
grade = 'A';
} else if (marks >= 80) {
grade = 'B';
} else {
grade = 'C';
}
```

**Nested if:**
```java
if (accountActive) {
if (balance >= amount) {
withdraw(amount);
}
}
```

**switch Statement:**
```java
switch (dayOfWeek) {
case 1: System.out.println("Monday"); break;
case 2: System.out.println("Tuesday"); break;
default: System.out.println("Invalid day");
}
```

### Looping Statements
**for Loop:**
```java
for (int i = 1; i <= 5; i++) {
System.out.print(i + " "); // 1 2 3 4 5
}
```

**while Loop:**
```java
int count = 1;
while (count <= 3) {
System.out.print(count + " "); // 1 2 3
count++;
}
```

**do-while Loop:**
```java
int num = 5;
do {
System.out.print(num + " "); // 5 (executes at least once)
num--;
} while (num > 0);
```

**Enhanced for Loop:**
```java
String[] colors = {"Red", "Green", "Blue"};
for (String color : colors) {
System.out.println(color);
}
```

### Jump Statements
**break:**
```java
for (int i = 1; i <= 10; i++) {
if (i == 6) break; // Exit loop at 6
System.out.print(i + " "); // 1 2 3 4 5
}
```

**continue:**
```java
for (int i = 1; i <= 5; i++) {
if (i == 3) continue; // Skip 3
System.out.print(i + " "); // 1 2 4 5
}
```

**return:**
```java
public int square(int n) {
return n * n; // Exits method with value
}
```

### Nested Control Flow
**Nested Loops:**
```java
for (int i = 1; i <= 3; i++) {
for (int j = 1; j <= 2; j++) {
System.out.println(i + "-" + j);
}
}
/* Output:
1-1
1-2
2-1
2-2
3-1
3-2 */
```

**Loop with Condition:**
```java
for (int num : numbers) {
if (num % 2 == 0) {
System.out.println(num + " is even");
} else {
System.out.println(num + " is odd");
}
}
```

### Best Practices & Examples
**Best Practices:**
- Use `switch` for multiple constant values
- Prefer `for-each` for collections/arrays
- Avoid deep nesting (max 2-3 levels)
- Always include `default` in `switch`
- Use meaningful loop variable names

**Prime Check:**
```java
boolean isPrime(int n) {
if (n <= 1) return false;
for (int i = 2; i <= Math.sqrt(n); i++) {
if (n % i == 0) return false;
}
return true;
}
```

**Fibonacci Series:**
```java
int n = 10, a = 0, b = 1;
System.out.print(a + " " + b + " ");
for (int i = 2; i < n; i++) {
int next = a + b;
System.out.print(next + " ");
a = b;
b = next;
}
```

---

## Practical Examples

**Array Sorting Algorithm (Bubble Sort):**
```java
void bubbleSort(int[] arr) {
int n = arr.length;
for (int i = 0; i < n-1; i++) {
for (int j = 0; j < n-i-1; j++) {
if (arr[j] > arr[j+1]) {
// Swap elements
int temp = arr[j];
arr[j] = arr[j+1];
arr[j+1] = temp;
}
}
}
}
```

**Matrix Multiplication:**
```java
int[][] multiplyMatrices(int[][] a, int[][] b) {
int rowsA = a.length;
int colsA = a[0].length;
int colsB = b[0].length;
int[][] result = new int[rowsA][colsB];

for (int i = 0; i < rowsA; i++) {
for (int j = 0; j < colsB; j++) {
for (int k = 0; k < colsA; k++) {
result[i][j] += a[i][k] * b[k][j];
}
}
}
return result;
}
```

---

## Common Mistakes & Debugging

**Array Pitfalls:**
1. Accessing out-of-bound indices
2. Forgetting arrays are zero-indexed
3. Confusing length attribute with method call
4. Modifying array during for-each iteration
5. Shallow copying vs deep copying

**Control Flow Errors:**
- Infinite loops (missing increment)
- Switch fall-through (missing break)
- Dangling else problem
- Unreachable code after return
- Over-nested code (pyramid of doom)

**Debugging Techniques:**
1. Print Statements:
```java
System.out.println("Index: " + i + " Value: " + arr[i]);
```
2. IDE Debugger Features:
- Breakpoints
- Step-through execution
- Variable inspection
3. Rubber Duck Debugging
4. Code Simplification

**Performance Tips:**
- Prefer System.arraycopy() for large arrays
- Move invariant code outside loops
- Use break/continue to optimize iterations
- Consider algorithmic complexity
- Cache array length in loop conditions:
```java
for (int i = 0, len = arr.length; i < len; i++) { ... }
```

---

