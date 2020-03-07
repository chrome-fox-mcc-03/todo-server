# todo-server

**Get All Todos**
----

* **URL**

  /todos

* **Method:**
  
  `GET`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{
    "data": [
        {
            "id": 11,
            "title": "makan sushi",
            "description": "sushi tei",
            "status": "pending",
            "due_date": "2020-03-02T20:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-03-03T11:45:35.441Z",
            "updatedAt": "2020-03-07T07:28:09.851Z"
        },
        {
            "id": 10,
            "title": "bobo",
            "description": "cantik",
            "status": "pending",
            "due_date": "2020-03-04T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-03-03T11:34:23.346Z",
            "updatedAt": "2020-03-03T11:34:23.346Z"
        }
    ],
    "quotes": [
        "<p>Beautiful accidents can happen, but accident is not the basis for design excellence. Purposeful discovery followed by focused, skillful conceptualization and execution is the basis for design excellence.  </p>\n"
    ]
}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

**Post Todo**
----

* **URL**

  /todos

* **Method:**
  
  `POST`

*  **Headers**

   **Required:**
 
   `token=[string]`

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
    **Content:** `{ data: { id : 1, title: "eat", description: "steak", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"}}`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error: "Please enter title" }`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

**Update Todo**
----

* **URL**

  /todos

* **Method:**
  
  `PUT`

*  **Headers**

   **Required:**
 
   `token=[string]`

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
    **Content:** `{ data: { id : 1, title: "eat", description: "steak", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"}}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error: "id not found!" }`

**Delete Todos**
----

* **URL**

  /todos

* **Method:**
  
  `DELETE`

*  **Headers**

   **Required:**
 
   `token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ data: { id : 1, title: "eat", description: "steak", status: "pending", "due_date": "2020-03-02T00:00:00.000Z", "createdAt": "2020-03-02T07:34:38.845Z", "updatedAt": "2020-03-02T07:43:44.548Z"}}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "id not found!" }`

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
    **Content:** `{ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgzMjM4NzYzfQ.fdLNdMN-7D_7JzqBGBRpCfY51cW5WTNBms8ZmQFgOvQ"}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ data: "invalid email / password"}`

**Login Google**
----

* **URL**

  /googleLogin

* **Method:**
  
  `POST`

* **Data Params**

  **Required:**

  `id_token=[string]`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgzMjM4NzYzfQ.fdLNdMN-7D_7JzqBGBRpCfY51cW5WTNBms8ZmQFgOvQ"}`

  OR

  * **Code:** 201 <br />
    **Content:** `{ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgzMjM4NzYzfQ.fdLNdMN-7D_7JzqBGBRpCfY51cW5WTNBms8ZmQFgOvQ"}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ data: "invalid email / password"}`


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
    **Content:** `{ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgzMjM4NzYzfQ.fdLNdMN-7D_7JzqBGBRpCfY51cW5WTNBms8ZmQFgOvQ"}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Error" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{error: "Email address already in use!"}`



