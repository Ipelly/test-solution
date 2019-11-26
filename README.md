Step to run the application 
================================

# Install the JS libs
  npm install

# Run the server
  npm run start:mac // if running machine is mac
  
  
  npm run start:pc // if running machine is pc
  
# Run the test for mac device
  npm run test:mac

# Run the test for windows device
  npm run test:pc


# API Endpoints

1. '/places' (Whole URL : 'http://localhost:8000/places?location=-33.8670522,151.1957362&radius=300&name=mongolian%20grill')
    
    Response : A list of places(which name is mongolian grill and near by given location lat : -33.8670522 and long : 151.1957362 and within the redius of 300).


# RUN Application in Docker Container

Steps -
 1. Open the dockerFIle in application root directory -
 2. Modify WORKDIR by wherever you want to copy application
 3. run the below to command in order to run the application in docker container.
 
    a.  docker build -t node-test-sol .
    
    b.  docker run -it -p 5000:8000 node-test-sol
  
URL : http://localhost:5000/places?location=-33.8670522,151.1957362&radius=300&name=mongolian%20grill 
the docker listening port would be application port which is 5000.
