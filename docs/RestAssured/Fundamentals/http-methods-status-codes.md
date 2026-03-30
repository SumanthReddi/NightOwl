---
title: HTTP Methods and Status Codes
sidebar_position: 1
---

# 🌐 HTTP Methods and Status Codes

## 📘 Introduction

HTTP (HyperText Transfer Protocol) is the foundation of communication over the web. It defines how data is requested and transmitted between clients (e.g., browsers, mobile apps) and servers. Understanding HTTP methods and status codes is crucial for API testing because they form the backbone of how APIs interact with clients.

In this section, we’ll explore the most commonly used HTTP methods, their purposes, and the status codes that indicate the outcome of an API request.

---

## 🔧 HTTP Methods

HTTP methods, also known as HTTP verbs, define the type of action a client wants to perform on a resource. Below are the most frequently used HTTP methods in API testing:

### 1. GET

- **Purpose**: Retrieve data from a server  
- **Example**: Fetching a list of users from `/users`  

**Key Characteristics**:
- Safe: Does not modify server data  
- Idempotent: Multiple identical requests produce the same result  

**Use Case**: Reading information without altering it  

---

### 2. POST

- **Purpose**: Send data to the server to create a new resource  
- **Example**: Creating a new user by sending a JSON payload to `/users`  

**Key Characteristics**:
- Not safe: Modifies server data  
- Not idempotent: Multiple identical requests may create multiple resources  

**Use Case**: Submitting forms, uploading files, or creating records  

---

### 3. PUT

- **Purpose**: Update an existing resource or create one if it doesn’t exist  
- **Example**: Updating user details by sending data to `/users/{id}`  

**Key Characteristics**:
- Not safe: Modifies server data  
- Idempotent: Multiple identical requests produce the same result  

**Use Case**: Full updates to a resource  

---

### 4. PATCH

- **Purpose**: Partially update an existing resource  
- **Example**: Updating only the email field of a user at `/users/{id}`  

**Key Characteristics**:
- Not safe: Modifies server data  
- Idempotent: Multiple identical requests produce the same result  

**Use Case**: Incremental updates to a resource  

---

### 5. DELETE

- **Purpose**: Remove a resource from the server  
- **Example**: Deleting a user by calling `/users/{id}`  

**Key Characteristics**:
- Not safe: Modifies server data  
- Idempotent: Multiple identical requests produce the same result  

**Use Case**: Removing records or cleaning up data  

---

## 📊 HTTP Status Codes

HTTP status codes are three-digit numbers returned by the server to indicate the result of an API request. They are grouped into five categories based on their first digit:

### 1. 1xx (Informational)

- Indicates that the request has been received and is being processed  
- Example: `100 Continue`  

---

### 2. 2xx (Success)

- Indicates that the request was successfully received, understood, and accepted  

**Common Examples**:
- `200 OK`: The request was successful  
- `201 Created`: A new resource was successfully created  
- `204 No Content`: The request was successful, but there is no content to send in the response  

---

### 3. 3xx (Redirection)

- Indicates that further action is needed to complete the request  

**Common Examples**:
- `301 Moved Permanently`: The resource has been permanently moved to a new URL  
- `302 Found`: The resource is temporarily located at a different URL  

---

### 4. 4xx (Client Errors)

- Indicates that the client made an error in the request  

**Common Examples**:
- `400 Bad Request`: The server cannot process the request due to a client error  
- `401 Unauthorized`: Authentication is required or has failed  
- `403 Forbidden`: The client does not have permission to access the resource  
- `404 Not Found`: The requested resource could not be found  

---

### 5. 5xx (Server Errors)

- Indicates that the server encountered an error while processing the request  

**Common Examples**:
- `500 Internal Server Error`: A generic error message indicating something went wrong on the server  
- `502 Bad Gateway`: The server received an invalid response from an upstream server  
- `503 Service Unavailable`: The server is temporarily unable to handle the request  

---

## 🎯 Why Are HTTP Methods and Status Codes Important?

Understanding HTTP methods and status codes is essential for several reasons:

### 1. API Testing

- Knowing which method to use ensures you interact with the API correctly  
- Validating status codes helps confirm whether the API behaves as expected  

---

### 2. Debugging

- Status codes provide immediate feedback on what went wrong during a request  
- For example, a `401 Unauthorized` status code indicates an authentication issue  

---

### 3. Framework Design

- When building automation frameworks, you can create reusable methods for handling specific HTTP methods and validating status codes  

---

## ✅ Best Practices

1. **Use the Right Method**  
   Always use the appropriate HTTP method for the intended action (e.g., `GET` for reading, `POST` for creating)

2. **Validate Status Codes**  
   Always validate the status code in your tests to ensure the API behaves as expected  

3. **Handle Edge Cases**  
   Test scenarios like invalid endpoints (`404`), unauthorized access (`401`), and server errors (`500`)  

4. **Document Behavior**  
   Clearly document the expected behavior of each endpoint, including the HTTP method and possible status codes  

---

## 🏁 Conclusion

HTTP methods and status codes are fundamental to understanding how APIs work. By mastering these concepts, you’ll be better equipped to design, test, and debug APIs effectively. In the next section, we’ll dive deeper into headers, JSON basics, and error handling to further solidify your understanding of API fundamentals.
