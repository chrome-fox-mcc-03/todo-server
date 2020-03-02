# FancyTodo

**Base URL**

http://localhost:3000


**Todos**
----
----
***Display***
----
  Returns all todos.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "todo": [
        {
          "id": 1,
          "title": "Belajar",
          "description": "Belajar dokumentasi Sequelize sama Rest API",
          "status": false,
          "due_date": "2020-03-09T00:00:00.000Z",
          "createdAt": "2020-03-02T07:51:05.822Z",
          "updatedAt": "2020-03-02T08:34:57.030Z"
        }
      ]
    }
  ```
 
* **Error Response:**

  * **Code:** 500 <br />


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

----
***Create***
----
  Returns new todo.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

   **Required:**
  ````
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date:req.body.due_date
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
    "todo": [
        {
          "id": 1,
          "title": "Belajar",
          "description": "Belajar dokumentasi Sequelize sama Rest API",
          "status": false,
          "due_date": "2020-03-09T00:00:00.000Z",
          "createdAt": "2020-03-02T07:51:05.822Z",
          "updatedAt": "2020-03-02T08:34:57.030Z"
        }
      ]
    }

 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "SequelizeVlaidationError" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

----
***FindId***
----
  Returns todos data by Id.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

* **Code:** 200 <br />
    **Content:** 
    ```
    {
    "todo": [
        {
          "id": 1,
          "title": "Belajar",
          "description": "Belajar dokumentasi Sequelize sama Rest API",
          "status": false,
          "due_date": "2020-03-09T00:00:00.000Z",
          "createdAt": "2020-03-02T07:51:05.822Z",
          "updatedAt": "2020-03-02T08:34:57.030Z"
        }
      ]
    }
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "error not found" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

----
***Update***
----
  Returns Updated todos.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   **Required:**
  ````
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date:req.body.due_date
    }
  ````

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "todo": [
        {
          "id": 1,
          "title": "Belajar",
          "description": "Belajar dokumentasi Sequelize sama Rest API",
          "status": false,
          "due_date": "2020-03-09T00:00:00.000Z",
          "createdAt": "2020-03-02T07:51:05.822Z",
          "updatedAt": "2020-03-02T08:34:57.030Z"
        }
      ]
    }
 
* **Error Response:**

  * **Code:** 500 <br />

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 400  <br />
    **Content:** `{ error : "SequelizeVlaidationError" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

----
***Delete***
----
  Returns deleted todo.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 500  <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```