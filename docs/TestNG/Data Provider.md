---
sidebar_position: 3
---

## DATAPROVIDER - DATA-DRIVEN TESTING 

**Problem:** Writing 10 login tests for 10 users = 10x code duplication.

**Solution:** One test method + DataProvider feeds different data.

```java
@DataProvider(name = "loginCredentials")
public Object[][] getLoginData() {
    // Returns 2D array: rows = test cases, columns = parameters
    return new Object[][] {
        {"admin", "admin123", true},      // Row 1: Valid admin
        {"user1", "pass1", true},         // Row 2: Valid user
        {"user2", "wrong", false},        // Row 3: Invalid password
        {"", "pass1", false}              // Row 4: Empty username
    };
}

@Test(dataProvider = "loginCredentials")
public void testLogin(String username, String password, boolean expectedSuccess) {
    enterCredentials(username, password);
    boolean actual = isLoginSuccessful();
    assertEquals(expectedSuccess, actual, 
        "Login failed for: " + username);
}
```

**Result:** **4 tests run from 1 method** → Clean, maintainable code.