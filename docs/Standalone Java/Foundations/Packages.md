---
sidebar_position: 9
title: Java Packages
---

## 📌 What is a Package?
A package in Java is a namespace that groups related classes and interfaces together.

---

## 🎯 Why Use Packages?
- Avoid class conflicts  
- Organize code  
- Control access  
- Enable reuse  

---

## 📂 Types of Packages

### Built-in
```java
import java.util.ArrayList;
```

### User-defined
```java
package com.mycompany.utils;
```

---

## 🛠️ Create Package
```java
package com.example;

public class Test {
    public void display() {
        System.out.println("Hello Package");
    }
}
```

---

## 📥 Import

```java
import java.util.*;
```

---

## 🔐 Access Modifiers

| Modifier | Same Class | Same Package | Other Package |
|----------|-----------|-------------|--------------|
| public   | ✅ | ✅ | ✅ |
| protected| ✅ | ✅ | ❌ |
| default  | ✅ | ✅ | ❌ |
| private  | ✅ | ❌ | ❌ |

---

## 📁 Structure
com/example/test/Test.java

---

## ⚙️ Compile & Run
```bash
javac -d . Test.java
java com.example.Test
```

---

## ⚡ Summary
Package = Folder  
Import = Access
