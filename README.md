# todo-server

**Create Todo**
----
  Create data in database, return object JSON 

* **URL**

  /todos

* **Method:**
  
  POST
  
*  **URL Params**
    
    none

* **Data Params**

   **Required:**
 
   `title=[string]`,
   `status=[boolean]`,
   `due_date=[date]`,

   **Optional:**

   `description=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id: 1, title: Play Game, description: play game online, status: false, due_date: 2020-03-10, createdAt: 2020-03-02T08:55:40.696Z, updatedAt: 2020-03-02T08:55:40.696Z }`
 
* **Error Response:**

  * **Code:** 400 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Title Invalid" }`

  OR

  * **Code:** 500 SERVER <br />
    **Content:** `{ error : "Server Error" }`


**Show All Todos**
----
  Show all todos, return array of object

* **URL**

  /todos

* **Method:**
  
  GET
  
*  **URL Params**

    none

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ id: 1, title: Play Game, description: play game online, status: false, due_date: 2020-03-10, createdAt: 2020-03-02T08:55:40.696Z, updatedAt: 2020-03-02T08:55:40.696Z }, { id: 2, title: Shopping, description: shopping online, status: false, due_date: 2020-03-07, createdAt: 2020-03-02T08:55:40.696Z, updatedAt: 2020-03-02T08:55:40.696Z  }]`
 
* **Error Response:**

  * **Code:** 500 SERVER <br />
    **Content:** `{ error : "Server Error" }`


**Show Todo by Id**
----
  Show todo with id, return object JSON

* **URL**

  /todos/:id

* **Method:**
  
  GET
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 1, title: Play Game, description: play game online, status: false, due_date: 2020-03-10, createdAt: 2020-03-02T08:55:40.696Z, updatedAt: 2020-03-02T08:55:40.696Z }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "NOT FOUND" }`


**Update Todo by Id**
----
  Update todo by id, return object JSON

* **URL**

  /todos/:id

* **Method:**
  
  PUT
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   **Required:**
 
   `title=[string]`,
   `status=[boolean]`,
   `due_date=[date]`

   **Optional:**

   `description=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 1, title: Play Game, description: play game online, status: false, due_date: 2020-03-10, createdAt: 2020-03-02T08:55:40.696Z, updatedAt: 2020-03-02T08:55:40.696Z }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "NOT FOUND" }`

  OR

  * **Code:** 400 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Title Invalid" }`

  OR

  * **Code:** 500 SERVER <br />
    **Content:** `{ error : "Server Error" }`



**Delete Todo by Id**
----
  Delete todo by id, return object JSON

* **URL**

  /todos/:id

* **Method:**
  
  DELETE
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 1, title: Play Game, description: play game online, status: false, due_date: 2020-03-10, createdAt: 2020-03-02T08:55:40.696Z, updatedAt: 2020-03-02T08:55:40.696Z }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "NOT FOUND" }`

  OR

  * **Code:** 500 SERVER <br />
    **Content:** `{ error : "Server Error" }`
