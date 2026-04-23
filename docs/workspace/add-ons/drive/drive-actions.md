---
source: https://developers.google.com/workspace/add-ons/drive/drive-actions
root: workspace
fetched_at: 2026-04-23T15:22:43.116Z
---

# Drive actions

## Page Summary

- Actions enable interactive behavior in Google Workspace add-ons, defining responses to user interactions with widgets.
- Drive add-ons use a specialized DriveItemsSelectedActionResponse to manage file access permissions.
- Add-ons need the `https://www.googleapis.com/auth/drive.file` scope to request and utilize Drive file access.
- The provided example demonstrates building a contextual Drive interface, requesting file access, and displaying quota usage upon permission grant.

[`Action`](../concepts/actions.md) objects let you build interactive behavior into Google Workspace add-ons. They define what happens when a user interacts with a widget (for example, a button) in the add-on UI.

An action is attached to a given widget using a [widget handler function](../concepts/actions.md#widget_handler_functions), which also defines the condition that triggers the action. When triggered, the action executes a designated [callback function](../concepts/actions.md#callback_functions). The callback function is passed an [event object](../concepts/event-objects.md) that carries information about the user's client-side interactions. You must implement the callback function and have it return a specific response object.

For example, say you want a button that builds and displays a new card when clicked. For this, you must create a new button widget and use the button widget handler function [`setOnClickAction(action)`](../../../apps-script/reference/card-service/text-button.md#setOnClickAction(Action)) to set a card-building [`Action`](../concepts/actions.md). The [`Action`](../concepts/actions.md) you define specifies an Apps Script callback function that executes when the button is clicked. In this case, you implement the callback function to build the card you want and return an [`ActionResponse`](../../../apps-script/reference/card-service/action-response.md) object. The response object tells the add-on to display the card the callback function built.

This page describes Drive-specific widget actions you can include in your add-on.

## Drive interactions

Google Workspace add-ons that extend Drive can include an additional Drive-specific widget action. This action requires the associated action [callback function](../concepts/actions.md#callback_functions) to return a specialized response object:

| Action attempted | Callback function should return |
| --- | --- |
| [Request file access for selected files](#request_file_access_for_selected_files) | [`DriveItemsSelectedActionResponse`](../../../apps-script/reference/card-service/drive-items-selected-action-response.md) |

To make use of these widget actions and response objects, all of the following must be true:

- The action is triggered while the user has one or more Drive items selected.
- The add-on includes the `https://www.googleapis.com/auth/drive.file` [Drive scope](../concepts/workspace-scopes.md#drive_scopes) in its manifest.

### Request file access for selected files

The following example shows how to build a contextual interface for Google Drive that is triggered when the user selects one or more Drive items. The example tests each item to see if the add-on has been granted access permission; if not, it uses a [`DriveItemsSelectedActionResponse`](../../../apps-script/reference/card-service/drive-items-selected-action-response.md) object to request that permission from the user. Once permission is granted for an item, the add-on displays the Drive quota usage of that item.

```
/**
 * Build a simple card that checks selected items' quota usage. Checking
 * quota usage requires user-permissions, so this add-on provides a button
 * to request \`drive.file\` scope for items the add-on doesn't yet have
 * permission to access.
 *
 * @param e The event object passed containing contextual information about
 *    the Drive items selected.
 * @return {Card}
 */
function onDriveItemsSelected(e) {
  var builder =  CardService.newCardBuilder();

  // For each item the user has selected in Drive, display either its
  // quota information or a button that allows the user to provide
  // permission to access that file to retrieve its quota details.
  e['drive']['selectedItems'].forEach(
    function(item){
      var cardSection = CardService.newCardSection()
          .setHeader(item['title']);

      // This add-on uses the recommended, limited-permission \`drive.file\`
      // scope to get granular per-file access permissions.
      // See: https://developers.google.com/drive/api/v2/about-auth
      if (item['addonHasFileScopePermission']) {
        // If the add-on has access permission, read and display its
        // quota.
        cardSection.addWidget(
          CardService.newTextParagraph().setText(
              "This file takes up: " + getQuotaBytesUsed(item['id'])));
      } else {
        // If the add-on does not have access permission, add a button
        // that allows the user to provide that permission on a per-file
        // basis.
        cardSection.addWidget(
          CardService.newTextParagraph().setText(
              "The add-on needs permission to access this file's quota."));

        var buttonAction = CardService.newAction()
          .setFunctionName("onRequestFileScopeButtonClicked")
          .setParameters({id: item.id});

        var button = CardService.newTextButton()
          .setText("Request permission")
          .setOnClickAction(buttonAction);

        cardSection.addWidget(button);
      }

      builder.addSection(cardSection);
    });

  return builder.build();
}

/**
 * Callback function for a button action. Instructs Drive to display a
 * permissions dialog to the user, requesting \`drive.file\` scope for a
 * specific item on behalf of this add-on.
 *
 * @param {Object} e The parameters object that contains the item's
 *   Drive ID.
 * @return {DriveItemsSelectedActionResponse}
 */
function onRequestFileScopeButtonClicked (e) {
  var idToRequest = e.parameters.id;
  return CardService.newDriveItemsSelectedActionResponseBuilder()
      .requestFileScope(idToRequest).build();
}

/**
 * Use the Advanced Drive Service
 * (See https://developers.google.com/apps-script/advanced/drive),
 * with \`drive.file\` scope permissions to request the quota usage of a
 * specific Drive item.
 *
 * @param {string} itemId The ID of the item to check.
 * @return {string} A description of the item's quota usage, in bytes.
 */
function getQuotaBytesUsed(itemId) {
  try {
    return Drive.Files.get(itemId,{fields: "quotaBytesUsed"})
        .quotaBytesUsed + " bytes";
  } catch (e) {
    return "Error fetching how much quota this item uses. Error: " + e;
  }
}
```
