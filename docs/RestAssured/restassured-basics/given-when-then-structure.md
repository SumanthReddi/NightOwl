---
title: Given When Then Structure
sidebar_position: 2
---

# 🔁 Understanding the Given-When-Then Structure in RestAssured

## 📘 Introduction

RestAssured follows the **Behavior-Driven Development (BDD)** style of writing tests, which uses the `given-when-then` structure. This structure is intuitive and mirrors natural language, making it easy to read and understand. It breaks down API testing into three distinct phases:

1. **Given**: Set up the request (e.g., headers, query parameters, body)  
2. **When**: Perform the action (e.g., send a GET, POST, or DELETE request)  
3. **Then**: Validate the response (e.g., status code, response body)  

In this section, we’ll explore each phase in detail, along with practical examples to help you master the `given-when-then` structure.

---

## ⚙️ The Given Phase: Setting Up the Request

The `given()` phase is where you configure the details of your API request. This includes specifying headers, query parameters, path parameters, request bodies, and authentication details.

### Key Components

#### 1. Headers

```java
given()
    .header("Content-Type", "application/json")
    .header("Authorization", "Bearer <token>");
```

---

#### 2. Query Parameters

```java
given()
    .queryParam("page", 2)
    .queryParam("limit", 10);
```

---

#### 3. Path Parameters

```java
given()
    .pathParam("userId", 123);
```

---

#### 4. Request Body

```java
String requestBody = "{ "name": "John", "age": 30 }";

given()
    .body(requestBody);
```

---

#### 5. Authentication

```java
given()
    .auth().basic("username", "password");
```

---

## 🚀 The When Phase: Performing the Action

The `when()` phase is where you specify the HTTP method and send the request to the API endpoint.

### Supported HTTP Methods

#### GET

```java
when()
    .get("/users");
```

---

#### POST

```java
when()
    .post("/users");
```

---

#### PUT

```java
when()
    .put("/users/{userId}");
```

---

#### DELETE

```java
when()
    .delete("/users/{userId}");
```

---

## ✅ The Then Phase: Validating the Response

The `then()` phase is where you validate the API response.

### Key Validations

#### 1. Status Code

```java
then()
    .statusCode(200);
```

---

#### 2. Response Headers

```java
then()
    .header("Content-Type", "application/json");
```

---

#### 3. Response Body

```java
then()
    .body("name", equalTo("John"))
    .body("age", greaterThan(25));
```

---

#### 4. JSON Path Extraction

```java
String name = response.jsonPath().getString("data.name");
```

---

#### 5. Schema Validation

```java
then()
    .body(matchesJsonSchemaInClasspath("user-schema.json"));
```

---

## 🔗 Putting It All Together: A Complete Example

```java
import io.restassured.RestAssured;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class UserAPITest {

    @Test
    public void testCreateUser() {

        RestAssured.baseURI = "https://reqres.in/api";

        String requestBody = "{ "name": "John", "job": "QA Engineer" }";

        given()
            .header("Content-Type", "application/json")
            .body(requestBody)

        .when()
            .post("/users")

        .then()
            .statusCode(201)
            .body("name", equalTo("John"))
            .body("job", equalTo("QA Engineer"));
    }
}
```

---

## 🧠 Best Practices for Using Given-When-Then

1. **Keep Tests Readable**

2. **Reuse Common Configurations**

3. **Validate Edge Cases**

4. **Extract Reusable Methods**

5. **Log Requests and Responses**

```java
given()
    .log().all()
.when()
    .get("/users")
.then()
    .log().all();
```

---

## 🏁 Conclusion

The `given-when-then` structure in RestAssured provides a clear and intuitive way to write API tests. By mastering this structure, you can efficiently set up requests, perform actions, and validate responses. In the next section, we’ll dive deeper into handling query and path parameters, headers, and request bodies to build more complex API tests.
