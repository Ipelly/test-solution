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

                 
# Response Sample :
[
    {
        "id": "1",
        "city": "Jaydashire",
        "company": "Goyette - Renner",
        "country": "South Africa",
        "firstName": "firstName 1",
        "lastName": "lastName 1",
        "organizationType": "organizationType 1",
        "phone": "524.276.1570 x487",
        "state": "SD",
        "zipCode": "68048",
        "disclaimerAccepted": false,
        "languageCode": "en",
        "emailAddress": "last1@mail.com",
        "projects": [
            {
            "id": "1",
            "projectId": "1",
            "userId": "1"
            },
            {
            "id": "2",
            "projectId": "2",
            "userId": "1"
            }
        ]
    },
    {
        "id": "2",
        "city": "Adolfofort",
        "company": "Fisher - Bartoletti",
        "country": "China",
        "firstName": "firstName 2",
        "lastName": "lastName 2",
        "organizationType": "organizationType 2",
        "phone": "(308) 197-9774 x339",
        "state": "CO",
        "zipCode": "78569",
        "disclaimerAccepted": false,
        "languageCode": "en",
        "emailAddress": "last2@mail.com",
        "projects": []
    }
    {
        "id": "25",
        "emailAddress": "email5@somewhere.com",
        "languageCode": "en",
        "registrationId": "jwsMJNOk3oM3hVM5bGcF5",
        "registrationIdGeneratedTime": "156165026855",
        "projects": [
            {
                "id": "25",
                "projectId": "25",
                "userId": "25"
            },
            {
                "id": "30",
                "projectId": "1",
                "userId": "25"
            },
            {
                "id": "31",
                "projectId": "2",
                "userId": "25"
            },
            {
                "id": "32",
                "projectId": "32",
                "userId": "25"
            }
        ]
    }
]



The service can be implemented in any language/platform that you are most comfortable with.  Having said that, we do have primary languages on our team so you would get mucho respect & bonus points if the solution is implemented in the following languages.
```
java
groovy
kotlin
node (es6+ | typescript)
```  

The endpoint must use http protocol.  The endpoint must return json by default.

Example of json payload to be returned from the new endpoint
```
[
  {
    "id": "1",
    "city": "Jaydashire",
    "company": "Goyette - Renner",
    "country": "South Africa",
    "firstName": "firstName 1",
    "lastName": "lastName 1",
    "organizationType": "organizationType 1",
    "phone": "524.276.1570 x487",
    "state": "SD",
    "zipCode": "68048",
    "disclaimerAccepted": false,
    "languageCode": "en",
    "emailAddress": "last1@mail.com",
    "projectIds": ["1","2"]
  },
  {  
    "id":"21",
    "emailAddress":"email1@somewhere.com",
    "languageCode":"en",
    "registrationId":"jwsMJNOk3oM3hVM5bGcF1",
    "registrationIdGeneratedTime":"156165026851",
    "projectIds": []
  }   
]


