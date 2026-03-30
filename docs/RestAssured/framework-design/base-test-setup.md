---
title: Base Test Setup
sidebar_position: 3
---

# 🧱 Base Test Setup in RestAssured

## 📘 Introduction

A base test setup is a foundational component of any API automation framework. It centralizes common configurations like RestAssured setup, logging, and authentication to ensure consistency across all tests.

---

## ⚙️ 1. What Is a Base Test Class?

A base test class is a parent class that all test classes extend.

---

## 🛠️ 2. Setting Up RestAssured Globally

```java
public class BaseTest {

    @BeforeClass
    public void setup() {
        RestAssured.baseURI = "https://api.example.com";
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
    }
}
```

---

## 🔐 3. Adding Authentication

```java
RestAssured.authentication = RestAssured.preemptive().basic("username", "password");
```

---

## 📦 4. Setting Up Preconditions

```java
Response response = given()
    .body("{ "name": "Test User" }")
.when()
    .post("/users");

createdUserId = response.jsonPath().getString("id");
```

---

## 🧹 5. Cleaning Up Resources

```java
@AfterClass
public void cleanup() {
    given()
    .when()
        .delete("/users/" + createdUserId)
    .then()
        .statusCode(204);
}
```

---

## ✅ Best Practices

1. Centralize configuration  
2. Enable logging conditionally  
3. Handle edge cases  
4. Use environment variables  

---

## 🏁 Conclusion

A well-designed base test setup ensures consistency, reduces duplication, and improves maintainability across your API automation framework.
