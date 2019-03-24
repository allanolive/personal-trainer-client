# Kai Fitness Tracker Cliet

### [Kai Fitness Front End Deployed Site](https://allanolive.github.io/personal-trainer-client/)

### [Kai Fitness Back End Deployed Site](https://stormy-dawn-27557.herokuapp.com/)

#### [Kai Fitness Tracker Api Repository](https://github.com/allanolive/personal-trainer-api)

## App Description

 This application is being built in an attempt to facilitate my brothers online personal training business. As it stands right now, this appplication is able to track your daily inputs gathered from other sources such as the myfitness pal app for nutritional info, your digital scale for your body weight, and either a run tracker app or your gym equipment interface that will give you the estimated calories for that run or excercise.

 Once you log your daily input, you are able to modify it at any point in time as the information will be stored in the databse I created for this application. Logging out, changing passwords and logging back in are all available features at this point in time. Once you are logged in, you will have access to all your progresses and will be able to update, delete, and create new progresses at any point.

## Technologies Used

Front End| Back End
------------ | -------------
HTML / CSS | Ruby
JavasScript | Rails
Bootstrap | PostgreSQL
jQuery  |  Active Record
Git  |  Git
Github  |  Heroku
DOM  |  JSON
Curl  |  Curl

## Future Updates

My next iteration of this project will be to include the option of a trainer to have various clients and be able to view each of the clients inputs in order to give feedback and analize the continual progress of their clients.

I will also make changes to the interface so that a person can only input one progress daily and have access to the previous progess by clicking on a left or right arrow.

Eventually I would like to be able to connect to third party APIs so that the client no longer will have to input the information in two seperate places.

## Developmental Process

This project was a simple and straight forward case of using Rails magic in order to create a pretty complete back end template. Then using the usual HTML / CSS / JAVASCRIPT to obtain user data store it in my database and return them the appropriate data.

I started off by creating the API using rails. After generating my resources I tested all functionality using curl scripts. Once I had everything working i was onto the client side.

I started off by Creating a HTML file with all the form fields I deemed necessary. I added my Ajax requests and then the user interface code using plenty of jQuerry to facilitate things. I used handlebars to ease the manipulation of data into the DOM.

I lived by the console log as a debugger and to make sure I undestood everything that was going on in my application. I used many documentations to look up specific functionality and I did not hesitate to open up issue queues on github.

### Initial Project Wireframe

![](https://i.imgur.com/EPCE6yE.jpg)

### User stories

- as a user I want to be able to sign up, log in, change password, and sign out of the app

- as a user I want to be able to input my daily information

- as a user I want to have access to my previous progress and be able to update, delete, and create new ones at any time

- as a user I want to be able to cancel a update, and not be stuck in any view I can't get out of without refreshing the browser.
