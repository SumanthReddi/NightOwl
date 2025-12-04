---
sidebar_position: 1
---

## 📌 What is Synchronization in Selenium?

Web applications load elements at different speeds due to:
- Network latency  
- JavaScript / AJAX calls  
- Animations  
- Dynamic content rendering  
- Browser performance  

If Selenium executes faster than the web page, it may try to interact with elements that are:
- Not yet visible  
- Not present in DOM  
- Not clickable  
- Not fully loaded  

➡️ **Synchronization** ensures Selenium WebDriver waits properly until elements or pages reach the expected state, making tests stable and reliable.

---

# ⭐ Types of Synchronization in Selenium

Synchronization in Selenium happens at **three levels**:

1️⃣ **Element-Level Synchronization**  
    - Implicit Wait  
    - Explicit Wait  
    - Fluent Wait  

2️⃣ **Page-Level Synchronization**  
    - Page Load Timeout  
    - Page Load Strategy  

3️⃣ **Script-Level Synchronization**  
    - Script Timeout  

Below is a complete explanation ⬇️

---

# 🧩 1. Selenium Waits (Element Synchronization)

# ⭐ Implicit Wait
A global wait applied to all elements while locating them.

```java
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
```

---

# ⭐ Explicit Wait
Waits for specific **conditions** on specific elements.

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));
wait.until(ExpectedConditions.elementToBeClickable(By.id("login")));
```

---

# ⭐ Fluent Wait
Advanced wait allowing custom polling & ignored exceptions.

```java
Wait<WebDriver> wait = new FluentWait<>(driver)
        .withTimeout(Duration.ofSeconds(30))
        .pollingEvery(Duration.ofSeconds(2))
        .ignoring(NoSuchElementException.class);
```

---

# 🕒 2. Selenium Timeouts (Page Load & Script)


Besides element waits, Selenium provides timeouts for controlling **page load** and **script execution behavior**.

---

# ⭐ Page Load Timeout

Controls **how long WebDriver waits for a page to fully load** before throwing an error.

```java
driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(60));
driver.get("https://example.com");
```

If the page does not finish loading within 60 seconds, Selenium throws a `TimeoutException`.

📌 Depends on **Page Load Strategy** (explained below).

---

# ⭐ Script Timeout

Used when executing **asynchronous JavaScript** using:

```java
executeAsyncScript()
```

Example:

```java
driver.manage().timeouts().scriptTimeout(Duration.ofSeconds(30));
```

If the async JS does not finish within 30 seconds → Selenium throws a timeout error.

---

# 🚀 3. Page Load Strategy


Page Load Strategy controls **how long Selenium waits for the page load process** during `driver.get()`.

### Selenium supports 3 strategies:

---

## ⭐ 1. NORMAL (default)
Waits for the entire page to load including:
- HTML  
- CSS  
- JS  
- Images  
- Subresources  

Equivalent to waiting for `document.readyState == "complete"`.

---

## ⭐ 2. EAGER
Stops waiting as soon as:
- Initial HTML is downloaded  
- DOMContentLoaded fires  

Does NOT wait for images, fonts, CSS, or JS.

---

## ⭐ 3. NONE
Selenium returns **immediately** after the first byte is received.

You must rely on **Explicit/Fluent Waits** for elements afterward.

Example:

```java
ChromeOptions options = new ChromeOptions();
options.setPageLoadStrategy(PageLoadStrategy.NONE);
WebDriver driver = new ChromeDriver(options);
```

Useful for:
- Very slow pages  
- SPA frameworks (React, Angular, Vue)  
- Heavy analytics/ads scripts  

---

# 📝 Summary


| Synchronization Type | Purpose |
|----------------------|---------|
| Implicit Wait | Global wait for element locating |
| Explicit Wait | Condition-based wait for specific elements |
| Fluent Wait | Custom advanced wait with polling & exception handling |
| Page Load Timeout | Wait for full page load |
| Script Timeout | Wait for async JavaScript execution |
| Page Load Strategy | Control how Selenium waits for `driver.get()` |

---

# ⭐ Final Note

A well-optimized automation framework typically uses:
- **Explicit / Fluent Waits** for elements  
- **Page Load Strategy** adjusted for application  
- **Page Load / Script Timeout** for stability  
- Avoids mixing multiple wait types unnecessarily  