Mockito and Stubbing 

This exercise is to know how to use Mockito in Java and how to mock and stub dependencies when writing unit tests.

First We added Dependencies for Junit and Mockito in the pom.xml file

We have a service that depends on an external API. Instead of calling the real API , we use Mockito to:
- Mock the API.
- Stub its method to return predefined data.
- Write a unit test to verify our service uses that mock correctly.
