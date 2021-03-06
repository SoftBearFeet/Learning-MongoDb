# Learning & Studying MongoDB with Stephen Grider
This is the third project for Stephen Grider's Udemy Course on: [*The Complete Developers Guide to MongoDb*](https://www.udemy.com/the-complete-developers-guide-to-mongodb/learn/v4/content). This project I put together what I've learned in the previous projects and further solidify my knowledge and understanding of MongoDb, MochaJS, & Mongoose.

### Installation
* Download or Clone the repo,
* Change Directoy to the project you want to use,
* Run `npm install` to install dependencies,
* Be sure that you have MongoDB installed & running,
* Run `npm start` to start the app,
* To run the test suite, run `npm test`.

### MongoDB
You need to verify that you have [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community) downloaded & installed. 

#### Muber
This app is a very simple clone of [Uber](https://www.uber.com/). Muber is a ride sharing app, that lets us find drivers who are near by that the user can hail for a ride.

###### Routes
Note that this app has several different routes to make request. Please pay special attention when making a *GET* request to `/api/drivers`. You will need to add a query with `lat` & `lng`. An example can be found in '/test/drivers_controllers_test.js' on line: #72 (`/api/drivers?lng=-80&lat=25`)