# todo-server
## Routes:

#### /**todos** 

**GET /todos**

Request header:

```
{ 
"token": userToken
}
```

Request body:

```
-none-
```

Response:

```
[/** Contents of your to-do database here*/]
// Will be ordered by createdAt key, descending.

```

**POST /todos**

Request header:

```
{ 
"Content-Type": "application/json",
"token": userToken
}
```

Request body:

```
{
	"title": // The title of your to-do in string,
	"description": // Some descriptions in string,
	"status": //Is it done? In boolean,
	"due_date": //In string, format is YYYY-MM-DD
}
```

Response:

```
{
	//Should be what you put inside the body, plus these keys:
	"id": //Its id, should be the latest,
	"createdAt": //Date
	"updatedAt": //Date, should have similar value to createdAt
}
```

**GET /todos/:id**

Request header:

```
{ 
"token": userToken
}
```

Request parameters:

```
:id => the id of to-do item you want to display
```

Response:

```
{
	// Object to-do where the id is equal to the id you requested
}
```

**PUT /todos/:id**

Request header:

```
{ 
"Content-Type": "application/json",
"token": userToken
}
```

Request parameters:

```
:id => the id of to-do item you want to update
```

Request body:

```
{
	"title": // The title of your (updated) to-do in string,
	"description": // Some descriptions in string,
	"status": //Is it done? In boolean,
	"due_date": //In string, format is YYYY-MM-DD
}
```

Response:

```
{
	//Should be what you put inside the body, plus these keys:
	"id": //Its id, should be the latest,
	"createdAt": //Date
	"updatedAt": //Date, should be the date when you requested the PUT method.
}
```

**DELETE /todos/:id**

Request header:

```
{ 
"token": userToken
}
```

Request parameters:

```
:id => the id of to-do item you want to delete
```

Response:

```
{
	// Object to-do where the id is equal to the id you requested to delete
}
```

#### /users

##### POST /users/register

Request header:

```
-none-
```

Request body: 

```
{
	"email": // insert valid email here,
	"password": //password, must be at least 3 letters
}
```

Response:

```
{
	token: //your access token
}
```

##### POST /users/login

Request header:

```
-none-
```

Request body:

```
{
	"email": // insert valid existing email here,
	"password": //password, must match database password
}
```

Response:

```
{
	token: //your access token
}
```

##### POST  /users/googleSignIn

Request header:

```
{
	"token": //google token of your google account
}
```

Response:

```
{
	"googleSignIn": true, //Just something to make our job easier
	"token": //your access token
}
```

