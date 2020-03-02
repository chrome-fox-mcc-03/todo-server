# todo-server
**GET ALL TODOS**
----
  Returns json data about a single user.

* **URL**

  /todos

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }]`
 
* **Error Response:**

  * **Code:** 500 NOT FOUND <br />
    **Content:** `{ error : "Server Error" }`




**CREATE TODO**
----
  Returns json data about a single user.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

* **Data Params**

  title=[string], descrition=[string], status=[boolean] due_date=[date]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Server error" }`





**GET TODO BY ID**
----
  Returns json data about a single user.

* **URL**

  /todos/:id

* **Method:**

  `GET`

  **URL Params**

  **Required:**
   id=[integer]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }`
 
* **Error Response:**

  * **Code:** 500 NOT FOUND <br />
    **Content:** `{ error : "Server Error" }`




**UPDATE TODO**
----
  Returns json data about a single user.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
   id=[integer]

* **Data Params**

  titl=[string], descrition=[string], status=[boolean] due_date=[date]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Server error" }`




**DELETE BY ID**
----
  Returns json data about a single user.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`

  **URL Params**

  **Required:**
   id=[integer]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }`
 
* **Error Response:**

  * **Code:** 500 NOT FOUND <br />
    **Content:** `{ error : "Server Error" }`