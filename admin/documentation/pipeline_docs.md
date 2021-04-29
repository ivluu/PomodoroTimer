# Pipeline Documentation

## IMPORTANT NOTE

- npm updated just a few days ago, and in order to make sure our pipeline doesn’t fall apart already we’ll not be using the most recent version of npm
- We will be using version 6.14.11
- You can check the version using `npm -v`
- If your npm version is incorrect, you can roll back your npm version using the command
  - `npm i -g npm@6.14.11`

### Linting:

- To format code before making a PR, do the following:
- Make sure you have npm (node package manager) installed on your local machine
  - For prettier, use this command: `npx prettier -c .` to see what linting issues there are and `npx prettier -w .` to automatically correct them
  - For eslint, use this command: `npx eslint .`
  - For stylelint, use this command: `npx stylelint **.css`
    - You have to use `**.css` rather than just `.` because stylelint will try and format files like pngs and other non css files otherwise

### Jest

- The Jest testing framework requires knowledge of a few pieces of key syntax including describe, test, and expect
- The Jest tests will be written in javascript files in the format [file].test.js where file is the name of the javascript file with the functions you’re trying to test
  math_funcs.js will be tested by the math_funcs.test.js file
- Because Jest requires a bit more understanding than the other tools we’re covering we’ll be linking a very brief tutorial. It shouldn’t take more than 20 minutes to read
- https://www.softwaretestinghelp.com/jest-testing-tutorial/
- Please take the time now to familiarize yourself with the basics of Jest
- The only major deviation our repo has from the tutorial is that we will use the command `npx jest` rather than `npm test`. Note the `npx` rather than `npm`

### JSDoc

- If you use VSCode, JSDoc is very easy to use. Simply create a doc comment using `/**` and `*/` and VSCode will create a comment with preexisting parameter tags like so
  ```
  * @param {*} a
  * @param {*} b
  * @param {*} c
  ```
- The asterixis denote the type of the parameter. They should be replaced with whatever type you’re expecting the parameter to be
  - Number
  - String
  - Boolean
  - Object
  - Array<Number>
- You can also denote what the return type of the function will be
  ```
  * @returns {*}
  ```
- Adding parameter and return types allows for VSCode to being to check the types of your variables in a more comprehensive and helpful way
- One final piece of information to add to the doc comment is a function description. This can be on any non-tagged line
- This leaves the total doc comment looking like this:
  ```
  /**
   *  This is a function that adds two numbers and returns their sum
   *  @param   {Number} a
   *  @param   {Number} b
   *  @returns {Number}
   */
  ```
- Once the code is pushed to the github repo, documentation will be generated under the out folder. This documentation can be viewed by loading the index.html file in any browser

### Pull Requests:

- Name your branch in this format “feature/[username]/[feature description]”
  - So, if you are working on timer design, you can name it: feature/dnanjunda/timer-design
- Must have 2 approvals in order to be merged
  - When making a PR, assign reviewers
  - Make sure one of these reviewers is Jamie or Dhanush
  - The other can be someone you are working with for a specific feature or just anyone else
- Fix all merge conflicts by merging main into your branch
  - If you need help with this, you can ask Dhanush or Jamie
- In the description of the PR, provide what specific features/changes you implemented, how you tested it, and maybe screenshots of the changes
- When reviewing a PR, make sure to test their feature thoroughly
  - Pull that branch into your local machine and test
  - If there are issues, request changes on the PR and in the comment, tell them what to fix
  - Please don’t just approve the PR without testing
