### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Token.  Used for authenticating a user.

- What is the signature portion of the JWT?  What does it do?
  It's the part of the token that is unique to the specific user.  It is determined by the parameters set by the header and payload, along with app's secret key.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes. However, the payload should be set in such a way as to not have critical information.  

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  The best way is to include a library like jsonwebtoken, which can generate an verify the tokens for you.  When the user authenticates, the parameters are assigned and generates a token for that user.  That token needs to then be verified to authenticate the user in the future, for however long the token is valid for.

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests test the lower levels of the application, usually isolating individual functions.  Integration tests, on the other hand, test the flow and interaction between different parts of the application (such as how Express interacts with PostgreSQL).  End-to-End tests are designed to test the larger workflow of the application in a way that simulates a potential user's experience.  This is good for seeing how an actual user will experience the application, but is less effective at spotting where specific issues are.  It's also easily easily compromised by lower-level changes to the code.  

- What is a mock? What are some things you would mock?
  Mocking is used when an application would normally require an API call.  Instead of calling an API, you simply create an example of an expected response.  This removes the need of waiting for an API response, especially in cases where there is a limit or cost associated with making calls.  It also removes potential issues with the API as variable, which can be out of the dev's control. 

- What is continuous integration?
  The concept of merging frequent, smaller changes, which are easier to test and troubleshoot.

- What is an environment variable and what are they used for?
  They are higher level variables that set the environment of the application.  They are used for setting things like the port or secret_key of the application. They are also commonly used for setting whether or not the application is running in a testing configuration or not.  

- What is TDD? What are some benefits and drawbacks?
  Test Driven Development is the practice of writing tests first.  From there, you write the minimum code that will get your tests to pass, and then refactor your code.  This process is usually slower up front, but the code is very testable with smaller, more modular architecture.  

- What is the value of using JSONSchema for validation?
  It's easy to setup and maintain, allows data to fail before entering the the database, and uses less code to process and validate the input data. 

- What are some ways to decide which code to test?
  You should genereally try to test most of your code.  Particularly code where different functions are interacting with eachother, or where the user directly interacts with the code.  You want to be able to to mimic user interaction as much as possible.  You want to make sure to balance running higher and lower level tests to make sure that critical errors are caught when changes to the code are made. 

- What does `RETURNING` do in SQL? When would you use it?
  RETURNING is used to give you effected values when making changes to the data, such as with INSERT or DELETE.  This can help you utilize data after the changes are made, or simply to track and confirm the changes.

- What are some differences between Web Sockets and HTTP?
  Sockets are stateful, rather than stateless, like HTTP.  This means that the connection between the client and server stays active and can communicate changes in real time.  This can allow for things like online games or chats to work, where different users need to be able to see changes as they happen.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I think I prefer Express, primarily because it largely lets me focus on a single language, rather than having to think in both JS and Python.  
