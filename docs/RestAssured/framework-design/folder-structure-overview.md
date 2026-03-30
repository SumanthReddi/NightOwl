---
title: Folder Structure Overview
sidebar_position: 1
---

# 🗂️ Folder Structure Overview for API Automation Framework

## 📘 Introduction

A well-organized folder structure is the foundation of a scalable and maintainable API automation framework. It ensures that your codebase is easy to navigate, reusable components are centralized, and tests are logically grouped. In this section, we’ll explore a recommended folder structure for RestAssured-based frameworks and explain the purpose of each folder.

---

## 📁 Recommended Folder Structure

```
api-tests/
├── src/
│   ├── main/
│   │   └── java/
│   │       └── com.example.api/
│   │           ├── config/
│   │           ├── utils/
│   │           ├── payloads/
│   │           └── endpoints/
│   └── test/
│       └── java/
│           └── com.example.tests/
│               ├── base/
│               ├── tests/
│               └── data/
├── resources/
│   ├── config.properties
│   ├── user-schema.json
│   └── test-data.json
└── pom.xml (or build.gradle)
```

---

## 🧩 Purpose of Each Folder

### 1. config/

- Centralize configuration details like base URLs and tokens  

```java
public class EnvironmentConfig {
    public static final String BASE_URI = "https://api.example.com";
}
```

---

### 2. utils/

- Store reusable utilities  

```java
public class DataGenerator {
    public static String generateUniqueEmail() {
        return "user_" + UUID.randomUUID().toString() + "@example.com";
    }
}
```

---

### 3. payloads/

- Store request payload builders  

```java
public class UserPayloads {
    public static String createUserPayload(String name, String email) {
        return "{ "name": "" + name + "", "email": "" + email + "" }";
    }
}
```

---

### 4. endpoints/

- Define API endpoints  

```java
public class UserEndpoints {
    public static final String GET_USERS = "/users";
}
```

---

### 5. base/

- Common setup for tests  

```java
public class BaseTest {
    @BeforeClass
    public void setup() {
        RestAssured.baseURI = EnvironmentConfig.BASE_URI;
    }
}
```

---

### 6. tests/

- Store test classes  

```java
public class UserTests extends BaseTest {
}
```

---

### 7. data/

- Store external test data  

---

### 8. resources/

- Store config, schema, test data  

---

## ✅ Best Practices

1. Keep it modular  
2. Centralize configuration  
3. Reuse components  
4. Externalize test data  
5. Document structure  

---

## 🏁 Conclusion

A well-designed folder structure is essential for building a scalable and maintainable API automation framework. By following this structure, your framework remains clean and extendable.
