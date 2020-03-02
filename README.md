# todo-server

### Create TODO ###

*  **URL**

   `/todos`

*  **Method:**

   `POST`

*  **Data Params**

   **Required**:
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
