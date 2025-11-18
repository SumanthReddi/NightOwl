---
sidebar_position: 16
---

Sliders are UI elements that allow users to choose a value from a range by dragging a handle along a track. They often use the `<input type="range">` element or custom HTML with JavaScript for visual and functional behavior.

***

### Locating Sliders

- Locate the slider element using IDs, classes, or XPath:

```java
// By ID
WebElement slider = driver.findElement(By.id("volumeSlider"));

// By XPath
WebElement slider = driver.findElement(By.xpath("//input[@type='range']"));
```


***

### Interacting with Sliders

Since sliders require dragging actions, Selenium’s `Actions` class is used to simulate dragging the slider handle to a desired position.

***

### Moving the Slider

**Example: Move slider by offset**

```java
Actions actions = new Actions(driver);
actions.clickAndHold(slider).moveByOffset(50, 0).release().perform();
```

This drags the slider handle 50 pixels to the right.

***

### Setting Slider Value Directly (If Supported)

If the slider is a standard input range, you can set the value attribute directly with JavaScript:

```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("arguments[0].value=75;", slider);
```

This sets the slider’s value to 75.

***

### Getting Slider Value

To read the current slider value:

```java
String value = slider.getAttribute("value");
System.out.println("Slider value: " + value);
```


***

### Example Code

```java
WebElement slider = driver.findElement(By.id("volumeSlider"));

// Move slider by 30 pixels
Actions move = new Actions(driver);
move.clickAndHold(slider).moveByOffset(30, 0).release().perform();

// Get current value
String sliderValue = slider.getAttribute("value");
System.out.println("Slider now set to: " + sliderValue);
```


***

### Notes

- The offset value in `moveByOffset()` may need adjustment based on your slider's pixel width.
- Some custom sliders may require interacting with nested elements or JavaScript events.
- Always validate the slider value after interaction.

***

This covers locating, interacting, dragging, setting, and getting values from sliders in Selenium WebDriver using Java.

