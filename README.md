# todo
**GET ALL TODOS**
----
  Returns json data from User Todos.

* **URL**

  /todos

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  None
* **Headers**

   **Required:** `Access Token`

   `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

* **Success Response:**

  * **Code:** 200 <br/>Content:** `[{ id:1 title : "First Todo", description : "This is First Todo", status:False/True, due_date:2020-03-06, UserId:1 createdAt: 2020-03-06, updatedAt:2020-03-06 }]`
  
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `Internal Server Error`
    
    OR
    
  * **Code:** 400 <br/>
    
    **Content:** `Access Denied`




**CREATE TODO**
----
  Adding a new todo.

* **URL**

  /todos

* **Method:**

  `POST`
  
* **URL Params**

   **Required:**

   None

* **Headers**

  **Required:** `Access Token`

  `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

  

* **Data Params**

  title=[string]

  descrition=[string]

  due_date=[date]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }`

* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `Internal Server Error`
    
    OR
    
  * **Code:** 400 <br/>
  
    **Content:** `Please Fill Title / Please Fill Description / Due Date must be greater than now/ Access Denied`



**GET TODO BY ID**
----
  Find and return todo by "id".

* **URL**

  /todos/:id

* **Method:**

  `GET`

* **URL Params**

  **Required:**
   id=[integer]

* **Headers**

  **Required:** `Access Token`

  `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }`
    
    

* **Error Response:**

  * **Code:** 500 NOT FOUND <br />
    **Content:** `Internal Server Error`
    
  * **Code:** 400 <br/>
    
    **Content:** `Access Denied/ todo not found`




**UPDATE TODO**
----
  Find and update todo by "id".

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
* **URL Params**

   **Required:**
    id=[integer]

* **Headers**

   **Required:** `Access Token`

   `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

* **Data Params**

  title=[string], description=[string], status=[boolean] due_date=[date]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }`

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `Internal Server Error`
    
  * **Code:** 400 <br/>
    
    **Content:** `Please Fill Title / Please Fill Description / Due Date must be greater than now/ Access Denied`




**DELETE BY ID**
----
  find and delete todo by id.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`

* **Headers**

  **Required:** `Access Token`

  `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

* **URL Params**

* **Data Params**

  None
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 title : "First Todo", description : "This is First Todo", status:True, due_date:2020-03-06, createdAt: 2020-03-06, updatedAt:2020-03-06 }`

* **Error Response:**

  * **Code:** 500 NOT FOUND <br />
    **Content:** `Internal Server Error`
    
  * **Code:** 400 <br/>
    
    **Content:** `Access Denied/ todo not found`





# 

User
----

### **Sign Up**

----
  Add a new user to database

* **URL**

  /users/signup

* **Method:**

  `POST`
  
* **URL Params**

   **Required:**

   None

* **Data Params**

  email=[string]

  password=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:1 email : "hilmi@mail.com" }`

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `Internal Server Error`
  * **Code:** 400 <br />
    **Content:** `email already exists`



### **Sign In**

----

  Add a new user to database

* **URL**

  /users/signin

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  None

* **Data Params**

  email=[string]

  password=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Access Token`

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `Internal Server Error`
  * **Code:** 400 <br />
    **Content:**  `email / password is Wrong`