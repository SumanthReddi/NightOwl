---
title: Small Real World Implementation
sidebar_position: 1
---

# Small Real-World Implementation of API Automation

## Introduction
A small real-world implementation provides a practical example of how to apply the concepts and techniques discussed in this documentation. By building a complete, end-to-end API automation framework for a sample application, you can consolidate your understanding and gain hands-on experience. In this section, we’ll walk through a step-by-step implementation of an API automation framework using RestAssured, TestNG, and other tools.

---

## 1. Scenario Overview

Let’s assume we are testing a simple **User Management API** with the following endpoints:

1. **Create User**: `POST /users`
   - Request Body: `{ "name": "John", "email": "john@example.com" }`
   - Response: `{ "id": 1, "name": "John", "email": "john@example.com" }`

2. **Get User**: `GET /users/{userId}`
   - Response: `{ "id": 1, "name": "John", "email": "john@example.com" }`

3. **Update User**: `PUT /users/{userId}`
   - Request Body: `{ "name": "John Updated" }`
   - Response: `{ "id": 1, "name": "John Updated", "email": "john@example.com" }`

4. **Delete User**: `DELETE /users/{userId}`
   - Response: `204 No Content`

---

## 2. Step-by-Step Implementation

### Step 1: Set Up the Project

1. **Create a Maven Project**:
   - Use your IDE or command line to create a Maven project.

2. **Add Dependencies**:
```xml
<dependencies>
    <!-- RestAssured -->
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>rest-assured</artifactId>
        <version>5.3.0</version>
    </dependency>

    <!-- TestNG -->
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.8.0</version>
    </dependency>

    <!-- Allure Reporting -->
    <dependency>
        <groupId>io.qameta.allure</groupId>
        <artifactId>allure-testng</artifactId>
        <version>2.21.0</version>
    </dependency>
</dependencies>
```

3. **Configure TestNG**:
```xml
<suite name="User Management API Tests">
    <test name="User CRUD Tests">
        <classes>
            <class name="com.example.tests.UserTests"/>
        </classes>
    </test>
</suite>
```

---

### Step 2: Write Base Test Setup

```java
import io.restassured.RestAssured;
import org.testng.annotations.BeforeClass;

public class BaseTest {

    @BeforeClass
    public void setup() {
        RestAssured.baseURI = "https://api.example.com";
        RestAssured.requestSpecification = given()
            .header("Content-Type", "application/json");
    }
}
```

---

### Step 3: Implement CRUD Tests

```java
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

public class UserTests extends BaseTest {

    private int userId;

    @Test
    public void testCreateUser() {
        String requestBody = "{ "name": "John", "email": "john@example.com" }";

        Response response = given()
            .body(requestBody)
        .when()
            .post("/users");

        response.then()
            .statusCode(201);

        userId = response.jsonPath().getInt("id");
        Assert.assertNotNull(userId, "User ID should not be null");
    }

    @Test(dependsOnMethods = "testCreateUser")
    public void testGetUser() {
        given()
            .pathParam("userId", userId)
        .when()
            .get("/users/{userId}")
        .then()
            .statusCode(200)
            .body("name", equalTo("John"));
    }

    @Test(dependsOnMethods = "testGetUser")
    public void testUpdateUser() {
        String requestBody = "{ "name": "John Updated" }";

        given()
            .pathParam("userId", userId)
            .body(requestBody)
        .when()
            .put("/users/{userId}")
        .then()
            .statusCode(200)
            .body("name", equalTo("John Updated"));
    }

    @Test(dependsOnMethods = "testUpdateUser")
    public void testDeleteUser() {
        given()
            .pathParam("userId", userId)
        .when()
            .delete("/users/{userId}")
        .then()
            .statusCode(204);
    }
}
```

---

### Step 4: Add Reporting

```java
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;

@Epic("API Testing")
@Feature("User Management")
public class UserTests extends BaseTest {

    @Test
    @Description("Verify user creation via POST /users")
    public void testCreateUser() {
        // Test logic here
    }
}
```

Run:
```bash
mvn clean test
allure serve target/allure-results
```

---

### Step 5: Integrate with CI/CD

```groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/api-tests.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Report') {
            steps {
                allure includeProperties: false, results: [[path: 'target/allure-results']]
            }
        }
    }
}
```

---

## 3. Best Practices

1. **Follow Folder Structure**
2. **Use POJOs for Requests/Responses**
3. **Handle Data Cleanup**
4. **Log Requests and Responses**
5. **Monitor Trends**

---

## Conclusion
This small real-world implementation demonstrates how to build a complete API automation framework using RestAssured, TestNG, and reporting tools like Allure.
