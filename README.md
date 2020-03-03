# todo-server

**Register User**
----
  Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

    `name=[STRING],
    email=[STRING],
    password=[STRING]`
    

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    { id : 1, 
    name: tamara,
    email: tama@mail.com }
    ```
 
* **Error Response:**

  * **Code:** 400 Validation Sequelize Error <br />
    **Content:** 
    ```javascript
    { 
        errors : ["Email shouldn't be empty!", "Must fill with email format", "Password shouldn't be empty!", "Password length should between 6 and 12 character" ] 
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

   **Required:**
 
   `none`

* **Data Params**

    `email=[STRING],
    password=[STRING]`
    

* **Success Response:**

  * **Code:** 200<br />
    **Content:** 
    ```javascript
    { access_token : sadfuiasgdibqwekjqw0e9hwqenwq}
    ```
 
* **Error Response:**

  * **Code:** 400 Validation Sequelize Error <br />
    **Content:** 
    ```javascript
    { 
        errors : ["email/password wrong!" ] 
    }
    ```

  OR

  * **Code:** 500<br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`