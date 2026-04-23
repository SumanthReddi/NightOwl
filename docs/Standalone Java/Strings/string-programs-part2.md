---
sidebar_position: 12
title: String Programs - Part 2
---

## Core Logic + Detailed Inline Comments + Output

This document includes:

- Remove special characters from a string
- Remove lower case characters
- Remove upper case characters
- Check if string contains only digits
- Character frequency count
- Word frequency count
- Replace characters in a string
- Remove a specific character
- Longest substring without repeating characters
- Common characters between two strings
- Sort characters in a string
- Sort words alphabetically
- Remove extra spaces (normalize spaces)

------------------------------------------------------------------------

# 🔹 14. Remove Special Characters

👉 Core Logic\
- Keep only alphabets, digits, spaces

### Approach 1

``` java
String s = "Hi! @Home";
StringBuilder sb = new StringBuilder();

// Traverse each character
for (char c : s.toCharArray()) {

    // Keep only valid characters
    if (Character.isLetterOrDigit(c) || c == ' ') {
        sb.append(c);
    }
}

System.out.println(sb); // Output: Hi Home
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Hi! @Home";

// Replace special characters using regex
System.out.println(s.replaceAll("[^a-zA-Z0-9 ]", "")); // Output: Hi Home
```

------------------------------------------------------------------------

# 🔹 15. Remove Lower Case

👉 Core Logic\
- Keep only uppercase & digits

### Approach 1

``` java
String s = "Hello World";
StringBuilder sb = new StringBuilder();

for (char c : s.toCharArray()) {
    if (Character.isUpperCase(c) || Character.isDigit(c)) {
        sb.append(c);
    }
}

System.out.println(sb); // Output: H W
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Hello World";
System.out.println(s.replaceAll("[a-z]", "")); // Output: H W
```

------------------------------------------------------------------------

# 🔹 16. Remove Upper Case

👉 Core Logic\
- Keep lowercase & digits

### Approach 1

``` java
String s = "Hello World";
StringBuilder sb = new StringBuilder();

for (char c : s.toCharArray()) {
    if (Character.isLowerCase(c) || Character.isDigit(c)) {
        sb.append(c);
    }
}

System.out.println(sb); // Output: ello orld
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Hello World";
System.out.println(s.replaceAll("[A-Z]", "")); // Output: ello orld
```

------------------------------------------------------------------------

# 🔹 17. Contains Only Digits

👉 Core Logic\
- Check each character

### Approach 1

``` java
String s = "12345";
boolean flag = true;

for (char c : s.toCharArray()) {
    if (!Character.isDigit(c)) {
        flag = false;
        break;
    }
}

System.out.println(flag); // Output: true
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "12345";
System.out.println(s.matches("\\d+")); // Output: true
```

------------------------------------------------------------------------

# 🔹 18. Character Frequency

👉 Core Logic\
- Count occurrences of each character

### Approach 1

``` java
String s = "aabbc";

for (int i = 0; i < s.length(); i++) {

    int count = 0;

    for (int j = 0; j < s.length(); j++) {
        if (s.charAt(i) == s.charAt(j)) count++;
    }

    // Print only first occurrence
    if (s.indexOf(s.charAt(i)) == i) {
        System.out.println(s.charAt(i) + ":" + count);
    }
}
// Output:
// a:2
// b:2
// c:1
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "aabbc";
java.util.HashMap<Character, Integer> map = new java.util.HashMap<>();

for (char c : s.toCharArray()) {
    map.put(c, map.getOrDefault(c, 0) + 1);
}

System.out.println(map); // Output: {a=2, b=2, c=1}
```

------------------------------------------------------------------------

# 🔹 19. Word Frequency

👉 Core Logic\
- Count each word

### Approach 1

``` java
String s = "cat dog cat";
String[] words = s.split(" ");

for (int i = 0; i < words.length; i++) {

    int count = 0;

    for (int j = 0; j < words.length; j++) {
        if (words[i].equals(words[j])) count++;
    }

    if (i == java.util.Arrays.asList(words).indexOf(words[i])) {
        System.out.println(words[i] + ":" + count);
    }
}
// Output:
// cat:2
// dog:1
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "cat dog cat";
java.util.HashMap<String, Integer> map = new java.util.HashMap<>();

for (String w : s.split(" ")) {
    map.put(w, map.getOrDefault(w, 0) + 1);
}

System.out.println(map); // Output: {cat=2, dog=1}
```

------------------------------------------------------------------------

# 🔹 20. Replace Characters

👉 Core Logic\
- Replace target character

