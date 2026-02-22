---
sidebar_position: 12
title: Common String Programs
---

## Common String Programs -- Interview Deep Practice

This document includes:

-   Reverse String (multiple approaches)
-   Palindrome check
-   Anagram check
-   Duplicate characters
-   Character frequency count
-   Remove duplicates
-   Count words
-   Longest substring without repeating characters
-   Without using inbuilt shortcuts (interview style)
-   Time complexity discussion
-   Automation relevance

------------------------------------------------------------------------

# 1️⃣ Reverse a String

## Method 1: Using StringBuilder

``` java
String str = "Java";
String reversed = new StringBuilder(str).reverse().toString();
System.out.println(reversed);
```

Time Complexity: O(n)

------------------------------------------------------------------------

## Method 2: Using Loop (Interview Preferred)

``` java
String str = "Java";
String reversed = "";

for(int i = str.length() - 1; i >= 0; i--) {
    reversed += str.charAt(i);
}

System.out.println(reversed);
```

⚠ Not efficient for large strings (O(n²))

------------------------------------------------------------------------

## Method 3: Using char array

``` java
char[] arr = str.toCharArray();
int left = 0;
int right = arr.length - 1;

while(left < right) {
    char temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}

System.out.println(new String(arr));
```

Efficient & in-place logic.

------------------------------------------------------------------------

# 2️⃣ Palindrome Check

``` java
String str = "madam";
String reversed = new StringBuilder(str).reverse().toString();

if(str.equals(reversed)) {
    System.out.println("Palindrome");
}
```

Without using reverse:

``` java
boolean isPalindrome = true;
for(int i = 0; i < str.length() / 2; i++) {
    if(str.charAt(i) != str.charAt(str.length() - 1 - i)) {
        isPalindrome = false;
        break;
    }
}
```

Time Complexity: O(n)

------------------------------------------------------------------------

# 3️⃣ Anagram Check

Two strings are anagrams if they contain same characters in any order.

``` java
import java.util.Arrays;

String s1 = "listen";
String s2 = "silent";

char[] arr1 = s1.toCharArray();
char[] arr2 = s2.toCharArray();

Arrays.sort(arr1);
Arrays.sort(arr2);

System.out.println(Arrays.equals(arr1, arr2));
```

Time Complexity: O(n log n)

------------------------------------------------------------------------

# 4️⃣ Count Character Frequency

``` java
String str = "programming";

int[] freq = new int[256];

for(char c : str.toCharArray()) {
    freq[c]++;
}

for(int i = 0; i < freq.length; i++) {
    if(freq[i] > 0) {
        System.out.println((char)i + " -> " + freq[i]);
    }
}
```

Time Complexity: O(n)

------------------------------------------------------------------------

# 5️⃣ Find Duplicate Characters

``` java
String str = "programming";
int[] freq = new int[256];

for(char c : str.toCharArray()) {
    freq[c]++;
}

for(int i = 0; i < freq.length; i++) {
    if(freq[i] > 1) {
        System.out.println((char)i);
    }
}
```

------------------------------------------------------------------------

# 6️⃣ Remove Duplicate Characters

``` java
String str = "programming";
String result = "";

for(int i = 0; i < str.length(); i++) {
    char c = str.charAt(i);
    if(result.indexOf(c) == -1) {
        result += c;
    }
}

System.out.println(result);
```

Better approach using LinkedHashSet:

``` java
import java.util.LinkedHashSet;
import java.util.Set;

Set<Character> set = new LinkedHashSet<>();

for(char c : str.toCharArray()) {
    set.add(c);
}

StringBuilder sb = new StringBuilder();
for(char c : set) {
    sb.append(c);
}
System.out.println(sb.toString());
```

------------------------------------------------------------------------

# 7️⃣ Count Words in a String

``` java
String str = "Java is powerful language";

String[] words = str.trim().split("\\s+");
System.out.println(words.length);
```

------------------------------------------------------------------------

# 8️⃣ Longest Substring Without Repeating Characters (Important)

Sliding Window Technique:

``` java
import java.util.HashSet;

String s = "abcabcbb";
HashSet<Character> set = new HashSet<>();

int left = 0, maxLength = 0;

for(int right = 0; right < s.length(); right++) {
    while(set.contains(s.charAt(right))) {
        set.remove(s.charAt(left));
        left++;
    }
    set.add(s.charAt(right));
    maxLength = Math.max(maxLength, right - left + 1);
}

System.out.println(maxLength);
```

Time Complexity: O(n)

------------------------------------------------------------------------

# 9️⃣ Check if String Contains Only Digits

``` java
String str = "12345";
boolean isNumeric = str.matches("\\d+");
System.out.println(isNumeric);
```

------------------------------------------------------------------------

# 🔟 Convert String to Integer Without parseInt()

``` java
String str = "1234";
int result = 0;

for(char c : str.toCharArray()) {
    result = result * 10 + (c - '0');
}

System.out.println(result);
```

------------------------------------------------------------------------

# 1️⃣1️⃣ Automation Relevance

Used in:

• Parsing API responses\
• Extracting IDs\
• Validating dynamic messages\
• Data cleaning\
• CSV processing\
• Log analysis

Example:

``` java
if(responseMessage.contains("Success")) {
    System.out.println("Test Passed");
}
```

------------------------------------------------------------------------

# 1️⃣2️⃣ Interview Tips

-   Always mention time complexity
-   Avoid using too many inbuilt methods in interview
-   Prefer char array manipulation for better performance explanation
-   Explain space complexity when asked

------------------------------------------------------------------------

# Final Mastery Checklist

You should now confidently solve:

✓ Reverse string\
✓ Palindrome\
✓ Anagram\
✓ Frequency count\
✓ Remove duplicates\
✓ Sliding window problems\
✓ String to number conversion\
✓ Word count

With time complexity explanation.
