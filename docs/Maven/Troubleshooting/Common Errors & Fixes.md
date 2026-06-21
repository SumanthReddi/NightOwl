---
sidebar_position: 1
---

# Common Maven Errors & Fixes

Even experienced automation engineers spend a lot of time **debugging Maven failures** — especially in CI/CD pipelines.  
This section lists the **most common Maven errors**, explains **why they happen**, and shows **how to fix them**.

If you master this section, you’ll debug builds **faster than most teams**.

---

## 1️⃣ Tests Not Running (`BUILD SUCCESS` but no tests executed)

### Symptoms
- Build passes
- No tests executed
- No reports generated

### Common Causes
- Surefire plugin missing or misconfigured
- Test class names don’t follow conventions
- Wrong lifecycle phase used

### Fixes
- Ensure Surefire plugin exists
- Use valid test names:
  - `*Test.java`
  - `*Tests.java`
- Run correct command:
```bash
mvn test
```

---

## 2️⃣ `No tests were executed!`

### Cause
- Surefire could not find matching tests
- Incorrect includes/excludes

### Fix
Explicitly configure Surefire:
```xml
<includes>
    <include>**/*Test.java</include>
</includes>
```

---

## 3️⃣ `Could not resolve dependencies`

### Symptoms
- Build fails during dependency resolution
- Happens often on fresh machines or CI

### Common Causes
- Network issues
- Wrong dependency version
- Repository blocked

### Fixes
```bash
mvn clean install -U
```

- Verify dependency coordinates
- Check `.m2` repository
- Ensure internet access

---

## 4️⃣ `Plugin execution not covered by lifecycle configuration`

### Cause
- Plugin defined incorrectly
- Missing execution block

### Fix
Ensure plugin is under `<build><plugins>` and not `<pluginManagement>` only.

---

## 5️⃣ Java Version Mismatch

### Error Examples
- `Unsupported class file major version`
- `invalid target release`

### Cause
- Java version mismatch between local and CI

### Fix
Use Compiler plugin:
```xml
<maven.compiler.source>17</maven.compiler.source>
<maven.compiler.target>17</maven.compiler.target>
```

---

## 6️⃣ `testng.xml not found`

### Cause
- Wrong path in Surefire
- File placed outside resources

### Fix
- Place XML in `src/test/resources`
- Verify path:
```xml
<suiteXmlFile>src/test/resources/testng/smoke.xml</suiteXmlFile>
```

---

## 7️⃣ Build Passes Locally, Fails in CI

### Common Causes
- Environment variables missing
- Profiles not activated
- OS-specific paths

### Fixes
- Use Maven profiles
- Avoid hardcoded paths
- Log environment values

---

## 8️⃣ Parallel Execution Failures

### Symptoms
- Random failures
- Tests pass individually

### Causes
- Shared static data
- Non-thread-safe drivers

### Fixes
- Use `ThreadLocal`
- Avoid static variables
- Reduce thread count

---

## 9️⃣ `BUILD FAILURE` After Tests Pass

### Cause
- Failure in `verify` phase
- Failsafe plugin failures

### Fix
- Check `failsafe-reports`
- Run:
```bash
mvn verify -X
```

---

## 🔟 Maven is Very Slow

### Causes
- Large dependency downloads
- No local repository cache
- Running unnecessary phases

### Fixes
- Use local `.m2` cache
- Avoid `install` in CI unless needed
- Use `mvn test` instead of `mvn install`

---

## Debugging Tips (Must Know)

```bash
mvn test -X      # Debug logs
mvn test -e      # Error stack trace
mvn help:effective-pom
```

These commands save **hours of debugging time**.

---

## CI-Specific Best Practices

- Always use `mvn clean test`
- Pin plugin versions
- Log active profiles
- Archive `target/` reports
- Fail fast on errors

---

## Key Takeaways

- Most Maven issues are configuration-related
- Surefire + lifecycle understanding solves 80% issues
- CI failures ≠ Maven bugs (usually config)
- Debug commands are your best tools
- Mastering Maven debugging is a career advantage
