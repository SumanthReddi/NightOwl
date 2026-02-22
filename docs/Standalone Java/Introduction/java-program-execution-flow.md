---
sidebar_position: 3
---

# Java Program Execution Flow (What Happens When You Run Java Code)

## Priority
CORE_JAVA_FOUNDATION

---

## Why This File Exists
Most people write Java code but **don’t really know what happens when they run it**.

This file explains:
- What happens from `.java` file to output
- Role of compiler, JVM, and runtime
- Why Java errors happen at different stages

This understanding removes confusion later in:
- debugging
- JVM topics
- performance discussions
- interview questions

---

## High-Level Execution Flow

When you run a Java program, this is what actually happens:

```
.java  →  compiler  →  .class (bytecode)  →  JVM  →  output
```

Each step has a **clear responsibility**.

---

## Step 1: Writing Source Code (`.java`)

You write Java code in a `.java` file.

Example:
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

At this stage:
- Code is human-readable
- JVM cannot run it directly

---

## Step 2: Compilation (javac)

The Java compiler (`javac`) converts source code into **bytecode**.

Command:
```bash
javac HelloWorld.java
```

Output:
```
HelloWorld.class
```

Important:
- Compilation checks **syntax errors**
- No JVM execution happens yet

---

## What Is Bytecode (Important Concept)

Bytecode:
- is NOT machine code
- is NOT human-readable
- is platform-independent

Bytecode is designed to be understood by the **JVM**, not the OS.

This is the key to Java portability.

---

## Step 3: Class Loading

When you run:
```bash
java HelloWorld
```

The JVM:
1. Finds the `.class` file
2. Loads it into memory
3. Verifies bytecode safety

This is handled by the **Class Loader subsystem**.

You don’t control this manually.

---

## Step 4: Bytecode Verification

Before execution, JVM verifies:
- no illegal memory access
- no stack corruption
- no security violations

If verification fails:
❌ program does not run

This makes Java safer than many languages.

---

## Step 5: Execution (Interpreter + JIT)

The JVM executes bytecode using:
- Interpreter (initial execution)
- JIT compiler (optimizes frequently used code)

Important:
> Java is both **interpreted and compiled**

This is why Java performance improves over time.

---

## Role of JIT Compiler (Conceptual)

JIT:
- converts hot bytecode into native machine code
- improves performance
- runs automatically

You don’t write JIT code.
The JVM handles it.

---

## Runtime Errors vs Compile-Time Errors

### Compile-Time Errors
Detected by `javac`:
- syntax errors
- missing semicolons
- type mismatches

### Runtime Errors
Detected by JVM:
- NullPointerException
- ArrayIndexOutOfBoundsException
- OutOfMemoryError

Different stages, different responsibilities.

---

## Where `main()` Fits In

`main()` is:
- JVM entry point
- NOT a special Java keyword
- required to start execution

Without `main()`:
❌ program won’t start

---

## Why This Knowledge Matters

Understanding execution flow helps you:
- debug errors faster
- understand JVM topics later
- answer interview questions clearly
- reason about performance

Without this, Java feels “magical”.

---

## Common Mistakes

- Thinking JVM compiles Java code
- Confusing compiler with JVM
- Believing Java is purely interpreted
- Ignoring bytecode completely

---

## Interview Notes

- Steps of Java program execution
- What is bytecode?
- Role of JVM vs compiler
- Why Java is platform-independent
- Compile-time vs runtime errors

---

## Summary

Java execution is a **pipeline**, not a single step.

Understanding this pipeline is
foundational for mastering Java.
