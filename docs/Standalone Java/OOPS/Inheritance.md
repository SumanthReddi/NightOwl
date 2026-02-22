---
sidebar_position: 5
---

<!-- ### What Is Inheritance? -->

Inheritance in Java allows a "child" (subclass) to acquire fields and methods from a "parent" (superclass) i.e it allows one class to acquire properties and behaviors (fields and methods) from another class. supporting code reuse and extension.

**Basic Definition:**  
When a class (subclass) is derived from another class (superclass), it inherits accessible members (except private members).

***

### Why Use Inheritance?

- **Code Reusability:** Share logic between multiple classes without duplication.
- **Extensibility:** Child classes add/extend or override superclass features.
- **Hierarchical Organization:** Easily model "is-a" relationships (example: Dog is-an Animal).

***

### Syntax in Java

```java
class Parent {
    int a = 10;
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    int b = 20;
    void show() {
        System.out.println("Child show");
    }
}

public class TestInheritance {
    public static void main(String[] args) {
        Child c = new Child();
        c.display(); // Output: Parent display
        c.show();    // Output: Child show
        System.out.println(c.a); // Output: 10
        System.out.println(c.b); // Output: 20
    }
}
```

The `extends` keyword is used so `Child` inherits from `Parent`.

***

### Types of Inheritance in Java

#### 1. Single Inheritance

One subclass inherits from one superclass.

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class SingleInheritanceDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // Output: Animal eats
        d.bark(); // Output: Dog barks
    }
}
```

#### 2. Multilevel Inheritance

A class inherits from a derived class (chain).

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Mammal extends Animal {
    void walk() {
        System.out.println("Mammal walks");
    }
}

class Dog extends Mammal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class MultilevelInheritanceDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // Output: Animal eats
        d.walk(); // Output: Mammal walks
        d.bark(); // Output: Dog barks
    }
}
```

#### 3. Hierarchical Inheritance

One superclass is inherited by multiple subclasses.

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}

public class HierarchicalInheritanceDemo {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();  // Output: Animal eats
        dog.bark(); // Output: Dog barks

        Cat cat = new Cat();
        cat.eat();  // Output: Animal eats
        cat.meow(); // Output: Cat meows
    }
}
```

#### 4. Multiple Inheritance (via Interfaces)

Java does not support multiple inheritance with classes to avoid diamond problem, but it supports it with interfaces.

```java
interface Runnable {
    void run();
}

interface Swimmable {
    void swim();
}

class Dog implements Runnable, Swimmable {
    public void run() {
        System.out.println("Dog runs");
    }

    public void swim() {
        System.out.println("Dog swims");
    }
}

public class MultipleInheritanceDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.run();  // Output: Dog runs
        d.swim(); // Output: Dog swims
    }
}
```

#### 5. Hybrid Inheritance

Combines multiple types, possible only using interfaces.

```java
interface A {
    void showA();
}

interface B {
    void showB();
}

class C {
    void showC() {
        System.out.println("C");
    }
}

class D extends C implements A, B {
    public void showA() { System.out.println("A"); }
    public void showB() { System.out.println("B"); }
}

public class HybridInheritanceDemo {
    public static void main(String[] args) {
        D obj = new D();
        obj.showA(); // Output: A
        obj.showB(); // Output: B
        obj.showC(); // Output: C
    }
}
```

***

### Accessing Parent Class Members (super Keyword)

```java
class Animal {
    String color = "white";
    Animal() { System.out.println("Animal created"); }
    void eat() { System.out.println("Animal eats"); }
}

class Dog extends Animal {
    String color = "black";
    Dog() {
        super(); // Calls Animal constructor
        System.out.println("Dog created");
    }
    void printColor() {
        System.out.println(super.color); // Output: white
        System.out.println(color);       // Output: black
    }
    void eat() {
        super.eat();    // Calls Animal's eat
        System.out.println("Dog eats");
    }
}

public class SuperKeywordDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.printColor();
        d.eat();
    }
}
```

***

### Constructors and Inheritance

- The constructor of a superclass is called first (automatically by Java, or via `super()`).
- Constructors are not inherited, but the parent constructor is always invoked. If no explicit `super()`, Java inserts a `super()` call in subclass constructors.

***

### Example: Box Problem (From Video)

```java
class Box {
    double length, width, height;
    Box() {
        this.length = -1;
        this.width = -1;
        this.height = -1;
    }
    Box(double l, double w, double h) {
        this.length = l;
        this.width = w;
        this.height = h;
    }
}

class BoxWeight extends Box {
    double weight;
    BoxWeight(double l, double w, double h, double weight) {
        super(l, w, h); // Call Box constructor
        this.weight = weight;
    }
}

public class Main {
    public static void main(String[] args) {
        BoxWeight box = new BoxWeight(2, 3, 4, 5);
        System.out.println(box.length); // Output: 2.0
        System.out.println(box.weight); // Output: 5.0
    }
}
```

***

### Rules and Limitations

- A subclass can inherit all members of the superclass except private members.
- Static methods and constructors are **not** inherited.
- Only single, multilevel, hierarchical inheritance via classes is supported.
- Multiple and hybrid inheritance are possible only via interfaces.
- Private members can be accessed in a child class only through protected/public methods in the parent.

***

### Method Overriding

A subclass can provide a specific implementation of a method that is already defined in its superclass.

```java
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    @Override
    void eat() {
        System.out.println("Dog eats bread");
    }
}

public class MethodOverridingDemo {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.eat(); // Output: Dog eats bread
    }
}
```

***

### Summary Table

| Inheritance Type | Supported via Classes | Supported via Interfaces |
| ---------------- | --------------------- | ------------------------ |
| Single           | ✅ Yes                 | ✅ Yes                    |
| Multilevel       | ✅ Yes                 | ✅ Yes                    |
| Hierarchical     | ✅ Yes                 | ✅ Yes                    |
| Multiple         | ❌ No                  | ✅ Yes                    |
| Hybrid           | ❌ No                  | ✅ Yes                    |


***

### Key Takeaways

- **Inheritance** makes Java code reusable, easy to organize, and readable.
- The `super` keyword connects subclasses to parent features.
- Multiple and hybrid inheritance are handled using interfaces only.
- Always practice with real examples (such as the Box/BoxWeight sample from the video) for best understanding.
