---
sidebar_position: 3
---

# Encapsulation

## What Is Encapsulation?

Encapsulation is the technique of **bundling data (variables)** and the
methods that operate on that data into a single unit called a **class**.

> **Bundling = grouping data (variables) and behavior (methods) together inside a class.**

It protects the internal state of an object by **restricting direct
access** to some of its components, usually by making fields `private`.

Access to these private fields is provided through **public methods**
such as getters and setters.

> **Encapsulation = Data Hiding + Controlled Access**

------------------------------------------------------------------------

## Correct Definition

Encapsulation means:

> **Hiding internal state and exposing behavior in a controlled way**

It binds together:

-   **Data (fields / variables)**
-   **Behavior (methods)**

and prevents **direct external manipulation** of an object's internal
state.

------------------------------------------------------------------------

## Why Use Encapsulation?

Encapsulation provides several benefits:

-   **Control over data access**
-   **Security for internal data**
-   **Data integrity**
-   **Flexibility in implementation**
-   **Better maintainability**

------------------------------------------------------------------------

## Real‑World Example (Bank Account)

Think about a **bank account**.

In a real bank:

-   You **cannot directly change your balance**
-   You must use operations like:
    -   `deposit()`
    -   `withdraw()`
    -   `getBalance()`

The balance is hidden and only controlled through methods.

``` java
class BankAccount {

    private double balance;

    public void deposit(double amount){
        if(amount > 0){
            balance += amount;
        }
    }

    public void withdraw(double amount){
        if(amount > 0 && amount <= balance){
            balance -= amount;
        }
    }

    public double getBalance(){
        return balance;
    }

}
```

Here:

-   `balance` is **private**
-   It cannot be modified directly
-   Only **controlled methods** can change it

This is a classic example of **encapsulation**.

------------------------------------------------------------------------

## Basic Example

``` java
class Employee {

    private int salary;

    public int getSalary(){
        return salary;
    }

    public void setSalary(int salary){
        if(salary > 0){
            this.salary = salary;
        }
    }

}

public class TestEncapsulation{

    public static void main(String[] args){

        Employee emp = new Employee();

        emp.setSalary(50000);

        System.out.println("Employee Salary: " + emp.getSalary());
    }

}
```

Output

    Employee Salary: 50000

------------------------------------------------------------------------

# Data Hiding

## What Is Data Hiding?

Data hiding is an important part of encapsulation.

It means **restricting direct access to data** and exposing it only
through controlled methods.

This is achieved by:

-   Declaring variables as `private`
-   Providing controlled access using methods

Benefits:

-   Prevents unauthorized modification
-   Protects object integrity
-   Improves system security
-   Reduces complexity

------------------------------------------------------------------------

## Why Encapsulation Is Needed

Without encapsulation any class could change an object's state.

Example:

``` java
user.age = -10;
```

This creates an **invalid state**.

Encapsulation prevents this by validating input:

``` java
public void setAge(int age){
    if(age < 0){
        throw new IllegalArgumentException("Invalid age");
    }
    this.age = age;
}
```

------------------------------------------------------------------------

## Access Modifiers

Java enforces encapsulation using **access modifiers**.

| Modifier   | Scope                  |
|------------|------------------------|
| private    | Same class only        |
| default    | Same package           |
| protected  | Package + subclasses   |
| public     | Everywhere             |

Encapsulation usually means:

> **Fields should be private and accessed through methods**

------------------------------------------------------------------------

## Encapsulation and Behavior

Encapsulation is not only about hiding data.

It also encourages **exposing meaningful behavior**.

Better design:

``` java
user.updateAge(25);
user.isAdult();
```

Instead of:

``` java
user.setAge(25);
user.getAge();
```

Objects should expose **actions**, not just raw data.

------------------------------------------------------------------------

## Immutability and Encapsulation

Encapsulation also enables **immutable objects**.

``` java
class User {

    private final String name;

    User(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

}
```

Characteristics:

-   No setters
-   State cannot change after creation

Benefits:

-   safer code
-   thread safety
-   easier maintenance

------------------------------------------------------------------------

## Common Mistakes

-   Making fields `public`
-   Creating getters/setters without validation
-   Treating classes as simple data containers
-   Allowing invalid states through setters

------------------------------------------------------------------------

## Best Practices

-   Make fields **private by default**
-   Expose **behavior instead of raw data**
-   Validate state changes
-   Prefer **immutability**
-   Use package‑private access when needed

------------------------------------------------------------------------

## Interview Notes

Common interview questions:

-   What is encapsulation in Java?
-   Why should fields not be public?
-   Difference between encapsulation and abstraction?
-   Are getters and setters always good?

------------------------------------------------------------------------

## Summary

Encapsulation helps:

-   protect internal state
-   enforce rules
-   prevent invalid object states
-   design maintainable APIs

Good encapsulation prevents many bugs **before they happen**.
