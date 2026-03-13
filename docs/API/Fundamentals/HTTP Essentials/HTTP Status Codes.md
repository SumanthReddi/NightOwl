---
sidebar_position: 5
---

## HTTP Status Codes

HTTP status codes tell you **what happened to your API request**.  
For automation testers, status codes are the **first and most important assertion**.

This section covers **what to validate, why it matters, and common traps**.

---

### **Why Status Codes Matter**

- **Fast validation**: Assert status codes without parsing the response body.
- **Clear success vs failure signal**: Immediate feedback on whether the request succeeded or failed.
- **Standardized across APIs**: Follows RFC standards, making them predictable.
- **Primary indicator in CI failures**: Helps quickly identify issues during pipeline execution.

##### **Golden Rule**
> **Always assert status code before validating response body.**

---

### **Status Code Categories**

| **Category** | **Meaning** |
|--------------|-------------|
| 1xx | Informational (rare) |
| 2xx | Success |
| 3xx | Redirection |
| 4xx | Client errors |
| 5xx | Server errors |

Automation focus is mainly on **2xx, 4xx, and 5xx**.

---

### **✅ 2xx – Success Codes**

#### **200 OK**
- **Description**: Request processed successfully.
- **Common for**: `GET`, `PUT`, `PATCH`.

##### **Automation Check**
- Validate that the response body contains expected data.
- Example:
```java
Response response = given()
    .when()
    .get("/users/101");

response.then().statusCode(200);
response.then().body("name", equalTo("John"));
```

---

#### **201 Created**
- **Description**: Resource successfully created.
- **Common for**: `POST`.

##### **Automation Check**
- Verify that the response contains the new resource ID.
- Validate that the database reflects the creation.

##### **Real-World Example**
Creating a user:
```http
POST /users
Body:
{
  "name": "John",
  "email": "john@example.com"
}
```

Response:
```json
{
  "id": 101,
  "name": "John",
  "email": "john@example.com"
}
```

##### **Code Snippet**
```java
Response response = given()
    .header("Content-Type", "application/json")
    .body("{ "name": "John", "email": "john@example.com" }")
    .when()
    .post("/users");

response.then().statusCode(201);
response.then().body("id", notNullValue());
```

---

#### **204 No Content**
- **Description**: Success with no response body.
- **Common for**: `DELETE`.

##### **Automation Check**
- Ensure the response body is empty.
- Validate side effects (e.g., resource removed from the database).

##### **Real-World Example**
Deleting a user:
```http
DELETE /users/101
```

##### **Code Snippet**
```java
Response response = given()
    .when()
    .delete("/users/101");

response.then().statusCode(204);
response.then().body(equalTo(""));
```

---

### **❌ 4xx – Client Error Codes**

Client sent an invalid request.

#### **400 Bad Request**
- **Description**: Invalid input, missing fields, or invalid format.
- **Tester Use**: Negative testing, input validation checks.

##### **Real-World Example**
Invalid email format:
```http
POST /users
Body:
{
  "name": "John",
  "email": "invalid-email"
}
```

Response:
```json
{
  "error": "Invalid email format"
}
```

##### **Code Snippet**
```java
Response response = given()
    .header("Content-Type", "application/json")
    .body("{ "name": "John", "email": "invalid-email" }")
    .when()
    .post("/users");

response.then().statusCode(400);
response.then().body("error", equalTo("Invalid email format"));
```

---

#### **401 Unauthorized**
- **Description**: Missing or invalid authentication.
- **Tester Check**: Token missing/expired, correct auth mechanism used.

##### **Real-World Example**
Missing token:
```http
GET /users/101
Headers:
Authorization: Bearer <missing>
```

Response:
```json
{
  "error": "Unauthorized"
}
```

---

#### **403 Forbidden**
- **Description**: Authenticated but no permission.
- **Tester Insight**: Role-based access issue.

##### **Real-World Example**
Non-admin user trying to delete a resource:
```http
DELETE /admin/users/101
Headers:
Authorization: Bearer <user-token>
```

Response:
```json
{
  "error": "Forbidden"
}
```

---

#### **404 Not Found**
- **Description**: Resource does not exist.
- **Tester Use**: Invalid ID scenarios, delete validation.

##### **Real-World Example**
Fetching a non-existent user:
```http
GET /users/999
```

Response:
```json
{
  "error": "User not found"
}
```

---

#### **409 Conflict**
- **Description**: Duplicate data or resource state conflict.
- **Common in**: Duplicate `POST`, idempotency issues.

##### **Real-World Example**
Duplicate user creation:
```http
POST /users
Body:
{
  "email": "john@example.com"
}
```

Response:
```json
{
  "error": "Email already exists"
}
```

---

### **💥 5xx – Server Error Codes**

Server failed to process a valid request.

#### **500 Internal Server Error**
- **Description**: Unhandled exception, backend bug.
- **Tester Action**: Capture request/response, report as backend defect.

##### **Real-World Example**
Unexpected server crash:
```http
GET /users/101
```

Response:
```json
{
  "error": "Internal Server Error"
}
```

---

#### **502 Bad Gateway**
- **Description**: Upstream service failure.
- **Common in**: Microservices, downstream dependency issues.

##### **Real-World Example**
Payment gateway down:
```http
POST /payments
```

