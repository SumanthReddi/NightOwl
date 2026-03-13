---
sidebar_position: 2
title: JSON Fundamentals for API Testing
---

## JSON Fundamentals for API Testing  

JSON (**JavaScript Object Notation**) is the **most common data format** used in REST APIs.  
For automation testers, understanding JSON is mandatory to **validate responses correctly and avoid fragile assertions**.

---

### **What is JSON?**

JSON is a **lightweight, text-based data format** used to exchange data between client and server.

Example:
```json
{
  "userId": 101,
  "name": "John",
  "active": true
}
```

##### **Why It Matters**
JSON is predictable, human-readable, and widely supported. Misunderstanding JSON structure or validation rules can lead to flaky tests.

---

### **JSON Data Types**

| **Type**      | **Example**                     |
|---------------|---------------------------------|
| String        | `"John"`                       |
| Number        | `101`, `99.5`                  |
| Boolean       | `true` / `false`               |
| Null          | `null`                         |
| Object        | `{ }`                          |
| Array         | `[ ]`                          |

##### **Tester Tip**
> Always validate **type + value**, not just value.  
For example, ensure `userId` is a number (`101`), not a string (`"101"`).

---

### **JSON Object**

An **object** is a collection of key–value pairs.

Example:
```json
{
  "id": 101,
  "email": "john@gmail.com"
}
```

##### **Automation Usage**
- Validate specific fields: Ensure `email` matches the expected value.
- Assert mandatory keys exist: Check that `id` and `email` are present.

##### **Code Snippet: Validating JSON Objects**
```java
// RestAssured example
Response response = given()
    .when()
    .get("/users/101");

response.then().body("id", equalTo(101));
response.then().body("email", equalTo("john@gmail.com"));
```

---

### **JSON Array**

An **array** is an ordered list of values or objects.

Example:
```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]
```

##### **Automation Usage**
- Validate list size: Ensure the array contains at least one item.
- Validate at least one matching object: Check if an object with `id=1` exists.
- Avoid fixed index assertions unless required: Use flexible queries instead of hardcoding indices.

##### **Code Snippet: Validating JSON Arrays**
```java
// RestAssured example
Response response = given()
    .when()
    .get("/users");

response.then().body("size()", greaterThan(0)); // Ensure array is not empty
response.then().body("find { it.id == 1 }.name", equalTo("Alice")); // Find object with id=1
```

---

### **Nested JSON (Very Common)**

Example:
```json
{
  "order": {
    "id": 5001,
    "items": [
      {
        "productId": 10,
        "price": 299
      }
    ]
  }
}
```

##### **Tester Focus**
- Navigate nested structures correctly: Use JSON paths to access inner fields.
- Validate inner objects and arrays: Ensure `order.items[0].price` matches the expected value.

##### **Code Snippet: Validating Nested JSON**
```java
// RestAssured example
Response response = given()
    .when()
    .get("/orders/5001");

response.then().body("order.id", equalTo(5001));
response.then().body("order.items[0].price", equalTo(299));
```

---

### **JSON Path Basics (Conceptual)**

JSON Path is used to locate data inside JSON.

Examples:
```
$.id                     → Top-level ID
$.order.items[0].price   → Price of first item
$.users[*].email         → Emails of all users
```

##### **Tester Rule**
> Use JSON paths that are **resilient to order changes**.  
For example, use `find` instead of fixed indices.

##### **Real-World Example**
Validating an email in a list of users:
```java
response.then().body("users.find { it.id == 101 }.email", equalTo("john@example.com"));
```

---

### **Common JSON Validation Patterns**

#### **Field Existence**
- Key exists: Ensure `email` is present.
- Value not null: Ensure `email` is not `null`.

#### **Value Validation**
- Exact match: `id == 101`.
- Range check: `price > 100`.
- Enum validation: `status` is one of `["ACTIVE", "INACTIVE"]`.

#### **Array Validation**
- Size > 0: Ensure the array is not empty.
- Contains expected object: Check if an object with `id=1` exists.

---

### **Null Handling in JSON**

Example:
```json
{
  "middleName": null
}
```

##### **Tester Considerations**
- `null` ≠ missing key: A key with `null` exists, but a missing key does not.
- Validate expected `nulls` explicitly: Ensure `middleName` is `null` if required.
- Avoid NullPointer-like assumptions: Don’t assume a field will always have a value.

##### **Code Snippet: Handling Null Values**
```java
// RestAssured example
Response response = given()
    .when()
    .get("/users/101");

response.then().body("middleName", nullValue()); // Explicitly validate null
```

---

### **Common Automation Mistakes ❌**

- **Assuming fixed array index**: Order may change, causing flaky tests.
- **Ignoring null values**: Missing `null` validation leads to false positives.
- **Comparing entire JSON blindly**: Small changes in the response break tests.
- **Not validating data types**: Mismatched types cause unexpected failures.

---

### **Best Practices for JSON Validation ✅**

- Validate only required fields: Focus on critical data.
- Avoid full response comparison: Use partial validation.
- Use flexible JSON paths: Handle dynamic data gracefully.
- Separate schema vs data validation: Validate structure (schema) and content (data) separately.
- Log response on failure: Capture the full response for debugging.

##### **Code Snippet: Logging Full Response**
```java
Response response = given()
    .when()
    .get("/users/101");

if (response.statusCode() != 200) {
    System.out.println("Full response: " + response.asPrettyString());
}
```

---

### **Interview-Ready Questions**

**Q: Difference between missing key and null?**  
A: Missing key does not exist; null exists with no value.

**Q: Why avoid fixed index in arrays?**  
A: Order may change, causing flaky tests.

---

### **Key Takeaways 🎯**

- JSON is the standard API data format.
- Objects, arrays, and nesting are common in API responses.
- Validation should be flexible and resilient to changes.
- Type awareness prevents bugs and ensures accurate assertions.
- Good JSON handling = stable API tests.
