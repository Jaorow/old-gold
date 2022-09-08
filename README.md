# MSA FrontEnd Project ! 

A front end website that compares an entered dates gold price (from 2019 onwawrds)...
Then the react app compares the prices and offers you the ability to enter how many ounces you baught on that date to show how much money you have made! 


This repo was created very late in the project as running ```npm audit fix --force``` will actually break everyting, you can find the now decrepid repo at [Jaorow/phase2Frontend](https://github.com/Jaorow/phase2Frontend)

## PROJECT DETAILS
### Start screen before any input is receved.
![Startup](img/startup.png)
### Page if gold price has risen since historical date.
![risen](img/pos.png)
### Page if gold price has dropped since historical date.
![fallen](img/neg.png)


# Phase Three

For Phase three I implemented five advanced fetures into my website


### UI
- [x] UI Scalability with window size
- [x]  Mobile first development (using media query breakpoints, etc)

These first two requirements were rather easy to implement as i have worked with html and css before so knew my way around UI Scalability and Mobile First Dev using Meda Querys. 

### UI Scalability
![scalability](img/scali.png)
### Media Querys
* The UI looked good on any ranges above 768px as is however when dropping below 768px ( large tablet size ) I changed the scaling percentage to fit the screen better, testing was made very easy with chromes build in screensize selector
![scalability](img/query.png)

### Animations
- [x] At least one fluid animation

I enjoyed making fluid animations with css Keyframes and animation methods so i made two animations inside my app

The first being a loading animation showen before the result is rendered

![loader_code](img/loader_code.png)
![loader_gif](img/loader.gif)

And the second is the search button bouncing on hover

![bounce_code](img/bounce_code.png)
![bounce_gif](img/bounce.gif)

### Testing
- [x] Comprehensive unit testing
see ```src/app.test.js``` for unit testing.
![testing](img/testing.png)
this task was much harder than the others as it was quite hard to find a tutorial showing how to test after an api call, testing the app before an api call was made was okay however simulating an api call and seeing the results proved more tricky 

### Front End logic
- [x] Demonstration of complex FE logic

asuming Front end logic is coding logic in your front end app i compleated this function by having a function that calculates the amount you have made of a set amount of gold
![price](img/function_price.png)



<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


# phase three

Welcome to Phase 3! Congratulations for making it so far. For Phase 3, the requirement is to implement some more advanced features that are a bit more involved or difficult to get working.

## Front End Requirements

To pass phase 3 for the front-end, you will need to have any __five__ of the following advanced features, or any __two__ of the extra for experts features.

## Advanced Features List

- [x] UI Scalability with window size
- [x]  Mobile first development (using media query breakpoints, etc)
* Storybook w/ both actions and interactions (play)
* Progressive Web App (PWA) functionality w/ clear use of the service worker
* API connection to your own API that is cloud hosted
- [x] Comprehensive unit testing
* OAuth2 with PKCE login w/ at least ONE third party provider
* Clear usage of Websockets
- [x] At least one fluid animation
* Redux state management
- [x] Demonstration of complex FE logic

## Expert Features

* A YAML CI/CD pipeline which builds and deploys a containerised application to either Azure or AWS, which is configured to use environment variables correctly.
* Usage of SSR / SSG with at least __three__ of the advanced features
* Usage of Terraform to structure and provision a cloud environment, which is incorporated into a CI/CD pipeline

## Example Repository

The following front-end code is meant to be a reference, as to how you could implement some of these advanced features. This assignment is going to be tough, and we're sure you're going to have a lot of questions. Please ask them over on the discord server, where we will respond ASAP!