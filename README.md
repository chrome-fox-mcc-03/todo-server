# todo-server

## **Register**
Add a new user to sign up

* **URL**

  _/register/_

* **Method**

  `POST`

* **Headers**
  **Required:**

  None

* **URL Params**
  **Required:**

  None

* **Data Body**

  `email=[string]`<br>
  `password=[string]` <br>

* **Success Response:**
  * **Code:** 201
  * **Content:** 
  ```javascript
  {
    "User": {
        "id": 4,
        "email": "ulfa@yahoo.com"
    }
  }
  ```

* **Error Response:**
  * **Code:** 400
  * **Content:** 
  ```javascript
  {
    "error": "Password has at least 6 characters" 
  }
  ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
  ```javascript
  {
    "error": "Internal Server Error" 
  }
  ```

## **Login**
Login to Fancy Todo

* **URL**

  _/login/_

* **Method**

  `POST`

* **Headers**
  **Required:**

  None

* **URL Params**
  **Required:**

  None

* **Data Body**

  `email=[string]`<br>
  `password=[string]`

* **Success Response:**
  * **Code:** 201
  * **Content:** 
  ```javascript
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ1bGZhQHlhaG9vLmNvbSIsImlhdCI6MTU4MzkxMzM5OH0.ERrvacMZ47lUpIBfQINk8J5RHkP0kFcXi_sXPLh2DlI"
  }
  ```

* **Error Response:**
  * **Code:** 400
  * **Content:** 
  ```javascript
  {
    "error": "Email or password is wrong" 
  }
  ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
  ```javascript
  {
    "error": "Internal Server Error" 
  }
  ```

## **Create New Todo**
Add a new todo list

* **URL**

  _/todos/_

* **Method**

  `POST`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**

  None

* **Data Body**

  `title=[string]`<br>
  `description=[string]` <br>
  `status=[string]` <br>
  `due_date=[date]`

* **Success Response:**
  * **Code:** 201
  * **Content:** 
  ```javascript
  {
    "data": {
        "id": 21,
        "title": "go home",
        "description": "go home at 6pm",
        "status": false,
        "due_date": "2020-03-02T10:44:12.905Z",
        "updatedAt": "2020-03-02T10:44:13.051Z",
        "createdAt": "2020-03-02T10:44:13.051Z"
    }
  }
  ```

* **Error Response:**
  * **Code:** 400
  * **Content:** 
  ```javascript
  {
    "error": "Title must be filled" 
  }
  ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
  ```javascript
  {
    "error": "Internal Server Error" 
  }
  ```


## **Show All List Todo**

Show all todo list

* **URL**

  _/todos/_

* **Method**

  `GET`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**
  
  None

* **Data Body**

  None

* **Success Response:**
  * **Code:** 200
  * **Content:** 
  ```javascript
  {
    "data": [
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
  }
  ```

* **Error Response:**
  * **Code:** 500
  * **Content:** 
  ```javascript
  {
    "error": "Internal Server Error" 
  }
  ```


## **Find One Todo List by Id**

find one row from todo list by id 

* **URL**

  _/todos/:id_

* **Method**

  `GET`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**
  
  `id=[integer]`

* **Data Body**

   None

* **Success Response:**
  * **Code:** 200
  * **Content:** 
  ```javascript
  {
    "data": {
        "id": 21,
        "title": "go home",
        "description": "go home at 6pm",
        "status": false,
        "due_date": "2020-03-02T10:44:12.905Z",
        "updatedAt": "2020-03-02T10:44:13.051Z",
        "createdAt": "2020-03-02T10:44:13.051Z"
    }
  }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** 
  ```javascript
  {
    "error": "Todo not found" 
  }
  ```

## **Update Todo List by Id**

update one row from todo list by id

* **URL**

  _/todos/:id_

* **Method**

  `PUT`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**

  `id:[integer]`

* **Data Body**

  title,
  description,
  status,
  due_date

* **Success Response:**
  * **Code:** 200
  * **Content:** 
  ```javascript
  {
    "data": {
        "id": 21,
        "title": "go home",
        "description": "go home at 6pm",
        "status": false,
        "due_date": "2020-03-02T10:44:12.905Z",
        "updatedAt": "2020-03-02T10:44:13.051Z",
        "createdAt": "2020-03-02T10:44:13.051Z"
    }
  }
  ```

* **Error Response:**
  * **Code:** 400
  * **Content:** 
  ```javascript
  {
    "error": "Description must be filled" 
  }
  ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
  ```javascript
  {
    "error": "Internal Server Error"
  }
  ```


## **Delete Todo List by Id**

Delete one row from todo list by id 

* **URL**

  _/todos/:id_

* **Method**

  `DELETE`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**
  
  `id=[integer]`

* **Data Body**

   None

* **Success Response:**
  * **Code:** 200
  * **Content:** 
  ```javascript
  {
    "data": {
        "id": 21,
        "title": "go home",
        "description": "go home at 6pm",
        "status": false,
        "due_date": "2020-03-02T10:44:12.905Z",
        "updatedAt": "2020-03-02T10:44:13.051Z",
        "createdAt": "2020-03-02T10:44:13.051Z"
    }
  }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** 
  ```javascript
  {
    "error": "Failed to delete Todo" 
  }
  ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
  ```javascript
  {
    "error": "Internal Server Error" 
  }
  ```

## **Create Countdown**

Create a countdown of todo's due date 

* **URL**

  _https://countdownmail.com/api_

* **Method**

  `POST`

* **Headers**
  **Required:**

  `Authorization=[string]`

* **URL Params**
  **Required:**
  
  None

* **Data Body**

  None

* **Success Response:**
  * **Code:** 200
  * **Content:** 
  ```javascript
  {
    "status": "success",
    "message": {
        "code": "1j",
        "src": "http://i.countdownmail.com/td.gif"
    }
  }
  ```

* **Error Response:**
  * **Code:** 401
  * **Content:** 
  ```javascript
  {
    "status": "error",
    "message": "Unauthorized"
  }
  ```
