---
sidebar_position: 2
---

<!-- ## Broken Link Validation in Selenium (Java) -->

## What is Broken Link Validation?
A broken link is a hyperlink or image URL that returns:
- **4xx** (Client errors like 404, 403)
- **5xx** (Server errors)

Selenium alone cannot validate HTTP status codes — it is used only to **collect URLs**. Validation is done using HTTP calls.

---

## High-Level Flow
1. Open page using Selenium
2. Collect all links and images
3. Filter invalid URLs
4. Send HTTP request (HEAD / GET)
5. Validate response code

---

## Extract Links Using Selenium
```java
List<WebElement> links = driver.findElements(By.tagName("a"));
```

## Extract Images
```java
List<WebElement> images = driver.findElements(By.tagName("img"));
```

---

## Broken Link Validation Code (Java)
```java
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import org.openqa.selenium.*;

public class BrokenLinks {

    public static void checkBrokenLinks(WebDriver driver) {

        List<WebElement> links = driver.findElements(By.tagName("a"));

        for (WebElement link : links) {

            String url = link.getAttribute("href");

            if (url == null || url.isEmpty()) continue;
            if (url.startsWith("javascript")
                || url.startsWith("mailto")
                || url.startsWith("tel")) continue;

            try {
                HttpURLConnection connection =
                    (HttpURLConnection) new URL(url).openConnection();

                connection.setRequestMethod("HEAD");
                connection.setConnectTimeout(5000);
                connection.connect();

                int responseCode = connection.getResponseCode();

                if (responseCode >= 400) {
                    System.out.println("Broken Link: " + url + " -> " + responseCode);
                }

            } catch (Exception e) {
                System.out.println("Exception for URL: " + url);
            }
        }
    }
}
```

---

## Image Validation
```java
for (WebElement img : driver.findElements(By.tagName("img"))) {
    String src = img.getAttribute("src");
    if (src == null || src.isEmpty()) continue;

    HttpURLConnection conn =
        (HttpURLConnection) new URL(src).openConnection();
    conn.setRequestMethod("HEAD");
    conn.connect();

    if (conn.getResponseCode() >= 400) {
        System.out.println("Broken Image: " + src);
    }
}
```

---

## HEAD vs GET
- **HEAD**: Faster, no response body
- **GET**: Needed when HEAD is blocked (403)

### Fallback Logic
```java
if (responseCode == 403) {
    connection.disconnect();
    connection = (HttpURLConnection) new URL(url).openConnection();
    connection.setRequestMethod("GET");
    responseCode = connection.getResponseCode();
}
```

---

## Best Practices
- Run once per build, not per test
- Allow 2xx and 3xx as valid
- Skip third-party links if needed
- Log failures to reports
- Parallelize for large pages

---

## CI Rule
```java
if (responseCode >= 400) {
    Assert.fail("Broken link found");
}
```

---

## Robot Framework Hint
- Use `Get WebElements`
- Extract `href`
- Validate using `RequestsLibrary`

