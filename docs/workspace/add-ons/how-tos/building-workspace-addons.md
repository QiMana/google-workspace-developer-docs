---
source: https://developers.google.com/workspace/add-ons/how-tos/building-workspace-addons
root: workspace
fetched_at: 2026-04-23T15:22:58.356Z
---

# Build Google Workspace add-ons

## Page Summary

- This guide outlines the process of creating Google Workspace add-ons, covering design, development, and publication to enhance Google Workspace applications like Gmail, Calendar, and Docs.
- Developers need to set up Apps Script and Google Cloud projects, define the add-on's functionality and appearance, and build the user interface using cards and widgets.
- Before publishing, add-ons should be thoroughly tested for functionality and security, ensuring they have the necessary permissions and adhere to Google's style guidelines.
- Publishing involves making the add-on available publicly or within a specific domain through the Google Workspace Marketplace, which may require an app review process for public add-ons.
- Developers can leverage Google's resources and tools to configure the add-on's behavior, connect to external services, and implement interactive elements for a comprehensive user experience.

Learn how to design, build, and publish Google Workspace add-ons:

1. Determine the Google Workspace applications where you want your add-on to be available to users.
2. Set up your add-on's projects and choose an owner and collaborators.
3. Design and configure your add-on's appearance and behavior.
4. Build the add-on.
5. Verify your add-on's OAuth scopes.
6. Test the add-on within one or more Google Workspace applications.
7. Publish the add-on.

Build an add-on with Apps Script or HTTP. To compare the two, watch the video "Apps Script vs. HTTP endpoints: Which should you choose? 🤔".

## Choose Google Workspace host applications

You can configure Google Workspace add-ons to appear in the following Google Workspace host applications:

- Gmail
- Google Calendar
- Google Chat
- Google Docs
- Google Drive
- Google Meet
- Google Sheets
- Google Slides

To build for Google Workspace applications, see [Extend the Google Workspace UI](../../extend.md).

## Set up your add-on's projects and choose an owner and collaborators

If you build your add-on in Apps Script, you create both an Apps Script project and a Google Cloud project. If you build your add-on in a language other than Apps Script, you only need to create a Google Cloud project.

To build an add-on, you must configure both a script project and a Cloud project.

Before starting add-on development, choose a single user account to *own* the projects and decide which other accounts are collaborators. The owner of the projects creates and manages the project files and associated settings, while collaborators can help with coding and testing.

### Apps Script projects

Before building your add-on, review the [Apps Script quotas and limitations](../../../apps-script/guides/services/quotas.md) to align your project design with these guidelines. Apps Script is best for lightweight development of personal or internal add-ons with a small user base. If your add-on requires support for many users, low latency, or full control over your infrastructure, consider a [different runtime](../guides/alternate-runtimes.md).

Build your add-on's Apps Script project files in a [shared drive](../../../apps-script/guides/collaborating.md#collaborating_with_shared_drives) so that no single account has sole ownership. Placing your add-on script file in a shared drive ensures that all collaborators have access to the script project.

When you publish an add-on, a single user account is the publisher. The publishing account must have edit access to the script project, but it doesn't need to be the owner.

