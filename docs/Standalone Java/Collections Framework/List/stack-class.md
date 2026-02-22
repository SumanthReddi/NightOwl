---
sidebar_position: 8
title: Stack Class
---

# Stack Class 

This document covers:

-   What Stack is
-   Why it extends Vector
-   LIFO behavior
-   Core methods with examples
-   Internal working
-   Performance characteristics
-   Why Stack is considered legacy
-   Modern alternative (Deque / ArrayDeque)
-   Real interview problems using Stack
-   Automation relevance

------------------------------------------------------------------------

# 1️⃣ What is Stack?

Stack follows:

Last In → First Out (LIFO)

Definition:

``` java
public class Stack<E> extends Vector<E>
```

Important:

• Backed by Vector\
• Synchronized\
• Legacy class\
• Maintains insertion order

------------------------------------------------------------------------

# 2️⃣ Basic Stack Operations

## push()

Adds element to top.

``` java
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
stack.push(30);

System.out.println(stack);  // [10, 20, 30]
```

------------------------------------------------------------------------

## pop()

Removes top element.

``` java
System.out.println(stack.pop());  // 30
System.out.println(stack);        // [10, 20]
```

Time Complexity: O(1)

------------------------------------------------------------------------

## peek()

Returns top element without removing.

``` java
System.out.println(stack.peek());  // 20
```

------------------------------------------------------------------------

## empty()

``` java
System.out.println(stack.empty());  // false
```

------------------------------------------------------------------------

## search(Object o)

Returns 1-based position from top.

``` java
System.out.println(stack.search(10));  // 2
```

------------------------------------------------------------------------

# 3️⃣ Internal Working

Since Stack extends Vector:

• Uses dynamic array internally\
• Synchronized methods\
• elementData\[\] array\
• Doubling growth strategy

push() internally calls:

``` java
addElement(item);
```

pop() internally:

``` java
removeElementAt(size() - 1);
```

------------------------------------------------------------------------

# 4️⃣ Performance Characteristics

  Operation   Complexity
  ----------- ----------------
  push        O(1) amortized
  pop         O(1)
  peek        O(1)
  search      O(n)

Because backed by array.

------------------------------------------------------------------------

# 5️⃣ Example -- Reverse String Using Stack

``` java
String str = "Java";
Stack<Character> stack = new Stack<>();

for(char c : str.toCharArray()) {
    stack.push(c);
}

StringBuilder reversed = new StringBuilder();

while(!stack.empty()) {
    reversed.append(stack.pop());
}

System.out.println(reversed.toString());
```

------------------------------------------------------------------------

# 6️⃣ Example -- Balanced Parentheses (Interview Classic)

``` java
import java.util.Stack;

public class BalancedParentheses {

    public static boolean isBalanced(String str) {
        Stack<Character> stack = new Stack<>();

        for(char c : str.toCharArray()) {
            if(c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else if(c == ')' || c == '}' || c == ']') {
                if(stack.isEmpty()) return false;

                char top = stack.pop();

                if((c == ')' && top != '(') ||
                   (c == '}' && top != '{') ||
                   (c == ']' && top != '[')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println(isBalanced("{[()]}"));  // true
    }
}
```

Time Complexity: O(n)

------------------------------------------------------------------------

# 7️⃣ Why Stack is Considered Legacy

Reasons:

• Extends Vector (old design) • All methods synchronized • Poor design
compared to modern Deque • Not recommended in new code

------------------------------------------------------------------------

# 8️⃣ Modern Alternative -- ArrayDeque

Better approach:

``` java
Deque<Integer> stack = new ArrayDeque<>();

stack.push(10);
stack.push(20);
System.out.println(stack.pop());
```

Advantages:

• Faster • Not synchronized • Better design • No legacy overhead

------------------------------------------------------------------------

# 9️⃣ Stack vs ArrayDeque Comparison

  Feature       Stack    ArrayDeque
  ------------- -------- ------------
  Legacy        Yes      No
  Thread-safe   Yes      No
  Performance   Slower   Faster
  Recommended   No       Yes

------------------------------------------------------------------------

# 🔟 Automation Framework Relevance

Stack rarely used directly.

But concept used in:

• Parsing expressions • Validation logic • Nested structure validation •
Undo operations

Balanced parenthesis logic used in:

• XML/JSON validation • Expression parsing

------------------------------------------------------------------------

# 1️⃣1️⃣ Interview Questions

Q: Why is Stack not recommended? A: Legacy + synchronization overhead.

Q: What should we use instead of Stack? A: Deque (ArrayDeque).

Q: What is LIFO? A: Last In First Out.

Q: Is Stack thread-safe? A: Yes (because extends Vector).

------------------------------------------------------------------------

# 1️⃣2️⃣ Advanced Insight

Even though Stack is synchronized:

Compound operations still require external synchronization.

Example:

``` java
if(!stack.empty()) {
    stack.pop();
}
```

Not atomic in multi-threaded scenario.

------------------------------------------------------------------------

# Final Mastery Checklist

You must understand:

✓ LIFO behavior\
✓ push / pop / peek\
✓ Internal Vector dependency\
✓ Performance characteristics\
✓ Why considered legacy\
✓ Modern replacement\
✓ Interview-level usage examples

Next file:

set-interface.md
