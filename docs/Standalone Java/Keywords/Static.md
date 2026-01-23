---
sidebar_position: 1
---

### Understanding Static in Java

**Explanation:**
When a member is declared `static`, it belongs to the class rather than any instance. This allows accessing static members before creating any objects. 

The `main()` method is an example of a static method because it needs to be called to start the application without creating objects.

- **Static variables** have a single copy shared among all instances, saving memory and maintaining consistent data.
- **Static methods** can only access other static members since they lack an instance context.
- Static methods cannot use `this` or `super` keywords.
- **Static blocks** are used for complex initialization of static variables and run exactly once when the class is loaded.
- Only **nested classes** can be declared static, and static inner classes can have static members.

***

### Code Examples

**Accessing Static and Non-Static Members:**

```java
public class Human {
    String message = "Hello World";

    public static void display(Human human) {
        System.out.println(human.message);
    }

    public static void main(String[] args) {
        Human kunal = new Human();
        kunal.message = "Kunal's message";
        Human.display(kunal);
    }
}
```


***

**Static Variables, Methods, and Static Blocks:**

```java
class UseStatic {
    static int a = 3;
    static int b;

    static {
        System.out.println("Static block initialized.");
        b = a * 4;
    }

    static void meth(int x) {
        System.out.println("x = " + x);
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }

    public static void main(String args[]) {
        meth(42);
    }
}
```

*Output:*

```
Static block initialized.
x = 42
a = 3
b = 12
```


***

**Static Nested Class:**

```java
public class StaticDemo {
    static class Test {
        String name;

        public Test(String name) {
            this.name = name;
        }
    }

    public static void main(String[] args) {
        Test a = new Test("Kunal");
        Test b = new Test("Rahul");
        System.out.println(a.name); // Kunal
        System.out.println(b.name); // Rahul
    }
}
```


***

### Reasons Why Static Is Useful:

- **Memory Efficiency:** Static members save memory by having only one copy shared among all instances.
- **Early Access:** Static members can be accessed without creating objects, important for starting application execution (`main` method).
- **Utility Methods:** Methods like `Math.abs()` in the Java API are static for ease of use.
- **Controlled Instantiation:** Static blocks enable complex static variable initialization once per class.