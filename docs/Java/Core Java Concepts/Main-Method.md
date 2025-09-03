---
sidebar_position: 3
---
<!-- ## Java main() Method Explained -->

The `main` method is the entry point of any standalone Java application. When you run a Java program, the Java Virtual Machine (JVM) looks for the `main` method and starts executing your program from there.

## Syntax of main method

```

public static void main(String[] args) {
// your code here
}

```

### Explanation of each part:

- `public`: The method is accessible from anywhere. This is required because the JVM needs to invoke it from outside your class.
- `static`: The JVM can call this method without creating an instance of the class.
- `void`: This method does not return any value.
- `main`: This is the name of the method that the JVM looks for.
- `String[] args`: An array of `String` objects. It lets your program accept command-line arguments passed as strings when you run the program.

## How the main method works

When you run a Java application:

1. The JVM loads the class you designated to run.
2. It looks for a `public static void main(String[] args)` method.
3. It executes the statements inside the `main` method.
4. Your program runs until the `main` method finishes or the program exits (e.g., via `System.exit()`).

## Example

```

public class HelloWorld {
public static void main(String[] args) {
System.out.println("Hello, world!");

        // Print all command-line arguments
        for (String arg : args) {
            System.out.println("Arg: " + arg);
        }
    }
    }

```

Run with command-line arguments:

```

java HelloWorld first second third

```

Output:

```

Hello, world!
Arg: first
Arg: second
Arg: third

```

## Notes

- Without a proper `main` method, the JVM will not run your class as a standalone application and will give an error.
- The `main` method must be declared exactly as shown, otherwise the JVM won't recognize it.
- You can overload the `main` method by defining other methods named `main` with different parameters, but the JVM only calls the standard signature.

## Summary

The `main(String[] args)` method is the required starting point of every Java standalone program. It acts as a bridge between the JVM and your application code.