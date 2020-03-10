# todo-server

**Show All Todos**
---
    Return all data in json from database

* **Headers**

  Authorization: `<token>`

* **URL**
    /todos

* **Method:**

    `GET`

* **Success Response:**
    * **Code:** 200<br>
      **Content:**
      ```json
      {"data" : [
          {
              "id" : 1,
              "title" : "Listening to Halsey",
              "description" : "Music You Should Be Sad",
              "due_date": "2020-03-05T00:00:00.000Z",
              "createdAt": "2020-03-03T10:44:23.214Z",
              "updatedAt": "2020-032-03T10:44:23.214Z"
          },
          {
              "id" : 2,
              "title" : "Listening to Utada Hikaru",
              "description" : "Music First Love",
              "due_date": "2020-03-05T00:00:00.000Z",
              "createdAt": "2020-03-03T10:44:23.214Z",
              "updatedAt": "2020-032-03T10:44:23.214Z"
          }
      ]}
      ]}
      ```
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`
---
**Create Todo**
----
  Inserts a data into database and returns the corresponding data.
  
* **Headers**

  Authorization: `<token>`

* **URL**

  /todos

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      "data": {
        "id": 3,
        "title": "Playing Dota with Adam",
        "description": "Lose",
        "status": false,
        "UserId" : 3,
        "due_date": "2020-03-05T00:00:00.000Z",
        "updatedAt": "2020-03-03T12:47:05.571Z",
        "createdAt": "2020-03-03T12:47:05.571Z"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Validation Error" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---


**Show One Todo**
----
  Return one todo in json based on id from database.
    
* **Headers**

  Authorization: `<token>`

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

    **Required**

    id=[integer]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "data": {
        "id": 3,
        "title": "Playing Dota with Adam",
        "description": "Lose",
        "status": false,
        "UserId" : 3,
        "due_date": "2020-03-05T00:00:00.000Z",
        "updatedAt": "2020-03-03T12:47:05.571Z",
        "createdAt": "2020-03-03T12:47:05.571Z"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must login first" }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

---

**Update One Todo**
----
  Update one todo based on id.
    
* **Headers**

  Authorization: `<token>`

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

    **Required**

    id=[integer]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "data": {
        "id": 3,
        "title": "Playing Dota with Adam",
        "description": "Lose",
        "status": true,
        "due_date": "2020-03-05T00:00:00.000Z",
        "updatedAt": "2020-03-03T12:47:05.571Z",
        "createdAt": "2020-03-03T12:47:05.571Z"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must login first" }`

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Validation Error" }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Delete One Todo**
----
  Delete one todo based on id.
    
* **Headers**

  Authorization: `<token>`

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

    **Required**

    id=[integer]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success Delete Data Id: 5"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must login first" }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Register User**

---

  Register a User.

* **URL**

  /register

* **Method**

  `POST`

*  **URL Params**

    **Required**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "id": 3,
        "email": "reinfajar@gmail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Email Already Exist" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Google Sign In**
----
  Login a user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTgwODI2MTk1fQ.h56et9F8Iby0BNgLIG6e5wvGtRC6oRDvpxHf8WO4rWs" 
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Not Found <br />
    **Content:** `{ message : "Email / Password are Wrong" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Google Sign In**
----
  Login a user using google sign in.

* **URL**

  /google

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTgwODI2MTk1fQ.h56et9F8Iby0BNgLIG6e5wvGtRC6oRDvpxHf8WO4rWs" 
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Not Found <br />
    **Content:** `{ message : "Email/Password Invalid" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Third Party API**
----
  Third party API that I used.

* **URL**

  https://api.adviceslip.com/advice