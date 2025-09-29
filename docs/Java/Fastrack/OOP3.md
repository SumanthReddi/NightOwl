---
sidebar_position: 3
---

## 1. Inheritance

**Definition:**
Inheritance is the mechanism where one class (child/subclass) acquires the properties and behaviors (fields & methods) of another class (parent/superclass).
It helps in **code reusability** and creating a natural hierarchy (“is-a” relationship).

**Key Points:**

* `extends` keyword is used.
* Child can access parent’s methods and fields.
* Child can also override parent’s methods.
* Constructor chaining uses `super()`.

---

### Code Example

```java
// Parent Class
class Vehicle {
    String brand = "Ford";

    void honk() {
        System.out.println("Beep beep!");
    }
}

// Child Class
class Car extends Vehicle {
    int wheels = 4;

    void display() {
        System.out.println("Brand: " + brand); // inherited field
        System.out.println("Wheels: " + wheels);
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Car c = new Car();
        c.honk();     // Inherited method
        c.display();  // Child’s method
    }
}
```

**Output:**

```
Beep beep!
Brand: Ford
Wheels: 4
```

**Explanation:**

* `Car` inherits from `Vehicle`.
* `Car` object can use `honk()` from parent without redefining it.
* This avoids rewriting code and promotes reuse.

**Types of Inheritance**

The video covers various inheritance forms (Java restrictions noted):

1. **Single Inheritance** — A subclass extends one superclass.
2. **Multilevel Inheritance** — A chain: Class C extends B, B extends A.
3. **Hierarchical Inheritance** — Multiple subclasses extend a single superclass.
4. **Hybrid Inheritance** — A combination of the above forms.

* Java **does not support multiple inheritance** (i.e., a class extending more than one class) to avoid ambiguity (diamond problem).
* Interfaces or multiple interface implementation is Java’s way to circumvent the lack of multiple inheritance.
* Hybrid inheritance, when combining multiple inheritance, is not directly supported in Java either.

**Cyclic Inheritance**

* Cyclic inheritance (a class extending itself or forming a loop) is disallowed.
* A class can only have one direct superclass (except `Object`) in Java.
---

## 2. Polymorphism

**Definition:**
Polymorphism means **“many forms”**.
A single method name can perform different tasks depending on context.

**Types in Java:**

1. **Compile-time (Static)** – Method Overloading
2. **Runtime (Dynamic)** – Method Overriding

---

### Example 1: Method Overloading (Compile-time)

**Compile-time (Static) Polymorphism / Method Overloading**

* Achieved by having multiple methods in the same class with same name but different parameter lists (signature).
* Example: multiple constructors in `Box` class (no-arg constructor, parameterized constructor, copy constructor).
* The compiler resolves which method to call at compile time.



```java
class MathUtils {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class OverloadingDemo {
    public static void main(String[] args) {
        MathUtils mu = new MathUtils();
        System.out.println(mu.add(2, 3));       // calls int add
        System.out.println(mu.add(2.5, 3.5));   // calls double add
        System.out.println(mu.add(1, 2, 3));    // calls 3-arg add
    }
}
```

**Explanation:**

* Same method name `add()`, but different **parameter lists**.
* Compiler decides which method to call → *compile-time binding*.

---

### Example 2: Method Overriding (Runtime)

**Runtime (Dynamic) Polymorphism / Method Overriding**

* When a subclass overrides a method defined in its superclass, and at runtime the choice of which method to invoke depends on the actual object type (not the reference type).
* Overridden method must have same signature (name, return type, parameters).
* Use of `@Override` annotation helps enforce correctness.
* Java uses dynamic method dispatch to decide which override to run at runtime.

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

