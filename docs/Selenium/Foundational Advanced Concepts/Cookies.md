---
sidebar_position: 7
---

Cookies in Selenium manage session data, authentication tokens, and user preferences across browser sessions.

***

## **Core Cookie Operations**

### **1. Adding Cookies**

```java
// Add single cookie
Cookie cookie = new Cookie("sessionId", "abc123");
driver.manage().addCookie(cookie);

// Add multiple cookies
Cookie userCookie = new Cookie("user", "testuser");
Cookie themeCookie = new Cookie("theme", "dark");
driver.manage().addCookies(userCookie, themeCookie);
```

**Requirements**: Page must be loaded (`driver.get("https://example.com")`) before adding cookies.

***

### **2. Reading Cookies**

```java
// Get single cookie by name
Cookie sessionCookie = driver.manage().getCookieNamed("sessionId");
String sessionValue = sessionCookie.getValue();  // "abc123"

// Get ALL cookies
Set<Cookie> allCookies = driver.manage().getCookies();
System.out.println("Total cookies: " + allCookies.size());

// Iterate and print
for (Cookie cookie : allCookies) {
    System.out.println(cookie.getName() + " = " + cookie.getValue());
}
```


***

### **3. Deleting Cookies**

```java
// Delete specific cookie
driver.manage().deleteCookieNamed("sessionId");

// Delete cookie by object reference
driver.manage().deleteCookie(sessionCookie);

// Delete ALL cookies
driver.manage().deleteAllCookies();
```


***

### **4. Cookie Properties (Cookie Class Methods)**

```java
Cookie cookie = new Cookie("test", "value");
cookie.getName();      // "test"
cookie.getValue();     // "value"
cookie.getDomain();    // "example.com"
cookie.getPath();      // "/"
cookie.getExpiry();    // Expiry Date
cookie.isSecure();     // false
cookie.isHttpOnly();   // false
```


***

## **Complete Cookie Lifecycle Example**

```java
@Test
public void completeCookieTest() {
    driver.get("https://example.com");
    
    // 1. ADD cookies
    driver.manage().addCookie(new Cookie("username", "testuser"));
    driver.manage().addCookie(new Cookie("sessionToken", "xyz789", 
                                        ".example.com", "/", 3600)); // domain, path, maxAge
    
    // 2. READ cookies
    Set<Cookie> cookies = driver.manage().getCookies();
    assertEquals(2, cookies.size());
    
    // 3. MODIFY - delete and re-add
    driver.manage().deleteCookieNamed("username");
    driver.manage().addCookie(new Cookie("username", "admin"));
    
    // 4. Verify
    Cookie newUserCookie = driver.manage().getCookieNamed("username");
    assertEquals("admin", newUserCookie.getValue());
    
    // 5. CLEANUP
    driver.manage().deleteAllCookies();
}
```


***

## **Advanced Cookie Features**

### **Cookie with Full Parameters**

```java
// Complete Cookie constructor: name, value, domain, path, expiry, secure, httpOnly
Date expiryDate = new Date(System.currentTimeMillis() + 3600000); // 1 hour
Cookie authCookie = new Cookie("auth", "token123", 
                              "example.com", "/secure", 
                              expiryDate, true, true);
driver.manage().addCookie(authCookie);
```


### **Persistent Cookies (Save/Load Across Sessions)**

```java
// SAVE cookies to file
Set<Cookie> cookies = driver.manage().getCookies();
String cookiesJson = new Gson().toJson(cookies);
Files.write(Paths.get("cookies.json"), cookiesJson.getBytes());

// LOAD cookies in new session
driver.get("https://example.com"); // Must navigate first
Type cookiesType = new TypeToken<Set<Cookie>>(){}.getType();
Set<Cookie> savedCookies = new Gson().fromJson(cookiesJson, cookiesType);
for (Cookie cookie : savedCookies) {
    driver.manage().addCookie(cookie);
}
driver.navigate().refresh(); // Refresh to apply cookies
```


***

## **Cookie Management Utility Class**

```java
public class CookieManager {
    public static void addAuthCookie(WebDriver driver, String token) {
        driver.manage().addCookie(new Cookie("authToken", token, 
                                            ".example.com", "/", 
                                            true, true));
    }
    
    public static String getSessionId(WebDriver driver) {
        Cookie session = driver.manage().getCookieNamed("sessionId");
        return session != null ? session.getValue() : null;
    }
    
    public static void clearAll(WebDriver driver) {
        driver.manage().deleteAllCookies();
    }
}
```


***

## **Common Cookie Scenarios**

| Scenario | Code |
| :-- | :-- |
| **Bypass login** | Add session cookies before navigation |
| **Test cookie-based auth** | Add/delete cookies, verify redirects |
| **Persistent sessions** | Save/load cookies between test runs |
| **Domain/path testing** | Set specific domain/path in Cookie constructor |


***

## **Cookie vs LocalStorage/SessionStorage**

| Storage | Selenium Method | Persistence |
| :-- | :-- | :-- |
| **Cookies** | `driver.manage().addCookie()` | Browser session + expiry |
| **LocalStorage** | `((JavascriptExecutor)driver).executeScript("localStorage.setItem('key','value');")` | Persistent |
| **SessionStorage** | `((JavascriptExecutor)driver).executeScript("sessionStorage.setItem('key','value');")` | Tab session |


***

## **Best Practices**

1. **Always navigate first**: `driver.get(url)` before `addCookie()`
2. **Use proper domain**: Include leading dot for subdomains (`.example.com`)
3. **Set realistic expiry**: Use maxAge or expiry Date
4. **Secure \& HttpOnly**: Set `true` for production-like testing
5. **Cleanup**: `deleteAllCookies()` in `@AfterMethod`
6. **Save sessions**: Serialize cookies for login bypass in test suites

***

## **Quick Reference Table**

| Action | Method |
| :-- | :-- |
| Add cookie | `driver.manage().addCookie(cookie)` |
| Get all | `driver.manage().getCookies()` |
| Get one | `driver.manage().getCookieNamed("name")` |
| Delete one | `driver.manage().deleteCookieNamed("name")` |
| Delete all | `driver.manage().deleteAllCookies()` |
