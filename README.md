# todo-server

## **Create a new Todo**

Create a new todo instance and save it in the database.

- **URL**

  /todos

- **Method:**

  `POST`

- **URL Params**

  `none`

- **Data Params**

  **Required:**

  `title=[string]`

  `description=[string]`

  `status=[boolean]`

  `due_date=[date], must be later than now.`

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```javascript
    {
    "id": 6,
    "title": "Duel the kid in the suburbs",
    "description": "Remember to bring The Exodia deck",
    "status": false,
    "due_date": "2020-04-21T00:00:00.000Z",
    "updatedAt": "2020-03-02T15:35:00.678Z",
    "createdAt": "2020-03-02T15:35:00.678Z"
    }
    ```

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**
    ```javascript
    {
    "error": "Due date must be later than now"
    }
    ```

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    {
    "error": "Null value cannot be processed"
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
        id: 1,
        title: "Walk dog to school",
        description: "Remember to bring rope",
        status: false,
        due_date: "2020-03-07T00:00:00.000Z",
        createdAt: "2020-03-02T15:29:18.634Z",
        updatedAt: "2020-03-02T15:29:18.634Z"
      },
      {
        id: 2,
        title: "Feed fish",
        description: "The fish only eats vegans food",
        status: true,
        due_date: "2020-03-12T00:00:00.000Z",
        createdAt: "2020-03-02T15:29:18.634Z",
        updatedAt: "2020-03-02T15:29:18.634Z"
      },
      {
        id: 3,
        title: "Drink water",
        description: "Remember to also remind your hydrobuddy",
        status: false,
        due_date: "2020-03-17T00:00:00.000Z",
        createdAt: "2020-03-02T15:29:18.634Z",
        updatedAt: "2020-03-02T15:29:18.634Z"
      }
    ];
    ```

## **Get a Todo by Id**

Return a Todo that matched with the Id.

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
    "id": 2,
    "title": "Feed fish",
    "description": "The fish only eats vegans food",
    "status": true,
    "due_date": "2020-03-12T00:00:00.000Z",
    "createdAt": "2020-03-02T15:29:18.634Z",
    "updatedAt": "2020-03-02T15:29:18.634Z"
    }
    ```

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**
    ```javascript
    {
    "error": "error not found"
    }
    ```

## **Update a Todo by Id**

Edit an existing Todo and save it in the database.

- **URL**

  /todos/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `req.params.id`

- **Data Params**

  **Optional**

  `title=[string]`

  `description=[string]`

  `status=[boolean]`

  `due_date=[date], must be later than now.`

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

  - **Code:** 404 NOT FOUND <br />
    **Content:**

    ```javascript
    {
    "error": "error not found"
    }
    ```

    OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    {
    "error": "Null value cannot be processed"
    }
    ```

## **Delete a Todo by Id**

Drop a Todo from the database.

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
    [
      {
        id: 2,
        title: "Feed fish",
        description: "The fish only eats vegans food",
        status: true,
        due_date: "2020-03-12T00:00:00.000Z",
        createdAt: "2020-03-02T15:29:18.634Z",
        updatedAt: "2020-03-02T15:29:18.634Z"
      }
    ];
    ```

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**

    ```javascript
    {
    "error": "error not found"
    }
    ```