public class OverridingDemo {
    public static void main(String[] args) {
        Animal a;

        a = new Dog();
        a.sound(); // Dog barks

        a = new Cat();
        a.sound(); // Cat meows
    }
}
```

**Explanation:**

* Parent reference (`Animal`) can point to child objects (`Dog`, `Cat`).
* Actual method that runs depends on **object type**, not reference → *runtime binding*.

---
**Overloading vs Overriding: Summary**

| Feature                 | Overloading (Static)                 | Overriding (Dynamic)        |
| ----------------------- | ------------------------------------ | --------------------------- |
| Same class or subclass? | Same class (or inherited)            | Subclass overriding parent  |
| Method signature        | Different parameter list             | Same signature              |
| Binding                 | Compile time                         | Runtime                     |
| Use case                | Provide multiple ways to call method | Alter behaviour in subclass |

---

## 3. Encapsulation

**Definition:**
Encapsulation is the **wrapping of data (fields) and methods** into a single unit (class).
It protects data from unauthorized access by making variables `private` and exposing controlled access via **getters and setters**.
**Encapsulation**

* Encapsulation is the bundling of data (fields) and the methods that operate on that data into a single unit (class).
* It restricts direct access to some of an object’s components, which is often done via access modifiers (e.g. `private`, `protected`, `public`).
* Encapsulation promotes data hiding: internal state is safe from external mis-use.
* Access to internal data is allowed through methods (getters, setters) or controlled interfaces.

**Benefits:**

* Data hiding
* Controlled access
* Flexibility (you can add validation logic)

---

### Example: Bank Account

```java
class BankAccount {
    private double balance; // private field

    // Public getter
    public double getBalance() {
        return balance;
    }

    // Public setter with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient funds!");
        }
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();

        acc.deposit(500);
        acc.withdraw(200);

        System.out.println("Balance = " + acc.getBalance()); // 300
    }
}
```

**Explanation:**

* `balance` is `private`, cannot be accessed directly.
* Only way to change `balance` is through `deposit()` and `withdraw()`.
* This ensures safety (no one can set balance = -1000).

---

## 4. Abstraction

**Definition:**
Abstraction is the process of **hiding implementation details** and showing only the essential features.
* Abstraction is hiding the internal implementation details and exposing only essential features.
* It allows focusing on “what” an object does rather than “how” it does it.
* Achieved via abstract classes, interfaces, or by exposing only necessary public methods while hiding internal workings.
* It is about design-level viewpoint, while encapsulation is about implementation-level control. 

**Achieved by:**

* **Abstract classes** (may have abstract + normal methods)
* **Interfaces** (pure abstraction before Java 8)

---

### Example 1: Abstract Class

```java
abstract class Vehicle {
    abstract void start(); // abstract method

    void stop() {
        System.out.println("Vehicle stopped");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starts with key");
    }
}

class Bike extends Vehicle {
    @Override
    void start() {
        System.out.println("Bike starts with kick");
    }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        Vehicle v;

        v = new Car();
        v.start(); // Car starts with key
        v.stop();  // Vehicle stopped

        v = new Bike();
        v.start(); // Bike starts with kick
    }
}
```

**Explanation:**

* `Vehicle` is abstract: you cannot create an object of it.
* Subclasses (`Car`, `Bike`) must implement `start()`.
* Abstraction lets us work with “vehicle” concept, not details.

---

### Example 2: Interface

```java
interface Payment {
    void pay(int amount); // abstract by default
}

class CreditCardPayment implements Payment {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using Credit Card");
    }
}

class UpiPayment implements Payment {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using UPI");
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Payment p;

        p = new CreditCardPayment();
        p.pay(500);

        p = new UpiPayment();
        p.pay(300);
    }
}
```

**Explanation:**

* Interface defines a **contract** (`pay()` must be implemented).
* Different classes implement it differently (CreditCard vs UPI).
* Caller does not need to know “how” it works, only that it has `pay()`.

---

# 📝 Quick Recap (Cheat-Sheet)

| Principle         | Definition                                           | Example                         |
| ----------------- | ---------------------------------------------------- | ------------------------------- |
| **Inheritance**   | Acquire properties of parent class                   | `class Car extends Vehicle`     |
| **Polymorphism**  | Same method behaves differently                      | Overloading & Overriding        |
| **Encapsulation** | Data hiding using private fields and getters/setters | `private balance; getBalance()` |
| **Abstraction**   | Hiding implementation, showing essential             | `abstract class`, `interface`   |

***