To create an Apps Script project, see [Script projects](../../../apps-script/guides/projects.md#create-and-delete).

### Google Cloud projects

Add collaborators to the [add-on's Cloud project](../../../apps-script/guides/cloud-platform-projects.md#adding_additional_owners_to_a_standard_gcp_project). This ensures that your team can always access the add-on's Cloud settings.

To create a Google Cloud project, see [Create a Google Cloud project](../../guides/create-project.md).

## Design and configure your add-on appearance and behavior

Decide how your add-on looks and behaves before you build it. Consider which use cases the add-on solves. Start with a basic design to get working first, and then add refinements.

Refer to the [Google Workspace add-on style guide](../guides/workspace-style.md) for guidelines on how to design your add-on user experience.

### Configure the add-on manifest

Implement the design in the add-on manifest. Configure the add-on's appearance and behavior in the manifest, including the Google Workspace host applications that the add-on extends.

For details, see [Manifests for Google Workspace add-on](../concepts/workspace-manifests.md).

As you add code and features, update the manifest as needed to define the required add-on appearance and behavior.

### Configure Google Chat app appearance and behavior

If you design an add-on that extends Google Chat, use Google Chat API to configure the appearance and behavior of a Chat app. For steps, see [Configure a Google Chat app](../chat/configure.md).

## Build the add-on

Implement a card-based interface for the add-on. Use [Card service](../../../apps-script/reference/card-service/card-service.md) or if you use another code language, return formatted JSON for the interface to render as cards.

Implement any [trigger functions](../guides/glossary.md#trigger_function) specified in the add-on manifest. If your add-on connects to a third-party service using OAuth, [configure the OAuth for that service](../guides/connect-third-party-service.md).

### Construct cards

Define an add-on user interface by creating [`Card`](../../../apps-script/reference/card-service/card.md) objects and adding [widgets](../concepts/widgets.md). Trigger functions specified in your manifest must return either a single [`Card`](../../../apps-script/reference/card-service/card.md) object or an array of [`Card`](../../../apps-script/reference/card-service/card.md) objects that represent different 'pages' of the add-on interface. The add-on can also create and display new cards in response to user actions.

In Apps Script, create cards using the [`CardBuilder`](../../../apps-script/reference/card-service/card-builder.md) class. Each card requires a [`CardHeader`](../../../apps-script/reference/card-service/card-header.md) and one or more [`CardSections`](../../../apps-script/reference/card-service/card-section.md). Populate each card section with the individual widgets that make up the interface. [Interaction widgets](../concepts/widgets.md#user_interaction_widgets) are usually linked to [actions](../concepts/actions.md) to define their interaction behavior.

After you have added all the sections and widgets to your card via its [`CardBuilder`](../../../apps-script/reference/card-service/card-builder.md), call [`CardBuilder.build`](../../../apps-script/reference/card-service/card-builder.md#build()) to create the corresponding `Card` object.

Use built-in Apps Script services\](/apps-script/guides/services/) such as [`CalendarApp`](../../../apps-script/reference/calendar/calendar-app.md) to retrieve information to display in the add-on cards. Use data from non-Google services.

If your add-on needs access to non-Google APIs that require OAuth, configure and connect to that service—see the [Connecting to Non-Google Services guide](../guides/connect-third-party-service.md).

#### Construction order

When you build a card, build from the top up. Use this construction order:

1. Build the widget.
2. Add the widget to card section.
3. Repeat until the card section has all of its widgets.
4. Add the card section to the card.

This is because when you add a widget to a card or card section, you are actually adding a *copy* of that widget. Any changes you make to the widget object after adding it are not reflected in the final card.

### Universal actions

Use [universal actions](./universal-actions.md) to provide context-independent functionality. Universal actions are menu items available in the add-on UI regardless of the card. All defined universal actions appear in the add-on's card menu.

See [Universal actions](./universal-actions.md) for more details.

## Verify the add-on OAuth scopes

[Scopes](../concepts/workspace-scopes.md) define the actions the add-on can take on a user's behalf. Add-ons should only have the scopes they need to function.

In add-on projects, [set the add-on scopes](../../../apps-script/concepts/scopes.md#setting_explicit_scopes) to ensure the add-on uses the least-permissive set of scopes possible. Define the scopes in the add-on [manifest](../concepts/workspace-manifests.md).

See [Scopes](../concepts/workspace-scopes.md) for more details.

## Test the add-on

You can test unpublished add-ons by first [installing the unpublished add-on](./testing-workspace-addons.md#install_an_unpublished_add-on). After it's installed and authorized, use the add-on in your account to test its appearance and behavior in the host applications it extends. Verify that the add-on behaves as expected for contexts and user actions.

To start testing your add-on, see the following guides:

- [Test and debug Apps Script Google Workspace add-ons](./testing-workspace-addons.md)
- [Test and debug HTTP Google Workspace add-ons](../guides/debug.md)
- [Test interactive features for Google Chat apps](../../chat/test-interactive-features.md)

## Publish the add-on

Publishing makes your add-on available to others. Before you publish, review the [publication overview](./publish-add-on-overview.md). Publication is a complex process that requires preparation.

Google Workspace add-ons are published to the [Google Workspace Marketplace](https://workspace.google.com/marketplace/). Publicly available add-ons require [app review](../../marketplace/about-app-review.md) before they are published.

See [Publishing Google Workspace add-on](./publish-add-on-overview.md) for more details.
