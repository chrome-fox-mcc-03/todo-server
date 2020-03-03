# todo-server

CREATE LIST
----
  Return JSON data of created list

* **URL**

  /todos/

* **Method:**
  
  POST
  
*  **URL Params** 

   **Required:**
 
   none

   **Optional:**
  
   none

* **Data Params**

  title = [string],
  description = [string],
  status = [boolean],
  due_date = [date]

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** {
    "id": 2,
    "title": "buat aplikasi todo",
    "description": "menggunakan rest api",
    "status": false,
    "due_date": "2020-03-02T00:00:00.000Z",
    "updatedAt": "2020-03-02T08:25:05.545Z",
    "createdAt": "2020-03-02T08:25:05.545Z"
}
 
* **Error Response:**

  * **Code:** 400 VALIDATION ERROR <br />
    **Content:** `{ error : "validation errors" }`

SHOW LIST
----
  Return JSON on "Todos" table

* **URL**

  /todos/

* **Method:**
  
  GET
  
*  **URL Params** 

   **Required:**
 
   none

   **Optional:**
  
   none

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** {
    "id": 2,
    "title": "buat aplikasi todo",
    "description": "menggunakan rest api",
    "status": false,
    "due_date": "2020-03-02T00:00:00.000Z",
    "updatedAt": "2020-03-02T08:25:05.545Z",
    "createdAt": "2020-03-02T08:25:05.545Z"
}
 
* **Error Response:**

  * **Code:** 400 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "internal server error" }`


SHOW LIST BY ID
----
  Return JSON on "Todos" table by id

* **URL**

  /todos/:id

* **Method:**
  
  GET
  
*  **URL Params** 

   **Required:**
 
   id=[integer]

   **Optional:**
  
   none

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** {
    "id": 2,
    "title": "buat aplikasi todo",
    "description": "menggunakan rest api",
    "status": false,
    "due_date": "2020-03-02T00:00:00.000Z",
    "updatedAt": "2020-03-02T08:25:05.545Z",
    "createdAt": "2020-03-02T08:25:05.545Z"
}
 
* **Error Response:**

  * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "not found" }`

EDIT DATA BY ID
----
  Return JSON of edited data by id

* **URL**

  /todos/:id

* **Method:**
  
  PUT
  
*  **URL Params** 

   **Required:**
 
   id=[integer]

   **Optional:**
  
   none

* **Data Params**
  
  title = [string],
  description = [string],
  status = [boolean],
  due_date = [date]

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** {
    "id": 2,
    "title": "buat aplikasi todo",
    "description": "menggunakan rest api",
    "status": false,
    "due_date": "2020-03-02T00:00:00.000Z",
    "updatedAt": "2020-03-02T08:25:05.545Z",
    "createdAt": "2020-03-02T08:25:05.545Z"
}
 
* **Error Response:**

  * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "not found" }`


DELETE DATA BY ID
----
  number of deleted row

* **URL**

  /todos/:id

* **Method:**
  
  DELETE
  
*  **URL Params** 

   **Required:**
 
   id=[integer]

   **Optional:**
  
   none

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 1
 
* **Error Response:**

  * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "not found" }`
    
