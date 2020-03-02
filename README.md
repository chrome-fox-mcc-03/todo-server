**Create Todo**
----
  Create new to-do activity.

* **URL**

  /todos/

* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Data Params**
  **Required**
  - `title` : string
  - `description` : string
  - `status` :  string
  - `due_date` : date (YYYY-MM-DD)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**<br>
     `{
    "id": 6,
    "title": "halal bihalal",
    "description": "rangka hari raya",
    "status": "pending",
    "due_date": "2020-05-27T00:00:00.000Z",
    "updatedAt": "2020-03-02T10:10:40.754Z",
    "createdAt": "2020-03-02T10:10:40.754Z"
}`<br>
<br>
   **OR**
   <BR>
   `{
    "id": 12,
    "title": "nyebat",
    "description": "nyebat",
    "status": "pending",
    "due_date": "2020-08-07T17:00:00.000Z",
    "updatedAt": "2020-03-02T15:19:24.046Z",
    "createdAt": "2020-03-02T15:19:24.046Z"
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** <br>
    `{
    "error": {
        "name": "SequelizeValidationError",
        "errors": [
            {
                "message": "Title must be filled",
                "type": "Validation error",
                "path": "title",
                "value": "",
                "origin": "FUNCTION",
                "instance": {
                    "id": null,
                    "title": "",
                    "description": "",
                    "status": "pending",
                    "due_date": "2020-09-09T00:00:00.000Z",
                    "updatedAt": "2020-03-02T15:07:41.344Z",
                    "createdAt": "2020-03-02T15:07:41.344Z"
                },
                "validatorKey": "notNull",
                "validatorName": null,
                "validatorArgs": [],
                "original": {}
            }
        ]
    }
}`<br><br>
    **OR**
      <br>
      `{
        "err": {
          "name": "SequelizeValidationError",
          "errors": [
              {
                "message": "Due date must be today's date or later",
                "type": "Validation error",
                "path": "due_date",
                "value": "2020-01-31T00:00:00.000Z",
                "origin": "FUNCTION",
                "instance": {
                    "id": null,
                    "title": "ngopi",
                    "description": "rangka hari raya",
                    "status": "pending",
                    "due_date": "2020-01-31T00:00:00.000Z",
                    "updatedAt": "2020-03-02T11:02:41.224Z",
                    "createdAt": "2020-03-02T11:02:41.224Z"
                },
                "validatorKey": "beforeToday",
                "validatorName": null,
                "validatorArgs": [],
                "original": {}
              }
          ]
      },
      "message": "SERVER ERROR"
    }`

<br>
<hr>
<br>

**Read Todos**
----
  Returns a list of all to-dos

* **URL**

  /todos/

* **Method:**

  `GET`
  
*  **URL Params**
    None

* **Data Params**
   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    <br>
    `{
    "todos": [
        {
            "id": 3,
            "title": "beli baju",
            "description": "rangka hari raya",
            "status": "pending",
            "due_date": "2020-05-31T00:00:00.000Z",
            "createdAt": "2020-03-02T08:01:15.475Z",
            "updatedAt": "2020-03-02T08:01:15.475Z"
        },
        {
            "id": 5,
            "title": "ziarah",
            "description": "rangka hari raya",
            "status": "pending",
            "due_date": "2020-04-24T00:00:00.000Z",
            "createdAt": "2020-03-02T08:03:47.179Z",
            "updatedAt": "2020-03-02T08:03:47.179Z"
        },
        {
            "id": 6,
            "title": "halal bihalal",
            "description": "rangka hari raya",
            "status": "pending",
            "due_date": "2020-05-27T00:00:00.000Z",
            "createdAt": "2020-03-02T10:10:40.754Z",
            "updatedAt": "2020-03-02T10:10:40.754Z"
        }
    ],
    "message": "Here are the complete list"
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    <br>
    `{
    "err": {
        "name": "SequelizeDatabaseError",
        "parent": {
            "name": "error",
            "length": 167,
            "severity": "ERROR",
            "code": "42703",
            "position": "128",
            "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\parser\\parse_relation.c",
            "line": "3359",
            "routine": "errorMissingColumn",
            "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
        },
        "original": {
            "name": "error",
            "length": 167,
            "severity": "ERROR",
            "code": "42703",
            "position": "128",
            "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\parser\\parse_relation.c",
            "line": "3359",
            "routine": "errorMissingColumn",
            "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
        },
        "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
    },
    "message": {
        "name": "SequelizeDatabaseError",
        "parent": {
            "name": "error",
            "length": 167,
            "severity": "ERROR",
            "code": "42703",
            "position": "128",
            "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\parser\\parse_relation.c",
            "line": "3359",
            "routine": "errorMissingColumn",
            "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
        },
        "original": {
            "name": "error",
            "length": 167,
            "severity": "ERROR",
            "code": "42703",
            "position": "128",
            "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\parser\\parse_relation.c",
            "line": "3359",
            "routine": "errorMissingColumn",
            "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
        },
        "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
    }
}`

<br>
<hr>
<br>

**Read Todo By Id**
----
  Returns a to-do activity based on ID

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**
    `:id [integer]`

* **Data Params**
   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br>
    `{
    "todo": {
        "id": 3,
        "title": "beli baju",
        "description": "rangka hari raya",
        "status": "pending",
        "due_date": "2020-05-31T00:00:00.000Z",
        "createdAt": "2020-03-02T08:01:15.475Z",
        "updatedAt": "2020-03-02T08:01:15.475Z"
    },
    "message": "Entry found"
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** <br>
    `{
    "error": {
        "name": "SequelizeDatabaseError",
        "parent": {
            "name": "error",
            "length": 167,
            "severity": "ERROR",
            "code": "42703",
            "position": "128",
            "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\parser\\parse_relation.c",
            "line": "3359",
            "routine": "errorMissingColumn",
            "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
        },
        "original": {
            "name": "error",
            "length": 167,
            "severity": "ERROR",
            "code": "42703",
            "position": "128",
            "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\parser\\parse_relation.c",
            "line": "3359",
            "routine": "errorMissingColumn",
            "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
        },
        "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"id\" = NaN;"
    }
}`
<br><br>

    **OR**
    <br>
    `{
      "error": "Index not Found"
      }`

<br>
<hr>
<br>

**Update Todo**
----
  Update to-do entry by Id.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**
    `:id [integer]`

* **Data Params**
  **Required**
  - `title` : string
  - `description` : string
  - `status` :  string
  - `due_date` : date (YYYY-MM-DD)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br>
    `{
    "todo": [
        {
            "id": 3,
            "title": "bikin nastar",
            "description": "hari raya",
            "status": "pending",
            "due_date": "2020-05-01T00:00:00.000Z",
            "createdAt": "2020-03-02T08:01:15.475Z",
            "updatedAt": "2020-03-02T10:44:33.300Z"
        }
    ],
    "message": "Entry updated"
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{
    "err": {
        "name": "SequelizeValidationError",
        "errors": [
            {
                "message": "All entries must be filled",
                "type": "Validation error",
                "path": "isNotNull",
                "value": null,
                "origin": "FUNCTION",
                "instance": {
                    "id": null,
                    "title": "bikin nastar",
                    "description": "hari raya",
                    "status": "pending",
                    "due_date": "",
                    "updatedAt": "2020-03-02T10:46:46.489Z"
                },
                "validatorKey": "isNotNull",
                "validatorName": null,
                "validatorArgs": [],
                "original": {}
            }
        ]
    },
    "message": "UPDATE FAILED"
}`<br><br>

    **OR**<br>

    `{
    "error": {
        "name": "SequelizeValidationError",
        "errors": [
            {
                "message": "Due date must be today's date or later",
                "type": "Validation error",
                "path": "due_date",
                "value": "2020-01-19T00:00:00.000Z",
                "origin": "FUNCTION",
                "instance": {
                    "id": null,
                    "title": "bikin nastar",
                    "description": "hari raya",
                    "status": "pending",
                    "due_date": "2020-01-19T00:00:00.000Z",
                    "updatedAt": "2020-03-02T11:16:13.304Z"
                },
                "validatorKey": "beforeToday",
                "validatorName": null,
                "validatorArgs": [],
                "original": {}
            }
        ]
    }
}`<br><br>

    **OR**<br>
    `{
    "error": "Index not found"
    }`

<br>
<hr>
<br>

**Delete Todo**
----
  Delete to-do entry by Id.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**
    `:id [integer]`

* **Data Params**
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "todo": 1,
    "message": "Delete success for ID 3"
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** <br>
    `{
    "error": {
        "name": "SequelizeDatabaseError",
        "parent": {
            "name": "error",
            "length": 166,
            "severity": "ERROR",
            "code": "42703",
            "position": "34",
            "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\parser\\parse_relation.c",
            "line": "3359",
            "routine": "errorMissingColumn",
            "sql": "DELETE FROM \"Todos\" WHERE \"id\" = NaN"
        },
        "original": {
            "name": "error",
            "length": 166,
            "severity": "ERROR",
            "code": "42703",
            "position": "34",
            "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\parser\\parse_relation.c",
            "line": "3359",
            "routine": "errorMissingColumn",
            "sql": "DELETE FROM \"Todos\" WHERE \"id\" = NaN"
        },
        "sql": "DELETE FROM \"Todos\" WHERE \"id\" = NaN"
    }
}`
<br><br>
    **OR**<br>
    `{
      "error": "Index not found"
      }`

<br>
<hr>
<br>
