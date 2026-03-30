---
title: Project Setup with Maven and Gradle
sidebar_position: 1
---

# 🛠️ Project Setup with Maven and Gradle

## 📘 Introduction

Before you can start writing API tests with RestAssured, you need to set up your project environment. This involves configuring a build tool like **Maven** or **Gradle**, adding the necessary dependencies, and organizing your project structure. Both Maven and Gradle are widely used in Java projects, and they simplify dependency management, compilation, and execution of tests.

In this section, we’ll walk through the steps to set up a project using both Maven and Gradle, including adding RestAssured dependencies and configuring your IDE.

---

## 🚀 Why Use Maven or Gradle?

Build tools like Maven and Gradle streamline the development process by:

1. **Managing Dependencies**  
   Automatically download and include libraries (e.g., RestAssured, TestNG) required for your project

2. **Standardizing Project Structure**  
   Provide a consistent directory layout for source code, tests, and resources

3. **Simplifying Builds**  
   Compile, test, and package your project with a single command

4. **Integration with CI/CD**  
   Easily integrate with tools like Jenkins, GitLab CI, and others for automated builds and testing

---

## ⚙️ Setting Up with Maven

### Step 1: Install Maven

- Download and install Maven from the official website  
- Verify the installation:

```bash
mvn -v
```

---

### Step 2: Create a Maven Project

```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=api-tests -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

**Project Structure**
```
api-tests/
├── src/
│   ├── main/
│   └── test/
├── pom.xml
```

---

### Step 3: Add RestAssured Dependencies

```xml
<dependencies>
    <!-- RestAssured -->
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>rest-assured</artifactId>
        <version>5.3.0</version>
        <scope>test</scope>
    </dependency>

    <!-- TestNG -->
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.7.0</version>
        <scope>test</scope>
    </dependency>

    <!-- JSON Schema Validation -->
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>json-schema-validator</artifactId>
        <version>5.3.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

---

### Step 4: Configure Your IDE

- IntelliJ IDEA → `File > Open > Select project folder`
- Eclipse → `File > Import > Existing Maven Project`

---

## ⚙️ Setting Up with Gradle

### Step 1: Install Gradle

```bash
gradle -v
```

---

### Step 2: Create a Gradle Project

```bash
gradle init --type java-application
```

**Project Structure**
```
api-tests/
├── src/
│   ├── main/
│   └── test/
├── build.gradle
```

---

### Step 3: Add RestAssured Dependencies

```groovy
plugins {
    id 'java'
}

repositories {
    mavenCentral()
}

dependencies {
    // RestAssured
    testImplementation 'io.rest-assured:rest-assured:5.3.0'

    // TestNG
    testImplementation 'org.testng:testng:7.7.0'

    // JSON Schema Validation
    testImplementation 'io.rest-assured:json-schema-validator:5.3.0'
}
```

---

### Step 4: Configure Your IDE

- IntelliJ IDEA → `File > Open > Select project folder`
- Eclipse → Install Buildship plugin and import as Gradle project

---

## 🧪 Verifying the Setup

### 1. Create a Simple Test

```java
import io.restassured.RestAssured;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class FirstAPITest {

    @Test
    public void testGetUsers() {
        RestAssured.baseURI = "https://reqres.in/api";

        given()
            .when()
            .get("/users")
            .then()
            .statusCode(200)
            .body("data[0].first_name", equalTo("George"));
    }
}
```

---

### 2. Run the Test

**Maven**
```bash
mvn test
```

**Gradle**
```bash
gradle test
```

---

### 3. Check the Results

- If the setup is correct, the test should pass successfully

---

## ✅ Best Practices for Project Setup

1. **Use Version Control**
```bash
git init
git add .
git commit -m "Initial project setup"
```

2. **Organize Tests**  
   Place tests under `src/test/java` with meaningful packages

3. **Externalize Configuration**  
   Use config files or environment variables

4. **Automate Builds**  
   Integrate with CI/CD tools

5. **Keep Dependencies Updated**

---

## 🏁 Conclusion

Setting up your project with Maven or Gradle is the first step toward building a robust API automation framework. By following the steps outlined above, you can configure your environment, add RestAssured dependencies, and write your first API test. In the next section, we’ll dive deeper into the `given-when-then` structure of RestAssured and explore how to write more complex API tests.
