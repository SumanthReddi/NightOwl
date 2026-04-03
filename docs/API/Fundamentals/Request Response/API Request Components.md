---
sidebar_position: 1
---

## API Request Components – Headers, Path Params & Query Params  

Every API request is built from **multiple components**.  
Most API automation bugs happen because **one of these components is misunderstood or misused**.

This section explains each component clearly, with tester-focused rules.

---

### **1️⃣ URL & Endpoint (Quick Recap)**

Example:
```http
GET /users/101/orders?status=SUCCESS
```

Breakdown:
- `/users/101/orders` → Path (identifies the resource)
- `?status=SUCCESS` → Query parameters (filter or modify the response)

##### **Why It Matters**
The URL structure defines how you interact with the API. Misplacing components (e.g., using query params instead of path params) can lead to unexpected behavior.

---

### **2️⃣ Path Parameters**

#### **What are Path Params?**

Path parameters identify a **specific resource**.

Example:
```http
GET /users/101
```

Here:
- `101` is a path parameter that identifies the user.

---

#### **Characteristics of Path Params**

| **Aspect**      | **Behavior**          |
|------------------|-----------------------|
| Purpose          | Identify resource     |
| Mandatory        | ✅ Yes                |
| Order matters    | ✅ Yes                |
| Part of URL      | ✅ Yes                |

##### **Why It Matters**
Path parameters are essential for CRUD operations. They must be correctly formatted and validated.

---

#### **Automation Use Cases**

- Fetch specific user (`GET /users/{id}`).
- Update specific order (`PUT /orders/{id}`).
- Delete a resource (`DELETE /users/{id}`).

##### **Validation Checklist**
- Correct resource returned.
- `404 Not Found` for invalid IDs.

##### **Code Snippet: Validating Path Params**
```java
// RestAssured example
Response response = given()
    .when()
    .get("/users/101");

response.then().statusCode(200);
response.then().body("id", equalTo(101));
```

---

#### **Common Path Param Mistakes ❌**

- **Passing invalid ID format**: Ensure IDs match expected formats (e.g., numeric, UUID).
- **Using query param instead of path param**: Example: `/users?id=101` instead of `/users/101`.
- **Hardcoding IDs across tests**: Use dynamic values or externalize IDs.

---

### **3️⃣ Query Parameters**

#### **What are Query Params?**

Query parameters **sort or filter or modify the response** and those are always identified with **?**

Example:
```http
GET /orders?status=SUCCESS&limit=10
```

---

#### **Characteristics of Query Params**

| **Aspect**      | **Behavior**          |
|------------------|-----------------------|
| Purpose          | Filter, sort, paginate|
| Mandatory        | ❌ Usually optional   |
| Order matters    | ❌ No                 |
| Part of URL      | ✅ Yes                |

##### **Why It Matters**
Query parameters allow testers to simulate real-world scenarios like pagination, filtering, and sorting.

---

#### **Common Automation Use Cases**

- Pagination (`page=2`, `limit=10`).
- Filtering (`status=SUCCESS`, `type=ACTIVE`).
- Sorting (`sort=createdDate`, `order=asc`).

##### **Real-World Example**
Fetching paginated orders:
```http
GET /orders?page=2&limit=10
```

##### **Code Snippet: Validating Query Params**
```java
// RestAssured example
Response response = given()
    .queryParam("status", "SUCCESS")
    .queryParam("limit", 10)
    .when()
    .get("/orders");

response.then().statusCode(200);
response.then().body("size()", equalTo(10));
```

---

#### **Common Query Param Mistakes ❌**

- **Forgetting encoding**: Special characters in query params must be URL-encoded.
- **Assuming order matters**: Query params are unordered; `/orders?status=SUCCESS&limit=10` is the same as `/orders?limit=10&status=SUCCESS`.
- **Missing default values**: Validate behavior when query params are omitted.
- **Hardcoding pagination**: Use dynamic values for scalability.

---

### **4️⃣ Headers (VERY IMPORTANT)**

#### **What are Headers?**

Headers represent the meta-data associated with the API request and response. We are sending Additional details to API to process our request.
  - Headers carry **metadata** about the API request.

Example:
```http
Headers:
Content-Type: application/json
Authorization: Bearer token
```

---

#### **Common Headers Testers Must Know**

| **Header**         | **Purpose**                           |
|---------------------|---------------------------------------|
| Content-Type        | Format of request body               |
| Accept              | Expected response format             |
| Authorization       | Auth token                           |
| Cache-Control       | Caching behavior                     |
| Custom headers      | App-specific logic                   |

##### **Why It Matters**
Headers often determine whether the request succeeds or fails. Missing or incorrect headers are a common source of bugs.

---

#### **Content-Type vs Accept (Interview Favorite)**

| **Header**         | **Meaning**                          |
|---------------------|--------------------------------------|
| Content-Type        | Format of request body (e.g., JSON).|
| Accept              | Expected response format (e.g., JSON).|

##### **Real-World Example**
Sending JSON data and expecting JSON response:
```http
POST /users
Headers:
Content-Type: application/json
Accept: application/json
Body:
{
  "name": "John",
  "email": "john@example.com"
}
```

---

#### **Header Automation Mistakes ❌**

- **Missing Content-Type**: Leads to `415 Unsupported Media Type`.
- **Wrong token placement**: Use `Authorization: Bearer <token>`, not `Bearer: <token>`.
- **Hardcoding auth headers**: Externalize tokens for scalability.
- **Ignoring custom headers**: Validate app-specific headers like `X-Request-ID`.

##### **Code Snippet: Validating Headers**
```java
// RestAssured example
Response response = given()
    .header("Content-Type", "application/json")
    .header("Authorization", "Bearer token")
    .when()
    .get("/users/101");

response.then().statusCode(200);
```

---

### **5️⃣ Request Body (Preview)**

The body contains the **payload** sent to the server.

Example:
```json
{
  "userId": 101,
  "amount": 500
}
```

We’ll cover body & JSON deeply in the **next section**.

---

### **Parameter Comparison (Important)**

| **Aspect**         | **Path Param**       | **Query Param**      |
|---------------------|----------------------|----------------------|
| Purpose            | Identify resource    | Filter data          |
| Mandatory          | Yes                  | Usually No           |
| Order matters      | Yes                  | No                   |
| Used for           | CRUD                 | Search & pagination  |

---

### **Automation Best Practices ✅**

- Always verify correct param usage.
- Externalize IDs and params (e.g., use environment variables or config files).
- Log full request on failure (headers, path, query params, body).
- Avoid hardcoding values.
- Validate negative param scenarios (e.g., invalid IDs, missing headers).

---

### **Interview-Ready Questions**

**Q: Difference between path and query parameters?**  
A: Path identifies resource; query filters data.

**Q: What happens if Content-Type is missing?**  
A: Server may reject or misinterpret request.

---

### **Key Takeaways 🎯**

- API requests have multiple components: URL, path params, query params, headers, and body.
- Path params identify resources.
- Query params filter results.
- Headers carry metadata & auth.
- Small mistakes cause major failures.
