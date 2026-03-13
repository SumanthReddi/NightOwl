---
sidebar_position: 3
---

## HTTP Methods – Deep Dive (PUT, PATCH & DELETE)  

`PUT`, `PATCH`, and `DELETE` are used to **modify or remove data**.  
Automation testers must understand these deeply because mistakes here often cause:
- Data corruption
- Flaky tests
- Environment pollution

---

### **3️⃣ PUT Method**

#### **What is PUT?**

`PUT` is used to **fully replace an existing resource**.

Example:
```http
PUT /users/101
```

Meaning:
> “Replace the entire user 101 with the provided data.”

---

#### **Key Characteristics of PUT**

| **Aspect**      | **Behavior**          |
|------------------|-----------------------|
| Purpose          | Full update           |
| Request Body     | ✅ Required           |
| Side Effects     | ✅ Yes                |
| Safe             | ❌ No                 |
| Idempotent       | ✅ Yes                |
| Cacheable        | ❌ No                 |

##### **Why It Matters for Testers**
- **Idempotent**: Repeated calls result in the same state.
- **Full Replacement**: Missing fields in the payload may delete existing data.

---

#### **PUT Request Example**

```http
PUT /users/101
Content-Type: application/json

{
  "name": "John",
  "email": "john@gmail.com",
  "status": "ACTIVE"
}
```

⚠️ **Warning**: If you omit fields like `email`, they may be **removed** after `PUT`.

##### **Real-World Example**
Updating a user’s profile:
```http
PUT /users/101
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "status": "INACTIVE"
}
```

---

#### **Automation Use Cases for PUT**

- Update entire profile (`PUT /users/{id}`).
- Replace configuration (`PUT /settings`).
- Reset resource state (`PUT /orders/{id}`).

##### **Validation Checklist**
- Status code = `200 OK` or `204 No Content`.
- All fields updated correctly.
- DB reflects full replacement.

##### **Code Snippet: Validating PUT Response**
```java
// RestAssured example
String requestBody = "{ "name": "John", "email": "john@example.com" }";

Response response = given()
    .header("Content-Type", "application/json")
    .body(requestBody)
    .when()
    .put("/users/101");

// Assertions
response.then().statusCode(200);
response.then().body("name", equalTo("John"));
```

---

#### **Common PUT Mistakes ❌**

- **Assuming partial update**: `PUT` replaces the entire resource; missing fields may delete data.
- **Sending incomplete payload**: Always include all required fields.
- **Confusing `PUT` with `PATCH`**: Use `PATCH` for partial updates.

---

#### **PUT Interview Question**

**Q: Is `PUT` idempotent?**  
A: Yes. Multiple `PUT` requests result in the same state.

---

### **4️⃣ PATCH Method**

#### **What is PATCH?**

`PATCH` is used to **partially update a resource**.

Example:
```http
PATCH /users/101
```

Meaning:
> “Update only specified fields of user 101.”

---

#### **Key Characteristics of PATCH**

| **Aspect**      | **Behavior**          |
|------------------|-----------------------|
| Purpose          | Partial update        |
| Request Body     | ✅ Required           |
| Side Effects     | ✅ Yes                |
| Safe             | ❌ No                 |
| Idempotent       | ⚠️ Depends            |
| Cacheable        | ❌ No                 |

##### **Why It Matters for Testers**
- **Partial Updates**: Only specified fields are modified; others remain unchanged.
- **Idempotency**: Some `PATCH` implementations are not idempotent (e.g., incrementing counters).

---

#### **PATCH Request Example**

```http
PATCH /users/101
Content-Type: application/json

{
  "status": "BLOCKED"
}
```

Only `status` is updated; other fields like `name` and `email` remain unchanged.

##### **Real-World Example**
Blocking a user without modifying other details:
```http
PATCH /users/101
Content-Type: application/json

{
  "status": "BLOCKED"
}
```

---

#### **PUT vs PATCH (CRITICAL COMPARISON)**

| **Aspect**      | **PUT**               | **PATCH**             |
|------------------|-----------------------|-----------------------|
| Update type      | Full replace          | Partial               |
| Missing fields   | Removed               | Retained              |
| Idempotent       | ✅                    | ⚠️                    |
| Risk             | High                  | Medium                |

##### **Tester Rule**
> Use `PATCH` when available to avoid accidental data loss.

---

#### **PATCH Interview Question**

**Q: Why was `PATCH` introduced?**  
A: To allow partial updates without replacing the entire resource.

---

### **5️⃣ DELETE Method**

#### **What is DELETE?**

`DELETE` is used to **remove a resource**.

Example:
```http
DELETE /users/101
```

Meaning:
> “Remove user 101.”

---

#### **Key Characteristics of DELETE**

| **Aspect**      | **Behavior**          |
|------------------|-----------------------|
| Purpose          | Remove resource       |
| Request Body     | ❌ Rare               |
| Side Effects     | ✅ Yes                |
| Safe             | ❌ No                 |
| Idempotent       | ✅ Yes                |
| Cacheable        | ❌ No                 |

##### **Why It Matters for Testers**
- **Idempotent**: Deleting the same resource multiple times has no additional effect.
- **Soft Deletes**: Resources may not be physically removed but marked as inactive.

---

#### **DELETE – Hard vs Soft Delete (Awareness)**

- **Hard Delete**: Row removed from the database.
- **Soft Delete**: Status flag updated (most common).

##### **Tester Implication**
- `DELETE` may not remove the database row.
- Validate the status field instead of checking for existence.

##### **Real-World Example**
Soft-deleting a user:
```http
DELETE /users/101
```

Database:
```sql
UPDATE users SET status = 'DELETED' WHERE id = 101;
```

---

#### **Automation Use Cases for DELETE**

- Cleanup test data (`DELETE /test-users`).
- Remove temporary resources (`DELETE /sessions/{id}`).
- Negative scenario testing (e.g., deleting non-existent resources).

##### **Validation Checklist**
- Status code = `200 OK` or `204 No Content`.
- Resource inaccessible afterwards.
- Database reflects expected delete behavior.

##### **Code Snippet: Validating DELETE Response**
```java
// RestAssured example
Response response = given()
    .when()
    .delete("/users/101");

// Assertions
response.then().statusCode(204);

// Verify resource is inaccessible
Response getResponse = given()
    .when()
    .get("/users/101");
getResponse.then().statusCode(404);
```

---

#### **Common DELETE Mistakes ❌**

- **Assuming hard delete**: Always check for soft delete behavior.
- **Reusing deleted IDs**: Deleted IDs may still exist in logs or references.
- **Running `DELETE` in shared environments**: Avoid polluting shared test environments.

---

#### **DELETE Interview Question**

**Q: Is `DELETE` idempotent?**  
A: Yes. Deleting the same resource multiple times has the same effect.

---

### **Key Takeaways 🎯**

- **PUT** replaces the entire resource.
- **PATCH** updates partial fields (safer for incremental changes).
- **DELETE** removes resources (often via soft delete).
- **PUT** and **DELETE** are idempotent; **PATCH** depends on implementation.
- Use **PATCH** for partial updates to avoid accidental data loss.
