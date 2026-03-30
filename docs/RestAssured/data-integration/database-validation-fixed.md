---
title: Database Validation
sidebar_position: 4
---

# 🗄️ Database Validation in API Testing

## 📘 Introduction

APIs often interact with databases to store, retrieve, or modify data. Validating the database ensures that the API behaves as expected and maintains data integrity. In this section, we’ll explore how to integrate database validation into your API automation framework using tools like JDBC (Java Database Connectivity).

---

## 🔍 1. Why Validate the Database?

### Importance of Database Validation

- Data Integrity: Ensure that APIs correctly update, retrieve, or delete data in the database.  
- End-to-End Testing: Validate the entire workflow, from API requests to database changes.  
- Debugging: Identify discrepancies between API responses and database records.  
- Edge Case Testing: Test scenarios where APIs fail to update the database correctly.  

---

## ⚙️ 2. Setting Up Database Connectivity

To validate the database, you need to establish a connection using JDBC.

### Step 1: Add JDBC Dependencies

Add the appropriate JDBC driver dependency to your `pom.xml`. For example, for MySQL:

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>
```

---

### Step 2: Establish a Connection

Use JDBC to connect to the database:

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseUtils {

    private static final String URL = "jdbc:mysql://localhost:3306/testdb";
    private static final String USER = "root";
    private static final String PASSWORD = "password";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
```

---

## 📊 3. Querying the Database

Once connected, you can execute SQL queries to validate data.

### Example 1: Retrieve Data

Suppose you want to verify that a user created via the API exists in the database.

#### Create the User via API

```java
Response createUserResponse = given()
    .header("Content-Type", "application/json")
    .body("{ "name": "John", "email": "john@example.com" }")
.when()
    .post("/users");

int userId = createUserResponse.jsonPath().getInt("id");
```

#### Query the Database

```java
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DatabaseValidation {

    public static boolean isUserPresent(int userId) throws SQLException {
        String query = "SELECT * FROM users WHERE id = ?";
        try (Connection connection = DatabaseUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, userId);
            ResultSet resultSet = statement.executeQuery();

            return resultSet.next();
        }
    }
}
```

#### Validate the Result

```java
@Test
public void testUserCreationInDatabase() throws SQLException {
    int userId = createUserViaApi();

    boolean isUserPresent = DatabaseValidation.isUserPresent(userId);
    Assert.assertTrue(isUserPresent, "User not found in the database");
}
```

---

### Example 2: Validate Data Changes

Suppose you update a user's name via the API and want to verify the change in the database.

#### Update the User via API

```java
given()
    .header("Content-Type", "application/json")
    .pathParam("userId", userId)
    .body("{ "name": "John Updated" }")
.when()
    .put("/users/{userId}")
.then()
    .statusCode(200);
```

#### Query the Database

```java
public static String getUserName(int userId) throws SQLException {
    String query = "SELECT name FROM users WHERE id = ?";
    try (Connection connection = DatabaseUtils.getConnection();
         PreparedStatement statement = connection.prepareStatement(query)) {

        statement.setInt(1, userId);
        ResultSet resultSet = statement.executeQuery();

        if (resultSet.next()) {
            return resultSet.getString("name");
        }
        return null;
    }
}
```

#### Validate the Result

```java
@Test
public void testUserNameUpdateInDatabase() throws SQLException {
    int userId = createUserViaApi();
    updateUserViaApi(userId, "John Updated");

    String userName = DatabaseValidation.getUserName(userId);
    Assert.assertEquals(userName, "John Updated", "User name not updated in the database");
}
```

---

## ✅ 4. Best Practices for Database Validation

1. Centralize Database Logic  
2. Validate Edge Cases  
3. Clean Up Test Data  
4. Log Queries and Results  

```java
System.out.println("Executing query: " + query);
System.out.println("Query result: " + resultSet.getString("name"));
```

5. Use Transactions for Rollback  

```java
connection.setAutoCommit(false);
connection.rollback();
```

---

## 🏁 Conclusion

Database validation is a critical component of API testing, ensuring that APIs interact with databases correctly and maintain data integrity. By integrating JDBC-based database queries into your framework, you can validate end-to-end workflows and identify discrepancies early. In the next section, we’ll explore mocking APIs to simulate external dependencies and improve test reliability.
