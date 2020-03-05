# todo-server

**Register**
----
  
* **URL**

  `http://localhost:3000/signup`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
        username: "user",
        email: "user@mail.com",
        password: "12345"
    }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: "success register" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "password cannot less than 5 character" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "username cannot be empty" }`
  
  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "email cannot be empty" }`
  
  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "email must contain email format" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Login**
----
  
* **URL**

  `http://localhost:3000/signin`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
        email: "user@mail.com",
        password: "12345"
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      token: <token>,
      message: "success login as ${username}"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Invalid email / password" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Create todo**
----
  
* **URL**

  `http://localhost:3000/todo`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
        title: "puasa full gk bolong bolong",
        description: "puasa harus full jangan mampir ke warteg",
        due_date: "23 Mei 2020"
    }
  ```

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: "success create todo" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "title cannot be empty" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "description cannot be empty" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "due date cannot be empty" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Find All todo**
----
  
* **URL**

  `http://localhost:3000/todo`

* **Method:**

  `GET`
  
*  **URL Params**

    None

*  **URL headers**

    **Required:**

    `token=[string]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      data: "data": [
        {
            id: 5,
            title: "puasa full gk bolong bolong",
            description: "puasa harus full jangan mampir ke warteg",
            status: false,
            due_date: "2020-03-03T16:35:19.171Z",
            UserId: 5,
            GroupId: null,
            createdAt: "2020-03-03T16:35:19.171Z",
            updatedAt: "2020-03-03T16:35:19.171Z",
            User: {
                id: 5,
                username: "user",
                email: "user@mail.com",
                password: "$2a$10$xpb6EM68AqYdRAByKQ/cVeq4ritqH9EJIyNSxI52o0sIzklA9rY7q",
                createdAt: "2020-03-03T16:35:19.141Z",
                updatedAt: "2020-03-03T16:35:19.141Z"
            }
        }
      ]
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Update todo**
----
  
* **URL**

  `http://localhost:3000/todo/:id`

* **Method:**

  `PUT`
  
*  **URL Params**

    **Required:**
 
   `id=[integer]`

* **Data Params**

    **Required:**

  ```javascript
    {
        title: "puasa full gk bolong bolong",
        description: "puasa harus full jangan mampir ke warteg siang siang",
        due_date: "23 Mei 2020"
    }
  ```

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
    "data": [
      1,
      [
        {
          "id": 5,
          "title": "puasa full gk bolong bolong",
          "description": "puasa harus full jangan mampir ke warteg siang siang",
          "status": false,
          "due_date": "2020-03-03T16:35:19.171Z",
          "UserId": 5,
          "GroupId": null,
          "createdAt": "2020-03-03T16:35:19.171Z",
          "updatedAt": "2020-03-03T16:43:23.199Z"
        }
      ]
    ],
      "message": "success update Todo"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "title cannot be empty" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "description cannot be empty" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "due date cannot be empty" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Delete todo**
----
  
* **URL**

  `http://localhost:3000/todo/:id`

* **Method:**

  `DELETE`
  
*  **URL Params**

    **Required:**
 
   `id=[integer]`

* **Data Params**

    None

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: "success delete todo" }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`