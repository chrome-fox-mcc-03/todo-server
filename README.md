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
    **Content:** `{ error : "Validation len on title failed" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Validation isAfter on due_date failed" }`
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

  `http://localhost:3000/:id`

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
    **Content:** `{ error : "DATA NOT FOUND" }`

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**UPDATE TODO DATA**
----

* **URL**

  `http://localhost:3000/:id`

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
    **Content:** `{ error : "Validation len on title failed" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Validation isAfter on due_date failed" }`
  
  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`


----

**DELETE TODO DATA**
----

* **URL**

  `http://localhost:3000/:id`

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
