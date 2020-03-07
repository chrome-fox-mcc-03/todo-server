# Todo Server

Base url: <http://localhost:3000>

## **Create Todo**

  Returns json data when create todo

- **Headers**

  Authorization: `<access_token>`

-   **URL**

    /todo

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `title=[string]`\
      `description=[string]`\
      `due_date=[date]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
        "status": false,
        "id": 47,
        "title": "Deploy FancyTodo",
        "description": "Deploy FancyTodo to Heroku",
        "due_date": "2021-03-03T17:00:00.000Z",
        "userId": 4,
        "updatedAt": "2020-03-07T10:07:26.207Z",
        "createdAt": "2020-03-07T10:07:26.207Z",
        "projectId": null
        }
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
          "message": "Title cannot be empty\nValidation error: Title cannot be empty"
        }
        ```
    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**
        ```json
        {
          "message": "Internal Server Error",
          "error": ""
        }
        ```

## **Show Todos**

  Returns json data for all todo.

- **Headers**

    Authorization: `<access_token>`

-   **URL**

    /todo

-   **Method:**

    `GET`

-   **URL Params**

    None

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        [
          {
            "id": 46,
            "title": "Test add dari client",
            "description": "Complete FancyTodo",
            "status": true,
            "due_date": "2020-03-07T00:00:00.000Z",
            "userId": 4,
            "projectId": null,
            "createdAt": "2020-03-07T07:55:49.724Z",
            "updatedAt": "2020-03-07T08:12:08.382Z"
          },
          {
            "id": 43,
            "title": "Tes kirm email saat buat todo",
            "description": "Mudah2an sukses",
            "status": true,
            "due_date": "2020-03-09T00:00:00.000Z",
            "userId": 4,
            "projectId": null,
            "createdAt": "2020-03-07T07:20:32.563Z",
            "updatedAt": "2020-03-07T08:12:12.938Z"
          },
          {
            "id": 47,
            "title": "Deploy FancyTodo",
            "description": "Deploy FancyTodo to Heroku",
            "status": false,
            "due_date": "2021-03-03T17:00:00.000Z",
            "userId": 4,
            "projectId": null,
            "createdAt": "2020-03-07T10:07:26.207Z",
            "updatedAt": "2020-03-07T10:07:26.207Z"
          }
        ]
        ```
    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
          "message": "Internal Server Error",
          "error": ""
        }
        ```

## **Get Todo By Id**

  Returns json data with one todo

- **Headers**

    Authorization: `<access_token>`

-   **URL**

    /todo/:id

-   **Method:**

    `GET`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

     None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
          "id": 46,
          "title": "Test deploy client",
          "description": "Deploy client to firebase",
          "status": true,
          "due_date": "2020-03-07T00:00:00.000Z",
          "userId": 4,
          "projectId": null,
          "createdAt": "2020-03-07T07:55:49.724Z",
          "updatedAt": "2020-03-07T08:12:08.382Z"
        }
        ```

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
       {
          "message": "Todo not found"
        }
        ```
    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
          "message": "Internal Server Error",
          "error": ""
        }
        ```

    -   **Code:** 401 UNAUHTORIZED <br />
        **Content:**

        ```json
        {
          "message": "You are not authorized"
        }
        ```
## **Update Todo**

  Returns json data when update todo by id

- **Headers**

    Authorization: `<access_token>`

-   **URL**

    /todo/:id

-   **Method:**

    `PUT`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

    `title=[string]`\
    `description=[string]`\
    `due_date=[date]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
          "payload": {
            "id": 46,
            "title": "Todo updated",
            "description": "description",
            "due_date": "2020-05-05T00:00:00.000Z"
          },
          "message": "Success updating todo 46"
        }
        ```

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
          "message": "Todo not found"
        }
        ```

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
          "message": "Title cannot be empty\nValidation error: Title cannot be empty"
        }
        ```

    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
          "message": "Internal Server Error",
          "error": ""
        }
        ```
    -   **Code:** 401 UNAUHTORIZED <br />
        **Content:**

        ```json
        {
          "message": "You are not authorized"
        }
        ```




## **Delete Todo**

  Returns json data when delete todo by id

- **Headers**

    Authorization: `<access_token>`

-   **URL**

    /todo/:id

-   **Method:**

    `DELETE`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

     None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
          "message": "Success deleted task 47"
        }
        ```

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
          "message": "Todo not found"
        }
        ```
    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
          "message": "Internal Server Error"
        }
        ```

    -   **Code:** 401 UNAUHTORIZED <br />
        **Content:**

        ```json
        {
          "message": "You are not authorized"
        }
        ```

## **Register user**

  Returns json data when user register

-   **URL**

    /register

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `email=[string]`\
      `password=[string]`

-   **Success Response:**

    -   **Code:** 201 <br />
        **Content:**
        ```json
        {
          "id": 24,
          "email": "user.admin@gmail.com"
        }
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
          "message": "Email format is wrong\nValidation error: Email format is wrong"
        }
        ```

## **Login**

  Returns token when user login

-   **URL**

    /login

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `email=[string]`\
      `password=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.          eyJpZCI6MTQsImVtYWlsIjoiaGFuc2luQGdtYWlsLmNvbSIsImlhdCI6MTU4MDgwOTk2NH0.54RxdGe1bFzqffwQAxpPowrtKZHyOKU4gZs75mIimyw"
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
          "message": "Username or password is invalid"
        }
        ```

## **Update Todo Status**

  Returns json data when update todo status by id

- **Headers**

    Authorization: `<access_token>`

-   **URL**

    /todo/:id/status

-   **Method:**

    `PATCH`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

    `status=[boolean]`\

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
       {
          "payload": {
            "status": false
          },
          "message": "Success updating todo 43"
        }
        ```

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
          "message": "Todo not found"
        }
        ```

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
          "message": "Status cannot be empty"
        }
        ```

    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
          "message": "Internal Server Error",
          "error": ""
        }
        ```
    -   **Code:** 401 UNAUHTORIZED <br />
        **Content:**

        ```json
        {
          "message": "You are not authorized"
        }
        ```
