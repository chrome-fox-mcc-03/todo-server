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

  * **Code:** 400 Validation Error <br />
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

  * **Code:** 400 Validation Error <br />
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


**Create Todo**
----
  Returns json data about todo created.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

    `title=[STRING],
    description=[STRING],
    status=[BOOLEAN],
    due_date=[DATE]`
    

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
        title: 'makan makan,
        description: 'bersama teman',
        status: false,
        due_date: 20/01/2019,
        UserId: 1
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Validation Error <br />
    **Content:** 
    ```
    { 
        errors : ["Title shouldn't be empty!", "This date is invalid"] 
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

   **Required:**
 
   `none`

* **Data Params**

    `none`
    

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
        {
            title: 'makan makan,
            description: 'bersama teman',
            status: false,
            due_date: 20/01/2019,
            UserId: 1
        },
        {
            title: 'makan siang,
            description: 'bersama teman',
            status: false,
            due_date: 20/01/2019,
            UserId: 1
        },
        {
            title: 'makan malam,
            description: 'bersama teman',
            status: false,
            due_date: 20/01/2019,
            UserId: 1
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

   **Required:**
 
   `id=[INTEGER]`

* **Data Params**

    `none`
    

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
        {
            title: 'makan makan,
            description: 'bersama teman',
            status: false,
            due_date: 20/01/2019,
            UserId: 1
        },
        {
            title: 'makan siang,
            description: 'bersama teman',
            status: false,
            due_date: 20/01/2019,
            UserId: 1
        },
        {
            title: 'makan malam,
            description: 'bersama teman',
            status: false,
            due_date: 20/01/2019,
            UserId: 1
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`



**Update Todo By Id**
----
  Returns json data of single data updated.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[INTEGER]`

* **Data Params**

    `none`
    

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
            title: 'makan makan,
            description: 'bersama teman',
            status: false,
            due_date: 20/01/2019,
            UserId: 1
        }
    ```
 
* **Error Response:**

  * **Code:** 400 Validation Error <br />
    **Content:** 
    ```javascript
    { 
        errors : ["Title shouldn't be empty!"] 
    }
    ```
  * **Code:** 404 Data Not Found <br />
    **Content:** 
    ```javascript
    { 
        error : "Data Not Found"
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
 
   `id=[INTEGER]`

* **Data Params**

    `none`
    

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
            title: 'makan makan,
            description: 'bersama teman',
            status: false,
            due_date: 20/01/2019,
            UserId: 1
        }
    ```
 
* **Error Response:**

  * **Code:** 404 Data Not Found <br />
    **Content:** 
    ```javascript
    { 
        error : "Data Not Found"
    }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`

