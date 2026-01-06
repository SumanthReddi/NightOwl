---
sidebar_position: 9
---

## Maven Profiles – Deep Dive (Environment‑Based Execution)

In real automation projects, tests must run against **multiple environments**  
(dev, uat, staging, prod) **without changing code**.

**Maven Profiles** solve this problem cleanly.

For automation testing engineers, profiles are the **bridge between code and environments**, especially in CI/CD pipelines.

---

## What is a Maven Profile?

A **Maven profile** is a named configuration that:
- Activates conditionally
- Overrides properties, dependencies, or plugins
- Changes build behavior per environment

Think of a profile as an **environment switch**.

---

## Why Profiles Are Critical in Automation

Without profiles:
- URLs are hardcoded
- Environment logic leaks into test code
- CI pipelines become messy
- Mistakes happen in prod runs

With profiles:
- Same codebase
- Different environments
- Clean separation of concerns

---

## Common Automation Use Cases for Profiles

Profiles are commonly used to control:
- Environment URLs (dev / uat / prod)
- Browser type
- Execution flags
- Reporting behavior
- Feature toggles

---

## Basic Profile Definition

```xml
<profiles>
    <profile>
        <id>uat</id>
        <properties>
            <env>uat</env>
            <base.url>https://uat.example.com</base.url>
        </properties>
    </profile>
</profiles>
```

Activate with:
```bash
mvn test -Puat
```

---

## Multiple Environment Profiles (Real Project)

```xml
<profiles>

    <profile>
        <id>dev</id>
        <properties>
            <env>dev</env>
            <base.url>https://dev.example.com</base.url>
        </properties>
    </profile>

    <profile>
        <id>uat</id>
        <properties>
            <env>uat</env>
            <base.url>https://uat.example.com</base.url>
        </properties>
    </profile>

    <profile>
        <id>prod</id>
        <properties>
            <env>prod</env>
            <base.url>https://prod.example.com</base.url>
        </properties>
    </profile>

</profiles>
```

---

## Accessing Profile Properties in Tests

### Via TestNG Parameters

```java
@Parameters("env")
public void setup(String env) {
    System.out.println(env);
}
```

### Via System Properties

```java
String baseUrl = System.getProperty("base.url");
```

Maven automatically exposes profile properties as **system properties**.

---

## Profiles + Surefire Plugin

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <configuration>
        <systemPropertyVariables>
            <env>${env}</env>
            <base.url>${base.url}</base.url>
        </systemPropertyVariables>
    </configuration>
</plugin>
```

This ensures:
- Profile values reach TestNG
- No hardcoding in code

---

## Default Profile

```xml
<profile>
    <id>default</id>
    <activation>
        <activeByDefault>true</activeByDefault>
    </activation>
    <properties>
        <env>dev</env>
    </properties>
</profile>
```

Used when **no `-P` is specified**.

---

## Profile Activation Methods

| Method | Example |
|-----|-------|
| Command line | `mvn test -Puat` |
| Default | `activeByDefault=true` |
| Property | Activate if property exists |
| OS | Activate per OS |

Command line activation is **most common in CI**.

---

## Profiles in CI/CD Pipelines

### Jenkins Example

```bash
mvn clean test -Puat
```

### GitLab CI Example

```yaml
script:
  - mvn clean test -Puat
```

Profiles make pipelines:
- Predictable
- Safe
- Environment‑aware

---

## Profiles vs TestNG XML Parameters

| Profiles | TestNG XML |
|-------|-----------|
| Environment config | Test execution config |
| Maven‑level | Test‑level |
| CI‑friendly | Test‑focused |
| Recommended for env | Not recommended for env |

➡️ **Use profiles for environments, XML for execution logic**

---

## Common Mistakes

- Hardcoding URLs in code
- Too many profiles with same logic
- Mixing environment logic in TestNG XML
- Forgetting default profile
- Overusing profiles for simple flags

---

## Best Practices

- Use profiles only for environment differences
- Keep property names consistent
- Combine profiles with TestNG XML cleanly
- Use one profile per environment
- Always document profiles

---

## Key Takeaways

- Maven profiles enable environment‑based execution
- Same code, multiple environments
- Essential for CI/CD automation
- Profiles + Surefire = clean design
- Mandatory skill for automation engineers