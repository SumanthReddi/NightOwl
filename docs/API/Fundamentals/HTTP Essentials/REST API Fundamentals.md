---
sidebar_position: 1
---

## REST API Fundamentals

REST is the **most widely used API style** in modern applications.  
As an automation tester, you don’t need to memorize REST theory like backend developers — instead, focus on **how REST affects testing, validation, and debugging**.

---

### **What is REST?**

**REST** stands for **Representational State Transfer**.

In simple terms:
> REST is a way of designing APIs so that clients can interact with resources using standard HTTP methods.

Key idea for testers:
- REST APIs are predictable because they follow conventions like HTTP methods (`GET`, `POST`, etc.) and status codes (`200 OK`, `404 Not Found`).

---

### **REST Resources & Endpoints**

#### **Resource**
A **resource** represents a real-world entity.

Examples:
- User
- Order
- Payment

#### **Endpoint**
An **endpoint** is the URL that represents a resource.

Examples:
```
/users          → Fetch all users
/users/101      → Fetch user with ID 101
/orders/5001    → Fetch order with ID 5001
```

##### **Tester Mindset**
> Endpoints should represent **nouns**, not actions.  
For example:
- Good: `/users` (represents a resource)
- Bad: `/getUserDetails` (action-based, not RESTful)

---

### **REST Uses Standard HTTP Methods**

REST relies on **HTTP methods** to define actions:

| **Method** | **Meaning** | **Example** |
|------------|-------------|-------------|
| GET | Fetch data | `GET /users` |
| POST | Create resource | `POST /users` |
| PUT | Replace resource | `PUT /users/101` |
| PATCH | Update part of resource | `PATCH /users/101` |
| DELETE | Remove resource | `DELETE /users/101` |

👉 We will deep-dive into each method in the next section.

---

### **REST is Stateless (Why It Matters)**

Stateless means:
- The server does not store client state between requests.
- Every request must contain all required information (e.g., tokens, IDs).

##### **Automation Implications**
- **Tokens must be sent with every request**: If you’re testing an authenticated API, include the token in every request header.
- **Tests should not depend on execution order**: Each test must set up its own data.
- **Parallel execution is safer**: Stateless APIs allow tests to run concurrently without conflicts.

##### **Real-World Example**
Imagine testing a shopping cart API:
- `POST /cart` creates a cart for a user.
- Since the API is stateless, you must send the user ID in every request.

---

### **REST Constraints (Tester-Relevant Only)**

REST has multiple constraints; testers only need these:

#### **1️⃣ Client–Server**
- UI/Test and API server are independent.
- Easier to test API without UI.

#### **2️⃣ Statelessness**
- No session memory on the server.
- Each request stands alone.

#### **3️⃣ Uniform Interface**
- Consistent use of URLs, methods, and status codes.
- Makes automation predictable.

You do NOT need to memorize all REST constraints.

---

### **REST vs SOAP (Interview Favorite)**

| **REST** | **SOAP** |
|----------|----------|
| Lightweight | Heavy |
| Uses HTTP | Uses XML + protocols |
| JSON common | XML only |
| Faster | Slower |
| Easy automation | Hard automation |

##### **Tester Takeaway**
> Most modern automation focuses on REST APIs because they are lightweight, predictable, and easier to test.

---

### **Idempotency (VERY IMPORTANT FOR TESTERS)**

Idempotent means:
> Making the same request multiple times gives the same result.

| **Method** | **Idempotent** |
|------------|----------------|
| GET | ✅ |
| PUT | ✅ |
| DELETE | ✅ |
| POST | ❌ |

##### **Automation Impact**
- **Safe retries for idempotent methods**: For example, retrying `PUT /users/101` won’t create duplicate records.
- **Be careful retrying POST**: Retrying `POST /orders` might create duplicate orders.

##### **Code Snippet: Safe Retry Logic**
```java
// Safe retry for idempotent methods
await().atMost(10, SECONDS).until(() -> {
    Response response = put("/users/{userId}", userId);
    return response.statusCode() == 200;
});
```

---

### **REST Error Handling (Conceptual)**

REST APIs communicate errors using:
- **HTTP status codes**: `400 Bad Request`, `401 Unauthorized`, `500 Internal Server Error`.
- **Error messages in response body**: `{ "error": "Invalid email format" }`.

##### **Tester Focus**
- Validate correct status code.
- Validate meaningful error message.
- Do NOT rely on UI error alone.

##### **Example**
When testing `POST /users`:
- Invalid email → Expect `400 Bad Request` with `{ "error": "Invalid email format" }`.

---

### **Common Automation Mistakes ❌**

- Treating REST like UI flows.
- Ignoring HTTP method semantics (e.g., using `POST` for updates).
- Retrying `POST` blindly → Creates duplicates.
- Assuming session state exists → Leads to flaky tests.

---

### **Best Practices for Automation Testers ✅**

1. **Think in terms of resources**: Focus on nouns (`/users`) rather than actions (`/createUser`).
2. **Use correct HTTP methods**: Match the method to the action (`POST` for creation, `PUT` for updates).
3. **Validate status codes strictly**: Ensure `200 OK` for success, `400` for bad input, etc.
4. **Design independent API tests**: Each test should set up its own data.
5. **Prefer API over UI for logic validation**: APIs are faster and more stable.

---

### **Advanced Topics for Senior Testers**

#### **HATEOAS (Hypermedia as the Engine of Application State)**
- Some APIs include links in responses to guide clients (e.g., `_links` field).
- Example:
```json
{
  "id": 101,
  "name": "John",
  "_links": {
    "self": { "href": "/users/101" },
    "update": { "href": "/users/101", "method": "PUT" }
  }
}
```
- Tester takeaway: Validate `_links` if your API uses HATEOAS.

#### **Pagination**
- APIs often paginate large datasets (e.g., `GET /users?page=2&limit=10`).
- Tester focus: Validate pagination parameters and total count.

#### **Versioning**
- APIs may have versions (e.g., `/v1/users`, `/v2/users`).
- Tester focus: Test backward compatibility when new versions are released.

---

### **Key Takeaways 🎯**

- REST is resource-based, making APIs predictable.
- HTTP methods define actions (e.g., `GET` for fetching, `POST` for creating).
- Statelessness enables parallel tests and safer retries.
- Idempotency affects retry logic (safe for `GET`, `PUT`, `DELETE`; risky for `POST`).
- REST is automation-friendly but requires understanding of HTTP semantics and error handling.
