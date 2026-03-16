---
sidebar_position: 3
title: Reading and Writing Files
---

# Reading and Writing Files

Reading from and writing to files are fundamental operations in Java programming. Whether you're processing text files, handling binary data, or automating file-based workflows, understanding how to perform these operations efficiently is crucial.

In this section, we’ll explore:
- Techniques for reading text files using `FileReader`, `BufferedReader`, and `Scanner`.
- Techniques for writing text files using `FileWriter`, `BufferedWriter`, and `PrintWriter`.
- Reading and writing binary files using `FileInputStream` and `FileOutputStream`.

---

## Reading Text Files

Java provides multiple ways to read text files, depending on your requirements. Below are some common approaches:

### 1. Using FileReader

The `FileReader` class reads characters from a file. It’s suitable for small files but less efficient for large ones.

#### Example: Reading a File Using FileReader

```java
import java.io.FileReader;
import java.io.IOException;

public class FileReaderExample {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("input.txt")) {
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
Contents of input.txt
```

**Explanation**:
- The `FileReader` reads one character at a time until the end of the file (`-1`).

---

### 2. Using BufferedReader

The `BufferedReader` class improves performance by buffering data during reads. It’s ideal for reading large files line by line.

#### Example: Reading a File Using BufferedReader

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
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
Line 1 of input.txt
Line 2 of input.txt
...
```

**Explanation**:
- The `BufferedReader` reads the file line by line using the `readLine()` method.

---

### 3. Using Scanner

The `Scanner` class is useful for parsing structured data, such as CSV files or user input.

#### Example: Reading a File Using Scanner

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(new File("input.txt"))) {
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
        } catch (FileNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Line 1 of input.txt
Line 2 of input.txt
...
```

**Explanation**:
- The `Scanner` reads the file line by line using the `nextLine()` method.

---

## Writing Text Files

Writing to files is just as important as reading them. Below are some common techniques for writing text files:

### 1. Using FileWriter

The `FileWriter` class writes characters to a file. It’s simple but less efficient for large files.

#### Example: Writing to a File Using FileWriter

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
- The `FileWriter` writes text directly to the file.

---

### 2. Using BufferedWriter

The `BufferedWriter` class improves performance by buffering data before writing it to the file.

#### Example: Writing to a File Using BufferedWriter

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedWriterExample {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            writer.write("Hello, World!");
            writer.newLine();
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
- The `BufferedWriter` writes text efficiently and adds a newline using `newLine()`.

---

### 3. Using PrintWriter

The `PrintWriter` class provides convenient methods like `println()` for writing formatted text.

#### Example: Writing to a File Using PrintWriter

```java
import java.io.PrintWriter;
import java.io.FileWriter;
import java.io.IOException;

public class PrintWriterExample {
    public static void main(String[] args) {
        try (PrintWriter writer = new PrintWriter(new FileWriter("output.txt"))) {
            writer.println("Hello, World!");
            writer.println("This is a print writer example.");
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
- The `PrintWriter` writes formatted text with methods like `println()`.

---

## Reading and Writing Binary Files

For binary files (e.g., images, serialized objects), use `FileInputStream` and `FileOutputStream`.

### Example: Reading a Binary File

```java
import java.io.FileInputStream;
import java.io.IOException;

public class FileInputStreamExample {
    public static void main(String[] args) {
        try (FileInputStream inputStream = new FileInputStream("image.jpg")) {
            int byteData;
            while ((byteData = inputStream.read()) != -1) {
                System.out.print(byteData + " ");
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Byte data of image.jpg
```

**Explanation**:
- The `FileInputStream` reads raw bytes from the file.

---

### Example: Writing a Binary File

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutputStreamExample {
    public static void main(String[] args) {
        byte[] data = {72, 101, 108, 108, 111}; // ASCII values for "Hello"
        try (FileOutputStream outputStream = new FileOutputStream("output.bin")) {
            outputStream.write(data);
            System.out.println("Binary data written to file.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
Binary data written to file.
```

**Explanation**:
- The `FileOutputStream` writes raw bytes to the file.

---

## Key Takeaways

- Use `FileReader` for simple character-by-character reading, `BufferedReader` for efficient line-by-line reading, and `Scanner` for parsing structured data.
- Use `FileWriter` for simple writing, `BufferedWriter` for efficient buffered writing, and `PrintWriter` for formatted text output.
- Use `FileInputStream` and `FileOutputStream` for reading and writing binary files.
- Always use `try-with-resources` to ensure that files are closed automatically after use.
