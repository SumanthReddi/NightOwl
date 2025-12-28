---
sidebar_position: 1
---

To count links on a page, count links in a specific section like footer, open each link in a new tab using Ctrl+Enter, and then get all page titles, use `findElements`, section scoping, `Keys.chord`, and window-handle iteration in Selenium WebDriver with Java.

Below are concise, reusable notes you can paste into your documentation.

***

## 1. Count all links on a page

**Concept**:
All normal HTML links use the anchor tag `<a>`. To count all links, fetch all elements with tag name `a` and get the list size.

**Code**

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

public class CountAllLinks {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://rahulshettyacademy.com/AutomationPractice/");

        // 1) Get all links on the page
        List<WebElement> allLinks = driver.findElements(By.tagName("a"));

        // 2) Print total count
        System.out.println("Total links on page: " + allLinks.size());

        // 3) (Optional) Print each link text and URL
        for (WebElement link : allLinks) {
            System.out.println("Text: " + link.getText() + " | Href: " + link.getAttribute("href"));
        }

        driver.quit();
    }
}
```

**Key points**

- `findElements(By.tagName("a"))` returns a `List<WebElement>` containing all anchor elements.
- `list.size()` gives the total number of links.

***

## 2. Count links in a specific section (e.g., footer)

**Concept**:
Scope the search to a parent section element (like footer) first, then search links **inside** that element using `footerElement.findElements(...)`.

**Steps**

1. Identify locator for footer section (e.g., `<footer>` tag, id, or class).
2. Get the footer WebElement.
3. Call `findElements(By.tagName("a"))` on that footer element.
4. Use `size()` to get link count.

**Code**

```java
public class CountFooterLinks {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://rahulshettyacademy.com/AutomationPractice/");

        // 1) Locate footer section (adjust locator to your application)
        WebElement footer = driver.findElement(By.id("gf-BIG"));   // or By.tagName("footer") / By.xpath("...")

        // 2) Get all <a> tags within footer only
        List<WebElement> footerLinks = footer.findElements(By.tagName("a"));

        // 3) Count footer links
        System.out.println("Footer link count: " + footerLinks.size());

        // 4) (Optional) Print each footer link text
        for (WebElement link : footerLinks) {
            System.out.println("Footer link: " + link.getText() + " | " + link.getAttribute("href"));
        }

        driver.quit();
    }
}
```

**Key points**

- Using `footer.findElements(...)` restricts search **inside** the footer only, not the whole page.
- You can do the same for any section (header, nav, sidebar) by changing the parent locator.

***

## 3. Open all links in a section using Ctrl + Enter

**Concept**:
Most browsers open a link in a new tab when user presses `Ctrl + Enter` on a focused link. Selenium can simulate this by sending the combined key using `Keys.chord(Keys.CONTROL, Keys.ENTER)` to each link element.

> Note: On macOS, use `Keys.COMMAND` instead of `Keys.CONTROL`.

**Code**

```java
import org.openqa.selenium.Keys;
import java.util.List;
import java.util.Set;

public class OpenLinksInNewTabs {
    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://rahulshettyacademy.com/AutomationPractice/");

        // 1) Locate footer (or any section)
        WebElement footer = driver.findElement(By.id("gf-BIG"));

        // 2) Get all links within footer
        List<WebElement> footerLinks = footer.findElements(By.tagName("a"));
        System.out.println("Footer links: " + footerLinks.size());

        // 3) Keyboard shortcut for Ctrl+Enter
        String ctrlEnter = Keys.chord(Keys.CONTROL, Keys.ENTER);

        // 4) Open each link in a new tab
        for (WebElement link : footerLinks) {
            link.sendKeys(ctrlEnter);
            Thread.sleep(500); // small wait so tabs can open
        }

        // Keep browser open for the next step (title collection)
        // driver.quit();  // do NOT quit yet
    }
}
```

**Key points**

- `Keys.chord` builds a chord of key presses to simulate keyboard shortcuts.
- `link.sendKeys(ctrlEnter)` is equivalent to focusing the link and pressing Ctrl+Enter.
- Add waits if your browser or machine is slow to open tabs.

***

## 4. Get titles of all newly opened tabs

**Concept**:
Each browser window/tab has a unique **window handle**. After opening new tabs, collect all window handles, switch to each handle, and read `driver.getTitle()`.

**Steps**

1. Store the **parent window handle** before opening links.
2. After opening all links, get `driver.getWindowHandles()` which returns a `Set<String>` of all handles.
3. Loop through the set, switch to each handle, and capture the title.
4. Optionally switch back to parent window.

**Code (combined with previous step)**

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class OpenLinksAndGetTitles {
    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://rahulshettyacademy.com/AutomationPractice/");

        // Store parent window handle
        String parentWindow = driver.getWindowHandle();

        // Locate footer
        WebElement footer = driver.findElement(By.id("bf-BIG"));

        // Get all links in footer
        List<WebElement> footerLinks = footer.findElements(By.tagName("a"));
        System.out.println("Footer links: " + footerLinks.size());

        String ctrlEnter = Keys.chord(Keys.CONTROL, Keys.ENTER);

        // Open each link in new tab
        for (WebElement link : footerLinks) {
            link.sendKeys(ctrlEnter);
            Thread.sleep(500);
        }

        // Wait a bit so all tabs load
        Thread.sleep(3000);

        // Get all window handles
        Set<String> allHandles = driver.getWindowHandles();
        List<String> handleList = new ArrayList<>(allHandles);

        // Iterate through each tab and print the title
        for (String handle : handleList) {
            driver.switchTo().window(handle);
            System.out.println("Window handle: " + handle);
            System.out.println("Page title: " + driver.getTitle());
        }

        // Optionally switch back to parent window
        driver.switchTo().window(parentWindow);

        driver.quit();
    }
}
```

**Key points**

- `getWindowHandles()` returns all open windows/tabs.
- Always keep track of the **original** handle to return to main window if required.
- Consider adding explicit waits if titles depend on dynamic loading.
