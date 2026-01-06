---
sidebar_position: 2
---

<!-- # Selenium Grid – Setup Guide -->

## Grid 4 Standalone Mode

### Download Selenium Server
https://www.selenium.dev/downloads/

### Start Grid
```bash
java -jar selenium-server-4.x.x.jar standalone
```

Access UI:
```
http://localhost:4444/ui
```

---

## Hub & Node Mode

### Start Hub
```bash
java -jar selenium-server-4.x.x.jar hub
```

### Start Node
```bash
java -jar selenium-server-4.x.x.jar node
```

---

## Writing Tests for Grid

```java
ChromeOptions options = new ChromeOptions();

WebDriver driver = new RemoteWebDriver(
    new URL("http://localhost:4444"),
    options
);
```

---

## Common Setup Issues
- Port blocked
- Browser not installed
- Incorrect Grid URL

---

## Key Takeaways
- Standalone mode is easiest
- Hub/Node is for advanced setups
- Always use RemoteWebDriver
