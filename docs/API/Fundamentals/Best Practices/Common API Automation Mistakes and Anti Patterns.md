---
sidebar_position: 1
title: Common Mistakes in API Testing
---

## Common Mistakes in API Testing 

API testing is a critical part of ensuring application reliability, but even experienced testers can fall into common traps.  
This section highlights **frequent mistakes** and provides **practical solutions** to avoid them.

---

### **1️⃣ Hardcoding Data**

#### **The Problem**
Hardcoding values like IDs, tokens, or URLs makes tests brittle and environment-specific.

##### **Example**
```java
// Brittle test with hardcoded ID
given()
    .when()
    .get("/users/101")
    .then()
    .statusCode(200);
```

#### **Solution**
Use dynamic data and environment variables.

##### **Code Snippet: Using Dynamic Data**
```java
// Use environment variable for base URL
String baseUrl = System.getenv("BASE_URL");

// Use dynamic user ID
int userId = getUserIdFromDatabase();

given()
    .baseUri(baseUrl)
    .pathParam("id", userId)
    .when()
    .get("/users/{id}")
    .then()
    .statusCode(200);
```

---

### **2️⃣ Ignoring Authentication**

#### **The Problem**
Skipping authentication or hardcoding tokens leads to insecure and unreliable tests.

##### **Example**
```java
// Test without authentication
given()
    .when()
    .get("/secure-endpoint")
    .then()
    .statusCode(200);
```

#### **Solution**
Handle authentication dynamically using tokens or OAuth flows.

##### **Code Snippet: Handling Bearer Token**
```java
// Authenticate and use token
String token = authenticateUser();

given()
    .header("Authorization", "Bearer " + token)
    .when()
    .get("/secure-endpoint")
    .then()
    .statusCode(200);
```

---

### **3️⃣ Overlooking Edge Cases**

#### **The Problem**
Focusing only on happy paths misses critical scenarios like invalid inputs, null values, or boundary conditions.

##### **Example**
Testing only valid user creation:
```java
// Happy path test
given()
    .body("{ \"name\": \"John\", \"email\": \"john@example.com\" }")
    .when()
    .post("/users")
    .then()
    .statusCode(201);
```

#### **Solution**
Validate negative scenarios and edge cases.

##### **Code Snippet: Testing Invalid Input**
```java
// Negative test for invalid email
given()
    .body("{ \"name\": \"John\", \"email\": \"invalid-email\" }")
    .when()
    .post("/users")
    .then()
    .statusCode(400);
```

---

### **4️⃣ Not Validating Database State**

#### **The Problem**
Relying solely on API responses without verifying the database can lead to false positives.

##### **Example**
Testing only the API response:
```java
// Test API response
given()
    .when()
    .post("/users")
    .then()
    .statusCode(201);
```

#### **Solution**
Validate both API responses and database records.

##### **Code Snippet: Validating Database**
```java
// Query database
String query = "SELECT * FROM users WHERE email = ?";
String email = "john@example.com";

try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
     PreparedStatement stmt = conn.prepareStatement(query)) {

    stmt.setString(1, email);
    ResultSet rs = stmt.executeQuery();

    // Assert record exists
    assertTrue(rs.next(), "User not found in database");
} catch (SQLException e) {
    fail("Database query failed: " + e.getMessage());
}
```

---

### **5️⃣ Flaky Tests**

#### **The Problem**
Flaky tests produce inconsistent results, eroding trust in the test suite.

##### **Causes**
- Race conditions.
- Shared test environments.
- Unstable dependencies.

#### **Solution**
- Use unique test data.
- Mock external dependencies.
- Retry failed tests selectively.

##### **Code Snippet: Using Unique Test Data**
```java
// Generate unique email for each test
String uniqueEmail = "testuser_" + UUID.randomUUID() + "@example.com";

given()
    .body("{ \"name\": \"Test\", \"email\": \"" + uniqueEmail + "\" }")
    .when()
    .post("/users")
    .then()
    .statusCode(201);
```

---

### **6️⃣ Ignoring CI/CD Integration**

#### **The Problem**
Running tests manually delays feedback and increases the risk of regressions.

##### **Solution**
Integrate tests into CI/CD pipelines for automated execution.

##### **Code Snippet: GitHub Actions Workflow**
```yaml
name: API Test Pipeline

on:
  push:
    branches:
      - main

jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Run API tests
        run: mvn clean test
```

---

### **7️⃣ Missing Logging and Debugging**

#### **The Problem**
Lack of detailed logs makes debugging failures difficult.

##### **Solution**
Log requests, responses, and test results for better visibility.

##### **Code Snippet: Enabling Logs in RestAssured**
```java
// Log request and response details
given()
    .log().all()
    .when()
    .get("/users/101")
    .then()
    .log().all()
    .statusCode(200);
```

---

### **Key Takeaways 🎯**

- Avoid hardcoding data; use dynamic values and environment variables.
- Handle authentication securely and dynamically.
- Validate both happy paths and edge cases.
- Always validate database state for critical workflows.
- Address flaky tests by isolating data and mocking dependencies.
- Integrate tests into CI/CD pipelines for continuous validation.
- Enable detailed logging for easier debugging.
