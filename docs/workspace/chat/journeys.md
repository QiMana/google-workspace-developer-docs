---
source: https://developers.google.com/workspace/chat/journeys
root: workspace
fetched_at: 2026-04-23T15:25:28.174Z
---

# Define all user journeys

## Page Summary

- Define user journeys with flowcharts to visualize user interactions and potential pain points within your Google Chat app.
- Utilize user stories (As a *user*, I want to *do a task*, so I can *achieve a goal*) to guide the development of user journeys and ensure alignment with user needs.
- Account for all error scenarios within user journeys, crafting actionable error messages to help users recover and continue their workflow.
- Ensure each user interaction within the journey concludes with a message from the Chat app, providing feedback or guidance to the user.
- Include a legend with your user journey flowcharts to clarify the meaning of different shapes and symbols, making them easier to understand.

This page describes how to define and map the user journeys of your Google Chat app. A *user journey* is a set of actions and interactions between a user and a Chat app that helps the user achieve a goal. Define these journeys before building the Chat app to identify the following:

- When to provide error messages.
- When to suggest commands to help users use the Chat app.
- Where the user flow might be simplified.

## Create a flowchart of all user journeys

Flowcharts are useful tools for both visualizing and thinking through all user Chat app interactions. If your Chat app works with other Google services, or services outside of Google, be sure to include these interactions too. Ideally, your flowchart depicts every possible interaction, or for more complicated workflows, a flowchart for every user journey.

The following flowchart shows the user journey for a Chat app that helps people manage their Google Calendar from Chat:

![Flowchart showing the onboarding, authentication, and checking Calendar user journey.](https://developers.google.com/static/workspace/chat/images/design-principles-journey-example-scheduler-callouts.svg)

![](https://developers.google.com/static/workspace/chat/images/design-principles-journey-example-scheduler-callouts.svg)

The preceding diagram shows the following steps of a user wanting to use a Chat app to check their Calendar:

1. A user adds the Chat app to a space.
2. The Chat app sends a welcome message that prompts the user to [authorize access](./authenticate-authorize.md).
	- If the user refuses to authorize access, the previous welcome message is resent.
		- If the user agrees to authorize access, they click **Sign in**.
3. The user is asked to sign in from a [dialog message](./dialogs.md).
	- If the user is unable to sign in, an error message is sent asking the user to try signing in again.
		- If the user is able to successfully sign in, an onboarding message is sent that describes how to use the Chat app.
4. The user types the `/checkCalendar` [slash command](./commands.md) to get today's schedule from Calendar.
	- If the Chat app is unable to retrieve the user's calendar, an error message is sent.
		- If successful, the Chat app sends today's schedule in a card message.

## Write user stories to guide your user journeys

A *user story* represents a user goal, and is written so that the user, task, and purpose of the story is clear. User stories are meant to be open-ended because there's usually more than one way to satisfy the requirements that they describe. User stories help you set paths for users to follow as they work with Chat app.

User stories have the following format: As a *user*, I want to *do a task*, so I can *achieve a goal*. In the previous example, the user story is: As a *cross-functional worker*, I want to *check my calendar* so I can *collaborate on projects with others*.

Most Chat apps have multiple user stories. For example, another user story for the example Chat app is: As a *manager*, I want to *schedule a weekly meeting that includes all my direct reports*, so we can *collaborate on projects*. For each user story, identify the users' journey for your Chat app and create a flowchart to identify all potential interactions with your Chat app.

## Include a legend

To help others read your user journeys, include a legend that describes which shape represents which type of interaction. For example, identify a unique shape for user decision points, user input, successful and unsuccessful results from your Chat app, and any messages from the Chat app.

## Account for all error scenarios

To ensure users never get stuck while working with your Chat app, include error scenarios in your user journey map. Define how the error occurs, [write an actionable error message](./write-error-messages.md), and identify how the user might respond to the error in order to achieve their goal. For example, "Wrong username or password. Try signing in again."

## Identify the messages your Chat app sends to users

Each interaction should end with a message from your Chat app to the user, even if it's only a message confirming that the Chat app successfully completed the user's request. For example, "Welcome to the scheduling app. I can schedule, reschedule, or remove events from your calendar. Take a look at today's schedule by typing `/checkCalendar`."

## Related topics

- [Set up slash commands to interact with Google Chat users](./commands.md)
- [Write an actionable error message](./write-error-messages.md)
- [Design user interactions](./interactivity.md)
