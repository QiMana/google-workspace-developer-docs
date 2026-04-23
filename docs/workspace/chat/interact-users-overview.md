---
source: https://developers.google.com/workspace/chat/interact-users-overview
root: workspace
fetched_at: 2026-04-23T15:25:27.476Z
---

# Build an interactive Google Chat app

This page provides an overview of the frameworks that you can use to build an interactive Google Chat app.

Interactive Chat apps let users do any of the following:

- Add Chat apps to Chat spaces or direct messages.
- Send messages to or receive messages from Chat apps.
- Prompt Chat apps with a command.
- Preview links from an external service or system.
- Submit information to Chat apps, such as entering text into a dialog or card message.

## How users discover and use interactive Chat apps

Users can discover and use Chat apps published to the Marketplace in many ways, including the following:

- Search and install Chat apps from Google Chat or the Marketplace.
- Interact with a Chat app that's been added to a Chat space.
- Discover the Chat app in their direct messages panel after a Google Workspace administrator installed the Chat app on their behalf.

To start using a Chat app, Google Chat users can start a direct message with the Chat app or add it to a space. Users can also add the Chat app by @mentioning it. For more information, see [Use Chat apps](https://support.google.com/chat/answer/7655820).

The following example shows how a user @mentions a Chat app to add it to a space:

![Adding a Chat app to a space by typing @ in a message.](https://developers.google.com/static/workspace/chat/images/add-chat-app-to-space.png)

## Choose a framework for your interactive Chat app

To build a Chat app that interacts with users, you can choose between the following frameworks:

- **Google Workspace add-on**: Lets you extend other Google Workspace applications and list your Chat app with other types of apps on the Google Workspace Marketplace. To learn more, see [Extend Google Chat](../add-ons/chat.md) in the Google Workspace add-on documentation.
- **Chat API interaction event**: Lets you build additional features such as a [Chat app homepage](./send-app-home-card-message.md). To learn more, see [Receive and respond to interaction events](./receive-respond-interactions.md).

### Configure an interactive Chat app

For each framework, the following table shows the documentation for configuring and creating a basic interactive Chat app for each [Google Chat app architecture](./structure.md):

<table><thead><tr><th>Configuration</th><th>Add-on</th><th>Chat API interaction events</th></tr></thead><tbody><tr><td>Configure the Chat API</td><td><a href="https://developers.google.com/workspace/add-ons/chat/configure">Documentation</a></td><td><a href="https://developers.google.com/workspace/chat/configure-chat-api">Documentation</a></td></tr><tr><td><b>Quickstarts</b></td><td colspan="3"></td></tr><tr><td>Apps Script</td><td><a href="https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script">Documentation</a></td><td><a href="https://developers.google.com/workspace/chat/quickstart/apps-script-app">Documentation</a></td></tr><tr><td>HTTP service</td><td><a href="https://developers.google.com/workspace/add-ons/chat/quickstart-http">Documentation</a></td><td><a href="https://developers.google.com/workspace/chat/quickstart/gcf-app">Documentation</a></td></tr><tr><td>Dialogflow CX</td><td><a href="https://developers.google.com/workspace/add-ons/chat/quickstart-dialogflow-cx">Documentation</a></td><td><a href="https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language">Documentation</a></td></tr><tr><td>Pub/Sub</td><td><a href="https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub">Documentation</a></td><td><a href="https://developers.google.com/workspace/chat/quickstart/pub-sub">Documentation</a></td></tr></tbody></table>

### Build interactive features

For each framework, the following table shows the documentation for building interactive features:

| Feature | Add-on | Chat API interaction events |
| --- | --- | --- |
| Send messages | [Documentation](../add-ons/chat/send-messages.md) |  |
| Respond to commands | [Documentation](../add-ons/chat/commands.md) | [Documentation](./commands.md) |
| Build interactive dialogs | [Documentation](../add-ons/chat/dialogs.md) | [Documentation](./dialogs.md) |
| Collect and process information | [Documentation](../add-ons/chat/collect-information.md) | [Documentation](./read-form-data.md) |
| Preview links in Chat messages | [Documentation](../add-ons/chat/preview-links.md) | [Documentation](./preview-links.md) |
| Build a homepage for your Chat app | Unavailable for add-ons. | [Documentation](./send-app-home-card-message.md) |
| Connect to external systems and tools | [Documentation](../add-ons/guides/connect-third-party-service.md) | [Documentation](./connect-web-services-tools.md) |

## Related topics

- [Build a Google Chat app as a Google Workspace add-on](../add-ons/chat.md)
- [Receive and respond to interaction events](./receive-respond-interactions.md)
- [Choose a Google Chat app architecture](./structure.md)
