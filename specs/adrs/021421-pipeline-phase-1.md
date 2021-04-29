# CI/CD Pipeline Decisions Phase 1

- Status: [accepted]
- Deciders: Everyone
- Date: 2021-2-14

## Context and Problem Statement

We need to decide the initial tools and strategies we want to use for the CI/CD pipeline that will be integrated with our app.

## Decision Drivers

- Want to choose a set of tools that will cover all the parts of a CI/CD pipeline for this app and can be learned relatively easily and in a short period of time

## Considered Options

- Linting and code style enforcement: Prettier, eslint, stylelint
- Code Quality via Tool: Codeclimate, Codacy
- Code Quality via Human Review: Pull Requests
- Unit Tests via Automation: Jest, Tape, Ava, Cypress, Mocha/Chai
- Documentation Generation via Automation: JSDocs

## Decision Outcome

Chosen Option: JSDocs for documentation, Jest for unit testing, Pull Requests and Codeclimate for code quality, and prettier, eslint, and stylelint for linting and code style enforcement. Most of these choices were made, because those were the only viable options for each category, as the number of free tools are limited. Jest was chosen, because it is easy to use and pick up within the short timeline for this project.

## Reasoning Behind CI/CD Decisions

### Linting and Code Style Enforcement: Prettier, Eslint, Stylelint

- Chose eslint and prettier for Javascript and stylelint for CSS
- Only real options for linting and style enforcement, and are very easy to use with GitHub and npm

### Code Quality via Tool: Codeclimate

- Most other options require a payment, but this one has a free trial and we might be able to get student access by contacting Codeclimate

### Code Quality via Human Review: Pull Requests

- Each team member will be working on a feature in different branches, so pull requests are necessary to make sure broken or bad code isn’t pushed to main and give other team members a chance to verify each component
- Each pull request will require 2 approvals, one from a coordinator, and will need to have all merge conflicts resolved first

### Unit Tests via Automation: Jest

- Coordinators we able to pick up the basics of it after doing a short tutorial and felt it was the best option for other team members to learn quickly as well
- Also used in labs which gives another opportunity to learn and use it more
- Since our code will involve a good amount of Javascript functionality, it is important to write tests for those and make sure they work as intended

### Documentation Generation via Automation: JSDocs

- Only real option for this category, and was suggested by TA’s and the Professor
- Found it easy to understand and use in our project, especially with VS Code
- Many of us will be writing different parts of the code, so having a centralized documentation will make it easier to understand what each part of the codebase does
