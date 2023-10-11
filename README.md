# task-manager-api
This is a full featured Task Management REST API back-end built with Expressjs and MongoDB. Features include:

- Pagination and filtering of server responses to avoid slow page load times.
- Full CRUD features for User and Task instances.
- Hash encryption of passwords and access management with JWT tokens.
- Restricted user access to CRUD operations based on JWT tokens.

# api endpoints

| methods | endpoints                          | access  | description                              |
| ------- | ---------------------------------- | ------- | ---------------------------------------- |
| POST    | /user/register                     | Public  | Register                                 |
| POST    | /user/login                        | Public  | Login                                    |
| GET     | /user/me                           | Private | User Profile                             |
| PATCH   | /user/me                           | Private | Update User Profile                      |
| DELETE  | /user/me                           | Private | Delete User                              |
| GET     | /task                              | Private | View All Tasks                           |
| POST    | /task                              | Private | Create a Task                            |
| GET     | /task/taskID                       | Private | View a Task                              |
| PATCH   | /task/taskID                       | Private | Update a Task                            |
| DELETE  | /task/taskID                       | Private | Delete a Task                            |

