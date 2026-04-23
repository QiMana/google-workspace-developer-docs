---
source: https://developers.google.com/workspace/chat/identify-reference-users
root: workspace
fetched_at: 2026-04-23T15:25:27.145Z
---

# Identify and specify Google Chat users

## Page Summary

- Google Chat apps can identify users through a unique `User` resource with a `name` and `type` field to distinguish between bots and humans.
- You can specify a user in API calls using their resource name, Person resource ID, Directory API ID, or email alias depending on their location and account type.
- Chat apps receive user information during interactions through the `User` resource within the event data, allowing identification and actions based on user details.
- User identification enables features like mentioning users in messages, adding them to spaces, managing memberships, sending private messages, and subscribing to events.
- Resources such as the `User` and `Person` objects, along with API guides, are available for further understanding and implementing user management in Chat apps.

This page explains the ways Google Chat apps can identify or specify Chat users.

To do any of the following, a Chat app must specify a user:

- Create a message that [@ mentions a user](https://developers.google.com/workspace/chat/format-messages#messages-@mention).
- Invite or add a user to an [existing space](https://developers.google.com/workspace/chat/create-members), or add a user to a [new space](https://developers.google.com/workspace/chat/set-up-spaces).
- [Find direct messages](https://developers.google.com/workspace/chat/find-direct-message-in-spaces) between the Chat app and a specified user, or between two users.
- [Get a user's membership details in a space](https://developers.google.com/workspace/chat/get-members).
- [Send a private message](https://developers.google.com/workspace/chat/private-messages) to a user.
- [Subscribe to a user](https://developers.google.com/workspace/chat/events-overview) using the Google Workspace Events API to get events about their membership changes.

## How Chat identifies users

The Google Chat API generates a [`User` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) for each person that uses Chat. The following are two important `User` fields:

- `name` is the resource name for the resource, formatted as `users/{user}`, where `{user}` represents a unique and stable identifier. `users/app` can be used as an alias for the calling Chat app.
- `type` is the type of user. This type tells Chat whether the user is a Chat app or a person. For Chat apps, the value is `BOT`. For people, the value is `HUMAN`.

## Specify a user in a call to the Google Chat API

To specify a user, use the following values for the `{user}` value:

- For users in your Google Workspace organization, use one of the following approaches:
	- The `name` of the [`User` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) in the Chat API, such as `users/123456789`.
		- The `{person_id}` for the name of a [`Person` resource](https://developers.google.com/people/api/rest/v1/people) in the People API, where the `resourceName` is `people/{person_id}` —for example, `users/123456789` in the Chat API represents the same person as `people/123456789` in the People API.
		- The `id` for a `User` resource in the Directory API—for example, `users/123456789` in the Chat API represents the same person as `users/123456789` in the Directory API.
- For a user in an external Google Workspace organization, or a user who uses a Google Account, use an email alias—for example, `users/EMAIL_USERNAME@WORKSPACE_DOMAIN.com` or `users/EMAIL_USERNAME@gmail.com`.

## Identify a user from an interaction event

Every time a user interacts with a Chat app, Chat sends an [interaction event](https://developers.google.com/workspace/chat/receive-respond-interactions) with information about the interaction and the user. For example, when a user mentions a Chat app in a message, the Chat app receives information about the interaction, including what the message says, and who sent it. Chat apps reference users when retrieving information about Chat resources.

To identify the user who interacted with a Chat app, get the value of the `name` property on the [`User` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/User), which you can get from [`Event.user.name`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event).

The following JSON example shows the expected format of the user identity in an interaction with a Chat app:

```
{
  ...,
  "user": {
    "name": "users/12345678901234567890",
    "displayName": "Sasha",
    "avatarUrl": "https://lh3.googleusercontent.com/.../photo.jpg",
    "email": "sasha@example.com"
  }
}
```

A message is a specific type of interaction. To identify a user who sent a message to a Chat app, get the value of the `name` property on the [`User` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/User), using either of the following:

- [`spaces.messages.sender.name`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [`Event.user.name`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event)

## Related topics

- [Add a user to a space](https://developers.google.com/workspace/chat/api/guides/v1/members/create-members).
- [Manage members in a space](https://developers.google.com/workspace/chat/list-members).
- [@ mention a user in a message](https://developers.google.com/workspace/chat/format-messages#messages-@mention).
