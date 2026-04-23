---
source: https://developers.google.com/workspace/add-ons/drive
root: workspace
fetched_at: 2026-04-23T15:22:42.755Z
---

# Extending Drive with Google Workspace add-ons

## Page Summary

- Google Workspace add-ons extend Google Drive functionality by letting you build custom interfaces directly within the Drive interface.
- These add-ons, built using Apps Script, automate tasks, provide extra information, and enable interactions with other systems without leaving Drive.
- Add-ons can have non-contextual homepages or contextual interfaces that appear based on user selections, but mobile support is not yet available.
- To build add-ons, you need to define the interfaces and actions using Apps Script's Card service and configure behavior with a manifest.

Google Drive provides a cloud-based storage solution for Google Workspace files and other user data. Managing data in Drive can be a time-consuming task.

You can save time and effort for your users by extending Google Drive with Google Workspace add-ons. When you build a Google Workspace add-on, you can define custom interfaces that are inserted directly into Google Drive, exactly where the user needs them. These interfaces help automate Drive tasks, present additional information to the user, or let the user interact with a third-party system without having to switch to a new browser tab.

Google Workspace add-ons can define the following kinds of extensions within Google Drive:

- Non-contextual [homepages](./concepts/homepages.md)
- Contextual interfaces that appear when users select items in the Google Drive interface.

## See what you can make

Google Workspace add-ons are built using [Apps Script](../../apps-script/index.md), and their interfaces defined using the Apps Script [Card service](../../apps-script/reference/card-service/card-service.md). See [Building Google Workspace add-ons](./how-tos/building-workspace-addons.md) for an overview. Google Workspace add-on behavior is configured using a [manifest](./concepts/workspace-manifests.md), which includes Drive-specific sections.

When configuring your Google Workspace add-on to extend Google Drive, you must decide what interfaces to create for your add-on and what actions it can take. See the following guides for more information:

- [Building Google Drive interfaces](./drive/building-drive-interfaces.md)
- [Manifest structure for Google Workspace add-ons](./concepts/workspace-manifests.md#manifest_structure_for_g_suite_add-ons)
- Try a sample:
	- [Plan travels with an AI agent accessible across Google Workspace](./samples/travel-concierge.md)
		- [Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons](https://codelabs.developers.google.com/ge-gws-agents)
		- [Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons](https://codelabs.developers.google.com/vertexai-gws-agents)
