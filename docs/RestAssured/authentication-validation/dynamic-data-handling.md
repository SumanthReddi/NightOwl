---
title: Dynamic Data Handling
sidebar_position: 4
---

# 🔄 Dynamic Data Handling in RestAssured

## 📘 Introduction

API testing often involves working with dynamic data, such as unique identifiers (UUIDs), timestamps, or randomly generated values. These values are essential for creating new resources, ensuring test independence, and avoiding conflicts with existing data. RestAssured provides mechanisms to handle dynamic data effectively, making your tests more robust and reusable.

In this section, we’ll explore:
1. **Generating Dynamic Data**
2. Using dynamic data in request bodies and assertions
3. Practical examples and best practices for handling dynamic data

---

## ⚙️ 1. Generating Dynamic Data

### What Is Dynamic Data?

Dynamic data refers to values that change with each test execution.

---

### Examples

#### UUID

```java
String uniqueId = UUID.randomUUID().toString();
```

#### Timestamp

```java
String timestamp = LocalDateTime.now().toString();
```

```java
String formattedTimestamp = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").format(new Date());
```

#### Random Values

```java
int randomNumber = new Random().nextInt(1000);
String randomString = RandomStringUtils.randomAlphabetic(10);
```

---

## 📦 2. Using Dynamic Data in Request Bodies

```java
String uniqueEmail = "user_" + UUID.randomUUID().toString() + "@example.com";
String registrationDate = LocalDateTime.now().toString();

String requestBody = "{ "name": "John", "email": "" + uniqueEmail + "", "registration_date": "" + registrationDate + "" }";

given()
    .header("Content-Type", "application/json")
    .body(requestBody)
.when()
    .post("/users")
.then()
    .statusCode(201);
```

---

## ✅ 3. Using Dynamic Data in Assertions

```java
String uniqueEmail = "user_" + UUID.randomUUID().toString() + "@example.com";

Response response = given()
    .header("Content-Type", "application/json")
    .body("{ "name": "John", "email": "" + uniqueEmail + "" }")
.when()
    .post("/users");

response.then()
    .statusCode(201)
    .body("email", equalTo(uniqueEmail));
```

---

## ⚠️ 4. Handling Edge Cases

### Data Cleanup

```java
int userId = createResponse.jsonPath().getInt("id");

given()
.when()
    .delete("/users/" + userId)
.then()
    .statusCode(204);
```

---

### Time Zones

```java
String timestamp = ZonedDateTime.now(ZoneId.of("UTC")).toString();
```

---

## 🧠 Best Practices

1. Use unique values  
2. Externalize data generation  
3. Validate dynamic data  
4. Clean up test data  
5. Log dynamic values  

---

## 🏁 Conclusion

Dynamic data handling is a critical aspect of API testing, enabling you to create unique resources, validate responses, and maintain test independence. By mastering these techniques, you can write robust and reusable tests that adapt to changing requirements. In the next section, we’ll explore framework design principles.
