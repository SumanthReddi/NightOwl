---
sidebar_position: 3
---

### What Is Encapsulation?

- Encapsulation is the technique of **bundling data (variables)** and methods that operate on the data into a single unit called a class.
- It protects the internal state of an object by **restricting direct access** to some of its components, usually by making fields `private`.
- Access to these private fields is provided through **public getter and setter methods**.

## What Is Encapsulation (Correct Definition)

Encapsulation means:
> **Hiding internal state and exposing behavior in a controlled way**

It binds:
- data (fields)
- behavior (methods)

and prevents **direct external manipulation**.

### Why Use Encapsulation?

- To **control how data is accessed or modified**.
- To improve **security** by hiding sensitive parts of the object.
- To maintain **flexibility** in the code by changing internal implementation without affecting external code.

### Example

```java
class Employee {
    private int salary;  // Private variable

    // Getter method to access salary
    public int getSalary() {
        return salary;
    }

    // Setter method to modify salary
    public void setSalary(int salary) {
        if (salary > 0) {
            this.salary = salary;
        }
    }
}

public class TestEncapsulation {
    public static void main(String[] args) {
        Employee emp = new Employee();
        emp.setSalary(50000);
        System.out.println("Employee Salary: " + emp.getSalary());
    }
}
```

# Data Hiding 

### What Is Data Hiding?

- Data hiding is an important aspect of **encapsulation** where sensitive data of an object is hidden from other objects.
- Achieved by declaring variables as `private` and restricting their visibility only to the class where they are declared.
- Provides **security and integrity** by disabling direct access to data outside the class.
- Controlled access is given via public getter/setter methods.

### Benefits

- Prevents unauthorized or accidental modifications.
- Reduces software complexity and protects object integrity.
- Makes maintaining and debugging easier.

## Why Encapsulation Is Needed

Without encapsulation:
- any class can change your object’s state
- invariants can be broken
- bugs become hard to trace

Example problem:
```java
user.age = -10; // invalid state
```

Encapsulation prevents this.

---

## Access Modifiers (The Enforcement Tool)

Java enforces encapsulation using **access modifiers**:

| Modifier | Scope |
|-------|-------|
| private | Same class only |
| default | Same package |
| protected | Package + subclasses |
| public | Everywhere |

Encapsulation usually means **private fields**.

---

## Basic Encapsulation Example

```java
class User {
    private int age;

    public void setAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Invalid age");
        }
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}
```

Here:
- state is protected
- rules are enforced in one place

---

## Getters and Setters (Reality Check)

Getters/setters are:
✔ useful for validation  
✔ useful for immutability  
❌ harmful when used blindly  

Bad encapsulation:
```java
public void setAge(int age) {
    this.age = age; // no validation
}
```

This exposes internal state without protection.

---

## Encapsulation ≠ Data Hiding Only

Encapsulation is also about:
- exposing **behavior**, not data
- meaningful methods

Better design:
```java
user.updateAge(25);
user.isAdult();
```

Not:
```java
user.setAge(25);
user.getAge();
```

---

## Immutability and Encapsulation

Encapsulation enables immutability:

```java
class User {
    private final String name;

    User(String name) {
        this.name = name;
    }
}
```

- No setters
- State cannot change after creation

This is strong encapsulation.

---

## Package-Level Encapsulation

Using default access:
- hides implementation within package
- exposes only public API

Common in large systems.

---

## Why This Matters

Encapsulation helps you:
- prevent invalid states
- reduce bugs
- control change impact
- design clean APIs

This becomes critical in large codebases.

---

## Common Mistakes

- Making fields public
- Generating getters/setters blindly
- Confusing encapsulation with boilerplate
- Breaking invariants through setters

---

## Best Practices

- Make fields private by default
- Expose behavior, not data
- Validate state changes
- Prefer immutability when possible
- Use package-private thoughtfully

---

## Interview Notes

- What is encapsulation?
- Why not expose fields directly?
- Are getters/setters always good?
- How does encapsulation improve design?
- Difference between encapsulation and abstraction

---

## Summary

Encapsulation is about:
- protecting state
- enforcing rules
- exposing safe behavior

Good encapsulation prevents bugs before they exist.
