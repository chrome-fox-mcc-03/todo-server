# todo-server

**Sign Up**
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

**Sign In**
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
      message: "success login as <username>"
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
    **Content:** `{ message: "Invalid Date" }`

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
          <list todo>
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

**Find One todo**
----
  
* **URL**

  `http://localhost:3000/todo/:id`

* **Method:**

  `GET`
  
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
    **Content:** `{ data: <data by id> }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Wheather Api**
----
  
* **URL**

  `http://localhost:3000/api/weather?city=`

* **Method:**

  `GET`
  
*  **URL Params**

    **Required:**
 
   `city=[string]`

* **Data Params**

    None

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data: <data weather> }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`