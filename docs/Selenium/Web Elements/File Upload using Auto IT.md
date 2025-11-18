---
sidebar_position: 12
---

AutoIt scripts allow controlling Windows-based dialogs like file upload windows, which Selenium has no direct access to since they are outside the browser DOM.

***

### How AutoIt Works with Selenium

1. **Create an AutoIt Script** to automate the native file upload dialog:
    - The script handles opening the dialog, typing the file path, and clicking the Open button.
    - For example, save the following as `fileupload.au3`:
```autoit
ControlFocus("File Upload", "", "Edit1")
ControlSetText("File Upload", "", "Edit1", "C:\\path\\to\\file.txt")
ControlClick("File Upload", "", "Button1")
```

2. **Compile AutoIt Script** into an executable (`fileupload.exe`).
3. **Call the AutoIt Executable from Selenium Java Code** when the file dialog opens:
```java
// Click the button that opens the native file dialog
driver.findElement(By.id("uploadButton")).click();

// Run AutoIt script to handle the file dialog
Runtime.getRuntime().exec("C:\\path\\to\\fileupload.exe");
```


***

### Use Case

AutoIt is especially useful when the file input field is hidden or when clicking an upload button triggers a native OS dialog instead of a standard `<input>`.

***

### Advantages of AutoIt

- Handles native window pop-ups that Selenium cannot.
- Automates complex Windows dialogs beyond file uploads.
- Easy to script and integrate with Selenium tests.

***

### Notes

- AutoIt works only on Windows machines.
- Be sure to synchronize execution so Selenium waits for the AutoIt script to complete.
- For cross-platform tests, native Selenium file upload methods are preferred.

***

### Summary

| Approach | Use Case | Sample Code |
| :-- | :-- | :-- |
| Selenium `sendKeys` | Standard `<input type="file">` present | `uploadElement.sendKeys("C:\\file.txt");` |
| AutoIt | Native OS file upload dialogs (Windows only) | Run AutoIt.exe after triggering dialog: `Runtime.getRuntime().exec("fileupload.exe");` |


***

This explains how to complement Selenium file uploads with AutoIt to handle native dialogs in Windows automation.

