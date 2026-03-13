---
sidebar_position: 2
---

## API Architecture Basics

Before testing APIs, automation testers must understand **how APIs work internally**.  
This section explains **API architecture in simple terms**, focused on **how testers observe, validate, and debug issues**.

---

### **Client–Server Architecture**

APIs follow a **client–server model**, where:

- **Client**: The entity making the request (e.g., UI, mobile app, another service, or your automation test script).
- **Server**: The API service that processes the request and sends back a response.

```
Client (UI / Test / Postman)
            ↓
        API Server
            ↓
        Database
```

As an automation tester, your scripts act as the **client**, sending requests to the API and validating responses.

#### **Why This Matters**
Understanding this flow helps you:
- Debug issues by tracing requests and responses.
- Validate both the API response and its side effects (e.g., database changes).

---

### **Request–Response Cycle (Core Concept)**

Every API interaction follows this cycle:

```
Request  →  Processing  →  Response
```

#### **Request Contains:**
- **HTTP method**: `GET`, `POST`, `PUT`, `DELETE`, etc.
- **URL (endpoint)**: The API endpoint being called (e.g., `/users`).
- **Headers**: Metadata like `Content-Type`, `Authorization`, etc.
- **Body** (optional): Data sent with the request (e.g., JSON payload).

#### **Response Contains:**
- **Status code**: Indicates success (`200 OK`) or failure (`400 Bad Request`).
- **Headers**: Metadata like `Content-Type`, `Cache-Control`.
- **Body**: The actual data returned (e.g., JSON/XML).

##### **Tester Focus**
> Validate both **response correctness** and **side effects** (e.g., database updates).

#### **Example**
When testing `POST /users`:
- Send a request with a JSON body: `{ "name": "John", "email": "john@example.com" }`.
- Validate the response status (`201 Created`) and body (`{ "id": 123, "name": "John" }`).
- Check the database for the new user record.

---

### **Stateless Nature of APIs**

Most REST APIs are **stateless**, meaning:

- Each request is independent.
- The server does not remember previous requests.
- All required data must be sent in the request (e.g., tokens, IDs).

#### **Automation Implications**
- **Tokens must be sent every time**: If you’re testing an authenticated API, include the token in every request header.
- **Tests should not rely on execution order**: Each test must set up its own data.
- **Parallel execution becomes easier**: Stateless APIs allow tests to run concurrently without conflicts.

##### **Real-World Example**
Imagine testing a shopping cart API:
- `POST /cart` creates a cart for a user.
- Since the API is stateless, you must send the user ID in every request.

---

### **Synchronous vs Asynchronous APIs**

#### **Synchronous APIs**
- The client waits for the server to process the request and return a response immediately.

**Example**:
```text
Create user → Response returned immediately
```

#### **Asynchronous APIs**
- The client gets an acknowledgment first, but the actual processing happens later (e.g., background jobs).

**Example**:
```text
Trigger payment → Response OK → DB update happens later
```

##### **Tester Implication**
- **DB validation may require wait/retry**: Use polling or retry logic to check for eventual consistency.
- **Immediate assertions may fail**: For example, a `202 Accepted` response doesn’t guarantee the task is complete.

##### **Code Snippet: Handling Async APIs**
```java
// Retry logic for async API
await().atMost(10, SECONDS).until(() -> {
    Response response = get("/tasks/{taskId}", taskId);
    return response.statusCode() == 200 && response.jsonPath().getBoolean("completed");
});
```

---

### **API Layer in Real Applications**

```
UI
↓
API Layer
↓
Business Logic
↓
Database
```

Automation testers commonly validate:
- **API response**: Status codes, headers, body.
- **Business rules**: Input/output correctness, edge cases.
- **Database state**: Ensure side effects (e.g., new records) match expectations.

##### **Best Practice**
> Validate **API + DB together** for critical flows.

---

### **Monolithic vs Microservices APIs**

#### **Monolithic**
- A single API service handles all requests.
- Shared database across features.

#### **Microservices**
- Multiple APIs, each responsible for a specific domain.
- Each service owns its data.

##### **Tester Awareness**
- One UI action may trigger multiple APIs (e.g., `POST /orders` calls `POST /payments`).
- DB changes may span multiple services, requiring distributed tracing.

##### **Real-World Example**
In a microservices e-commerce app:
- `POST /orders` creates an order.
- `POST /payments` processes payment.
- `POST /inventory` updates stock.

As a tester, you must validate all three APIs and their interactions.

---

### **Common Automation Issues Explained by Architecture**

| **Issue** | **Architectural Reason** |
|---|---|
| Data not visible immediately | Async processing |
| Random failures | Stateless + timing issues |
| Duplicate data | Non-idempotent APIs |
| Flaky tests | Parallel requests causing race conditions |

##### **How to Fix These Issues**
- Use **idempotency keys** to prevent duplicates.
- Add **retry logic** for async APIs.
- Log full requests/responses for debugging.

---

### **Tester Best Practices Based on Architecture**

1. **Treat every request independently**: Avoid relying on shared state.
2. **Do not assume execution order**: Each test should set up its own data.
3. **Handle async behavior properly**: Use polling or wait-for conditions.
4. **Validate backend state, not just response**: Check the database for consistency.
5. **Log full request & response**: Capture headers, body, and status for debugging.

---

### **Key Takeaways 🎯**

- APIs follow a **client–server model**.
- The **request–response cycle** is fundamental to API testing.
- Most REST APIs are **stateless**, requiring all data to be sent in each request.
- **Async APIs** introduce timing challenges; use retry logic to handle them.
- Understanding **monolithic vs microservices architectures** helps testers validate complex flows.
- Architectural awareness reduces flaky tests and improves test reliability.
