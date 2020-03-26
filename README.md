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

          {
            "id": 3,
            "title": "Learning Auth and OAuth",
            "description": "Self Exploring Course Material Second Phase",
            "status": false,
            "due_date": "2020-03-25T00:00:00.000Z",
            "updatedAt": "2020-03-02T12:32:56.211Z",
            "createdAt": "2020-03-02T12:32:56.211Z"
          }

* **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:**

    ```

    ```

OR

- **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```

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

        [
          {
            "id": 1,
            "title": "Learning Fundamental Javascript",
            "description": "Reminder Self-Pace Learning",
            "status": false,
            "due_date": "2020-03-25T00:00:00.000Z",
            "createdAt": "2020-03-02T12:07:21.788Z",
            "updatedAt": "2020-03-02T12:07:21.788Z"
          },
          {
            "id": 2,
            "title": "Learning Rest Api",
            "description": "Course Material for Second Phase",
            "status": false,
            "due_date": "2020-03-25T00:00:00.000Z",
            "createdAt": "2020-03-02T12:07:21.788Z",
            "updatedAt": "2020-03-02T12:07:21.788Z"
          }
        ]

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```

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

        {
          "id": 1,
          "title": "Learning Fundamental Javascript",
          "description": "Reminder Self-Pace Learning",
          "status": false,
          "due_date": "2020-03-25T00:00:00.000Z",
          "createdAt": "2020-03-02T12:07:21.788Z",
          "updatedAt": "2020-03-02T12:07:21.788Z"
        }

* **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**

        {
          "err": "Todo not found"
        }

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

  ```javascript
  {
      title: string,
      description: string,
      status: boolean,
      due_date: date
  }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

        {
            "id": 1,
            "title": "Learning Social Login for Fancy Todo",
            "description": "Self-pace Course Material Second Phase",
            "status": false,
            "due_date": "2020-04-01T00:00:00.000Z",
            "createdAt": "2020-03-02T12:07:21.788Z",
            "updatedAt": "2020-03-02T14:05:45.116Z"
        }

* **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:**

    ```

    ```

OR

- **Code:** 404 NOT FOUND <br />
  **Content:**

      {
        "err": "Todo not found"
      }

OR

- **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```

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

        {
          "id": 2,
          "title": "Learning Rest Api",
          "description": "Course Material for Second Phase",
          "status": false,
          "due_date": "2020-03-25T00:00:00.000Z",
          "createdAt": "2020-03-02T12:07:21.788Z",
          "updatedAt": "2020-03-02T12:07:21.788Z"
        }

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**

        {
          "err": "Todo not found"
        }

    OR

  - **Code:** 500 INVALID SERVER ERROR <br />
    **Content:**

    ```

    ```
