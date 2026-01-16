---
sidebar_position: 12
---

# File Upload

## UI Behavior (Real Project Context)
File upload allows users to submit files from their local system to the application. In web apps, this is usually implemented using an `<input type="file">` element.

Common real-world usages:
- KYC document upload
- Profile picture upload
- Resume / attachment upload
- Report import features

⚠️ Selenium **cannot interact with OS file chooser dialogs** directly.

---

## Typical HTML Patterns

### Standard File Input
```html
<input type="file" id="resumeUpload">
```

### Hidden File Input (Very Common)
```html
<input type="file" id="fileInput" hidden>
<button id="uploadBtn">Upload</button>
```

---

## Correct Selenium Strategy

✔ Use `sendKeys()` with absolute file path  
❌ Do NOT click OS dialogs

---

## Uploading a File (Correct Way)

```java
WebElement upload = driver.findElement(By.id("resumeUpload"));
upload.sendKeys("/Users/test/Documents/resume.pdf");
```

---

## Upload with Hidden Input

```java
WebElement hiddenInput = driver.findElement(By.id("fileInput"));
((JavascriptExecutor) driver)
    .executeScript("arguments[0].style.display='block';", hiddenInput);

hiddenInput.sendKeys("/Users/test/Documents/report.pdf");
```

---

## Upload Multiple Files (If Supported)

```html
<input type="file" id="docs" multiple>
```

```java
String files = "/path/a.pdf\n/path/b.pdf";
driver.findElement(By.id("docs")).sendKeys(files);
```

---

## Validation After Upload

### Validate File Name
```java
String fileName = driver.findElement(By.id("fileName")).getText();
Assert.assertEquals(fileName, "resume.pdf");
```

### Validate Upload Success Message
```java
Assert.assertTrue(
    driver.findElement(By.id("successMsg")).isDisplayed()
);
```

---

## Browser-Level Upload Restrictions

- Chrome / Edge require absolute path
- Remote Grid needs file detector

---

## Selenium Grid / Remote Upload

```java
RemoteWebDriver remote = (RemoteWebDriver) driver;
remote.setFileDetector(new LocalFileDetector());

remote.findElement(By.id("resumeUpload"))
      .sendKeys("/local/path/resume.pdf");
```

---

## Common Mistakes ❌

1. Clicking upload button expecting OS dialog automation
2. Using relative file paths
3. Forgetting Grid file detector
4. Not validating upload result
5. Hardcoding local paths without config

---

## Best Practices ✅

- Always use absolute file paths
- Externalize file paths via config
- Validate upload success explicitly
- Use file detector for Grid execution
- Avoid AutoIt unless absolutely required

---

## Interview Notes 🎯

**Q: How do you upload a file in Selenium?**  
A: Using `sendKeys()` on `<input type="file">`.

**Q: Can Selenium handle OS file dialogs?**  
A: No.

**Q: How do you upload files in Selenium Grid?**  
A: Use `LocalFileDetector`.

---

## Real-Project Tip 💡

Always validate backend processing after upload — UI success alone is not enough.

---

## Summary

- File upload uses `<input type="file">`
- `sendKeys()` is the only stable approach
- Grid requires file detector
- Validation is mandatory

Selenium 4 compliant • Enterprise safe • Interview ready