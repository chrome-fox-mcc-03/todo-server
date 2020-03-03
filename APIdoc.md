**GROUP's TODO**
---

**Base URL**

http://localhost:3000

---

**Users**
---

***login***
---  
  Returns token and username in json with status code 200.

* **URL**

  /users

* **Method:**

  `POST`

* **Data Params**

  `user=[string]` <br>
  `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token, username : ... }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Wrong username / email / password"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/users",
      data: {
        user: ..., //can be username or email
        password: ...
      }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***register***
---  
  Returns a message with status code 201.

* **URL**

  /users/register

* **Method:**

  `POST`
  

* **Data Params**

  `username=[string]` <br>
  `email=[string]` <br>
  `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message : 'Register successful' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Username cannot be empty, Email cannot be empty, Password cannot be empty"] }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Wrong email format"] }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Password length must more than three characters"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/users",
      method: 'POST',
      data: {
        username: ...,
        email: ...,
        password: ...
      }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

**Todo**
---

***findAll***
---  
  Returns all todo belong to a user with status code 200.

* **URL**

  /todos

* **Method:**

  `GET`

* **headers:**

  **Required:**

  `token`

* **Data Params**
  
  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ todos }`
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

**Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/todos",
      method: 'GET'
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .fail(err => {
        ...
      })
  ```

---

***create***
---  
  Returns a message of success with status code 201.

* **URL**

  /todos/create

* **Method:**

  `POST`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**
  
  `title=[string]` <br>
  `description=[string]` <br>
  `status=[boolean]` <br>
  `due_date=[date]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: 'Create todo successful' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Title cannot be empty"] }`

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/todos",
      method: 'POST',
      data: {
        title: ...,
        description: ...,
        status: ...,
        due_date: ...
      },
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***findByPk***
---  
  Return one todo belong to a user with status code 200.

* **URL**

  /todos/:id

* **Method:**

  `GET`

* **URL Params:**

  `id=[integer]`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**
  
  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ todo }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:**`{ errors : ["Please login first"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/todos/1",
      method: 'GET',
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***edit***
---  
  Returns a message of success with status code 200.

* **URL**

  /todos/:id/edit

* **Method:**

  `PUT`

* **URL Params:**

  `id=[integer]`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**

  `title=[string]` <br>
  `description=[string]` <br>
  `status=[boolean]` <br>
  `due_date=[date]`
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Update todo successful' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Username cannot be empty, Email cannot be empty, Password cannot be empty"] }`

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/users",
      method: 'PUT',
      data: {
        title: ...,
        description: ...,
        status: ...,
        due_date: ...
      },
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***status***
---  
  For updating status. Returns a message of success with status code 200.

* **URL**

  /todos/:id/status

* **Method:**

  `PATCH`

* **URL Params:**

  `id=[integer]`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**

  `status=[boolean]`
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'update status successful' }`
 
* **Error Response:**

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/todos/1/status",
      method: 'PATCH',
      data: {
        title: ...,
        description: ...,
        status: ...,
        due_date: ...
      },
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***delete***
---  
  Returns a message of success with status code 200.

* **URL**

  /todos/:id/delete

* **Method:**

  `DELETE`

* **URL Params:**

  `id=[integer]`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Delete todo successful' }`
 
