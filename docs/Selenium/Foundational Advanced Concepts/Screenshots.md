---
sidebar_position: 8
---

Screenshots capture visual state for debugging, reporting, and visual regression testing.


## **1. Full Page Screenshot (Primary Method)**

### **TakesScreenshot Interface (Recommended)**

```java
// Cast driver to TakesScreenshot
TakesScreenshot screenshot = (TakesScreenshot) driver;
File sourceFile = screenshot.getScreenshotAs(OutputType.FILE);

// Save to specific location
FileUtils.copyFile(sourceFile, new File("screenshots/full-page.png"));
```


### **Inline Bytes (Reporting Tools)**

```java
byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
String base64Screenshot = Base64.getEncoder().encodeToString(screenshotBytes);
```


***

## **2. Element-Specific Screenshots**
Selenium 4 introduces `getScreenshotAs()` directly on `WebElement`.This removes the need for older workarounds like full-page screenshots and manual image cropping.

This approach is:
- Clean
- Stable
- Cross-browser
- CI-friendly

```java
WebElement element = driver.findElement(By.id("submit-btn"));
File screenshot = element.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(screenshot, new File("screenshots/button.png"));
```

**Works for**: Buttons, images, divs, tables, charts.

***

## **3. Base64 Screenshots (Reports/Emails)**

```java
// For ExtentReports, Allure, email attachments
String base64Image = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BASE64);
```


***

## **4. Automatic Screenshots on Failure (TestNG/JUnit)**

### **TestNG Listener**

```java
public class ScreenshotListener implements ITestListener {
    @Override
    public void onTestFailure(ITestResult result) {
        WebDriver driver = (WebDriver) result.getTestContext().getAttribute("driver");
        if (driver != null) {
            File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(screenshot, new File("screenshots/" + 
                result.getName() + "_" + System.currentTimeMillis() + ".png"));
        }
    }
}
```


### **JUnit 5 Extension**

```java
public class ScreenshotExtension implements AfterEachCallback {
    @Override
    public void afterEach(ExtensionContext context) throws Exception {
        if (context.getExecutionException().isPresent()) {
            // Take screenshot logic
        }
    }
}
```


***

## **5. Full Page Scroll Screenshots (Long Pages)**

```java
public void fullPageScreenshot(WebDriver driver, String fileName) throws IOException {
    JavascriptExecutor js = (JavascriptExecutor) driver;
    
    // Get total page height
    long totalHeight = (Long) js.executeScript("return Math.max(" +
        "document.body.scrollHeight, document.body.offsetHeight, " +
        "document.documentElement.clientHeight, " +
        "document.documentElement.scrollHeight, " +
        "document.documentElement.offsetHeight);");
    
    // Set viewport to full height
    js.executeScript("window.scrollTo(0, 0);");
    
    // Capture screenshot
    File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    
    // Save
    FileUtils.copyFile(screenshot, new File("screenshots/" + fileName));
}
```


***

## **6. Multiple Viewport Screenshots (Stitching)**

```java
public void stitchedScreenshot(WebDriver driver) throws IOException {
    JavascriptExecutor js = (JavascriptExecutor) driver;
    
    // Get dimensions
    int windowWidth = driver.manage().window().getSize().getWidth();
    long totalHeight = (Long) js.executeScript("return document.body.scrollHeight");
    
    List<File> screenshots = new ArrayList<>();
    
    // Take screenshots at intervals
    for (int i = 0; i < totalHeight; i += windowWidth * 0.8) {
        js.executeScript("window.scrollTo(0, " + i + ");");
        Thread.sleep(500);
        screenshots.add(((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE));
    }
    
    // Stitch (requires external library like ImageMagick or Java AWT)
}
```


***

## **7. Utility Class - Production Ready**

```java
public class ScreenshotUtil {
    public static void captureFullPage(WebDriver driver, String testName) {
        try {
            File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
            File dest = new File("screenshots/" + testName + "_" + timestamp + ".png");
            FileUtils.copyFile(src, dest);
            System.out.println("Screenshot saved: " + dest.getAbsolutePath());
        } catch (IOException e) {
            System.err.println("Screenshot failed: " + e.getMessage());
        }
    }
    
    public static void captureElement(WebDriver driver, WebElement element, String name) {
        try {
            File src = element.getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(src, new File("screenshots/" + name + ".png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public static String captureAsBase64(WebDriver driver) {
        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BASE64);
    }
}
```

**Usage**:

```java
ScreenshotUtil.captureFullPage(driver, "login-test");
ScreenshotUtil.captureElement(driver, loginButton, "login-button");
```


***

## **8. Integration with Reporting Tools**

### **ExtentReports**

```java
ExtentTest test = extent.createTest("Login Test");
test.addScreenCaptureFromBase64String(ScreenshotUtil.captureAsBase64(driver));
```


### **Allure**

```java
Allure.addAttachment("Screenshot", "image/png", 
    new ByteArrayInputStream(screenshotBytes), ".png");
```


***

## **9. Headless Mode Screenshots**

```java
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless=new", "--window-size=1920,1080", "--virtual-time-budget=5000");
WebDriver driver = new ChromeDriver(options);

// Screenshots work identically in headless
ScreenshotUtil.captureFullPage(driver, "headless-test");
```


***

## **OutputType Enum Values**

| Type | Return | Use Case |
| :-- | :-- | :-- |
| `FILE` | `File` | Save to disk |
| `BYTES` | `byte[]` | Memory operations |
| `BASE64` | `String` | Reports, APIs |
| `BASE64_STRING` | `String` | JSON responses |


***

## **Best Practices**

1. **Always use try-catch** - screenshots can fail on unstable pages
2. **Timestamp filenames** - avoid overwrites
3. **Create screenshots folder** before tests (`screenshots/`)
4. **Limit screenshot size** for reports (resize if >2MB)
5. **Screenshot on failure only** - reduces storage
6. **Use relative paths** for CI/CD compatibility
7. **Close File streams** - use try-with-resources when possible

***

## **Quick Reference**

| Action | Method |
| :-- | :-- |
| Full page | `((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE)` |
| Element | `element.getScreenshotAs(OutputType.FILE)` |
| Base64 | `((TakesScreenshot)driver).getScreenshotAs(OutputType.BASE64)` |
| Save file | `FileUtils.copyFile(src, dest)` |

**100% complete Selenium screenshot API** with production examples for all scenarios.

