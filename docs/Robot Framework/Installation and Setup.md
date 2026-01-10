---
sidebar_position: 3
---

# Installation and Setup

This section explains how to **install Robot Framework and set up a working environment**
suitable for real-world automation projects.

---

## Prerequisites

Robot Framework requires:

- Python 3.7 or above
- pip (Python package manager)
- Basic command-line knowledge

Verify installation:

```bash
python --version
pip --version
```

---

## Installing Robot Framework

Install Robot Framework using pip:

```bash
pip install robotframework
```

Verify installation:

```bash
robot --version
```

---

## Installing Common Libraries

### SeleniumLibrary (UI Automation)

```bash
pip install robotframework-seleniumlibrary
```

### RequestsLibrary (API Automation)

```bash
pip install robotframework-requests
```

### DatabaseLibrary (Database Testing)

```bash
pip install robotframework-databaselibrary
```

---

## Browser Drivers (UI Automation)

For Selenium-based automation, install:
- ChromeDriver
- GeckoDriver (Firefox)
- EdgeDriver

Ensure the driver path is:
- Added to system PATH **or**
- Explicitly configured in tests

---

## IDE Setup (Recommended)

### VS Code (Preferred)
- Install **Robot Framework Language Server**
- Install **Python extension**
- Provides syntax highlighting & IntelliSense

### PyCharm
- Works well with Python-based libraries
- Requires Robot syntax plugins

---

## Recommended Project Structure

```
project-root/
│
├── tests/
│   ├── ui/
│   ├── api/
│   └── db/
│
├── resources/
│   ├── keywords.robot
│   └── variables.robot
│
├── libraries/
│   └── custom_keywords.py
│
└── results/
```

This structure supports scalability and maintainability.

---

## Common Setup Issues ❌

- Python not added to PATH
- Incorrect driver versions
- Missing libraries
- IDE plugins not installed

---

## Key Takeaways

- Robot Framework is installed via pip
- Libraries extend Robot capabilities
- Proper setup avoids runtime failures
- Clean structure is critical for growth

---

## What’s Next?

👉 **Test Suite and Test Case Structure**
