---
title: Query and Path Parameters
sidebar_position: 1
---

# 🔗 Handling Query and Path Parameters in RestAssured

## 📘 Introduction

Query and path parameters are essential components of API requests. They allow you to pass additional information to the server, such as filters, identifiers, or dynamic values. Understanding how to handle these parameters is crucial for writing effective API tests with RestAssured.

In this section, we’ll explore:
1. **Query Parameters**: Used for filtering, pagination, or optional data  
2. **Path Parameters**: Used for dynamic values in the URL (e.g., resource IDs)  
3. How to use these parameters effectively in your tests  

---

## 🔍 Query Parameters

### What Are Query Parameters?

Query parameters are key-value pairs appended to the URL after a `?`. They are used to send additional information to the server, such as filters, page numbers, or sorting options.

**Example**
```
https://api.example.com/users?page=2&limit=10
```

---

### How to Add Query Parameters in RestAssured

#### Single Query Parameter

```java
given()
    .queryParam("page", 2)
.when()
    .get("/users");
```

---

#### Multiple Query Parameters

```java
given()
    .queryParam("page", 2)
    .queryParam("limit", 10)
.when()
    .get("/users");
```

---

#### Dynamic Query Parameters

```java
int pageNumber = 2;

given()
    .queryParam("page", pageNumber)
.when()
    .get("/users");
```

---

### Validating Query Parameter Responses

```java
given()
    .queryParam("page", 2)
.when()
    .get("/users")
.then()
    .statusCode(200)
    .body("page", equalTo(2));
```

---

## 🧩 Path Parameters

### What Are Path Parameters?

Path parameters are part of the URL itself and are used to specify dynamic values, such as resource IDs or usernames. They are enclosed in curly braces `{}` in the endpoint definition.

**Example**
```
https://api.example.com/users/{userId}
```

---

### How to Add Path Parameters in RestAssured

#### Single Path Parameter

```java
given()
    .pathParam("userId", 123)
.when()
    .get("/users/{userId}");
```

---

#### Multiple Path Parameters

```java
given()
    .pathParam("resourceType", "users")
    .pathParam("resourceId", 123)
.when()
    .get("/{resourceType}/{resourceId}");
```

---

#### Dynamic Path Parameters

```java
String resourceType = "users";
int resourceId = 123;

given()
    .pathParam("resourceType", resourceType)
    .pathParam("resourceId", resourceId)
.when()
    .get("/{resourceType}/{resourceId}");
```

---

### Validating Path Parameter Responses

```java
given()
    .pathParam("userId", 123)
.when()
    .get("/users/{userId}")
.then()
    .statusCode(200)
    .body("id", equalTo(123))
    .body("name", equalTo("John Doe"));
```

---

## 🔀 Combining Query and Path Parameters

```java
given()
    .pathParam("userId", 123)
    .queryParam("status", "active")
.when()
    .get("/users/{userId}")
.then()
    .statusCode(200)
    .body("id", equalTo(123))
    .body("status", equalTo("active"));
```

---

## ✅ Best Practices for Handling Parameters

1. **Use Descriptive Variable Names**

2. **Externalize Configuration**

3. **Validate Edge Cases**

```java
given()
    .pathParam("userId", "invalid")
.when()
    .get("/users/{userId}")
.then()
    .statusCode(404);
```

4. **Reuse Common Configurations**

```java
private RequestSpecification withUserId(int userId) {
    return given()
        .pathParam("userId", userId);
}
```

5. **Log Requests and Responses**

```java
given()
    .log().all()
    .queryParam("page", 2)
.when()
    .get("/users")
.then()
    .log().all();
```

---

## 🏁 Conclusion

Query and path parameters are powerful tools for interacting with APIs. By mastering how to handle them in RestAssured, you can write flexible and robust API tests. In the next section, we’ll explore headers and request bodies, which are equally important for constructing and validating API requests.
