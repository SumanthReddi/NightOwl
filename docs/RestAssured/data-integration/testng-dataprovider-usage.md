---
title: TestNG DataProvider Usage
sidebar_position: 2
---

# 🔁 Using TestNG DataProvider for Parameterized API Testing

## 📘 Introduction

Parameterized testing is a powerful technique that allows you to execute the same test logic with multiple sets of input data. TestNG's `@DataProvider` annotation simplifies this process by enabling you to pass different datasets to your tests dynamically. In this section, we’ll explore how to use `@DataProvider` effectively in RestAssured-based API tests.

---

## 🧠 1. What Is TestNG DataProvider?

- **Definition**: The `@DataProvider` annotation provides a way to supply multiple sets of input data to a single test method.

### Key Features

- Supports complex datasets (e.g., arrays, objects)  
- Enables reuse of test logic  
- Helps test edge cases and invalid inputs  

---

## ⚙️ 2. How to Use @DataProvider in RestAssured Tests

### Basic Example

```java
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class UserTests {

    @DataProvider(name = "userData")
    public Object[][] provideUserData() {
        return new Object[][] {
            { "John", "john@example.com" },
            { "Jane", "jane@example.com" },
            { "InvalidName", "invalid-email" }
        };
    }

    @Test(dataProvider = "userData")
    public void testCreateUser(String name, String email) {
        CreateUserRequest requestBody = new CreateUserRequest(name, email);

        given()
            .header("Content-Type", "application/json")
            .body(requestBody)
        .when()
            .post("/users")
        .then()
            .statusCode(201);
    }
}
```

---

### Using External Data Sources

```java
@DataProvider(name = "externalUserData")
public Object[][] provideExternalUserData() throws Exception {
    ObjectMapper objectMapper = new ObjectMapper();
    List<UserData> userDataList = objectMapper.readValue(
        new File("src/test/resources/user-data.json"),
        new TypeReference<List<UserData>>() {}
    );

    Object[][] data = new Object[userDataList.size()][2];
    for (int i = 0; i < userDataList.size(); i++) {
        data[i][0] = userDataList.get(i).getName();
        data[i][1] = userDataList.get(i).getEmail();
    }
    return data;
}
```

---

## ✅ 3. Best Practices for Using @DataProvider

1. Keep data separate from code  
2. Include edge cases  
3. Log test data  

```java
System.out.println("Testing with name: " + name + ", email: " + email);
```

4. Handle large datasets efficiently  

---

## 🏁 Conclusion

TestNG's `@DataProvider` is a powerful tool for implementing parameterized testing in RestAssured. It helps improve coverage and reusability of your API tests.
