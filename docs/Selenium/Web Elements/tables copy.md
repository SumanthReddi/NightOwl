---
sidebar_position: 19
---

# Tables

## UI Behavior (Real Project Context)
Tables display **structured data in rows and columns**. In real applications, tables are critical for:
- Search results
- Transaction history
- Admin dashboards
- Reports and audits

Automation focuses on **data correctness, row actions, pagination, and sorting**, not layout styling.

### Table UI Example (Visual Reference)
![HTML table example](https://upload.wikimedia.org/wikipedia/commons/3/3b/HTML_table_example.png)

---

## Common Table Types

1. **Static HTML tables** (`<table>`, `<tr>`, `<td>`)
2. **Dynamic tables** (data loaded via API / JS)
3. **Paginated tables**
4. **Sortable / filterable tables**

---

## Typical HTML Structure

```html
<table id="users">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sumanth</td>
      <td>sumanth@test.com</td>
      <td>Active</td>
      <td><button>Edit</button></td>
    </tr>
  </tbody>
</table>
```

---

## Reading Table Data (Core Skill)

### Get All Rows
```java
List<WebElement> rows = driver.findElements(By.xpath("//table[@id='users']/tbody/tr"));
```

### Read All Cell Values
```java
for (WebElement row : rows) {
    List<WebElement> cells = row.findElements(By.tagName("td"));
    for (WebElement cell : cells) {
        System.out.println(cell.getText());
    }
}
```

---

## Reading Specific Cell (Row + Column)

### Example: Get Status for User "Sumanth"
```java
String status = driver.findElement(By.xpath(
    "//table[@id='users']//tr[td[text()='Sumanth']]/td[3]"
)).getText();

Assert.assertEquals(status, "Active");
```

---

## Clicking Action in a Specific Row

### Example: Click Edit for Specific User
```java
WebElement editBtn = driver.findElement(By.xpath(
    "//table[@id='users']//tr[td[text()='Sumanth']]//button[text()='Edit']"
));
editBtn.click();
```

---

## Dynamic / API-Loaded Tables

### Strategy
- Wait for rows to load
- Validate row count
- Then read data

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(
    By.xpath("//table[@id='users']/tbody/tr"), 0));
```

---

## Handling Pagination

### Validate Row Count per Page
```java
Assert.assertTrue(rows.size() <= 10);
```

### Navigate to Next Page
```java
driver.findElement(By.cssSelector(".next-page")).click();
```

---

## Sorting Validation

### Click Column Header
```java
driver.findElement(By.xpath("//th[text()='Name']")).click();
```

### Validate Sorted Data
```java
List<String> names = rows.stream()
    .map(r -> r.findElements(By.tagName("td")).get(0).getText())
    .toList();
```

---

## Common Mistakes ❌

1. Hardcoding row/column indexes blindly
2. Ignoring dynamic load waits
3. Using absolute XPath from root
4. Validating UI style instead of data
5. Mixing table logic inside test methods

---

## Best Practices ✅

- Use relative XPath scoped to table
- Identify rows using unique column values
- Externalize table utilities
- Always wait for data load
- Validate data, not UI layout

---

## Interview Notes 🎯

**Q: How do you read data from a table in Selenium?**  
A: Locate rows, iterate through cells, and extract text.

**Q: How do you click an action for a specific row?**  
A: Use XPath with row-level text matching.

**Q: Biggest challenge with table automation?**  
A: Dynamic data loading and pagination.

---

## Real-Project Tip 💡

Tables often represent **backend data** — always cross-check values against API or DB when possible.

---

## Summary

- Tables display structured data
- XPath row-scoping is critical
- Handle pagination & sorting carefully
- Focus on data correctness

Selenium 4 compliant • Enterprise ready • Interview safe