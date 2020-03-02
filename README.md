# todo-server


**Create Todo**
----
  Create todo and Returns json data about a single Todo.

* **URL**

  /todos

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    title : string,
    description: string,
    StatusId: integer,
    due_Date: date
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      id: 1,
      title: 'Make a documentation',
      description:'To easy your code while working a project',
      StatusId: 1,
      due_date: '2020-03-02',
      createdAt: "2020-03-02T07:45:05.993Z",
      updatedAt: "2020-03-02T07:45:05.993Z",
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : [
        'title is required',
        'description is required',
        'status is required',
        'date has passed'
      ]
    }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

**Find All Todo**
----
  Returns json data about all todo.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   none

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
     [
        {
          id: 1,
          title: 'Make a documentation',
          description:'To easy your code while working a project',
          StatusId: 1,
          due_date: '2020-03-02',
          createdAt: "2020-03-02T07:45:05.993Z",
          updatedAt: "2020-03-02T07:45:05.993Z",
          Status : {
                "id": 1,
                "name": "ongoing",
                "createdAt": "2020-03-02T06:52:07.340Z",
                "updatedAt": "2020-03-02T06:52:07.340Z"
              }
        },
        {
          id: 2,
          title: 'Make rest api',
          description:'Look at from read.md',
          StatusId: 2,
          due_date: '2020-03-03',
          createdAt: "2020-03-02T07:45:05.993Z",
          updatedAt: "2020-03-02T07:45:05.993Z",
          Status : {
                  "id": 2,
                  "name": "overdue",
                  "createdAt": "2020-03-02T06:52:07.340Z",
                  "updatedAt": "2020-03-02T06:52:07.340Z"
              }
        }
    ]
 
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

***

**Find One Todo**
----
  Returns json data about a single todo.

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
      id: 1,
      title: 'Make a documentation',
      description:'To easy your code while working a project',
      StatusId: 2,
      due_date: '2020-03-02',
      createdAt: "2020-03-02T07:45:05.993Z",
      updatedAt: "2020-03-02T07:45:05.993Z",
      Status : {
            "id": 2,
            "name": "overdue",
            "createdAt": "2020-03-02T06:52:07.340Z",
            "updatedAt": "2020-03-02T06:52:07.340Z"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
      message : 'Bad Request',
      error :  'not found',
    }
    ```

***


**Update Todo**
----
  Update todo and Returns json data about a single Todo.

* **URL**

  /todos/:id

* **Method:**

  `POST`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  ```
  {
    title : string,
    description: string,
    StatusId: integer,
    due_Date: date
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      id: 1,
      title: 'New Title',
      description:'To easy your code while working a project',
      StatusId: 2,
      due_date: '2020-03-02',
      createdAt: "2020-03-02T07:45:05.993Z",
      updatedAt: "2020-03-02T07:45:05.993Z",
      Status : {
            "id": 2,
            "name": "overdue",
            "createdAt": "2020-03-02T06:52:07.340Z",
            "updatedAt": "2020-03-02T06:52:07.340Z"
        }
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : [
        'title is required',
        'description is required',
        'status is required',
        'date has passed'
      ]
    }
    ```
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
      message : 'Bad Request',
      error :  'not found',
    }
    ```

  OR  

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

****
----
  Delete Todo and Returns json data about a array.

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
    **Content:**
    ```
    [
      1
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
      message : 'Bad Request',
      error :  'not found',
    }
    ```

  OR  

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

***

# USER

**Register User**
----
  Create new user and Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    name : string,
    email: string,
    password: integer
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      id: 1,
      name: "Ipul",
      email: "ipul@gmail.com",
      password: "$2a$10$hArZ4asLLuOtlqKG.0grkuCJq72rSf24MTV5IysBHv6P.k7boG9V.",
      updatedAt: "2020-03-02T09:49:06.087Z",
      createdAt: "2020-03-02T09:49:06.087Z"
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : [
        'name is required',
        'email is required',
        'format email is wrong',
        'Email must be unique',
        'password is required',
        'Minimal 8 character'
      ]
    }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

    