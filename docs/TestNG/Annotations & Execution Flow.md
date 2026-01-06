---
sidebar_position: 3
---

# Annotations & Execution Flow

TestNG uses **annotations** to define the lifecycle of test execution.  
These annotations control **when setup runs, when tests execute, and how cleanup happens**.

Understanding this flow is critical for writing **stable, predictable, and scalable** automation.

---

## What Are TestNG Annotations?

Annotations are special markers added to methods to define their role in the test lifecycle.

They help TestNG understand:
- Which methods are tests
- Which methods run before or after tests
- How resources should be initialized and released

---

## Core TestNG Annotations

| Annotation | Purpose | Execution Count |
|---|---|---|
| `@BeforeSuite` | Runs once before the entire suite | Once per suite |
| `@AfterSuite` | Runs once after the entire suite | Once per suite |
| `@BeforeTest` | Runs before a `<test>` in testng.xml | Once per `<test>` |
| `@AfterTest` | Runs after a `<test>` | Once per `<test>` |
| `@BeforeClass` | Runs once before the class | Once per class |
| `@AfterClass` | Runs once after the class | Once per class |
| `@BeforeMethod` | Runs before each `@Test` method | Before every test method |
| `@AfterMethod` | Runs after each `@Test` method | After every test method |
| `@Test` | Marks a test method | Each test case |

---


## Execution Flow (Lifecycle Order)

```
@BeforeSuite
   ↓
@BeforeTest
   ↓
@BeforeClass
   ↓
@BeforeMethod
   ↓
@Test
   ↓
@AfterMethod
   ↓
@AfterClass
   ↓
@AfterTest
   ↓
@AfterSuite
```

➡️ This order is **fixed** and **cannot be changed by XML**.

---

### Real Example - Login Test Lifecycle:

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

---

## Real-World Usage Pattern

| Task | Recommended Annotation |
|---|---|
| DB / report setup | `@BeforeSuite` |
| Browser setup | `@BeforeClass` |
| Login / test data prep | `@BeforeMethod` |
| Logout / cleanup | `@AfterMethod` |
| Close browser | `@AfterClass` |
| Report flush | `@AfterSuite` |

---

## Multiple Tests & Classes Scenario

When multiple classes and tests are involved:

- `@BeforeSuite` runs only once
- `@BeforeTest` runs for each `<test>` block
- `@BeforeClass` runs for every class
- `@BeforeMethod` runs before each test method

This behavior is consistent even with **parallel execution**.

---

## Common Mistakes

- Putting heavy logic inside `@BeforeMethod`
- Opening browser in `@BeforeMethod` instead of `@BeforeClass`
- Assuming XML can change annotation order
- Using static data across parallel methods

---

## Best Practices

- Keep `@BeforeMethod` lightweight
- Use `@BeforeClass` for expensive setup
- Use `@BeforeSuite` for global initialization
- Avoid test logic in setup methods
- Keep cleanup reliable in `@AfterMethod`

---

## Key Takeaways

- Annotations define the **test lifecycle**
- Execution order is **strict and predictable**
- XML controls **what runs**, annotations control **how it runs**
- Correct annotation usage improves stability and performance
