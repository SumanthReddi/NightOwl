---
sidebar_position: 8
title: Object-Oriented Programming (OOP) in Python
---

Object-Oriented Programming (OOP) is a programming paradigm centered around objects, which encapsulate both data (attributes) and behavior (methods). Python fully supports OOP, making it a powerful tool for building modular, reusable, and maintainable code.

---

### 1. Introduction to OOP

OOP organizes software design around **objects**, which are instances of **classes**. These objects bundle data (attributes) and functionality (methods) into a single entity. Key principles of OOP include:

- **Encapsulation**: Bundling data and methods that operate on the data.
- **Inheritance**: Reusing code by inheriting attributes and methods from a parent class.
- **Polymorphism**: Allowing objects of different classes to be treated as instances of a common superclass.
- **Abstraction**: Simplifying complex systems by modeling classes appropriate to the problem domain.

---

### 2. Classes and Objects

#### Defining a Class

A **class** is a blueprint for creating objects. It defines the attributes and methods shared by all instances of the class.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")
```

- **Explanation**:
  - The `__init__` method initializes the object's attributes (`name` and `age`).
  - The `greet` method defines behavior for the object.

#### Creating an Object

An **object** is an instance of a class. You create objects by calling the class as if it were a function.

```python
p1 = Person("Alice", 25)
p1.greet()  # Output: Hello, my name is Alice and I am 25 years old.
```

- **Explanation**:
  - `p1` is an instance of the `Person` class.
  - The `greet` method accesses the object's attributes using `self`.

---

### 3. `__init__` Method

The `__init__` method is the constructor called when an object is created. It initializes the object's attributes.

```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display_info(self):
        print(f"{self.make} {self.model}")

car = Car("Toyota", "Corolla")
car.display_info()  # Output: Toyota Corolla
```

- **Explanation**:
  - The `__init__` method sets up the `make` and `model` attributes.
  - These attributes are later used in the `display_info` method.

---

### 4. Inheritance

**Inheritance** allows a class (subclass) to inherit attributes and methods from another class (superclass).

```python
class Employee(Person):
    def __init__(self, name, age, job):
        super().__init__(name, age)
        self.job = job

    def show_job(self):
        print(f"I work as a {self.job}.")

emp1 = Employee("Bob", 30, "Engineer")
emp1.greet()       # Output: Hello, my name is Bob and I am 30 years old.
emp1.show_job()    # Output: I work as a Engineer.
```

- **Explanation**:
  - The `Employee` class inherits from `Person`.
  - The `super()` function calls the parent class's `__init__` method.

---

### 5. Method Overriding

A subclass can override a method from its parent class to provide custom behavior.

```python
class Dog:
    def sound(self):
        print("Bark")

class Cat(Dog):
    def sound(self):
        print("Meow")

c = Cat()
c.sound()  # Output: Meow
```

- **Explanation**:
  - The `Cat` class overrides the `sound` method defined in `Dog`.

---

### 6. Encapsulation

**Encapsulation** restricts access to certain attributes or methods, protecting the object's internal state.

#### Private Variables

Attributes prefixed with double underscores (`__`) are treated as private.

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # private attribute

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount(1000)
acc.deposit(500)
print(acc.get_balance())  # Output: 1500
```

- **Explanation**:
  - The `__balance` attribute is private and cannot be accessed directly.
  - Methods like `deposit` and `get_balance` provide controlled access.

---

### 7. Polymorphism

**Polymorphism** allows functions or methods to behave differently based on the object they operate on.

```python
class Bird:
    def fly(self):
        print("Bird can fly")

class Penguin(Bird):
    def fly(self):
        print("Penguins can't fly")

def flying_test(bird):
    bird.fly()

flying_test(Bird())      # Output: Bird can fly
flying_test(Penguin())   # Output: Penguins can't fly
```

- **Explanation**:
  - The `flying_test` function accepts any object with a `fly` method.
  - The behavior of `fly` depends on the actual object passed (`Bird` or `Penguin`).

---

### Conclusion

This document introduces the core concepts of Object-Oriented Programming (OOP) in Python, including classes, objects, inheritance, method overriding, encapsulation, and polymorphism. By mastering these principles, you can design robust, scalable, and maintainable applications. OOP is widely used in real-world projects, from web development to machine learning, making it an essential skill for Python developers.