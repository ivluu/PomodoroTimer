# Meeting Outline

## Review our work

- First let’s take some time to review what we all did over the last week. Some key details we should each include are:
- What you did
  - Present what you were able to work on! Feel free to share your screen and go into as much detail as you’d like.
  - Summary / Takeaways of your work
  - What you felt you did well / What you struggled with
  - Was this too much work? Not very much?
  - Whether you want to do the same type of thing going forward or try something else out
- We can contribute popcorn style

## Midweek check-in

- Was the check-in helpful for staying on task over the week?
- We can each go around and say what we’ve thought so far about the check-ins
- Unless we’re unhappy with how they’re going, we can continue with the once a week asynchronous standup meeting

## CI/CD Pipeline Intro

- We were able to get a pipeline set up with linting, Jest, JSDocs, and Pull Requests. Now, we will give a demo of how it works and what you need to know.
- Linting: This is basically a style guide for our code. You will see a recording of how well your code is styled after pushing. If you want to format your code before pushing, you can do so using npm (a javascript package manager) and using 3 commands
  - npx prettier -c . and npx prettier -w .
  - npx eslint .
  - npx stylelint \*\*.css
- Jest:
  - This is the testing framework we’ll be using. There’s a lot of different functionality you can use with it.
  - Generally, for each blank.js file you’ll create a corresponding blank.test.js file.
  - This file will contain the unit tests for each function. We have an example in the repo under source labeled temp.js and temp.test.js
  - One task we’ll all have over the coming week is to watch this tutorial or a different tutorial on Jest
    - https://www.youtube.com/watch?v=7r4xVDI2vho
  - We want to be able to create tests for our functions as we work, so that we aren’t scrambling to test everything and bug fix last minute
- JSDoc:
  - JSDoc is super easy to use. It is automatically integrated with VSCode.
  - Temp.js is again an example of how it works
  - The most important takeaway is the fact that you can type your variables with it, which can help with debugging and code completion in VSCode
  - You’ll use /\*_ to start the doc comment for each function and _/ to end it
  - VSCode will fill out the outline of the doc comment
  - It’ll include a description of the function as well as what it expects as the parameters and what will be returned
- Pull requests:
  - Need 2 approvals in order to be merged (Make sure one of them is Jamie or Dhanush)
  - Fix all merge conflicts by merging main into your branch
  - Name your branch “feature/[username]/[feature description]”
  - In description, provide what you did, how you tested it, and maybe screenshots
  - Show demo

## Finalize Design/Userflow

- The TA wants us to settle on a design, at least in terms of core features. So, let’s look at the designs we have come up with over the last week and decide what we want to include in our app.
- These features are the timer, task list, start and reset buttons, and settings button
- Which kind of display do we want for the timer? Task list? Buttons?
- We also need to define a user flow for our app.
  - How do we want a typical user to navigate through the app
- We need to decide how the task list will come into play.
  - Should it be editable during a pomo? (Same for other features)
  - How can we measure/display progress?
- We can remain flexible in terms of details of the design, such as colors, positions, styles, but from now, we will stick to these core features and main workflow for the app.

## Work over the next week

- You are free to do whatever kind of task you want, but you may find it easier to do your task if you choose something you’ve previously worked on.
- These tasks will be using our code review and designs. What others have already done
- Work breakdown:
  - Timer
    - Creating functions to control the timer (start, stop, reset, etc.)
    - Creating tests for those functions
    - Creating the HTML component for the timer
    - Have the lengths of the times for pomodoros and breaks be variable and editable through a function
    - Have the possibility of playing some sort of audio when the timer ends
    - Doing some styling using CSS
  - Task list logic
    - Similar to our latest lab, create template entries for the task list as well as the task list element itself
    - Program a function to add and remove tasks from the list
    - Program a function to clear the entire list
    - Make the names of the tasks editable
    - Make sure to write tests for the functions you design
  - Task list design
    - Play with CSS sheets and HTML to figure out how we can display the task list how we want as well as a variable number of tasks inside of it
    - Figure out how we might display icons on the tasks such as number of pomos and a remove icon
    - Figure out an element at the bottom of the list which can be used to add more tasks
  - Settings
    - Create a clickable settings icon that brings up a menu
    - Modal?
    - On the menu have:
      - A volume slider
      - An alarm sound select menu
      - Be able to change the lengths of the standard pomodoro and the break
      - Be able to change the number of pomos before a long break occurs
    - Break up the menu into different parts visually using some sort of spacing
    - Use HTML and CSS to make it look nice and have it be formatted logically
  - Main page
    - Create the overall HTML structure of the site without fleshing out any of the individual elements
    - Use CSS to lay things out in the correct positions
    - Work on the coloring and style of the page
    - Use visually appealing elements and shapes
    - Make sure to have a place for the timer, the task list, the settings menu and the other features we’re including
    - Make sure the layout smoothly works for different browser sizes
    - Make the layout work for mobile devices as well
    - HTML Grids and Flexboxes will be essential for this work
    - If you finish up early, try to include more complex features like the ability to change the color of the background based on a time variable

