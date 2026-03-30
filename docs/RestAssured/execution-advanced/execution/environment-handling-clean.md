---
title: Environment Handling
sidebar_position: 2
---

# Environment Handling in API Testing

## Introduction
API tests often need to run across multiple environments, such as Development (DEV), Quality Assurance (QA), Staging, and Production (PROD). Each environment may have different configurations, such as base URLs, authentication tokens, or database connections. Proper environment handling ensures that your tests are portable, maintainable, and can execute seamlessly across different setups.

In this section, we’ll explore strategies for managing environments effectively in RestAssured-based API testing.

---

## Why Is Environment Handling Important?

### Challenges Without Proper Environment Handling
- **Hardcoding Issues**: Tests fail when hardcoded values (e.g., base URLs) change between environments.
- **Configuration Conflicts**: Tests may use incorrect settings, leading to unexpected behavior.
- **Scalability Problems**: Managing multiple environments manually becomes cumbersome as the number of environments grows.

### Benefits of Environment Handling
- **Portability**: Tests can run in any environment without modification.
- **Maintainability**: Centralize configuration management for easier updates.
- **Flexibility**: Switch between environments effortlessly during test execution.

---

## Strategies for Environment Handling

### 1. Use Configuration Files
Store environment-specific settings in external configuration files (e.g., `.properties`, `.json`, `.yaml`).

#### Example: Using `.properties` Files

- Create separate files for each environment:

`config-dev.properties`:
```properties
base.uri=https://dev.api.example.com
auth.token=dev-token
```

`config-prod.properties`:
```properties
base.uri=https://prod.api.example.com
auth.token=prod-token
```

- Load the appropriate file based on a profile:

```java
import java.io.InputStream;
import java.util.Properties;

public class ConfigLoader {
    private static final Properties properties = new Properties();
    private static final String ENV = System.getProperty("env", "dev"); // Default to 'dev'

    static {
        String configFile = "config-" + ENV + ".properties";
        try (InputStream input = ConfigLoader.class.getClassLoader().getResourceAsStream(configFile)) {
            if (input == null) {
                throw new RuntimeException("Unable to find " + configFile);
            }
            properties.load(input);
        } catch (Exception e) {
            throw new RuntimeException("Error loading " + configFile, e);
        }
    }

    public static String getProperty(String key) {
        return properties.getProperty(key);
    }
}
```

- Use the configuration in tests:

```java
@BeforeClass
public void setup() {
    RestAssured.baseURI = ConfigLoader.getProperty("base.uri");
    RestAssured.requestSpecification = given()
        .header("Authorization", "Bearer " + ConfigLoader.getProperty("auth.token"));
}
```

---

### 2. Use Environment Variables

- Set Environment Variables:

Linux/Mac:
```bash
export BASE_URI=https://dev.api.example.com
export AUTH_TOKEN=dev-token
```

Windows:
```cmd
set BASE_URI=https://dev.api.example.com
set AUTH_TOKEN=dev-token
```

- Access in tests:

```java
@BeforeClass
public void setup() {
    String baseUri = System.getenv("BASE_URI");
    String authToken = System.getenv("AUTH_TOKEN");

    RestAssured.baseURI = baseUri;
    RestAssured.requestSpecification = given()
        .header("Authorization", "Bearer " + authToken);
}
```

---

### 3. Use CI/CD Pipeline Variables

```yaml
env:
  BASE_URI: ${{ secrets.BASE_URI }}
  AUTH_TOKEN: ${{ secrets.AUTH_TOKEN }}
```

---

### 4. Use Command-Line Arguments

```bash
mvn test -Denv=prod
```

```java
@BeforeClass
public void setup() {
    String env = System.getProperty("env", "dev");
    String baseUri = ConfigLoader.getProperty(env + ".base.uri");
    String authToken = ConfigLoader.getProperty(env + ".auth.token");

    RestAssured.baseURI = baseUri;
    RestAssured.requestSpecification = given()
        .header("Authorization", "Bearer " + authToken);
}
```

---

## Best Practices for Environment Handling

1. **Centralize Configuration**
2. **Validate Configuration Values**
3. **Use Defaults Wisely**
4. **Secure Sensitive Data**
5. **Test Across Environments**

---

## Conclusion
Proper environment handling is essential for ensuring that your API tests are portable, maintainable, and reliable across different configurations.
