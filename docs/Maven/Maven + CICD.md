---
sidebar_position: 11
---

## Maven + CI/CD (Jenkins / GitLab) – Complete Pipeline Example

This section shows **how Maven-based automation projects are executed in real CI/CD pipelines**.
It connects **Maven, TestNG, profiles, and reports** into a single, production-ready flow.

If you understand this page, you can confidently set up or debug **any Java automation CI pipeline**.

---

## Big Picture: CI Execution Flow

```
Git Push / Schedule
        ↓
CI Pipeline (Jenkins / GitLab)
        ↓
Maven Command
        ↓
Surefire / Failsafe Plugin
        ↓
TestNG + testng.xml
        ↓
Automation Tests
        ↓
Reports + Artifacts
```

---

## Why CI/CD Matters for Automation Engineers

Automation without CI/CD:
- Runs manually
- Is inconsistent
- Has no real value

Automation with CI/CD:
- Runs on every commit
- Catches regressions early
- Provides confidence to release

Maven is the **entry point** for all CI executions.

---

## Jenkins Pipeline (Declarative)

### Prerequisites
- Jenkins installed
- JDK configured
- Maven configured (or Maven wrapper)

---

### Basic Jenkinsfile (Smoke Tests)

```groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Smoke Tests') {
            steps {
                sh 'mvn clean test -Puat -DsuiteXmlFile=src/test/resources/testng/smoke.xml'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'target/**', fingerprint: true
        }
    }
}
```

---

## Jenkins Pipeline – Advanced (Parameterized)

```groovy
pipeline {
    agent any

    parameters {
        choice(name: 'ENV', choices: ['dev', 'uat', 'prod'], description: 'Environment')
        choice(name: 'SUITE', choices: ['smoke', 'regression'], description: 'Test Suite')
    }

    stages {
        stage('Execute Tests') {
            steps {
                sh """
                mvn clean test -P${ENV}                 -DsuiteXmlFile=src/test/resources/testng/${SUITE}.xml
                """
            }
        }
    }
}
```

This is a **very common enterprise pattern**.

---

## GitLab CI Pipeline Example

### `.gitlab-ci.yml`

```yaml
stages:
  - test

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"

test:
  stage: test
  image: maven:3.9.6-eclipse-temurin-17
  script:
    - mvn clean test -Puat -DsuiteXmlFile=src/test/resources/testng/smoke.xml
  artifacts:
    when: always
    paths:
      - target/
```

---

## Scheduled Test Execution (Nightly Runs)

### Jenkins
- Use **Build Triggers → Cron**
```
H 2 * * *
```

### GitLab
```yaml
only:
  - schedules
```

Used for:
- Nightly regression
- Health checks

---

## Handling Reports in CI

### Common Reports
- Surefire reports
- TestNG HTML reports
- Extent / Allure reports

### Best Practice
- Always archive `target/`
- Publish HTML reports if supported

---

## Environment Handling (Best Practice)

- Use **Maven profiles** for env
- Use **parameters** for suite selection
- Never hardcode URLs or credentials
- Use CI secrets / variables

---

## Parallel Execution in CI

Recommended:
- Parallel at **TestNG level**
- Moderate thread count

Avoid:
- Excessive parallelism
- Shared static data

---

## Common CI Failures & Fixes

| Issue | Fix |
|-----|----|
| Tests run locally, fail in CI | Check profiles & env vars |
| Maven command not found | Use Maven wrapper or image |
| Java version mismatch | Pin Java in pipeline |
| Flaky tests | Reduce parallelism |

---

## CI Best Practices for Automation Teams

- Keep pipelines simple
- Use `mvn clean test`
- Fail fast on errors
- Separate smoke & regression jobs
- Archive reports always

---

## Key Takeaways

- CI pipelines rely on Maven commands
- Profiles + parameters control execution
- Jenkins & GitLab patterns are very similar
- Reports are as important as execution
- Automation without CI has limited value

---

## Final Note 🎯

You now have **end-to-end documentation** covering:
- TestNG
- Maven
- CI/CD execution

This is **exactly what senior automation engineers are expected to know**.
