# todo-server

**Register**
----
  
* **URL**

  `http://localhost:3000/register`

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

  * **Code:** 500 <br />
    **Content:** `{ message: "Internal Server Error" }`

**Login**
----
  
* **URL**

  `http://localhost:3000/login`

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
    **Content:** `{ message: "success login as <username>" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Invalid email / password" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ message: "Internal Server Error" }`

**Create todo**
----
  
* **URL**

  `http://localhost:3000`

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

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: "success add todo" }`
 
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

  * **Code:** 500 <br />
    **Content:** `{ message: "Internal Server Error" }`

**Find All todo**
----
  
* **URL**

  `http://localhost:3000`

* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      data: [
        {
          title: "puasa full gk bolong bolong",
          description: "puasa harus full jangan mampir ke warteg",
          due_date: "23 Mei 2020"
        }
      ]
    }
    ```

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message: "Internal Server Error" }`

**Update todo**
----
  
* **URL**

  `http://localhost:3000/:id`

* **Method:**

  `PUT`
  
*  **URL Params**

    **Required:**
 
   `id=[integer]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: "success update todo" }`
 
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

  * **Code:** 500 <br />
    **Content:** `{ message: "Internal Server Error" }`

**Delete todo**
----
  
* **URL**

  `http://localhost:3000/:id`

* **Method:**

  `DELETE`
  
*  **URL Params**

    **Required:**
 
   `id=[integer]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: "success delete todo" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message: "Internal Server Error" }`