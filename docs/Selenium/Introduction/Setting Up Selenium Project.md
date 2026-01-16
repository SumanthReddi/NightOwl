---
sidebar_position: 4
---

# Setting Up Selenium Project

This section explains how to set up a **production-ready Selenium project**
using Maven.

---

## Project Type

Selenium projects are typically created as:
- **Maven projects**
- Integrated with **TestNG / Cucumber**
- Executed via **CLI and CI/CD pipelines**

---

## Recommended Folder Structure

```
project-root/
├── src/
│   ├── main/
│   │   └── java/
│   │       └── utilities/
│   └── test/
│       └── java/
│           ├── tests/
│           └── pages/
├── pom.xml
└── testng.xml
```

This structure supports scalability and clean separation.

---

## pom.xml – Core Dependencies

Minimum required dependencies:

```xml
<dependencies>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>4.x.x</version>
    </dependency>

    <dependency>
        <groupId>io.github.bonigarcia</groupId>
        <artifactId>webdrivermanager</artifactId>
        <version>5.x.x</version>
    </dependency>

    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.x.x</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

---

## WebDriverManager

WebDriverManager automatically:
- Downloads browser drivers
- Manages driver versions
- Avoids manual setup

Example usage:
```java
WebDriverManager.chromedriver().setup();
```

---

## Browser Compatibility

Ensure:
- Browser version matches driver version
- Selenium version is Selenium 4+
- Java version is compatible (LTS preferred)

---

## IDE Configuration

Recommended IDEs:
- IntelliJ IDEA
- Eclipse
- VS Code

Enable:
- Maven auto-import
- TestNG plugin
- Proper JDK configuration

---

## Execution Verification

Run a sample test to verify setup:
- Browser launches
- No driver errors
- Test executes successfully

---

## Common Setup Issues ❌

- Version mismatch
- Missing TestNG plugin
- Incorrect project structure
- Hardcoded driver paths

---

## Best Practices ✅

- Always use WebDriverManager
- Keep dependencies updated
- Separate test and page layers
- Commit pom.xml to version control

---

## Key Takeaways

- Maven is standard for Selenium projects
- WebDriverManager simplifies setup
- Clean structure prevents future refactoring
- Setup quality impacts long-term stability

---

## What’s Next?

👉 **Launching Browsers**
