---
sidebar_position: 3
---

# Selenium Components

Selenium is not a single tool but a **suite of components**, each designed for a
specific purpose in the automation ecosystem.

Understanding these components helps you choose the **right tool for the right job**.

---

## Selenium Suite Overview

Selenium consists of the following main components:

1. Selenium IDE
2. Selenium WebDriver
3. Selenium Grid

Each component serves a different use case.

---

## Selenium IDE (Awareness)

Selenium IDE is a **record-and-playback tool** available as a browser extension.

### Features
- Records user actions
- Plays back recorded scripts
- Supports basic assertions
- Exports code (limited usefulness)

### Limitations ❌
- Not scalable
- Poor maintainability
- Not suitable for enterprise frameworks

👉 Used mainly for:
- Learning
- Quick demos
- Proof of concepts

---

## Selenium WebDriver (Core Component)

Selenium WebDriver is the **heart of Selenium automation**.

### What WebDriver Does
- Directly controls browsers
- Executes real user actions
- Supports multiple languages
- Integrates with frameworks (TestNG, Cucumber)

### Why WebDriver is Important
- Industry standard
- Flexible and powerful
- Suitable for large-scale frameworks

👉 **95% of real projects use WebDriver**

---

## Selenium Grid (Overview)

Selenium Grid allows tests to run on:
- Multiple browsers
- Multiple machines
- Parallel environments

### Key Use Cases
- Cross-browser testing
- Parallel execution
- CI/CD pipelines

(Grid will be covered in detail later.)

---

## Choosing the Right Component

| Component | When to Use |
|---|---|
| Selenium IDE | Learning / quick demo |
| Selenium WebDriver | Real automation projects |
| Selenium Grid | Parallel & distributed runs |

---

## Common Misconceptions ❌

- Selenium IDE replaces WebDriver ❌
- Selenium Grid is mandatory ❌
- Selenium is only WebDriver ❌

---

## Key Takeaways

- Selenium is a suite, not a single tool
- WebDriver is the core component
- IDE is for awareness only
- Grid is for scale and CI/CD

---

## What’s Next?

👉 **Java Basics Required for Selenium**
