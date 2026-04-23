---
source: https://developers.google.com/workspace/chat/structure
root: workspace
fetched_at: 2026-04-23T15:25:35.558Z
---

# Choose a Google Chat app architecture

## Page Summary

- Google Chat apps can be built using various architectures like web services, Pub/Sub, and Apps Script, each catering to different needs and complexities.
- Choosing the right architecture depends on factors like target audience, desired interactivity, messaging patterns, and integration needs.
- Developers can leverage conversational patterns like call and response, asynchronous updates, and event subscriptions to create engaging user experiences.
- Detailed descriptions, diagrams, and quickstart guides are available to help developers build and deploy Google Chat apps effectively.
- Google provides options for synchronous and asynchronous communication, natural language processing through Dialogflow, and proactive interaction capabilities for your app.

This page describes common service architecture approaches that are used to create Google Chat apps. If you have an existing app that you want to integrate into Google Chat, you can use or adapt your existing implementation. If you're building a new Chat app, this page presents similar information in a few different ways to help you choose the architecture that's right for your use case:

## Overview by features and capabilities

The following table highlights key features and capabilities of Chat apps and the recommended () service architecture style. In some cases, another architecture style might be possible to develop with these features, but isn't as good a fit for the use case as other styles ().

| Features and capabilities | Web or HTTP service | Pub/Sub | Webhooks | Apps Script | AppSheet | Dialogflow | Script |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Intended audience |  |  |  |  |  |  |  |
| Your team |  |  |  |  |  |  |  |
| Your organization |  |  |  |  |  |  |  |
| The public |  |  |  |  |  |  |  |
| User interactivity |  |  |  |  |  |  |  |
| Use natural language processing |  |  |  |  |  |  |  |
| Messaging patterns |  |  |  |  |  |  |  |
| Send and receive synchronous messages |  |  |  |  |  |  |  |
| Send and receive synchronous messages, and send asynchronous messages |  |  |  |  |  |  |  |
| Send asynchronous messages only |  |  |  |  |  |  |  |
| Send messages from an external system to a single Chat space |  |  |  |  |  |  |  |
| Access other services and systems |  |  |  |  |  |  |  |
| Integrate with other Google services |  |  |  |  |  |  |  |
| Communicate behind a firewall |  |  |  |  |  |  |  |
| Query or subscribe to Chat events |  |  |  |  |  |  |  |
| Coding and deployment styles |  |  |  |  |  |  |  |
| Development without code |  |  |  |  |  |  |  |
| Development with low code |  |  |  |  |  |  |  |
| Development in a programming language of your choice |  |  |  |  |  |  |  |
| Simplified DevOps |  |  |  |  |  |  |  |
| Complete DevOps and CI/CD management |  |  |  |  |  |  |  |

## Service architecture styles

This section describes some of the most common architectural approaches used to create Chat apps.

### Web or HTTP service

A **web or HTTP service** is the most commonly deployed architecture because it provides the most flexibility for developers to build public Chat apps. This architecture is recommended for the following use cases:

