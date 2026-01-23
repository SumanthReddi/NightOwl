---
sidebar_position: 2
---
## Java Features and Program Execution

**Java** is a popular programming language and also a platform. Java is used to write programs that can run on many types of computers—Windows, Mac, Linux, and more.
A **platform** is the environment (hardware or software) where a program runs. Java is called a platform because it has its own special software (JRE and API) that helps programs run.

## Features of Java :

![java-features](https://user-images.githubusercontent.com/2780145/34343690-2fd47db0-e9ff-11e7-9630-75423dda7eaa.png)

- **Simple:**
Java is easy to learn and use. Its rules are similar to C++, but it removes confusing things like pointers, operator overloading, and multiple inheritance. Java also has automatic garbage collection to clean up unused memory.
- **Object-Oriented:**
Java is built around objects. An object combines data and actions (methods). Main ideas are Objects, Classes, Inheritance, Polymorphism, Abstraction, and Encapsulation.
- **Platform Independent:**
Java programs can run on multiple operating systems (Windows, Mac, Linux) without changing code. This is possible because Java code is compiled into something called “bytecode.” The bytecode can run anywhere with Java’s runtime.
- **Secured:**
Java has no pointers, so it's resistant to harmful code. Programs run inside a secure “sandbox” environment called JVM. Java checks code for security and lets developers add extra security like SSL and encryption.
- **Robust:**
Java manages memory automatically and handles errors well (through exceptions). Variables must be declared with types, which helps prevent mistakes.
- **Architecture-Neutral:**
Java programs behave the same everywhere—things like data types stay the same size.
- **Portable:**
“Write once, run anywhere”—Java programs run on different machines without changes.
- **Interpreted:**
Java converts code to bytecode that is read and executed by the Java runtime (interpreter).
- **High-Performance:**
Java code runs fast compared to older interpreted languages, thanks to bytecode and JIT (Just-In-Time) compiler. Java isn’t as fast as C/C++ though.
- **Distributed:**
Java helps build programs that work across many computers (networked applications).
- **Multi-threaded:**
Java can do multiple tasks at once using threads. This is useful for games, media, or web apps.
- **Dynamic:**
Java can load new code and classes as needed, even from the internet. Memory for objects is allocated when needed, and the exact method to call can be decided while running.


## Java Program Execution Process :

![java-execution-process](https://user-images.githubusercontent.com/2780145/34343683-d3aea7e0-e9fe-11e7-866d-26a8857e04c9.png)

1. **Write Java code.**
2. **Compile code:** Java turns your code into bytecode using a compiler.
3. **Run bytecode:** Bytecode works anywhere with Java Runtime Environment (JRE).
4. **JVM (Java Virtual Machine):** The JVM reads bytecode, checks it, and runs it on your computer. JVM also manages security and memory.

## JDK - JRE - JVM - JIT :

![jdk-jre-jvm-jit](https://user-images.githubusercontent.com/2780145/34342877-771d2796-e9e4-11e7-9d18-98ed672a4b53.png)

- **JDK (Java Development Kit):**
A kit for developers containing tools for writing and compiling Java programs. Includes the JRE.
- **JRE (Java Runtime Environment):**
This lets Java programs run on computers. It includes the JVM and libraries.
- **JVM (Java Virtual Machine):**
JVM is an invisible “machine” inside your computer. It runs Java bytecode, checks it for errors, and manages memory and security. JVMs are available for many computers.
- **JIT (Just-In-Time Compiler):**
Part of the JVM that speeds things up. It converts bytecode into machine code while your program runs, making your program faster.

**Note:** JDK, JRE, JVM are installed differently for each operating system, but Java bytecode doesn’t change—so your Java program is platform-independent.

## Internal Architecture of JVM or How JVM Works

![jvm-architecture](https://user-images.githubusercontent.com/2780145/34343635-f405f2f2-e9fc-11e7-9628-28992defdd0b.png)

JVM is made up of smaller parts:

- **Class loader:**
Loads Java classes (your programs) into memory and checks the code.
- **Runtime Data Areas:**
    - **Method Area:** Stores details about methods and constants.
    - **Heap:** Stores objects.
    - **Stack:** Keeps track of methods as they run.
    - **PC Register:** Remembers the line of bytecode being executed.
    - **Native Method Stack:** Runs code written in other languages like C.
- **Native Method Interface + Library:**
Connects JVM with extra functions written in another language.
- **Execution Engine:**
    - **Interpreter:** Runs your bytecode instructions one by one.
    - **JIT Compiler:** Makes your program faster by converting bytecode to native code while running.

JVM carefully manages memory, checks for errors, and chooses the fastest way to run your program using interpreter or JIT compiler.

this is the existing intoruction i have , club this and above one and give me one simple and stright forward notes with relevant details.

Here is a **simple and combined set of notes** on Java Features, Java Program Execution, and Architecture. These merge your material with the best points from additional resources, with clear focus and no duplication.[^1][^3][^4][^5]

***

## Java Program Execution: How It Works

1. **Write Source Code (.java file):**
Programmers write human-readable code.
2. **Compile to Bytecode (.class file):**
The Java Compiler (`javac`) translates code to bytecode.
3. **Run with Java Runtime Environment (JRE):**
The JVM loads the bytecode and executes it, using available libraries. JRE = JVM + Standard Libraries.
4. **JVM Execution:**
The JVM checks, loads, executes, and manages the program in a secure 'sandbox', handling errors and memory.

***

## Core Java Architecture

Java's platform architecture has **three main components**:

- **JDK (Java Development Kit):**
Tools for developers—includes compiler, debug tools, JRE, and more. Used for writing, compiling, and packaging Java code.
- **JRE (Java Runtime Environment):**
Lets users run Java apps—contains the JVM and libraries, but not development tools.
- **JVM (Java Virtual Machine):**
The core execution engine—loads and runs bytecode, manages security and memory, available for each OS.
- **JIT (Just-In-Time Compiler):**
Part of JVM; improves program speed by converting bytecode to native machine code during execution.

***

## How JVM Works (JVM Internal Architecture)

- **Class Loader:**
Loads classes and checks code before running.
- **Runtime Data Areas:**
    - **Method Area:** Stores class information, static variables, and constants.
    - **Heap:** Where all new objects live.
    - **Stack:** Each thread has one for method calls and local variables.
    - **PC Register:** Tracks current instruction for each thread.
    - **Native Method Stack:** Handles calls to C/C++ methods via Java Native Interface (JNI).
- **Execution Engine:**
Runs bytecode via:
    - **Interpreter:** Executes instructions one by one.
    - **JIT Compiler:** Converts frequently used bytecode to native code for faster repeats.
- **Garbage Collector:**
Automatically frees memory by removing unused objects.
- **Native Libraries / Interface:**
Allows Java programs to use code written in other languages.

***

## Summary Diagram Table

| Component | Description | Role |
| :-- | :-- | :-- |
| JDK | Dev tools + JRE | Write \& compile code |
| JRE | JVM + Libraries | Run compiled bytecode |
| JVM | Execution engine | Load, check, and run bytecode securely |

**Java’s ‘Write Once, Run Anywhere’** approach relies on this architecture—write on any system, run anywhere there’s a JVM, with the same output and behavior.

