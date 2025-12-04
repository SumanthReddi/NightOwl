---
sidebar_position: 3
---


<!-- # ⭐ Complete Guide to **Explicit Wait** in Selenium (Java) -->

## 📌 What is Explicit Wait?

**Explicit Wait** in Selenium is a type of wait that tells WebDriver to **wait for a certain condition to occur before proceeding** further in the code.

Unlike Implicit Wait (which is global and only waits for element presence), Explicit Wait is:

- Applied **only to specific elements**
- Based on **specific conditions** (like element clickable, visible, presence of element, URL contains, etc.)
- More powerful and flexible for dynamic web applications

---

## ❓ Why Do We Need Explicit Wait?

Modern web applications use:
- AJAX calls
- JavaScript-based rendering
- Animations and loaders
- Dynamic content

So:
- Elements may be present in the DOM but **not visible**
- Elements may be visible but **not clickable**
- URLs change after some async operations
- Text inside elements loads after a delay

Implicit wait alone is **not enough** for these cases.

Explicit Wait helps you **wait exactly for what you need**, such as:
- Wait until button is clickable
- Wait until loader disappears
- Wait until text is present
- Wait until URL contains some value

---

## 🧠 How Explicit Wait Works Internally

1. You create a `WebDriverWait` object and specify a **maximum timeout**.
2. You call `wait.until(condition)` with an `ExpectedCondition`.
3. Selenium will:
   - Repeatedly evaluate the condition
   - At a regular polling interval (default: 500 ms)
   - Until:
     - Condition is met → returns successfully  
     - Timeout is reached → throws `TimeoutException`

So it's essentially **polling** the page until the condition becomes true.

---

## ⭐ Syntax of Explicit Wait (Selenium 4, Java)

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));

WebElement element = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.id("username"))
);
element.sendKeys("admin");
```

### 🔹 Explanation:
- `Duration.ofSeconds(20)` → Max wait time is 20 seconds
- `visibilityOfElementLocated` → Condition
- `wait.until(...)` → Will wait until element is visible or timeout occurs

---

## 🔍 Commonly Used ExpectedConditions

Explicit Wait uses the `ExpectedConditions` class (in Java):

### 1️⃣ Element Visibility

```java
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("email")));
```

- Waits until the element is:
  - Present in DOM
  - Visible (height & width > 0)

---

### 2️⃣ Element Clickable

```java
wait.until(ExpectedConditions.elementToBeClickable(By.id("loginBtn")));
```

- Waits until:
  - Element is visible
  - Element is enabled (not disabled)

---

### 3️⃣ Presence of Element in DOM

```java
wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@class='item']")));
```

- Waits until the element is **present in DOM**
- It **may or may not be visible**

---

### 4️⃣ Text To Be Present in Element

```java
wait.until(ExpectedConditions.textToBePresentInElementLocated(
        By.id("statusMessage"), "Success"
));
```

- Waits until given text appears inside the element

---

### 5️⃣ Title / URL Conditions

```java
wait.until(ExpectedConditions.titleContains("Dashboard"));
wait.until(ExpectedConditions.urlContains("dashboard"));
```

- Waits for title or URL conditions to be true

---

### 6️⃣ Element to be Selected

```java
wait.until(ExpectedConditions.elementToBeSelected(By.id("rememberMe")));
```

- Used for checkboxes, radio buttons, dropdown options

---

### 7️⃣ Invisibility of Element

```java
wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("loadingSpinner")));
```

- Waits until the loader/overlay disappears

---

## ⭐ Full Example – Login Scenario with Explicit Wait

```java
WebDriver driver = new ChromeDriver();
driver.get("https://example.com/login");

// Create WebDriverWait (20 seconds timeout)
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));

// Wait for username field to be visible
WebElement username = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.id("username"))
);
username.sendKeys("adminUser");

// Wait for password field
WebElement password = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.id("password"))
);
password.sendKeys("adminPass");

// Wait for login button to be clickable
WebElement loginBtn = wait.until(
        ExpectedConditions.elementToBeClickable(By.id("loginBtn"))
);
loginBtn.click();

