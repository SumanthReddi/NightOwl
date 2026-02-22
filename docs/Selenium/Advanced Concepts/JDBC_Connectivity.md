---
sidebar_position: 10
---
# JDBC Database Connectivity

## Introduction

In real-world automation frameworks, we often validate UI data against
database records.

Example scenarios: - Validate user registration data saved in DB -
Verify transaction details - Check backend status after UI action -
Validate API responses with DB records

To achieve this, we use:

-   Java (Core language)
-   Selenium (UI Automation)
-   JDBC (Java Database Connectivity)

------------------------------------------------------------------------

## What is JDBC?

JDBC (Java Database Connectivity) is an API that allows Java
applications to interact with databases.

It allows you to: - Connect to database - Execute SQL queries - Fetch
results - Close connection

------------------------------------------------------------------------

## JDBC Architecture

```{=html}
Java Application
        |
        v
JDBC API (java.sql package)
        |
        v
JDBC Driver (Vendor specific)
        |
        v
Database (Oracle / MySQL / PostgreSQL)
```

------------------------------------------------------------------------

## Required Dependencies (Maven)

For MySQL:
```
`<dependency>`{=html} `<groupId>`{=html}mysql`</groupId>`{=html}
`<artifactId>`{=html}mysql-connector-java`</artifactId>`{=html}
`<version>`{=html}8.0.33`</version>`{=html} `</dependency>`{=html}
```
For Oracle:
```
`<dependency>`{=html}
`<groupId>`{=html}com.oracle.database.jdbc`</groupId>`{=html}
`<artifactId>`{=html}ojdbc8`</artifactId>`{=html}
`<version>`{=html}21.9.0.0`</version>`{=html} `</dependency>`{=html}
```
------------------------------------------------------------------------

## Basic JDBC Steps

There are 5 main steps:

1.  Load Driver (optional in modern Java)
2.  Create Connection
3.  Create Statement
4.  Execute Query
5.  Close Connection

------------------------------------------------------------------------

## Simple JDBC Example (MySQL)

``` java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DBConnectionExample {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/testdb";
        String username = "root";
        String password = "root123";

        try {
            Connection con = DriverManager.getConnection(url, username, password);
            Statement stmt = con.createStatement();

            ResultSet rs = stmt.executeQuery("SELECT * FROM users");

            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Name: " + rs.getString("name"));
            }

            rs.close();
            stmt.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

------------------------------------------------------------------------

## Using PreparedStatement (Recommended)

PreparedStatement prevents SQL injection and improves performance.

``` java
import java.sql.*;

public class PreparedStmtExample {

    public static void main(String[] args) throws Exception {

        Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/testdb",
                "root",
                "root123"
        );

        String query = "SELECT * FROM users WHERE id = ?";
        PreparedStatement ps = con.prepareStatement(query);
        ps.setInt(1, 5);

        ResultSet rs = ps.executeQuery();

        while (rs.next()) {
            System.out.println(rs.getString("name"));
        }

        con.close();
    }
}
```

------------------------------------------------------------------------

## Selenium + DB Validation Example

Scenario: 1. User registers on UI 2. Capture username 3. Validate same
username exists in DB

``` java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.sql.*;

public class SeleniumDBValidation {

    public static void main(String[] args) throws Exception {

        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/register");

        driver.findElement(By.id("username")).sendKeys("testuser123");
        driver.findElement(By.id("submit")).click();

        String uiUsername = "testuser123";

        Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/testdb",
                "root",
                "root123"
        );

        PreparedStatement ps = con.prepareStatement(
                "SELECT username FROM users WHERE username = ?"
        );

        ps.setString(1, uiUsername);

        ResultSet rs = ps.executeQuery();

        if (rs.next()) {
            System.out.println("User exists in DB. Validation Passed");
        } else {
            System.out.println("User NOT found. Validation Failed");
        }

        con.close();
        driver.quit();
    }
}
```

------------------------------------------------------------------------

## Best Practices

✔ Always use PreparedStatement\
✔ Never hardcode credentials (use config file)\
✔ Close connections in finally block or use try-with-resources\
✔ Keep DB utilities in separate class\
✔ Use connection pooling for large frameworks

------------------------------------------------------------------------

## Utility Class Example (Reusable)

``` java
import java.sql.*;

public class DBUtils {

    public static Connection getConnection() throws Exception {
        return DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/testdb",
                "root",
                "root123"
        );
    }

    public static String getUserById(int id) throws Exception {

        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement(
                "SELECT name FROM users WHERE id=?"
        );

        ps.setInt(1, id);

        ResultSet rs = ps.executeQuery();
        String name = null;

        if (rs.next()) {
            name = rs.getString("name");
        }

        con.close();
        return name;
    }
}
```

------------------------------------------------------------------------

## Common Interview Questions

Q1: Difference between Statement and PreparedStatement?\
Q2: What is SQL Injection?\
Q3: How to handle DB connection in framework?\
Q4: What is connection pooling?\
Q5: How to validate UI data with DB in automation?

------------------------------------------------------------------------

## Summary

You learned:

-   What JDBC is
-   How to connect Java to DB
-   Execute queries
-   Use PreparedStatement
-   Integrate Selenium with DB validation
-   Framework-level utility structure

This is enough to build enterprise-level Selenium + DB automation
validation.
