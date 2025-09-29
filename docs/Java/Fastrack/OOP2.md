---
sidebar_position: 1
---
### 1. Packages

**Explanation:**
Packages group related classes and interfaces to organize code and avoid name conflicts, similar to folders in a file system.

**Reason:** Helps manage large projects by logically grouping code.

**Code Example:**

```java
package com.example.util;

public class Helper {
    public static void greet() {
        System.out.println("Hello from Helper");
    }
}
```


***

### 2. Import Statement

**Explanation:**
The `import` statement allows you to use classes from other packages without specifying the full package name every time.

**Reason:** Simplifies code and manages dependencies cleanly.

**Code Example:**

```java
import com.example.util.Helper;

public class Test {
    public static void main(String[] args) {
        Helper.greet();  // Calls method from imported class
    }
}
```


***

### 3. Static Keyword

**Explanation:**
`static` members belong to the class itself rather than any particular object, so they are shared by all instances.

**Reason:** Saves memory by sharing common data/methods.

**Code Example:**

```java
class Counter {
    static int count = 0;

    Counter() {
        count++;
    }

    static void displayCount() {
        System.out.println("Count is " + count);
    }
}

public class TestStatic {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        Counter.displayCount();  // Output: Count is 2
    }
}
```


***

### 4. Static Variables

**Explanation:**
Static (class) variables have only one copy shared among all objects.

**Reason:** Reduces memory usage and ensures data consistency.

**Code Example:**

```java
class Student {
    static String schoolName = "ABC School";
    String name;

    Student(String name) {
        this.name = name;
    }
}

public class TestStaticVar {
    public static void main(String[] args) {
        Student s1 = new Student("Alice");
        Student s2 = new Student("Bob");

        System.out.println(Student.schoolName);  // ABC School
        s1.schoolName = "XYZ School";
        System.out.println(s2.schoolName);      // XYZ School (shared)
    }
}
```


***

### 5. Non-Static Members in Static Context

**Explanation:**
Static methods cannot directly access non-static (instance) variables or methods because they belong to the class, not an instance.

**Reason:** Static methods belong to class, not any object.

**Code Example (Invalid usage):**

```java
class Example {
    int instanceVar = 5;

    static void staticMethod() {
        // System.out.println(instanceVar);  // Error: cannot access instanceVar
    }
}
```


***

### 6. Static Members Inside Non-Static Context

**Explanation:**
Instance methods can access static variables and methods because static members are shared among all instances.

**Reason:** Static members belong to the class, accessible anywhere.

**Code Example:**

```java
class Example {
    static int staticVar = 10;

    void instanceMethod() {
        System.out.println("Static variable: " + staticVar);
    }
}
```


***

### 7. `this` Keyword Inside Static Methods

**Explanation:**
`this` refers to the current instance. Since static methods belong to the class, they have no instance, so `this` cannot be used inside them.

**Reason:** Static methods have no instance context.

**Code Example (Invalid usage):**

```java
class Example {
    static void staticMethod() {
        // System.out.println(this);  // Error: 'this' cannot be used in static context
    }
}
```


***

### 8. Initialization of Static Variables

**Explanation:**
Static variables are initialized only once when the class is loaded, sometimes using static blocks for complex initialization.

**Reason:** Ensures variable is set before use, only once.

**Code Example:**

```java
class Example {
    static int value;

    static {
        value = 100;
        System.out.println("Static block initialized value to " + value);
    }
}
```


***

### 9. Inner Classes

**Explanation:**
Classes defined inside another class, useful for tightly coupled classes. Inner classes can access outer class members directly.

**Reason:** Encapsulates helper classes tightly coupled with outer class.

**Code Example:**

```java
class Outer {
    int outerValue = 10;

    class Inner {
        void display() {
            System.out.println("Outer value is " + outerValue);
        }
    }
}

public class TestInner {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.display();  // Output: Outer value is 10
    }
}
```


***

### 10. Singleton Class

**Explanation:**
A class designed to have only one instance throughout the program, ensuring controlled access.

**Reason:** Controls resource usage and consistent access.

**Code Example:**

```java
class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Singleton instance");
    }
}

public class TestSingleton {
    public static void main(String[] args) {
        Singleton singleton = Singleton.getInstance();
        singleton.showMessage();  // Output: Singleton instance
    }
}
```


***

### 11. In-built Methods (Override Example)

**Explanation:**
Classes inherit methods like `toString()` from the Object class, which can be overridden to provide meaningful information about objects.

**Reason:** Improves readability when printing objects.

**Code Example:**

```java
class Student {
    String name;
    int rollNo;

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', rollNo=" + rollNo + "}";
    }
}

public class TestToString {
    public static void main(String[] args) {
        Student s = new Student("Kunal", 7);
        System.out.println(s);  // Output: Student{name='Kunal', rollNo=7}
    }
}
```
