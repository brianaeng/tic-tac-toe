# Tic-Tac-Toe
Bring an interactive Tic-Tac-Toe game to life! You'll start with a plain JavaScript program that can be played in the terminal. From there you'll extend the game logic into a full Backbone web application and connect it to a back-end API (which will be provided).

## Learning Goals
With this project you'll get exposure to the following skills:
- JavaScript unit testing with [Jasmine](https://jasmine.github.io/)
- Program/code design from scratch
- Writing an application with complex model logic
- Reworking existing code for a new environment (plain JS -> Backbone)
- Backbone API integration

### Baseline Setup
This project uses the same [Backbone scaffold](https://github.com/AdaGold/backbone-baseline) from the previous Backbone projects. For the first wave you will not need to use Backbone or jQuery at all, however it will be simpler to convert your code to Backbone later on with all of the scaffold in place.

#### Project Forks
Because the initial implementation of a Tic-Tac-Toe game involves more coding and testing than the later coversion to Backbone you will be working in pairs to complete portion of the project (wave one). One person in the pair should fork the main Ada repository and give collaborator access to their partner.

However for the later waves everyone will be working individually. To make this work, once we switch to wave two and beyond the partner who did _not_ fork from Ada should create their own fork _from their partner's fork_. This process works the same way as forking from Ada -- you open your pair partner's GitHub repo website and click the Fork button.

For the individual waves each person should still submit their Pull Requests to the original Ada repository.

#### Commands
Because this uses the scaffold you still need to run `npm install` after forking and cloning the repository. You do not need to run `npm start` until waves two and three, because until then your project code will not be a web application.

To run your tests you should use the command `npm test`.

#### Using the REPL
If you want to interact with your game in the terminal via a REPL, you'll need to do things in a specific way (due to the scaffold's use of webpack).

To access the REPL you should use the command `npm run repl` in your project directory. Once in the REPL, you'll need to use the following syntax to import your file (this example assumes it was named `src/game.js`):

```javascript
var Game = require('game').default;
var game = new Game();
```

NOTE: This only works if your `game.js` file has an `export default` line in it, which it should (it'll be necessary for the Backbone conversion).

## Requirements
This project is divided into three waves that will be completed over the next two weeks. The majority of the first week will be dedicated to wave one, with the second and third waves taking place the week after. You will work on wave one as a pair, and then complete waves two and three individually.

### Wave One
The primary learning goals in this wave are writing unit tests for JavaScript with Jasmine, and program/code design. What we mean by program design is that the specific approach to implementing your Tic-Tac-Toe game's logic will be up to you.

#### Program Design
The overarching goal with the program design requirement is for you to spend more time at the beginning of the project thinking about what functionality the application needs, how that can be split up into specific objects and functions, and what the inputs and outputs of those functions are.

This might seem like an unwarranted distraction from diving right into the code when you're under such time constraints. But a great deal of time can be saved by avoiding costly refactors if it turns out that your initial approach won't allow you to achieve certain requirements. The more complex the application's logic is, the more difficult and time-consuming it will be to rework that logic after it has been written.

#### User Stories
For this project you'll need to create your own users stories as a pair, based on your understanding of the Tic-Tac-Toe. For some examples on how user stories work, check out the [project requirements from bEtsy](https://github.com/AdaGold/betsy#user-stories).

#### Suggestions
- Some of your stories will likely map 1-to-1 to individual functions, while others might describe certain aspects of how a single function should behave.
- Because the code you're writing for wave one is the "business logic" of a Tic-Tac-Toe game, the human users of your application will not be interacting with it directly. Instead, the "users" you're writing stories for will be other code in your project -- Jasmine tests or Backbone Views.
- For the first wave you should implement the Tic-Tac-Toe game with the "object-oriented" style used for the [Scrabble](https://github.com/AdaGold/js-scrabble) project.
- Any constructor functions you create should not take arguments. This is only to minimize the work needed to later convert your code into a Backbone Model.

#### Testing Requirements
You should strive to follow the BDD approach when building this application. Whenever you decide that a new function is necessary to implement one or another feature, you should begin by writing tests for that function.

- Every function in your application should have at least two tests
- All tests should pass
- We don't have any code coverage tool setup for this project, but if you have every function tested then it should be essentially 100%

### Wave Two:
In this wave, we will design the framework of our Backbone application. Then, using this framework we create for ourselves, we will begin by implementing the front-end of our Tic-Tac-Toe game using Backbone Views.

#### Scope
We will not be completing the entire implementation of the Tic-Tac-Toe game in this wave. These are the requirements for what you should complete in this wave:

1. Complete the _design_ (on paper, whiteboard and/or Trello) for **all** components in your Backbone game implementation  
1. Create "stub" files and folders for all of these components in your application  
1. Design the **user interface** for your Tic-Tac-Toe game (on paper, whiteboard and/or Trello)  
1. Implement the user interface for your game in your application, using templates, "regular" HTML and CSS  
1. Implement the framework for handling the **DOM Events** that your front-end will interact with. Note: By "framework" here, we mean determine what those DOM Events are and creating function "stubs" that will handle the actions that correspond with these events in the next wave.  

Note: Don't start on the JS object to Model conversion until Wave three!

#### Testing Requirements
No additional requirements for this wave

### Wave Three:
In this wave we will be taking the code we wrote in Wave One for the Tic-Tac-Toe game using plain JavaScript and converting this into Backbone Models. We will integrate these models with the rest of the Backbone application we created in Wave Two.

### Converting to Backbone Model
More details forthcoming

### Wave Four:
In this wave you'll connect the Backbone web application you created in the previous wave to an existing Rails API that has standard RESTful CRUD routes.

- Read the documentation for the [Tic-Tac-Toe API](https://github.com/Ada-c6/tic-tac-toe-api)
