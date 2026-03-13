---
sidebar_position: 1
title: Flakiness Framework
---

## Flakiness Framework  

**Flaky tests** are tests that produce inconsistent results, passing sometimes and failing others without any changes to the code or environment. Flakiness undermines trust in test suites and delays feedback loops.

This section focuses on **how testers identify, address, and prevent flaky tests** using a structured framework.

---

### **What Causes Flaky Tests?**

1. **Race Conditions**: Tests depend on asynchronous operations that may not complete in time.
2. **Shared State**: Tests share data or resources, leading to conflicts.
3. **Environment Issues**: Unstable environments (e.g., network latency, resource constraints).
4. **Non-Deterministic Code**: Randomized inputs or outputs cause unpredictable behavior.
5. **External Dependencies**: Third-party services or APIs introduce variability.

##### **Tester Rule**
> Always assume tests are flaky until proven otherwise. Proactively monitor and address flakiness.

---

### **Impact of Flaky Tests**

- **Delayed Feedback**: Teams waste time debugging false failures.
- **Eroded Trust**: Testers and developers lose confidence in the test suite.
- **Slower Releases**: Flaky tests block pipelines, delaying deployments.

---

### **Framework to Address Flakiness**

#### **Step 1: Identify Flaky Tests**
- Monitor test results over time to detect patterns of inconsistency.
- Use tools like Jenkins, GitHub Actions, or Allure Reports to track failures.

##### **Code Snippet: Logging Test Failures**
```java
// Log test failures for analysis
try {
    given()
        .when()
        .get("/users/101")
        .then()
        .statusCode(200);
} catch (AssertionError e) {
    System.err.println("Test failed: " + e.getMessage());
    throw e;
}
```

#### **Step 2: Isolate Test Data**
- Use unique, isolated data for each test to prevent conflicts.

##### **Code Snippet: Generating Unique Data**
```java
// Generate unique email for each test
String uniqueEmail = "testuser_" + UUID.randomUUID() + "@example.com";

given()
    .body("{ \"name\": \"Test\", \"email\": \"" + uniqueEmail + "\" }")
    .when()
    .post("/users")
    .then()
    .statusCode(201);
```

#### **Step 3: Retry Mechanism**
- Implement retries for transient failures (e.g., network issues).

##### **Code Snippet: Adding Retry Logic**
```java
// Retry failed requests up to 3 times
int maxRetries = 3;
int attempt = 0;
Response response;

do {
    response = given()
        .when()
        .get("/users/101");

    attempt++;
} while (response.getStatusCode() != 200 && attempt < maxRetries);

response.then().statusCode(200);
```

#### **Step 4: Mock External Dependencies**
- Replace unreliable third-party services with mocks or stubs.

##### **Code Snippet: Mocking with WireMock**
```java
// Start WireMock server
WireMockServer wireMockServer = new WireMockServer();
wireMockServer.start();

// Stub response
wireMockServer.stubFor(get(urlPathEqualTo("/users/101"))
    .willReturn(aResponse()
        .withStatus(200)
        .withBody("{ \"id\": 101, \"name\": \"John\" }")));
```

#### **Step 5: Stabilize Environments**
- Ensure consistent and reliable test environments by automating setup and monitoring health.

##### **Code Snippet: Docker Compose for Stable Environments**
```yaml
version: '3'
services:
  api:
    image: example-api:latest
    ports:
      - "8080:8080"
  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: testuser
      POSTGRES_PASSWORD: testpassword
```

---

### **Best Practices for Preventing Flakiness**

1. **Use Unique Test Data**: Avoid conflicts by generating unique data for each test.
2. **Implement Retries**: Handle transient failures gracefully.
3. **Mock Dependencies**: Reduce reliance on unstable external services.
4. **Monitor Environments**: Use tools like Prometheus and Grafana to track environment stability.
5. **Review Test Design**: Ensure tests are deterministic and independent.

---

### **Common Pitfalls ❌**

- Ignoring flaky tests, assuming they will resolve themselves.
- Overusing retries, masking underlying issues.
- Not isolating test data, leading to shared state conflicts.
- Failing to monitor environments, causing instability.
- Writing non-deterministic tests with random inputs or outputs.

---

### **Interview-Ready Questions**

**Q: What is a flaky test?**  
A: A flaky test is a test that produces inconsistent results, passing sometimes and failing others without any changes to the code or environment.

**Q: How do you handle flaky tests?**  
A: Use strategies like retries, mocking dependencies, isolating test data, and stabilizing environments to address flakiness.

---

### **Key Takeaways 🎯**

- Flaky tests undermine trust in test suites and delay feedback loops.
- Use a structured framework to identify, address, and prevent flakiness.
- Implement best practices like unique test data, retries, and mocked dependencies.
- Avoid common pitfalls like ignoring flaky tests or overusing retries.
- Proactively monitor and stabilize environments to reduce flakiness.
