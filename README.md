# todo-server
**Register**
----
Register new user on server.
* **URL**

    /register
* **Method:**

    `POST`
*  **URL Params**

   **Required:**
 
    None
* **Data Params**

    `{
        email: 'foo@bar.com',
        password: 'secretpass'
    }`

    **Required:**

    `email=[string]`  
    `password=[string]`  
    email must be unique
    password length must be 6 characters or more
* **Success Response:**

  * **Code:** 201 <br />
    **Content:**  
    `{
        "id": 29,
        "email": "foo@bar.com",
        "message": "Email registered",
        "token": <server generated token>
    }`
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:**  
    `{
        "error": "Email & password is required"
    }`  
    `{
        "error": [
            "Minimum password length is 6"
        ]
    }`  
    `{
        "error": [
            "Email already in use"
        ]
    }`

**Login**
----
Get user hash from server.
* **URL**

    /login
* **Method:**

    `POST`
*  **URL Params**

   **Required:**
 
    None
* **Data Params**

    `{
        email: 'foo@bar.com',
        password: 'secretpass'
    }`

    **Required:**

    `email=[string]`  
    `password=[string]`  
    password length must be 6 characters or more
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  
    `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0MDFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDUwOTl9.lVxZo2ILoPMboIWjRITIHQK2xr_X6n3iiHu5IGQeMHY"`
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:**  
    `{
        "error": "Email / password is required"
    }`  
    `{
        "error": "Wrong email/password"
    }`
    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "Internal Server Error"
    }`

**Show All Todo Items**
----
Show all todo items from database.
* **URL**

    /todos
* **Method:**

    `GET`
*  **URL Params**

   **Required:**
 
    `req.headers.token = server generated hash`
* **Data Params**

    None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**<br> `{
  "todos": [
        {
        "id": 1,
        "title": "todo 01",
        "description": "lorem ipsum dolor sit amet",
        "status": "todo",
        "due_date": "2020-03-03T10:49:55.923Z",
        "UserId": 1,
        "createdAt": "2020-03-03T10:49:55.923Z",
        "updatedAt": "2020-03-03T10:49:55.923Z"
        },
        {
        "id": 2,
        "title": "todo 02",
        "description": "consectetur adipiscing elit",
        "status": "todo",
        "due_date": "2020-03-03T10:49:55.923Z",
        "UserId": 2,
        "createdAt": "2020-03-03T10:49:55.923Z",
        "updatedAt": "2020-03-03T10:49:55.923Z"
        }
    ]
    }`
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:**  
    `{
        "error": "Please login as valid user"
    }`
    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "Internal Server Error"
    }`

**Show One Todo Item**
----
Show one todo item from database, according to item's ID. Also show recent holidays up until todo's due date.
* **URL**

    /todos/:id
* **Method:**

    `GET`
*  **URL Params**

    Specify item's ID that is going to be showed

   **Required:**
 
   `id=[integer]`  
   `req.headers.token = server generated hash`
* **Data Params**

    None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  
    `{
    "todo": {
        "id": 4,
        "title": "todo 05",
        "description": "lorem ipsum dolor sit amet",
        "status": "todo",
        "due_date": "2020-05-14T00:00:00.000Z",
        "UserId": 1,
        "createdAt": "2020-03-03T13:44:09.239Z",
        "updatedAt": "2020-03-03T13:44:09.239Z"
    },
    "holidays": [
        {
        "date": "2020-04-10",
        "holiday": "Wafat Isa Almasih"
        },
        {
        "date": "2020-04-12",
        "holiday": "Paskah"
        },
        {
        "date": "2020-05-01",
        "holiday": "Hari Buruh Internasional"
        }
    ]}`
 
* **Error Response:**
    * **Code:** 400 Bad Request <br />
    **Content:**  
    `{
        "error": "Please login as valid user"
    }`
    * **Code:** 404 Error Not Found <br />
    **Content:**  
    `{
        "error": "Item with id not found"
    }`
    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "Internal Server Error"
    }`

**Create a new Todo Item**
----
Create new todo item. Todo item owner is defined in hashed token.
* **URL**

    /todos
* **Method:**

    `POST`
*  **URL Params**

    

   **Required:**
  
   `req.headers.token = server generated hash`
* **Data Params**

    `{
        title: 'todo 03',
        description: 'lorem ipsum dolor sit amet',
        status: 'todo',
        due_date: '2020-03-13'
    }`

    **Required:**

    `title=[string]`\
    `description=[string]`\
    `status=[['todo', 'completed']]`\
    `due_date: ['yyyy-mm-dd']`
* **Success Response:**

    * **Code:** 201 <br />
    **Content:**   
    `{
        "todo": {
            "id": 4,
            "title": "todo 05",
            "description": "lorem ipsum dolor sit amet",
            "status": "todo",
            "due_date": "2020-05-14T00:00:00.000Z",
            "UserId": 1,
            "updatedAt": "2020-03-03T13:44:09.239Z",
            "createdAt": "2020-03-03T13:44:09.239Z"
        }
    }`
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:**  
    `{
        "error": "Please login as valid user"
    }`  
    `{
        "error": [
            "Title cannot be empty string",
            "Description cannot be empty string",
            "Status allowed ['todo', 'completed']",
            "Unable to parse date from input"
        ]
    }`
    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "Internal Server Error"
    }`

**Delete a Todo Item**
----
Delete a todo item
* **URL**

    /todos/:id
* **Method:**

    `GET`
*  **URL Params**

    Specify item's ID that is going to be deleted

   **Required:**
 
   `id=[integer]`  
   `req.headers.token = server generated hash`
* **Success Response:**

    * **Code:** 200 <br />
    **Content:**   
    `{
        "deleted": {
            "title": "todo 03",
            "description": "lorem ipsum dolor sit amet",
            "status": "todo",
            "due_date": "2020-03-13T00:00:00.000Z"
        }
    }`
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:**  
    `{
        "error": "Please login as valid user"
    }` 
    * **Code:** 404 Error Not Found <br />
    **Content:**  
    `{
        "error": "Item with id not found"
    }`
    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "Internal Server Error"
    }`

**Update a Todo Item**
----
Update all fields value of a todo item
* **URL**

    /todos/:id
* **Method:**

    `PUT`
*  **URL Params**

    Specify item's ID that is going to be updated

   **Required:**
 
   `id=[integer]`  
   `req.headers.token = server generated hash`
* **Data Params**

    `{
        title: 'todo 03',
        description: 'lorem ipsum dolor sit amet',
        status: 'todo',
        due_date: '2020-03-13'
    }`

    **Required:**

    `title=[string]`  
    `description=[string]`  
    `status=[['todo', 'completed']]`  
    `due_date: ['yyyy-mm-dd']`
* **Success Response:**

    * **Code:** 201 <br />
    **Content:**   
    `{
        "updated": {
            "id": 1,
            "title": "todo 01",
            "description": "lorem ipsum dolor sit amet",
            "status": "todo",
            "due_date": "2020-07-01T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-03-03T10:49:55.923Z",
            "updatedAt": "2020-03-03T14:12:35.551Z"
        }
    }`
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:**   
    `{
        "error": "Please login as valid user"
    }` 
    `{
        "error": [
            "Title cannot be empty string",
            "Description cannot be empty string",
            "Status allowed ['todo', 'completed']",
            "Unable to parse date from input"
        ]
    }`
    * **Code:** 404 Error Not Found <br />
    **Content:**  
    `{
        "error": "Item with id not found"
    }`
    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "Internal Server Error"
    }`