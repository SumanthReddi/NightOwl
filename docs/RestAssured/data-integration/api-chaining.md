---
title: API Chaining
sidebar_position: 3
---

# 🔗 API Chaining in RestAssured

## 📘 Introduction

API chaining is a technique where the output of one API call (e.g., an ID or token) is used as input for subsequent API calls. This approach is essential for end-to-end testing, where multiple API requests are required to simulate real-world workflows. In this section, we’ll explore how to implement API chaining effectively in RestAssured.

---

## 🧠 1. What Is API Chaining?

### Definition

API chaining involves linking multiple API requests together, where the response from one request is used to construct or validate subsequent requests.

### Why Use API Chaining?

- End-to-end testing  
- Dynamic data handling  
- Improved test coverage  

---

## ⚙️ 2. How to Implement API Chaining

### Example 1: Extracting and Using an ID

```java
Response createUserResponse = given()
    .header("Content-Type", "application/json")
    .body("{ "name": "John", "email": "john@example.com" }")
.when()
    .post("/users");

int userId = createUserResponse.jsonPath().getInt("id");
```

```java
given()
    .pathParam("userId", userId)
.when()
    .get("/users/{userId}")
.then()
    .statusCode(200)
    .body("name", equalTo("John"));
```

---

### Example 2: Using an Authentication Token

```java
Response authResponse = given()
    .header("Content-Type", "application/json")
    .body("{ "username": "admin", "password": "password" }")
.when()
    .post("/auth");

String authToken = authResponse.jsonPath().getString("token");
```

```java
given()
    .header("Authorization", "Bearer " + authToken)
.when()
    .get("/secure-endpoint")
.then()
    .statusCode(200);
```

---

## 🔄 3. Combining Multiple Chains

```java
Response createUserResponse = given()
    .header("Content-Type", "application/json")
    .body("{ "name": "John", "email": "john@example.com" }")
.when()
    .post("/users");

int userId = createUserResponse.jsonPath().getInt("id");
```

```java
given()
    .header("Content-Type", "application/json")
    .pathParam("userId", userId)
    .body("{ "name": "John Updated" }")
.when()
    .put("/users/{userId}")
.then()
    .statusCode(200);
```

```java
given()
    .pathParam("userId", userId)
.when()
    .delete("/users/{userId}")
.then()
    .statusCode(204);
```

---

## ✅ 4. Best Practices

1. Extract only required data  
2. Validate intermediate responses  
3. Handle edge cases  
4. Log intermediate values  
5. Clean up resources  

---

## 🏁 Conclusion

API chaining helps simulate real-world workflows and improves the robustness of your API tests.
