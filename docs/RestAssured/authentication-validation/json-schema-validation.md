---
title: JSON Schema Validation
sidebar_position: 2
---

# 🧾 JSON Schema Validation in RestAssured

## 📘 Introduction

Validating the structure of API responses is as important as validating their content. JSON Schema Validation ensures that the response adheres to a predefined structure, helping you catch issues like missing fields, incorrect data types, or unexpected formats. RestAssured integrates seamlessly with JSON Schema Validator, making it easy to validate responses against schemas.

In this section, we’ll explore:
1. **What is JSON Schema?**
2. How to create and use JSON schemas for validation.
3. Practical examples and best practices for schema validation.

---

## 🧠 What Is JSON Schema?

### Definition

A JSON Schema is a blueprint that defines the structure and constraints of a JSON object. It specifies:
- Required fields.
- Data types (e.g., string, number, boolean).
- Field formats (e.g., email, date-time).
- Array structures and nested objects.

---

### Example JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "age": { "type": "integer", "minimum": 0 }
  },
  "required": ["id", "name", "email"],
  "additionalProperties": false
}
```

This schema ensures that:
- The response is an object.
- It contains required fields (`id`, `name`, `email`) with specific data types.
- The `email` field follows the email format.
- Additional properties are not allowed.

---

## ⚙️ How to Use JSON Schema Validation in RestAssured

RestAssured provides built-in support for JSON Schema Validation using the `matchesJsonSchemaInClasspath()` method.

---

### Step 1: Create a JSON Schema File

Save your JSON schema in a file (e.g., `user-schema.json`) under the `src/test/resources` directory.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "age": { "type": "integer", "minimum": 0 }
  },
  "required": ["id", "name", "email"],
  "additionalProperties": false
}
```

---

### Step 2: Validate the Response Against the Schema

```java
given()
.when()
    .get("/users/1")
.then()
    .body(matchesJsonSchemaInClasspath("user-schema.json"));
```

---

## 🧩 Handling Complex Schemas

### Nested Objects

```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "object",
      "properties": {
        "id": { "type": "integer" },
        "name": { "type": "string" },
        "address": {
          "type": "object",
          "properties": {
            "city": { "type": "string" },
            "zipcode": { "type": "string" }
          },
          "required": ["city", "zipcode"]
        }
      },
      "required": ["id", "name", "address"]
    }
  },
  "required": ["user"]
}
```

```java
given()
.when()
    .get("/users/1")
.then()
    .body(matchesJsonSchemaInClasspath("nested-user-schema.json"));
```

---

### Arrays

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": { "type": "integer" },
      "name": { "type": "string" }
    },
    "required": ["id", "name"]
  }
}
```

```java
given()
.when()
    .get("/users")
.then()
    .body(matchesJsonSchemaInClasspath("user-array-schema.json"));
```

---

## ✅ Best Practices for JSON Schema Validation

1. **Keep Schemas Modular**

2. **Validate Early**

3. **Handle Edge Cases**

4. **Use Tools for Schema Creation**

5. **Log Validation Errors**

```java
try {
    given()
    .when()
        .get("/users/1")
    .then()
        .body(matchesJsonSchemaInClasspath("user-schema.json"));
} catch (AssertionError e) {
    System.out.println("Schema validation failed: " + e.getMessage());
}
```

---

## 🏁 Conclusion

JSON Schema Validation is a powerful tool for ensuring the integrity of API responses. By defining and validating schemas, you can catch structural issues early and ensure consistent behavior across environments. In the next section, we’ll explore nested and array assertions to further enhance your ability to validate complex responses.
