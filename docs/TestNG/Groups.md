---
sidebar_position: 6
---

## GROUPS - TEST CATEGORIZATION

**Problem:** 100 tests, need to run only "smoke" tests quickly.

**Solution:** Tag tests → Run subsets via testng.xml.

```java
@Test(groups = {"smoke", "regression"})
public void testHomepage() { }

@Test(groups = {"regression", "performance"})
public void testDashboardLoadTime() { }

@Test(groups = "negative")
public void testInvalidInputs() { }
```

**testng.xml:**

```xml
<suite name="QuickTests">
    <test name="Smoke">
        <groups>
            <run>
                <include name="smoke"/>  <!-- Only smoke tests -->
            </run>
        </groups>
        <classes>
            <class name="LoginTest"/>
        </classes>
    </test>
</suite>
```

**Benefit:** **Smoke (5 tests) = 2 minutes** vs **Full regression (100 tests) = 2 hours**.