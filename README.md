# todo-server

**Get All Todos**
----

* **URL**

  /todos

* **Method:**
  
  `GET`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `[{ id : 1, title: "eat", description: "steak", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"}, { id : 2, title: "drink", description: "orange juice", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"},]`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

**Post Todo**
----

* **URL**

  /todos

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
    **Content:** `Please enter title`, `Please enter status`, `Please enter due_date`, `Please enter UserId`, `Please enter UserId`, `due_date must be greater than now!`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

**Update Todo**
----

* **URL**

  /todos

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

  * **Code:** 400 Bad Request <br />
    **Content:** `id not found!`

**Delete Todos**
----

* **URL**

  /todos

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

  * **Code:** 400 Bad Request <br />
    **Content:** `id not found!`

**Login**
----

* **URL**

  /login

* **Method:**
  
  `POST`

* **Data Params**

  **Required:**

  `email=[string]`<br />
  `password=[string]`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgzMjM4NzYzfQ.fdLNdMN-7D_7JzqBGBRpCfY51cW5WTNBms8ZmQFgOvQ`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `invalid email / password`

**Register**
----

* **URL**

  /register

* **Method:**
  
  `POST`

* **Data Params**

  **Required:**

  `email=[string]`<br />
  `password=[string]`
  
* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{"id": 11, "title": "makan", "description": "sushi", "status": "pending", "due_date": "2020-03-04T00:00:00.000Z", "UserId": 1, "updatedAt": "2020-03-03T11:45:35.441Z", "createdAt": "2020-03-03T11:45:35.441Z"}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `Email address already in use!`, `Please enter email`, `please enter valid email address`, `Please enter password`, `password at least 6 characters!`



