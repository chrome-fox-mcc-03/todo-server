# todo-server

## **Create New Todo**
Add a new todo list

* **URL**

  _/todos/_

* **Method**

  `POST`

* **URL Params**
  **Required:**

  None

* **Data Params**

  title,
  description,
  status,
  due_date

* **Success Response:**
  * **Code:** 201 <br/>
  * **Content:** `{
    "Todo": {
        "id": 21,
        "title": "go home",
        "description": "go home at 6pm",
        "status": false,
        "due_date": "2020-03-02T10:44:12.905Z",
        "updatedAt": "2020-03-02T10:44:13.051Z",
        "createdAt": "2020-03-02T10:44:13.051Z"
    }
}`

* **Error Response:**
  * **Code:** 400 <br/>
  * **Content:** `{
    "error": "validation error" }`

    OR

* **Error Response:**
  * **Code:** 500 <br/>
  * **Content:** `{
    "error": "internal server error" }`


## **Show All List Todo**
Show all todo list

* **URL**

  _/todos/_

* **Method**

  `GET`

* **URL Params**
  **Required:**
  
  None

* **Data Params**

  None

* **Success Response:**
  * **Code:** 200 <br/>
  * **Content:** `{
    "Todo": [
        {
            "id": 2,
            "title": "learning REST API",
            "description": "studying REST in first day phase 2",
            "status": false,
            "due_date": "2020-03-02T08:04:27.421Z",
            "createdAt": "2020-03-02T08:04:27.494Z",
            "updatedAt": "2020-03-02T08:04:27.494Z"
        },
        {
            "id": 1,
            "title": "sleeping on monday",
            "description": "sleep at 10PM",
            "status": false,
            "due_date": "2020-03-02T08:26:21.229Z",
            "createdAt": "2020-03-02T08:03:30.919Z",
            "updatedAt": "2020-03-02T08:26:21.385Z"
        },
    ]
  }`

* **Error Response:**
  * **Code:** 500 <br/>
  * **Content:** `{
    "error": "internal server error" }`


## **Find one todo list by id

find one row from todo list by id 

* **URL**

  _/todos/:id_

* **Method**

  `GET`

* **URL Params**
  **Required:**
  
  `id=[integer]`

* **Data Params**

   None

* **Success Response:**
  * **Code:** 200 <br/>
  * **Content:** `{
    "Todo": {
        "id": 21,
        "title": "go home",
        "description": "go home at 6pm",
        "status": false,
        "due_date": "2020-03-02T10:44:12.905Z",
        "updatedAt": "2020-03-02T10:44:13.051Z",
        "createdAt": "2020-03-02T10:44:13.051Z"
    }
}`

* **Error Response:**
  * **Code:** 404 <br/>
  * **Content:** `{
    "error": "data not found" }`

## UPDATE todo list by id

update one row from todo list by id

* **URL**

  _/todos/:id_

* **Method**

  `PUT`

* **URL Params**
  **Required:**

  `id:[integer]`

* **Data Params**

  title,
  description,
  status,
  due_date

* **Success Response:**
  * **Code:** 200 <br/>
  * **Content:** `{
    "Todo": {
        "id": 21,
        "title": "go home",
        "description": "go home at 6pm",
        "status": false,
        "due_date": "2020-03-02T10:44:12.905Z",
        "updatedAt": "2020-03-02T10:44:13.051Z",
        "createdAt": "2020-03-02T10:44:13.051Z"
    }
}`

* **Error Response:**
  * **Code:** 400 <br/>
  * **Content:** `{
    "error": "validation error" }`

    OR

* **Error Response:**
  * **Code:** 500 <br/>
  * **Content:** `{
    "error": "internal server error" }`

    OR

* **Error Response:**
  * **Code:** 404 <br/>
  * **Content:** `{
    "error": "data not found" }`


## **DELETE todo list by id

delete one row from todo list by id 

* **URL**

  _/todos/:id_

* **Method**

  `DELETE`

* **URL Params**
  **Required:**
  
  `id=[integer]`

* **Data Params**

   None

* **Success Response:**
  * **Code:** 200 <br/>
  * **Content:** `{
    "Todo": {
        "id": 21,
        "title": "go home",
        "description": "go home at 6pm",
        "status": false,
        "due_date": "2020-03-02T10:44:12.905Z",
        "updatedAt": "2020-03-02T10:44:13.051Z",
        "createdAt": "2020-03-02T10:44:13.051Z"
    }
}`

* **Error Response:**
  * **Code:** 404 <br/>
  * **Content:** `{
    "error": "data not found" }`

    OR

* **Error Response:**
  * **Code:** 500 <br/>
  * **Content:** `{
    "error": "internal server error" }`