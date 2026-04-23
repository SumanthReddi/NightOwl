---
sidebar_position: 12
title: String Programs - Part 1 
---

## Core Logic + Detailed Inline Comments + Output

This document includes:

- Reverse String (multiple approaches)
- Reverse each word in a sentence
- Reverse word order in a sentence
- Reverse specific word (third word)
- Palindrome check (loop-based approaches)
- Anagram validation (character frequency logic)
- Count vowels and consonants
- Count words in a sentence
- Remove whitespaces from a string
- Remove duplicate characters
- First non-repeating character
- First repeating character
- Remove digits from a string

------------------------------------------------------------------------

# 🔹 1. Reverse String

👉 Core Logic\
- Strings are immutable\
- Traverse from end to start\
- Build new string

### Approach 1 (Efficient)

``` java
String s = "Java";
StringBuilder sb = new StringBuilder(); // Mutable object to build result

// Traverse from last character to first
for (int i = s.length() - 1; i >= 0; i--) {

    // Add each character to StringBuilder
    sb.append(s.charAt(i));
}

// Final reversed string
System.out.println(sb.toString()); // Output: avaJ
```

------------------------------------------------------------------------

### Approach 2 (Inefficient)

``` java
String s = "Java";
String rev = "";

// Traverse from start to end
for (int i = 0; i < s.length(); i++) {

    // Add character at beginning (creates new string every time)
    rev = s.charAt(i) + rev;
}

// Final result
System.out.println(rev); // Output: avaJ
```

------------------------------------------------------------------------

# 🔹 2. Reverse Each Word

👉 Core Logic\
- Split sentence into words\
- Reverse each word individually

### Approach 1

``` java
String s = "Hello World";
String[] words = s.split(" "); // Split into words
String result = "";

// Traverse each word
for (String w : words) {

    String temp = "";

    // Reverse individual word
    for (int i = w.length() - 1; i >= 0; i--) {
        temp += w.charAt(i);
    }

    result += temp + " ";
}

System.out.println(result.trim()); // Output: olleH dlroW
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Hello World";
StringBuilder result = new StringBuilder();

// Traverse each word
for (String w : s.split(" ")) {

    // Reverse word using StringBuilder
    result.append(new StringBuilder(w).reverse()).append(" ");
}

System.out.println(result.toString().trim()); // Output: olleH dlroW
```

------------------------------------------------------------------------

# 🔹 3. Reverse Word Order

👉 Core Logic\
- Reverse order of words

### Approach 1

``` java
String s = "Java is fun";
String[] words = s.split(" ");
String result = "";

// Traverse words from end to start
for (int i = words.length - 1; i >= 0; i--) {

    result += words[i] + " ";
}

System.out.println(result.trim()); // Output: fun is Java
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Java is fun";

// Convert to list and reverse
java.util.List<String> list = java.util.Arrays.asList(s.split(" "));
java.util.Collections.reverse(list);

// Join words back
System.out.println(String.join(" ", list)); // Output: fun is Java
```

------------------------------------------------------------------------

# 🔹 4. Reverse Third Word

👉 Core Logic\
- Modify only 3rd word

### Approach 1

``` java
String s = "I love Java coding";
String[] words = s.split(" ");

// Check if at least 3 words exist
if (words.length >= 3) {

    String temp = "";

    // Reverse 3rd word
    for (int i = words[2].length() - 1; i >= 0; i--) {
        temp += words[2].charAt(i);
    }

    // Replace original word
    words[2] = temp;
}

// Join words
System.out.println(String.join(" ", words)); // Output: I love avaJ coding
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "I love Java coding";
String[] words = s.split(" ");

// Reverse 3rd word using StringBuilder
if (words.length >= 3) {
    words[2] = new StringBuilder(words[2]).reverse().toString();
}

System.out.println(String.join(" ", words)); // Output: I love avaJ coding
```

------------------------------------------------------------------------

# 🔹 5. Palindrome

👉 Core Logic\
- Same forward and backward

### Approach 1

``` java
String s = "madam";
String rev = "";

// Reverse string
for (int i = s.length() - 1; i >= 0; i--) {
    rev += s.charAt(i);
}

// Compare original and reversed
System.out.println(s.equals(rev)); // Output: true
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "madam";
boolean isPalindrome = true;

// Compare characters from both ends
for (int i = 0; i < s.length() / 2; i++) {

    if (s.charAt(i) != s.charAt(s.length() - 1 - i)) {
        isPalindrome = false;
        break;
    }
}

System.out.println(isPalindrome); // Output: true
```

------------------------------------------------------------------------

# 🔹 6. Anagram

👉 Core Logic\
- Same character frequency

### Approach 1

``` java
String s1 = "listen";
String s2 = "silent";

int[] count = new int[256];

// Count characters in first string
for (char c : s1.toCharArray()) {
    count[c]++;
}

// Subtract characters from second string
for (char c : s2.toCharArray()) {
    count[c]--;
}

boolean isAnagram = true;

// Check all counts are zero
for (int i : count) {
    if (i != 0) {
        isAnagram = false;
        break;
    }
}

System.out.println(isAnagram); // Output: true
```

------------------------------------------------------------------------

### Approach 2

``` java

        String s1 = "listen";
        String s2 = "silent";

        boolean isAnagram = true;

        // Step 1: Length check
        if (s1.length() != s2.length()) {
            isAnagram = false;
        } else {

            // Step 2: Check character existence (basic approach)
            for (int i = 0; i < s1.length(); i++) {

                // If character not found in s2 → not anagram
                if (s2.indexOf(s1.charAt(i)) == -1) {
                    isAnagram = false;
                    break; // stop immediately
                }
            }
        }

        // Final result
        System.out.println(isAnagram); // Output: true

```

