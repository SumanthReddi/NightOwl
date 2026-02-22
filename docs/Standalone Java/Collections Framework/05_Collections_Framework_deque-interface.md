---
sidebar_position: 21
title: Deque Interface 
---

# Deque Interface -- Double-Ended Queue (Deep Conceptual & Practical Coverage)

This document explains:

-   What Deque represents
-   How it differs from Queue
-   All insertion/removal methods (both ends)
-   Stack behavior using Deque
-   Internal expectations
-   Common implementations
-   Performance characteristics
-   Interview traps
-   Automation relevance
-   Code examples

------------------------------------------------------------------------

# 1️⃣ What is Deque?

Deque stands for:

Double Ended Queue

Definition:

``` java
public interface Deque<E> extends Queue<E>
```

It allows:

• Insertion at front\
• Insertion at rear\
• Removal from front\
• Removal from rear

------------------------------------------------------------------------

# 2️⃣ Why Deque Exists

Normal Queue → FIFO only\
Deque → More flexible

It can act as:

✓ Queue\
✓ Stack\
✓ Sliding window structure\
✓ Double-ended buffer

------------------------------------------------------------------------

# 3️⃣ Core Deque Methods

  Operation       Throws Exception   Returns Special Value
  --------------- ------------------ -----------------------
  Insert Front    addFirst(e)        offerFirst(e)
  Insert Last     addLast(e)         offerLast(e)
  Remove Front    removeFirst()      pollFirst()
  Remove Last     removeLast()       pollLast()
  Examine Front   getFirst()         peekFirst()
  Examine Last    getLast()          peekLast()

------------------------------------------------------------------------

# 4️⃣ Example -- Basic Usage

``` java
import java.util.*;

Deque<String> deque = new ArrayDeque<>();

deque.addFirst("B");
deque.addLast("C");
deque.addFirst("A");

System.out.println(deque);  // [A, B, C]
```

------------------------------------------------------------------------

# 5️⃣ Remove Operations

``` java
System.out.println(deque.removeFirst()); // A
System.out.println(deque.removeLast());  // C
System.out.println(deque);              // [B]
```

------------------------------------------------------------------------

# 6️⃣ Using Deque as Stack (Recommended)

Instead of Stack class:

``` java
Deque<Integer> stack = new ArrayDeque<>();

stack.push(10);
stack.push(20);

System.out.println(stack.pop()); // 20
```

push() = addFirst()\
pop() = removeFirst()

ArrayDeque is preferred over Stack.

------------------------------------------------------------------------

# 7️⃣ Using Deque as Queue

``` java
Deque<Integer> queue = new ArrayDeque<>();

queue.offerLast(1);
queue.offerLast(2);

System.out.println(queue.pollFirst()); // 1
```

------------------------------------------------------------------------

# 8️⃣ Common Implementations

• ArrayDeque\
• LinkedList

ArrayDeque → Better performance\
LinkedList → Node-based structure

------------------------------------------------------------------------

# 9️⃣ Performance Overview

  Implementation   add/remove   memory
  ---------------- ------------ ---------------------
  ArrayDeque       O(1)         Less overhead
  LinkedList       O(1)         More memory (nodes)

ArrayDeque uses circular array internally.

------------------------------------------------------------------------

# 🔟 ArrayDeque Internal Concept (Preview)

ArrayDeque uses:

Circular array

Head & tail pointers move dynamically.

No shifting required like ArrayList.

Time Complexity:

add/remove → O(1) amortized

------------------------------------------------------------------------

# 1️⃣1️⃣ Null Handling

ArrayDeque does NOT allow null.

``` java
deque.add(null);  // NullPointerException
```

LinkedList allows null (but not recommended in Deque usage).

------------------------------------------------------------------------

# 1️⃣2️⃣ Thread Safety

Deque implementations:

ArrayDeque → Not thread-safe\
LinkedList → Not thread-safe

For concurrent use:

ConcurrentLinkedDeque

------------------------------------------------------------------------

# 1️⃣3️⃣ Example -- Palindrome Check

``` java
public static boolean isPalindrome(String str) {
    Deque<Character> deque = new ArrayDeque<>();

    for(char c : str.toCharArray()) {
        deque.addLast(c);
    }

    while(deque.size() > 1) {
        if(deque.removeFirst() != deque.removeLast()) {
            return false;
        }
    }
    return true;
}
```

------------------------------------------------------------------------

# 1️⃣4️⃣ Interview Questions

Q: Difference between Queue and Deque? A: Deque allows operations at
both ends.

Q: Why ArrayDeque preferred over Stack? A: Better performance, no
synchronization overhead.

Q: Does Deque allow null? A: Depends on implementation (ArrayDeque does
not).

------------------------------------------------------------------------

# 1️⃣5️⃣ Automation Framework Relevance

Useful for:

• Implementing stack-based parsing\
• Sliding window problems\
• Backtracking algorithms\
• Managing undo/redo operations\
• Retry logic with both ends control

Example:

``` java
Deque<String> testHistory = new ArrayDeque<>();

testHistory.push("Login");
testHistory.push("Submit");
testHistory.pop();
```

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ Double-ended nature\
✓ addFirst/addLast difference\
✓ removeFirst/removeLast\
✓ Stack usage via Deque\
✓ ArrayDeque advantages\
✓ O(1) performance\
✓ Null & thread-safety rules\
✓ Automation use cases\
✓ Interview clarity

Next file:

arraydeque-internal.md
