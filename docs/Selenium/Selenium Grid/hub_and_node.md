---
sidebar_position: 3
---

# Hub and Node

## Why Hub–Node Understanding Matters (Real Project View)
Even though Selenium Grid 4 uses internal services, the **Hub–Node concept is still essential** for understanding:
- Session routing failures
- Browser availability issues
- Parallel execution limits

Most Grid debugging conversations still reference **Hub** and **Node** terminology.

---

## What Is the Hub?

The **Hub** is the **single entry point** for all test execution requests.

### Hub Responsibilities
- Accept incoming session requests
- Match requested capabilities
- Route sessions to appropriate nodes
- Track active sessions

Tests always communicate with the Hub — **never directly with nodes**.

---

## What Is a Node?

A **Node** is a machine (physical or virtual) that:
- Hosts one or more browsers
- Executes test sessions
- Reports status back to the Hub

Nodes can run:
- Multiple browsers
- Multiple sessions (limited by configuration)

---

## Hub–Node Interaction Flow

1. Test sends request to Hub
2. Hub evaluates requested capabilities
3. Hub selects a matching Node
4. Node starts browser session
5. Test commands are executed on Node

This process is transparent to test code.

---

## Capability Matching (Critical Concept)

Hub assigns tests based on:
- Browser name
- Browser version
- Platform (OS)

If **no node matches**, session creation fails.

---

## Example: RemoteWebDriver Setup

```java
WebDriver driver = new RemoteWebDriver(
    new URL("http://localhost:4444"), options
);
```

The URL always points to the **Hub**, not a Node.

---

## Parallel Execution Limits

Parallelism is controlled by:
- Number of nodes
- Browsers per node
- Max sessions per node

Overloading nodes leads to:
- Session failures
- Browser crashes
- Timeouts

---

## Common Hub–Node Issues

### Session Not Created
- Capability mismatch
- Node unavailable
- Browser not installed on node

### Tests Hanging
- Node overloaded
- Network latency
- Browser crash

---

## What Hub–Node Does NOT Fix ❌

- Flaky tests
- Synchronization issues
- Bad locators
- Test data conflicts

Grid infrastructure executes tests — it does not improve test quality.

---

## Common Mistakes ❌

1. Pointing tests directly to node URL
2. Assuming unlimited parallel sessions
3. Hardcoding browser capabilities
4. Ignoring node resource limits
5. Not monitoring node health

---

## Best Practices ✅

- Always connect tests to Hub URL
- Parameterize browser & platform
- Limit max sessions per node
- Monitor node logs and health
- Scale nodes gradually

---

## Interview Notes 🎯

**Q: What is the role of Hub in Selenium Grid?**  
A: It routes test sessions to suitable nodes.

**Q: Can tests connect directly to nodes?**  
A: No, tests must connect to the Hub.

**Q: What happens if no node matches requested capabilities?**  
A: Session creation fails.

---

## Real-Project Tip 💡

If Grid failures spike under load, reduce parallelism before blaming Selenium.

---

## Summary

- Hub routes execution requests
- Nodes execute browser sessions
- Capability matching is key
- Proper limits prevent Grid instability