# Meeting Notes

## Attendance

- Took place at 4 PM on 02/14/21 through Zoom
- Brian told us ahead of time that he wouldn’t be able to make the meeting

## Review our work

- Jamie

  - Worked on setting up linting, Jest, and JSDocs
  - Encourages lots of testing to have a high test coverage
  - Gave a demo of how to use and understand these parts of the pipeline

- Ashley
  - https://github.com/ashk233/pomodoro-test
  - Followed Ivan’s design
  - Got the buttons to change color
  - DId the pomo tomatoes
  - Something different was didn’t use table for task list
  - Added text at top for the focus section
  - Used the grid for the task list
  - Didn’t have anything that was too hard
- Arela
  - https://github.com/arelae/testPomo
  - Also followed Ivan’s design
  - Got a settings menu
  - Couldn’t figure out how to change seconds, but could change minutes
  - Could add and take away a check
  - Different sound choices, volume slider
  - Didn’t get to login, but had issues making a modal for login section
  - Issues with timer not being set to correct numbers
  - Used flexbox for it all, but should work with grid more
  - A modal can be used for a settings menu
    - popup not right for a menu
  - Doesn’t fully understand modal, went off someone else’s code
  - Doesn’t seem too complicated
  - Used a lot of javascript
  - Got sound working right
  - Problem with the zeroes as well
    - Throws timer off
- Dhanush
  - Did a demonstration of the pull requests
  - Shared about how you would need two collaborators to merge your branch to main
  - Showed off the comments and how you can add details to them to explain what’s going on
  - Talked about the responsibilities of the reviewers to test the code they’re agreeing to
- Ivan
  - https://github.com/ivluu/pomotype
  - Ivan tried to mimic his visual prototype
  - Used grid system to get it all in the right spots
  - Focused purely on the visual aspect
  - Pretty spaghetti because done last minute
  - Used table for the task list
  - Some of the cells in the table have weird corners
  - Parent is a flexbox container
  - Just has grid within a grid on some of the
  - Grid was great for putting things into place
  - Easier to center grid using flexbox
  - Task list was most difficult part
- Haley
  - https://github.com/haleytran/pomodoro_prototype
  - Worked on CSS portion
  - Focused on lunar new year
  - Added boxes to the buttons just to highlight them
  - Had the start change color
  - Trouble with task list padding
  - Thinking about putting it in a table or using Grid
  - Hard time with CSS bleeding between elements
  - Some spacing is constant versus variable
  - Tried to do formatting based on what was in lab
- Jonathan
  - https://docs.google.com/document/d/1W9Rf4IqgVIFDzTJdmZtY56lZowGj8EV_OxOT25ROTXw/edit?usp=sharing
  - Went over brian and haley’s code
  - Tried to explain what they were doing
  - Two different ways of starting the timer
  - brian did a calculation using the math floor
  - Haley used date
  - Had different ways of changing the buttons
  - Brian had one function for the task list
  - Checking and deleting tasks he did using a parent node
  - Haley used variables to make the task list

# Features

- Login hard to do
- Later can add statistics through local storage, but not a core feature for us

## Work over the next week

- Timer
  - Arela
- Task list logic
  - Ashley and Ivan
- Task list design
  - Haley
- Settings
  - Jonathan
- Main page
  - Brian
