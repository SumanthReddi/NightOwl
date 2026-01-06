---
sidebar_position: 6
---

# Maven Lifecycle & Phases

Understanding the **Maven lifecycle** is critical for automation testing engineers because it explains **when your tests are compiled, executed, reported, and packaged**, especially in **CI/CD pipelines**.

Most build failures and CI issues happen due to **misunderstanding Maven phases**.

---

## What is the Maven Lifecycle?

The **Maven lifecycle** is a **sequence of build phases** that Maven executes in a fixed order.

Each phase:
- Performs a specific task
- Automatically triggers all previous phases

> When you run a Maven command, you are not running a single task —  
> you are triggering a **chain of phases**.

---

## Three Main Maven Lifecycles

Maven has **three built-in lifecycles**:

| Lifecycle | Purpose | Relevance to Automation |
|---------|--------|-------------------------|
| `clean` | Cleans old build artifacts | Reset before test runs |
| `default` | Build, test, package | **Most important** |
| `site` | Generate documentation | Optional |

Automation engineers mainly work with **clean** and **default** lifecycles.

---

## Default Lifecycle (Most Important)

The **default lifecycle** is where **test execution happens**.

### Core Phases (In Order)

```
validate
 ↓
compile
 ↓
test
 ↓
package
 ↓
verify
 ↓
install
 ↓
deploy
```

You cannot change this order.

---

## Phase-by-Phase Explanation (Automation Focus)

---

### 1️⃣ `validate`

- Checks if project structure is correct
- Verifies `pom.xml`

Automation impact:
- Catches missing configs early


### 2️⃣ `compile`

- Compiles code in `src/main/java`

Automation impact:
- Framework/core classes are compiled


### 3️⃣ `test` ⭐ (MOST IMPORTANT)

- Compiles `src/test/java`
- Executes tests using **Surefire plugin**
- Runs **TestNG tests**

This is where:
- `testng.xml` is triggered
- Selenium tests run
- API tests execute

```bash
mvn test
```


### 4️⃣ `package`

- Packages compiled code into JAR/WAR
- Tests have already run

Automation impact:
- Mostly irrelevant unless packaging test utilities


### 5️⃣ `verify`

- Runs integration checks
- Often used with **Failsafe plugin**

Automation impact:
- Used for integration / E2E tests


### 6️⃣ `install`

- Installs artifact into local Maven repository (`.m2`)

Automation impact:
- Useful when sharing framework libraries


### 7️⃣ `deploy`

- Deploys artifact to remote repository

Automation impact:
- Rare in pure automation projects

---

## Clean Lifecycle

### `clean`

```bash
mvn clean
```

- Deletes `target/` directory
- Removes old reports and binaries

Usually combined as:
```bash
mvn clean test
```

---

## Lifecycle Execution Rule (VERY IMPORTANT)

When you run:

```bash
mvn test
```

Maven executes:
```
validate → compile → test
```

When you run:

```bash
mvn verify
```

Maven executes:
```
validate → compile → test → package → verify
```

➡️ **Higher phase = all previous phases run automatically**

---

## Where TestNG Fits in Lifecycle

```
Maven Lifecycle
      ↓
test phase
      ↓
Surefire Plugin
      ↓
TestNG
      ↓
testng.xml
      ↓
Automation Tests
```

This chain is **critical for CI/CD understanding**.

---

## Surefire vs Failsafe (Quick Preview)

| Plugin | Phase | Usage |
|------|------|-------|
| Surefire | `test` | Unit / UI / API tests |
| Failsafe | `verify` | Integration / E2E tests |

We’ll cover this in detail in the **Plugins** section.

---

## Common CI/CD Commands

| Command | What Happens |
|------|-------------|
| `mvn clean test` | Fresh test run |
| `mvn clean verify` | Integration tests |
| `mvn test -Puat` | Env-based execution |
| `mvn test -DsuiteXmlFile=smoke.xml` | TestNG XML control |

---

## Common Mistakes

- Assuming `mvn test` only runs tests
- Forgetting that previous phases run automatically
- Mixing test logic with packaging phases
- Not understanding Surefire phase binding

---

## Best Practices for Automation Engineers

- Always use `mvn clean test` in CI
- Bind TestNG execution to `test` phase
- Use Failsafe for long-running E2E tests
- Keep build fast and predictable
- Understand lifecycle before debugging CI issues

---

## Key Takeaways

- Maven lifecycle is **fixed and ordered**
- Tests run in the `test` phase
- Surefire plugin bridges Maven and TestNG
- Higher phases trigger all previous phases
- Lifecycle knowledge is critical for CI/CD success