### Approach 1

``` java
String s = "apple";
String result = "";

for (char c : s.toCharArray()) {
    if (c == 'p') result += 'z';
    else result += c;
}

System.out.println(result); // Output: azzle
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "apple";
System.out.println(s.replace('p', 'z')); // Output: azzle
```

------------------------------------------------------------------------

# 🔹 21. Remove Specific Character

👉 Core Logic\
- Skip given character

### Approach 1

``` java
String s = "Cloud";
char remove = 'u';
String result = "";

for (char c : s.toCharArray()) {
    if (c != remove) result += c;
}

System.out.println(result); // Output: Clod
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Cloud";
System.out.println(s.replace("u", "")); // Output: Clod
```

------------------------------------------------------------------------

# 🔹 22. Longest Substring Without Repeating

👉 Core Logic\
- Expand until duplicate

### Approach 1

``` java
String s = "abcaebcbb";
String longest = "";

for (int i = 0; i < s.length(); i++) {

    String temp = "";

    for (int j = i; j < s.length(); j++) {

        if (temp.indexOf(s.charAt(j)) == -1) {
            temp += s.charAt(j);

            if (temp.length() > longest.length()) {
                longest = temp;
            }
        } else break;
    }
}

System.out.println(longest); // Output: abc
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "abcaebcbb";
java.util.HashSet<Character> set = new java.util.HashSet<>();
String temp = "", longest = "";

for (char c : s.toCharArray()) {

    while (set.contains(c)) {
        set.remove(temp.charAt(0));
        temp = temp.substring(1);
    }

    set.add(c);
    temp += c;

    if (temp.length() > longest.length()) longest = temp;
}

System.out.println(longest); // Output: abc
```

------------------------------------------------------------------------

# 🔹 23. Common Characters

👉 Core Logic\
- Find intersection

### Approach 1

``` java
String s1 = "thin";
String s2 = "thick";
String result = "";

for (char c : s1.toCharArray()) {
    if (s2.indexOf(c) != -1 && result.indexOf(c) == -1) {
        result += c + " ";
    }
}

System.out.println(result.trim()); // Output: t h i
```

------------------------------------------------------------------------

### Approach 2

``` java
String s1 = "thin";
String s2 = "thick";
java.util.HashSet<Character> set = new java.util.HashSet<>();

for (char c : s1.toCharArray()) {
    if (s2.indexOf(c) != -1) set.add(c);
}

System.out.println(set); // Output: [t, h, i]
```

------------------------------------------------------------------------

# 🔹 24. Sort Characters

👉 Core Logic\
- Compare & swap

### Approach 1

``` java
String s = "rock";
char[] arr = s.toCharArray();

for (int i = 0; i < arr.length; i++) {
    for (int j = i + 1; j < arr.length; j++) {

        if (arr[i] > arr[j]) {
            char temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

System.out.println(new String(arr)); // Output: ckor
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "rock";
char[] arr = s.toCharArray();

java.util.Arrays.sort(arr);

System.out.println(new String(arr)); // Output: ckor
```

------------------------------------------------------------------------

# 🔹 25. Sort Words

👉 Core Logic\
- Compare strings

### Approach 1

``` java
String s = "Mango Apple Banana";
String[] words = s.split(" ");

for (int i = 0; i < words.length; i++) {
    for (int j = i + 1; j < words.length; j++) {

        if (words[i].compareTo(words[j]) > 0) {
            String temp = words[i];
            words[i] = words[j];
            words[j] = temp;
        }
    }
}

System.out.println(String.join(" ", words)); // Output: Apple Banana Mango
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "Mango Apple Banana";
String[] words = s.split(" ");

java.util.Arrays.sort(words);

System.out.println(String.join(" ", words)); // Output: Apple Banana Mango
```

------------------------------------------------------------------------

# 🔹 26. Remove Extra Spaces

👉 Core Logic\
- Convert multiple spaces → single

### Approach 1

``` java
String s = "  a  b   c  ";
StringBuilder sb = new StringBuilder();
boolean prevSpace = false;

for (char c : s.toCharArray()) {

    if (c == ' ') {
        if (!prevSpace) {
            sb.append(c);
            prevSpace = true;
        }
    } else {
        sb.append(c);
        prevSpace = false;
    }
}

System.out.println(sb.toString().trim()); // Output: a b c
```

------------------------------------------------------------------------

### Approach 2

``` java
String s = "  a  b   c  ";
System.out.println(s.trim().replaceAll("\\s+", " ")); // Output: a b c
```
