---
sidebar_position: 4
---

## HTTP Methods – HEAD & OPTIONS (Awareness + Debugging)  

`HEAD` and `OPTIONS` are **not used daily** by automation testers, but they are **extremely important for debugging, security checks, and interviews**.

---

### **6️⃣ HEAD Method**

#### **What is HEAD?**

`HEAD` is similar to `GET`, but it **returns only headers, not the response body**.

Example:
```http
HEAD /users/101
```

Meaning:
> “Check if the resource exists and return metadata, without fetching the body.”

---

#### **Key Characteristics of HEAD**

| **Aspect**      | **Behavior**          |
|------------------|-----------------------|
| Purpose          | Metadata check        |
| Request Body     | ❌ Not allowed        |
| Response Body    | ❌ Not returned       |
| Safe             | ✅ Yes                |
| Idempotent       | ✅ Yes                |
| Cacheable        | ✅ Yes                |

##### **Why It Matters for Testers**
- **Faster**: No payload means quicker responses.
- **Lightweight**: Useful for checking availability or permissions without downloading data.

---

#### **When Testers Use HEAD**

- **Check resource existence**: Verify if a file or endpoint is available.
- **Validate authentication/authorization**: Ensure headers like `Authorization` work correctly.
- **Measure response time**: Benchmark API performance without payload overhead.
- **Debug caching issues**: Validate cache headers (`Cache-Control`, `ETag`).

##### **Real-World Example**
Verifying file availability before download:
```http
HEAD /files/report.pdf
```

Response Headers:
```http
HTTP/1.1 200 OK
Content-Length: 10240
Content-Type: application/pdf
```

##### **Code Snippet: Validating HEAD Response**
```java
// RestAssured example
Response response = given()
    .when()
    .head("/files/report.pdf");

// Assertions
response.then().statusCode(200);
response.then().header("Content-Type", "application/pdf");
```

---

#### **HEAD vs GET (Important Difference)**

| **Aspect**      | **HEAD**              | **GET**               |
|------------------|-----------------------|-----------------------|
| Response body    | ❌ No                 | ✅ Yes                |
| Performance      | Faster               | Slower               |
| Use case         | Check availability   | Fetch data            |

##### **Tester Rule**
> Use `HEAD` when you don’t need the data, only the status or metadata.

---

#### **Common HEAD Mistakes ❌**

- **Expecting response body**: `HEAD` never returns a body.
- **Using `HEAD` for data validation**: Use `GET` instead.
- **Ignoring `HEAD` in API debugging**: Misses critical metadata like cache headers.

---

### **7️⃣ OPTIONS Method**

#### **What is OPTIONS?**

`OPTIONS` returns the **allowed HTTP methods** for a resource.

Example:
```http
OPTIONS /users
```

Meaning:
> “What operations are allowed on this endpoint?”

---

#### **Key Characteristics of OPTIONS**

| **Aspect**      | **Behavior**          |
|------------------|-----------------------|
| Purpose          | Discover allowed methods |
| Request Body     | ❌ Not allowed        |
| Safe             | ✅ Yes                |
| Idempotent       | ✅ Yes                |

##### **Why It Matters for Testers**
- **Security Testing**: Identify exposed methods that shouldn’t be public.
- **CORS Debugging**: Understand cross-origin restrictions.
- **Environment Comparison**: Compare allowed methods across environments.

---

#### **OPTIONS & CORS (Very Important)**

`OPTIONS` is heavily used in **CORS preflight requests**.

Browser flow:
```
Browser
 ↓
OPTIONS (preflight)
 ↓
API Server
 ↓
Allowed methods & headers
```

If `OPTIONS` fails:
- UI/API calls may fail with `403 Forbidden` or `405 Method Not Allowed`.
- Automation tests may see unexpected errors.

##### **Real-World Example**
Validating allowed methods:
```http
OPTIONS /users
```

Response Headers:
```http
HTTP/1.1 200 OK
Allow: GET, POST, PUT, DELETE
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Origin: *
```

##### **Code Snippet: Validating OPTIONS Response**
```java
// RestAssured example
Response response = given()
    .when()
    .options("/users");

// Assertions
response.then().statusCode(200);
response.then().header("Allow", containsString("GET"));
response.then().header("Access-Control-Allow-Methods", containsString("POST"));
```

---

#### **Automation Use Cases for OPTIONS**

- **Debug CORS issues**: Identify why cross-origin requests fail.
- **Validate allowed methods**: Ensure endpoints support expected operations.
- **Security testing**: Detect over-exposed methods (e.g., `DELETE` publicly accessible).
- **Environment comparison**: Compare allowed methods between dev, staging, and prod.

---

#### **Common OPTIONS Mistakes ❌**

- **Ignoring `OPTIONS` failures**: Leads to missed CORS or method exposure issues.
- **Not understanding CORS preflight**: Misinterprets browser errors.
- **Assuming all methods are allowed**: Fails to validate restricted methods.

---

### **Interview Questions**

**Q: Why is `OPTIONS` used?**  
A: To identify allowed HTTP methods and support CORS preflight checks.

**Q: Difference between `GET` and `HEAD`?**  
A: `HEAD` returns headers only, `GET` returns headers + body.

---

### **Key Takeaways 🎯**

- **`HEAD` checks metadata without body**: Use for lightweight checks like availability or caching.
- **`OPTIONS` lists allowed methods**: Critical for CORS debugging and security testing.
- Both are **safe** and **idempotent**.
- These methods are **critical for debugging** and **interviews**.
- Often involved in **CORS issues**.
