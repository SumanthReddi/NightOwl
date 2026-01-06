---
sidebar_position: 12
---

## Automation Engineer Add-ons – ALL IN ONE

 - Maven Cheat Sheet
 - Gradle vs Maven 
 - Sample Repo 
 - Interview Q&A

This document contains **four high-value additions** that senior automation engineers are expected to know.
It is designed as a **quick-reference + practical + interview-ready** guide.

---

# 1️⃣ Maven Cheat Sheet (1-Page Quick Reference)

## Common Maven Commands

| Command | Purpose |
|------|--------|
| `mvn clean` | Remove old build artifacts |
| `mvn test` | Run tests |
| `mvn clean test` | Fresh test execution |
| `mvn verify` | Run integration / E2E tests |
| `mvn install` | Install artifact to local repo |
| `mvn test -Puat` | Run with profile |
| `mvn test -Dgroups=smoke` | Run TestNG group |
| `mvn test -DsuiteXmlFile=smoke.xml` | Run specific TestNG XML |

---

## Must-Know Maven Plugins

| Plugin | Purpose |
|------|--------|
| Surefire | Runs TestNG tests |
| Failsafe | Integration / E2E tests |
| Compiler | Java version control |
| Clean | Cleans target folder |

---

## Debug Commands (VERY IMPORTANT)

```bash
mvn test -X
mvn test -e
mvn dependency:tree
mvn help:effective-pom
```

---

# 2️⃣ Gradle vs Maven (Automation Engineer POV)

## High-Level Comparison

| Aspect | Maven | Gradle |
|-----|------|--------|
| Configuration | XML | Groovy / Kotlin |
| Learning Curve | Easy | Steep |
| Readability | High | Medium |
| Convention | Strong | Flexible |
| CI Support | Excellent | Excellent |
| Automation Adoption | Very High | Moderate |

---

## Automation Perspective Verdict

### Choose Maven when:
- Team is large
- Stability > flexibility
- CI/CD is critical
- Long-term maintenance matters

### Choose Gradle when:
- Highly custom build logic required
- Android automation
- Team already skilled in Gradle

➡️ **For most automation teams: Maven is the safer default.**

---

# 3️⃣ End-to-End Sample Automation Repo Structure

```
automation-framework/
│
├─ pom.xml
│
├─ src/
│   ├─ main/
│   │   ├─ java/
│   │   │   └─ framework/
│   │   │       ├─ driver/
│   │   │       ├─ utils/
│   │   │       └─ base/
│   │   └─ resources/
│   │       └─ config/
│
│   └─ test/
│       ├─ java/
│       │   └─ tests/
│       │       ├─ login/
│       │       ├─ payment/
│       │       └─ regression/
│       └─ resources/
│           ├─ testng/
│           │   ├─ smoke.xml
│           │   └─ regression.xml
│           └─ testdata/
│
├─ Jenkinsfile
├─ .gitlab-ci.yml
└─ README.md
```

### Why This Structure Works
- Clear separation of framework vs tests
- CI-ready
- Scalable for teams
- Easy onboarding

---

# 4️⃣ Interview Q&A (Based on This Documentation)

## Maven Questions

**Q: What is the role of Maven in automation?**  
A: Maven manages dependencies, builds, and test execution, and integrates automation with CI/CD.

**Q: Difference between Surefire and Failsafe?**  
A: Surefire runs tests in the `test` phase, Failsafe runs integration tests in the `verify` phase.

**Q: How do you handle multiple environments?**  
A: Using Maven profiles, not hardcoding values or TestNG XML.

---

## TestNG Questions

**Q: Does testng.xml resolve dependencies automatically?**  
A: No. Dependencies must be explicitly included.

**Q: Priority vs dependency?**  
A: Dependencies are safer. Priority only affects order, not execution conditions.

---

## CI/CD Questions

**Q: How do you run smoke vs regression in CI?**  
A: Using Maven command flags with different TestNG XML files or groups.

**Q: Why `mvn clean test` is preferred in CI?**  
A: Ensures a fresh, predictable build every run.

---

## Senior-Level Question

**Q: Tests pass locally but fail in CI – what do you check first?**  
A:
1. Active Maven profile
2. Java version
3. Missing environment variables
4. Dependency versions
5. Parallel execution issues

---

# FINAL TAKEAWAYS 🎯

- Maven is the automation backbone
- TestNG controls execution
- CI/CD gives automation value
- Profiles manage environments
- Debugging skills define seniority
