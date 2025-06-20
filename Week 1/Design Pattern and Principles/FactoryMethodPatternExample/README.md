Output for Factory Method Pattern


"C:\Program Files\Java\jdk-23\bin\java.exe" "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2024.3.1.1\lib\idea_rt.jar=51604:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2024.3.1.1\bin" -Dfile.encoding=UTF-8 -Dsun.stdout.encoding=UTF-8 -Dsun.stderr.encoding=UTF-8 -classpath "C:\Users\Kakashi\OneDrive\Desktop\DN - 4.0 Hands-On Exercises\Week 1\out\production\FactoryMethodPatternExample" TestFactoryMethod
Opening Word Document.
Opening PDF Document.
Opening Excel Document.

Process finished with exit code 0



How it works

- `DocumentFactory` is the abstract creator.
- Each document type has its own factory class (e.g., `WordDocumentFactory`).
- `createDocument()` is overridden in each factory.
- Factory Method lets us create objects without exposing the creation logic.
