---
title: Authentication Types
sidebar_position: 1
---

# 🔐 Authentication Mechanisms in RestAssured

## 📘 Introduction

Authentication is a critical aspect of API testing, ensuring that only authorized users can access protected resources. APIs often use various authentication mechanisms to verify the identity of clients. In this section, we’ll explore the most common types of authentication supported by RestAssured and how to implement them in your tests.

---

## 🔑 1. Basic Authentication

### What Is Basic Authentication?

Basic Authentication involves sending a username and password encoded in Base64 format in the `Authorization` header.

---

### How to Implement in RestAssured

```java
given()
    .auth().basic("username", "password")
.when()
    .get("/secure-endpoint")
.then()
    .statusCode(200);
```

---

### Best Practices

- Avoid hardcoding credentials; store them securely  
- Use HTTPS to encrypt credentials  

---

## 🎫 2. Bearer Token Authentication

### What Is Bearer Token Authentication?

Bearer Token Authentication involves sending a token in the `Authorization` header.

---

### How to Implement in RestAssured

```java
String token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

given()
    .header("Authorization", "Bearer " + token)
.when()
    .get("/secure-endpoint")
.then()
    .statusCode(200);
```

---

### Best Practices

- Store tokens securely  
- Handle token expiry  

---

## 🔄 3. OAuth2 Authentication

### What Is OAuth2 Authentication?

OAuth2 is a widely used authorization framework that allows third-party services to access resources on behalf of a user.

---

### How to Implement in RestAssured

```java
String accessToken = "token";

given()
    .auth().oauth2(accessToken)
.when()
    .get("/secure-endpoint")
.then()
    .statusCode(200);
```

---

### Obtaining an Access Token

```java
String accessToken = given()
    .formParam("grant_type", "client_credentials")
    .auth().preemptive().basic("client_id", "client_secret")
.when()
    .post("/oauth/token")
.then()
    .extract().path("access_token");
```

---

### Best Practices

- Store client credentials securely  
- Automate token retrieval  

---

## 🔑 4. API Key Authentication

### What Is API Key Authentication?

API Key Authentication involves sending a unique key in the request.

---

### Implementation

```java
given()
    .queryParam("api_key", "your_api_key")
.when()
    .get("/endpoint")
.then()
    .statusCode(200);
```

```java
given()
    .header("x-api-key", "your_api_key")
.when()
    .get("/endpoint")
.then()
    .statusCode(200);
```

---

### Best Practices

- Store API keys securely  
- Rotate keys periodically  

---

## 🔒 5. Digest Authentication

### What Is Digest Authentication?

Digest Authentication is a more secure alternative to Basic Authentication.

---

### Implementation

```java
given()
    .auth().digest("username", "password")
.when()
    .get("/secure-endpoint")
.then()
    .statusCode(200);
```

---

### Best Practices

- Use when higher security is needed  
- Ensure server support  

---

## 🧩 6. Custom Authentication

### What Is Custom Authentication?

Some APIs use custom authentication mechanisms.

---

### Implementation

```java
given()
    .header("Custom-Auth-Header", "custom_token")
.when()
    .get("/secure-endpoint")
.then()
    .statusCode(200);
```

---

### Best Practices

- Document custom requirements  
- Test thoroughly  

---

## 🏁 Conclusion

Authentication is a fundamental part of API testing, and RestAssured provides robust support for various authentication mechanisms. By mastering these techniques, you can ensure secure and reliable access to protected resources. In the next section, we’ll explore JSON schema validation.
