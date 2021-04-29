# Meeting Outline

## Review our work

- First let’s take some time to review what we all did over the last week. Some key details we should each include are:
- What you did
  - Present what you were able to work on! Feel free to share your screen and go into as much detail as you’d like.
  - Contributions to the project
  - Summary / Takeaways of your work
  - What you felt you did well / What you struggled with
  - Was this too much work? Not very much?
  - Whether you want to do the same type of thing going forward or try something else out
- We can contribute popcorn style

## Midweek check-in

- Haley had an idea about meeting at the lab hours

- It sounds like the professor and TAs really want us to be doing daily standup meetings. I think if we could at least make a daily post to a thread on Slack, I think it would give our process a lot of credibility in their eyes.
- Would people be willing to give it a try for a week? We can reevaluate how it went next meeting if need be.

## Merging the two halves of our project

- We need some time to get our separate halves together. We’ll take some time and go into a breakout session to allow us to make sure our branch is ready to merge and combine with the other team
- We need to get all of our work into a single branch, now that it’s been made so far
- Let’s spend some time now to create a single branch with both the task list and the timer and settings

## Work over the next week

- Let’s make a list of everything we need to still do for this first iteration, any remaining bugs or other issues we’re dealing with
- If there aren’t too many lingering issues we can also begin to plan out how we can add some additional features. Like previously we were talking about adding statistic tracking through the local storage in the browser.
- Jamie and Dhanush will work to add all these plans into our Github issue tracker. This can be the product backlog that people work out of during the following week
- We can still assign tasks the normal way and have our own defined work to work on, but if we can show that we’re tracking that work through github issues, it would again give us some more Agile credibility
- That means that if you’re assigned a task and you make progress on it, it would be good to leave a comment on the Issue

# Meeting Notes

## Attendance

- Took place at 4 PM on 02/28/21 through Zoom
- Everyone was able to attend

## Review our work

- Jamie
  - Organized a meeting with his subgroup to get started on their work for this week
  - Made the team status video
  - Worked with the code a little bit to organize everything and make it more readable
  - Overall:
    - Taking a leadership role with organizing meetings, completing any assignments we have, and doing a lot of the logistics
- Ashley
  - Worked a lot on input verification
  - If user enters something invalid, get a small popup icon
  - Actually pretty easy. Used a form to do it
  - Overall:
    - Main contribution is the task list logic. Also helped with the research at the start
- Arela
  - Worked on the custom minutes and seconds portion of the timer. Got it to work
  - The problem was parse-int. Something was coming in as a string rather than an int
  - Also adding to the number of complete pomos
  - Overall: Working a lot on CSS and Javascript. Mostly on the timer and the settings modal. Making sure everything
  - Added custom sounds and volume, and also flexbox stuff. Helped with design at the beginning too
- Dhanush
  - Similar to Jamie. Organizaed a subgroup meeting. Figured out most conflicts with the task list
  - Worked on two ADRs for our team
  - Got started on commenting and organizing the task list code
  - Overall:
    - Organizing everything, midweek checkins, getting ready for meetings, taking notes, handling assignments week to week
- Ivan
  - Past week working on making the add task area look more closely to what we planned for the visual design
  - Was successful in it. Removed increment and decrement arrows and added custom one
  - Added hover effects. Worked to get everything aligned correctly.
  - Added a default value for the time amount and task name
  - When editing a task there is some highlighting of the editable fields
  - Overall: Been working a lot on visual design. His design is what we’re basing our visual design off of
- Haley
  - Mainly worked on CSS of task list. Got alignments working correctly and consistently despite screen size. Also added some padding to everything. Made buttons a bit smaller so that things were spaced better.
  - Overall: Started on javascript for the timer and the task list. Now focusing more on the CSS part of the task list. Did a lot of exploratory programming at the start
- Jonathan
  - Mostly commented a lot of the HTML and CSS code
  - Pretty busy, didn’t get as much work done as he wanted too
  - Got rid of a lot of unneeded things
  - Also supposed to getting the settings menu to resize correctly, but ran out of time to complete it
  - Overall: Been working a lot on the CSS for the overall page and the settings menu
  - Helped with get some documentation of everyone’s work over the first few weeks
  - Also helped with a bit of initial design
- Brian
  - Worked on the part where it shows long break and short break
  - Working off of Arela’s code, and there was a part it was two separate if statements. Trying to make it a switch case instead so that it would work better.
  - Need a bit more time on that part
  - Overall: Working on the timer portion

## Midweek check-in

- No more labs in the class. We could use that time to work as a team on the page. Fix issues together. Work in our individual groups, and meet indivudallt

  - Jamie
  - Arela’s down
  - Ashley thinks it’s a great idea
  - Brian thinks its fine
  - Ivan thinks might give us some more time at the end
  - Jonathan fine idea

- Arela’s down
- Ashley wouldn’t mind
- Brian thinks it’s fine
- Haley’s okay with it
- It’s fine with Ivan
- Jonathan is fine with it

## Work over the next week

- Items in backlog:
  - Setting Menu Alignment
    - Jonathan
  - Task List formatting within the page
    - We will work on this together on Tuesday
  - Merge Ashley’s form validation into branch
    - We will work on this together on Tuesday
  - Merge Haley’s changes into branch
    - We will work on this together on Tuesday
  - Save custom settings locally
    - Arela
  - Save task list items locally
    - Ashley
  - Circle timer animation
    - Brian
  - Statistic Tracking
    - Ivan
    - Haley
  - Unit Testing + Linting
    - Timer code - Jamie
    - Task list code - Dhanush
