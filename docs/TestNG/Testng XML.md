---
sidebar_position: 8
---

## 9. testng.xml - MASTER CONTROL FILE 

**Single file controls:**

- Which tests run
- Parallel settings
- Browser parameters
- Groups to include/exclude
- Listeners

```xml
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="E2ESuite" parallel="methods" thread-count="4">
    <!-- Global listeners -->
    <listeners>
        <listener class-name="ScreenshotListener"/>
        <listener class-name="ExtentReportListener"/>
    </listeners>
    
    <!-- Chrome Tests -->
    <test name="Chrome">
        <parameter name="browser" value="chrome"/>
        <groups>
            <run>
                <include name="smoke"/>
                <exclude name="slow"/>
            </run>
        </groups>
        <classes>
            <class name="tests.LoginTest"/>
        </classes>
    </test>
    
    <!-- Firefox Tests -->
    <test name="Firefox">
        <parameter name="browser" value="firefox"/>
        <classes>
            <class name="tests.CrossBrowserTest"/>
        </classes>
    </test>
</suite>
```