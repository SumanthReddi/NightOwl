---
sidebar_position: 2
---


## **2. ANNOTATIONS - EXECUTION FLOW  **

TestNG follows **outside-in lifecycle**:

```
Suite (1) → Test (Multiple) → Class (1) → Method (Many)
```

**Execution Order (Guaranteed):**

```
BeforeSuite → BeforeTest → BeforeClass → BeforeMethod → @Test → AfterMethod → AfterClass → AfterTest → AfterSuite
```

**Real Example - Login Test Lifecycle:**

```java
public class LoginTest {
    WebDriver driver;
    
    @BeforeSuite   // Runs ONCE for entire project
    public void allocateResources() {
        // Download drivers, setup ExtentReports
        System.out.println("🚀 Suite Started - Allocated 3 threads");
    }
    
    @BeforeTest    // Runs per <test> tag in testng.xml
    public void createReports() {
        // Initialize ExtentReports for this test tag
    }
    
    @BeforeClass   // Runs ONCE per test class
    public void classSetup() {
        // Common setup for all methods in this class
    }
    
    @BeforeMethod  // Runs BEFORE every @Test - FRESH BROWSER!
    public void launchBrowser() {
        driver = new ChromeDriver();  // Clean browser per test
        driver.get("https://example.com");
    }
    
    @Test(priority=1)
    public void validLogin() {
        // Test logic
    }
    
    @Test(priority=2)
    public void invalidLogin() {
        // Test logic
    }
    
    @AfterMethod   // Screenshot + cleanup AFTER every test
    public void cleanup() {
        if (driver != null) {
            File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            // Save screenshot
            driver.quit();  // Close browser
        }
    }
}
```

**WHY THIS STRUCTURE?** Each test gets **fresh browser state** → **zero flaky tests**.

***