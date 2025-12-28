---
sidebar_position: 6
---

## DEPENDENCIES - TEST FLOW CONTROL

**Real Scenario:** Dashboard test only runs **after** successful login.

```java
@Test
public void testLogin() {
    // Must pass first
}

@Test(dependsOnMethods = "testLogin")
public void testDashboard() {
    // Only runs if login passes
}
```

**AlwaysDependsOn:** Runs even if dependency fails (for cleanup):

```java
@Test(dependsOnMethods = "testLogin", alwaysRun = true)
public void cleanupSession() {
    // Always cleanup regardless of login result
}
```