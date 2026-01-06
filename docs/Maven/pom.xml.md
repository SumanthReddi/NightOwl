---
sidebar_position: 4
---

## pom.xml – MASTER CONTROL FILE

If **TestNG XML controls test execution**, then **`pom.xml` controls the entire automation project**.

For an automation testing engineer, `pom.xml` is the **single most important Maven file**.  
It defines **dependencies, plugins, build behavior, test execution, Java version, and profiles**.

---

## What is `pom.xml`?

`pom.xml` stands for **Project Object Model**.

It is the **configuration heart** of a Maven project and answers questions like:
- What type of project is this?
- Which libraries does it use?
- How should tests be executed?
- Which Java version should be used?
- How does CI/CD run this project?

> If `pom.xml` is wrong, your automation framework will not build or run.

---

## Why `pom.xml` is Critical for Automation Engineers

In automation projects, `pom.xml` controls:

- Selenium / TestNG / RestAssured versions
- Test execution via Maven
- Integration with TestNG XML
- Parallel execution behavior
- Reporting plugins
- CI/CD compatibility

Mastering `pom.xml` is **mandatory** for professional automation engineers.

---

## Basic Structure of `pom.xml`

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.company.automation</groupId>
    <artifactId>ui-tests</artifactId>
    <version>1.0.0</version>

</project>
```

---

## Project Coordinates (Identity of Project)

```xml
<groupId>com.company.automation</groupId>
<artifactId>ui-tests</artifactId>
<version>1.0.0</version>
```

| Element | Meaning |
|------|--------|
| groupId | Organization / package namespace |
| artifactId | Project name |
| version | Project version |

These uniquely identify your automation project.

---

## `<properties>` – Centralized Configuration ⭐

```xml
<properties>
    <java.version>17</java.version>
    <selenium.version>4.21.0</selenium.version>
    <testng.version>7.10.2</testng.version>
</properties>
```

### Why Properties Matter
- Avoid hardcoding versions
- Easy upgrades
- Single source of truth

---

## `<dependencies>` – Libraries for Automation

```xml
<dependencies>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>${selenium.version}</version>
    </dependency>

    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>${testng.version}</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### Dependency Scope (Important)

| Scope | Usage |
|-----|------|
| compile | Default, used everywhere |
| test | Only during test execution |
| provided | Provided by runtime |
| runtime | Not needed for automation |

---

## `<build>` – How Project is Built

The `<build>` section controls:
- Test execution
- Compilation
- Plugins

---

## Maven Surefire Plugin (MOST IMPORTANT)

Surefire is the plugin that **runs TestNG tests**.

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.2.5</version>

            <configuration>
                <suiteXmlFiles>
                    <suiteXmlFile>src/test/resources/testng/smoke.xml</suiteXmlFile>
                </suiteXmlFiles>
            </configuration>
        </plugin>
    </plugins>
</build>
```

This connects:
- Maven → TestNG → testng.xml

---

## Running Different TestNG XML Files

```bash
mvn test -DsuiteXmlFile=src/test/resources/testng/regression.xml
```

Used heavily in CI/CD pipelines.

---

## Passing Parameters from Maven to Tests

```bash
mvn test -Dbrowser=chrome -Denv=uat
```

Access in TestNG:
```java
@Parameters("browser")
```

---

## Maven Compiler Plugin (Java Version Control)

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.11.0</version>
    <configuration>
        <source>${java.version}</source>
        <target>${java.version}</target>
    </configuration>
</plugin>
```

Prevents Java version mismatch issues.

---

## Maven Profiles (Environment-Based Execution)

```xml
<profiles>
    <profile>
        <id>uat</id>
        <properties>
            <env>uat</env>
        </properties>
    </profile>
</profiles>
```

Run with:
```bash
mvn test -Puat
```

---

## Common Mistakes in `pom.xml`

- Hardcoding versions everywhere
- Not using Surefire plugin
- Mixing test logic into plugins
- Ignoring Java version configuration
- Duplicating dependency versions

---

## Best Practices

- Always use `<properties>`
- Lock plugin versions
- Keep `pom.xml` clean and readable
- Separate test execution config from code
- Version control `pom.xml`

---

## Key Takeaways

- `pom.xml` is the brain of Maven automation projects
- Controls dependencies, execution, and CI behavior
- Surefire plugin is mandatory for TestNG
- Properties improve maintainability
- Mastering `pom.xml` = mastering Maven
