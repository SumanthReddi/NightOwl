---
sidebar_position: 3
---
Selenium 4 introduces **`switchTo().newWindow()`** - the cleanest way to open and switch to new tabs/windows in a single call.

***

## **Selenium 4 New APIs (Game Changer)**

### **1. Open New TAB (Selenium 4+)**

```java
// Opens blank tab + switches to it automatically
driver.switchTo().newWindow(WindowType.TAB);
driver.get("https://google.com");  // Navigate in new tab
```


### **2. Open New WINDOW (Selenium 4+)**

```java
// Opens new browser window + switches to it
driver.switchTo().newWindow(WindowType.WINDOW);
driver.get("https://example.com");
```

**Key Advantage**: Same WebDriver session, no new driver instances, automatic context switch.[^3][^1]

***

## **Complete Workflow Example**

```java
@Test
public void selenium4MultipleTabs() {
    public static void main(String[] args) throws MalformedURLException, IOException {
    driver.get("https://example.com");  // Main page
    
    // Store main window handle
    String mainWindow = driver.getWindowHandle();
    
    // 1. Open new TAB
    driver.switchTo().newWindow(WindowType.TAB);
    driver.get("https://google.com");
    System.out.println("New tab title: " + driver.getTitle());
    
    // 2. Open new WINDOW  
    driver.switchTo().newWindow(WindowType.WINDOW);
    driver.get("https://github.com");
    System.out.println("New window title: " + driver.getTitle());
    
    // 3. Switch back to main window
    driver.switchTo().window(mainWindow);
    System.out.println("Main window: " + driver.getTitle());
    
    // Close extras
    driver.close(); // Close current (last opened)
    driver.switchTo().window(mainWindow);
    driver.close(); // Close Main window (first opened)
    }
}
```


***

## **Legacy Selenium 3 Methods (Still Valid)**

### **1. JavaScript Ctrl+T (New Tab)**

```java
// Selenium 3 style - still works
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("window.open('');");  // Blank tab
// OR
((JavascriptExecutor) driver).executeScript("window.open('https://google.com');");
```


### **2. Click Link/Button (App Opens New Tab/Window)**

```java
driver.findElement(By.linkText("Open in New Tab")).click();
// App opens new tab/window - handle below
```


***

## **Switching Between Windows/Tabs**

### **Core Methods**

```java
String currentHandle = driver.getWindowHandle();      // Single current
Set<String> allHandles = driver.getWindowHandles();   // All open windows/tabs
driver.switchTo().window(handle);                     // Switch to specific
```


### **Pattern 1: Parent → Child → Back**

```java
String parentHandle = driver.getWindowHandle();  // Store parent

// Action opens new window/tab
driver.findElement(By.linkText("External Link")).click();

Set<String> handles = driver.getWindowHandles();
for (String handle : handles) {
    if (!handle.equals(parentHandle)) {
        driver.switchTo().window(handle);  // Switch to child
        // Work in child window
        driver.close();  // Close child
        break;
    }
}

driver.switchTo().window(parentHandle);  // Back to parent
```


### **Pattern 2: Index-Based (Ordered Handles)**

```java
List<String> handles = new ArrayList<>(driver.getWindowHandles());

// Main = index 0, new tabs append
driver.switchTo().window(handles.get(0));  // Main
driver.switchTo().window(handles.get(1));  // First child
driver.switchTo().window(handles.get(handles.size() - 1));  // Last opened
```


***

## **WindowType Enum (Selenium 4)**

| Type | Behavior | Use Case |
| :-- | :-- | :-- |
| `WindowType.TAB` | Opens new browser tab | File downloads, quick lookups |
| `WindowType.WINDOW` | Opens new OS window | Isolated testing, parallel flows |

```java
import org.openqa.selenium.WindowType;
driver.switchTo().newWindow(WindowType.TAB);    // Tab
driver.switchTo().newWindow(WindowType.WINDOW); // Window
```


***

## **Production Utility Class**

```java
public class WindowManager {
    private WebDriver driver;
    
    public WindowManager(WebDriver driver) {
        this.driver = driver;
    }
    
    public String openNewTab(String url) {
        String originalHandle = driver.getWindowHandle();
        driver.switchTo().newWindow(WindowType.TAB);
        if (url != null) driver.get(url);
        return originalHandle;  // Return to switch back later
    }
    
    public String openNewWindow(String url) {
        String originalHandle = driver.getWindowHandle();
        driver.switchTo().newWindow(WindowType.WINDOW);
        if (url != null) driver.get(url);
        return originalHandle;
    }
    
    public void switchToLastWindow() {
        List<String> handles = new ArrayList<>(driver.getWindowHandles());
        driver.switchTo().window(handles.get(handles.size() - 1));
    }
    
    public void closeAllExceptMain(String mainHandle) {
        Set<String> handles = driver.getWindowHandles();
        for (String handle : handles) {
            if (!handle.equals(mainHandle)) {
                driver.switchTo().window(handle);
                driver.close();
            }
        }
        driver.switchTo().window(mainHandle);
    }
}
```

**Usage**:

```java
WindowManager wm = new WindowManager(driver);
String mainHandle = wm.openNewTab("https://google.com");
// Work in new tab...
wm.closeAllExceptMain(mainHandle);
```


***

## **Real-World Scenarios**

### **1. File Download in New Tab**

```java
String mainHandle = wm.openNewTab(null);  // Blank tab
driver.get("https://example.com/download.pdf");
// Verify download starts
driver.close();
wm.switchToMain(mainHandle);
```


### **2. OAuth/Login Popup**

```java
// Click "Login with Google"
driver.findElement(By.id("google-login")).click();
wm.switchToLastWindow();  // Switch to OAuth popup
driver.findElement(By.id("email")).sendKeys("test@gmail.com");
driver.close();  // Close popup
wm.switchToMain(mainHandle);
```


### **3. Multi-Tab Parallel Testing**

```java
List<String> tabHandles = new ArrayList<>();
for (int i = 0; i < 3; i++) {
    tabHandles.add(wm.openNewTab("https://site" + i + ".com"));
    // Perform actions in each tab
}
wm.closeAllExceptMain(tabHandles.get(0));
```


***

## **Best Practices**

| Do | Don't |
| :-- | :-- |
| ✅ Use `newWindow()` (Selenium 4) | ❌ Multiple WebDriver instances |
| ✅ Store parent handle first | ❌ Assume handle order |
| ✅ Always `driver.close()` extras | ❌ Leave open tabs/windows |
| ✅ Use utility class | ❌ Repeat boilerplate |
| ✅ Switch by title/URL if needed | ❌ Rely solely on index |


***

## **Quick Reference Table**

| Action | Selenium 4 | Selenium 3 |
| :-- | :-- | :-- |
| **New Tab** | `switchTo().newWindow(WindowType.TAB)` | JS `window.open('')` |
| **New Window** | `switchTo().newWindow(WindowType.WINDOW)` | JS `window.open('', '_blank')` |
| **Switch** | `switchTo().window(handle)` | Same |
| **Get All** | `getWindowHandles()` | Same |
| **Current** | `getWindowHandle()` | Same |

**Selenium 4's `newWindow()` eliminates 80% of window handling complexity.**