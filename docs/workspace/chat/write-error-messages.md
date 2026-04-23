---
source: https://developers.google.com/workspace/chat/write-error-messages
root: workspace
fetched_at: 2026-04-23T15:25:39.896Z
---

# Write actionable error messages

## Page Summary

- Google Chat app error messages should be actionable, guiding users on how to resolve issues and proceed.
- Actionable error messages clearly explain the problem, provide steps for fixing it, and offer additional help resources.
- Inactionable error messages are vague, lack guidance, and can lead to user frustration and abandonment.
- Use the actionable error message structure: state the problem, guide the user on fixing it, and offer further help (e.g., `/help` command).
- When writing error messages, assume users need clear instructions and avoid ambiguity.

This page describes best practices to write actionable error messages that tell the user how to fix the issue so that they can complete their goal.

When a user is interacting with a Google Chat app, encountering error messages can be a frustrating experience when the error isn't actionable. For example, the error message, `An error occurred`, isn't useful because the message doesn't explain what went wrong, how the user can fix the issue, or how the user can get help. This page describes how to structure error messages so that they're useful to users by showing actionable and inactionable examples.

## Error message structure

An actionable error message has the following structure:

- **What went wrong.** Saying why the Chat app can't complete a request helps the user resolve the issue. Explaining why an error occurred builds trust.
- **How the user can proceed toward their goal.** It's never enough to just say what went wrong. Tell users how they can move past the error and complete their goal.
- **How to get help.** If the user is still stuck, tell them how they can get more help. This could be a `/help` command or a link to documentation for your Chat app.

## Example error message: incorrect date format

In this example, the user entered a date in a format that the Chat app didn't expect. They wrote `November 19, 2021`, but the Chat app expects `2021-11-19`.

Here's an actionable and an inactionable version of the error message that the Chat app responds with:

#### Actionable error

A user asks the Chat app to schedule a meeting with another person. The Chat app responds with a good, actionable error message:

``I don't recognize the date format you entered. Write dates as `yyyy-mm-dd`; for example, `2000-01-31`. For help, type `/help`.``

![Example error message that tells the user what went wrong, how to proceed, and how to get help.](https://developers.google.com/static/workspace/chat/images/design-principles-actionable-error-date-good.png)

This error message is actionable for the following reasons:

- Says what went wrong. The Chat app doesn't recognize the date format.
- Explains how to fix the error by telling the user the expected date format and gives an example date that helps people understand what to write.
- Offers more help with a `/help` slash command. If users are still stuck, they know how to learn more.

#### Inactionable error

A user asks the Chat app to schedule a meeting with another person. The Chat app responds with an unhelpful, inactionable error message:

`Enter the correct date format.`

![Example error message that doesn't give actionable information.](https://developers.google.com/static/workspace/chat/images/design-principles-actionable-error-date-bad.png)

This error message is inactionable for the following reasons:

- Doesn't say whether it scheduled the meeting. The user might be hesitant to reschedule the meeting, or they might assume that the meeting was scheduled.
- Doesn't tell the user how to format the date. Instead of assuming that users know how to format the date, it should say that it's expecting the date format `yyyy-mm-dd`.
- Doesn't offer more help. When users are stuck and don't know how to proceed, they might stop messaging the Chat app.

## Try it out

Now that you know how to write actionable errors, can you identify in the following scenario which of these errors is actionable:

A Chat app creates calendar events when users message the Chat app with the keyword `schedule`. To create a calendar event, the Chat app requires user authentication. If a user hasn't been authenticated, then the Chat app responds with an error message.

Which error message is actionable?

Before I can schedule the meeting, you must sign in by typing `/signin`. To learn more, type `/help`.

This error message is actionable because it says the following:
- What went wrong. The Chat app requires authentication.
- How to proceed. Type `/signin` to authenticate.
- How to get help. If the user wants more information, they can type `/help`.

You must authenticate.

This error message is inactionable because it doesn't say how to authenticate.

Sign in.

This error message is inactionable because it doesn't say how to sign in, and it implies that the user is signed out instead of clearly saying so, which is confusing.

Can't schedule meeting.

This error message is inactionable because it doesn't tell the user why the meeting can't be scheduled or how the user can proceed. No help is provided.
