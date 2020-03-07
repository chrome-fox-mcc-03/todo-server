# todo-server

**Sign Up**
----
  Finds a user with inputted email, if no email exists in the database, it creates new user and returns a token. Else, error message will be returned.

* **URL**

  /signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `email=[string], password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoidGhlb0BnbWFpbC5jb20iLCJpYXQiOjE1ODM2MjM2ODV9.zsQg5gJaerrEgPQOTOkVql1fW_OU7O6NNjPAzuS-WW8`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Your email has already registered" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Sign In**
----
  Finds a user that matches the inputted email then (if the email matched) compares password and (if the password matched) returns a token. 

* **URL**

  /signin

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `email=[string], password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoidGhlb0BnbWFpbC5jb20iLCJpYXQiOjE1ODM2MjQxNDZ9.xqteghcjAWGond9nCG8koIya3CkwA8pyWNrF4DzQvRk`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Username/password invalid" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Create Todo**
----
  Adds new todo and returns the added todo.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `title=[string], description=[string], status=[boolean], due_date=[date]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 12, title : Buy Coffee, description: I'm thirsty, status:false, due_date: 2020-03-15T00:00:00.000Z, updatedAt: 2020-03-02T09:01:21.377Z, createdAt: 2020-03-02T09:01:21.377Z }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "validation error" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Read Todo**
----
  Returns an array of object json data about all todo.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[ { id: 10, title: Call Nadya, description: Remind her to buy somesnacks, due_date: 2020-03-15T00:00:00.000Z, createdAt: 2020-03-02T08:59:19.700Z, updatedAt: 2020-03-02T08:59:19.700Z }, { id: 12, title: By Coffee, description: I'm thirsty, status: false, due_date: 2020-03-15T00:00:00.000Z, createdAt: 2020-03-02T09:01:21.377Z, updatedAt: 2020-03-02T09:01:21.377Z } ]`
 
* **Error Response:**

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Get Todo by ID**
----
  Returns json data about a single todo.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 2, title: Buy Coffee, description: I'm thirsty, status: false, due_date: 2020-03-15T00:00:00.000Z, createdAt: 2020-03-02T09:01:21.377Z, updatedAt: 2020-03-02T09:01:21.377Z }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "not found" }`

* **Sample Call:**

  none

**Update Todo**
----
  Updates a todo and returns json data about the updated todo.

* **URL**

  /todos

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  `title=[string], description=[string], status=[boolean], due_date=[date]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 10, "title": "Call Nadya", "description": "Remind her to buy some snacks", "status": false, "due_date": "2020-04-02T00:00:00.000Z", "createdAt": "2020-03-02T08:59:19.700Z", "updatedAt": "2020-03-02T09:24:32.390Z" }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "validation error" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "not found" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Mark Todo As Done**
----
  Updates the status of a todo to *true* and returns json data about the updated todo.

* **URL**

  /todos/markdone

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  `none`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 31, "title": "Meeting with boss", "description": "Bring the docs", "status": true, "due_date": "2020-04-02T00:00:00.000Z", "createdAt": "2020-03-02T08:59:19.700Z", "updatedAt": "2020-03-02T09:24:32.390Z" }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : "todo not found" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Mark Todo As Undone**
----
  Updates the status of a todo to *false* and returns json data about the updated todo.

* **URL**

  /todos/markundone

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  `none`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 31, "title": "Meeting with boss", "description": "Bring the docs", "status": false, "due_date": "2020-04-02T00:00:00.000Z", "createdAt": "2020-03-02T08:59:19.700Z", "updatedAt": "2020-03-02T09:24:32.390Z" }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : "todo not found" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Delete Todo**
----
  Deletes a todo and returns json data about the deleted todo.

* **URL**

  /todos

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 10, "title": "Call Nadya", "description": "Remind her to buy some snacks", "status": false, "due_date": "2020-04-02T00:00:00.000Z", "createdAt": "2020-03-02T08:59:19.700Z", "updatedAt": "2020-03-02T09:24:32.390Z" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "not found" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none