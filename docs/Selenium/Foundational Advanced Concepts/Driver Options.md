---
sidebar_position: 5
---

## Selenium Driver Options & Arguments

In Selenium 4, the `Options` classes are the primary way to customize browser sessions.
They have replaced the legacy `DesiredCapabilities` for local driver configuration.This is supported by Python, Ruby, etc. While it's also available in Java, its usage in Java is deprecated.

---

## 1. Global Capability Options
Every browser's `Options` class inherits from `AbstractDriverOptions`. These methods are universal.

| Method | Type | Description |
| :--- | :--- | :--- |
| `setAcceptInsecureCerts(boolean)` | Boolean | Bypasses "Your connection is not private" SSL errors. |
| `setPageLoadStrategy(Strategy)` | Enum | Defines wait behavior: `NORMAL`, `EAGER`, or `NONE`. |
| `setUnhandledPromptBehaviour(Behavior)`| Enum | Auto-handles JavaScript alerts (`ACCEPT`, `DISMISS`, etc.). |
| `setProxy(Proxy)` | Object | Configures network traffic routing. |

---

## 2. Chromium Options (Chrome & Edge)
Chrome and Edge share the Chromium engine. Configuration is split into **Arguments** (CLI flags) and **Experimental Options** (Internal Preferences).

### Key CLI Arguments
Use `addArguments()` to pass these flags:

* `--headless=new`: Runs the browser in the background (Selenium 4.8+).
* `--incognito`: Launches Chrome in private mode.
* `--inprivate`: Launches Edge in private mode.
* `--start-maximized`: Forces the window to open at full screen.
* `--disable-notifications`: Blocks browser-level push notification prompts.
* `--user-data-dir=/path/`: Points to a specific user profile to keep sessions/cookies.

### Experimental Options (Preferences)
Used to modify internal browser settings like download paths.

```java
ChromeOptions options = new ChromeOptions();
Map<String, Object> prefs = new HashMap<>();

// Set default download directory
prefs.put("download.default_directory", "/usr/local/downloads");
// Disable the 'Save Password' prompt
prefs.put("credentials_enable_service", false);

options.setExperimentalOption("prefs", prefs);
// Remove "Chrome is being controlled by automated software" info bar
options.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
```


## ChromeOptions
### Common Arguments
- --start-maximized
- --headless=new
- --incognito
- --disable-notifications
- --disable-infobars
- --disable-extensions
- --disable-gpu
- --no-sandbox
- --remote-allow-origins=*
- --window-size=1920,1080

### Example
```java
ChromeOptions options = new ChromeOptions();
options.addArguments(
    "--start-maximized",
    "--disable-notifications",
    "--remote-allow-origins=*"
);
WebDriver driver = new ChromeDriver(options);
```

## EdgeOptions
- Chromium based (similar to Chrome)
- --start-maximized
- --headless=new
- --disable-notifications
- --inprivate

```java
EdgeOptions options = new EdgeOptions();
options.addArguments("--start-maximized");
WebDriver driver = new EdgeDriver(options);
driver.get("https://expired.badssl.com/");
```

## FirefoxOptions
### Arguments
- --headless
- --width=1920
- --height=1080

### Preferences
```java
options.addPreference("dom.webnotifications.enabled", false);
options.addPreference("geo.enabled", false);
```

## InternetExplorerOptions
```java
options.ignoreZoomSettings();
options.introduceFlakinessByIgnoringSecurityDomains();
options.requireWindowFocus();
```

## SafariOptions
- Limited support
- Enable **Allow Remote Automation** manually

## RemoteWebDriver (Sauce Labs)
```java
WebDriver driver = new RemoteWebDriver(
    new URL("https://ondemand.saucelabs.com/wd/hub"),
    options
);
```

## CI Best Practices
- Use headless
- Set window-size
- Disable GPU
- Use no-sandbox

More Info On : https://developer.chrome.com/docs/chromedriver/capabilities 