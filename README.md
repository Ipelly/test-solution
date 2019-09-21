Step to run the application 
================================

# Install the JS libs
  npm istall

# Run the server
  npm run start:mac // if running machine is mac
  or 
  npm run start:pc // if running machine is pc
  
# Run the test for mac device
  npm run test:mac

# Run the test for windows device
  npm run test:pc


# API Endpoints

1. '/users' (Whole URL : 'http://localhost:8000/users/')
    
    Response : A list of users(registered and unregisterd).
                 1. A list of project will be associated with user object if there any project membership.
                 2. A empty project will be there in user object if there is no any project membership.