---
sidebar_position: 2
title: Architecture
description: Robot Framework Architecture
tags:
  - robotframework
  - automation
  - qa
---

# Robot Framework Architecture

## Overview

Robot Framework is an open-source, keyword-driven test automation framework used for:

- Test Automation ( Web , API , Desktop)
- Acceptance Testing
- Robotic Process Automation (RPA)

It follows a layered architecture that separates test cases from implementation logic, making tests readable and maintainable.

---

# Architecture Diagram

```text
+--------------------------------------------------+
|             Test Data/Test Suite Layer           |
|  - Test Cases                                    |
|  - Keywords                                      |
|  - Variables                                     |
|  - Settings                                      |
|  - Resource Files                                |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|                Robot Framework Core              |
|  - Test Execution Engine                         |
|  - Keyword Parser                                |
|  - Reporting & Logging                           |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|                  Test Libraries                  |
|  - SeleniumLibrary                               |
|  - RequestsLibrary                               |
|  - DatabaseLibrary                               |
|  - Custom Python Libraries                       |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|                External Applications             |
|  - Web Applications                              |
|  - APIs                                          |
|  - Databases                                     |
|  - Desktop Applications                          |
|  - Mobile Applications                           |
+--------------------------------------------------+
```

---

# Components of Robot Framework Architecture

## 1. Test Suite Layer

The Test Suite Layer contains all files used to define test execution.

### Includes

- Test Cases
- Keywords
- Variables
- Settings
- Resource Files

### Example

```robot
*** Test Cases ***
Login Test
    Open Browser    https://example.com
    Input Text      id=username    admin
    Click Button    Login
```

### Purpose

- Defines what needs to be tested.
- Easy for both technical and non-technical users to understand.

---

## 2. Robot Framework Core

The Core Engine is the heart of Robot Framework.

### Responsibilities

#### Test Parsing

Reads and validates:

- `.robot` files
- Resource files
- Variable files

#### Execution Engine

Executes keywords sequentially.

Example:

```robot
Open Browser
Input Text
Click Button
```

#### Keyword Resolution

Determines where each keyword is implemented:

- Built-in Library
- External Library
- Custom Library

#### Logging & Reporting

Generates:

- `log.html`
- `report.html`
- `output.xml`

---

## 3. Libraries Layer

Libraries provide reusable keywords.

### Built-in Libraries

Examples:

- BuiltIn
- Collections
- String
- OperatingSystem

### External Libraries

Examples:

- SeleniumLibrary
- RequestsLibrary
- AppiumLibrary
- DatabaseLibrary

### Custom Libraries

Developers can create custom keywords using Python.

Example:

```python
class LoginLibrary:

    def login(self, username, password):
        print("Login Successful")
```

Usage:

```robot
*** Settings ***
Library    LoginLibrary.py

*** Test Cases ***
Login Test
    Login    admin    password
```

---

## 4. Resource Files

Resource files allow sharing keywords across multiple test suites.

### Example

```robot
*** Keywords ***
User Login
    Input Username
    Input Password
    Click Login
```

### Benefits

- Reusability
- Reduced duplication
- Better maintenance

---

## 5. Variable Files

Variables store reusable test data.

### Example

```robot
*** Variables ***
${URL}         https://example.com
${USERNAME}    admin
${PASSWORD}    admin123
```

### Benefits

- Centralized configuration
- Easy updates
- Environment management

---

## 6. External Systems Under Test

Robot Framework interacts with various applications:

### Web Applications

Using:

```robot
SeleniumLibrary
```

### APIs

Using:

```robot
RequestsLibrary
```

### Databases

Using:

```robot
DatabaseLibrary
```

### Mobile Applications

Using:

```robot
AppiumLibrary
```

### Desktop Applications

Using:

```robot
RPA Framework
```

---

# Execution Flow

## Step 1: Start Execution

Command:

```bash
robot tests.robot
```

---

## Step 2: Parse Test Files

Robot Framework reads:

- Test Cases
- Keywords
- Variables
- Settings

---

## Step 3: Load Libraries

Required libraries are imported.

Example:

```robot
Library    SeleniumLibrary
```

---

## Step 4: Execute Keywords

Keywords are executed in sequence.

Example:

```robot
Open Browser
Input Text
Click Button
```

---

## Step 5: Interact with Application

Libraries communicate with:

- Browser
- API
- Database
- Mobile App

---

## Step 6: Capture Results

Execution status is recorded:

- PASS
- FAIL

Logs and screenshots are collected.

---

## Step 7: Generate Reports

Robot Framework automatically generates:

| File | Purpose |
|--------|---------|
| output.xml | Raw execution results |
| log.html | Detailed execution log |
| report.html | Execution summary |

---

# Key Advantages of the Architecture

## Keyword-Driven

Tests are written using human-readable keywords.

Example:

```robot
Login To Application
Verify Dashboard
Logout User
```

---

## Modular

- Libraries are independent.
- Keywords are reusable.
- Easy maintenance.

---

## Extensible

Supports:

- Python Libraries
- Java Libraries
- Custom Integrations

---

## Technology Independent

Can automate:

- Web Applications
- APIs
- Databases
- Mobile Apps
- Desktop Applications

---

# Summary

Robot Framework architecture consists of:

1. **Test Data/Suite Layer** (Test Cases, Variables, Keywords)
2. **Robot Framework Core** (Parser, Execution Engine, Reporting)
3. **Libraries Layer** (Built-in, External, Custom Libraries)
4. **Resource & Variable Files**
5. **External Systems Under Test**

The framework executes test cases through keywords, delegates actions to libraries, interacts with target applications, and generates detailed logs and reports automatically.