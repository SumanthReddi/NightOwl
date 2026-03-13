---
sidebar_position: 1
title: Database Validation
---

## Database Validation  

API responses often reflect data stored in a database. Validating the database ensures that the API interacts correctly with the backend, maintaining data integrity and consistency.

This section focuses on **how testers validate databases** in API testing workflows.

---

### **Why Validate the Database?**

- **Data Integrity**: Ensure API operations (e.g., `POST`, `PUT`) update the database correctly.
- **Consistency**: Verify that API responses match database records.
- **Edge Cases**: Test scenarios like duplicate entries, null values, and constraints.

##### **Tester Rule**
> Always validate both API responses and database records for critical workflows.

---

### **Common Database Validation Scenarios**

#### **1️⃣ Insert Operations**
- Validate that new records are created correctly.
- Example: After a `POST /users` request, check if the user exists in the `users` table.

##### **Code Snippet: Validating Insert**
```java
// Query database
String query = "SELECT * FROM users WHERE id = ?";
int userId = 101;

try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
     PreparedStatement stmt = conn.prepareStatement(query)) {

    stmt.setInt(1, userId);
    ResultSet rs = stmt.executeQuery();

    // Assert record exists
    assertTrue(rs.next(), "User not found in database");
} catch (SQLException e) {
    fail("Database query failed: " + e.getMessage());
}
```

---

#### **2️⃣ Update Operations**
- Validate that updates are reflected in the database.
- Example: After a `PUT /users/101`, check if the `email` field is updated.

##### **Code Snippet: Validating Update**
```java
// Query database
String query = "SELECT email FROM users WHERE id = ?";
int userId = 101;

try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
     PreparedStatement stmt = conn.prepareStatement(query)) {

    stmt.setInt(1, userId);
    ResultSet rs = stmt.executeQuery();

    // Assert email is updated
    assertTrue(rs.next(), "User not found in database");
    assertEquals("john.new@example.com", rs.getString("email"), "Email not updated");
} catch (SQLException e) {
    fail("Database query failed: " + e.getMessage());
}
```

---

#### **3️⃣ Delete Operations**
- Validate that records are removed from the database.
- Example: After a `DELETE /users/101`, check if the user no longer exists.

##### **Code Snippet: Validating Delete**
```java
// Query database
String query = "SELECT * FROM users WHERE id = ?";
int userId = 101;

try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
     PreparedStatement stmt = conn.prepareStatement(query)) {

    stmt.setInt(1, userId);
    ResultSet rs = stmt.executeQuery();

    // Assert record does not exist
    assertFalse(rs.next(), "User still exists in database");
} catch (SQLException e) {
    fail("Database query failed: " + e.getMessage());
}
```

---

### **Database Validation Tools**

#### **1️⃣ JDBC (Java Database Connectivity)**
- Standard Java API for database interactions.
- Use prepared statements to prevent SQL injection.

##### **Code Snippet: Using JDBC**
```java
// Establish connection
Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

// Execute query
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM users");

// Process results
while (rs.next()) {
    System.out.println("User ID: " + rs.getInt("id"));
}

// Close resources
rs.close();
stmt.close();
conn.close();
```

---

#### **2️⃣ ORM Frameworks (Hibernate, JPA)**
- Simplify database interactions using object-relational mapping.
- Example: Map database tables to Java objects.

##### **Code Snippet: Using Hibernate**
```java
// Fetch user by ID
Session session = sessionFactory.openSession();
User user = session.get(User.class, 101);

// Assert user exists
assertNotNull(user, "User not found in database");

// Close session
session.close();
```

---

### **Best Practices for Database Validation**

1. **Use Transactions**: Roll back changes after tests to avoid polluting the database.
2. **Externalize Configurations**: Store database URLs, credentials, and queries in config files.
3. **Validate Only Critical Fields**: Focus on fields impacted by the API operation.
4. **Log Queries and Results**: Capture detailed logs for debugging.
5. **Isolate Test Data**: Use unique test data to avoid conflicts.

---

### **Common Pitfalls ❌**

- Hardcoding database credentials.
- Ignoring transaction rollbacks, leading to polluted data.
- Writing brittle queries that fail due to schema changes.
- Not isolating test data, causing conflicts in shared environments.

---

### **Interview-Ready Questions**

**Q: How do you validate database updates in API testing?**  
A: Query the database after the API operation and compare the results with expected values.

**Q: Why is transaction rollback important in database validation?**  
A: It ensures test data is cleaned up, preventing pollution in shared environments.

---

### **Key Takeaways 🎯**

- Database validation ensures API-backend consistency.
- Use tools like JDBC or ORM frameworks for database interactions.
- Validate insert, update, and delete operations against the database.
- Follow best practices to avoid flaky or brittle tests.
- Isolate test data and use transactions to maintain a clean environment.
