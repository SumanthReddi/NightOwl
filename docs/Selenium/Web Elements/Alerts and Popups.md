---
sidebar_position: 9
---
### Alerts and Pop-ups

Alerts and pop-ups are browser-generated dialogs that require user interaction before proceeding. Selenium WebDriver provides a dedicated `Alert` interface to handle these JavaScript alerts, confirmations, and prompts.

***

### Types of Alerts

1. **Simple Alert:** Displays a message with an OK button.
2. **Confirmation Alert:** Displays a message with OK and Cancel buttons.
3. **Prompt Alert:** Displays a message with a text input field, plus OK and Cancel buttons.

***

### Handling Alerts in Selenium

To interact with alerts, switch the driver’s context to the alert using `driver.switchTo().alert()`.

***

### Common Alert Methods

| Method | Description | Example |
| :-- | :-- | :-- |
| `accept()` | Clicks OK button on alert or confirmation | `driver.switchTo().alert().accept();` |
| `dismiss()` | Clicks Cancel button on confirmation or prompt | `driver.switchTo().alert().dismiss();` |
| `getText()` | Retrieves the message text from the alert | `String alertText = driver.switchTo().alert().getText();` |
| `sendKeys()` | Sends text input to prompt alerts | `driver.switchTo().alert().sendKeys("input text");` |


***

### Example: Handling Simple Alert

```java
// Trigger alert on the page
driver.findElement(By.id("alertButton")).click();

// Switch to alert
Alert alert = driver.switchTo().alert();

// Get alert text
String alertMessage = alert.getText();
System.out.println("Alert says: " + alertMessage);

// Accept alert
alert.accept();
```


***

### Example: Handling Confirmation Alert

```java
driver.findElement(By.id("confirmButton")).click();
Alert confirmAlert = driver.switchTo().alert();

// Dismiss (click Cancel)
confirmAlert.dismiss();
```


***

### Example: Handling Prompt Alert

```java
driver.findElement(By.id("promptButton")).click();
Alert promptAlert = driver.switchTo().alert();

promptAlert.sendKeys("Automation input");
promptAlert.accept();
```


***

### Waiting for Alerts

Use explicit waits to handle alerts that appear asynchronously:

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
Alert alert = wait.until(ExpectedConditions.alertIsPresent());
alert.accept();
```


***

### Notes

- Always switch to the alert before interacting; failing to do so results in `NoAlertPresentException`.
- Handling native OS-level dialogs (file upload pop-ups, authentication dialogs) requires advanced techniques or tools beyond Selenium’s standard API.

***

This summary covers how to detect, read, respond, and work with JavaScript alerts and pop-ups in Selenium WebDriver using Java.