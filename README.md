# todo-server
# Routes:

**GET /todos**

Request header:

```
-none-
```

Request body:

```
-none-
```

Response:

```
[/** Contents of your to-do database here*/]

```

**POST /todos**

Request header:

```
{ 
"Content-Type": "application/json"
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
-none-
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
"Content-Type": "application/json"
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
-none-
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