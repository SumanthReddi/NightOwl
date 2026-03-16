---
sidebar_position: 6
title: Working with Different File Formats
---

# Working with Different File Formats

In Java, working with different file formats is essential for handling structured data, exchanging information between systems, and processing files efficiently. Common file formats include plain text files (`.txt`), Comma-Separated Values (CSV), JSON, and XML.

In this section, we’ll explore:
- Reading and writing text files.
- Processing CSV files.
- Parsing and generating JSON files using libraries like `Jackson` or `Gson`.
- Parsing and generating XML files using `DOM` or `SAX` parsers.

---

## 1. Text Files (`.txt`)

Text files are the simplest format for storing unstructured or semi-structured data. Java provides built-in classes like `FileReader`, `BufferedReader`, `FileWriter`, and `BufferedWriter` for handling text files.

### Example: Reading and Writing a Text File

```java
import java.io.*;

public class TextFileExample {
    public static void main(String[] args) {
        // Write to a text file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            writer.write("Hello, World!");
            writer.newLine();
            writer.write("This is a text file example.");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }

        // Read from a text file
        try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading from file: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Hello, World!
This is a text file example.
```

**Explanation**:
- The program writes two lines of text to a file and then reads them back line by line.

---

## 2. CSV Files

CSV (Comma-Separated Values) files are commonly used for storing tabular data. Each line in a CSV file represents a row, and values are separated by commas.

### Example: Reading a CSV File

```java
import java.io.*;
import java.util.StringTokenizer;

public class CSVFileExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("data.csv"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                StringTokenizer tokenizer = new StringTokenizer(line, ",");
                while (tokenizer.hasMoreTokens()) {
                    System.out.print(tokenizer.nextToken() + " ");
                }
                System.out.println();
            }
        } catch (IOException e) {
            System.out.println("Error reading CSV file: " + e.getMessage());
        }
    }
}
```

**Input (`data.csv`)**:
```
Name,Age,Location
Alice,30,New York
Bob,25,Los Angeles
```

**Output**:
```
Name Age Location 
Alice 30 New York 
Bob 25 Los Angeles 
```

**Explanation**:
- The program reads a CSV file line by line and splits each line into tokens using a `StringTokenizer`.

---

## 3. JSON Files

JSON (JavaScript Object Notation) is a lightweight data-interchange format widely used for APIs and configuration files. Libraries like `Jackson` and `Gson` simplify JSON parsing and generation.

### Example: Parsing a JSON File Using Jackson

Add the Jackson dependency to your project (e.g., via Maven):
```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
```

#### Code Example: Reading and Writing JSON

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;

class Person {
    private String name;
    private int age;

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

public class JsonFileExample {
    public static void main(String[] args) {
        ObjectMapper mapper = new ObjectMapper();

        // Write to a JSON file
        Person person = new Person();
        person.setName("Alice");
        person.setAge(30);

        try {
            mapper.writeValue(new File("person.json"), person);
            System.out.println("Data written to JSON file.");
        } catch (IOException e) {
            System.out.println("Error writing JSON file: " + e.getMessage());
        }

        // Read from a JSON file
        try {
            Person readPerson = mapper.readValue(new File("person.json"), Person.class);
            System.out.println("Data read from JSON file: " + readPerson);
        } catch (IOException e) {
            System.out.println("Error reading JSON file: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Data written to JSON file.
Data read from JSON file: Person{name='Alice', age=30}
```

**Explanation**:
- The program writes a `Person` object to a JSON file and reads it back using the Jackson library.

---

## 4. XML Files

XML (eXtensible Markup Language) is another common format for structured data. Java provides `DOM` and `SAX` parsers for reading and writing XML files.

### Example: Parsing an XML File Using DOM

```java
import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.File;

public class XMLFileExample {
    public static void main(String[] args) {
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(new File("data.xml"));

            // Normalize the XML structure
            document.getDocumentElement().normalize();

            // Get all elements with the tag name "person"
            NodeList nodeList = document.getElementsByTagName("person");

            for (int i = 0; i < nodeList.getLength(); i++) {
                Node node = nodeList.item(i);
                if (node.getNodeType() == Node.ELEMENT_NODE) {
                    Element element = (Element) node;
                    String name = element.getElementsByTagName("name").item(0).getTextContent();
                    String age = element.getElementsByTagName("age").item(0).getTextContent();
                    System.out.println("Name: " + name + ", Age: " + age);
                }
            }
        } catch (Exception e) {
            System.out.println("Error parsing XML file: " + e.getMessage());
        }
    }
}
```

**Input (`data.xml`)**:
```xml
<people>
    <person>
        <name>Alice</name>
        <age>30</age>
    </person>
    <person>
        <name>Bob</name>
        <age>25</age>
    </person>
</people>
```

**Output**:
```
Name: Alice, Age: 30
Name: Bob, Age: 25
```

**Explanation**:
- The program parses an XML file using the DOM parser and extracts data from `<person>` elements.

---

## Key Takeaways

- Use `FileReader` and `BufferedReader` for reading text files, and `FileWriter` and `BufferedWriter` for writing them.
- Use `StringTokenizer` or libraries like `Apache Commons CSV` for processing CSV files.
- Use libraries like `Jackson` or `Gson` for parsing and generating JSON files.
- Use `DOM` or `SAX` parsers for reading and writing XML files.
- Always handle exceptions properly when working with different file formats.