* **Error Response:**

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/todos/1",
      method: 'DELETE',
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .fail(err => {
        ...
      })
  ```

---

**Group**
---

***findAllGroups***
---
  Returns all groups that joined by the user. Status code 200

* **URL**

  /groups

* **Method:**

  `GET` 

* **Headers:**

  `token`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ groups }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Group name cannot be empty"] }`

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/create",
      method: 'POST',
      data: {
        username: ...,
        email: ...,
        password: ...
      }
    })
      .done(({ data }) => {
        ...
      })
      .fail(err => {
        ...
      })
  ```
---

***createGroup***
---  
  Returns a message of success with status code 201.

* **URL**

  /groups/create

* **Method:**

  `POST` 

* **Data Params**

  `name=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: 'Create group success' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Group name cannot be empty"] }`

     OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/eate",
      method: 'POST',
      data: {
        username: ...,
        email: ...,
        password: ...
      }
    })
      .done(({ data }) => {
        ...
      })
      .fail(err => {
        ...
      })
  ```
---

***invite***
---  
  Returns a message of success with status code 201.

* **URL**

  /groups/:id/invite

* **Method:**

  `POST` 

* ***URL Params:***

  **required:**

  `id=[integer]`

* **Data Params**

  `userId=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ token, username : ... }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Group name cannot be empty"] }`

     OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/1/invite",
      method: 'POST',
      data: {
        username: ...,
        email: ...,
        password: ...
      }
    })
      .done(({ data }) => {
        ...
      })
      .fail(err => {
        ...
      })
  ```
---

***findAllGroupTodo***
---  
  Returns all todo belong to a group with status code 200.

* **URL**

  /groups/:id

* **Method:**

  `GET`

* **URL Params:**

  `id=[integer]`

* **headers:**

  **Required:**

  `token`

* **Data Params**
  
  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ todos }`
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

    OR
  
   * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["You are not a member of this group"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/1",
      method: 'GET',
      data: {
        title: ...,
        description: ...,
        status: ...,
        due_date: ...
      },
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

  ***createGroupTodo***
---  
  Returns a message of success with status code 201.

* **URL**

  /groups/:groupId/createtodo

* **Method:**

  `POST`

* **URL Params:**

  `groupId=[integer]`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**
  
  `title=[string]` <br>
  `description=[string]` <br>
  `status=[boolean]` <br>
  `due_date=[date]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: 'Create todo successful' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Title cannot be empty"] }`

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["You are not belong to this group"] }`

  * **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/1/createtodo",
      method: 'POST',
      data: {
        title: ...,
        description: ...,
        status: ...,
        due_date: ...
      },
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***findByPkGroup***
---  
  Return one todo belong to a group with status code 200.

* **URL**

  /groups/:id/:todoId

* **Method:**

  `GET`

* **URL Params:**

  `id=[integer]` <br>
  `todoId=[integer]` 

* **headers:**

  **Required:**
  
  `token`

* **Data Params**
  
  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ todo }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:**`{ errors : ["Please login first"] }`

  * **Code:** 401 UNATUHORIZED <br />
    **Content:**`{ errors : ["You are not belong to this group"] }`

  * **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/1/1",
      method: 'GET',
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***editGroupTodo***
---  
  Returns a message of success with status code 200.

* **URL**

  /groups/:id/:todoId/edit

* **Method:**

  `PUT`

* **URL Params:**

  `id=[integer]` <br>
  `todoId=[integer]`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**

  `title=[string]` <br>
  `description=[string]` <br>
  `status=[boolean]` <br>
  `due_date=[date]`
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Update todo successful' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : ["Username cannot be empty, Email cannot be empty, Password cannot be empty"] }`

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

  OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["You are not belong to this group"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/1/1/edit",
      method: 'GET',
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***statusGroupTodo***
---  
  For updating status. Returns a message of success with status code 200.

* **URL**

  /groups/:id/:todoId/status

* **Method:**

  `PATCH`

* **URL Params:**

  `id=[integer]` <br>
  `todoId=[integer]`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**

  `status=[boolean]`
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'update status successful' }`
 
* **Error Response:**

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["You are not belong to this group"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/1/1/status",
      method: 'GET',
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

---

***deleteGroupTodo***
---  
  Returns a message of success with status code 200.

* **URL**

  /groups/:id/:todoId/delete

* **Method:**

  `DELETE`

* **URL Params:**

  `id=[integer]` <br>
  `todoId=[integer]`

* **headers:**

  **Required:**
  
  `token`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Delete todo successful' }`
 
* **Error Response:**

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["Please login first"] }`

    OR

  * **Code:** 401 UNATUHORIZED <br />
    **Content:** `{ errors : ["You are not belong to this group"] }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/groups/1/1/delete",
      method: 'GET',
      headers: { token }
    })
      .done(({ data }) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
