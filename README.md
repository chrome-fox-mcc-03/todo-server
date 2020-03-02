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
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
