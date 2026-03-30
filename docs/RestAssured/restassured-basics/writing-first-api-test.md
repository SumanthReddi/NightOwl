---
title: Writing Your First API Test
sidebar_position: 3
---

# 🧪 Writing Your First API Test with RestAssured

## 📘 Introduction

Now that you’ve set up your project and understand the `given-when-then` structure, it’s time to write your first API test. Writing tests is the core of API automation, and RestAssured makes it easy to send requests, validate responses, and ensure your APIs behave as expected.

In this section, we’ll walk through the process of writing a simple API test step by step. By the end of this guide, you’ll have a fully functional test that validates an API endpoint.

---

## 🎯 Step 1: Choose an API Endpoint

Before writing a test, you need an API endpoint to test. For this example, we’ll use ReqRes, a free, publicly available API for testing purposes.

- **GET /api/users**: Retrieves a list of users

---

## 🔍 Step 2: Understand the Expected Behavior

### Request Details
- HTTP Method: `GET`
- URL: `https://reqres.in/api/users`
- Query Parameters: Optional (e.g., `page=2`)

### Response Details

```json
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    }
  ]
}
```

---

## ✍️ Step 3: Write the Test

```java
import io.restassured.RestAssured;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class FirstAPITest {

    @Test
    public void testGetUsers() {

        RestAssured.baseURI = "https://reqres.in/api";

        given()
            .queryParam("page", 2)

        .when()
            .get("/users")

        .then()
            .statusCode(200)
            .body("page", equalTo(2))
            .body("data[0].first_name", equalTo("Michael"))
            .body("data.size()", greaterThan(0));
    }
}
```

---

## 🧩 Step 4: Break Down the Test

### Base URI
```java
RestAssured.baseURI = "https://reqres.in/api";
```

### Query Parameters
```java
given()
    .queryParam("page", 2);
```

### Send Request
```java
when()
    .get("/users");
```

### Validate Response
```java
then()
    .statusCode(200)
    .body("page", equalTo(2))
    .body("data[0].first_name", equalTo("Michael"));
```

---

## ▶️ Step 5: Run the Test

### Maven
```bash
mvn test
```

### Gradle
```bash
gradle test
```

### Output
```
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
```

---

## 🐞 Step 6: Debugging and Logging

```java
given()
    .log().all()
.when()
    .get("/users")
.then()
    .log().all();
```

---

## ✅ Best Practices

1. **Start Simple**

2. **Use Descriptive Test Names**

3. **Validate Edge Cases**

4. **Reuse Common Configurations**

5. **Log Requests and Responses**

---

## 🏁 Conclusion

Writing your first API test with RestAssured is a straightforward process. By following the steps outlined above, you can send requests, validate responses, and ensure your APIs behave as expected. In the next section, we’ll explore more advanced topics like handling query and path parameters, headers, and request bodies to build even more robust API tests.
