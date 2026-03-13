---
sidebar_position: 2
---

## HTTP Methods – Deep Dive (GET & POST)  

HTTP methods define **what action an API performs**.  
Using the wrong method or misunderstanding its behavior is a **very common automation mistake**.

This section deep-dives into **GET and POST**, the two most frequently used methods.

---

### **1️⃣ GET Method**

#### **What is GET?**

`GET` is used to **retrieve data** from the server.

Example:
```http
GET /users/101
```

Meaning:
> “Give me the details of user 101.”

---

#### **Key Characteristics of GET**

| **Aspect** | **Behavior** |
|------------------|-----------------------|
| Purpose | Fetch data |
| Request Body | ❌ Not allowed |
| Side Effects | ❌ None |
| Safe | ✅ Yes |
| Idempotent | ✅ Yes |
| Cacheable | ✅ Yes |

##### **Why It Matters for Testers**
- **Safe**: No risk of modifying data.
- **Idempotent**: Repeated calls return the same result.
- **Cacheable**: Responses may be cached by browsers or intermediaries.

---

#### **GET Request Structure**

```http
GET /orders?status=SUCCESS
Headers:
Authorization: Bearer token
```

Components:
- **URL**: Includes the resource path and optional query parameters.
- **Query Parameters**: Used for filtering, sorting, or pagination (e.g., `?status=SUCCESS&page=2`).
- **Headers**: Metadata like `Authorization`, `Accept`, etc.

##### **Real-World Example**
Fetching orders with specific filters:
```http
GET /orders?status=SHIPPED&limit=10
Headers:
Authorization: Bearer <token>
Accept: application/json
```

---

#### **Automation Use Cases for GET**

- Fetch user details (`GET /users/{id}`).
- Get order status (`GET /orders/{orderId}`).
- Validate payment history (`GET /payments`).
- Verify data created by `POST`/`PUT`.

##### **Validation Checklist**
- Status code = `200 OK`.
- Response body contains expected fields.
- DB data matches API response.

##### **Code Snippet: Validating GET Response**
```java
// RestAssured example
Response response = given()
    .header("Authorization", "Bearer token")
    .when()
    .get("/users/101");

// Assertions
response.then().statusCode(200);
response.then().body("name", equalTo("John"));
```

---

#### **Common GET Status Codes**

| **Code** | **Meaning** |
|----------|------------------------------|
| 200 | Success |
| 400 | Bad request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not found |
| 500 | Server error |

---

#### **Common GET Mistakes ❌**

- **Sending request body**: `GET` requests should not include a body.
- **Using GET to create/update data**: Violates REST principles.
- **Hardcoding query params**: Use dynamic values for scalability.
- **Ignoring pagination**: Validate `page`, `limit`, and total count.

---

#### **GET Interview Question**

**Q: Is GET idempotent?**  
A: Yes. Multiple `GET` requests return the same result without side effects.

---

### **2️⃣ POST Method**

#### **What is POST?**

`POST` is used to **create a new resource**.

Example:
```http
POST /users
```

Meaning:
> “Create a new user.”

---

#### **Key Characteristics of POST**

| **Aspect** | **Behavior** |
|------------------|-----------------------|
| Purpose | Create resource |
| Request Body | ✅ Required |
| Side Effects | ✅ Yes |
| Safe | ❌ No |
| Idempotent | ❌ No |
| Cacheable | ❌ No |

##### **Why It Matters for Testers**
- **Side Effects**: Creates or modifies data on the server.
- **Not Idempotent**: Retrying `POST` can lead to duplicates.
- **Unsafe**: Misuse can corrupt test environments.

---

#### **POST Request Structure**

```http
POST /orders
Headers:
Content-Type: application/json
Authorization: Bearer token

Body:
{
  "userId": 101,
  "amount": 500
}
```

##### **Real-World Example**
Creating an order:
```http
POST /orders
Headers:
Content-Type: application/json
Authorization: Bearer <token>

Body:
{
  "productId": 123,
  "quantity": 2
}
```

---

#### **Automation Use Cases for POST**

- Create user (`POST /users`).
- Place order (`POST /orders`).
- Trigger payment (`POST /payments`).
- Submit form data (`POST /forms`).

##### **Validation Checklist**
- Status code = `201 Created`.
- Response body contains the new resource ID.
- DB record is created with correct data.

##### **Code Snippet: Validating POST Response**
```java
// RestAssured example
String requestBody = "{ \"name\": \"John\", \"email\": \"john@example.com\" }";

Response response = given()
    .header("Content-Type", "application/json")
    .body(requestBody)
    .when()
    .post("/users");

// Assertions
response.then().statusCode(201);
response.then().body("id", notNullValue());
```

---

#### **Common POST Status Codes**

| **Code** | **Meaning** |
|----------|------------------------------|
| 201 | Created |
| 400 | Invalid input |
| 401 | Unauthorized |
| 409 | Conflict (duplicate) |
| 500 | Server error |

---

#### **POST Idempotency Trap ⚠️**

Retrying `POST` may:
- Create duplicate data.
- Break test environments.

##### **Automation Rule**
> Never blindly retry `POST` requests. Use idempotency keys if supported.

##### **Code Snippet: Handling Idempotency**
```java
// Adding an idempotency key header
Response response = given()
    .header("Idempotency-Key", "unique-key-123")
    .header("Content-Type", "application/json")
    .body("{ \"name\": \"John\" }")
    .when()
    .post("/users");
```

---

#### **Common POST Mistakes ❌**

- **Missing Content-Type header**: Leads to `415 Unsupported Media Type`.
- **Sending invalid JSON**: Causes parsing errors.
- **Retrying POST automatically**: Creates duplicates.
- **Not validating DB side effects**: Misses critical bugs.

---

#### **POST Interview Question**

**Q: Why is POST not idempotent?**  
A: Because multiple `POST` requests can create multiple resources.

---

### **GET vs POST (Quick Comparison)**

| **Aspect** | **GET** | **POST** |
|------------------|----------------------|----------------------|
| Purpose | Read | Create |
| Request Body | ❌ | ✅ |
| Idempotent | ✅ | ❌ |
| Safe | ✅ | ❌ |

---

### **Key Takeaways 🎯**

- **GET** = read-only, safe, and idempotent.
- **POST** = creates resources, causes side effects, and is not idempotent.
- **Automation must treat POST carefully**: Avoid retries, validate DB side effects, and use idempotency keys when available.
- **Understand HTTP semantics**: Misusing methods leads to flaky tests and production bugs.
