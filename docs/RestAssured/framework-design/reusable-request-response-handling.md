---
title: Reusable Request and Response Handling
sidebar_position: 2
---

# 🔁 Reusable Request and Response Handling in RestAssured

## 📘 Introduction

In API automation, handling requests and responses efficiently is crucial for maintaining clean, reusable, and scalable tests. Reusable request/response handling ensures that common tasks like setting headers, constructing payloads, and validating responses are centralized, reducing duplication and improving maintainability.

In this section, we’ll explore techniques for creating reusable methods and classes to handle requests and responses effectively.

---

## ⚙️ 1. Centralizing Request Handling

### Why Centralize Request Handling?

Centralizing request handling simplifies your tests by abstracting repetitive tasks like setting headers, constructing payloads, and defining endpoints.

---

### Example: Setting Headers

```java
public class RequestUtils {
    public static RequestSpecification withDefaultHeaders() {
        return given()
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer " + EnvironmentConfig.AUTH_TOKEN);
    }
}
```

---

### Example: Using Headers

```java
RequestUtils.withDefaultHeaders()
    .when()
    .get(UserEndpoints.GET_USERS)
    .then()
    .statusCode(200);
```

---

### Example: Payload Builder

```java
public class UserPayloads {
    public static String createUserPayload(String name, String email) {
        return "{ "name": "" + name + "", "email": "" + email + "" }";
    }
}
```

---

## 📊 2. Centralizing Response Handling

### Extract Fields

```java
public class ResponseUtils {
    public static String extractField(Response response, String jsonPath) {
        return response.jsonPath().getString(jsonPath);
    }
}
```

---

### Validate Response

```java
public class ResponseUtils {
    public static void validateResponse(Response response, int statusCode, String field, Object value) {
        response.then()
            .statusCode(statusCode)
            .body(field, equalTo(value));
    }
}
```

---

## 🔗 3. Combining Request and Response Handling

```java
public class ApiUtils {

    public static Response createUser(String name, String email) {
        return RequestUtils.withDefaultHeaders()
            .body(UserPayloads.createUserPayload(name, email))
            .when()
            .post(UserEndpoints.CREATE_USER);
    }

    public static void validateUserCreation(Response response, String expectedName) {
        ResponseUtils.validateResponse(response, 201, "name", expectedName);
    }
}
```

---

## 🧠 Best Practices

1. Keep methods focused  
2. Use descriptive names  
3. Externalize configuration  
4. Log requests and responses  
5. Handle edge cases  

---

## 🏁 Conclusion

Reusable request and response handling is a cornerstone of efficient API automation. By centralizing logic, you can create clean, maintainable, and scalable tests.
