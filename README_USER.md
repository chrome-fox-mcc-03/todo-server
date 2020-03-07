# todo-server

SIGN UP
----
  Return generated token

* **URL**

  /users/signup

* **Method:**
  
  POST
  
*  **URL Params** 

   **Required:**
 
   email = [string],
  password = [string],

   **Optional:**
  
   none

* **Data Params**

  token = [string]

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** {
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyZGExQG1haWwuY29tIiwiaWQiOjEyLCJpYXQiOjE1ODMzMTE2MDZ9.t5qKOtXlnrfYQjovHZKRNkN8OtFWOARf2Mfoh18iXW0
}
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST<br />
    **Content:** `{ error : "someone has signed up using this email" }`
  

SIGN IN
----
  Return generated token

* **URL**

  /users/signin

* **Method:**
  
  GET
  
*  **URL Params** 

   **Required:**
 
  email = [string],
  password = [string],

   **Optional:**
  
   none

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** {
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyZGExQG1haWwuY29tIiwiaWQiOjEyLCJpYXQiOjE1ODMzMTE2MDZ9.t5qKOtXlnrfYQjovHZKRNkN8OtFWOARf2Mfoh18iXW0
}
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST<br />
    **Content:** `{ error : "wrong email/password" }`

GOOGLE SIGN IN
----
  Return generated token

* **URL**

  /users/googleSignIn

* **Method:**
  
  POST
  
*  **URL Params** 

   **Required:**
 
   id_token=[string]

   **Optional:**
  
   none

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** {
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyZGExQG1haWwuY29tIiwiaWQiOjEyLCJpYXQiOjE1ODMzMTE2MDZ9.t5qKOtXlnrfYQjovHZKRNkN8OtFWOARf2Mfoh18iXW0
}
 
* **Error Response:**

  * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "id not found" }`