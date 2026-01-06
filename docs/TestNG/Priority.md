---
sidebar_position: 9
---

# Priority

Priority in TestNG is used to **control the execution order of test methods** within the same class.  

It helps define which tests should run first when **order matters**, while still keeping tests logically independent.

---

## What is Priority?

`priority` is an attribute of the `@Test` annotation.

```java
@Test(priority = 1)
public void testA() {}
```

- Lower value → runs earlier
- Higher value → runs later

---

## Default Priority Behavior

```java
@Test
public void testOne() {}

@Test
public void testTwo() {}
```

- If no priority is specified:
  - TestNG assigns **priority = 0**
  - Execution order depends on **method declaration order** (not guaranteed across JVMs)

---

## Priority Ordering Rules

```java
@Test(priority = -1)
public void setup() {}

@Test(priority = 0)
public void login() {}

@Test(priority = 1)
public void payment() {}
```

### Execution Order
```
setup  →  login  →  payment
```

### Important Rules
- Negative priorities are allowed
- Same priority → execution order is **not guaranteed**
- Priority works **within the same class only**

---

## Priority vs Dependencies

### Priority Example

```java
@Test(priority = 1)
public void login() {}

@Test(priority = 2)
public void payment() {}
```

### Dependency Example (Preferred)

```java
@Test
public void login() {}

@Test(dependsOnMethods = "login")
public void payment() {}
```

### Key Difference

| Priority | Dependency |
|---|---|
| Controls order | Controls execution condition |
| Does not skip on failure | Skips on dependency failure |
| Weaker guarantee | Strong guarantee |

➡️ **Dependencies are safer than priority** when test order truly matters.

---

## Priority with Multiple Classes

```java
class A {
    @Test(priority = 1)
    void testA() {}
}

class B {
    @Test(priority = 1)
    void testB() {}
}
```

⚠️ Priority does **NOT** control execution across classes.  
Class execution order is controlled by:
- `testng.xml`
- `preserve-order`
- Parallel settings

---

## Priority vs `testng.xml` Order

### XML Order

```xml
<methods>
    <include name="testB"/>
    <include name="testA"/>
</methods>
```

### Priority Rule

```java
@Test(priority = 1)
void testA(){}

@Test(priority = 2)
void testB(){}
```

➡️ **Priority wins over XML method order**

---

## Priority with `preserve-order`

```xml
<suite preserve-order="true">
```

Priority is ignored **only if**:
- No priority is defined
- No parallel execution
- XML order is explicitly specified

Otherwise, **priority always takes precedence**.

---

## Priority with Parallel Execution

⚠️ Priority is **unreliable** with:
- `parallel="methods"`
- `parallel="classes"`

Parallel execution ignores ordering guarantees.

---

## Common Mistakes

- Using priority instead of dependencies
- Assuming priority works across classes
- Mixing priority with parallel execution
- Relying on same-priority execution order

---

## Best Practices

- Use priority only for **simple ordering**
- Use dependencies for **logical sequencing**
- Avoid priority in parallel-heavy suites
- Keep priority values small and meaningful
- Prefer readable test names over priority tricks

---

## Key Takeaways

- Lower priority runs first
- Priority applies only within a class
- Same priority = unpredictable order
- Dependencies are safer than priority
- Parallel execution ignores priority guarantees
