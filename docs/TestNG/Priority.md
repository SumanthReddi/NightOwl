---
sidebar_position: 7
---

## RIORITY - TEST ORDERING 

**Without priority:** TestNG runs alphabetically → Wrong order.

```java
@Test(priority = 1)  // Runs first
public void setupTestData() { }

@Test(priority = 2)
public void mainTest() { }

@Test(priority = 3)
public void cleanup() { }
```
