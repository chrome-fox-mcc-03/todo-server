# Fancy Todo - Server

## **Create Todo**

Create todo based on client request and insert to database

- **URL**

  /todos

- **Method:**

  `POST`

- **Headers**

- **URL Params**

* **Data Params**

```javascript
{
    title: string,
    description: string,
    status: boolean,
    due_date: date
}
```

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**

    <!-- Need to change the content of error based on real code -->

    ```json
    {
        "id": 2,
        "title" : ,
        "description" : ,
        "status": ,
        "due_date": ,
        "createdAt": ,
        "updatedAt":
         }
    ```

* **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:**

    <!-- Error Message will be update after real code -->

    ```javascript
    ```

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    <!-- Error Message will be update after real code -->

    ```javascript
    ```

* **Sample Call:**

  ```javascript
  ```

## **Show All Todos**

Return all todos in JSON data based on client request.

- **URL**

  /todos

- **Method:**

  `GET`

- **Headers**

- **URL Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

     <!-- Content will be update after real code -->

    ```json
    {
        "id": 2,
        "title" : "Learning API Documentation",
        "description" : ,
        "status": ,
        "due_date": ,
        "createdAt": ,
        "updatedAt":
         }
    ```

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

     <!-- Error Message will be update after real code -->

    ```javascript
    ```

## **Show Todo by ID**

Return json single todo based on client request

- **URL**

  /todos/:id

- **Method:**

  `GET`

- **Headers**

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

     <!-- Content / Error Message will be update after real code -->

    ```json

    ```

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**

    <!-- Content / Error Message will be update after real code -->

    ```javascript
    ```

## **Update Todo**

Update json data based on client request and return to new data

- **URL**

  /todos/:id

- **Method:**

  `PUT`

- **Headers**

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    <!-- Content / Error Message will be update after real code -->

    ```json

    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:**

     <!-- Content / Error Message will be update after real code -->

     <!-- Validation Error -->

    ```javascript
    ```

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:**

     <!-- Content / Error Message will be update after real code -->

    ```javascript
    ```

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

     <!-- Content / Error Message will be update after real code -->

    ```javascript
    ```

## **Delete Todo**

Return deleting a single json data

- **URL**

  /todos

- **Method:**

  `POST`

- **Headers**

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

     <!-- Content / Error Message will be update after real code -->

    ```json

    ```

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**

       <!-- Content / Error Message will be update after real code -->

    ```javascript
    ```

    OR

  - **Code:** 500 INVALID SERVER ERROR <br />
    **Content:**

    <!-- Content / Error Message will be update after real code -->

    ```javascript
    ```
