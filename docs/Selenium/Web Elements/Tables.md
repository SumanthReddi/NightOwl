---
sidebar_position: 18
---
### Tables

Tables in HTML are structured with `<table>`, `<tr>` (table rows), `<th>` (header cells), and `<td>` (data cells) elements. Automating tables involves extracting, validating, and interacting with data inside these elements.


***

### Locating Tables and Table Elements

- Locate the table element:

```java
WebElement table = driver.findElement(By.id("tableID"));
```

- Locate rows:

```java
List<WebElement> rows = table.findElements(By.tagName("tr"));
System.out.println("Number of rows: " + rows.size());
```

- Locate columns/cells in a specific row:

```java
List<WebElement> cells = rows.get(0).findElements(By.tagName("td"));
System.out.println("Number of columns in first row: " + cells.size());
```


***

### Reading Table Data

You can loop through rows and columns to extract text:

```java
for (WebElement row : rows) {
    List<WebElement> cells = row.findElements(By.tagName("td"));
    for (WebElement cell : cells) {
        System.out.print(cell.getText() + "\t");
    }
    System.out.println();
}
```

For headers (`<th>`), similar methods apply:

```java
List<WebElement> headers = table.findElements(By.tagName("th"));
for (WebElement header : headers) {
    System.out.print(header.getText() + "\t");
}
System.out.println();
```


***

### Interacting with Elements Inside Tables

Tables may contain clickable elements like buttons, links, or inputs inside cells. Locate and interact with these elements like normal:

```java
WebElement button = rows.get(1).findElement(By.tagName("button"));
button.click();
```


***

### Validations

- Assert expected number of rows and columns.
- Validate cell data against expected values.
- Verify presence of specific elements inside cells.

***

### Example: Extracting and Printing Table Data

```java
WebElement table = driver.findElement(By.id("empTable"));
List<WebElement> rows = table.findElements(By.tagName("tr"));

for (int i = 1; i < rows.size(); i++) { // skipping header row
    List<WebElement> cols = rows.get(i).findElements(By.tagName("td"));
    for (WebElement col : cols) {
        System.out.print(col.getText() + " ");
    }
    System.out.println();
}
```

***

### Notes

- Use XPath or CSS selectors for more complex table structures.
- Be mindful of pagination or dynamically loaded rows when automating larger tables.

***

This provides methods for locating, extracting, and interacting with data in HTML tables using Selenium WebDriver and Java.

