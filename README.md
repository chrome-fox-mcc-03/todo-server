## TODO-SERVER

**CREATE NEW TODO**
----
  
* **URL**

  `http://localhost:3000/todos`

* **Method:**
  
  POST
  
*  **URL Params**

   NONE

* **Data Params**

*   **Required:**

  ```javascript
  {
      "id": 8,
      "title": "Makan",
      "description": "Makan padang di RM Sederhana",
      "status": false,
      "due_date": "2020-03-10T00:00:00.000Z",
      "createdAt": "2020-03-02T13:36:00.176Z",
      "updatedAt": "2020-03-02T13:36:00.176Z"
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
    "id": 9,
    "title": "Code",
    "description": "Hello World, Hello Code",
    "status": false,
    "due_date": "2020-03-12T00:00:00.000Z",
    "updatedAt": "2020-03-02T13:41:17.873Z",
    "createdAt": "2020-03-02T13:41:17.873Z"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please add title at least 4 character"`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Your due minimum must due today"`
  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----


**READ ALL DATA TODO**
----

* **URL**

  `http://localhost:3000/todos`

* **Method:**

  `GET`
  
*  **URL Params**

   NONE

* **Data Params**

   NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
    "data": [
        {
          "id": 6,
          "title": "Hellooo",
          "description": "Haaiii",
          "status": false,
          "due_date": "2020-03-11T00:00:00.000Z",
          "createdAt": "2020-03-02T10:05:09.986Z",
          "updatedAt": "2020-03-02T10:05:09.986Z"
        }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`


----

**FIND ONE DATA TODO**
----

* **URL**

  `http://localhost:3000/todos/:id`

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
          "id": 7,
          "title": "Ducking Quacking",
          "description": "What the duck you are",
          "status": true,
          "due_date": "2020-03-20T00:00:00.000Z",
          "createdAt": "2020-03-02T11:02:51.862Z",
          "updatedAt": "2020-03-02T14:05:28.667Z"
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 DATA NOT FOUND <br />
    **Content:** `"DATA NONE"`

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**UPDATE TODO DATA**
----

* **URL**

  `http://localhost:3000/todos/:id`

* **Method:**
  
  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
          "id": 7,
          "title": "Ducking Quacking",
          "description": "What the duck you are",
          "status": true,
          "due_date": "2020-03-20T00:00:00.000Z",
          "createdAt": "2020-03-02T11:02:51.862Z",
          "updatedAt": "2020-03-02T14:05:28.667Z"
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Please add title at least 4 character"`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `"Your due minimum must due today"`
  
  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`


----

**DELETE TODO DATA**
----

* **URL**

  `http://localhost:3000/todos/:id`

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
    "id": 7,
    "title": "Ducking Quacking",
    "description": "What the duck you are",
    "status": true,
    "due_date": "2020-03-20T00:00:00.000Z",
    "createdAt": "2020-03-02T11:02:51.862Z",
    "updatedAt": "2020-03-02T14:05:28.667Z"
    }

    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----


**REGISTER NEW USER**
----

* **URL**

  `http://localhost:3000/register`

* **Method:**

  `POST`
  
*  **URL Params**

   NONE

* **Data Params**

   ```javascript
   {
     email: "mail@mail.com",
     password: "pass123"
   }
   ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
    "email": "mama@mail.com",
    "password": "$2a$10$wJIACEy5NrV4/tJtfDATPOqdC3G8V31aGZV1pw/iL0TmlyX0iayCW"
    }

    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `["Please use Email format"]`

  OR

  * **Code:** 400 <br />
    **Content:** `["Please add password at least 4 character"]`

  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**LOG IN**
----

* **URL**

  `http://localhost:3000/login`

* **Method:**

  `POST`
  
*  **URL Params**

   NONE

* **Data Params**

   ```javascript
   {
     email: "mail@mail.com",
     password: "pass123"
   }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoibWFtYUBtYWlsLmNvbSIsImlkIjoyfSwiaWF0IjoxNTgzMjQ3MzExfQ.w7VLYX3SaXPCM9sksdzuRGh0k8yAoYX97BiXmkyxvKc"
    }

    ```
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `"PW Email Salah"`

  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`
----

