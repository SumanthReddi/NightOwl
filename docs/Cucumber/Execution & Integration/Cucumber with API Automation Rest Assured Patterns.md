---
sidebar_position: 4
title: Cucumber with API Automation Rest Assured
---

# Cucumber with API Automation Rest Assured

Using Cucumber with Rest Assured enables behavior‑driven API automation. Proper architecture ensures tests remain **scalable, reusable, and maintainable**.

---

## Core Principle

Feature files describe **API behavior**  
Step definitions orchestrate **test actions**  
API client classes perform **Rest Assured requests**

---

## Recommended Layered Architecture

```
Feature Files
      ↓
Step Definitions
      ↓
API Client / Service Layer
      ↓
Rest Assured
```

Benefits:

- Centralized API logic
- Clean step definitions
- Easier maintenance

---

## API Feature File Design

Feature files should focus on **behavior**, not technical implementation.

Example:

```gherkin
Feature: Order API

Scenario: Create order
 Given I have valid user credentials
 When I create an order for "Wireless Headphones"
 Then the response status code should be 201
 And the order status should be "confirmed"
```

Avoid writing:

- Endpoints
- Headers
- JSON structures

in feature files.

---

## Step Definitions

Step definitions should:

- Translate Gherkin steps
- Call API client methods
- Store responses in scenario context

Example:

```java
public class OrderSteps {

 private APIClient apiClient;
 private ScenarioContext context;

 public OrderSteps(APIClient apiClient,ScenarioContext context){
     this.apiClient = apiClient;
     this.context = context;
 }

 @Given("I have valid user credentials")
 public void authenticate(){

     apiClient.authenticate("admin","password123");

 }

 @When("I create an order for {string}")
 public void createOrder(String product){

     Response response = apiClient.createOrder(product);
     context.setResponse(response);

 }

 @Then("the response status code should be {int}")
 public void validateStatus(int statusCode){

     Assert.assertEquals(context.getResponse().getStatusCode(),statusCode);

 }

}
```

Keep step definitions thin.

---

## API Client Layer

API client classes encapsulate Rest Assured calls.

Example:

```java
public class APIClient {

 private static final String BASE_URL = "https://api.example.com";
 private String token;

 public void authenticate(String user,String password){

     Response response =
         RestAssured.given()
             .contentType("application/json")
             .body("{\"username\":\""+user+"\",\"password\":\""+password+"\"}")
             .post(BASE_URL + "/auth/login");

     token = response.jsonPath().getString("token");

 }

 public Response createOrder(String product){

     String payload = "{\"product\":\""+product+"\",\"quantity\":1}";

     return RestAssured.given()
             .header("Authorization","Bearer "+token)
             .contentType("application/json")
             .body(payload)
             .post(BASE_URL + "/orders");

 }

}
```

Centralizing API logic improves reuse.

---

## Scenario Context

Responses should be stored in shared context.

Example:

```java
public class ScenarioContext {

 private Response response;

 public Response getResponse(){
     return response;
 }

 public void setResponse(Response response){
     this.response = response;
 }

}
```

This allows validation across multiple steps.

---

## Data Driven API Tests

Use Scenario Outline for multiple datasets.

Example:

```gherkin
Scenario Outline: Create orders
 Given I have valid user credentials
 When I create an order for "<product>"
 Then the response status code should be 201

Examples:
 | product |
 | Headphones |
 | Speaker |
```

---

## API + Database Validation

In enterprise systems, APIs often update databases.

Typical validation flow:

```
API Request
    ↓
Database Validation
```

Example:

```java
@Then("the order should exist in database")
public void validateDatabase(){

 String orderId = context.getResponse().jsonPath().getString("id");

 boolean exists = DatabaseHelper.orderExists(orderId);

 Assert.assertTrue(exists);

}
```

---

## Error Handling Scenarios

Example negative scenario:

```gherkin
Scenario: Unauthorized order creation
 Given I have invalid credentials
 When I create an order
 Then the response status code should be 401
```

Negative tests validate API robustness.

---

## CI/CD Considerations

API tests usually run earlier than UI tests.

Example pipeline:

```yaml
stages:
 - api-tests
 - ui-tests

api-tests:
 script:
  - mvn test -Dcucumber.filter.tags="@api"
```

API tests provide fast feedback.

---

## Common Anti Patterns

Avoid:

- Rest Assured code inside steps
- Hardcoded tokens
- Endpoints inside feature files
- Excessive response validation

Follow clean architecture principles.

---

## Interview Questions

**Where should Rest Assured logic exist in Cucumber frameworks?**

Inside API client/service classes.

---

**Should endpoints appear in feature files?**

No, feature files should describe behavior only.

---

**How are API responses shared across steps?**

Using scenario context objects.

---

## Key Takeaways

- Use layered architecture
- Separate behavior from implementation
- Centralize API logic
- Store responses in scenario context
- Use data driven scenarios