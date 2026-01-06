---
sidebar_position: 7
---

## Maven Plugins (Surefire, Failsafe, Compiler)

Maven **plugins** are the components that actually **do the work** in each lifecycle phase.  
For automation engineers, understanding plugins is essential because **tests do not run magically**—they run because plugins execute them.

The three most important plugins for automation are:
- **Surefire** (runs TestNG tests)
- **Failsafe** (runs integration/E2E tests)
- **Compiler** (controls Java version)

---

## What is a Maven Plugin?

A **Maven plugin**:
- Binds goals to lifecycle phases
- Executes specific tasks (compile, test, report, package)
- Is configured inside `pom.xml`

Without plugins, Maven would only define phases—not actions.

---

## Plugin Anatomy (Quick)

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.2.5</version>
    <configuration>
        <!-- plugin-specific config -->
    </configuration>
</plugin>
```

---

## 1️⃣ Maven Surefire Plugin ⭐ (MOST IMPORTANT)

**Surefire** is responsible for:
- Running **TestNG / JUnit tests**
- Executing during the **`test` phase**
- Generating test reports

### Why Surefire Matters
If Surefire is misconfigured:
- Tests won’t run
- CI pipelines fail
- Reports won’t generate

---

### Default Behavior

```bash
mvn test
```

Surefire automatically:
- Scans `src/test/java`
- Runs TestNG tests
- Generates reports in `target/surefire-reports`

---

### Surefire + TestNG XML

```xml
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
```

This creates the chain:
```
Maven → Surefire → TestNG → testng.xml
```

---

### Passing Parameters via Surefire

```bash
mvn test -Dbrowser=chrome -Denv=uat
```

Accessible in TestNG:
```java
@Parameters("browser")
```

---

### Parallel Execution via Surefire

```xml
<configuration>
    <parallel>methods</parallel>
    <threadCount>4</threadCount>
</configuration>
```

⚠️ Prefer **parallel via `testng.xml`** for better control.

---

## 2️⃣ Maven Failsafe Plugin (Integration / E2E)

Failsafe is designed for:
- **Integration tests**
- Long-running **end-to-end tests**
- Tests that should run **after build**

### Key Difference from Surefire

| Plugin | Phase | Purpose |
|------|------|---------|
| Surefire | `test` | Unit / UI / API tests |
| Failsafe | `verify` | Integration / E2E tests |

---

### Failsafe Naming Convention

Failsafe runs tests matching:
- `*IT.java`
- `*ITCase.java`

Example:
```text
LoginIT.java
PaymentIT.java
```

---

### Failsafe Configuration Example

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-failsafe-plugin</artifactId>
    <version>3.2.5</version>
    <executions>
        <execution>
            <goals>
                <goal>integration-test</goal>
                <goal>verify</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

Run with:
```bash
mvn clean verify
```

---

## 3️⃣ Maven Compiler Plugin (Java Version Control)

The **Compiler plugin** ensures:
- Correct Java version
- Consistent builds across machines
- No “works on my machine” issues

### Configuration

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.11.0</version>
    <configuration>
        <source>17</source>
        <target>17</target>
    </configuration>
</plugin>
```

Best practice: use properties
```xml
<source>${java.version}</source>
<target>${java.version}</target>
```

---

## Common Plugin Mistakes

- Not pinning plugin versions
- Running long E2E tests in Surefire
- Mixing Failsafe and Surefire configs
- Ignoring Java version mismatches
- Overloading plugins with logic

---

## Best Practices (Automation Engineers)

- Always pin plugin versions
- Use Surefire for fast tests
- Use Failsafe for integration/E2E
- Control parallelism in TestNG XML
- Keep plugin config minimal and readable

---

## Key Takeaways

- Plugins execute Maven lifecycles
- Surefire runs TestNG tests
- Failsafe is for integration testing
- Compiler plugin avoids Java issues
- Correct plugin usage = stable CI