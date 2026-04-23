---
source: https://developers.google.com/apps-script/reference/card-service/response-type
root: apps-script
fetched_at: 2026-04-23T15:19:11.115Z
---

# Enum ResponseType

## Page Summary

- ResponseType is an enum representing the type of Chat app response, exclusively for Google Chat apps.
- ResponseType is called by referencing its parent class, name, and property (e.g., `CardService.Type.DIALOG`).
- Properties of ResponseType include `TYPE_UNSPECIFIED`, `NEW_MESSAGE`, `UPDATE_MESSAGE`, `UPDATE_USER_MESSAGE_CARDS`, `REQUEST_CONFIG`, `DIALOG`, and `UPDATE_WIDGET`.
- Each property has a specific use case, such as posting a new message, updating an existing message, or presenting a dialog.

An enum that represents the type of Chat app response.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

To call an enum, you call its parent class, name, and property. For example, ` CardService.Type.DIALOG`.
