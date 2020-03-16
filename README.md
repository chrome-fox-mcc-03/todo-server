**TODO SERVER**
----

**Create TODO**
  
  ADD TODO to the list TODOs and RETURN JSON Data of Created TODO

* **URL**

  ```
  /todos
  ```
* **Method:**

  `POST`
   
* **Data Params**
    **Request Header**<br>
    ```
      Content-Type: "application/json"
    ```

    **Request Body**<br>
    **Required:**
 
   ```
    title=[string]
    description=[string]
    status=[boolean]
    due_date=[date]
   ```
   

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 1, title : 'Buy a Laptop', description: 'Soon', status: false, due_date: 2020/03/01}`
 
* **Error Response:**

  * **Code:** 400  <br />
    **Content:** `{ error : "Field must not null" }`


**View All TODO**

  RETURN JSON Data of all TODOs

* **URL**

  ```
  /todos
  ```

* **Method:**

  ```
  GET
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ id : 1, title : 'Buy a Laptop', description: 'Soon', status: false, due_date: 2020/03/01}, { id : 2, title : 'Buy a Laptop', description: 'Soon', status: false, due_date: 2020/03/01}]`
 
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `{ error : "Internal Server Error" }`

**Find By Id TODO**

  RETURN JSON Data single Todo with specific Id

* **URL**

  ```
  /todos/:id
  ```
* **URL Params**

    **Required:**
   ```
   id=[integer]
   ```

* **Method:**

  ```
  GET
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 1, title : 'Buy a Laptop', description: 'Soon', status: false, due_date: 2020/03/01}`
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "Todo Not Found" }`
  or
  * **Code:** 500  <br />
    **Content:** `{ error : "Internal Server Error" }`
  

**Update TODO**

  Update TODO with Specifies Id and RETURN JSON Data Updated TODO

* **URL**

  ```
  /todos/:id
  ```

* **URL Params**

    **Required:**
   ```
   id=[integer]
   ```

* **Method:**

  ```
  PUT
  ```
   
* **Data Params**

  **Request Header**

    ```
    Content-Type: "application/json"
    ```

    **Request Body**<br>
    **Required:**

    ```
    title=[string]
    description=[string]
    status=[boolean]
    due_date=[date]
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 1, title : 'Buy a Laptop', description: 'Soon', status: false, due_date: 2020/03/01}`
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "Todo Not Found" }`
  OR
  * **Code:** 500  <br />
    **Content:** `{ error : "Internal Server Error" }`

**Delete TODO**

  DELETE TODO with Specifies Id and RETURN SUCCESS Message

* **URL**

  ```
  /todos/:id
  ```

* **URL Params**

    **Required:**
   ```
   id=[integer]
   ```

* **Method:**

  ```
  DELETE
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ Success: SUCCESS Delete TODO }`
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "Todo Not Found" }`

**Create USER**
  
  REGISTER USER TO DATABASE

* **URL**

  ```
  /signup
  ```
* **Method:**

  `POST`
   
* **Data Params**
    **Request Header**<br>
    ```
      Content-Type: "application/json"
    ```

    **Request Body**<br>
    **Required:**
 
   ```
    email=[string]
    password=[string]
   ```
   

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 1, email : 'email@gmail.com', password: 'hashedPasswordHere'}`
 
* **Error Response:**

  * **Code:** 400  <br />
    **Content:** `{ error : "Field must not null" }`

**Login USER**
  
  Login User

* **URL**

  ```
  /signin
  ```
* **Method:**

  `POST`
   
* **Data Params**
    **Request Header**<br>
    ```
      Content-Type: "application/json"
    ```

    **Request Body**<br>
    **Required:**
 
   ```
    email=[string]
    password=[string]
   ```
   

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ (Jason Web Token Here) }`
 
* **Error Response:**

  * **Code:** 400  <br />
    **Content:** `{ error : "Field must not null" }`

  * **Code:** 401  <br />
    **Content:** `{ error : "Password or Email Invalid" }`

  
