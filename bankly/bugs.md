- Bug #1:  When entering an incorrect login credentials, the user still receives a token and the server is stopped.
  - Fix: The "await" keyword needed to be added to User.authenticate in the "/login" route.

- Bug #2:  The get function for the User model was returning sensitive user data  
  - Fix: Fixed the db.query for the method to only return the username, first name, and last name.

- Bug #3:  Only Admins were able to patch and there was no test for user's patching themselves
  - Fix: After making a test for users patching themselves, which initially failed, I removed the requireAdmin middleware from the route.  The checks within the route handled managing whether the user was an admin or not.

- Bug #4:  The fix for bug #3 revealed a flaw in the test for checking if the user was changing unauthorized data.  There was nothing restricting certain data from being adjusted
  - Fix: I made an if statement that checked if the keys for "admin", "password", or "username" were including in the body of the request that sends a 401 error if that's the case.

- Bug #5:  
  - Fix: 

- Bug #6:  authUser was placing the 401 status code on the err instead of placing it on res, which would give a proper HTTP response
  - Fix: Changed err.status = 401 to res.status = 401;
