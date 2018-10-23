# API Design with Node

* Instructor: Scott Moss

## What is Node js

* Platform built on Chrome's V8 engine that can be used out of the browser to build tooling and network based applications.
* HTTP in Node
  * Node comes with a built in module for creating network based apps.
  * Just a library, not a framework.
* Node Server Frameworks
  * Connect (baseline framework)
  * Express (based on connect)
  * Koa (from express creators)
  * Hapi
  * Sails (based on express)
  * So many more...
* Express features
  * Declarative routing
  * Exact, pattern, glob, parameter matching
  * Middleware
    * Functions to run serially on your requests
  * Powerful response options
    * From JSON to static files
    * Stream
    * Redirects
    * DB agnostic

## Setup Express

* http GET localhost:3000
* http POST localhost:3000

## Routing with Express

* Flexible pattern matching
* Handles parameters
* Multi router support
* Static & Dynamic configuration
* Support for all HTTP verbs
* Order based