---
sidebar_position: 7
title: Real-World Examples
---

# Real-World Examples

Now that we’ve covered the key features of Java 8, let’s see how they can be applied in real-world scenarios. These examples demonstrate how to combine multiple Java 8 features like **Lambda Expressions**, **Streams API**, and **Optional** to solve practical problems.

## Example 1: Filtering and Processing a List of Employees

Imagine you have a list of employees, and you want to filter out employees who earn more than a certain salary, sort them by name, and print their details.

```java
import java.util.Arrays;
import java.util.List;

class Employee {
    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        return "Employee{name='" + name + "', salary=" + salary + "}";
    }
}

public class EmployeeExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 5000),
            new Employee("Bob", 7000),
            new Employee("Charlie", 6000)
        );

        // Filter employees earning more than 5500, sort by name, and print
        employees.stream()
                 .filter(employee -> employee.getSalary() > 5500)
                 .sorted((e1, e2) -> e1.getName().compareTo(e2.getName()))
                 .forEach(System.out::println);
    }
}
```

**Output**:
```text
Employee{name='Bob', salary=7000.0}
Employee{name='Charlie', salary=6000.0}
```

**Explanation**:
- The `filter` method selects employees earning more than 5500.
- The `sorted` method sorts the filtered employees by name.
- The `forEach` method prints each employee’s details.

---

## Example 2: Handling Null Values Safely with Optional

Suppose you’re retrieving a user’s email address from a database, but the value might be null. Using `Optional`, you can handle this safely without risking a `NullPointerException`.

```java
import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        // Simulate fetching an email address (could be null)
        String email = getEmailFromDatabase();

        // Use Optional to handle null values
        Optional<String> optionalEmail = Optional.ofNullable(email);

        // Provide a default value if the email is null
        String result = optionalEmail.orElse("No email available");
        System.out.println("Email: " + result);
    }

    private static String getEmailFromDatabase() {
        // Simulate a null value
        return null;
    }
}
```

**Output**:
```text
Email: No email available
```

**Explanation**:
- The `Optional.ofNullable(email)` creates an Optional that may or may not contain a value.
- The `orElse` method provides a default value (`"No email available"`) if the email is null.

---

## Example 3: Calculating Total Working Hours with Streams

Suppose you have a list of tasks, each with a duration in hours, and you want to calculate the total working hours using the Streams API.

```java
import java.util.Arrays;
import java.util.List;

public class WorkingHoursExample {
    public static void main(String[] args) {
        List<Integer> taskDurations = Arrays.asList(2, 3, 5, 4);

        // Calculate total working hours using reduce
        int totalHours = taskDurations.stream()
                                      .reduce(0, Integer::sum);

        System.out.println("Total Working Hours: " + totalHours);
    }
}
```

**Output**:
```text
Total Working Hours: 14
```

**Explanation**:
- The `reduce` method combines all elements in the list using the `Integer::sum` function.
- The result is the total sum of all task durations.

---

## Example 4: Formatting Dates with the New Date and Time API

Suppose you need to format today’s date in a specific format, such as `"dd/MM/yyyy"`. You can use the new Date and Time API for this.

```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DateFormatExample {
    public static void main(String[] args) {
        // Get today's date
        LocalDate today = LocalDate.now();

        // Format the date
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String formattedDate = today.format(formatter);

        System.out.println("Formatted Date: " + formattedDate);
    }
}
```

**Output**:
```text
Formatted Date: 05/10/2023
```

**Explanation**:
- The `LocalDate.now()` retrieves today’s date.
- The `DateTimeFormatter` formats the date into the desired pattern (`"dd/MM/yyyy"`).

---

## Key Takeaways

- Combine **Streams** and **Lambda Expressions** to process collections efficiently.
- Use **Optional** to handle null values safely and avoid `NullPointerException`.
- Leverage the **new Date and Time API** for modern and thread-safe date handling.
- These examples demonstrate how Java 8 features can simplify real-world programming tasks.