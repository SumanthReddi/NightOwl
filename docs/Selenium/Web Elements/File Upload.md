---
sidebar_position: 11
---

Uploading files on web pages usually involves interacting with an `<input type="file">` element. Selenium WebDriver automates file uploads by sending the file’s absolute path to this element using `sendKeys()`.

***

### Locating the File Upload Element

Locate the file input field by `id`, `name`, or other locators:

```java
WebElement uploadElement = driver.findElement(By.id("fileUpload"));
```


***

### Uploading a File

Send the full file path as text to the file input:

```java
uploadElement.sendKeys("C:\\path\\to\\your\\file.txt");
```

This action simulates the user selecting a file from the file chooser dialog.

***

### Example Code for File Upload

```java
// Navigate to file upload page
driver.get("https://example.com/upload");

// Locate the file input
WebElement upload = driver.findElement(By.id("uploadFile"));

// Upload the file by sending the absolute path
upload.sendKeys("C:\\Users\\User\\Documents\\sample.pdf");
```


***

### Notes

- The file path must be absolute and correctly formatted for your OS.
- Selenium doesn’t handle native OS file dialogs. Sending keys directly to `<input type="file">` bypasses the OS dialog.
- If the upload element is hidden or styled, you may need to use JavaScript to make it interactable before sending keys.
- Some advanced/third-party file upload widgets may require specialized handling or third-party tools.

***

### Handling Hidden File Inputs (Example)

```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("document.getElementById('uploadFile').style.display='block';");

WebElement upload = driver.findElement(By.id("uploadFile"));
upload.sendKeys("C:\\path\\to\\file.txt");
```


***

This completes the notes on automating file uploads in Selenium WebDriver using Java.