- The Chat app is deployed to the public on [Google Workspace Marketplace](https://workspace.google.com/marketplace).
- The Chat app can send and receive all messaging patterns: send and receive synchronous messages, send asynchronous messages, and send messages from an external system.
- The Chat app is developed in any programming language.
- The Chat app requires complete DevOps and CI/CD management.
- The Chat app service is implemented in cloud or on-premises servers.

In this design, you configure Chat to integrate with a remote service by using HTTP, as shown in the following diagram:

![Architecture of a Chat app using a web service in an on-premises server.](https://developers.google.com/static/workspace/chat/images/design-patterns/public-webservice.svg)

In the preceding diagram, a user interacting with an HTTP Chat app has the following flow of information:

1. A user sends a message in a Chat space to a Chat app.
2. An HTTP request is sent to a web server that is either a cloud or on-premises system that contains the Chat app logic.
3. Optionally, the Chat app logic can interact with external third-party services, such as a project management system or a ticketing tool.
4. The web server sends an HTTP response back to the Chat app service in Chat.
5. The response is delivered to the user.
6. Optionally, the Chat app can call the Chat API to asynchronously post messages or perform other operations.

This architecture provides you the flexibility to use existing libraries and components that already exist in your system because these Chat apps can be designed using different programming languages. There are different ways to implement this architecture. On Google Cloud, you can use Cloud Run and App Engine. To get started, see [Build a Google Chat app](./quickstart/gcf-app.md).

### Pub/Sub

If the Chat app is implemented behind a firewall, Chat is unable to make HTTP calls to it. One approach is to use [**Pub/Sub**](https://cloud.google.com/pubsub/docs/overview) to enable the Chat app implementation to subscribe to a topic that carries messages from Chat. Pub/Sub is an asynchronous messaging service that decouples services producing messages from services processing those messages. This architecture is recommended for the following use cases:

- The Chat app is built behind a firewall.
- The Chat app [receives events about a Chat space](../events/guides/events-chat.md).
- The Chat app is deployed to your organization.
- The Chat app can send and receive synchronous messages, and can send asynchronous messages.
- The Chat app is developed in any programming language.
- The Chat app requires complete DevOps and CI/CD management.

The following diagram shows the architecture of a Chat app built with Pub/Sub:

![Architecture of a Chat app implemented with Pub/Sub.](https://developers.google.com/static/workspace/chat/images/design-patterns/secured-firewall.svg)

In the preceding diagram, a user interacting with a Pub/Sub Chat app has the following flow of information:

1. A user sends a message in Chat to a Chat app, either in a direct message or in a Chat space, or an event happens in a Chat space for which the Chat app has an active [subscription](../events.md).
2. Chat sends the message to a Pub/Sub topic.
3. An application server, that is either a cloud or on-premises system that contains the Chat app logic, subscribes to the Pub/Sub topic in order to receive the message through the firewall.
4. Optionally, the Chat app can call the Chat API to asynchronously post messages or perform other operations.

To get started, see [Use Pub/Sub as an endpoint for your Chat app](./quickstart/pub-sub.md).

### Webhooks

You can create a Chat app that can only send messages to a specific Chat space by using calls to a Chat **webhook** URL. This architecture is recommended for the following use cases:

- The Chat app is deployed to your team.
- The Chat app sends messages from an external system to a single Chat space.

With this architecture, the Chat app is limited to a specific Chat space and doesn't allow user interaction, as shown in the following diagram:

![Architecture for incoming webhooks to send asynchronous messages to Chat.](https://developers.google.com/static/workspace/chat/images/arch-pat-notifier.svg)

In the preceding diagram, a Chat app has the following flow of information:

1. The Chat app logic receives information from external third-party services, such as a project management system or a ticketing tool.
2. The Chat app logic is hosted in either a cloud or on-premises system that can send messages by using a webhook URL to a specific Chat space.
3. Users can receive messages from the Chat app in that specific Chat space, but are unable to interact with the Chat app.

This type of Chat app can't be shared in other Chat spaces or with other teams, and can't be published to the Google Workspace Marketplace. Incoming webhooks are recommended for Chat apps to report alerts or status, or for some types of Chat app prototyping.

To get started, see [Send messages to Chat with webhooks](./quickstart/webhooks.md).

### Apps Script

You can create your Chat app logic entirely in JavaScript. **Google Apps Script** is a low-code development platform for Chat apps. Apps Script handles the authorization flow and the OAuth 2.0 tokens for user authentication. You can use Apps Script to build public Chat apps, but isn't recommended due to daily [quotas and limits](../../apps-script/guides/services/quotas.md).

This architecture is recommended for the following use cases:

- The Chat app is deployed to your team, or your organization.
- The Chat app can send and receive all messaging patterns: send and receive synchronous messages, send asynchronous messages, and send messages from an external system.
- The Chat app requires simplified DevOps management.

This architecture is useful for Chat apps that also integrate with other Google Workspace and Google services, such as Google Sheets, Google Slides, Google Calendar, Google Drive, Google Maps, and YouTube, as shown in the following diagram:

![Architecture of a Chat app implemented with Apps Script.](https://developers.google.com/static/workspace/chat/images/design-patterns/gsuite-via-appsscript.svg)

In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information:

1. A user sends a message to a Chat app, either in a direct message or in a Chat space.
2. The Chat app logic that's implemented in Apps Script, which resides in Google Cloud, receives the message.
3. Optionally, the Chat app logic can integrate with Google Workspace services, such as a Calendar or Sheets, or other Google Services, such as Google Maps or YouTube.
4. The Chat app logic sends a response back to the Chat app service in Chat.
5. The response is delivered to the user.

To get started, see [Build a Chat app with Apps Script](./quickstart/apps-script-app.md).

### AppSheet

You can create a domain-shared Chat app with no code using **AppSheet**. You can simplify the development process by using the automatic configuration mode and following templates to build common Chat app actions. However, some [AppSheet web app features are unavailable in Chat apps](https://support.google.com/appsheet/answer/12917178).

This architecture is recommended for the following use cases:

- The Chat app is deployed to you and your team.
- The Chat app can send and receive synchronous messages, and can send asynchronous messages.
- The Chat app requires simplified DevOps management.

The following diagram shows the architecture of a Chat app built with AppSheet:

![Architecture of a Chat app implemented with AppSheet.](https://developers.google.com/static/workspace/chat/images/design-patterns/gsuite-via-appsheet.svg)

In the preceding diagram, a user interacting with an AppSheet Chat app has the following flow of information:

1. A user sends a message in Chat to a Chat app, either in a direct message or in a Chat space.
2. The Chat app logic that's implemented in AppSheet, which resides in Google Cloud, receives the message.
3. Optionally, the Chat app logic can integrate with Google Workspace services, such as a Apps Script or Google Sheets.
4. The Chat app logic sends a response back to the Chat app service in Chat.
5. The response is delivered to the user.

To get started, see [Build a Chat app with AppSheet](https://support.google.com/appsheet/answer/12923581).

### Dialogflow

You can create a Chat app with **Dialogflow**, a natural language platform for automated conversations and dynamic responses. This architecture is recommended for the following use cases:

- The Chat app can send and receive synchronous messages.
- The Chat app uses natural language processing to respond and interact with users.

The following diagram shows the architecture of a Chat app built with Dialogflow:

![Architecture of a Chat app implemented with Dialogflow.](https://developers.google.com/static/workspace/chat/images/design-patterns/gsuite-via-dialogflow.svg)

In the preceding diagram, a user interacting with a Dialogflow Chat app has the following flow of information:

1. A user sends a message in Chat to a Chat app, either in a direct message or in a Chat space.
2. A Dialogflow virtual agent, which resides in Google Cloud, receives and processes the message to produce a response.
3. Optionally, using a [Dialogflow webhook](https://cloud.google.com/dialogflow/cx/docs/concept/webhook), the Dialogflow agent can interact with external third-party services, such as a project management system or a ticketing tool.
4. The Dialogflow agent sends a response back to the Chat app service in Chat.
5. The response is delivered to the Chat space.

To get started, see [Build a Dialogflow Google Chat app](./build-dialogflow-chat-app-natural-language.md).

### Command-line application or script

You can create a **command-line application** or a **script** that sends messages to Chat or performs other operations, such as creating a space or managing the members of a space, without letting users directly invoke or respond to the Chat app in Chat. This architecture is recommended for the following use cases:

- The Chat app is developed in any programming language.
- The Chat app can send asynchronous messages only.

The following diagram shows the architecture:

![Architecture of a Chat app implemented with a command-line application or a script.](https://developers.google.com/static/workspace/chat/images/design-patterns/chat-app-architecture-built-as-a-command-line-or-desktop-app-or-sc.svg)

In the preceding diagram, the Chat app has the following flow of information:

1. The Chat app calls the Chat API to send a message or perform another operation.
2. Chat executes the requested operation.
3. Optionally, the Chat app prints a confirmation in the CLI.

## Chat app logic implementation

Chat doesn't constrain the way in which you implement the Chat app logic. You can create a fixed-syntax command parser, use advanced AI and language processing libraries or services, subscribe and respond to events, or anything else appropriate for your particular goals.

### Handle user interactions

Chat app can [interact with users](./interact-users-overview.md) in a number of ways. A user interaction is any action that a user takes to invoke or interact with a Chat app.

#### Command parser

Command-driven Chat apps examine the payload of [Chat app interaction events](./receive-respond-interactions.md), then extract commands and parameters from this content. For example, see [Respond to Google Chat app commands](./commands.md).

Another approach is to tokenize the message, extract the command, and then reference a dictionary that maps commands to handler functions for each command.

#### Dialog-based user interface

Dialog-based apps respond to [Chat app interaction events](./receive-respond-interactions.md) by displaying card-based [dialogs](./dialogs.md) where the user can interact with the Chat app, such as [filling out forms](./read-form-data.md) or requesting actions.

Every time the user executes an action in a dialog, a new interaction event is sent to the Chat app, which can respond by updating the dialog or sending a message.

#### Natural language processing

Many Chat app implementations use natural language processing (NLP) to determine what the user is asking for. There are many ways to implement NLP, and you can choose to implement NLP however you prefer.

You can use NLP in your Chat app implementation with [Dialogflow ES](https://cloud.google.com/dialogflow/es/docs/integrations/google-chat) or [Dialogflow CX Chat integration](https://cloud.google.com/dialogflow/cx/docs/concept/integration/google-chat), which lets you create virtual agents for automated conversations and dynamic responses.

### Proactively issue requests to Chat

Chat apps can also send messages or other requests to Chat, which aren't triggered by direct user interactions in Chat. Instead, these Chat apps can be triggered—for example, by third-party applications, or using a command-line invocation from a user, but users can't interact with these Chat apps directly in Chat.

Non-interactive Chat apps use the Chat API to send messages or other types of requests to Chat.

## Conversational patterns

You should consider how you want your Chat app to interact with users. The following sections describe conversation patterns that your Chat app might implement.

### Call and response (synchronous)

In a synchronous call and response pattern, the Chat app responds to messages from users on a one-to-one basis. One message to the Chat app by a user results in one response from the Chat app, as shown in the following diagram:

![Architecture of a synchronous message.](https://developers.google.com/static/workspace/chat/images/design-patterns/synchronous.svg)

In the preceding diagram, a user interacting with a Chat app has the following flow of information:

1. A user sends a synchronous message to a Chat app—for example, "What's my next meeting?".
2. The Chat app sends a synchronous message to the user—for example, "Dr. Silva at 2:30".

For this type of conversational pattern, you can implement a Chat app architecture using a web service, Pub/Sub, Apps Script, AppSheet, or Dialogflow.

### Multiple responses (asynchronous)

The multiple responses pattern can include synchronous and asynchronous messages. This pattern is characterized by two-way communication between users and the Chat app, with the Chat app generating any number of additional messages, as shown in the following diagram:

![Architecture of an asynchronous message.](https://developers.google.com/static/workspace/chat/images/design-patterns/async.svg)

In the preceding diagram, a user interacting with a Chat app has the following flow of information:

1. A user sends a synchronous message to a Chat app—for example, "Monitor traffic".
2. The Chat app sends a synchronous message to the user to acknowledge the request—for example, "Monitoring on".
3. Later, the Chat app sends one or more asynchronous messages to the user by calling the REST API—for example, "New traffic".
4. The user sends an additional synchronous message to the Chat app—for example, "Ignore traffic".
5. The Chat app sends a synchronous message to the user to acknowledge the request—for example, "Monitoring off".

For this type of conversational pattern, you can implement a Chat app architecture using a web service, Pub/Sub, Apps Script, or AppSheet.

### Query or subscribe to events (asynchronous)

In an asynchronous event-driven pattern, the Chat app receives events by either querying the Chat API or creating a subscription to a Chat space or user using the Google Workspace Events API. Events represent changes to Chat resources, such as when a new message is posted or when a user joins a space. Event-driven Chat apps examine the event payload to get data about the changed Chat resource, then respond accordingly.

Chat apps can receive many types of events, including events about spaces, memberships, messages, and reactions. When a Chat app receives an event by querying the Chat API or through an active subscription, the Chat app can then optionally generate any number of asynchronous responses, which it sends back to Chat using the Chat API.

You can use this type of logic to update external systems, such as a ticket management system, or send messages to a Chat space asynchronously—for example, by sending a welcome message when a new user joins a Chat space.

The following diagram shows an example of an event-driven conversational pattern:

![Architecture of a subscription to Chat events](https://developers.google.com/static/workspace/chat/images/design-patterns/chat-events-flow.svg)

In the preceding diagram, the interaction between Chat and the Chat app has the following flow of information:

1. The Chat app subscribes to a Google Chat space.
2. The space that the Chat app is subscribed to changes.
3. The Chat app delivers an event to a topic in Pub/Sub, which serves as the notification endpoint for the subscription. The event contains data about what changed in the resource.
4. The Chat app processes the Pub/Sub message that contains the event, and if necessary, takes action.

For this type of conversational pattern, you can implement a Chat app architecture using Pub/Sub, a web service, or Apps Script.

To learn more about receiving and responding to events, see [Work with events from Google Chat events](./events-overview.md).

### One-way message from a Chat app

A one-way message from a Chat app pattern lets a Chat app send asynchronous messages into a Chat space but doesn't let users interact directly with the Chat app. This pattern isn't conversational or interactive, but can be useful for things like alarm reporting, as shown in the following diagram:

![Architecture of a one-way message.](https://developers.google.com/static/workspace/chat/images/design-patterns/in-only.svg)

In the preceding diagram, a user in the same space as the Chat app has the following flow of information:

- The Chat app sends an asynchronous message to the user by calling the Chat API or posting to a webhook URL—for example, "Queue overflow alert".
- Optionally, the Chat app sends additional asynchronous messages.

For this type of conversational pattern, you can implement a Chat app architecture using a web service, a webhook, Apps Script, AppSheet, a command-line application, or a script.

### One-way message to a Chat app

A one-way message to a Chat app pattern lets a user message a Chat app without the Chat app responding while still processing the request. While this architecture is technically possible, this results in a poor user experience and we strongly discourage this pattern.

## Related topics

- [Build a Google Chat app](./quickstart/gcf-app.md)
- [Use Pub/Sub as an endpoint for your Chat app](https://developers.google.com/workspace/quickstart/pub-sub)
- [Send messages to Chat with incoming webhooks](./quickstart/webhooks.md)
- [Build a Chat app with Apps Script](./quickstart/apps-script-app.md)
- [Send a Chat message from an automation using AppSheet](https://support.google.com/appsheet/answer/12994240)
- [Dialogflow ES Chat integration](https://cloud.google.com/dialogflow/es/docs/integrations/google-chat)
- [Dialogflow CX Chat integration](https://cloud.google.com/dialogflow/cx/docs/concept/integration/google-chat).
