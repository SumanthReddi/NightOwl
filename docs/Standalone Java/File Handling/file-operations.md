---
sidebar_position: 4
title: File Operations
---

# File Operations

In addition to reading and writing files, Java provides tools for performing various file operations, such as creating, deleting, renaming, and listing files. These operations are essential for managing files and directories programmatically.

In this section, we’ll explore:
- Creating, deleting, and renaming files.
- Checking if a file exists or is a directory.
- Listing files in a directory.

---

## Creating Files

To create a new file in Java, use the `createNewFile()` method of the `File` class. This method creates an empty file if it doesn’t already exist.

### Example: Creating a File

```java
import java.io.File;
import java.io.IOException;

public class CreateFileExample {
    public static void main(String[] args) {
        File file = new File("newFile.txt");
        try {
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

**Output**:
```
File created: newFile.txt
```

**Explanation**:
- The `createNewFile()` method creates a new file if it doesn’t already exist.
- If the file exists, the method returns `false`.

---

## Deleting Files

To delete a file, use the `delete()` method of the `File` class. This method removes the file from the filesystem.

### Example: Deleting a File

```java
import java.io.File;

public class DeleteFileExample {
    public static void main(String[] args) {
        File file = new File("newFile.txt");
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
File deleted successfully.
```

**Explanation**:
- The `delete()` method removes the file from the filesystem.
- If the file doesn’t exist, the method returns `false`.

---

## Renaming Files

To rename a file, use the `renameTo()` method of the `File` class. This method renames the file or moves it to a different directory.

### Example: Renaming a File

```java
import java.io.File;

public class RenameFileExample {
    public static void main(String[] args) {
        File oldFile = new File("oldName.txt");
        File newFile = new File("newName.txt");

        if (oldFile.renameTo(newFile)) {
            System.out.println("File renamed successfully.");
        } else {
            System.out.println("Failed to rename the file.");
        }
    }
}
```

**Output**:
```
File renamed successfully.
```

**Explanation**:
- The `renameTo()` method renames the file or moves it to a new location.
- If the operation fails (e.g., due to permissions), the method returns `false`.

---

## Checking File Properties

The `File` class provides methods to check file properties, such as existence, type, and size.

### Example: Checking File Properties

```java
import java.io.File;

public class FilePropertiesExample {
    public static void main(String[] args) {
        File file = new File("example.txt");

        // Check if the file exists
        if (file.exists()) {
            System.out.println("File exists.");

            // Check if it's a directory
            if (file.isDirectory()) {
                System.out.println("It's a directory.");
            } else {
                System.out.println("It's a file.");
            }

            // Get file size
            System.out.println("File size: " + file.length() + " bytes");

            // Get absolute path
            System.out.println("Absolute path: " + file.getAbsolutePath());
        } else {
            System.out.println("File does not exist.");
        }
    }
}
```

**Output**:
```
File exists.
It's a file.
File size: 1234 bytes
Absolute path: /path/to/example.txt
```

**Explanation**:
- The `exists()` method checks if the file or directory exists.
- The `isDirectory()` method checks if the pathname is a directory.
- The `length()` method retrieves the file size in bytes.
- The `getAbsolutePath()` method retrieves the full path of the file.

---

## Listing Files in a Directory

To list all files in a directory, use the `listFiles()` method of the `File` class. This method returns an array of `File` objects representing the files and subdirectories.

### Example: Listing Files in a Directory

```java
import java.io.File;

public class ListFilesExample {
    public static void main(String[] args) {
        File directory = new File("/path/to/directory");

        // List all files and directories
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    System.out.println("[DIR] " + file.getName());
                } else {
                    System.out.println("[FILE] " + file.getName());
                }
            }
        } else {
            System.out.println("Directory does not exist or is not accessible.");
        }
    }
}
```

**Output**:
```
[DIR] folder1
[FILE] file1.txt
[FILE] file2.txt
```

**Explanation**:
- The `listFiles()` method retrieves all files and subdirectories in the specified directory.
- The `isDirectory()` method distinguishes between files and directories.

---

## Key Takeaways

- Use `createNewFile()` to create a new file.
- Use `delete()` to remove a file from the filesystem.
- Use `renameTo()` to rename or move a file.
- Use methods like `exists()`, `isDirectory()`, and `length()` to check file properties.
- Use `listFiles()` to list all files and directories in a directory.
