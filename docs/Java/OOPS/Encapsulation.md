---
sidebar_position: 6
---

### What Is Encapsulation?

- Encapsulation is the technique of **bundling data (variables)** and methods that operate on the data into a single unit called a class.
- It protects the internal state of an object by **restricting direct access** to some of its components, usually by making fields `private`.
- Access to these private fields is provided through **public getter and setter methods**.

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