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
- We should all put our work in the specs/brainstorming folder on Github. If you designed something on figma, take a screenshot or convert it to a PDF.

## Write the Pitch

1. Problem - The raw idea, a use case, or something we’ve seen that motivates us to work on this
   - The best problem definition consists of a single specific story that shows why the status quo doesn’t work. This gives you a baseline to test fitness against. People will be able to weigh the solution against this specific problem—or other solutions if a debate ensues—and judge whether or not that story has a better outcome with the new solution swapped in.
   - Dhanush
   - Haley
2. Appetite - How much time we want to spend and how that constrains the solution
   - As we are constrained by the limits of this class, our appetite will follow the course of the class and be bounded at 10 weeks, of which we have already done 5.
   - 1 Slide - Jamie
3. Solution - The core elements we came up with, presented in a form that’s easy for people to immediately understand
   - The solution to the problem story. What are the essential elements to solving what issue someone was facing.
   - Arela
   - Brian
4. Rabbit holes - Details about the solution worth calling out to avoid problems
   - What do we expect to take a lot of time programming? What could we spend way too much time on?
   - Jamie
5. No-gos - Anything specifically excluded from the concept: functionality or use cases we intentionally aren’t covering to fit the appetite or make the problem tractable
   - Looks good to have no-gos. What aren’t we going to touch. What is out of scope for solving our problem?
   - Ivan
   - Ashley

## CI/CD Pipeline

- We technically have an assignment due on Tuesday. The goal of the assignment is to begin a Continuous Integration, Continuous Development pipeline. This pipeline would be a series of Github Actions which aim to accomplish the following:
  - linting and code style enforcement (may happen in pipeline and/or in editor)
  - code quality via tool (ex. Codeclimate, Codacy, etc.)
  - code quality via human review (ex. Pull Requests)
  - unit tests via automation (ex. Jest, Tape, Ava, Cypress, Mocha/Chai, etc.)\*
  - documentation generation via automation (ex. JSDocs)
- The TAs don’t seem certain about what this is really going to look like. I’m also personally unsure exactly what we’re looking to do with this. There isn’t technically anything to submit for Tuesday.
- However this assignment is going to be repeated and iterated on. We will receive two more assignments on it, and our final pipeline at the end of the quarter will be graded.
  - The professor wants us to get an early start on it so that we can actually make use of the pipeline we’ve built.
- Because of this we should have a pipeline task for this week, where one or more people figures out what options we have for adding functionality to our Github repo through Github Actions.
  - Because this assignment isn’t even checked for completeness on Tuesday, I propose that the task be completed throughout the course of the week, rather than rushing to get it done by Tuesday.
  - If no one else wants to Jamie would be happy to look into this pipeline stuff

## Midweek check-in

- It seems like the midweek check-in worked fairly well. I don’t think it was too much of a stress for anyone. The professor and TAs are still pushing us to be more Agile in our project, so I think we have two options.
  1. We can start to check-in through slack even more regularly. This could be every other day or so.
  2. We can hold a midweek standup meeting, where we spend 15-20 minutes going around and talking about what we’ve been doing and issues we’ve been running into.
- Let’s vote on what we want to do.

## Work over the next week

- As of now we’ve just completed our project pitch. We’ve also made a lot of progress in our exploratory programming, visual design, system diagramming, and research.
- With all of this work done, I believe we’re ready to start moving into our first increment of this app.
- We have a good sense of what this app is going to look like, how the user is going to interact with it, and what tools we’ll be using to build it.
- The professor suggested in class using a UI first approach to a project. Building what the user uses first, then working backwards to fill in the guts. This approach is supposed to be the best way to end up with a product that is user centered in its design.
- I’m going to propose that we make the HTML and CSS, before we make the javascript concrete.
- Self assigning tasks
  - Creating an HTML backbone for the project, then adding some rough CSS styling.
    - This would be looking at all the components we want to add and creating an element for each one, then roughly placing them on the right locations on the page.
  - Alternatively, create some rough HTML and then try to style it using CSS into something that looks roughly like what we want.
    - This would be less focused on making the HTML representative of everything we want included, and more focused on looking visually appealing.
  - CI/CD Pipeline
    - Looking into what Pipeline options there are, and figuring out which ones to include on our Github repo.
  - Code review, and condensing
    - We have created multiple pieces of code with our exploratory coding. We want to condense this code down and figure out which of the methods we’ve explored that we’ll use in our final product
    - This role would be evaluating what worked well and what didn’t work in our exploratory programming, identifying issues people ran into, and potential solutions.
    - The end product of this role should be some documentation about how we’ll go about programming the back end, as well as having condensed the different sources of code, into a single location in the github repo for us to review later.

# Meeting Notes

## Attendance

- Took place at 10 AM on 02/07/21 through Zoom
- Jonathan told us earlier that he wouldn’t be able to make it
- Everyone else attended

## Review our work

- Jamie
  - Saved under specs/brainstorming/jamie-tasklist.pdf, specs/brainstorming/jamie-timer.pdf
- Ashley
  - Saved under specs/brainstorming/ashley-diagram.drawio.png
  - System Diagram
  - Check off completed tasks
  - Four pomo sessions
  - Struggled with figuring out which type of diagram to use. Some were very complicated.
- Brian - https://github.com/lin-ister/test.io - Got most of everything to work - Worked a bit on the task list and the sound design - Did a bit of everything - Wants to work on the pomodoro intervals - More advanced things will have to start earlier
  -Arela - https://github.com/arelae/audioTest - Worked on the audio track - Got it to start when it gets to 0 - Will stop when you press stop - Not too much time, after learning more about Javascript
- Dhanush
  - https://www.figma.com/proto/kMMTpQKblxVTIOI6ilegm3/Pomodoro-Design?node-id=1%3A2&scaling=min-zoom
  - Worked on visual design as well
  - Focused more on colors and simplicity
  - Tried a lighter design and a darker design
  - Had a circle that slowly changed color
  - Had a more striking, dark design
- Ivan
  - https://www.figma.com/proto/lalXbGZD5tEYPuAyHfFfAM/Pomodoro?node-id=136%3A10&scaling=min-zoom
  - Visual design
  - Changed colors around
  - Made it darker, thought people wouldn’t like the light background
  - Blues are easier on the eyes, nice color to look at
  - Edit the task list items by clicking on them
- Haley
  - https://github.com/haleytran/pomodoro_prototype/blob/main/index.html
  - Worked on the task list
  - Had issues with spacing
  - Maybe change from <p> tag to <table>
  - Pretty easy to figure out once figured out the create element function
- Jonathan
  - Saved under specs/brainstorming/jonathan-diagram.png

## Midweek check-in

- Rather than have more check-ins where a lot of them wouldn't be saying anything, we'll be trying to get a more informative asynochronous midweek standup meeting
- We decided on this over check-ins every other day, because we believed that most of the check-ins would have nothing substantial to report

## Work over the next week

- HTML
  - Arela
  - Brian
- CSS
  - Haley
  - Ivan
  - Ashley
- CI/CD
  - Jamie
  - Dhanush
- Code Review
  - Dhanush
  - Jamie
  - Jonathan?
