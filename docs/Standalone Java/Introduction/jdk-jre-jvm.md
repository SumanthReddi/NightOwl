---
sidebar_position: 3
---

# JDK vs JRE vs JVM (What You Actually Need and Why)

## Priority
CORE_JAVA_FOUNDATION

---

## Why This File Exists
JDK, JRE, and JVM are often used interchangeably — incorrectly.

This file clarifies:
- What each component really is
- How they depend on each other
- What you need to **run** Java vs **develop** Java
- Why modern Java installations look different than older ones

This is **pure Java language knowledge**, independent of any framework.

---

## The Big Picture (One-Line Summary)

- **JVM** → runs Java bytecode  
- **JRE** → provides runtime environment  
- **JDK** → provides development tools  

Think of them as **layers**, not competitors.

---

## JVM (Java Virtual Machine)

### What JVM Is
The JVM is a **virtual execution engine** that:
- executes Java bytecode (`.class` files)
- manages memory (heap, stack)
- performs garbage collection
- enforces security and verification

Without JVM:
❌ Java programs cannot run

---

### What JVM Is NOT
- NOT a compiler
- NOT an operating system
- NOT Java itself

It is a **runtime engine**.

---

## JRE (Java Runtime Environment)

### What JRE Is
JRE is a **runtime package** that contains:
- JVM
- core Java libraries (`java.lang`, `java.util`, etc.)
- supporting runtime files

Purpose:
> To **run** Java applications

---

### What JRE Is Used For
- Running Java applications
- Executing `.jar` files
- Production servers (older Java versions)

You do **not** need development tools in JRE.

---

## JDK (Java Development Kit)

### What JDK Is
JDK is a **superset** that contains:
- JRE
- JVM
- development tools

Key tools include:
- `javac` → compiler
- `java` → launcher
- `javadoc` → documentation generator
- `jar` → packaging tool

Purpose:
> To **develop** Java applications

---

## Dependency Relationship (Important)

```
JDK
 └── JRE
      └── JVM
```

- JVM is the core
- JRE wraps JVM for execution
- JDK wraps everything for development

---

## Old Java vs Modern Java (Important Change)

### Before Java 9
- JDK and JRE were distributed separately
- You explicitly installed JRE to run programs

### Java 9 and Later
- JRE is no longer distributed separately
- JDK includes everything
- You can create custom runtimes if needed

This is why you mostly install **only JDK today**.

---

## What You Actually Need (Practical Rule)

| Scenario | What You Need |
|------|--------------|
| Learning Java | JDK |
| Writing Java code | JDK |
| Running Java apps | JDK |
| CI / Build servers | JDK |

**Rule:**  
👉 Install **JDK only**. It covers all cases.

---

## Common Confusions (Very Common)

❌ JVM is Java  
✔ JVM runs Java  

❌ JRE is needed separately  
✔ JDK already includes runtime  

❌ JDK is only for developers  
✔ JDK is needed almost everywhere  

---

## Where This Knowledge Is Used

- Interviews (classic question)
- Understanding Java installations
- CI/CD environment setup
- Explaining Java runtime behavior

---

## Common Mistakes

- Installing only JRE and wondering why compilation fails
- Assuming JVM and JDK are the same
- Memorizing definitions without understanding dependency

---

## Best Practices (Learning Perspective)

- Understand the dependency chain
- Always install JDK
- Don’t overthink JRE in modern Java
- Focus on **what role each plays**, not definitions

---

## Interview Notes

- Difference between JVM, JRE, and JDK
- What is included in JDK?
- Why JRE is no longer separate
- What is needed to run vs develop Java programs

---

## Summary

- JVM executes bytecode
- JRE provides runtime
- JDK provides development tools

Together, they make Java usable.

## Final Takeaway

If Java ever feels confusing, ask:

> “Am I trying to **write** code or **run** code?”

- Writing → **JDK**
- Running → **JRE**
- Executing → **JVM**

Once you see the roles,
the confusion disappears.
