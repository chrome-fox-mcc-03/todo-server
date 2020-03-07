# todo-server

* **REGISTER**


    * **URL**

        http://localhost:3000/register

    * **Method:**

    `POST`
    
    *  **URL Params**

        NONE

    **Required:**
        

    * **Data Params**

        email: email@gmail.com, <br />
        password: password


    * **Success Response:**


    * **Code:** 201 <br />
        **Content:** 
        ```javascript
        {
            "email": "email@gmail.com",
            "password": "password"
        }
        ```
    

    * **Error Response:**


    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```javascript
        { "msg" : "Internal Server Error" }
        ```
        OR


    * **Code:** 403 Bad Request <br />
    **Content:**
        ```javascript
            {"message": "Please insert Valid Email"}
        ```
        OR


    * **Code:** 403 Bad Request <br/>
    **Content:**
        ```javascript
            {"message": "please Insert Password Minimum 8"}
        ```
        OR


    * **Code:** 403 Bad Request <br />
    **Content:**
        ```javascript
            {"message": "Email Already exist"}
        ```
    ***

    
* **LOGIN** 
    * **URL**

        http://localhost:3000/login


    * **Method:**

        POST

    * **URL Params:**

        NONE

    **Required:**
        

    * **Data Params**

        email: email@gmail.com <br />
        password: password

    * **Success Response:**

    * **Code:** 201 <br />
        **Content:** 
        ```javascript
        {
            "token" : [string]
        }
        ```
    
    * **Error Response:**
    

        * **Code:** 404 Not Found <br />

            **Content:**
            ```javascript
                {"message" : "Email Or Password Invalid"}
            ```
        
        OR
        
        * **Code:** 500 INTERNAL SERVER ERROR <br />

            **Content:** 
            ```javascript
            { "msg" : "Internal Server Error" }
            ```
***

* **CREATE GROUP** 
    * **URL**

        http://localhost:3000/group


    * **Method:**

        POST

    * **URL Params:**

        NONE

    **Required:**
        

    * **Data Params**

        "Name_group" : [string,unique]

    * **Headers**
        ```javascript
        {
            token: [string]
        }

    * **Success Response:**

    * **Code:** 201 <br />
        **Content:** 
        ```javascript
        {
            "token" : [string]
        }
        ```
    
    * **Error Response:**
    

        * **Code:** 404 Not Found <br />

            **Content:**
            ```javascript
                {"message" : "Name Group Already Exist"}
            ```
        
        OR
        
        * **Code:** 500 INTERNAL SERVER ERROR <br />

            **Content:** 
            ```javascript
            { "msg" : "Internal Server Error" }
            ```
***

* **CREATE TODO** 
    * **URL**

        http://localhost:3000/todos


    * **Method:**

        POST

    * **URL Params:**

        NONE

    **Required:**
        

    * **Data Params**
        ```javascript
            {
            "Title": [string],
            "Description": [string],
            "Due_date": [date]
            }
        ```

    * **Headers**
        ```javascript
        {
            token: [string]
        }
        ```

    * **Success Response:**


    * **Code:** 201 <br />
        **Content:** 
        ```javascript
        {
            "title": [stirng],
            "description": [string],
            "title": false
            "due_date": [date]
        }
        ```
    
    * **Error Response:**
    

    * **Code:** 403 Not Found <br />

            **Content:**
            ```javascript
                {"message" : "Please Insert title"}
            ```
        
        OR
        
        
    * **Code:** 403 Not Found <br />

            **Content:**
            ```javascript
                {"message" : "Please Insert description"}
            ```
        
        OR


    * **Code:** 403 Not Found <br />

            **Content:**
            ```javascript
                {"message" : "Please Insert due_date"}
            ```
        
        OR
        

    * **Code:** 500 INTERNAL SERVER ERROR <br />

            **Content:** 
            ```javascript
            { "msg" : "Internal Server Error" }
            ```
***

* **DELETE TODO**
    * **URL**

        http://localhost:3000/


    * **Method:**

        DELETE

    * **URL Params:**

        /:id=[integer]

    **Required:**
        

    * **Data Params**


    * **Headers**
        ```javascript
        {
            token: [string]
        }
        ```

    * **Success Response:**
        * **Code** 200 OK

            **Content:**
            ```javascript
                {message: "Delete Succses"}
            ```

    * **Error Response**

        * **Code:** 500 INTERNAL SERVER ERROR <br />

            **Content:** 
            ```javascript
            { "msg" : "Internal Server Error" }
            ```
***



* **CREATE TODO** 
    * **URL**

        http://localhost:3000/todos


    * **Method:**

        PUT/PATCH

    * **URL Params:**

        /:id

    **Required:**
        

    * **Data Params**
        ```javascript
            {
            "Title": [string],
            "Description": [string],
            "Due_date": [date]
            }
        ```

    * **Headers**
        ```javascript
        {
            token: [string]
        }
        ```

    * **Success Response:**


    * **Code:** 201 <br />
        **Content:** 
        ```javascript
        {
            "title": [stirng],
            "description": [string],
            "title": false
            "due_date": [date]
        }
        ```
    
    * **Error Response:**
    

    * **Code:** 403 Not Found <br />

            **Content:**
            ```javascript
                {"message" : "Please Insert title"}
            ```
        
        OR
        
        
    * **Code:** 403 Not Found <br />

            **Content:**
            ```javascript
                {"message" : "Please Insert description"}
            ```
        
        OR


    * **Code:** 403 Not Found <br />

            **Content:**
            ```javascript
                {"message" : "Please Insert due_date"}
            ```
        
        OR
        

    * **Code:** 500 INTERNAL SERVER ERROR <br />

            **Content:** 
            ```javascript
            { "msg" : "Internal Server Error" }
            ```
***



        

