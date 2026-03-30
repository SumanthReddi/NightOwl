---
title: Nested and Array Assertions
sidebar_position: 3
---

# 🧩 Nested and Array Assertions in RestAssured

## 📘 Introduction

API responses often contain nested objects and arrays, making it essential to validate their structure and content thoroughly. RestAssured provides powerful mechanisms for asserting nested fields and array elements, ensuring that your tests cover even the most complex JSON structures.

In this section, we’ll explore:
1. **Validating Nested Objects**.
2. Asserting array elements and their properties.
3. Practical examples and best practices for handling nested and array assertions.

---

## 🔍 1. Validating Nested Objects

### What Are Nested Objects?

Nested objects are JSON objects contained within other objects. For example:

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

Here, `address` is a nested object within the `user` object.

---

### How to Validate Nested Objects

```java
given()
.when()
    .get("/users/1")
.then()
    .body("user.id", equalTo(1))
    .body("user.name", equalTo("John Doe"))
    .body("user.address.city", equalTo("New York"))
    .body("user.address.zipcode", equalTo("10001"));
```

---

### Best Practices

- Use descriptive matchers  
- Validate required fields explicitly  

---

## 📊 2. Asserting Array Elements

### What Are Arrays?

Arrays are ordered lists of values.

```json
{
  "users": [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" }
  ]
}
```

---

### How to Assert Array Elements

```java
.body("users", hasSize(2));
```

```java
.body("users[0].id", equalTo(1))
.body("users[1].name", equalTo("Jane"));
```

```java
.body("users.id", everyItem(greaterThan(0)))
.body("users.name", everyItem(notNullValue()));
```

---

### Best Practices

- Validate size and content  
- Use `everyItem()` for consistency  

---

## 🔗 3. Combining Nested Objects and Arrays

```json
{
  "organization": {
    "name": "Tech Corp",
    "employees": [
      { "id": 1, "name": "John", "role": "Developer" },
      { "id": 2, "name": "Jane", "role": "Manager" }
    ]
  }
}
```

```java
given()
.when()
    .get("/organization")
.then()
    .body("organization.name", equalTo("Tech Corp"))
    .body("organization.employees", hasSize(2))
    .body("organization.employees[0].id", equalTo(1))
    .body("organization.employees[1].name", equalTo("Jane"));
```

---

## ⚠️ 4. Handling Edge Cases

### Empty Arrays

```java
.body("users", hasSize(0));
```

### Missing Fields

```java
.body("user.address", notNullValue())
.body("user.phone", nullValue());
```

### Invalid Data Types

```java
.body("user.id", instanceOf(Integer.class))
.body("user.name", instanceOf(String.class));
```

---

## ✅ Best Practices

1. Start simple  
2. Reuse validations  
3. Log intermediate values  
4. Test edge cases  
5. Document structures  

---

## 🏁 Conclusion

Validating nested objects and arrays is essential for ensuring the integrity of API responses. By mastering these techniques, you can handle even the most complex JSON structures with confidence. In the next section, we’ll explore dynamic data handling.
