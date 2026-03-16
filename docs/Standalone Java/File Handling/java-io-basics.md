---
sidebar_position: 2
title: Java I/O Basics
---

# Java I/O Basics

The `java.io` package provides a robust set of classes and methods for performing input and output operations in Java. These operations include reading from and writing to files, handling streams, and managing file metadata.

In this section, we’ll explore:
- The `File` class for representing file and directory paths.
- Key classes for reading and writing files:
  - `FileReader` and `FileWriter`.
  - `BufferedReader` and `BufferedWriter`.

---

## The File Class

The `File` class in Java represents file and directory pathnames. It allows you to perform operations such as creating, deleting, and checking the existence of files or directories.

### Common Methods of the File Class

| **Method**              | **Description**                                   |
|--------------------------|---------------------------------------------------|
| `createNewFile()`       | Creates a new empty file.                         |
| `delete()`              | Deletes the file or directory.                    |
| `exists()`              | Checks if the file or directory exists.           |
| `isDirectory()`         | Checks if the pathname is a directory.            |
| `listFiles()`           | Lists all files in a directory.                   |

### Example: Using the File Class

```java
import java.io.File;
import java.io.IOException;

public class FileExample {
    public static void main(String[] args) {
        // Create a File object for a specific path
        File file = new File("example.txt");

        try {
            // Create a new file
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Check if the file exists
        if (file.exists()) {
            System.out.println("File exists at path: " + file.getAbsolutePath());
        }

        // Delete the file
        if (file.delete()) {
            System.out.println("File deleted successfully.");
        } else {
            System.out.println("Failed to delete the file.");
        }
    }
}
```

**Output**:
```
File created: example.txt
File exists at path: /path/to/example.txt
File deleted successfully.
```

**Explanation**:
- The `File` class is used to create, check, and delete a file.
- The `createNewFile()` method creates a new file if it doesn’t already exist.

---

## FileReader and FileWriter

The `FileReader` and `FileWriter` classes are used for reading from and writing to text files.

### Example: Writing to a File Using FileWriter

```java
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterExample {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello, World!");
            System.out.println("Data written to file.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Data written to file.
```

**Explanation**:
- The `FileWriter` class writes text to a file.
- The `try-with-resources` statement ensures that the file is closed automatically after writing.

### Example: Reading from a File Using FileReader

```java
import java.io.FileReader;
import java.io.IOException;

public class FileReaderExample {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("output.txt")) {
            int content;
            while ((content = reader.read()) != -1) {
                System.out.print((char) content);
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Hello, World!
```

**Explanation**:
- The `FileReader` class reads text from a file character by character.
- The `read()` method returns `-1` when the end of the file is reached.

---

## BufferedReader and BufferedWriter

The `BufferedReader` and `BufferedWriter` classes provide efficient ways to read and write text files by buffering data.

### Example: Writing to a File Using BufferedWriter

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedWriterExample {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            writer.write("Hello, World!");
            writer.newLine(); // Add a new line
            writer.write("This is a buffered writer example.");
            System.out.println("Data written to file.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Data written to file.
```

**Explanation**:
- The `BufferedWriter` class improves performance by buffering data before writing it to the file.
- The `newLine()` method adds a platform-independent newline character.

### Example: Reading from a File Using BufferedReader

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Hello, World!
This is a buffered writer example.
```

**Explanation**:
- The `BufferedReader` class reads text from a file line by line.
- The `readLine()` method returns `null` when the end of the file is reached.

---

## Key Takeaways

- The `File` class is used to represent file and directory paths and perform operations like creating, deleting, and checking file existence.
- The `FileReader` and `FileWriter` classes are used for reading from and writing to text files.
- The `BufferedReader` and `BufferedWriter` classes improve performance by buffering data during read/write operations.
- Use `try-with-resources` to ensure that files are closed automatically after use.
