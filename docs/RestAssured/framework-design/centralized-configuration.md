---
title: Centralized Configuration
sidebar_position: 5
---

# ⚙️ Centralized Configuration in RestAssured

## 📘 Introduction

Centralized configuration is a key aspect of building a scalable and maintainable API automation framework. By externalizing settings like base URLs, authentication tokens, and environment-specific parameters, you can easily switch between environments without modifying your test code.

---

## 🎯 Why Centralize Configuration?

- Environment independence  
- Reusability  
- Maintainability  
- Security  

---

## 🛠️ Using Properties Files

```properties
base.uri=https://api.example.com
auth.token=token
```

```java
RestAssured.baseURI = ConfigLoader.getProperty("base.uri");
```

---

## 📦 Using Constants

```java
public class EnvironmentConfig {
    public static final String BASE_URI = "https://api.example.com";
}
```

---

## 🔐 Using Environment Variables

```java
String baseUri = System.getenv("BASE_URI");
```

---

## 🌍 Multiple Environments

```bash
mvn test -Denv=prod
```

---

## ✅ Best Practices

1. Externalize sensitive data  
2. Validate configs  
3. Use defaults wisely  
4. Document keys  

---

## 🏁 Conclusion

Centralized configuration improves flexibility, maintainability, and security of your API automation framework.
