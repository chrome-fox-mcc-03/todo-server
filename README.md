# todo-server

<details>
   <summary><strong>Create TODO</strong></summary>

*  **URL**

   `/todos`

*  **Method:**

   `POST`

*  **Data Params:**

   * Request Header:
     ```
       {
          "Content-Type": "application/json"
       }
     ```

   * Request Body (**Required**):
     ```
     title=[string]
     description=[string]
     status=[boolean]
     due_date=[date]
     ```
* **Success Response**

   Code: 200

   Content:
   ```
   {
     id : 1, 
     title : 'your title', 
     description: 'your description', 
     status: false, 
     due_date: 2020/03/01
   }
   ```
* **Error Response**

   Code: 500

   Content:
   ```
   {
     error: "error message"
   }
   ```
</details>

<details>
   <summary><strong>Find All TODO</strong></summary>

*  **URL**

   `/todos`

*  **Method:**

   `GET`
   
* **Success Response**

   Code: 200

   Content:
   ```
   {
     "Data": [
        {
           id : 1, 
           title : 'your title', 
           description: 'your description', 
           status: false, 
           due_date: 2020/03/01
        },
        ...
     ]
   }
   ```
* **Error Response**

   Code: 500
   
   Content:
   ```
   {
     error: "error message"
   }
   ```
</details>

<details>
  <summary><strong>Find TODO by Id</strong></summary>

*  **URL**

   `/todos/:id`

*  **Method:**

   `GET`

*  **URL Params**

   **Required:**

   `id:[integer]`
   
* **Success Response**

   Code: 200

   Content:
   ```
   {
     "Data":
        {
           id : 1, 
           title : 'your title', 
           description: 'your description', 
           status: false, 
           due_date: 2020/03/01
        }
   }
   ```
* **Error Response**

   Code: 500

   Content:
   ```
   {
     error: "error message"
   }
   ```
</details>

<details>
  <summary><strong>Update TODO by Id</strong></summary>

*  **URL**

   `/todos/:id`

*  **Method:**

   `PUT`

*  **URL Params**

   **Required:**

   `id:[integer]`

*  **Data Params:**

   * Request Header:
     ```
       {
          "Content-Type": "application/json"
       }
     ```

   * Request Body (**Required**):
     ```
     title=[string]
     description=[string]
     status=[boolean]
     due_date=[date]
     ```

* **Success Response**

   Code: 200

   Content:
   ```
   {
     "Data":
      {
         id : 1, 
         title : 'your title', 
         description: 'your description', 
         status: false, 
         due_date: 2020/03/01
      }
   }
   ```
* **Error Response**

   Code: 500

   Content:
   ```
   {
     error: "error message"
   }
   ```
</details>

<details>
  <summary><strong>Delete TODO by Id</strong></summary>

*  **URL**

   `/todos/:id`

*  **Method:**

   `DELETE`

*  **URL Params**

   **Required:**

   `id:[integer]`

* **Success Response**

   Code: 200

   Content:
   ```
   {
     "Data":
      {
         id : 1, 
         title : 'your title', 
         description: 'your description', 
         status: false, 
         due_date: 2020/03/01
      }
   }
   ```
* **Error Response**

   Code: 500

   Content:
   ```
   {
     error: "error message"
   }
   ```
</details>