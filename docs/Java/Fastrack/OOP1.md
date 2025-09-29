---
sidebar_position: 1
---

### 1. Introduction to OOP

Object-Oriented Programming (OOP) organizes code into objects that bundle data and behavior together. This makes programs modular, reusable, and easier to maintain.

***

### 2. Java Classes

A class is a blueprint for creating objects. It defines what variables (fields) and methods (functions) the objects will have.

**Code Example:**

```java
class Car {
    String model;
    int year;

    void drive() {
        System.out.println("Car is driving");
    }
}
```


***

### 3. Java Objects

An object is an instance of a class. If the class is the recipe, the object is the actual cake.

**Code Example:**

```java
Car car1 = new Car();
car1.model = "Hyundai";
car1.year = 2022;
car1.drive(); // Output: Car is driving
```


***

### 4. Class vs Object

**Class** is the blueprint; **Object** is the real-world entity created using the blueprint.

**Class Example:**

```java
class Student {
    String name;
    int rollNo;
}
```

**Object Example:**

```java
Student s1 = new Student();
s1.name = "Kunal";
s1.rollNo = 68;
```


***

### 5. Properties (Fields) and Methods

Objects have properties (fields/attributes) and methods.

**Code Example:**

```java
class Student {
    String name;
    int rollNo;

    void display() {
        System.out.println("Roll: " + rollNo + ", Name: " + name);
    }
}

Student s2 = new Student();
s2.name = "Rahul";
s2.rollNo = 28;
s2.display(); // Output: Roll: 28, Name: Rahul
```


***

### 6. Accessing Instance Variables

Access object fields using the dot operator (`.`).

**Code Example:**

```java
System.out.println(s2.name); // Output: Rahul
```


***

### 7. Creating Objects

Objects are created using the `new` keyword, which also calls the class’s constructor.

**Code Example:**

```java
Student s3 = new Student();
```


***

### 8. Dynamic Memory Allocation

Objects are stored in heap memory in Java. Each `new` keyword creates new memory space for each object.

**Code Example:**

```java
Student s4 = new Student();
Student s5 = new Student();
```

Here, `s4` and `s5` reference two separate objects.

***

### 9. Manipulating Objects

Objects’ properties can be changed anytime.

**Code Example:**

```java
s4.name = "Anita";
s4.rollNo = 39;
```


***

### 10. The `this` Keyword (Intro)

`this` refers to the current object inside methods or constructors—used to avoid naming conflicts and clarify scope.

**Code Example:**

```java
class Student {
    String name;
    int rollNo;

    void setValues(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}
```


***

### 11. Keywords in Java

Java reserves words like `class`, `void`, `int`, `public`, `private`, `new`, and `final` that cannot be used as variable names.

**Code Example:**

```java
final int MAX_MARKS = 100;
```


***

### 12. Wrapper Classes

Java has object equivalents for primitive types (needed for Collections/APIs that require objects):

- `int` → `Integer`
- `char` → `Character`
- `double` → `Double`

**Code Example:**

```java
Integer rollObj = Integer.valueOf(28);
Double marksObj = Double.valueOf(92.7);
```


***

### 13. The `final` Keyword

`final` makes variables constant—their values cannot change after assignment.

**Code Example:**

```java
final int MAX_STUDENTS = 30;
// MAX_STUDENTS = 40; // Error: cannot assign a value to final variable
```


***

### 14. Garbage Collection

Java automatically deletes objects that are not referenced anymore, freeing heap space. No explicit `delete` is needed.

- Garbage collection is an automatic memory management feature in Java.
- It removes objects from memory (heap) that no longer have any references pointing to them.
- When an object is no longer referenced by any variable, it becomes eligible for garbage collection.
- The garbage collector runs in the background, freeing up memory by deleting such unreferenced objects.
- This prevents memory leaks and helps manage the limited heap memory efficiently.
- Garbage collection happens automatically; developers do not need to explicitly free memory as in some languages like C++.

**Code Example:**

```java
class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}

public class GarbageCollectionDemo {
    public static void main(String[] args) {
        Student s1 = new Student("Alice");
        Student s2 = new Student("Bob");
        
        s1 = s2;  // s1 now references the same object as s2
                  // The original object "Alice" has no more references
        
        System.gc();  // Suggest JVM to run garbage collector (not guaranteed)
        
        // At this point, the object "Alice" is eligible for garbage collection
    }
}
```

### Explanation of the example:

- Initially, two Student objects "Alice" and "Bob" are created and referenced by `s1` and `s2`.
- When the statement `s1 = s2;` executes, `s1` no longer references the "Alice" object.
- Since no variable points to the "Alice" object anymore, it is eligible for garbage collection.
- The call to `System.gc()` suggests the JVM to run the garbage collector, which may free the memory allocated to "Alice."
- This demonstrates how unreferenced objects are cleaned up automatically by Java's garbage collection mechanism.