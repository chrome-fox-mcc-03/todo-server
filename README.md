# todo-server
**Show All Todo Items**
----
Show all todo items from database.
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
    **Content:**<br> `{todos: [`\
        `{
            "id": 1,
            "title": "lorep ipsum dolor sit amet",
            "status": "todo",
            "due_date": "2020-03-02T06:45:19.048Z",
            "createdAt": "2020-03-02T06:45:19.048Z",
            "updatedAt": "2020-03-02T06:45:19.048Z"
        }, `\
        `{
            "id": 2,
            "title": "todo 02",
            "description": "consectetur adipiscing elit",
            "status": "todo",
            "due_date": "2020-03-02T06:45:19.048Z",
            "createdAt": "2020-03-02T06:45:19.048Z",
            "updatedAt": "2020-03-02T06:45:19.048Z"
        }`\
        `]}`
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "database \"db_name\" does not exist"
    }`

**Show One Todo Item**
----
Show one todo item from database, according to id.
* **URL**

    /todos/:id
* **Method:**

    `GET`
*  **URL Params**

    Specify item's ID that is going to be showed

   **Required:**
 
   `id=[integer]`
* **Data Params**

    None
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  
    `{
        "todo": {
            "id": 4,
            "title": "todo put 04 ganti titel",
            "description": "lorem ipsum dolor sit amet consectetur adipiscing elit",
            "status": "todo",
            "due_date": "2020-03-15T00:00:00.000Z",
            "createdAt": "2020-03-02T09:25:27.212Z",
            "updatedAt": "2020-03-02T09:57:28.698Z"
        }
    }`
 
* **Error Response:**
    * **Code:** 404 Error Not Found <br />
    **Content:**  
    `{
        "error": "Item with id not found"
    }`
    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "database \"db_name\" does not exist"
    }`

**Create a new Todo Item**
----
Create new todo item
* **URL**

    /todos
* **Method:**

    `POST`
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

    * **Code:** 200 <br />
    **Content:**   
    `{
        "todo": {
            "id": 3,
            "title": "todo 03",
            "description": "lorem ipsum dolor sit amet",
            "status": "todo",
            "due_date": "2020-03-13T00:00:00.000Z",
            "updatedAt": "2020-03-02T08:01:54.375Z",
            "createdAt": "2020-03-02T08:01:54.375Z"
        }
    }`
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:**     
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
        "error": "database \"db_name\" does not exist"
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

    * **Code:** 404 Error Not Found <br />
    **Content:**  
    `{
        "error": "Item with id not found"
    }`
    * **Code:** 500 Internal Server Error <br />
    **Content:**  
    `{
        "error": "database \"db_name\" does not exist"
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

    * **Code:** 200 <br />
    **Content:**   
    `{
        "updated": {
            "id": 4,
            "title": "todo put 04 ganti titel",
            "description": "lorem ipsum dolor sit amet consectetur adis",
            "status": "todo",
            "due_date": "2020-03-15T00:00:00.000Z",
            "createdAt": "2020-03-02T09:25:27.212Z",
            "updatedAt": "2020-03-02T09:57:28.698Z"
        }
    }`
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:**   
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
        "error": "database \"db_name\" does not exist"
    }`