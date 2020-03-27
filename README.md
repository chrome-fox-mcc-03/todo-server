# todo-server

**Register User**
----
  Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**
 
   `none`

* **Data Params**

    `name=[STRING],
    email=[STRING],
    password=[STRING]`
    

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
      name: [STRING],
      email: [STRING],
      password: [STRING]
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Validation Error <br />
    **Content:** 
    ```javascript
    { 
        errors : [arary of errors] 
    }
    ```

  OR

  * **Code:** 500 <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`



**Login User**
----
  Returns json data about access token.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**
 
   `none`

* **Data Params**

    ```
    {
      email: [STRING],
      password: [STRING]
    }
    ```

* **Success Response:**

  * **Code:** 200<br />
    **Content:** 
    ```
    { 
      access_token : [STRING]
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Validation Error <br />
    **Content:** 
    ```
    { 
        errors : [array of errors] 
    }
    ```

  OR

  * **Code:** 500<br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`


**Create Todo**
----
  Returns json data about todo created.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   `none`

  
*  **Headers**

   ```
   {
     access_token : [string]
   }
   ```


* **Data Params**

    ```
    {
      title: [string],
      description: [string],
      status: [string],
      due_date: [string],
      UserId: [integer]
    }
    ```
    

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      id: [integer]
      title: [string],
      description: [string],
      status: [string],
      due_date: [string],
      UserId: [integer]
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Validation Error <br />
    **Content:** 
    ```
    { 
        errors : [array of errors] 
    }
    ```

  OR

  * **Code:** 500 <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```



**Get All Todo**
----
  Returns array of json data.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**
 
   `none`

* **Data Params**

    `none`

  
*  **Headers**

   ```
   {
     access_token : [string]
   }
   ```


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
      {
        id: [integer]
        title: [string],
        description: [string],
        status: [string],
        due_date: [string],
        UserId: [integer]
      },
      {
        id: [integer]
        title: [string],
        description: [string],
        status: [string],
        due_date: [string],
        UserId: [integer]
      },
      {
        id: [integer]
        title: [string],
        description: [string],
        status: [string],
        due_date: [string],
        UserId: [integer]
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`


**Get Todo By Id**
----
  Returns json data of single data.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**
 
   ```
   {
     id : [integer]
   }
   ```

* **Data Params**

    `none`

  
*  **Headers**

   ```
   {
     access_token : [string]
   }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      id: [integer]
      title: [string],
      description: [string],
      status: [string],
      due_date: [string],
      UserId: [integer]
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }
    ```



**Update Todo By Id**
----
  Returns json data of single data updated.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   ```
   {
     id : [integer]
   }
   ```

* **Data Params**

    `none`
    
  
*  **Headers**

   ```
   {
     access_token : [string]
   }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      id: [integer]
      title: [string],
      description: [string],
      status: [string],
      due_date: [string],
      UserId: [integer]
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Validation Error <br />
    **Content:** 
    ```javascript
    { 
        errors : [array of errors] 
    }
    ```
  * **Code:** 404 Data Not Found <br />
    **Content:** 
    ```
    { 
        error : [string]
    }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`


**Delete Todo By Id**
----
  Returns json data of single data deleted.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   ```
   {
    id : [INTEGER]
   }
   ```

* **Data Params**

    `none`
    
  
*  **Headers**

   ```
   {
     access_token : [string]
   }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      id: [integer]
      title: [string],
      description: [string],
      status: [string],
      due_date: [string],
      UserId: [integer]
    }
    ```
 
* **Error Response:**

  * **Code:** 404 Data Not Found <br />
    **Content:** 
    ```javascript
    { 
        error : [string]
    }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`

