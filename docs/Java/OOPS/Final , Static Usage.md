---
sidebar_position: 7
---
## How Java Determines Which Method to Run

### Dynamic Method Dispatch

- Java determines which overridden method to call **at runtime** based on the actual class of the object, not the type of the reference variable.
- This enables **runtime polymorphism** where the method that corresponds to the object's actual class is invoked.
- Example:

```java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Test {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();  // Output: Dog barks (method of Dog called)
    }
}
```

- Although `a` is a reference of type `Animal`, the `Dog` class method is called because `a` refers to a `Dog` object.

***

# The `final` Keyword 

### Uses of `final`

1. **Final Variables:**  
   - Make variables constants; value cannot be changed once assigned.

2. **Final Methods:**  
   - Prevent methods from being overridden by subclasses.
   - Helps in improving performance by enabling early (compile-time) method binding.

3. **Final Classes:**  
   - Prevents further subclassing of the class.  
   - Implicitly makes all methods final.

### Example of Final Method

```java
class Parent {
    final void show() {
        System.out.println("Final method in Parent");
    }
}

class Child extends Parent {
    // void show() {  // This would produce compile-time error
    //     System.out.println("Trying to override final method");
    // }
}
```

### Additional Points

- Declaring both `abstract` and `final` in the same class is invalid because abstract classes are incomplete and intended to be subclassed.
- Methods declared `final` enable **early binding**, meaning the compiler knows exactly which method to call, improving performance.

***

# Can We Override Static Methods?

- **Static methods belong to the class, not instances**, so they are resolved at compile time.
- They **cannot be truly overridden** but can be **hidden** in subclasses by declaring a static method with the same signature.
- Example of Static Method Hiding:

```java
class Parent {
    static void display() {
        System.out.println("Static method in Parent");
    }
}

class Child extends Parent {
    static void display() {
        System.out.println("Static method in Child");
    }
}

public class TestStatic {
    public static void main(String[] args) {
        Parent p = new Child();
        p.display();  // Output: Static method in Parent (early binding)
    }
}
```

- The static method called depends on the **reference type**, not the object type.
- This is why **static methods cannot participate in dynamic polymorphism** and are resolved using early binding.

