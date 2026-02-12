---
sidebar_position: 10
---

# Alerts and Popups

## UI Behavior (Real Project Context)
Alerts and popups interrupt normal UI flow and require **explicit handling**. Selenium can handle **JavaScript alerts** directly, but **browser popups / OS dialogs** need different strategies.Selenium WebDriver provides a dedicated `Alert` interface to handle these JavaScript alerts, confirmations, and prompts.


Real-world usages:
- Confirmation before delete
- Error notifications
- Session timeout warnings
- Payment confirmation dialogs

---

## Types You’ll Encounter

1. **JavaScript Alert** – OK button only
2. **JavaScript Confirm** – OK / Cancel
3. **JavaScript Prompt** – Input + OK / Cancel
4. **Browser / OS Popups** – File upload, auth dialogs (not JS)

---

## JavaScript Alert – Basic Handling

### Switch to Alert
```java
Alert alert = driver.switchTo().alert();
```

### Read Alert Text
```java
String alertText = alert.getText();
Assert.assertTrue(alertText.contains("Are you sure"));
```

### Accept Alert (OK)
```java
alert.accept();
```

---

## JavaScript Confirm Popup

### Cancel Confirmation
```java
Alert confirm = driver.switchTo().alert();
confirm.dismiss();
```

### Validate Result After Action
```java
String result = driver.findElement(By.id("result")).getText();
Assert.assertEquals(result, "Action Cancelled");
```

---

## JavaScript Prompt Popup

### Enter Text and Accept
```java
Alert prompt = driver.switchTo().alert();
prompt.sendKeys("Sumanth");
prompt.accept();
```

### Validate Submitted Value
```java
String value = driver.findElement(By.id("name")).getText();
Assert.assertEquals(value, "Sumanth");
```

---

## Waiting for Alert (Mandatory in Real Projects)

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.alertIsPresent());

Alert alert = driver.switchTo().alert();
alert.accept();
```

---

## Handling Unexpected Alerts

```java
try {
    Alert alert = driver.switchTo().alert();
    alert.accept();
} catch (NoAlertPresentException e) {
    // No alert appeared
}
```

---

## Browser / OS Popups (Important Clarification)

Selenium **cannot** handle OS-level popups directly.

Examples:
- File upload dialog
- Browser notification permission
- Windows authentication popup

### Correct Alternatives
- Use `<input type="file">` with `sendKeys()`
- Browser options (disable notifications)
- AutoIt / Robot (awareness only)

---

## File Upload Popup (Correct Way)

```java
WebElement upload = driver.findElement(By.id("fileUpload"));
upload.sendKeys("/path/to/file.pdf");
```

---

### Common Alert Methods

| Method | Description | Example |
| :-- | :-- | :-- |
| `accept()` | Clicks OK button on alert or confirmation | `driver.switchTo().alert().accept();` |
| `dismiss()` | Clicks Cancel button on confirmation or prompt | `driver.switchTo().alert().dismiss();` |
| `getText()` | Retrieves the message text from the alert | `String alertText = driver.switchTo().alert().getText();` |
| `sendKeys()` | Sends text input to prompt alerts | `driver.switchTo().alert().sendKeys("input text");` |


## Common Mistakes ❌

1. Forgetting to switch to alert
2. Trying to locate alert using DOM locators
3. Using `Thread.sleep` instead of alert waits
4. Assuming Selenium can handle OS popups
5. Not validating post-alert behavior

---

## Best Practices ✅

- Always wait for alert presence
- Validate alert text before accepting
- Handle unexpected alerts safely
- Never use sleeps for alert handling
- Separate JS alert logic in utility methods

---

## Interview Notes 🎯

**Q: How do you handle JavaScript alerts in Selenium?**  
A: Using `driver.switchTo().alert()`.

**Q: Can Selenium handle OS-level popups?**  
A: No. Selenium only handles browser-level JS alerts.

**Q: How do you wait for an alert?**  
A: Using `ExpectedConditions.alertIsPresent()`.

---

## Real-Project Tip 💡

Always assert application state **after** alert handling — alerts often trigger backend actions.

---

## Summary

- Selenium handles only JS alerts
- Switch context before interacting
- Explicit waits are mandatory
- OS popups require alternative strategies
