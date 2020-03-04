# todo-server

## **Register a New User**

Create a new user and save it in the database.

- **URL**

  /register

- **Method:**

  `POST`

- **URL Params**

  `none`

- **Data Params**

  **Required:**

  `email=[string], must be a valid email and unique`

  `password=[string], must be more than 6 characters`

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```javascript
    {
        "id": 2,
        "email": "fadhilah_gis@yahoo.co.id"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:**
    ```javascript
    {
        "error": {
            "status": 400,
            "msg": [
                "email cannot be an empty string",
                "email must be filled with a valid email"
            ]
        }
    }
    ```

  OR

  - **Code:** 400 BAD REQUEST <br />
    **Content:**

    ```javascript
    {
        "error": {
            "status": 400,
            "msg": "email has been used, please try using a new one"
        }
    }
    ```

## **Log In a User**

Log in a user and generate token if the process is successful.

- **URL**

  /login

- **Method:**

  `POST`

- **URL Params**

  `none`

- **Data Params**

  **Required:**

  `email=[string]`

  `password=[string]`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmYWRoaWxhaG1ldHJhQGdtYWlsLmNvbSIsImlhdCI6MTU4MzMyMDY4M30.RPTl1SxxTl733J4Esb7UwbNNQp4pA1PZlAUBGrDC-RI"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />

    **Content:**

    ```javascript
    {
        "error": {
            "status": 400,
            "msg": "email / password is wrong, please try again"
        }
    }
    ```

## **Create a new Todo**

Create a new todo instance and save it in the database. The value of UserId is determined from the token key in the header.

- **URL**

  /todos

- **Method:**

  `POST`

- **URL Params**

  `none`

- **Data Params**

  **Required:**

  `title=[string]`

  `description=[string], must be longer than 5 characters`

  `status=[boolean], default value is false`

  `due_date=[date], must be later than now, default value is one day after today`

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```javascript
    {
        "due_date": "2020-03-05T11:09:58.607Z",
        "id": 9,
        "title": "Buy  green pepper",
        "description": "Must be spicy",
        "status": false,
        "UserId": 1,
        "updatedAt": "2020-03-04T11:22:08.369Z",
        "createdAt": "2020-03-04T11:22:08.369Z"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:**
    ```javascript
    {
        "error": {
            "status": 400,
            "msg": [
                "title must be filled",
                "description must be filled with string",
                "todo's description must be longer than 5 characters"
            ]
        }
    }
    ```

## **Get all Todos**

Get all Todos in the database

- **URL**

  /todos

- **Method:**

  `GET`

- **URL Params**

  `none`

- **Data Params**

  `none`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```javascript
    [
      {
        id: 10,
        title: "Duel that smug kid downtown",
        description: "Bring the One Turn Kill deck",
        status: false,
        due_date: "2020-03-05T11:27:24.574Z",
        UserId: 1,
        createdAt: "2020-03-04T11:27:24.573Z",
        updatedAt: "2020-03-04T11:27:24.573Z"
      },
      {
        id: 11,
        title: "Confess to that one pretty girl in the cafeteria",
        description: "Leave the onion off the recipe",
        status: false,
        due_date: "2021-02-14T00:00:00.000Z",
        UserId: 1,
        createdAt: "2020-03-04T11:30:52.605Z",
        updatedAt: "2020-03-04T11:30:52.605Z"
      }
    ];
    ```

## **Get a Todo by Id**

Return a Todo that matched with the Id. This can only be done by the user that created that Todo.

- **URL**

  /todos/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `req.params.id`

- **Data Params**

  `none`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    {
        "id": 10,
        "title": "Duel that smug kid downtown",
        "description": "Bring the One Turn Kill deck",
        "status": false,
        "due_date": "2020-03-05T11:27:24.574Z",
        "UserId": 1,
        "createdAt": "2020-03-04T11:27:24.573Z",
        "updatedAt": "2020-03-04T11:27:24.573Z"
    }
    ```

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**

    ```javascript
    {
        "error": {
            "status": 404,
            "msg": "error not found"
        }
    }
    ```

    OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```javascript
    {
        "error": {
            "status": 401,
            "msg": "unauthorized, you don't have permission to access other people's data"
        }
    }
    ```

## **Update a Todo by Id**

Edit an existing Todo and save it in the database. This can only be done by the user that created that Todo.

- **URL**

  /todos/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `req.params.id`

- **Data Params**

  **Optional:**

  `title=[string]`

  `description=[string], must be longer than 5 characters`

  `status=[boolean], default value is false`

  `due_date=[date], must be later than now, default value is one day after today`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    [
      1,
      [
        {
          id: 6,
          title: "Duel the kid in the suburbs",
          description: "Fight him in the national competition",
          status: false,
          due_date: "2020-08-17T00:00:00.000Z",
          createdAt: "2020-03-02T15:35:00.678Z",
          updatedAt: "2020-03-02T16:03:08.773Z"
        }
      ]
    ];
    ```

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```javascript
    {
        "error": {
            "status": 401,
            "msg": "unauthorized, you don't have permission to access other people's data"
        }
    }
    ```

    OR

  - **Code:** 400 BAD REQUEST <br />
    **Content:**

    ```javascript
    {
        "error": {
            "status": 400,
            "msg": [
                "description must be filled with string",
                "todo's description must be longer than 5 characters"
            ]
        }
    }
    ```

    OR

  - **Code:** 404 NOT FOUND <br />
    **Content:**

    ```javascript
      {
          "error": {
              "status": 404,
              "msg": "error not found"
          }
      }
    ```

## **Delete a Todo by Id**

Drop a Todo from the database based on Id. This can only be done by the user that created that Todo.

- **URL**

  /todos/:id

- **Method:**

  `DELETE`

- **URL Params**

  **Required:**

  `req.params.id`

- **Data Params**

  `none`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    {
        "id": 11,
        "title": "Confess to that one pretty girl in the cafeteria",
        "description": "Leave the onion off the recipe",
        "status": false,
        "due_date": "2021-02-14T00:00:00.000Z",
        "UserId": 1,
        "createdAt": "2020-03-04T11:30:52.605Z",
        "updatedAt": "2020-03-04T11:30:52.605Z"
    }
    ```

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**

    ```javascript
      {
          "error": {
              "status": 404,
              "msg": "error not found"
          }
      }
    ```

    OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```javascript
    {
        "error": {
            "status": 401,
            "msg": "unauthorized, you don't have permission to access other people's data"
        }
    }
    ```
