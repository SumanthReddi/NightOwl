---
sidebar_position: 2
title: Schema Evolution
---

## Schema Evolution  

**Schema evolution** refers to changes in the structure of an API's request/response over time. As APIs evolve, ensuring backward compatibility and smooth transitions is critical to avoid breaking existing consumers.

This section focuses on **how testers handle schema changes** and validate that updates do not disrupt existing functionality.

---

### **What is Schema Evolution?**

- **Definition**: The process of modifying an API's schema (e.g., adding/removing fields, changing data types) while maintaining compatibility with existing consumers.
- **Why It Matters**: Prevents disruptions for clients relying on the API.

##### **Tester Rule**
> Always validate both old and new versions of the schema during transitions to ensure backward compatibility.

---

### **Types of Schema Changes**

#### **1️⃣ Backward-Compatible Changes**
- **Adding Optional Fields**: New fields are ignored by older consumers.
- **Adding Endpoints**: New endpoints do not affect existing ones.

##### **Example**
Adding a new optional field:
```json
{
  "id": 101,
  "name": "John",
  "email": "john@example.com", // New optional field
  "status": "ACTIVE"
}
```

#### **2️⃣ Breaking Changes**
- **Removing Fields**: Older consumers may rely on removed fields.
- **Changing Data Types**: Invalidates assumptions made by consumers.
- **Renaming Fields**: Breaks consumers expecting the old name.

##### **Example**
Removing a required field:
```json
{
  "id": 101,
  "name": "John"
  // "status" field removed → Breaking change
}
```

---

### **Strategies for Schema Evolution**

#### **1️⃣ Versioning**
- Use versioned endpoints to support multiple schemas simultaneously.
- Example:
  - `/v1/users`
  - `/v2/users`

##### **Code Snippet: Versioned Endpoint**
```java
// Test v1 endpoint
given()
    .when()
    .get("/v1/users/101")
    .then()
    .body("status", equalTo("ACTIVE"));

// Test v2 endpoint
given()
    .when()
    .get("/v2/users/101")
    .then()
    .body("isActive", equalTo(true)); // Field renamed in v2
```

#### **2️⃣ Deprecation**
- Mark fields or endpoints as deprecated before removing them.
- Communicate deprecation timelines to consumers.

##### **Example**
Deprecating a field:
```json
{
  "id": 101,
  "name": "John",
  "email": "john@example.com",
  "status": "ACTIVE", // Deprecated field
  "isActive": true    // New field
}
```

#### **3️⃣ Default Values**
- Provide default values for new fields to ensure compatibility.

##### **Example**
Adding a new field with a default value:
```json
{
  "id": 101,
  "name": "John",
  "isVerified": false // New field with default value
}
```

---

### **Testing Schema Evolution**

#### **1️⃣ Validate Backward Compatibility**
- Ensure older consumers can still use the API without errors.

##### **Code Snippet: Validating Old Schema**
```java
// Test old schema
given()
    .when()
    .get("/users/101")
    .then()
    .body("status", equalTo("ACTIVE")); // Ensure old field exists
```

#### **2️⃣ Validate New Features**
- Test new fields or endpoints to ensure they work as expected.

##### **Code Snippet: Validating New Schema**
```java
// Test new schema
given()
    .when()
    .get("/users/101")
    .then()
    .body("isActive", equalTo(true)); // Ensure new field exists
```

#### **3️⃣ Handle Deprecation**
- Verify deprecated fields still work during the transition period.

##### **Code Snippet: Testing Deprecated Field**
```java
// Test deprecated field
given()
    .when()
    .get("/users/101")
    .then()
    .body("status", equalTo("ACTIVE")); // Deprecated field
```

---

### **Best Practices for Schema Evolution**

1. **Communicate Changes**: Inform consumers about upcoming changes (e.g., via release notes).
2. **Use Versioning**: Support multiple versions during transitions.
3. **Deprecate Gradually**: Allow time for consumers to adapt before removing features.
4. **Test Thoroughly**: Validate both old and new schemas to ensure compatibility.
5. **Monitor Usage**: Track usage of deprecated fields to determine when they can be removed.

---

### **Common Pitfalls ❌**

- Making breaking changes without notice.
- Ignoring backward compatibility during schema updates.
- Failing to test deprecated fields during transitions.
- Overloading a single version with too many changes.

---

### **Interview-Ready Questions**

**Q: What is schema evolution?**  
A: Schema evolution refers to changes in an API's structure over time, such as adding or removing fields.

**Q: How do you handle breaking changes in an API?**  
A: Use versioning, deprecate features gradually, and communicate changes to consumers.

---

### **Key Takeaways 🎯**

- Schema evolution ensures APIs remain functional as they grow and change.
- Use strategies like versioning, deprecation, and default values to maintain compatibility.
- Validate both old and new schemas during transitions.
- Communicate changes clearly to avoid disruptions for consumers.
- Avoid common pitfalls like making breaking changes without notice.