Response:
```json
{
  "error": "Bad Gateway"
}
```

---

#### **503 Service Unavailable**
- **Description**: Server overloaded or down.
- **Tester Insight**: Infra issue, not functional bug.

##### **Real-World Example**
High traffic causing downtime:
```http
GET /orders
```

Response:
```json
{
  "error": "Service Unavailable"
}
```

---

### **Status Codes vs Automation Decisions**

| **Code** | **Test Result** |
|----------|-----------------|
| Expected 2xx | PASS |
| Expected 4xx | PASS (negative case) |
| Unexpected 4xx | FAIL |
| Any 5xx | FAIL |

### HTTP Status Codes and Explanation

| Category | Status Code | Name | Explanation |
|----------|-------------|------|-------------|
| **1xx Informational** | 100 | Continue | The server received request headers and the client should proceed to send the body. |
| | 101 | Switching Protocols | The server is switching protocols (e.g., upgrading to WebSocket). |
| | 102 | Processing | The server has received and is processing the request but no response is available yet. |
| | 103 | Check Point/Early Hints | Used to provide early hints while the server prepares the response. |
| **2xx Success** | 200 | OK | The request was successful and the response contains requested data. |
| | 201 | Created | The request succeeded and a new resource was created. |
| | 202 | Accepted | The request was accepted for processing but not completed yet. |
| | 203 | Non-Authoritative Information | Response contains information from a third-party source. |
| | 204 | No Content | Request successful but no response body returned. |
| | 205 | Reset Content | Client should reset the document view after request. |
| | 206 | Partial Content | Server returns only part of the resource due to a range request. |
| **3xx Redirection** | 300 | Multiple Choices | Request has multiple possible responses. |
| | 301 | Moved Permanently | Resource permanently moved to a new URL. |
| | 302 | Found | Resource temporarily located at another URL. |
| | 303 | See Other | Response available under a different URL using GET. |
| | 304 | Not Modified | Resource not modified since last request. Cached version can be used. |
| | 305 | Use Proxy | The requested resource must be accessed through the proxy specified in the Location header field.  |
| | 307 | Temporary Redirect | Same request should be repeated at another temporary URL. |
| | 308 | Permanent Redirect | Same request should be repeated at another permanent URL. |
| **4xx Client Error** | 400 | Bad Request | Server cannot process request due to client error. |
| | 401 | Unauthorized | Authentication required or failed. |
| | 402 | Payment Required | Reserved for future use. |
| | 403 | Forbidden | Client does not have permission. |
| | 404 | Not Found | Requested resource not found. |
| | 405 | Method Not Allowed | HTTP method not supported for resource. |
| | 406 | Not Acceptable | Server cannot produce a response matching criteria. |
| | 407 | Proxy Authentication Required | Client must authenticate with proxy. |
| | 408 | Request Timeout | Server timed out waiting for request. |
| | 409 | Conflict | Request conflicts with server state (e.g., duplicate resource). |
| | 410 | Gone | Resource permanently removed. |
| | 411 | Length Required | Content-Length header required. |
| | 412 | Precondition Failed | Conditions in request headers were not met. |
| | 413 | Payload Too Large | Request payload too large. |
| | 414 | URI Too Long | Request URI too long. |
| | 415 | Unsupported Media Type | Request media type not supported. |
| | 416 | Range Not Satisfiable | Requested range cannot be provided. |
| | 417 | Expectation Failed | Server cannot meet Expect header requirements. |
| | 418 | I'm a Teapot | Humorous HTTP status code. |
| | 422 | Unprocessable Entity | Server understands request but cannot process it. |
| | 429 | Too Many Requests | Client sent too many requests (rate limiting). |
| **5xx Server Error** | 500 | Internal Server Error | Unexpected server condition occurred. |
| | 501 | Not Implemented | Server does not support request functionality. |
| | 502 | Bad Gateway | Invalid response from upstream server. |
| | 503 | Service Unavailable | Server temporarily unavailable. |
| | 504 | Gateway Timeout | Upstream server did not respond in time. |
| | 505 | HTTP Version Not Supported | HTTP protocol version not supported. |
| | 507 | Insufficient Storage | Server cannot store representation needed. |
| | 511 | Network Authentication Required | Client must authenticate to access network. |
---

### **Common Automation Mistakes ❌**

- **Ignoring status code**: Always validate status codes first.
- **Validating body before status**: Leads to false positives.
- **Treating 4xx as failures always**: Some 4xx codes (e.g., `404`) may be expected in negative tests.
- **Retrying on 5xx without investigation**: May mask underlying issues.

---

### **Interview-Ready Questions**

**Q: Difference between 401 and 403?**  
A: `401` = not authenticated, `403` = authenticated but not authorized.

**Q: When do you expect 422?**  
A: When business validation fails (e.g., invalid business rules).

**Q: Should automation retry on 500?**  
A: No, it indicates a server-side issue; investigate instead of retrying.

---

### **Key Takeaways 🎯**

- **Status codes are primary assertions**: Validate them before anything else.
- **2xx = success**, **4xx = client issue**, **5xx = server issue**.
- **Negative tests expect 4xx**: Use them to validate error handling.
- **5xx always indicates a problem**: Investigate and report.
- **Strong status code validation improves test reliability**.
