---
source: https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings
root: apps-script
fetched_at: 2026-04-23T15:18:01.277Z
---

# Admin SDK Groups Settings Service

## Page Summary

- The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- This service is an advanced service that must be enabled before use.
- The service uses the same objects, methods, and parameters as the public Admin SDK Groups Settings API.
- Sample code is provided for getting and updating a group's settings.

Apps Script to manage group settings for Google Workspace domains.

The Admin SDK Groups Settings service lets you use the Admin SDK's [Groups Settings API](../../workspace/admin/groups-settings/concepts.md) in Google Apps Script. This API gives administrators of Google Workspace domains (including resellers) the ability to manage the group settings for groups in their Google Workspace account.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the [reference documentation](../../workspace/admin/groups-settings/v1/reference.md) for the Admin SDK Groups Settings API. Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [Admin SDK Groups Settings support guide](../../workspace/admin/support.md).

## Sample code

The following sample code uses [version 1](../../workspace/admin/groups-settings/v1/reference.md) of the API.

### Get a group's settings

This sample gets a group's settings and logs them to the console.

```
/**
 * Gets a group's settings and logs them to the console.
 */
function getGroupSettings() {
  // TODO (developer) - Replace groupId value with yours
  const groupId = "exampleGroup@example.com";
  try {
    const group = AdminGroupsSettings.Groups.get(groupId);
    console.log(JSON.stringify(group, null, 2));
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    console.log("Failed with error %s", err.message);
  }
}
```

### Update a group's settings

This sample shows how a group's settings can be changed. Here, the description is modified, but various other settings can be changed in the same way.

```
/**
 * Updates group's settings. Here, the description is modified, but various
 * other settings can be changed in the same way.
 * @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch
 */
function updateGroupSettings() {
  const groupId = "exampleGroup@example.com";
  try {
    const group = AdminGroupsSettings.newGroups();
    group.description = "Newly changed group description";
    AdminGroupsSettings.Groups.patch(group, groupId);
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    console.log("Failed with error %s", err.message);
  }
}
```
