---
title: JSON Path Extraction
sidebar_position: 3
---

# 🔍 JSON Path Extraction in RestAssured

## 📘 Introduction

When working with APIs, responses often contain complex JSON structures. Extracting specific fields from these responses is a common requirement for validation or further processing. RestAssured provides a powerful feature called **JSON Path** to simplify this process.

In this section, we’ll explore:
1. **What is JSON Path?**  
2. How to extract fields from JSON responses using RestAssured  
3. Practical examples and best practices for JSON Path extraction  

---

## 🧠 What Is JSON Path?

JSON Path is a query language for JSON, similar to XPath for XML. It allows you to navigate and extract specific fields from a JSON response.

For example:
- Extract a user’s name from a list of users  
- Retrieve nested fields like `address.city`  

RestAssured integrates JSON Path seamlessly, making it easy to extract and validate data.

---

## ⚙️ How to Use JSON Path in RestAssured

### Extracting Simple Fields

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

```java
String name = response.jsonPath().getString("name");
int id = response.jsonPath().getInt("id");

System.out.println("Name: " + name);
System.out.println("ID: " + id);
```

---

### Extracting Nested Fields

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "address": {
      "city": "New York",
      "zipcode": "10001"
    }
  }
}
```

```java
String city = response.jsonPath().getString("user.address.city");
String zipcode = response.jsonPath().getString("user.address.zipcode");

System.out.println("City: " + city);
System.out.println("Zipcode: " + zipcode);
```

---

### Extracting Arrays

```json
{
  "users": [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" }
  ]
}
```

```java
String firstUserName = response.jsonPath().getString("users[0].name");
int secondUserId = response.jsonPath().getInt("users[1].id");

System.out.println("First User Name: " + firstUserName);
System.out.println("Second User ID: " + secondUserId);
```

---

### Iterating Through Arrays

```java
List<String> userNames = response.jsonPath().getList("users.name");

System.out.println("User Names: " + userNames);
```

---

## ✅ Validating Extracted Data

```java
given()
.when()
    .get("/users")
.then()
    .body("data[0].first_name", equalTo("Michael"));
```

```java
String firstName = response.jsonPath().getString("data[0].first_name");
Assert.assertEquals(firstName, "Michael", "First name does not match expected value.");
```

---

## 🧪 Best Practices for JSON Path Extraction

1. **Use Descriptive Variable Names**

```java
String cityName = response.jsonPath().getString("user.address.city");
```

2. **Handle Null Values**

```java
String email = response.jsonPath().getString("email");
if (email == null) {
    System.out.println("Email is null");
}
```

3. **Validate Edge Cases**

4. **Reuse Common Extractions**

```java
public String extractFirstName(Response response) {
    return response.jsonPath().getString("data[0].first_name");
}
```

5. **Log Extracted Data**

```java
String name = response.jsonPath().getString("name");
System.out.println("Extracted Name: " + name);
```

---

## 🏁 Conclusion

JSON Path extraction is a powerful feature in RestAssured that simplifies working with complex JSON responses. By mastering this skill, you can efficiently extract and validate data from API responses. In the next section, we’ll explore logging and debugging techniques to help you troubleshoot common issues in API testing.
