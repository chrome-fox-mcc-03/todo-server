## todo-server
Postman Documentation : https://documenter.getpostman.com/view/10570615/SzKbKukw

**Show Todos**
----
  Returns json data about users.

* **URL**

  /todos

* **Method:**

  `GET`

* **Headers:**

  `access_token`
  
*  **URL Params**

   **Required:**
 

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
   `[
    {
        "id": 3,
        "Title": "mandi",
        "Description": "habis bangun tidur ya mandi",
        "Status": false,
        "Due_Date": "2020-03-15T00:00:00.000Z",
        "createdAt": "2020-03-03T11:58:39.884Z",
        "updatedAt": "2020-03-03T11:58:39.884Z",
        "UserId": null
    }
    ]`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{"msg": "Internal Server Error"}`


=========================================================================================================================
**Add Todos**
----
  Returns json data about a single Todos.

* **URL**

  /todos/:id

* **Method:**

  `POST`

* **Headers:**

  `access_token`
  
*  **URL Params**
    id: Integer
   **Required:**
 

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `{
    "id": 4,
    "Description": "habis bangun tidur ya mand",
    "Status": false,
    "Due_Date": "2020-03-15T00:00:00.000Z",
    "Title": "Pakai Baju",
    "updatedAt": "2020-03-03T12:03:41.052Z",
    "createdAt": "2020-03-03T12:03:41.052Z",
    "UserId": null
    }`
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:** `{"msg": "Please Fill In Correctly"}`

  ==============================================================

**Update Todos**
----
  Returns json data about Updated Todos.

* **URL**

  /todos/:id

* **Method:**

  `PUT`

* **Headers:**

  `access_token`
  
*  **URL Params**
    id: Integer
   **Required:**
 

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
   `[
    1,
    [
        {
            "id": 4,
            "Title": "makan",
            "Description": "langsung makan skrg",
            "Status": true,
            "Due_Date": "2020-03-04T00:00:00.000Z",
            "createdAt": "2020-03-03T12:03:41.052Z",
            "updatedAt": "2020-03-03T12:27:18.739Z",
            "UserId": null
        }
    ]
  ]`
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:** `{
    "msg": "Please Fill In Correctly"
    }`

=============================================================

**Delete Todos**
----
  Returns json data about Todos.

* **URL**

  /todos

* **Method:**

  `DELETE`

* **Headers:**

  `access_token`
  
*  **URL Params**

   **Required:**
 

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
   `{
    "id": 4,
    "Title": "hehehe",
    "Description": "langsung makan skrg",
    "Status": true,
    "Due_Date": "2020-03-04T00:00:00.000Z",
    "createdAt": "2020-03-03T12:03:41.052Z",
    "updatedAt": "2020-03-03T12:27:18.739Z",
    "UserId": null
}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error<br />
    **Content:** `{
    "msg": "Internal Server Error"
}`

=======================================================
**Register**
----
  Returns json data about users.

* **URL**

  /users/register

* **Method:**

  `POST`

* **Headers:**

  ``
  
*  **URL Params**

   **Required:**
 

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
{
    "id": 35,
    "Email": "testing123@gmail.com"
}
 
* **Error Response:**

  * **Code:** 500 Internal Server Error<br />
    **Content:** `{
    "msg": "Internal Server Error"
}`

=======================================================
**login**
----
  Returns json data about users.

* **URL**

  /users/login

* **Method:**

  `POST`

* **Headers:**

  ``
  
*  **URL Params**

   **Required:**
 

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
{
    "id": 35,
    "Email": "testing123@gmail.com"
}
 
* **Error Response:**

  * **Code:** 500 Internal Server Error<br />
    **Content:** `{
    "msg": "Internal Server Error"
}`

=======================================================
**login**
----
  Returns json data about users.

* **URL**

  /users/googlelogin

* **Method:**

  `POST`

* **Headers:**

  ``
  
*  **URL Params**

   **Required:**
 

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
{
    "id": 35,
    "Email": "testing123@gmail.com"
}
 
* **Error Response:**

  * **Code:** 500 Internal Server Error<br />
    **Content:** `{
    "msg": "Internal Server Error"
}`