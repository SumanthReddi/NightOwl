---
sidebar_position: 8
title: Real-World Examples of File Handling
---

# Real-World Examples of File Handling

File handling is not just a theoretical concept—it’s a practical tool used to build robust applications and solve real-world problems. In this section, we’ll explore real-world examples of file handling in standalone Java programs.

---

## 1. Example: Reading Configuration from a Properties File

Configuration files are commonly used to store application settings, such as database credentials or API endpoints. The `Properties` class in Java makes it easy to read and write `.properties` files.

### Code Example: Reading a Properties File

```java
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertiesFileExample {
    public static void main(String[] args) {
        Properties properties = new Properties();
        try (FileInputStream input = new FileInputStream("config.properties")) {
            // Load properties from the file
            properties.load(input);

            // Access configuration values
            String dbUrl = properties.getProperty("db.url");
            String dbUser = properties.getProperty("db.user");
            String dbPassword = properties.getProperty("db.password");

            System.out.println("Database URL: " + dbUrl);
            System.out.println("Database User: " + dbUser);
            System.out.println("Database Password: " + dbPassword);
        } catch (IOException e) {
            System.out.println("Error reading properties file: " + e.getMessage());
        }
    }
}
```

**Input (`config.properties`)**:
```
db.url=jdbc:mysql://localhost:3306/mydatabase
db.user=root
db.password=secret
```

**Output**:
```
Database URL: jdbc:mysql://localhost:3306/mydatabase
Database User: root
Database Password: secret
```

**Explanation**:
- The program reads a `.properties` file containing database configuration and retrieves values using the `Properties` class.

---

## 2. Example: Processing Log Files

Log files are often used to track application behavior. Processing log files line by line allows you to analyze logs efficiently without consuming excessive memory.

### Code Example: Analyzing a Log File

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class LogFileExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("application.log"))) {
            String line;
            int errorCount = 0;

            // Process the log file line by line
            while ((line = reader.readLine()) != null) {
                if (line.contains("ERROR")) {
                    errorCount++;
                    System.out.println("Error found: " + line);
                }
            }

            System.out.println("Total errors: " + errorCount);
        } catch (IOException e) {
            System.out.println("Error processing log file: " + e.getMessage());
        }
    }
}
```

**Input (`application.log`)**:
```
INFO: Application started.
ERROR: Failed to connect to database.
INFO: User logged in successfully.
ERROR: Invalid input detected.
```

**Output**:
```
Error found: ERROR: Failed to connect to database.
Error found: ERROR: Invalid input detected.
Total errors: 2
```

**Explanation**:
- The program reads a log file line by line and counts lines containing the word "ERROR".

---

## 3. Example: Generating Reports in CSV Format

CSV files are widely used for generating reports, such as sales data or user activity. Writing data to a CSV file allows you to export structured information for further analysis.

### Code Example: Writing a CSV Report

```java
import java.io.FileWriter;
import java.io.IOException;

public class CSVReportExample {
    public static void main(String[] args) {
        String[][] data = {
            {"Name", "Age", "Location"},
            {"Alice", "30", "New York"},
            {"Bob", "25", "Los Angeles"}
        };

        try (FileWriter writer = new FileWriter("report.csv")) {
            for (String[] row : data) {
                writer.write(String.join(",", row));
                writer.write("\n");
            }
            System.out.println("CSV report generated successfully.");
        } catch (IOException e) {
            System.out.println("Error writing CSV file: " + e.getMessage());
        }
    }
}
```

**Output (`report.csv`)**:
```
Name,Age,Location
Alice,30,New York
Bob,25,Los Angeles
```

**Explanation**:
- The program writes a 2D array of data to a CSV file, creating a structured report.

---

## 4. Example: Parsing JSON Data for an API Response

JSON is commonly used for API responses. Parsing JSON files allows you to extract and process data programmatically.

### Code Example: Parsing a JSON File Using Jackson

Add the Jackson dependency to your project (e.g., via Maven):
```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
```

#### Code Example: Reading JSON Data

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;

class ApiResponse {
    private String status;
    private String message;

    // Getters and setters
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    @Override
    public String toString() {
        return "ApiResponse{status='" + status + "', message='" + message + "'}";
    }
}

public class JsonParsingExample {
    public static void main(String[] args) {
        ObjectMapper mapper = new ObjectMapper();

        try {
            // Parse JSON file
            ApiResponse response = mapper.readValue(new File("response.json"), ApiResponse.class);
            System.out.println("Parsed JSON data: " + response);
        } catch (IOException e) {
            System.out.println("Error parsing JSON file: " + e.getMessage());
        }
    }
}
```

**Input (`response.json`)**:
```json
{
    "status": "success",
    "message": "Data retrieved successfully."
}
```

**Output**:
```
Parsed JSON data: ApiResponse{status='success', message='Data retrieved successfully.'}
```

**Explanation**:
- The program parses a JSON file using the Jackson library and maps it to a Java object.

---

## Key Takeaways

- Use `.properties` files for storing configuration data and retrieve values using the `Properties` class.
- Process log files line by line to analyze logs efficiently without consuming excessive memory.
- Generate reports in CSV format for exporting structured data.
- Parse JSON files using libraries like `Jackson` to extract and process API responses or other structured data.
