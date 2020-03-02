# todo-server Adam Primarizki

**Show Todos**
----
  Returns json data containing all todos.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
        {
            "id": 1,
            "title": "Kerjain Todos",
            "description": "Kerjain todos agar phase 2 lancar",
            "status": false,
            "due_date": "2020-03-06T00:00:00.000Z"
        },
        {
            "id": 2,
            "title": "Baca You dont know JS",
            "description": "Perdalam JS",
            "status": false,
            "due_date": "2020-04-01T00:00:00.000Z"
        },
        {
            "id": 3,
            "title": "Olahraga",
            "description": "No description.",
            "status": false,
            "due_date": "2020-03-04T00:00:00.000Z"
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

------
  
**Create Todo**
----
  Adding a new todo data.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  `title=[string]`<br />
  `description=[string]`<br />
  `due_date=[date]`

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** 
    ```json
    {
        "status": false,
        "id": 6,
        "title": "Isi bensin",
        "description": "bensin mo abiss coe",
        "due_date": "2020-03-01T17:00:00.000Z",
        "updatedAt": "2020-03-02T07:21:37.446Z",
        "createdAt": "2020-03-02T07:21:37.446Z"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

  OR

  * **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ error : "ERROR 400: Data is not valid!" }`
------
  
**Show Todo by "id"**
----
  Find and show a todo by "id".

* **URL**

  /todos/{id}

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

    NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
        {
            "id": 3,
            "title": "Olahraga",
            "description": "Sehat",
            "status": false,
            "due_date": "2020-03-04T00:00:00.000Z"
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

  OR

  * **Code:** 404 Not Found <br />
    **Content:** `{ error : "ERROR 404: Data not found" }`
------

**Update Todo by "id"**
----
  Find and update a todo by "id".

* **URL**

  /todos/{id}

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

    `title=[string]`<br />
    `status=[boolean]`<br />
    `description=[string]`<br />
    `due_date=[date]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
        {
            "id": 8,
            "title": "service motors",
            "description": "gajadi isi bensin, serpis duluu",
            "status": true,
            "due_date": "2020-03-02T00:00:00.000Z"
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "ERROR 400: Data is not valid!" }`

  OR

  * **Code:** 404 Not Found <br />
    **Content:** `{ error : "ERROR 404: Data not found" }`
------

**Delete Todo by "id"**
----
  Find and delete a todo by "id".

* **URL**

  /todos/{id}

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
    ```json
    {
        "id": 5,
        "title": "Isi bensin",
        "description": "bensin mo abiss coe",
        "status": false,
        "due_date": "2020-03-01T17:00:00.000Z",
        "createdAt": "2020-03-02T06:57:45.848Z",
        "updatedAt": "2020-03-02T06:57:45.848Z"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

  OR

  * **Code:** 404 Not Found <br />
    **Content:** `{ error : "ERROR 404: Data not found" }`

------
**Status Codes**
----
| Code        | Meaning           |
| ------------- |:-------------:|
| 200 | Data received      |   
| 201 | Data created/updated      |
||
| 500     | Server internal error/malfunction |
| 404      | Parameter(s) is not found on the database      | 
| 400     | Bad request: <br> - Data type input is not correct <br> - Name cannot be empty <br> - Date must be in the future      |   
   
