---
sidebar_position: 9
---

# Maven Profiles

## What is a Maven Profile?

A **Maven profile** is a named configuration that:
- Activates conditionally
- Overrides properties, dependencies, or plugins
- Alters build behavior **without changing code**

Profiles act as **build‑time switches**.

---

## Why Profiles Are Critical (Automation Perspective)

Profiles are the **bridge between test code and CI pipelines**.

Without profiles:
- URLs get hardcoded
- Pipelines contain logic
- Environment mistakes happen
- Builds become fragile

With profiles:
- Same codebase
- Environment isolation
- Execution intent is explicit
- CI runs are predictable

---

# PART 1: Environment‑Based Profiles

## Typical Environments
- dev
- uat
- staging
- prod

---

## Basic Environment Profile

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

Run:
```bash
mvn test -Puat
```

---

## Multiple Environment Profiles (Real Setup)

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

## Accessing Profile Properties in Code

```java
String env = System.getProperty("env");
String baseUrl = System.getProperty("base.url");
```

---

## Profiles + Surefire Plugin (Mandatory Wiring)

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

---

## Default Profile (activeByDefault)

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

### Important Notes
- Applied only when **no `-P` is specified**
- Dangerous in CI if misused
- Acceptable only for local dev

---

# PART 2: Execution‑Based Profiles (Smoke / Regression / Sanity)

Execution profiles define **WHAT tests run**, not **WHERE they run**.

---

## Why Execution Profiles Matter

Without them:
- Pipelines grow complex
- Test intent is unclear
- Execution becomes inconsistent

With them:
- One command = one intent
- CI jobs stay clean
- Builds are self‑documenting

---

## TestNG Group‑Based Execution

```java
@Test(groups = {"smoke"})
public void loginSmokeTest() {}

@Test(groups = {"regression"})
public void checkoutRegressionTest() {}
```

---

## Execution Profiles Definition

```xml
<profiles>

    <profile>
        <id>smoke</id>
        <properties>
            <groups>smoke</groups>
        </properties>
    </profile>

    <profile>
        <id>regression</id>
        <properties>
            <groups>regression</groups>
        </properties>
    </profile>

    <profile>
        <id>sanity</id>
        <properties>
            <groups>sanity</groups>
        </properties>
    </profile>

</profiles>
```

---

## Surefire Binding

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <configuration>
        <groups>${groups}</groups>
    </configuration>
</plugin>
```

---

## Run Commands

```bash
mvn test -Psmoke
mvn test -Pregression
mvn test -Psanity
```

---

## Combine Environment + Execution Profiles (Enterprise Pattern)

```bash
mvn clean test -Puat,smoke
```

Meaning:
- `uat` → environment
- `smoke` → execution intent

---

# PART 3: Profile Activation Methods (COMPLETE)

## 1. Command Line (Most Common)

```bash
mvn test -Puat
```

## 2. Default Activation

```xml
<activeByDefault>true</activeByDefault>
```

## 3. Property‑Based Activation

```xml
<activation>
    <property>
        <name>env</name>
    </property>
</activation>
```

Activated when:
```bash
mvn test -Denv=uat
```

## 4. OS‑Based Activation

```xml
<activation>
    <os>
        <family>Windows</family>
    </os>
</activation>
```

Rare but supported.

---

# PART 4: Profiles vs TestNG XML (Clear Separation)

| Aspect | Maven Profiles | TestNG XML |
|-----|-----|-----|
| Environment config | Yes | No |
| Execution intent | Yes | Partial |
| CI friendly | High | Medium |
| Recommended usage | Build level | Test structure |

➡ **Profiles = build intent**  
➡ **XML = test organization**

---

## Common Mistakes

- Mixing env + execution in same profile
- Hardcoding groups in Surefire
- Overusing default profile
- Encoding logic inside pipelines

---

## Best Practices (Industry‑Grade)

- One profile per environment
- One profile per execution type
- Use semantic names
- Combine profiles via CLI
- Always document profile behavior

---

## Key Takeaways

- Profiles are not just for environments
- They are execution switches
- Essential for CI/CD automation
- Mandatory Maven skill for test engineers
