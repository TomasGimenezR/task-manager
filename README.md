# Ensolvers Exercise - Task-Manager

This is an assessment given by Ensolvers. The exercise can be found below

## Getting Started

The following are the instructions to download and install the project in your local machine


### Prerequisites

Firstly, you should make sure that Node.js is installed and up to date, you can verify this by running the following command:

```
npm -v
```

In order to connect to the database, you should add the specification file to the config folder, this folder is currently empty, you will have to add the file yourself.


### Installation

In order to install all necessary packages and dependencies, you need to use npm. If an error occurs, delete the package package-lock.json and run the command again.

```
npm i
```

Then you have to run the following command on the project's directory.

```
npm run start
```
The application will inform the console that it has successfully connected to MongoDB and what port it is listening to.

The app requires the config folder to run, which includes the MongoDB URL to have access to it. In order to get the config folder, make sure to contact Tomas Gimenez Rioja (tomasgimenezr@gmail.com)



## Built With

* [Express](https://www.npmjs.com/package/express) - Node.js Framework
* [MongoDB](https://www.mongodb.com/cloud/atlas) - NoSQL Database motor
* [jQuery](https://jquery.com/) - JQuery

## Versioning

[GitHub](http://github.com/) is used for version controlling.. 

## Author

* **Tomas Gimenez Rioja** - *Author* - [TomasGimenezR](https://github.com/TomasGimenezR)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


##Endpoints documentation
You can use the following endpoints and verbs

GET 	/auth 		will show you the login page
POST 	/auth 		will login you into the system 
GET 	/		will show you the index page 
POST	/task		will create a new task
GET	/task/:id	will get all tasks in a folder
PATH	/task/:id	will update a task description
DELETE	/task		will delete a task
POST 	/complete-task	will complete a task if incomplete or incomplete a task if completed
POST	/folder		will create a new folder
DELETE	/folder		will delete a folder and all tasks inside it
POST	/moveToFolder	will move a task to a folder

##Demo

Here's an example of usage