// Wait for home page URL
wait.until(ExpectedConditions.urlContains("dashboard"));
```

---

## ⚙ Custom Polling with Explicit Wait (Using FluentWait Style)

Even though `WebDriverWait` in Selenium 4 internally uses `FluentWait`, you can still customize polling for more control.

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
wait.pollingEvery(Duration.ofSeconds(1));  // custom polling

WebElement element = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.id("profile"))
);
```

---

## 📌 Explicit Wait vs Implicit Wait

| Feature              | Implicit Wait                            | Explicit Wait                                             |
|----------------------|------------------------------------------|-----------------------------------------------------------|
| Scope                | Global (all elements)                    | Specific element(s)                                      |
| Condition support    | Only presence in DOM                    | Many conditions (visible, clickable, URL, text, etc.)    |
| Flexibility          | Low                                      | High                                                     |
| Recommended for      | Simple/static apps                       | Dynamic/Ajax-heavy apps                                  |
| Best practice        | Avoid or use very low value              | Prefer using Explicit Wait                               |

---

## ⚠️ Pitfalls / Things to Avoid

### 1️⃣ Mixing Implicit and Explicit Waits

```java
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));
```

This can cause **unexpected additional delays** because:
- Implicit wait affects every `findElement()` inside explicit waits
- Total waiting time becomes unpredictable

**Best practice:**  
👉 Use either **only Explicit Wait**, set Implicit Wait to `0` or don’t use it.

---

### 2️⃣ Using Too High Timeout

Setting `new WebDriverWait(driver, Duration.ofSeconds(60));` everywhere can:
- Make tests **very slow**
- Delay failures when something is genuinely broken

Use realistic timeouts:
- 10–20 seconds for most dynamic elements
- 30+ seconds only for heavy flows (file uploads, big loads)

---

### 3️⃣ Not Handling TimeoutException

If condition is not met → `TimeoutException` is thrown.

You can handle it:

```java
try {
    WebElement btn = wait.until(
            ExpectedConditions.elementToBeClickable(By.id("submit"))
    );
    btn.click();
} catch (TimeoutException e) {
    System.out.println("Element was not clickable within time: " + e.getMessage());
}
```

---

## ✅ When Should You Use Explicit Wait?

Use Explicit Wait when:

- Elements appear **after Ajax calls**
- Buttons become clickable **after validation/animation**
- Text or status messages change dynamically
- URL or title changes after actions
- Loaders/spinners appear temporarily

In real projects, **Explicit Wait is the primary synchronization technique**.

---

## 🧠 Interview Questions on Explicit Wait

### ✔ Q1: What is Explicit Wait in Selenium?
Explicit Wait is a type of wait that waits for a specific condition (like visibility, clickability, URL, etc.) to be true for a specific element, up to a maximum timeout.

---

### ✔ Q2: Difference between Implicit and Explicit Wait?

- Implicit: global, only waits for presence of element, no conditions  
- Explicit: local/specific, supports many conditions, more flexible

---

### ✔ Q3: What is `ExpectedConditions`?

A helper class in Selenium providing **predefined conditions** used with `WebDriverWait`, such as visibilityOfElementLocated, elementToBeClickable, urlContains, etc.

---

### ✔ Q4: What happens if the condition in Explicit Wait is never met?

Selenium throws a `TimeoutException` after the maximum wait time is reached.

---

### ✔ Q5: Can Explicit Wait be used for non-element conditions?

Yes. It can wait for:
- URL to contain a string
- Title to be a specific value
- Alerts to be present
- Number of windows to be a certain count

---

## 📝 Summary

- **Explicit Wait** is the most powerful and preferred synchronization method in Selenium.
- It waits for **specific conditions** on **specific elements**.
- Implemented using `WebDriverWait` + `ExpectedConditions`.
- Ideal for **dynamic, modern web applications**.
- Avoid mixing it with Implicit Wait to prevent unpredictable delays.

Use Explicit Wait smartly to make your automation:
✅ Stable  
✅ Reliable  
✅ Less flaky  

