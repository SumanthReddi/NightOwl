---
sidebar_position: 8
---

# Running TestNG with Maven

This section connects **Maven**, **TestNG**, and **CI/CD pipelines** into one clear execution model.  
For automation testing engineers, this is where everything comes together.

If you understand this section well, you can:
- Run tests locally and in CI with confidence
- Control execution using Maven commands
- Switch suites, groups, browsers, and environments without code changes

---

## The Execution Chain (Big Picture)

```
Maven Command
     ↓
Maven Lifecycle (test / verify)
     ↓
Surefire or Failsafe Plugin
     ↓
TestNG Framework
     ↓
testng.xml
     ↓
Automation Tests
```

Every successful CI run follows this exact chain.

---

## Basic Test Execution

### Run All Tests

```bash
mvn test
```

What happens:
- Maven resolves dependencies
- Compiles code
- Surefire runs all TestNG tests
- Reports generated in `target/surefire-reports`

---

## Running a Specific TestNG XML File

### Using Surefire Configuration (pom.xml)

```xml
<suiteXmlFiles>
    <suiteXmlFile>src/test/resources/testng/smoke.xml</suiteXmlFile>
</suiteXmlFiles>
```

Run:
```bash
mvn test
```

---

### Overriding Suite at Runtime (CI-Friendly)

```bash
mvn test -DsuiteXmlFile=src/test/resources/testng/regression.xml
```

This is the **most common CI pattern**.

---

## Running Test Groups from Maven

### Group Configuration in XML

```xml
<groups>
    <run>
        <include name="smoke"/>
    </run>
</groups>
```

### Or via Maven Command

```bash
mvn test -Dgroups=smoke
```

Exclude groups:
```bash
mvn test -DexcludedGroups=slow
```

---

## Passing Parameters from Maven to TestNG

### Command Line

```bash
mvn test -Dbrowser=chrome -Denv=uat
```

### TestNG Code

```java
@Parameters({"browser", "env"})
public void setup(String browser, String env) {}
```

This avoids hardcoding environment details.

---

## Cross-Browser Execution Pattern (Industry Standard)

```xml
<suite parallel="tests" thread-count="2">

    <test name="Chrome">
        <parameter name="browser" value="chrome"/>
        <classes>
            <class name="tests.LoginTest"/>
        </classes>
    </test>

    <test name="Edge">
        <parameter name="browser" value="edge"/>
        <classes>
            <class name="tests.LoginTest"/>
        </classes>
    </test>

</suite>
```

Run with:
```bash
mvn test
```

---

## Running Tests with Maven Profiles

### pom.xml

```xml
<profile>
    <id>uat</id>
    <properties>
        <env>uat</env>
    </properties>
</profile>
```

Run:
```bash
mvn test -Puat
```

Profiles are heavily used in **CI/CD pipelines**.

---

## Running Integration / E2E Tests

Using Failsafe plugin:

```bash
mvn clean verify
```

- Surefire runs unit/UI/API tests
- Failsafe runs integration tests
- Build fails only after verification

---

## Common CI/CD Commands

| Command | Usage |
|------|------|
| `mvn clean test` | Fresh local/CI run |
| `mvn test -Puat` | Env-based execution |
| `mvn test -DsuiteXmlFile=smoke.xml` | Suite control |
| `mvn test -Dgroups=smoke` | Group execution |
| `mvn clean verify` | E2E pipeline |

---

## CI/CD Best Practices

- Never hardcode suite names
- Control execution via Maven flags
- Use profiles for environments
- Keep CI commands simple
- Archive reports from `target/`

---

## Common Mistakes

- Running `mvn test` without Surefire config
- Hardcoding browser/env in code
- Mixing profiles and parameters incorrectly
- Overusing parallel execution
- Debugging TestNG instead of Maven config

---

## Key Takeaways

- Maven is the entry point for execution
- Surefire bridges Maven and TestNG
- TestNG XML controls test logic
- Maven flags control execution behavior
- CI pipelines rely on Maven commands