---
title: Negative Testing
sidebar_position: 1
---

# Negative Testing in API Automation

## Introduction
Negative testing is a critical aspect of API automation that involves validating how an API behaves under invalid or unexpected conditions. While positive testing ensures that the API works as expected with valid inputs, negative testing focuses on edge cases, invalid data, and error scenarios. This helps identify vulnerabilities, improve robustness, and ensure the API gracefully handles errors.

In this section, we’ll explore:
1. **What Is Negative Testing?**
2. Common scenarios for negative testing.
3. How to implement negative tests in RestAssured.
4. Practical examples and best practices.

---

## 1. What Is Negative Testing?

### Definition
Negative testing validates the behavior of an API when provided with invalid, incomplete, or unexpected inputs. The goal is to ensure that the API:
- Returns appropriate error messages.
- Maintains data integrity.
- Prevents security vulnerabilities (e.g., SQL injection, unauthorized access).

### Why Is Negative Testing Important?
- **Error Handling**: Ensures the API provides meaningful error responses.
- **Security**: Identifies potential vulnerabilities to malicious inputs.
- **Robustness**: Validates that the API can handle unexpected scenarios without crashing.
- **Compliance**: Meets requirements for handling invalid requests (e.g., HTTP status codes like 400 Bad Request).

---

## 2. Common Scenarios for Negative Testing

### 1. Invalid Input Data
Test how the API responds to invalid or malformed data:
- Missing required fields.
- Incorrect data types (e.g., sending a string instead of an integer).
- Out-of-range values (e.g., negative numbers where only positive values are allowed).

### 2. Unauthorized Access
Validate that the API rejects unauthorized requests:
- Missing or invalid authentication tokens.
- Insufficient permissions for restricted endpoints.

### 3. Unsupported Methods
Test unsupported HTTP methods (e.g., sending a `PUT` request to an endpoint that only supports `GET`).

### 4. Invalid Endpoints
Verify that the API returns a `404 Not Found` response for non-existent endpoints.

### 5. Large Payloads
Test the API's behavior with excessively large payloads to ensure it handles them gracefully.

### 6. Rate Limiting
Validate that the API enforces rate limits and returns appropriate responses (e.g., `429 Too Many Requests`) when limits are exceeded.

---

## 3. Implementing Negative Tests in RestAssured

### Example 1: Invalid Input Data
Test how the API handles missing or invalid fields.

```java
@Test
public void testInvalidUserData() {
    String invalidRequestBody = "{ "email": "invalid-email" }"; // Missing 'name' field

    given()
        .header("Content-Type", "application/json")
        .body(invalidRequestBody)
    .when()
        .post("/users")
    .then()
        .statusCode(400) // Expecting Bad Request
        .body("message", equalTo("Missing required field: name"));
}
```

---

### Example 2: Unauthorized Access
Test how the API handles requests without proper authentication.

```java
@Test
public void testUnauthorizedAccess() {
    given()
        .header("Content-Type", "application/json")
        // Missing Authorization header
    .when()
        .get("/secure-endpoint")
    .then()
        .statusCode(401) // Expecting Unauthorized
        .body("message", equalTo("Authentication required"));
}
```

---

### Example 3: Unsupported Methods
Test how the API responds to unsupported HTTP methods.

```java
@Test
public void testUnsupportedMethod() {
    given()
        .header("Content-Type", "application/json")
    .when()
        .put("/read-only-endpoint") // Endpoint only supports GET
    .then()
        .statusCode(405) // Expecting Method Not Allowed
        .body("message", equalTo("Method not supported"));
}
```

---

### Example 4: Invalid Endpoints
Test how the API handles requests to non-existent endpoints.

```java
@Test
public void testInvalidEndpoint() {
    given()
        .header("Content-Type", "application/json")
    .when()
        .get("/non-existent-endpoint")
    .then()
        .statusCode(404) // Expecting Not Found
        .body("message", equalTo("Endpoint not found"));
}
```

---

### Example 5: Large Payloads
Test the API's behavior with excessively large payloads.

```java
@Test
public void testLargePayload() {
    String largePayload = "{ "data": "" + "a".repeat(10000) + "" }"; // 10,000-character string

    given()
        .header("Content-Type", "application/json")
        .body(largePayload)
    .when()
        .post("/upload")
    .then()
        .statusCode(413) // Expecting Payload Too Large
        .body("message", equalTo("Request payload exceeds size limit"));
}
```

---

## 4. Best Practices for Negative Testing

1. **Cover Edge Cases**:
   - Test boundary values, empty inputs, and invalid formats.

2. **Validate Error Responses**:
   - Ensure the API returns appropriate HTTP status codes and meaningful error messages.

3. **Test Security Scenarios**:
   - Validate unauthorized access, invalid tokens, and potential vulnerabilities.

4. **Use Realistic Scenarios**:
   - Simulate real-world misuse cases to identify potential issues.

5. **Log Errors for Debugging**:
   - Log detailed error responses to aid debugging:
     ```java
     Response response = given()
         .header("Content-Type", "application/json")
         .body("{ "email": "invalid-email" }")
     .when()
         .post("/users");

     System.out.println("Error Response: " + response.asString());
     ```

---

## Conclusion
Negative testing is a vital component of API automation, ensuring that your APIs handle invalid or unexpected inputs gracefully. By implementing negative tests for scenarios like invalid data, unauthorized access, and unsupported methods, you can improve the robustness and reliability of your APIs. In the next section, we’ll explore retry mechanisms to handle transient failures and improve test reliability.
