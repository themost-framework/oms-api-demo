# oms-api-demo
Order Management Demo Api Server with [MOST Web Framework Codename Blueshift](https://github.com/themost-framework/themost)

#### Clone repository

    git clone https://github.com/themost-framework/oms-api-demo.git

#### Install dependencies

    npm i
    
#### Start application

    npm run serve

Navigate to http://localhost:3000/api/ to see the available entity sets

#### Instructions

Use account:

    Username: alexis.rees@example.com
    Password: secret
    
which has administrative rights.

Use one of the following accounts:

    lily.stewart@example.com
    james.may@example.com
    luis.nash@example.com
    
with

    Password: secret
    
to access user data.
    
Api server has basic authorization enabled.

###### Get interactive user

    curl --user lily.stewart@example.com:secret \
    http://localhost:3000/api/users/me
    
Response:

    {
        "@odata.context": "/api/$metadata#Users/$entity",
        "enabled": 1,
        "name": "lily.stewart@example.com",
        "description": "Lily Stewart",
        "id": 701,
        "dateCreated": "2019-04-01 17:05:38.037+03:00",
        "dateModified": "2019-04-01 17:05:38.051+03:00",
        "createdBy": 0,
        "modifiedBy": 0,
        "groups": [
            {
                "name": "Users",
                "description": "Site Users",
                "alternateName": "users",
                "id": 3,
                "dateCreated": "2019-04-01 15:03:02.731+03:00",
                "dateModified": "2019-04-01 15:03:02.732+03:00",
                "createdBy": 0,
                "modifiedBy": 0
            }
        ]
    }

###### Get orders

    curl --user lily.stewart@example.com:secret \
    http://localhost:3000/api/orders
    
