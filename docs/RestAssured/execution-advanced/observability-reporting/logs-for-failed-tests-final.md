---
title: Logs for Failed Tests
sidebar_position: 2
---

# Capturing Logs for Failed Tests in API Automation

## Introduction
When tests fail, detailed logs are invaluable for diagnosing the root cause. Capturing and organizing logs for failed tests ensures that developers and testers have the necessary information to debug issues quickly. In this section, we’ll explore strategies for capturing logs effectively in RestAssured-based API tests and integrating them into your reporting framework.

---

## 1. Why Capture Logs for Failed Tests?

### Challenges Without Proper Logging
- **Debugging Difficulties**: Lack of detailed logs makes it hard to identify why a test failed.
- **Time-Consuming Investigations**: Developers spend extra time reproducing and debugging issues.
- **Missed Insights**: Important details about request/response data or exceptions may be overlooked.

### Benefits of Logging
- **Actionable Insights**: Provide detailed information about failures for faster resolution.
- **Traceability**: Link logs to specific test cases for better traceability.
- **Improved Debugging**: Include request/response details, stack traces, and timestamps for context.

---

## 2. Strategies for Capturing Logs

### 1. Enable Request and Response Logging
RestAssured provides built-in logging capabilities to capture request and response details.

- **Example**:
```java
@Test
public void testWithLogging() {
    given()
        .log().all() // Log request details
    .when()
        .get("/users")
    .then()
        .log().all() // Log response details
        .statusCode(200);
}
```

- **Conditional Logging**:
```java
@Test
public void testWithConditionalLogging() {
    given()
        .log().ifValidationFails()
    .when()
        .get("/users")
    .then()
        .log().ifValidationFails()
        .statusCode(200);
}
```

---

### 2. Use Custom Loggers

- **Example: Using Log4j**

1. **Add Dependency**:
```xml
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.20.0</version>
</dependency>
```

2. **Configure Log4j**:
```xml
<Configuration status="WARN">
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d [%t] %-5level: %msg%n"/>
        </Console>
        <File name="File" fileName="logs/test-logs.log">
            <PatternLayout pattern="%d [%t] %-5level: %msg%n"/>
        </File>
    </Appenders>
    <Loggers>
        <Root level="info">
            <AppenderRef ref="Console"/>
            <AppenderRef ref="File"/>
        </Root>
    </Loggers>
</Configuration>
```

3. **Log Details in Tests**:
```java
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class UserTests {

    private static final Logger logger = LogManager.getLogger(UserTests.class);

    @Test
    public void testWithCustomLogging() {
        try {
            Response response = given()
                .header("Content-Type", "application/json")
            .when()
                .get("/users");

            logger.info("Request URL: " + response.getRequest().getUrl());
            logger.info("Response Status Code: " + response.getStatusCode());
            logger.info("Response Body: " + response.getBody().asString());

            response.then()
                .statusCode(200);
        } catch (Exception e) {
            logger.error("Test failed: " + e.getMessage(), e);
            Assert.fail("Test failed due to exception");
        }
    }
}
```

---

### 3. Attach Logs to Reports

- **Example: Attaching Logs to Allure Reports**
```java
import io.qameta.allure.Allure;
import java.nio.charset.StandardCharsets;

@Test
public void testWithAllureLogs() {
    try {
        Response response = given()
            .header("Content-Type", "application/json")
        .when()
            .get("/users");

        String logMessage = "Request URL: " + response.getRequest().getUrl() +
                            "\nResponse Status Code: " + response.getStatusCode() +
                            "\nResponse Body: " + response.getBody().asString();

        Allure.addAttachment("Test Logs", logMessage);

        response.then()
            .statusCode(200);
    } catch (Exception e) {
        Allure.addAttachment("Error Logs", e.getMessage());
        Assert.fail("Test failed due to exception");
    }
}
```

---

## 3. Best Practices for Logging

1. **Log Request and Response Details**:
   - Include headers, body, and status codes for both requests and responses.

2. **Use Conditional Logging**:
   - Log only when tests fail to avoid excessive noise.

3. **Organize Logs by Test Case**:
```java
logger.info("[testWithCustomLogging] Request URL: " + response.getRequest().getUrl());
```

4. **Store Logs Externally**:
   - Save logs to files or centralized logging systems (e.g., ELK Stack) for long-term storage.

5. **Integrate with Reporting Tools**:
   - Attach logs to reports for better visibility and debugging.

---

## Conclusion
Capturing logs for failed tests is essential for diagnosing issues and improving test reliability. By leveraging RestAssured's built-in logging, custom logging frameworks, and reporting tools, you can ensure that your logs provide actionable insights into test failures. In the next section, we’ll explore how to track key metrics to monitor the health and performance of your API tests.
