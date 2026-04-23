---
source: https://developers.google.com/workspace/add-ons/gmail
root: workspace
fetched_at: 2026-04-23T15:22:45.312Z
---

# Extend Gmail with Google Workspace add-ons

## Page Summary

- Google Workspace add-ons automate tasks within Gmail, saving users time and effort by providing interactive UI elements within emails.
- Add-ons enhance the Gmail experience by displaying extra information, connecting to external services, and letting users control add-on behavior.
- Developers can build custom add-ons with Apps Script and the Card service to extend Gmail's functionality on both desktop and mobile.
- Gmail add-ons can have homepages, contextual interfaces triggered by opening or composing emails, and the ability to create new drafts automatically.
- To learn more about building and configuring Gmail add-ons, explore the provided resources on extending UI, composing messages, manifests, and scopes.

The purpose of many emails is to get the recipient to do a specific task or reach a goal, such as adding a calendar event, filling out a form, making a reservation, or using other applications. However, recipients then have to complete the task without any further prompting, often doing a number of manual steps.

You can save time and effort for your users by automating these tasks with add-ons. When a user reads or composes a message in Gmail, a Google Workspace add-on can present an interactive, customized UI that lets the user act on the message in various ways, such as by:

- Displaying additional information for the user in the Gmail UI.
- Connecting to non-Google services, to retrieve information or take other actions.
- Providing the means to control the add-on behavior or send information to another service.

add-ons can define the following kinds of extensions within Gmail:

- [Homepages](https://developers.google.com/workspace/add-ons/concepts/homepages) and other non-contextual cards.
- Contextual interfaces that appear when users [open Gmail messages](https://developers.google.com/workspace/add-ons/gmail/extending-message-ui).
- Contextual interfaces that appear when a user [composes a message or reply](https://developers.google.com/workspace/add-ons/gmail/extending-compose-ui).
- Automatically [create new message drafts](https://developers.google.com/workspace/add-ons/gmail/compose) in response to user interactions.

Additionally, add-ons that extend Gmail do so on both desktop and mobile clients.

## Gmail homepages

Gmail supports displaying add-on [homepages](https://developers.google.com/workspace/add-ons/concepts/homepages). To show your add-on's common homepage in Gmail, make sure there is a [`addOns.gmail`](https://developers.google.com/apps-script/manifest/addons#AddOns.FIELDS.gmail) field in the add-on's manifest.

Alternatively, add a [`gmail.homepageTrigger`](https://developers.google.com/apps-script/manifest/gmail-addons#Gmail.FIELDS.homepageTrigger) to the add-on manifest to provide a Gmail-specific homepage.

In either case, you must provide the name of a homepage trigger function in your add-on's script project. This function is automatically called to build the Gmail homepage when it is needed. You must implement this function to build and return a single [`Card`](https://developers.google.com/apps-script/reference/card-service/card) or an array of [`Card`](https://developers.google.com/apps-script/reference/card-service/card) objects that make up the homepage. The homepage trigger function is passed an [event object](https://developers.google.com/workspace/add-ons/concepts/event-objects) as a parameter that contains some general information such as the client's platform. You can use the event object data to tailor the construction of the homepage.

## See what you can make

You can build add-ons using [Apps Script](https://developers.google.com/apps-script), and define their interfaces using the Apps Script [Card service](https://developers.google.com/apps-script/reference/card-service). See [Building Google Workspace add-ons](https://developers.google.com/workspace/add-ons/how-tos/building-workspace-addons) for an overview. Google Workspace add-on behavior is configured using a [manifest](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests), which includes Gmail-specific sections.

When configuring your add-on to extend Gmail, you must decide what interfaces to create for your add-on and what actions it can take. See the following guides for more information:

- [Extending the message UI](https://developers.google.com/workspace/add-ons/gmail/extending-message-ui)
- [Extending the compose UI with compose actions](https://developers.google.com/workspace/add-ons/gmail/extending-compose-ui)
- [Compose draft messages](https://developers.google.com/workspace/add-ons/gmail/compose)
- [Manifests](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests)
- [Gmail scopes](https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#gmail_add-on_scopes)
- Try a sample:
	- [Analyze and label Gmail messages with Gemini and Vertex AI](https://developers.google.com/workspace/add-ons/samples/gmail-sentiment-analysis-ai)
		- [Plan travels with an AI agent accessible across Google Workspace](https://developers.google.com/workspace/add-ons/samples/travel-concierge)
		- [Build Gemini Enterprise agents that are tightly integrated with Google Workspace data stores, APIs, and add-ons](https://codelabs.developers.google.com/ge-gws-agents)
		- [Build Vertex AI agents that are tightly integrated with Google Workspace data stores, APIs, and add-ons](https://codelabs.developers.google.com/vertexai-gws-agents)
