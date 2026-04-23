---
sidebar_position: 10
title: Modules and Packages
---

Modules and packages are essential for organizing and reusing code in
Python. They allow developers to break down large programs into smaller,
manageable components, making code more modular, readable, and
maintainable.

------------------------------------------------------------------------

### 1. What is a Module?

A **module** is a file containing Python code (`.py`) that can define
functions, classes, and variables. Modules enable code reuse and
organization by grouping related functionality.

#### Creating a Module

Create a file named `my_module.py` with the following content:

``` python
# file: my_module.py
def add(a, b):
    return a + b
```

#### Using the Module

You can import and use the module in another script:

``` python
import my_module
print(my_module.add(2, 3))  # Output: 5
```

-   **Explanation**:
    -   The `import` statement loads the module.
    -   Functions and variables defined in the module are accessed using
        the module name as a prefix.

------------------------------------------------------------------------

### 2. `import`, `from`, `as` Keywords

Python provides flexible ways to import modules and their attributes.

#### `import`: Import the Entire Module

``` python
import math
print(math.sqrt(16))  # Output: 4.0
```

-   **Explanation**:
    -   The `import` statement loads the entire `math` module.
    -   Functions like `sqrt` are accessed using the module name.

#### `from ... import`: Import Specific Attributes

``` python
from math import pi
print(pi)  # Output: 3.141592...
```

-   **Explanation**:
    -   The `from ... import` syntax imports specific attributes
        directly, avoiding the need for the module prefix.

#### `as`: Alias a Module or Function

``` python
import math as m
print(m.factorial(5))  # Output: 120
```

-   **Explanation**:
    -   The `as` keyword assigns an alias to the module, making it
        easier to reference.

------------------------------------------------------------------------

### 3. Built-in Modules

Python includes a rich set of built-in modules for various tasks.

#### Examples:

-   **`math`**: Mathematical functions.
-   **`datetime`**: Date and time manipulation.
-   **`os`**: Operating system interactions.
-   **`random`**: Random number generation.

``` python
import random
print(random.randint(1, 10))  # Output: Random integer between 1 and 10
```

-   **Explanation**:
    -   The `random` module provides functions for generating random
        numbers.

------------------------------------------------------------------------

### 4. Creating Packages

A **package** is a directory containing multiple modules and a special
`__init__.py` file. Packages allow you to organize modules into
namespaces.

#### Package Structure

    my_package/
    ├── __init__.py
    ├── math_utils.py
    └── string_utils.py

#### Accessing a Module from a Package

``` python
from my_package import math_utils
print(math_utils.add(2, 3))  # Output: 5
```

-   **Explanation**:
    -   The `__init__.py` file makes the directory a package.
    -   Modules within the package can be imported using the package
        name.

------------------------------------------------------------------------

### 5. Using `__name__ == "__main__"`

The `__name__` variable allows a module to be both imported and run as a
standalone script.

``` python
# file: my_module.py
def greet():
    print("Hello!")

if __name__ == "__main__":
    greet()
```

-   **Explanation**:
    -   When the module is run directly, `__name__` is set to
        `"__main__"`, and the `greet()` function executes.
    -   When imported, the `if` block is skipped.

------------------------------------------------------------------------

### 6. The `dir()` Function

The `dir()` function lists all attributes and methods of an object or
module.

``` python
import math
print(dir(math))
```

-   **Explanation**:
    -   `dir(math)` returns a list of all attributes and functions in
        the `math` module.

------------------------------------------------------------------------

### 7. Installing External Packages

External libraries can be installed using `pip`, Python's package
manager.

#### Install a Package

``` bash
pip install requests
```

#### Usage

``` python
import requests
response = requests.get("https://api.github.com")
print(response.status_code)  # Output: 200
```

-   **Explanation**:
    -   The `requests` library simplifies HTTP requests.
    -   After installation, it can be imported and used like any other
        module.

------------------------------------------------------------------------

### Conclusion

This document covers the fundamentals of Python modules and packages,
including creating and importing modules, using built-in modules,
organizing code into packages, and installing external libraries. By
mastering these concepts, you can write modular, reusable, and
maintainable Python code. Modules and packages are indispensable tools
for scaling your projects and leveraging Python's vast ecosystem of
libraries.
