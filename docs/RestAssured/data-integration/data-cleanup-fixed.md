---
title: Data Cleanup
sidebar_position: 6
---

# 🧹 Data Cleanup in API Testing

## 📘 Introduction

Data cleanup is a critical aspect of API testing, especially when tests involve creating, updating, or deleting resources. Without proper cleanup, test data can accumulate in the system, leading to cluttered environments, test failures, and inaccurate results. In this section, we’ll explore strategies for cleaning up test data effectively and ensuring a clean environment for each test execution.

---

## 🔍 1. Why Is Data Cleanup Important?

### Challenges Without Cleanup

- Test Failures: Residual data from previous tests can cause conflicts or unexpected behavior.  
- Environment Clutter: Accumulated test data makes it difficult to identify real issues.  
- Security Risks: Sensitive test data (e.g., user credentials) may remain in the system if not cleaned up.  

---

### Benefits of Data Cleanup

- Consistency: Ensures a clean slate for each test run.  
- Reliability: Reduces flaky tests caused by leftover data.  
- Maintainability: Keeps the test environment organized and manageable.  

---

## ⚙️ 2. Strategies for Data Cleanup

### 1. Delete Resources After Tests

```java
@Test
public void testCreateAndDeleteUser() {
    // Create User
    Response createUserResponse = given()
        .header("Content-Type", "application/json")
        .body("{ "name": "John", "email": "john@example.com" }")
    .when()
        .post("/users");

    int userId = createUserResponse.jsonPath().getInt("id");

    // Validate User Creation
    given()
        .pathParam("userId", userId)
    .when()
        .get("/users/{userId}")
    .then()
        .statusCode(200);

    // Delete User
    given()
        .pathParam("userId", userId)
    .when()
        .delete("/users/{userId}")
    .then()
        .statusCode(204);
}
```

---

### 2. Use Transactions for Rollback

```java
import java.sql.Connection;

public class DatabaseUtils {

    public static void executeInTransaction(Runnable action) throws SQLException {
        try (Connection connection = getConnection()) {
            connection.setAutoCommit(false); // Disable auto-commit
            action.run();
            connection.rollback(); // Roll back changes
        }
    }
}
```

```java
@Test
public void testUserCreationWithRollback() throws SQLException {
    DatabaseUtils.executeInTransaction(() -> {
        // Create User via API
        Response createUserResponse = given()
            .header("Content-Type", "application/json")
            .body("{ "name": "John", "email": "john@example.com" }")
        .when()
            .post("/users");

        int userId = createUserResponse.jsonPath().getInt("id");

        // Validate User Creation
        given()
            .pathParam("userId", userId)
        .when()
            .get("/users/{userId}")
        .then()
            .statusCode(200);
    });
}
```

---

### 3. Reset the Environment

```sql
TRUNCATE TABLE users;
```

---

### 4. Use Temporary Resources

```java
@Test
public void testTemporaryResource() {
    Response response = given()
        .header("Content-Type", "application/json")
        .body("{ "name": "Temp Resource" }")
    .when()
        .post("/temporary-resources");

    String resourceId = response.jsonPath().getString("id");

    // Validate Resource Exists
    given()
        .pathParam("resourceId", resourceId)
    .when()
        .get("/temporary-resources/{resourceId}")
    .then()
        .statusCode(200);
}
```

---

## ✅ 3. Best Practices for Data Cleanup

1. Clean Up in Teardown Methods  

```java
@After
public void tearDown() {
    given()
        .pathParam("userId", userId)
    .when()
        .delete("/users/{userId}");
}
```

2. Handle Cleanup Failures Gracefully  

```java
try {
    given()
        .pathParam("userId", userId)
    .when()
        .delete("/users/{userId}");
} catch (Exception e) {
    System.err.println("Failed to clean up user: " + e.getMessage());
}
```

3. Use Unique Identifiers  

```java
String uniqueEmail = "user_" + UUID.randomUUID().toString() + "@example.com";
```

4. Automate Cleanup in CI/CD  

5. Document Cleanup Procedures  

---

## 🏁 Conclusion

Data cleanup is essential for maintaining a clean and reliable test environment. By implementing strategies like resource deletion, transaction rollback, and environment resets, you can ensure that your tests remain consistent and accurate. In the next section, we’ll explore CI/CD integration to automate test execution and reporting.
