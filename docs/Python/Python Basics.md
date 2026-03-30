---
sidebar_position: 1
title: Python Basics
---

Python is a versatile, high-level programming language that has become
one of the most popular choices for developers worldwide. Known for its
simplicity, readability, and extensive libraries, Python is suitable for
a wide range of applications, from web development to machine learning.

------------------------------------------------------------------------

### 1. What is Python?

Python is a **high-level**, **interpreted** programming language created
by Guido van Rossum in 1991. It emphasizes code readability and
simplicity, making it an excellent choice for beginners and experienced
developers alike.

#### Features:

-   **Simple Syntax**: Python's syntax is modeled after English, making
    it easy to learn and write.
-   **Interpreted Language**: Code is executed line by line, which
    simplifies debugging.
-   **Cross-Platform**: Runs seamlessly on Windows, macOS, and Linux.
-   **Object-Oriented and Functional Programming**: Supports multiple
    programming paradigms.
-   **Extensive Standard Library**: Provides built-in modules for tasks
    like file handling, data manipulation, and more.
-   **Third-Party Packages**: A rich ecosystem of libraries (e.g.,
    NumPy, Pandas, TensorFlow) extends Python's capabilities.

#### Where is Python Used?

Python is widely used across various domains: - **Web Development**:
Frameworks like Django, Flask, and FastAPI simplify building web
applications. - **Data Science & Machine Learning**: Libraries like
NumPy, Pandas, TensorFlow, and scikit-learn are industry standards. -
**Scripting & Automation**: Automate repetitive tasks with ease. -
**Software Development**: Tools like Buildbot and Roundup aid in
software lifecycle management. - **Game Development**: Libraries like
Pygame enable game creation. - **Networking & Cybersecurity**: Tools
like Ansible and Salt help manage networks and infrastructure.

**Example Code:**

``` python
print("Hello, Python!")  # Output: Hello, Python!
```

------------------------------------------------------------------------

### 2. Installing Python

Installing Python is straightforward, regardless of your operating
system.

#### Steps to Install Python:

##### Windows:

1.  Visit the official Python website
    ([python.org](https://www.python.org)).
2.  Download the latest version for Windows.
3.  Run the installer and check **'Add Python to PATH'** during
    installation.
4.  Complete the setup.

##### macOS:

-   Use the official installer or install via Homebrew:

    ``` bash
    brew install python
    ```

##### Linux:

-   Use the package manager:

    ``` bash
    sudo apt-get install python3
    ```

##### Verify Installation:

Run the following command to confirm Python is installed:

``` bash
python --version
# Output: Python 3.x.x
```

#### Setting Up the Environment:

-   **IDLE**: Comes bundled with Python for basic scripting.
-   For enhanced coding, use editors like **VS Code**, **PyCharm**, or
    **Jupyter Notebook**.
-   Use **virtual environments** (`venv`, `virtualenv`) to isolate
    project-specific dependencies.

------------------------------------------------------------------------

### 3. Running Python Code

Python code can be executed in multiple ways:

#### Using the Command Line:

Save your code in a `.py` file and run it:

``` bash
python script.py
```

#### Using an IDE:

1.  Open your preferred IDE (e.g., VS Code, PyCharm).
2.  Create a `.py` file.
3.  Write your code and execute it within the IDE.

#### Using the Python Shell:

Launch the interactive shell:

``` bash
python
>>> print("Hello")  # Output: Hello
```

------------------------------------------------------------------------

### 4. Python Syntax & Indentation

Python uses **indentation** to define blocks of code, unlike languages
that use braces `{}`.

**Example:**

``` python
if True:
    print("This is indented")
```

-   **Indentation Rules**:
    -   Typically 4 spaces per indentation level.
    -   Consistent indentation is mandatory; mismatched indentation will
        raise errors.

------------------------------------------------------------------------

### 5. Variables & Constants

#### Variables:

Variables store data values. Python is dynamically typed, so you don't
need to declare types explicitly.

**Naming Rules**: - Must begin with a letter or underscore (`_`). -
Cannot start with a number. - Case-sensitive. - Avoid reserved keywords
(e.g., `if`, `while`).

**Example:**

``` python
age = 25       # Integer
name = "Alice" # String
pi = 3.14159   # Float
```

#### Constants:

Python does not have built-in constants, but by convention, constants
are written in uppercase letters.

**Example:**

``` python
PI = 3.14159  # Treated as a constant by convention
```

------------------------------------------------------------------------

### 6. Data Types

Python supports several built-in data types:

-   **`int`**: Integer values, e.g., `10`.
-   **`float`**: Floating-point numbers, e.g., `3.14`.
-   **`str`**: Strings (text), e.g., `"hello"`.
-   **`bool`**: Boolean values, either `True` or `False`.
-   **`NoneType`**: Represents the absence of value, e.g., `None`.

**Example:**

``` python
x = 10          # int
y = 3.14        # float
name = "Bob"    # str
flag = True     # bool
nothing = None  # NoneType
```

Use `type()` to check the data type:

``` python
print(type(x))  # Output: <class 'int'>
```

------------------------------------------------------------------------

### 7. Comments

Comments are used to document code and improve readability.

#### Single-Line Comment:

``` python
# This is a comment
```

#### Multi-Line Comment:

``` python
"""
This is a
multi-line comment
"""
```

------------------------------------------------------------------------

### 8. Input and Output

#### Output:

Use the `print()` function to display output:

``` python
print("Hello, World")  # Output: Hello, World
```

#### Input:

Use the `input()` function to take user input:

``` python
name = input("Enter your name: ")
print("Hello, " + name)
```

------------------------------------------------------------------------

### Conclusion

This guide introduces the basics of Python, including its features,
installation process, syntax, variables, data types, and input/output
operations. Python's simplicity and versatility make it an ideal choice
for a wide range of applications, from beginner projects to advanced
machine learning models. By mastering these foundational concepts,
you'll be well-equipped to explore Python's vast ecosystem and build
powerful applications.
