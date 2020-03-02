# todo-server

**Get All Todos**
----

* **URL**

  /todos/

* **Method:**
  
  `GET`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `[{ id : 1, title: "eat", description: "steak", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"}, { id : 2, title: "drink", description: "orange juice", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"},]`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Log in" }`

**Post Todo**
----

* **URL**

  /todos/

* **Method:**
  
  `POST`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  **Required:**

  `title=[string]`<br />
  `status=[string]`<br />
  `due_date=[date]`

   **Optional:**
 
   `description=[string]`
  
* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{ id : 1, title: "eat", description: "steak", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"}`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "Please enter due_date" }`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

**Update Todo**
----

* **URL**

  /todos/

* **Method:**
  
  `PUT`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  **Required:**

  `title=[string]`<br />
  `status=[string]`<br />
  `due_date=[date]`

   **Optional:**
 
   `description=[string]`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ id : 1, title: "eat", description: "steak", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 404 Not Found <br />
    **Content:** `{ error : "id not found!" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "Please enter due_date" }`

**Delete Todos**
----

* **URL**

  /todos/

* **Method:**
  
  `DELETE`

*  **URL Params**

   **Required:**
 
   `id=[integer]`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ id : 1, title: "eat", description: "steak", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 404 Not Found <br />
    **Content:** `{ error : "id not found!" }`