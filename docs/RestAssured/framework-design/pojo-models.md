---
title: POJO Models
sidebar_position: 4
---

# 🧱 Using POJO Models for Request and Response Handling in RestAssured

## 📘 Introduction

POJO (Plain Old Java Object) models are a powerful way to represent JSON data in API automation. They provide a structured, type-safe approach to handling request and response payloads, making your tests more readable, maintainable, and less error-prone. Instead of working with raw JSON strings, you can use POJOs to serialize and deserialize data seamlessly.

---

## 🧠 1. What Are POJOs?

### Definition

A POJO is a simple Java class that contains private fields, public getters and setters, and optionally constructors. It represents a JSON object in a type-safe manner.

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

```java
public class User {
    private int id;
    private String name;
    private String email;

    // Getters and Setters
}
```

---

## 📦 2. Using POJOs for Requests

```java
public class CreateUserRequest {
    private String name;
    private String email;

    public CreateUserRequest(String name, String email) {
        this.name = name;
        this.email = email;
    }
}
```

```java
given()
    .body(new CreateUserRequest("John", "john@example.com"))
.when()
    .post("/users")
.then()
    .statusCode(201);
```

---

## 📥 3. Using POJOs for Responses

```java
UserResponse response = given()
    .pathParam("userId", 1)
.when()
    .get("/users/{userId}")
.as(UserResponse.class);
```

---

## 🔗 4. Handling Complex Structures

### Nested Objects

```java
response.getUser().getName();
```

### Arrays

```java
response.getUsers().size();
```

---

## ✅ Best Practices

1. Keep POJOs simple  
2. Use Lombok  
3. Validate responses  
4. Handle nulls  
5. Document clearly  

---

## 🏁 Conclusion

POJO models provide a clean and type-safe way to handle JSON data in API automation.
