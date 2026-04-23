---
source: https://developers.google.com/workspace/add-ons/concepts/html-interfaces
root: workspace
fetched_at: 2026-04-23T15:22:42.014Z
---

# Editor add-on user interfaces

## Page Summary

- Editor add-ons enhance user interaction with custom menus, dialogs, and sidebars, built using Apps Script's UI and HTML services.
- Add-on menus initiate add-on usage and should be designed considering the add-on authorization lifecycle.
- Sidebars and dialogs, created with HTML service, allow for defining the add-on's interface structure and appearance using HTML, CSS, and client-server communication for dynamic interactions.
- The Editor add-on CSS package ensures visual consistency with Google Workspace editors.

[Editor add-ons](./types.md#editor_add-ons) enable user interaction through customized menus, dialogs, and sidebars. The following links provide information building these types of interfaces.

- [Add-on menus](./menus.md) are created using Google Apps Script's base [Ui service](../../../apps-script/reference/base/ui.md). Menu items provide starting points for using your add-on, but you must design them to take into account the add-on [authorization lifecycle](./editor-auth-lifecycle.md#the_complete_lifecycle).
- [Sidebars and dialogs](./dialogs.md) are created using Apps Script's [HTML service](../../../apps-script/reference/html.md). This service lets you define the interface structure and appearance using HTML and CSS. See [Create and serve HTML](../../../apps-script/guides/html.md) for more details.
	- Set up [client-server communication](../../../apps-script/guides/html/communication.md) calls so user actions in the interface result in actions taken on the Google servers where the editor file resides or vice-versa.
		- Apps Script also provides a [template syntax](../../../apps-script/guides/html/templates.md) to make building dynamic interfaces easier.
- When building HTML interfaces for Editor add-ons, use the [Editor add-on CSS package](../guides/css.md) to help your add-on look and feel like the Google Workspace editors they extend.
