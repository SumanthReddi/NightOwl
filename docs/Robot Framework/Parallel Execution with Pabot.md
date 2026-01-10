---
sidebar_position: 18
---

# Parallel Execution with Pabot

Parallel execution helps reduce test execution time.
In Robot Framework, parallelism is achieved using **Pabot**.

Pabot is an external tool designed specifically for Robot Framework.

---

## What is Pabot?

Pabot:
- Enables parallel execution of Robot Framework tests
- Executes test suites or test cases concurrently
- Is commonly used in CI/CD pipelines

Without Pabot, Robot Framework runs tests sequentially.

---

## Installing Pabot

```bash
pip install robotframework-pabot
```

Verify installation:

```bash
pabot --version
```

---

## Basic Parallel Execution

Run tests in parallel:

```bash
pabot tests/
```

Run with multiple processes:

```bash
pabot --processes 4 tests/
```

---

## Parallel Execution Levels

Pabot supports parallel execution at:
- Suite level
- Test case level (advanced)

Most projects prefer **suite-level parallelism** for stability.

---

## Thread Safety Considerations

Parallel execution requires:
- Independent test data
- No shared state
- No static/global dependencies
- Isolated browsers and sessions

Failure to ensure thread safety causes flaky tests.

---

## When to Use Pabot

Use Pabot when:
- Test suite execution is slow
- Tests are independent
- CI pipeline time must be reduced

Avoid Pabot when:
- Tests share state
- Environment cannot support parallel load

---

## Common Pabot Issues ❌

- Port conflicts
- Shared test data collisions
- Environment limitations
- Browser driver contention

---

## Best Practices ✅

- Start with low process count
- Parallelize suites, not tests
- Separate smoke and regression
- Monitor system resources

---

## Key Takeaways

- Pabot enables parallel execution
- Improves execution speed
- Requires careful test design
- Essential for large test suites

---

## What’s Next?

👉 **Debugging and Best Practices**
