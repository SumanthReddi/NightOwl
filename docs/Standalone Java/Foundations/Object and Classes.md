---
sidebar_position: 2
---

## What is an Object in Java?

An **object** is a fundamental building block in Java representing an entity that has:

- **State:** The attributes or data values of the object (e.g., color, size).
- **Behavior:** The actions or methods the object can perform (e.g., start, stop, deposit).
- **Identity:** A unique identifier used internally by the JVM to distinguish objects.

Objects can represent **real-world tangible things** like a chair, bike, or pen, or **logical concepts** like a banking system or customer account.
An object is an instance of a class. If the class is the recipe, the object is the actual cake.

### Example

Consider a pen as an object:

- **State:** Name (Reynolds), color (white)
- **Behavior:** Writing capability

### Object Facts

- An object is a runtime entity.
- It is an instance of a class (class is the blueprint).
- Each object has unique data and behavior based on the class it is created from.

*** 
## What is a Class in Java?

A **class** is a **blueprint or template** that defines properties (fields) and behaviors (methods) common to all objects of that type.

- It is a **logical entity**, not physical.
- A class contains:
    - Fields (variables)
    - Methods (functions)
    - Constructors
    - Initialization blocks
    - Nested classes/interfaces


### Example Code

```java
class Student {  
  // Fields (instance variables)  
  int id;  
  String name;  
  
  // Main method to create and access objects  
  public static void main(String args[]) {  
    // Creating an object of Student class  
    Student s1 = new Student();  
    
    // Accessing default field values  
    System.out.println(s1.id);   // Output: 0  
    System.out.println(s1.name); // Output: null  
  }  
}
```

### How Classes and Objects Relate

- A **class** is a **blueprint**.
- An **object** is an **instance** created from that blueprint.
- You can create multiple objects from one class, each with its own state.


## In-depth Explanation

- When you declare a class, no memory is allocated for fields or methods.
- Memory is allocated *only when an object* is instantiated using the `new` keyword.
- Constructors initialize object data when the object is created.
- Each object stores its own copy of fields (instance variables).
- Objects communicate by invoking methods on each other.
- `this` keyword refers to the current object instance.
- Java uses garbage collection to automatically free memory from unused objects.


## Simple Diagram of Class and Object

```
Class:       Student  
Blueprint:   defines id, name, methods  

Object 1:    s1 -> id=0, name=null  
Object 2:    s2 -> id=101, name="Alice"  
```
