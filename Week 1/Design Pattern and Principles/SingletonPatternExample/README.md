
Output for the Singleton Pattern :

"C:\Program Files\Java\jdk-23\bin\java.exe" "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2024.3.1.1\lib\idea_rt.jar=51574:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2024.3.1.1\bin" -Dfile.encoding=UTF-8 -Dsun.stdout.encoding=UTF-8 -Dsun.stderr.encoding=UTF-8 -classpath "C:\Users\Kakashi\OneDrive\Desktop\DN - 4.0 Hands-On Exercises\Week 1\out\production\SingletonPatternExample" TestSingleton
Logger Initialized!
Log: This is the first log.
Log: This is the second log.
Both logger1 and logger2 are the same instance.

Process finished with exit code 0


How it works

- `Logger` class has a private constructor.
- The `getInstance()` method returns the same instance every time.
- Used `==` to confirm the instances are same.
- This proves the Singleton behavior.