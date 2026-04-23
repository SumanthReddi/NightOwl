---
sidebar_position: 6
title: File Handling and Automation
---

File handling is a critical aspect of programming, enabling interaction with files and directories for tasks like reading, writing, and managing data. Python provides robust tools for file operations, including built-in functions and modules like `os`, `shutil`, `pathlib`, `glob`, and `subprocess`. This document explores file handling and automation in Python, complete with examples and explanations.

---

### 1. File Handling in Python

Python allows you to create, read, write, and delete files using built-in functions. Proper file handling ensures efficient data management and prevents resource leaks.

#### Opening a File

Files are opened using the `open()` function, which requires a file path and mode (`'r'` for read, `'w'` for write, `'a'` for append, etc.).

```python
file = open("example.txt", "r")  # Open in read mode
print(file.read())              # Read the entire file
file.close()                    # Close the file
```

- **Explanation**:
  - The `open()` function opens the file in the specified mode.
  - Always close the file after use to free system resources.

#### Reading a File

You can read files line by line or iterate through all lines.

```python
file = open("example.txt", "r")
print(file.readline())  # Read the first line
for line in file:
    print(line)         # Print each remaining line
file.close()
```

- **Explanation**:
  - `readline()` reads one line at a time.
  - Iterating over the file object processes each line.

#### Writing to a File

Writing to a file replaces its content (in `'w'` mode) or appends new content (in `'a'` mode).

```python
file = open("example.txt", "w")
file.write("Hello, World!\n")  # Write a line
file.write("Welcome to Python.")  # Write another line
file.close()
```

- **Explanation**:
  - `'w'` mode overwrites the file if it exists; creates a new file otherwise.
  - `'a'` mode appends content without overwriting.

#### Using `with` Statement (Best Practice)

The `with` statement ensures files are properly closed after their block executes.

```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# File is automatically closed
```

- **Explanation**:
  - The `with` statement simplifies file handling by managing resource cleanup.

#### Appending to a File

Appending adds new content to the end of an existing file.

```python
with open("example.txt", "a") as file:
    file.write("\nAppended line.")
```

- **Explanation**:
  - `'a'` mode ensures new content is added without modifying existing data.

---

### 2. Automating File Operations

Python's `os` and `shutil` modules enable automation of file and directory tasks.

```python
import os, shutil

# Create a directory
os.mkdir("new_folder")

# Rename a file
os.rename("old.txt", "new.txt")

# Remove a file or directory
os.remove("delete_me.txt")
os.rmdir("empty_folder")

# Copy a file
shutil.copy("source.txt", "destination.txt")
```

- **Explanation**:
  - `os.mkdir()` creates a new directory.
  - `os.rename()` renames files or directories.
  - `os.remove()` deletes files; `os.rmdir()` removes empty directories.
  - `shutil.copy()` copies files between locations.

---

### 3. Working with Paths

The `pathlib` module provides an object-oriented approach to path manipulation.

```python
from pathlib import Path

# Create a path object
path = Path("my_folder/my_file.txt")

print(path.exists())       # Check if the file exists
print(path.name)           # Get the file name
print(path.suffix)         # Get the file extension
print(path.parent)         # Get the parent directory
```

- **Explanation**:
  - `exists()` checks if the file or directory exists.
  - `name` retrieves the file name; `suffix` retrieves the extension.
  - `parent` retrieves the directory containing the file.

---

### 4. Listing Files in a Directory

The `iterdir()` method lists all files and directories in a folder.

```python
from pathlib import Path

folder = Path(".")
for file in folder.iterdir():
    print(file.name)
```

- **Explanation**:
  - `iterdir()` iterates over all entries in the specified directory.

---

### 5. Scheduling Tasks with `schedule` Module

The `schedule` module automates recurring tasks by running functions at specified intervals.

```python
import schedule
import time

def job():
    print("Task is running!")

schedule.every(5).seconds.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
```

- **Explanation**:
  - `schedule.every(5).seconds.do(job)` schedules the `job` function to run every 5 seconds.
  - `run_pending()` executes scheduled tasks.

---

### 6. Running Commands with `subprocess`

The `subprocess` module allows execution of terminal or command-line scripts from Python.

```python
import subprocess

# Run a shell command
subprocess.run(["echo", "Hello from Python!"])
```

- **Explanation**:
  - `subprocess.run()` executes the specified command in the shell.

---

### 7. Searching Files with `glob`

The `glob` module searches for files matching specific patterns.

```python
import glob

files = glob.glob("*.txt")  # Find all .txt files
print(files)
```

- **Explanation**:
  - Wildcards like `*` match any sequence of characters.
  - `glob.glob()` returns a list of matching file paths.

---

### 8. Example: Archiving Logs Automatically

Automate log archiving by creating timestamped zip files.

```python
import shutil
import datetime

# Create archive name with timestamp
timestamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
shutil.make_archive(f"logs_{timestamp}", 'zip', "./logs")
```

- **Explanation**:
  - `datetime.now().strftime()` generates a timestamp.
  - `shutil.make_archive()` creates a zip archive of the specified directory.

---

### 9. Summary

| Task                   | Module/Function |
|------------------------|-----------------|
| File read/write        | `open()`        |
| Directory operations   | `os`, `shutil`  |
| Path management        | `pathlib`       |
| File search            | `glob`          |
| Scheduling tasks       | `schedule`      |
| Running shell commands | `subprocess`    |

---

### Conclusion

This document covers Python's file handling and automation capabilities, including reading and writing files, managing directories, working with paths, scheduling tasks, and executing shell commands. By mastering these tools, you can efficiently manage files and automate repetitive tasks, making your Python programs more powerful and versatile.