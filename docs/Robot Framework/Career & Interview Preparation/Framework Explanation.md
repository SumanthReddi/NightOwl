---
sidebar_position: 3
title: Real Time Framework Design
---

# Robot Framework Architecture - Real Time Framework Design

## Interview Question

**Explain your Robot Framework architecture and framework design??.**

---

# Framework Overview

Our automation framework follows a **Modular + Keyword-Driven + Data-Driven Architecture**.

The framework is divided into multiple application modules:

```text
Automation
│
├── CAS
│   ├── rf-config
│   ├── rf-keywords
│   ├── rf-testdata
│   └── rf-testcases
│
├── CAPS
│   ├── rf-config
│   ├── rf-keywords
│   ├── rf-testdata
│   └── rf-testcases
│
└── CASH
    ├── rf-config
    ├── rf-keywords
    ├── rf-testdata
    └── rf-testcases
```

Each module is maintained independently and contains its own configurations, test data, keywords, and test cases.

---

# Why This Structure?

Each application module has:

* Different URLs
* Different credentials
* Different business workflows
* Different test data
* Different locators

Separating them improves:

* Maintainability
* Scalability
* Reusability
* Team Collaboration
* Independent Execution

---

# Framework Components

## 1. rf-config

This folder contains all configuration-related files.

### Purpose

Store environment-specific and execution-specific settings in one place.

### Typical Contents

```robot
*** Variables ***

${URL}
${ENV}
${BROWSER}
${USERNAME}
${PASSWORD}

${SAUCE_USERNAME}
${SAUCE_ACCESS_KEY}

${PLATFORM}
${BROWSER_VERSION}
${RESOLUTION}
```

### Examples

* Application URL
* Environment (SIT/UAT/PROD)
* Browser Details
* Sauce Labs Configuration
* Credentials
* Screen Resolution
* Platform Information

### Benefits

* Avoid hardcoding
* Easy environment switching
* Centralized maintenance

---

## 2. rf-keywords

This folder contains:

### Business Keywords

```robot
*** Keywords ***

Login To Application

Search Customer

Create Account

Logout From Application
```

### Common Utility Keywords

```robot
Capture Screenshot

Generate Random Number

Wait Until Page Loads
```

### Locators

```robot
*** Variables ***

${TXT_USERNAME}
${TXT_PASSWORD}
${BTN_LOGIN}
${LBL_WELCOME}
```

### Benefits

* Reusability
* Reduced code duplication
* Easier maintenance
* Better readability

---

## 3. rf-testdata

Contains all externalized test data.

### Supported Formats

```text
Excel Files
JSON Files
Text Files
CSV Files
```

### Examples

```text
rf-testdata

Users.xlsx
Programs.xlsx
CustomerData.json
ExpectedResults.txt
```

### Purpose

Store:

* User Credentials
* Customer Data
* Program Codes
* Expected Results
* API Payloads

### Benefits

* Supports Data-Driven Testing
* Easy test data updates
* No code changes required

---

## 4. rf-testcases

Contains actual Robot Framework test cases.

### Example

```robot
*** Test Cases ***

Verify Customer Login

Verify Customer Creation

Verify Customer Search
```

### Sample Test

```robot
*** Test Cases ***

Verify Customer Login

    Launch Application

    Login To Application

    Verify Home Page
```

### Characteristics

* Business-readable
* Minimal implementation details
* Uses reusable keywords
* Easy for stakeholders to understand

---

# Framework Execution Flow

```text
Test Case
    │
    ▼
Configuration File
    │
    ▼
Test Data File
    │
    ▼
Keywords
    │
    ▼
Locators
    │
    ▼
Libraries
    │
    ▼
Application Under Test
    │
    ▼
Report Generation
```

---

# End-to-End Execution Example

### Step 1

Robot starts execution of:

```robot
Verify Customer Login
```

### Step 2

Loads configuration file:

```robot
Resource    rf-config/config.resource
```

### Step 3

Reads environment details:

```robot
${URL}
${BROWSER}
${ENV}
```

### Step 4

Loads keyword resources:

```robot
Resource    rf-keywords/Login.resource
```

### Step 5

Reads test data:

```text
Users.xlsx
```

### Step 6

Executes business keyword:

```robot
Login To Application
```

### Step 7

Keyword uses locators:

```robot
${TXT_USERNAME}
${BTN_LOGIN}
```

### Step 8

SeleniumLibrary interacts with browser.

### Step 9

Application performs requested action.

### Step 10

Robot Framework generates:

```text
report.html
log.html
output.xml
```

---

# Framework Type

This framework is a combination of:

## Keyword-Driven Framework

Reusable business keywords:

```robot
Login To Application

Create Customer

Search Customer
```

---

## Data-Driven Framework

Externalized data:

```text
Excel
JSON
Text Files
```

---

## Modular Framework

Independent modules:

```text
CAS
CAPS
CASH
```

---

# Advantages of This Framework

* Highly Scalable
* Easy Maintenance
* Supports Multiple Applications
* Environment Independent
* Data-Driven Testing Support
* Reusable Components
* Reduced Code Duplication
* Easy Integration with CI/CD
* Easy Integration with Sauce Labs
* Faster Test Development

---

# Interview Answer

> Our automation framework follows a Modular, Keyword-Driven, and Data-Driven architecture. The framework is organized by application modules such as CAS, CAPS, and CASH. Each module contains four major folders: rf-config for environment and Sauce Labs configurations, rf-keywords for reusable business keywords and locators, rf-testdata for Excel, JSON, and text-based test data, and rf-testcases for actual Robot Framework test scripts. Test cases contain only business workflows, while configurations, locators, and test data are externalized. This architecture improves maintainability, scalability, reusability, and supports independent execution of application modules across multiple environments.
