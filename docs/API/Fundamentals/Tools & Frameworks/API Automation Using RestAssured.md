---
sidebar_position: 2
title: RestAssured Automation
---

## RestAssured Automation  

**RestAssured** is a powerful Java library for automating REST API testing. It simplifies sending requests, validating responses, and handling complex scenarios like authentication, JSON parsing, and dynamic data.

This section focuses on **how testers use RestAssured effectively**, from basic assertions to advanced automation workflows.

---

### **Why RestAssured?**

- **Java-Based**: Integrates seamlessly with Java-based projects.
- **Readable Syntax**: Uses a fluent, Gherkin-like syntax (e.g., `given().when().then()`).
- **Powerful Features**: Supports JSON/XML parsing, authentication, and test reporting.
- **CI/CD Friendly**: Easily integrates with Maven/Gradle and CI/CD pipelines.

##### **Tester Rule**
> Use RestAssured for automating API tests that require dynamic data handling, complex validations, or integration with Java ecosystems.

---

### **Key Features of RestAssured**

#### **1️⃣ Sending Requests**
RestAssured supports all HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, etc.).

##### **Code Snippet: Sending a GET Request**
```java
// Import RestAssured
import static io.restassured.RestAssured.*;

// Send GET request and validate response
Response response = given()
    .when()
    .get("https://api.example.com/users");

response.then().statusCode(200);
```

---

#### **2️⃣ Validating Responses**
RestAssured provides built-in methods for validating status codes, headers, and response bodies.

##### **Code Snippet: Validating Response**
```java
// Validate status code and response body
given()
    .when()
    .get("/users/101")
    .then()
    .statusCode(200)
    .body("name", equalTo("John"))
    .body("email", equalTo("john@example.com"));
```

---

#### **3️⃣ Handling Authentication**
RestAssured supports various authentication mechanisms like Basic Auth, Bearer Tokens, and OAuth.

##### **Code Snippet: Handling Bearer Token**
```java
// Authenticate using Bearer Token
given()
    .header("Authorization", "Bearer abc123")
    .when()
    .get("/secure-endpoint")
    .then()
    .statusCode(200);
```

##### **Code Snippet: Handling OAuth 2.0**
```java
// Simulate OAuth flow
String accessToken = given()
    .formParam("grant_type", "client_credentials")
    .auth().preemptive().basic("client_id", "client_secret")
    .when()
    .post("/oauth/token")
    .jsonPath().getString("access_token");

// Use access token
given()
    .header("Authorization", "Bearer " + accessToken)
    .when()
    .get("/secure-endpoint")
    .then()
    .statusCode(200);
```

---

#### **4️⃣ Parsing JSON and XML**
RestAssured makes it easy to parse and validate JSON or XML responses.

##### **Code Snippet: Parsing JSON**
```java
// Parse JSON response
String name = given()
    .when()
    .get("/users/101")
    .jsonPath()
    .getString("name");

System.out.println("User Name: " + name);
```

##### **Code Snippet: Parsing XML**
```java
// Parse XML response
String title = given()
    .when()
    .get("/books/1")
    .xmlPath()
    .getString("book.title");

System.out.println("Book Title: " + title);
```

---

#### **5️⃣ Dynamic Data Handling**
RestAssured supports dynamic data through variables, environment properties, and external files.

##### **Code Snippet: Using Variables**
```java
// Define variable
String userId = "101";

// Use variable in request
given()
    .pathParam("id", userId)
    .when()
    .get("/users/{id}")
    .then()
    .statusCode(200);
```

##### **Code Snippet: Reading Data from External Files**
```java
// Load data from JSON file
File jsonData = new File("src/test/resources/user.json");

given()
    .body(jsonData)
    .when()
    .post("/users")
    .then()
    .statusCode(201);
```

---

### **Advanced Features**

#### **1️⃣ Logging Requests and Responses**
Log requests and responses for debugging.

##### **Code Snippet: Enabling Logs**
```java
// Log request and response details
given()
    .log().all() // Logs request details
    .when()
    .get("/users/101")
    .then()
    .log().all(); // Logs response details
```

---

#### **2️⃣ Handling Cookies**
RestAssured supports cookie management for session-based authentication.

##### **Code Snippet: Handling Cookies**
```java
// Extract and reuse cookies
Response loginResponse = given()
    .body("{ \"username\": \"test\", \"password\": \"password\" }")
    .when()
    .post("/login");

String sessionId = loginResponse.getCookie("sessionId");

// Use cookie in subsequent requests
given()
    .cookie("sessionId", sessionId)
    .when()
    .get("/secure-endpoint")
    .then()
    .statusCode(200);
```

---

#### **3️⃣ Parameterized Tests**
Use parameterized tests to validate multiple scenarios.

##### **Code Snippet: Parameterized Test**
```java
// Test multiple user IDs
List<Integer> userIds = Arrays.asList(101, 102, 103);

for (int userId : userIds) {
    given()
        .pathParam("id", userId)
        .when()
        .get("/users/{id}")
        .then()
        .statusCode(200);
}
```

---

### **Best Practices for RestAssured Automation**

1. **Externalize Test Data**: Store data in JSON files or config files.
2. **Reuse Code**: Create reusable methods for common tasks (e.g., authentication).
3. **Validate Only Critical Fields**: Avoid full response validation to reduce brittleness.
4. **Log Failures**: Capture detailed logs for debugging.
5. **Integrate with CI/CD**: Run tests in pipelines using Maven/Gradle.

---

### **Common Pitfalls ❌**

- Hardcoding sensitive data (e.g., tokens, passwords).
- Ignoring dynamic data handling (e.g., timestamps, UUIDs).
- Writing brittle tests that fail due to minor changes.
- Not logging requests/responses for debugging.

---

### **Interview-Ready Questions**

**Q: How do you handle dynamic data in RestAssured?**  
A: Use variables, path parameters, or external files to inject dynamic values.

**Q: What is the purpose of `given().when().then()` in RestAssured?**  
A: It defines the request setup (`given`), sends the request (`when`), and validates the response (`then`).

---

### **Key Takeaways 🎯**

- RestAssured is a Java-based library for automating REST API tests.
- Use `given().when().then()` for readable and maintainable tests.
- Handle authentication, JSON parsing, and dynamic data with ease.
- Follow best practices to avoid flaky or brittle tests.
- Integrate RestAssured tests into CI/CD pipelines for continuous validation.
