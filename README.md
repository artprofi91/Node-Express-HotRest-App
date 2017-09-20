# Node-Express-HotRest-App

I created an Express based web application for handling reservation requests. My application made up of two parts:
1. A front-end set of HTML/CSS/JS pages for entering and viewing data.
2. A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.
I used:
* Servers;
* Routing;
* APIs;
* AJAX (GET and POST Requests).

## How app works

You can make the reservation request and it will be captured and listed on the site. Depending on whether or not it was one of the first five requests, it will be added to the reservation list - otherwise, it will be put on the waitlist.

Click [here](https://art-hr-app.herokuapp.com/) to see app live.

![1](https://user-images.githubusercontent.com/28790452/30666172-15c2c620-9e19-11e7-9e95-d7a2cf093c2d.gif)

Page for creating reservations.

![2](https://user-images.githubusercontent.com/28790452/30666174-15cad86a-9e19-11e7-9e1c-3dfa2ca05e6a.gif)

Page for viewing reservations.

![3](https://user-images.githubusercontent.com/28790452/30666173-15c45db4-9e19-11e7-8c21-cf98320b638d.gif)

Pages for viewing JSONs of the current reservations and waitlisted parties.

![4](https://user-images.githubusercontent.com/28790452/30666171-15c08f5e-9e19-11e7-8b42-03691dfed2f3.gif)

## Project Installation

There are two methods to download the repository.

#### Method I: Familiar with Git?

Clone this repository, install dependencies, then run the project with the following:

```
> git clone git@github.com:artprofi91/Node-Express-HotRest-App.git
> cd Node-Express-HotRest-App
> npm install
```

#### Not Familiar with Git?

Click [here](https://github.com/artprofi91/Node-Express-HotRest-App) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory and:

```
> npm install
```