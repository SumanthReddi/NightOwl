---
title: Data-Driven Testing
sidebar_position: 1
---

# 📊 Data-Driven Testing in RestAssured

## 📘 Introduction

Data-driven testing is a powerful technique that allows you to execute the same test logic with multiple sets of input data. This approach ensures comprehensive test coverage by validating your API against various scenarios, edge cases, and invalid inputs.

---

## 🧠 What Is Data-Driven Testing?

- Run same test with multiple inputs  
- Improves coverage  
- Reduces duplication  
- Easy scalability  

---

## ⚙️ Using TestNG DataProvider

```java
@DataProvider(name = "userData")
public Object[][] provideUserData() {
    return new Object[][] {
        { "John", "john@example.com" },
        { "Jane", "jane@example.com" }
    };
}
```

```java
@Test(dataProvider = "userData")
public void testCreateUser(String name, String email) {
    given().body(new CreateUserRequest(name, email))
    .when().post("/users")
    .then().statusCode(201);
}
```

---

## 📦 Using JSON Files

```json
[
  { "name": "John", "email": "john@example.com" }
]
```

---

## 📑 Using Excel

```java
ExcelReader.readExcelData("test.xlsx", "Sheet1");
```

---

## ✅ Best Practices

1. Keep data separate  
2. Include edge cases  
3. Log test data  
4. Handle large data  
5. Document data  

---

## 🏁 Conclusion

Data-driven testing improves coverage, maintainability, and scalability of your API tests.
