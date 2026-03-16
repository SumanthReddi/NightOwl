---
sidebar_position: 10
title: Real-World Examples of Exception Handling
---

# Real-World Examples of Exception Handling

Exception handling is not just a theoretical concept—it’s a practical tool used to build robust applications and stable test automation frameworks. In this section, we’ll explore real-world examples of exception handling in standalone Java programs and automation testing scenarios.

---

## 1. Real-World Example: File Reading in Java

Reading files is a common task in Java applications, but it can fail due to issues like missing files or permission errors. Proper exception handling ensures that these issues are handled gracefully.

### Example: Reading a File with Try-With-Resources

```java
import java.io.FileReader;
import java.io.IOException;

public class FileReaderExample {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("data.txt")) {
            int content;
            while ((content = reader.read()) != -1) {
                System.out.print((char) content);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
```

**Explanation**:
- The `try-with-resources` statement ensures that the `FileReader` is closed automatically.
- If the file does not exist or cannot be read, an `IOException` is caught and logged.

---

## 2. Real-World Example: Database Connection in Java

Connecting to a database is another common scenario where exceptions can occur due to network issues, invalid credentials, or SQL syntax errors.

### Example: Handling SQLException

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnectionExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String username = "root";
        String password = "password";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            System.out.println("Database connected successfully.");
        } catch (SQLException e) {
            System.out.println("Error connecting to database: " + e.getMessage());
        }
    }
}
```

**Explanation**:
- The `try-with-resources` statement ensures that the database connection is closed automatically.
- If the connection fails, an `SQLException` is caught and logged.

---

## 3. Real-World Example: Selenium WebDriver in Automation Testing

In test automation, exceptions often occur when interacting with web elements. Proper exception handling ensures that tests do not crash and provide meaningful feedback.

### Example: Handling NoSuchElementException in Selenium

```java
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumExceptionHandling {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        try {
            driver.get("https://example.com");
            // Attempt to find an element that may not exist
            driver.findElement(By.id("nonExistentElement")).click();
        } catch (NoSuchElementException e) {
            System.out.println("Error: Element not found on the page.");
        } finally {
            // Ensure the browser is closed regardless of success or failure
            driver.quit();
        }
    }
}
```

**Explanation**:
- The `try` block attempts to find and click an element.
- If the element is not found, a `NoSuchElementException` is caught and logged.
- The `finally` block ensures the browser is closed, even if an exception occurs.

---

## 4. Real-World Example: API Testing with REST Assured

When testing APIs, exceptions can occur due to network issues, invalid responses, or timeouts. Proper exception handling ensures that these issues are logged and tests continue running.

### Example: Handling IOException in API Testing

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class ApiTestingExample {
    public static void main(String[] args) {
        try {
            Response response = RestAssured.get("https://api.example.com/data");
            if (response.getStatusCode() == 200) {
                System.out.println("API call successful.");
            } else {
                System.out.println("API call failed with status code: " + response.getStatusCode());
            }
        } catch (Exception e) {
            System.out.println("Error making API call: " + e.getMessage());
        }
    }
}
```

**Explanation**:
- The `try` block makes an API call using REST Assured.
- If the API call fails (e.g., due to a timeout or invalid URL), an exception is caught and logged.

---

## 5. Real-World Example: Custom Exception in Test Automation

Custom exceptions are useful in test automation for signaling specific validation failures.

### Example: Using a Custom Exception for Validation

```java
// Custom exception for test validation
public class TestValidationException extends Exception {
    public TestValidationException(String message) {
        super(message);
    }
}

// Using the custom exception in a test
public class TestAutomationExample {
    public static void validateLoginButtonVisibility(boolean isVisible) throws TestValidationException {
        if (!isVisible) {
            throw new TestValidationException("Login button is not visible.");
        } else {
            System.out.println("Login button is visible.");
        }
    }

    public static void main(String[] args) {
        try {
            boolean loginButtonVisible = false; // Simulate a hidden login button
            validateLoginButtonVisibility(loginButtonVisible);
        } catch (TestValidationException e) {
            System.out.println("Test failed: " + e.getMessage());
        }
    }
}
```

**Explanation**:
- The `TestValidationException` class is used to signal a test failure due to a missing login button.
- The `validateLoginButtonVisibility` method throws the custom exception if the login button is not visible.

---

## Key Takeaways

- Exception handling is essential for building robust applications and stable test automation frameworks.
- Real-world examples include file reading, database connections, Selenium WebDriver interactions, API testing, and custom exceptions in test automation.
- Proper exception handling ensures graceful recovery, meaningful feedback, and resource cleanup.

---
