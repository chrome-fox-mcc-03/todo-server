# todo-server

**1. POST**

* **URL**

    _/todos_

* **Method :**

    `POST`

* **Success Response :**

* **Code:** 201 <br />
    **Content :** `{ id : 1 , title : "Mengerjakan tugas" ,description : "menyelesaikan tugas projek mingguan", status : false, due_date : "2020-03-09T17:00:00.000Z", createdAt : "2020-03-02T07:41:24.141Z", updatedAt : "2020-03-02T07:41:24.141Z" }`

* **Error Response :**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : ""}`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "" }`


**2. GET**

* **URL**

    _/todos_

* **Method :**

    `GET`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `{ id : 1 , title : "Mengerjakan tugas" , description : "menyelesaikan tugas projek mingguan" , status : false , due_date : "2020-03-09T17:00:00.000Z" , createdAt : "2020-03-02T07:41:24.141Z" , updatedAt : "2020-03-02T07:41:24.141Z"
  }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "" }`


**3. GET-id**

* **URL**

    _/todos/:id_

* **Method :**

    `GET`

* **URL Params**

  **Required :**

    `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content :** `{id : 2 , title : "menonton film" , description : "menonton film baru di bioskop" , status : false, due_date : "2020-03-14T17:00:00.000Z" , createdAt : "2020-03-02T07:43:28.388Z" , updatedAt : "2020-03-02T08:13:56.829Z"
}`

* **Error Response:**

    * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : ""}`


**4. PUT**

* **URL**

    _/todos/:id_

* **Method :**

    `PUT`

* **URL Params**

  **Required :**

    `id=[integer]`

* **Success Response :**

  * **Code:** 200 <br />
    **Content:** `{
  msg : "Todo updated.",
  data : [
    1,
    [{
        id : 4 , title : "membaca novel" , description : "membaca novel doraemon" , status : false , due_date : "2020-03-16T17:00:00.000Z" , createdAt : "2020-03-02T08:33:59.822Z" , updatedAt : "2020-03-02T09:44:11.248Z"
      }]]}`

* **Error Response :**

    * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : ""}`

        OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "" }`

**5. DELETE**

* **URL**

    _/todos/:id_

* **Method :**

    `DELETE`

* **URL Params**

  **Required :**

    `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ msg : "Todo deleted." , data": { id : 7 , title : "berenang", description : "berenang di hari minggu", status : false , due_date : "2020-03-21T17:00:00.000Z" , createdAt : "2020-03-02T08:46:41.256Z" , updatdAt : "2020-03-02T08:46:41.256Z"
  }
}`

* **Error Response :**

    * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : ""}`

        OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "" }`


