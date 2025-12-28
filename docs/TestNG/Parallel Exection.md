---
sidebar_position: 4
---
## PARALLEL EXECUTION - SPEED BOOST

**Selenium Bottleneck:** Tests run sequentially → 100 tests × 30s = 50 minutes.

**TestNG Solution:** Run **multiple browsers simultaneously**.

**testng.xml:**

```xml
<suite name="ParallelSuite" parallel="methods" thread-count="3">
    <!-- 3 browsers run AT SAME TIME -->
    <test name="CrossBrowser">
        <classes>
            <class name="CrossBrowserTest"/>
        </classes>
    </test>
</suite>
```

**CrossBrowserTest.java:**

```java
@Parameters("browser")
@Test
public void testGoogle(@Optional("chrome") String browser) {
    WebDriver driver = createDriver(browser);  // Thread-safe driver creation
    driver.get("https://google.com");
    assertTrue(driver.getTitle().contains("Google"));
    driver.quit();
}
```

**Result:** **50 minutes → 17 minutes** (3x speedup).