### Approach 3 

``` java
class Main {
    public static void main(String[] args) {

        String s = "listen";
        String t = "silent";

        boolean isAnagram = true;

        // Step 1: Length check
        if (s.length() != t.length()) {
            isAnagram = false;
        } else {

            // Step 2: Frequency array for a–z
            int[] count = new int[26];

            // Step 3: Single loop for both strings
            for (int i = 0; i < s.length(); i++) {

                // Increment for character in s
                count[s.charAt(i) - 'a']++;

                // Decrement for character in t
                count[t.charAt(i) - 'a']--;
            }

            // Step 4: Check if all values are zero
            for (int i = 0; i < count.length; i++) {

                if (count[i] != 0) {
                    isAnagram = false;
                    break;
                }
            }
        }

        // Final result
        System.out.println(isAnagram); // Output: true
    }
}
```

------------------------------------------------------------------------

# 🔹 7. Count Vowels & Consonants

👉 Core Logic\
- Check each character

### Approach 1

``` java
String s = "Automation";
int v = 0, c = 0;

// Convert to lowercase and iterate
for (char ch : s.toLowerCase().toCharArray()) {

    if (ch >= 'a' && ch <= 'z') {

        // Check vowel
        if ("aeiou".indexOf(ch) != -1) {
            v++;
        } else {
            c++;
        }
    }
}

System.out.println("V:" + v + " C:" + c); // Output: V:5 C:5
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Automation";
int v = 0;

// Count vowels
for (char ch : s.toLowerCase().toCharArray()) {

    if ("aeiou".contains(String.valueOf(ch))) {
        v++;
    }
}

// Remaining are consonants
System.out.println("V:" + v + " C:" + (s.length() - v)); // Output: V:5 C:5
```

------------------------------------------------------------------------

# 🔹 8. Count Words

👉 Core Logic\
- Words separated by spaces

### Approach 1

``` java
String s = "Keep it simple";

// Split by spaces
System.out.println(s.trim().split("\\s+").length); // Output: 3
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Keep it simple";
int count = 0;

// Traverse string
for (int i = 0; i < s.length(); i++) {

    // Detect start of a word
    if (i == 0 || (s.charAt(i) != ' ' && s.charAt(i - 1) == ' ')) {
        count++;
    }
}

System.out.println(count); // Output: 3
```

------------------------------------------------------------------------

# 🔹 9. Remove Whitespaces

👉 Core Logic\
- Skip spaces

### Approach 1

``` java
String s = " J a v a ";
StringBuilder sb = new StringBuilder();

// Traverse characters
for (char c : s.toCharArray()) {

    // Ignore spaces
    if (c != ' ') {
        sb.append(c);
    }
}

System.out.println(sb); // Output: Java
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = " J a v a ";

// Replace spaces directly
System.out.println(s.replace(" ", "")); // Output: Java
```

------------------------------------------------------------------------

# 🔹 10. Remove Duplicate Characters

👉 Core Logic\
- Keep first occurrence

### Approach 1

``` java
String s = "programming";
StringBuilder sb = new StringBuilder();

// Traverse each character
for (char c : s.toCharArray()) {

    // Add only if not already present
    if (sb.indexOf(String.valueOf(c)) == -1) {
        sb.append(c);
    }
}

System.out.println(sb); // Output: progamin
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "programming";

// Outer loop picks each character
for (int i = 0; i < s.length(); i++) {

    boolean isDuplicate = false;

    // Check if already appeared before
    for (int j = 0; j < i; j++) {

        if (s.charAt(i) == s.charAt(j)) {
            isDuplicate = true;
            break;
        }
    }

    // Print only if not duplicate
    if (!isDuplicate) {
        System.out.print(s.charAt(i)); // Output: progamin
    }
}
```

------------------------------------------------------------------------

# 🔹 11. First Non-Repeating Character

👉 Core Logic\
- First character with single occurrence

### Approach 1

``` java
String s = "stress";

// Traverse characters
for (int i = 0; i < s.length(); i++) {

    // Check first and last occurrence
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
        System.out.println(s.charAt(i)); // Output: t
        break;
    }
}
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "stress";

// Traverse each character
for (char c : s.toCharArray()) {

    int count = 0;

    // Count occurrences
    for (char x : s.toCharArray()) {
        if (c == x) count++;
    }

    if (count == 1) {
        System.out.println(c); // Output: t
        break;
    }
}
```

------------------------------------------------------------------------

# 🔹 12. First Repeating Character

👉 Core Logic\
- First character that repeats

### Approach 1

``` java
String s = "apple";

// Traverse string
for (int i = 0; i < s.length(); i++) {

    // If index differs → repeating
    if (s.indexOf(s.charAt(i)) != i) {
        System.out.println(s.charAt(i)); // Output: p
        break;
    }
}
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "apple";

// Compare each character with next ones
for (int i = 0; i < s.length(); i++) {

    for (int j = i + 1; j < s.length(); j++) {

        if (s.charAt(i) == s.charAt(j)) {
            System.out.println(s.charAt(i)); // Output: p
            return;
        }
    }
}
```

------------------------------------------------------------------------

# 🔹 13. Remove Digits

👉 Core Logic\
- Keep non-digit characters

### Approach 1

``` java
String s = "Java123";
StringBuilder sb = new StringBuilder();

// Traverse characters
for (char c : s.toCharArray()) {

    // Add only non-digits
    if (!Character.isDigit(c)) {
        sb.append(c);
    }
}

System.out.println(sb); // Output: Java
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Java123";

// Remove digits using regex
System.out.println(s.replaceAll("\\d", "")); // Output: Java
```
