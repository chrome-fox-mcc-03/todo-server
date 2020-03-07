# todo-server


**TODOS**

**1. POST**

* **URL**

    _/todos_

* **Method :**

    `POST`

* **Headers**

  **Required :**

    `token`

* **Success Response :**

* **Code:** 201 <br />
    **Content :** `{ id : 1 , title : "Mengerjakan tugas" ,description : "menyelesaikan tugas projek mingguan", status : false, due_date : "2020-03-09T17:00:00.000Z", createdAt : "2020-03-02T07:41:24.141Z", updatedAt : "2020-03-02T07:41:24.141Z" }`

* **Error Response :**

  * **Code:** 400 <br />
    **Content:** `{ errors: ["Title can't be empty",
    "Description can't be empty"
  ] }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**2. GET**

* **URL**

    _/todos_

* **Method :**

    `GET`

* **Headers**

  **Required :**

    `token`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `[
      { id : 1 , title : "Mengerjakan tugas" , description : "menyelesaikan tugas projek mingguan" , status : false , due_date : "2020-03-09T17:00:00.000Z" , createdAt : "2020-03-02T07:41:24.141Z" , updatedAt : "2020-03-02T07:41:24.141Z"},
      { id : 2 , title : "Menonton film" , description : "My Rainy Days kayaknya seru" , status : false , due_date : "2020-03-09T17:00:00.000Z" , createdAt : "2020-03-02T07:41:24.141Z" , updatedAt : "2020-03-02T07:41:24.141Z"
  }
  ]`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**3. GET-id**

* **URL**

    _/todos/:id_

* **Method :**

    `GET`

* **Headers**

  **Required :**

    `token`

* **URL Params**

  **Required :**

    `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content :** `{id : 2 , title : "menonton film" , description : "menonton film baru di bioskop" , status : false, due_date : "2020-03-14T17:00:00.000Z" , createdAt : "2020-03-02T07:43:28.388Z" , updatedAt : "2020-03-02T08:13:56.829Z"
}`

* **Error Response:**

 * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "Data not found" }`


**4. PUT**

* **URL**

    _/todos/:id_

* **Method :**

    `PUT`

* **Headers**

  **Required :**

    `token`

* **URL Params**

  **Required :**

    `id=[integer]`

* **Success Response :**

  * **Code:** 200 <br />
    **Content:** `{
  msg : "Todo updated.",
  data : {
        id : 4 , title : "membaca novel" , description : "membaca novel doraemon" , status : false , due_date : "2020-03-16T17:00:00.000Z" , createdAt : "2020-03-02T08:33:59.822Z" , updatedAt : "2020-03-02T09:44:11.248Z"
      }}`

* **Error Response :**

    * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Data not found"}`

        OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**5. DELETE**

* **URL**

    _/todos/:id_

* **Method :**

    `DELETE`

* **Headers**

  **Required :**

    `token`

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
    **Content:** `{ error : "Data not found"}`

        OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**USERS**

**REGISTER**

* **URL**

    _/users/register_

* **Method :**

    `POST`

* **Success Response :**

* **Code:** 201 <br />
    **Content :** `{
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImVtYWlsIjoic2lhcGFAZ21haWwuY29tIiwiaWF0IjoxNTgzNTg0Mjc4fQ.Xin8MjsiM5TiGEw6xu-1_VSMrPPCjc8OJmyemXNrAWA",
      "user": {
        "id": 35,
        "email": "siapa@gmail.com"
      }
    }`

* **Error Response :**

  * **Code:** 400 <br />
    **Content:** `{ errors: ["You must enter an valid email address!",
    "Email address already in use!",
    "Password must at least 6 characters"
  ] }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**LOGIN**

* **URL**

    _/users/login_

* **Method :**

    `POST`

* **Success Response :**

* **Code:** 200 <br />
    **Content :** `{
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImVtYWlsIjoic2lhcGFAZ21haWwuY29tIiwiaWF0IjoxNTgzNTg0Mjc4fQ.Xin8MjsiM5TiGEw6xu-1_VSMrPPCjc8OJmyemXNrAWA",
      "user": {
        "id": 35,
        "email": "siapa@gmail.com"
      }
    }`

* **Error Response :**

  * **Code:** 400 <br />
    **Content:** `{ error: "email/password wrong" }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**LOGIN/REGISTER WITH GOOGLE**

* **URL**

    _/users/googleLogin_

* **Method :**

    `POST`

* **Success Response :**

* **Code:** 200 <br />
    **Content :** `{
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImVtYWlsIjoic2lhcGFAZ21haWwuY29tIiwiaWF0IjoxNTgzNTg0Mjc4fQ.Xin8MjsiM5TiGEw6xu-1_VSMrPPCjc8OJmyemXNrAWA",
      "user": {
        "id": 35,
        "email": "siapaya@gmail.com"
      }
    }`

* **Error Response :**

  * **Code:** 400 <br />
    **Content:** `{ error: "Email alread registered" }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**MOVIE API**

* **URL**

    _/movies_

* **Method :**

    `GET`

* **Success Response :**

* **Code:** 200 <br />
    **Content :** `
     {
        "data": [
      {
        "popularity": 1539.786,
        "vote_count": 621,
        "video": false,
        "poster_path": "/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        "id": 475303,
        "adult": false,
        "backdrop_path": "/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg",
        "original_language": "en",
        "original_title": "A Rainy Day in New York",
        "genre_ids": [
          35,
          10749
        ],
        "title": "A Rainy Day in New York",
        "vote_average": 6.7,
        "overview": "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        "release_date": "2019-07-26"
      },
      {
        "popularity": 477.464,
        "vote_count": 54,
        "video": false,
        "poster_path": "/qZ1KAgfdeNbzrNYKW4BIRHdEBJ9.jpg",
        "id": 666750,
        "adult": false,
        "backdrop_path": "/6mKAKhj8POVGqV1GsroS5mGIUe9.jpg",
        "original_language": "en",
        "original_title": "Dragonheart: Vengeance",
        "genre_ids": [
          14
        ],
        "title": "Dragonheart: Vengeance",
        "vote_average": 6,
        "overview": "Lukas, a young farmer whose family is killed by savage raiders in the countryside, sets out on an epic quest for revenge, forming an unlikely trio with a majestic dragon and a swashbuckling, sword-fighting mercenary, Darius.",
        "release_date": "2020-02-04"
      }]
     }
    `

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

