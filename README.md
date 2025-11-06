# Webapp

il tema sarà un'app di film in cui si potranno lascioare recensioni pubbliche

## Backend API server

Todos:
- [x] create db diagramma E-R
- [x] create db on Workbench
- [] create express server

### Create Express Server

**deps**
- express
- mysql2

**todos:**
- [x] create a basic express server with an initial / endpoint
- [x] create an env file to store credentials
- [x] add gitignore
- [x] update the package.json scripts section to use --watch --env-file
- [x] create postman collection and test the server
- [] create db connection in database/connections.js
- [] create an index route to show a list of books from the db
- [] create an show route to show the single book (with reviews attached)
- [] create an express Router for the /api/books and api/books/:id
- [] create a controller
- [] create server errror middleware and not found

## FrontEnd