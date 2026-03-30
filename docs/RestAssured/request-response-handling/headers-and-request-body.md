---
title: Headers and Request Body
sidebar_position: 2
---

# 📦 Handling Headers and Request Body in RestAssured

## 📘 Introduction

Headers and request bodies are critical components of API requests. Headers provide metadata about the request, such as content type, authentication details, or caching instructions. The request body, on the other hand, carries the data being sent to the server, typically in JSON or XML format.

In this section, we’ll explore:
1. **Headers**: How to add and validate headers in your API tests  
2. **Request Body**: How to construct and send request bodies for POST, PUT, and PATCH requests  
3. Best practices for handling headers and request bodies effectively  

---

## 🔑 Headers

### What Are Headers?

Headers are key-value pairs included in HTTP requests and responses. They provide additional information about the request or response, such as:

- **Content-Type**: Specifies the format of the data being sent (e.g., `application/json`)  
- **Authorization**: Sends credentials or tokens for authentication  
- **Accept**: Indicates the format of the response the client expects  

---

### How to Add Headers in RestAssured

#### Single Header

```java
given()
    .header("Content-Type", "application/json")
.when()
    .get("/users");
```

---

#### Multiple Headers

```java
given()
    .header("Content-Type", "application/json")
    .header("Authorization", "Bearer <token>")
.when()
    .get("/users");
```

---

#### Dynamic Headers

```java
String token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

given()
    .header("Authorization", "Bearer " + token)
.when()
    .get("/users");
```

---

### Validating Headers in Responses

```java
given()
.when()
    .get("/users")
.then()
    .header("Content-Type", "application/json")
    .header("Cache-Control", "no-cache");
```

---

## 🧾 Request Body

### What Is a Request Body?

The request body contains the data being sent to the server, typically in JSON or XML format. It is used in POST, PUT, and PATCH requests to create or update resources.

---

### How to Add a Request Body in RestAssured

#### JSON Request Body

```java
String requestBody = "{ "name": "John", "age": 30 }";

given()
    .header("Content-Type", "application/json")
    .body(requestBody)
.when()
    .post("/users")
.then()
    .statusCode(201);
```

---

#### Using POJOs (Plain Old Java Objects)

```java
public class User {
    private String name;
    private int age;

    // Getters and Setters
}

User user = new User();
user.setName("John");
user.setAge(30);

given()
    .header("Content-Type", "application/json")
    .body(user)
.when()
    .post("/users")
.then()
    .statusCode(201);
```

---

#### Dynamic Request Bodies

```java
String name = "John";
int age = 30;

String requestBody = "{ "name": "" + name + "", "age": " + age + " }";

given()
    .header("Content-Type", "application/json")
    .body(requestBody)
.when()
    .post("/users")
.then()
    .statusCode(201);
```

---

### Validating the Response Body

```java
String requestBody = "{ "name": "John", "age": 30 }";

given()
    .header("Content-Type", "application/json")
    .body(requestBody)
.when()
    .post("/users")
.then()
    .statusCode(201)
    .body("name", equalTo("John"))
    .body("age", equalTo(30));
```

---

## 🔗 Combining Headers and Request Body

```java
String requestBody = "{ "name": "John", "age": 30 }";
String token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

given()
    .header("Content-Type", "application/json")
    .header("Authorization", "Bearer " + token)
    .body(requestBody)
.when()
    .post("/users")
.then()
    .statusCode(201)
    .body("name", equalTo("John"))
    .body("age", equalTo(30));
```

---

## ✅ Best Practices for Handling Headers and Request Body

1. **Use Consistent Headers**

2. **Validate Headers and Response Body**

3. **Externalize Request Data**

```java
File requestBody = new File("src/test/resources/user.json");

given()
    .header("Content-Type", "application/json")
    .body(requestBody)
.when()
    .post("/users");
```

4. **Reuse Common Configurations**

```java
private RequestSpecification withAuthHeader(String token) {
    return given()
        .header("Authorization", "Bearer " + token);
}
```

5. **Log Requests and Responses**

```java
given()
    .log().all()
    .header("Content-Type", "application/json")
    .body("{ "name": "John", "age": 30 }")
.when()
    .post("/users")
.then()
    .log().all();
```

---

## 🏁 Conclusion

Headers and request bodies are essential for constructing and validating API requests. By mastering how to handle them in RestAssured, you can write robust and flexible API tests. In the next section, we’ll explore JSON Path extraction and logging to help you extract and debug specific fields from API responses.
