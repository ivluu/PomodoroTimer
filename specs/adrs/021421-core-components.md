# Core Components will be Timer, Task List, Settings Menu, Sound Notifications

- Status: [accepted]
- Deciders: All except Brian
- Date: 2021-2-14

## Context and Problem Statement

We need to decide what we core features are essential to our app and which we won't pursue unless we have extra time.

## Decision Drivers

- First concern is how much time we have remaining in the project
- Second concern is what is essential to a good Pomodoro App

## Considered Options

- Timer
- Task List
- Settings Menu
- Sound Notifications
- Login System
- Statistics Tracking

## Decision Outcome

Chosen option: "No Login System or Statistics Tracking", because we believe after discussion that a login system could add a huge amount of work and Statistics Tracking isn't what we want to focus on.

### Positive Consequences

- We're avoiding taking on a lot of work with the login system.

### Negative Consequences

- Some of our user stories are weakened without the ability to track your productivity statistics.

## Pros and Cons of the Options

### Timer - Accepted

Hard to avoid

- Pretty much essential

### Task List - Accepted

A Task List which both tracks the tasks you aim to complete with subsequent pomo sessions and allows you to estimate how long different tasks will take.

- Good, because a task list is fundamentally important to the Pomodoro Technique as thought of by it's creator.
- Bad, because it'll probably be the most convoluted part of our application.

### Settings Menu - Accepted

A way for the user to tweak different parts of the app including timer lengths and sound notifications.

- Good, because it allows the user to feel in control of the app
- Good, because we can squeeze some extra functionality in without overloading the GUI
- Bad, because adds an extra menu for the user to navigate

### Sound Notifications - Accepted

Notifications that play a sound when the timer ends

- Good, because it allows for the timer to run in the background and still be noticed
- Good, because the possibility for a ticking sound could keep the user focused
- Good, because the physicality of a noise can make the user more engaged with the Pomo process
- Bad, because it makes a settings menu or some kind of volume slider pretty necessary
- Bad, because sounds are easy to overdo

### Login System - Rejected

A way for a user to login to interact with the app, and store their productivity statistics through an associated account

- Good, because it makes it easy for the user to use the app across different devices
- Bad, because it seems like it could add an astronomical level of complexity

### Statistics Tracking - Rejected with possibility of doing if we have time

A way for the user to track how they've been doing with the Pomodoro Technique. Could show average interruptions and completions as well as a record of what they've accomplished

- Good, because it fits in well with our user stories
- Good, because it allows for much wider use cases in our users
- Bad, because it could be fairly complicated
- Bad, because it isn't essential to the technique
