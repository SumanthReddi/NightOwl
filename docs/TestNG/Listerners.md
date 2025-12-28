---
sidebar_position: 5
---
## LISTENERS - AUTOMATION MAGIC

**Manual Pain:** Take screenshot on every failure, generate reports.

**Listener Solution:** **Automatic** screenshots, logs, reports.

```java
public class CustomListener implements ITestListener {
    @Override
    public void onTestFailure(ITestResult result) {
        WebDriver driver = (WebDriver) result.getTestContext()
            .getAttribute("driver");
            
        // AUTO screenshot on failure
        if (driver != null) {
            String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
            File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            File dest = new File("screenshots/" + result.getName() + "_" + timestamp + ".png");
            FileUtils.copyFile(screenshot, dest);
            
            // Log failure details
            System.out.println("❌ " + result.getName() + " failed. Screenshot: " + dest);
        }
    }
    
    @Override
    public void onTestSuccess(ITestResult result) {
        System.out.println("✅ " + result.getName() + " PASSED");
    }
}
```

**testng.xml:**

```xml
<suite>
    <listeners>
        <listener class-name="CustomListener"/>
    </listeners>
</suite>
```

**Result:** **Zero manual screenshots** - every failure auto-captured.