---
sidebar_position: 1
title: Basics
---

Python is a versatile, high-level programming language that has become
one of the most popular choices for developers worldwide. Known for its
simplicity, readability, and extensive libraries, Python is suitable for
a wide range of applications, from web development to machine learning.

------------------------------------------------------------------------

## What is Python?

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

## Major Areas Where Python is Used


### 🌐 Web Development

Python is commonly used to build websites, APIs, and scalable backend systems.

#### Popular Frameworks

- **Django** – Full-featured web framework for rapid development  
- **Flask** – Lightweight and flexible micro-framework  
- **FastAPI** – High-performance API framework for modern apps  

#### Examples

- E-commerce websites  
- REST APIs  
- SaaS platforms  
- Admin dashboards  

### 📊 Data Science & Machine Learning

Python dominates the data and AI world because of its powerful libraries.

#### Popular Libraries

- **NumPy** – Numerical computing  
- **Pandas** – Data analysis and manipulation  
- **Matplotlib** – Data visualization  
- **Scikit-learn** – Machine learning models  
- **TensorFlow** – Deep learning  
- **PyTorch** – AI research and neural networks  

#### Examples

- Predictive analytics  
- Fraud detection  
- Recommendation systems  
- Chatbots  
- Computer vision  

### 🤖 Scripting & Automation

Python is excellent for automating repetitive tasks and saving time.

#### Examples

- File handling automation  
- Excel report generation  
- Email sending scripts  
- Web scraping  
- Data cleanup  
- Test automation  

#### Popular Tools

- Selenium  
- Playwright  
- BeautifulSoup  
- Requests  

### 💻 Software Development

Python is used in the software development lifecycle for tools, testing, and backend systems.

#### Examples

- Build systems  
- Deployment tools  
- CI/CD scripts  
- Monitoring utilities  
- Internal developer tools  

#### Popular Tools

- **Buildbot**  
- **Roundup**  


### 🎮 Game Development

Python can also be used to create games and prototypes.

#### Popular Library

- **Pygame**

#### Examples

- 2D games  
- Educational games  
- Game prototypes  
- Simulations  

### 🌐 Networking & Cybersecurity

Python is heavily used in infrastructure automation, networking, and security.

#### Examples

- Server automation  
- Network configuration  
- Security testing  
- Log analysis  
- Infrastructure management  

#### Popular Tools

- **Ansible**  
- **Salt**  


**Example Code:**

``` python
print("Hello, Python!")  # Output: Hello, Python!
```

------------------------------------------------------------------------

## Installing Python

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

## Running Python Code

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

## Python Syntax & Indentation

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

## Variables & Constants

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

## Data Types

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

## Comments

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

## Input and Output

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

## Conclusion

This guide introduces the basics of Python, including its features,
installation process, syntax, variables, data types, and input/output
operations. Python's simplicity and versatility make it an ideal choice
for a wide range of applications, from beginner projects to advanced
machine learning models. By mastering these foundational concepts,
you'll be well-equipped to explore Python's vast ecosystem and build
powerful applications.
