---
title: Mock APIs
sidebar_position: 5
---

# 🧪 Mocking APIs for Testing

## 📘 Introduction

Mocking APIs involves simulating API responses without relying on the actual backend. This is particularly useful when:

- The backend is unavailable or under development.  
- You want to test edge cases or error scenarios that are difficult to reproduce with a live API.  
- You need to isolate your tests from external dependencies to improve reliability and speed.  

In this section, we’ll explore how to mock APIs using tools like **WireMock** and **RestAssured's MockMvc** integration.

---

## 🔍 1. Why Use Mock APIs?

### Benefits of Mocking

- Isolation: Test your application logic without depending on external services.  
- Control: Simulate specific responses (e.g., success, failure, edge cases) to validate all scenarios.  
- Speed: Mocked APIs respond faster than real APIs, reducing test execution time.  
- Reliability: Avoid flaky tests caused by network issues or backend downtime.  

---

## ⚙️ 2. Tools for Mocking APIs

### 1. WireMock

WireMock is a popular library for mocking HTTP services. It allows you to define stubs and simulate API responses.

#### Key Features

- Define custom responses for specific requests.  
- Simulate delays, errors, and edge cases.  
- Works as a standalone server or embedded in tests.  

---

#### How to Use WireMock

##### Add Dependency

```xml
<dependency>
    <groupId>com.github.tomakehurst</groupId>
    <artifactId>wiremock</artifactId>
    <version>3.0.1</version>
    <scope>test</scope>
</dependency>
```

---

##### Set Up a Mock Server

```java
import static com.github.tomakehurst.wiremock.client.WireMock.*;

@BeforeClass
public void setup() {
    configureFor("localhost", 8080);
    stubFor(get(urlEqualTo("/users/1"))
        .willReturn(aResponse()
            .withStatus(200)
            .withHeader("Content-Type", "application/json")
            .withBody("{ "id": 1, "name": "John Doe" }")));
}
```

---

##### Test Against the Mock Server

```java
@Test
public void testMockApiResponse() {
    given()
    .when()
        .get("http://localhost:8080/users/1")
    .then()
        .statusCode(200)
        .body("name", equalTo("John Doe"));
}
```

---

### 2. RestAssured's MockMvc Integration

If you’re testing a Spring-based application, you can use RestAssured's MockMvc module to mock API responses.

#### Key Features

- Integrate directly with Spring's MockMvc.  
- Simulate API responses without starting a real server.  
- Ideal for unit and integration testing.  

---

#### How to Use MockMvc

##### Add Dependency

```xml
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>spring-mock-mvc</artifactId>
    <version>5.3.0</version>
    <scope>test</scope>
</dependency>
```

---

##### Set Up MockMvc

```java
import static io.restassured.module.mockmvc.RestAssuredMockMvc.*;

@BeforeClass
public void setup() {
    MockMvc mockMvc = MockMvcBuilders.standaloneSetup(new UserController()).build();
    RestAssuredMockMvc.mockMvc(mockMvc);
}
```

---

##### Test Against MockMvc

```java
@Test
public void testMockMvcResponse() {
    given()
    .when()
        .get("/users/1")
    .then()
        .statusCode(200)
        .body("name", equalTo("John Doe"));
}
```

---

## ✅ 3. Best Practices for Mocking APIs

1. Simulate Realistic Scenarios  
2. Keep Mocks Simple  
3. Use Dynamic Responses  

```java
stubFor(post(urlEqualTo("/users"))
    .withRequestBody(containing("John"))
    .willReturn(aResponse()
        .withStatus(201)
        .withBody("{ "id": 1, "name": "John" }")));
```

4. Clean Up Mocks  

```java
@AfterClass
public void tearDown() {
    WireMock.reset();
}
```

5. Combine Mocking with Live Tests  

---

## 🏁 Conclusion

Mocking APIs is a powerful technique for isolating tests, simulating edge cases, and improving test reliability. By leveraging tools like WireMock and RestAssured's MockMvc integration, you can create robust and efficient tests that are independent of external dependencies. In the next section, we’ll explore data cleanup strategies to ensure a clean test environment.
