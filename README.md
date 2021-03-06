```
Lusha home assignment

Server based on boilerplate: express-api-boilerplate 
	'https://github.com/DanishSiddiq/express-api-boilerplate.git'
Client based on boilerplate: react-boilerplate  
	'https://github.com/viniarruda/react-boilerplate'

Server code at: https://github.com/RobotnickIsrael/interviewsServer (already contains a bundled client)
Client code at: https://github.com/RobotnickIsrael/interviews

Most of the work was to create a new development station on my new private laptop, on windows. 
(which includes selecting boilerplates for both server and client that will fit Lusha and other interviews)

Server boilerplate wasn't really necessary but at the end I decided to use it since it has login, routing,
testing and mongo already inside. (Might be needing these for other interviews).
I've added CORS support in order to connect to your dedesired API.
I've added STATIC support in order to host the client.
I've disabled mongo and autentication sice they are not needed for this task.
Added logic needed for task in the requested route.
I do not cache \ duplicate 'https://api.jonathanczyzyk.com/' since I don't know what are their copyrights.
It's possible to add pagination\endless scrolling by spliting the results and sending just the desired part,
But I didn't have the time to implament it.
There isn't much logic so I didn't see what I can actually test
Since it's only a short assignment I didn't take the API from process.env, but it should be done in production.

Client boilerplate was selected because it's already has REDUX, authentication, hooks, routing, testing
and themes which I might need to other assignments.
I also made a yellow template since that's more of Lusha's color, but it didn't look as nice so I left it out.
The work here was to change the logic to accept images instead of the original stuff,
change the CSS so it will reflect the minimum one picture maximum 3 pictures per row and display the metadata
as requested while hovering.
After that building the client and putting the build on the server static folder that I've created.
Assumption: Not IE, this client is built on the latest react hooks and FLEX in the css.
It won't work on super old browsers.

I wanted to write tests here as well, but the logic here is also too basic to actually do any unit testing.
End to end testing is out of the scope.

I didn't do the optional tasks since I don't have the time to do them.
To save the likes on the client seems not smart.
In order to save it on the server I need to activate the login and mongo, which I didn't have time for 
because of personal reasons.


To start:
git clone https://github.com/RobotnickIsrael/interviewsServer.git
cd interviewsServer/
yarn
yarn start
login to http://localhost:3130/ on your browser

*If you want to run on a different port, please update .config.json file 'NODE_PORT' to the port you want.
```

# express-api-boilerplate
Server setup with express framework basic features

**Description**
* Express framework based backend api application
* express-api-problem for error consistency across the application
* mongodb database
* rabbitMQ producer and consumer support - ~~Currently RabbitMQ connection method is commnented while setting up server in app.js~~
* rabbitMQ auto re-connectivity logic after RabbitMQ is down from application
* configurations are in .config.json and local configuration can be override in .config.override.json

#
**Install dependencies:**
* yarn install

#
**Build/Run application:**
* yarn start (for production environment) **/**
* yarn dev (for development environment)

#
**Application health status:**
* information about the application and its health status

**Get:**
```
http://localhost:3130/health
http://localhost:3130/keep-alive
http://localhost:3130/ping
http://localhost:3130/version
```
#
**Student Module:**

* **Post:**
```
http://localhost:3130/api/v1/student
```
**Body:**
######
```
{
	"firstName": "Danish",
	"lastName": "Siddiq",
	"registrationNumber": 1234567,
	"email": "danish.siddiq@email.com"
}
```

#
* **Get:**
```
http://localhost:3130/api/v1/student/:id
```

#
* **Put:**
```
http://localhost:3130/api/v1/student/:id?firstName=danish1&lastName=siddiq1
```

#
* **Delete:**
```
http://localhost:3130/api/v1/student/:id
```

#
**Improvements:**

Feel free to add further features into it

