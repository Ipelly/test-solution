Step to run the application 
================================

# Install the JS libs
    npm install
    
# Update the config (./config file)
    SMTP : Server related info is required.

# Run the server
    npm start

    npm run start:mac // if running machine is mac
  
    npm run start:pc // if running machine is pc
  
# Run the test for mac device
    npm run test:mac

# Run the test for windows device
    npm run test:pc


# API Endpoints

1. '/properties' (Whole URL : 'http://localhost:8000/users/')
    
    Operation : It will consume the domio API once, and update the SQLite DB.
                Notify the Admin if require via sending an email.

    Response : A list of properties given by domio API.
               All the properties details(id, type, dynamicDisplayPrice, basePrice, datetime of price) are stored in the Properties table (SQLIteDB)


2. '/watch' (Whole URL : 'http://localhost:8000/watch/')
    
    Operation : It will consume the domio API in every second, and update the SQLite DB.
                Notify the Admin if require via sending an email.
                It will never stop.

# Deliverables

    Part 1 & 2 : Its covered in both endpoints. 
    Part 3 : Created a factory to create a notificationHelper object based on property type. 
             If new property type is added later, which need different way of notification, a new helper file(like : utility.email.sender)will be required to add in (/src/utility/notificationhelper) and update the utility.notification.helper file.
    Part 4 : 
     how do we ensure data is never missed? 
     Ans : Added an endpoint (/watch), which will work as background process, application will ping domio API every second to get the updated dynamic price.

                 
# Database 
    DB File Name : db.domio
    Table Name : Properties

# RUN Application in Docker Container

Steps -
 1. Open the dockerFIle in application root directory -
 2. Modify WORKDIR by wherever you want to copy application
 3. run the below to command in order to run the application in docker container.
 
    a.  docker build -t node-test-sol .
    
    b.  docker run -it -p 5000:8000 node-test-sol
  
URL : http://localhost:5000/properties/ 
      http://localhost:5000/watch/ 
the docker listening port would be application port which is 5000.
