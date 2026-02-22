---
sidebar_position: 5
---

In Java, **control flow** means the order in which your program runs instructions. By default, it runs from top to bottom, one line after another. But sometimes, you want your program to make choices, repeat actions, or skip certain things. This is where **control flow statements** come in—they help your program decide what to do and when.

***

## Types of Control Flow Statements in Java

### Decision-Making Statements

These statements help your program **choose** what to do based on conditions.

- **if Statement:** Runs the code only if a condition is true.

```java
if (temperature > 30) {
    System.out.println("It's a hot day!");
}
```

- **if-else Statement:** Runs one block if true, another if false.

```java
if (score >= 60) {
    System.out.println("You passed!");
} else {
    System.out.println("You failed.");
}
```

- **if-else-if Ladder:** Checks multiple conditions, one by one.

```java
if (marks >= 90) {
    grade = 'A';
} else if (marks >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}
```

- **Nested if:** An if statement inside another if, for checking more details.

```java
if (accountActive) {
    if (balance >= amount) {
        withdraw(amount);
    }
}
```

- **switch Statement:** A simple way to pick one option from many.

```java
switch (dayOfWeek) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Invalid day");
}
```


***

### Looping Statements

Loops let your program **repeat** actions, saving you from writing the same code again and again.

- **for Loop:** Repeats a fixed number of times.

```java
for (int i = 1; i <= 5; i++) {
    System.out.print(i + " "); // Prints numbers 1 to 5
}
```

- **while Loop:** Repeats as long as a condition is true. The condition is checked before running the loop.

```java
int count = 1;
while (count <= 3) {
    System.out.print(count + " "); // Prints 1 2 3
    count++;
}
```

- **do-while Loop:** Similar to while, but the loop runs at least once because the condition is checked after running code.

```java
int num = 5;
do {
    System.out.print(num + " "); // Prints 5 at least once
    num--;
} while (num > 0);
```

- **Enhanced for Loop:** Easy way to loop through elements in a list or array.

```java
String[] colors = {"Red", "Green", "Blue"};
for (String color : colors) {
    System.out.println(color);
}
```


***

### Jump Statements

Jump statements help you **skip** or **exit** loops or methods to control the flow better.

- **break:** Stops a loop or switch immediately.

```java
for (int i = 1; i <= 10; i++) {
    if (i == 6) break; // Stop loop at 6
    System.out.print(i + " ");
}
```

- **continue:** Skips the current loop iteration and moves to the next one.

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue; // Skip number 3
    System.out.print(i + " ");
}
```

- **return:** Ends a method and optionally sends back a value.

```java
public int square(int n) {
    return n * n; // Returns the square of n
}
```


***

### Nested Control Flow

You can put loops inside loops or decisions inside loops to handle more complex situations.

```java
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        System.out.println(i + "-" + j);
    }
}
```


***

### Best Practices

- Use **switch** when comparing one variable against many constant values.
- Use **enhanced for loop** to avoid mistakes when looping through arrays or lists.
- Avoid writing too many nested blocks inside each other, because it makes code hard to read.
- Always use braces `{}` after if or loop statements to be clear, even if it’s just one line.
- Choose meaningful variable names to make your code easier to understand.

***

## Practical Examples

**Check if a number is prime:**

```java
boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```

**Print Fibonacci series:**

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


***

### Common Mistakes to Avoid

- Trying to use an array index that doesn't exist.
- Forgetting `break` in switch and causing wrong code to run.
- Creating infinite loops by not changing the loop variable.
- Writing complicated nested blocks that are hard to read and debug.

***

### Tips for Debugging

- Use `System.out.println` to print variables and check the flow.
- Try using breakpoints and step-by-step debugging in an IDE.
- Explain your code out loud (rubber duck debugging) to find mistakes.
- Keep code simple and clear.

***

### Performance Tips

- Use `System.arraycopy()` to copy arrays quickly.
- Move calculations that don’t change **outside** loops.
- Use `break` and `continue` carefully to speed up loops.
- Store array lengths in a variable when looping instead of calling `.length` each time.

```java
for (int i = 0, len = arr.length; i < len; i++) {
    // loop body
}
```


***