---
sidebar_position: 3
---

<!-- ## What is a Constructor? -->

A constructor in Java is a special block of code that runs when an object of a class is created. Its main function is to initialize the object's state (values of variables and resources) when the object is first made.

- The constructor’s name must be the same as the class.
- It does not have a return type (not even `void`).
- It runs only once, when the object is created using the `new` keyword.

***

## Types of Constructors

### Default Constructor

- Created automatically by Java if no constructor is defined in the class.
- Takes no parameters.
- Sets everything to default values (for example, `int`=0, `String`=null, etc.).

```java
class Car {
    String model;
    int year;

    // No constructor is defined, so Java creates one for us

    public static void main(String[] args) {
        Car myCar = new Car(); // Java calls the default constructor
        System.out.println(myCar.model); // null
        System.out.println(myCar.year);  // 0
    }
}
```


***

### No-Arg Constructor (Explicit Default Constructor)

- Defined explicitly, but still takes no arguments.
- Useful for setting initial values to class fields.

```java
class Student {
    String name;
    int roll;

    // No-arg constructor
    Student() {
        name = "Default";
        roll = 1;
    }

    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s.name); // Default
        System.out.println(s.roll); // 1
    }
}
```


***

### Parameterized Constructor

- Takes one or more arguments.
- Allows initialization of object attributes with specific values.

```java
class Student {
    String name;
    int roll;

    // Parameterized constructor
    Student(String n, int r) {
        name = n;
        roll = r;
    }

    public static void main(String[] args) {
        Student s = new Student("Kunal", 7);
        System.out.println(s.name); // Kunal
        System.out.println(s.roll); // 7
    }
}
```


***

## How Constructors Work (Step-by-Step)

1. **Memory Allocation**: Object memory is allocated on the heap using `new`.
2. **Constructor Call**: The constructor is invoked (called) to initialize properties.
3. **Object Reference**: A variable stores the object’s address for use in the program.
```java
Car myCar = new Car("Toyota", 2020);
```

Here, `Car("Toyota", 2020)` is the constructor being called.

***

## Key Rules and Notes

- **Constructor name = Class name**
- **No return type**
- **Can be overloaded** (define multiple constructors with different parameters in the same class)
- Java will only create a default constructor if no other constructor is present.
- If any constructor is defined, Java won’t add a default one!

***

## Constructor Overloading

You can have many constructors in a class, each with a different parameter list.

```java
class Student {
    String name;
    int roll;

    Student() {
        name = "Default";
        roll = 0;
    }

    Student(String n) {
        name = n;
        roll = 0;
    }

    Student(String n, int r) {
        name = n;
        roll = r;
    }
}
```

Usage:

```java
Student s1 = new Student();             // Default and 0
Student s2 = new Student("Aryan");      // Aryan and 0
Student s3 = new Student("Ravi", 5);    // Ravi and 5
```


***

## Practical Example: Full Working Program

```java
class Car {
    String model;
    int year;

    // Default constructor
    Car() {
        model = "Unknown";
        year = 2020;
    }

    // Parameterized constructor
    Car(String m, int y) {
        model = m;
        year = y;
    }

    public static void main(String[] args) {
        Car car1 = new Car(); // Default
        Car car2 = new Car("Hyundai", 2023); // Parameterized

        System.out.println(car1.model + " " + car1.year); // Unknown 2020
        System.out.println(car2.model + " " + car2.year); // Hyundai 2023
    }
}
```


***

## Important Concepts

- Constructors are run automatically during object creation.
- Use `this` keyword in constructor to distinguish between instance variables and parameters.
- Constructor overloading is widely used when you want to initialize an object in different ways.
- If no constructor is made, Java assigns fields with default values (like `0`, `null`, etc.).
- Constructors can call each other using `this()` (known as constructor chaining), which is useful for code reuse and DRY principle.

***

## Constructor vs Method

|  | Constructor | Method |
| :-- | :-- | :-- |
| Name | Same as class name | Any legal identifier |
| Return Type | None (not even void) | Must have one (or void) |
| Purpose | Initialize object | Do some action |
| Called by | `new` keyword, automatic | Called by object reference manually |


***

## Advanced: Constructor Chaining Example

```java
class Student {
    String name;
    int roll;

    // No-argument constructor
    Student() {
        this("Unnamed", 0); // Calls two-argument constructor
    }

    Student(String n, int r) {
        name = n;
        roll = r;
    }
}
```


***

## Summary Tips

- Constructors set up (initialize) new objects.
- Use parameterized constructors for custom values.
- Use constructor overloading for flexibility.
- Use `this()` for code reuse across constructors.
- If a class defines any constructor, Java's default (empty) constructor will not be added.