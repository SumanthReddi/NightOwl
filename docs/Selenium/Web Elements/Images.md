---
sidebar_position: 14
---

Images in HTML are represented by the `<img>` tag. Automating images mainly involves verifying their presence, checking attributes like `src` and `alt`, and validating if they are loaded properly on the page.

***

### Locating Images

- Locate images using attributes such as `id`, `alt`, `src`, `class`, or XPath:

```java
// By ID
WebElement image = driver.findElement(By.id("logo"));

// By Alt text using XPath
WebElement image = driver.findElement(By.xpath("//img[@alt='Company Logo']"));

// By CSS Selector for class
WebElement image = driver.findElement(By.cssSelector("img.img-responsive"));
```


***

### Verifying Image Presence and Visibility

- Check if the image element is present and visible:

```java
boolean isDisplayed = image.isDisplayed();
System.out.println("Image displayed? " + isDisplayed);
```


***

### Getting Image Attributes

- Get the image source URL:

```java
String src = image.getAttribute("src");
System.out.println("Image Source: " + src);
```

- Get alternative text:

```java
String altText = image.getAttribute("alt");
System.out.println("Alt Text: " + altText);
```


***

### Verifying if Image is Loaded (Advanced)

To verify if the image is fully loaded (not broken), you can use JavaScript Executor to check the `complete` and `naturalWidth` properties:

```java
JavascriptExecutor js = (JavascriptExecutor) driver;
Boolean imageLoaded = (Boolean) js.executeScript(
    "return arguments[0].complete && typeof arguments[0].naturalWidth != \"undefined\" && arguments[0].naturalWidth > 0", image);

System.out.println("Image loaded successfully? " + imageLoaded);
```


***

### Example: Image Verification

```java
WebElement logo = driver.findElement(By.id("logo"));
if (logo.isDisplayed()) {
    String imageSrc = logo.getAttribute("src");
    System.out.println("Logo is displayed with source: " + imageSrc);
}
```


***

### Notes

- Handling image click actions works as with any clickable element:

```java
image.click();
```

- Images can also be part of links, so you may interact with their parent elements.

***

This covers locating, verifying, and validating images on web pages using Selenium WebDriver in Java.
