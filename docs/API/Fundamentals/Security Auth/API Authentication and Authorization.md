---
sidebar_position: 1
title: API Authentication & Authorization
---

## API Authentication & Authorization  

Authentication and authorization are the **gatekeepers of APIs**, determining who can access them and what actions they can perform.  
As an automation tester, you’ll encounter auth-related issues more often than business logic bugs. Understanding how to handle these scenarios is critical for building reliable tests.

This section focuses on **how testers interact with auth mechanisms**, not how they’re implemented internally.

---

### **What’s the Difference Between Authentication and Authorization?**

- **Authentication**: Verifies **who you are** (e.g., username/password, API key).
- **Authorization**: Determines **what you can do** (e.g., admin vs. user permissions).

##### **Tester Rule**
> Always validate authentication first, then authorization. If auth fails, the rest of your test won’t work.

---

### **Common Authentication Mechanisms**

#### **1️⃣ No Authentication (Public APIs)**

Some APIs don’t require authentication, such as public data endpoints. While easy to test, these are rare in enterprise systems due to security risks.

##### **Automation Tip**
- Use these endpoints for smoke testing or validating basic connectivity.

##### **Example**
Fetching public weather data:
```http
GET /weather?city=London
```

---

#### **2️⃣ Basic Authentication**

Basic Auth sends credentials (username/password) encoded in Base64 in the `Authorization` header.

```http
Authorization: Basic base64(username:password)
```

##### **Characteristics**
- Simple but insecure (credentials can be decoded if intercepted).
- Often used in internal tools or legacy systems.

##### **Tester Pitfalls**
- Logging sensitive credentials in test logs.
- Hardcoding credentials in scripts.

##### **Code Snippet: Handling Basic Auth**
```java
// RestAssured example
Response response = given()
    .auth().basic("testuser", "password123")
    .when()
    .get("/secure-endpoint");

response.then().statusCode(200);
```

##### **Debugging Tip**
If you get a `401 Unauthorized`, double-check the credentials and ensure they’re Base64-encoded correctly.

---

#### **3️⃣ API Key Authentication**

API keys are static tokens passed in headers or query parameters.

```http
x-api-key: abc123
```

##### **Characteristics**
- Identifies the client making the request.
- Often used for rate limiting or tracking usage.

##### **Tester Pitfalls**
- Hardcoding API keys in scripts.
- Using the same key across environments (e.g., dev, staging, prod).

##### **Code Snippet: Handling API Keys**
```java
// RestAssured example
Response response = given()
    .header("x-api-key", "abc123")
    .when()
    .get("/secure-endpoint");

response.then().statusCode(200);
```

##### **Best Practice**
Store API keys in environment variables or secure vaults to avoid exposing them in code.

---

#### **4️⃣ Bearer Token Authentication**

Bearer tokens are the most common auth mechanism in modern APIs. They’re passed in the `Authorization` header.

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

##### **Characteristics**
- Stateless and token-based.
- Used in REST APIs and OAuth 2.0 flows.

##### **Automation Flow**
1. Authenticate (e.g., login) to get a token.
2. Use the token in subsequent API calls.

##### **Code Snippet: Dynamic Token Handling**
```java
// Step 1: Authenticate to get token
Response loginResponse = given()
    .body("{ "username": "testuser", "password": "password123" }")
    .when()
    .post("/login");

String token = loginResponse.jsonPath().getString("token");

// Step 2: Use token in subsequent requests
Response response = given()
    .header("Authorization", "Bearer " + token)
    .when()
    .get("/secure-endpoint");

response.then().statusCode(200);
```

##### **Debugging Tip**
If you get a `401 Unauthorized`, check if the token has expired or if it’s missing from the request.

---

### **Token Expiry & Refresh Logic**

Tokens often expire after a short period (e.g., 15 minutes). To handle this:

1. **Detect Expiry**: Check for `401 Unauthorized` responses.
2. **Refresh Token**: Call the refresh endpoint to get a new token.
3. **Retry Request**: Retry the failed request with the new token.

##### **Code Snippet: Handling Token Expiry**
```java
if (response.statusCode() == 401) {
    // Refresh token
    Response refreshTokenResponse = given()
        .formParam("grant_type", "refresh_token")
        .formParam("refresh_token", refreshToken)
        .when()
        .post("/oauth/token");

    String newAccessToken = refreshTokenResponse.jsonPath().getString("access_token");

    // Retry original request with new token
    response = given()
        .header("Authorization", "Bearer " + newAccessToken)
        .when()
        .get("/secure-endpoint");
}
```

##### **Flow Diagram**
```mermaid
sequenceDiagram
    participant TestScript
    participant AuthServer
    participant API
    TestScript->>AuthServer: Login → Get Token
    TestScript->>API: Call API with Token
    API-->>TestScript: Return Response
    TestScript->>AuthServer: Refresh Token (if expired)
    TestScript->>API: Retry API Call
```

---

### **OAuth 2.0 (High-Level Overview)**

OAuth 2.0 is widely used for secure, token-based authentication. As a tester, you don’t need to understand the internals but should know how to simulate OAuth flows.

##### **Key Concepts**
- **Client ID/Secret**: Identifies the application.
- **Access Token**: Grants access to resources.
- **Refresh Token**: Used to obtain a new access token.

##### **Code Snippet: Simulating OAuth Flow**
```java
// Step 1: Get access token
Response tokenResponse = given()
    .formParam("grant_type", "client_credentials")
    .auth().preemptive().basic("client_id", "client_secret")
    .when()
    .post("/oauth/token");

String accessToken = tokenResponse.jsonPath().getString("access_token");

// Step 2: Use access token
Response response = given()
    .header("Authorization", "Bearer " + accessToken)
    .when()
    .get("/secure-endpoint");

response.then().statusCode(200);
```

---

### **Role-Based Access Control (Authorization)**

Authorization ensures users have the correct permissions. For example:
- Admins can delete resources.
- Regular users can only view resources.

##### **Automation Validation**
- Validate status codes (`403 Forbidden` for unauthorized access).
- Test role-specific behavior.

##### **Code Snippet: Validating Role-Based Access**
```java
// Test as admin
Response adminResponse = given()
    .header("Authorization", "Bearer " + adminToken)
    .when()
    .delete("/users/101");

adminResponse.then().statusCode(204);

// Test as regular user
Response userResponse = given()
    .header("Authorization", "Bearer " + userToken)
    .when()
    .delete("/users/101");

userResponse.then().statusCode(403);
```

---

### **Common Auth-Related Failures ❌**

- Missing `Authorization` header.
- Expired or invalid tokens.
- Incorrect roles or permissions.
- Hardcoded credentials or tokens.
- Tokens from the wrong environment (e.g., using dev tokens in prod).

---

### **Interview-Ready Questions**

**Q: What’s the difference between 401 and 403?**  
A: `401 Unauthorized` means authentication failed; `403 Forbidden` means authorization failed.

**Q: How do you handle expired tokens in automation?**  
A: Detect `401 Unauthorized`, refresh the token, and retry the request.

---

### **Key Takeaways 🎯**

- Auth issues are the #1 cause of API test failures.
- Bearer tokens are the most common auth mechanism.
- Always handle tokens dynamically to avoid flaky tests.
- Validate both authentication and authorization separately.
- Use environment variables or secure vaults to store sensitive data.