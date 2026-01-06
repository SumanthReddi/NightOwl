---
sidebar_position: 4
---

## Selenium Grid in CI/CD Pipelines

## Execution Flow

```
CI Pipeline
   ↓
Maven Command
   ↓
TestNG
   ↓
RemoteWebDriver
   ↓
Selenium Grid
```

---

## Maven Profile for Grid

```xml
<profile>
    <id>grid</id>
    <properties>
        <grid.url>http://localhost:4444</grid.url>
    </properties>
</profile>
```

Run:
```bash
mvn clean test -Pgrid
```

---

## Jenkins Example

```bash
mvn clean test -Pgrid -DsuiteXmlFile=smoke.xml
```

---

## Common CI Issues
- Node unavailable
- Session creation failure
- Over-parallelization

---

## Key Takeaways
- Grid accelerates CI pipelines
- Profiles control Grid execution
- Stability depends on thread control
