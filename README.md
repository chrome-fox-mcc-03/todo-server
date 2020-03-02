# todo-server
**Title**
----
  <_Todos App._>

* **URL**

  /todos

* **Method:**

  `GET`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {
            "id": 2,
            "title": "John Doe",
            "description": "test",
            "status": false,
            "due_date": "2020-03-02T07:41:44.308Z",
            "createdAt": "2020-03-02T07:41:44.308Z",
            "updatedAt": "2020-03-02T07:41:44.308Z"
        }
    ]
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`
----

* **URL**

  /todos/:id

* **Method:**

  `GET`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": 2,
        "title": "John Doe",
        "description": "test",
        "status": false,
        "due_date": "2020-03-02T07:41:44.308Z",
        "createdAt": "2020-03-02T07:41:44.308Z",
        "updatedAt": "2020-03-02T07:41:44.308Z"
    }
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ "message" : 'Error Not Found' }`
----

* **URL**

  /todos

* **Method:**

  `POST`

*  **URL Params**

    **Required:**

    `id:[integer]`

* **Data Params**

    `title:[string]` <br />
    `description:[string]` <br />
    `status:[string]` <br />
    `due_date:[date]` <br />

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
        "result": {
            "id": 6,"title": "Minggu",
            "description": "Nonton Tv",
            "status": false,
            "due_date": "2020-03-04T17:00:00.000Z",
            "updatedAt": "2020-03-02T10:07:28.668Z",
            "createdAt": "2020-03-02T10:07:28.668Z"
        }
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`
----

* **URL**

  /todos/:id

* **Method:**

  `PUT`

*  **URL Params**

    **Required:**

    `id:[integer]`

* **Data Params**

    `title:[string]` <br />
    `description:[string]` <br />
    `status:[string]` <br />
    `due_date:[date]` <br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "result": {
            "id": 6,
            "title": "Minggu",
            "description": "Nonton Tv",
            "status": false,
            "due_date": "2020-03-04T17:00:00.000Z",
            "updatedAt": "2020-03-02T10:07:28.668Z",
            "createdAt": "2020-03-02T10:07:28.668Z"
        },
        "message":"Success Update!"
    }`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message" : 'Validation Errors' }`
----

* **URL**

  /todos/:id

* **Method:**

  `DELETE`

*  **URL Params**

    **Required:**

    `id:[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "result": {
            "id": 6,
            "title": "Minggu",
            "description": "Nonton Tv",
            "status": false,
            "due_date": "2020-03-04T17:00:00.000Z",
            "updatedAt": "2020-03-02T10:07:28.668Z",
            "createdAt": "2020-03-02T10:07:28.668Z"
        },
        "message":"Success Delete!"
    }
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ "message" : 'Error Not Found' }`
----