---
sidebar_position: 6
title: Data Tables and Examples
---

# Data Tables and Examples

Cucumber provides **Data Tables** and **Examples** to handle data-driven scenarios effectively. Choosing the correct mechanism helps maintain **readability, maintainability, and proper BDD design**.

---

## Data Tables

Data Tables allow structured data to be passed into step definitions. They are useful when multiple related values need to be provided in a scenario.

### Example

```gherkin
Given user provides the following details
  | field    | value   |
  | username | user1   |
  | password | pass123 |
  | role     | admin   |
```

---

## When to Use Data Tables

Use Data Tables when:

- Passing structured inputs like form fields
- Representing objects or request bodies
- Multiple values belong to one logical step

Avoid Data Tables when:

- Only one or two simple values are needed
- Large datasets reduce readability

---

## Mapping Data Tables in Step Definitions

Cucumber allows multiple ways to map tables.

---

### Mapping as List of Maps

```java
@Given("user provides the following details")
public void userDetails(DataTable table){

    List<Map<String,String>> rows = table.asMaps(String.class,String.class);

    for(Map<String,String> row : rows){

        String field = row.get("field");
        String value = row.get("value");

        System.out.println(field + ":" + value);

    }

}
```

Each row becomes a **map entry**.

---

### Mapping as Map

Use this when the table has two columns representing key-value pairs.

```java
@Given("user provides the following details")
public void userDetails(DataTable table){

    Map<String,String> details = table.asMap(String.class,String.class);

    System.out.println(details.get("username"));
    System.out.println(details.get("password"));

}
```

---

### Mapping to Custom Objects

For complex structures you can map tables to objects.

```java
public class User {

    private String username;
    private String password;
    private String role;

}
```

Step definition:

```java
@Given("user provides the following details")
public void userDetails(List<User> users){

    for(User user : users){

        System.out.println(user.getUsername());

    }

}
```

---

## Scenario Outline and Examples

Examples are used with **Scenario Outline** to run the same scenario multiple times with different data.

### Example

```gherkin
Scenario Outline: Login validation
  When user logs in with "<username>" and "<password>"
  Then login result should be "<result>"

Examples:
 | username | password | result |
 | user1 | pass1 | success |
 | user2 | pass2 | failure |
```

Each row executes the scenario once.

---

## Data Tables vs Examples

| Feature | Data Tables | Examples |
|-------|-------|-------|
| Purpose | Pass structured data | Run scenario multiple times |
| Execution | Single execution | Multiple executions |
| Usage | Forms, objects | Input variations |
| Location | Inside steps | Under Scenario Outline |

---

## Common Mistakes

Avoid:

- Using Data Tables to simulate multiple tests
- Using Scenario Outline for complex structured data
- Very large tables in feature files
- Mixing multiple behaviors in one outline

---

## Best Practices

- Use **Data Tables for objects**
- Use **Examples for multiple test runs**
- Keep tables **small and readable**
- Split large datasets across scenarios
- Prioritize readability

---

## Real Example

### Feature

```gherkin
Scenario Outline: Add products to cart
  Given I am on product page
  When I add <quantity> of "<product>" to cart
  Then cart should show <items> items

Examples:
 | product | quantity | items |
 | Headphones | 2 | 2 |
 | Speaker | 1 | 3 |
```

### Step Definitions

```java
@When("I add {int} of {string} to cart")
public void addProduct(int quantity,String product){

    System.out.println("Adding "+quantity+" "+product);

}

@Then("cart should show {int} items")
public void verifyItems(int items){

    System.out.println("Items:"+items);

}
```

---

## Interview Questions

**What is the difference between Data Tables and Examples?**

Data Tables pass structured input into a single scenario.  
Examples execute a scenario multiple times using different datasets.

---

**Can both be used together?**

Yes, but only if it improves readability.

---

## Key Takeaways

- Data Tables pass structured data
- Examples drive multiple executions
- Choose based on scenario intent
- Keep feature files readable