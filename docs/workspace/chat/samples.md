---
source: https://developers.google.com/workspace/chat/samples
root: workspace
fetched_at: 2026-04-23T15:25:32.041Z
---

# Google Chat app samples

## Page Summary

- This section provides resources for building and deploying various Google Chat apps, including quickstarts and more comprehensive samples.
- Quickstarts offer two paths: API quickstarts to programmatically perform actions as a user and interactive quickstarts for building interactive apps within Chat spaces.
- Explore complete samples showcasing a range of features, technologies, and architectures to enhance Chat app functionality.
- Samples are presented as tutorials, codelabs, and GitHub code, enabling developers to learn and build using preferred formats and tools.
- After getting started, developers can further enhance Chat apps with interactive features such as slash commands, dialogs, and link previews, and automate tasks using app authentication.

Explore samples that show you how to build and deploy different kinds of Google Chat apps.

## Get started with a quickstart

If you've never built a Chat app, you can get started by completing a *quickstart*. Quickstarts explain how to set up and run a basic sample. To get started with the Google Chat API, you can choose from two types of quickstarts:

- [API quickstarts](#api-quickstarts): Set up your environment by building a Chat app that calls the Chat API to perform tasks on your behalf, such as send a message or return a list of spaces that you're a member of.
- [Interactive quickstarts](#interactive-quickstarts): Configure the Chat API and create a basic Chat app that you can add to spaces and message with.

### API quickstarts

API quickstarts use [user authentication](./authenticate-authorize-chat-user.md) to call the Chat API, which means they perform an action as an authenticated Chat user. In this case, the quickstarts help you call the Chat API as yourself. Unlike the interactive quickstarts, you don't need to install or interact with the Chat app in Chat spaces.

The API quickstarts are offered in the following languages:

- [Apps Script](./api/guides/quickstart/apps-script.md)
- [Python](./api/guides/quickstart/python.md)
- [Node.js](./api/guides/quickstart/nodejs.md)
- [Java](./api/guides/quickstart/java.md)

For all other programming languages, view and install our [client libraries](./libraries.md) to get started with the Chat API.

### Interactive quickstarts

Choose from the following interactive quickstarts based on how you want to build:

- [Google Apps Script](./quickstart/apps-script-app.md), a cloud-based, low-code development platform based in JavaScript.
- [HTTP service](./quickstart/gcf-app.md) with Google Cloud Functions.
- [Google Cloud Dialogflow CX](./build-dialogflow-chat-app-natural-language.md), a natural language platform for automated conversations and dynamic responses.
- [Google Cloud Pub/Sub](./quickstart/pub-sub.md), a real-time messaging service that lets you build behind a firewall.
- [AppSheet](https://support.google.com/appsheet/answer/12923581), a no-code development platform for building apps in Google Workspace organizations.

## Explore Chat app samples

View samples by featured Google products, language, and [type](#types):

### About sample types

The following provides an explanation of each sample type:

- **[Quickstarts](#quickstart)** explain how to set up and run a basic Chat app.
- **Tutorials** provide step-by-step instructions from start to finish, and assume you have nothing set up beyond a Google Cloud project.
- **[Codelabs](https://codelabs.developers.google.com/?product=googleworkspace&text=chat)** are guided walkthroughs of one or more Google products and usually presented at an event and published later for you to try at home.
- **GitHub** code samples are published to the [Google Chat GitHub repository](https://github.com/googleworkspace/google-chat-samples) with some basic instructions on how to use them. Often times, these samples are also used in documentation.

### Explore Chat app code samples on GitHub

You can also find Chat app samples on [GitHub](https://github.com/googleworkspace/google-chat-samples). You can fork these repositories and use the code as a reference for your own projects.

## Explore Chat app videos

Explore content from the Google Workspace Developers YouTube channel:

## Next steps

- [Google Chat repository on GitHub](https://github.com/googleworkspace/google-chat-samples)
- [Identify your users' needs](./audience.md)
- [Define all user journeys](./journeys.md)
- [Choose a Chat app architecture](./structure.md)
