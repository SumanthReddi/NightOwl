---
sidebar_position: 9
title: Abstract Class vs Interface
---

# Abstract Class vs Interface

This section focuses on **clear differences and when to use each**.  
(Detailed concepts are covered in their respective sections.)

---

## 🧠 Core Idea

- **Abstract Class** → used for **shared behavior (base class)**
- **Interface** → used for **defining capability (contract)**

👉 Think:
- Abstract Class = *"what it is"*  
- Interface = *"what it can do"*

---

## 📊 Key Differences

| Aspect | Abstract Class | Interface |
|--------|---------------|----------|
| Purpose | Base class with shared logic | Contract defining behavior |
| Inheritance | Single | Multiple |
| State (fields) | ✅ Allowed | ❌ Not allowed |
| Constructors | ✅ Yes | ❌ No |
| Methods | Abstract + Concrete | Abstract + Default/Static |
| Usage Focus | Code reuse | Flexibility & loose coupling |

---

## 🎯 When to Use What

### 🟢 Use Abstract Class
Use when classes are **closely related** and share behavior.

Examples:
- Base test class in Selenium  
- Common utility logic  

👉 You want **reuse + control**

---

### 🔵 Use Interface
Use when defining a **capability that multiple classes can implement**.

Examples:
- Clickable, Searchable, Loggable  
- Payment methods (UPI, Card, NetBanking)

👉 You want **flexibility + multiple inheritance**

---

## 🔄 Quick Example

```java
interface Payment {
    void pay(double amount);
}

class CardPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid by card");
    }
}
```

👉 Code depends on **interface, not implementation**

---

## ⚠️ Common Mistakes

- Using abstract class when only a contract is needed  
- Overusing default methods in interfaces  
- Mixing responsibilities (fat interfaces)

---

## 📌 Quick Summary

- Abstract Class → **shared implementation**
- Interface → **contract + flexibility**

👉 Prefer **interfaces** unless you need shared code.
