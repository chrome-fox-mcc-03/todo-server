# Todo Server

## **Show all Todos**

----

Return array of all Todos

* **URL**

  `/todos`

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   `headers: TOKEN`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```json
    [ 
      { 
      id: 1, title: "Selesaikan release 1",
      description: "Selesaikan routes and endpoint di macmini",
      status: "true",
      due_date:"2020-03-03T00:00:00.000Z"
    }, 
    
      {
      id: 2, title: "Selesaikan challenge day 1",  
      description: "Selesaikan rest api day 1",
      status: "true",
      due_date:"2020-03-03T00:00:00.000Z" 
      } 
    ]
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`


----

## **Find Todo by ID**

Return object of one todo

* **URL**

  `/todos/:id`

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   `id=[integer]`

* **Data Params**

  `None`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
  ```
    {
      id: 1,
      title: "Selesaikan release 1",
      description: "Selesaikan routes and endpoint di macmini",
      status: "true", 
      due_date:"2020-03-03T00:00:00.000Z"
    }
  ```
  
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Todo not found, check your Id!" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
<br /><br />

----

## **Create new Todo**

Create new object of Todo

* **URL**

  `/todos`

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   `None`

* **Data Params**

  * Request Header
  
    ```
      "Content-Type": "application/json"
    ```

  * Request body:
    ```
      title: "Selesaikan release 1",
      description: "Selesaikan routes and endpoint di macmini",
      status: "true", 
      due_date:"2020-03-03T00:00:00.000Z"
    ```

* **Success Response:**

  * **Code:** 201<br />
    **Content:** 
    ```
    {
      id: 1,
      title: "Selesaikan release 1",
      description: "Selesaikan routes and endpoint di macmini",
      status: "true", 
      due_date:"2020-03-03T00:00:00.000Z"
    }
      
    ```

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Title cannot be empty!" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Cannot backdate, check your input date!" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
<br /><br />

----

## **Update Todo**

Update existing Todo

* **URL**

  `/todos/:id`

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**

   `id=[integer]`

* **Data Params**

  * Request Header
  
    ```
      "Content-Type": "application/json"
    ```

  * Request body:
    ```
      title: "Selesaikan release 1",
      description: "Selesaikan routes and endpoint di macmini",
      status: "true", 
      due_date:"2020-03-03T00:00:00.000Z"
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      id: 1,
      title: "Selesaikan release 1",
      description: "Selesaikan routes and endpoint di macmini",
      status: "true", 
      due_date:"2020-03-03T00:00:00.000Z"
    }
    ```
    

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Title cannot be empty!" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Cannot backdate, check your input date!" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Todo not found, check your Id!" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
<br /><br />

----

## **Delete Todo**

Delete existing Todo on database

* **URL**

  `/todos/:id`

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

   `id=[integer]`

* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{message : "Successfully delete todo *id*" }`
    

* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Todo not found, check your Id!" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`

<br /><br />

----

## **Login**

Login into website

* **URL**

  `/login`

* **Method**
  
  `POST`

* **Data Params**

  **Required:**

  ```
  email: mail@mail.com
  password: <yourpasswordhere>
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token : <token>, email: <youremail> }`
    

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "email / password invalid" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`

<br /><br />

----

## Register

Register into website

* **URL**

  `/register`

* **Method**
  
  `POST

* **Data Params**

  **Required:**

  ```
  email: <your-email>
  password: <your-password>
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ token : <token>, email: <your-email> }`
    

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Email has been registered" }`

  OR

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Email cannot be empty!" }`

  OR

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Please input with valid email" }`

  OR

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Password cannot be empty!" }`

  OR

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Password at lease 5 characters" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

<br /><br />