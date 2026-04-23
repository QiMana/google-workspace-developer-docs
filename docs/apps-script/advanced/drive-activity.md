---
source: https://developers.google.com/apps-script/advanced/drive-activity
root: apps-script
fetched_at: 2026-04-23T15:18:05.243Z
---

# Google Drive Activity Service

## Page Summary

- The Google Drive Activity service in Apps Script provides programmatic access to retrieve Google Drive activity information using the Google Drive Activity API.
- This is an advanced service that needs to be enabled before it can be used.
- Detailed information and reference documentation for the service are available, mirroring the public API's objects, methods, and parameters.
- A sample code is provided to demonstrate how to list recent Google Drive activity, including details about the time, actor, action, and target of each activity.

programmatically access information about Google Drive activity.

The Google Drive Activity service lets you use the [Google Drive Activity API](../../workspace/drive/activity/v2.md) in Google Apps Script. This API lets users retrieve information about their Google Drive activity.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the [reference documentation](../../workspace/drive/activity/v2/reference/rest.md) for the Google Drive Activity API. Like all advanced services in Apps Script, the Google Drive Activity service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [Google Drive Activity support guide](../../workspace/drive/activity/v2/support.md).

## Sample code

The following sample code uses [version 2](../../workspace/drive/activity/v2.md) of the API.

### Get activity in Google Drive

This sample gets recent activity in a user's Google Drive and logs information about the time, actor, action, and target of each activity.

```
/**
 * Lists 10 activity for a Drive user.
 * @see https://developers.google.com/drive/activity/v2/reference/rest/v2/activity/query
 */
function listDriveActivity() {
  const request = {
    pageSize: 10,
    // Use other parameter here if needed.
  };
  try {
    // Activity.query method is used Query past activity in Google Drive.
    const response = DriveActivity.Activity.query(request);
    const activities = response.activities;
    if (!activities || activities.length === 0) {
      console.log("No activity.");
      return;
    }
    console.log("Recent activity:");
    for (const activity of activities) {
      // get time information of activity.
      const time = getTimeInfo(activity);
      // get the action details/information
      const action = getActionInfo(activity.primaryActionDetail);
      // get the actor's details of activity
      const actors = activity.actors.map(getActorInfo);
      // get target information of activity.
      const targets = activity.targets.map(getTargetInfo);
      // print the time,actor,action and targets of drive activity.
      console.log("%s: %s, %s, %s", time, actors, action, targets);
    }
  } catch (err) {
    // TODO (developer) - Handle error from drive activity API
    console.log("Failed with an error %s", err.message);
  }
}

/**
 * @param {object} object
 * @return {string}  Returns the name of a set property in an object, or else "unknown".
 */
function getOneOf(object) {
  for (const key in object) {
    return key;
  }
  return "unknown";
}

/**
 * @param {object} activity Activity object.
 * @return {string} Returns a time associated with an activity.
 */
function getTimeInfo(activity) {
  if ("timestamp" in activity) {
    return activity.timestamp;
  }
  if ("timeRange" in activity) {
    return activity.timeRange.endTime;
  }
  return "unknown";
}

/**
 * @param {object} actionDetail The primary action details of the activity.
 * @return {string} Returns the type of action.
 */
function getActionInfo(actionDetail) {
  return getOneOf(actionDetail);
}

/**
 * @param {object} user The User object.
 * @return {string}  Returns user information, or the type of user if not a known user.
 */
function getUserInfo(user) {
  if ("knownUser" in user) {
    const knownUser = user.knownUser;
    const isMe = knownUser.isCurrentUser || false;
    return isMe ? "people/me" : knownUser.personName;
  }
  return getOneOf(user);
}

/**
 * @param {object} actor The Actor object.
 * @return {string} Returns actor information, or the type of actor if not a user.
 */
function getActorInfo(actor) {
  if ("user" in actor) {
    return getUserInfo(actor.user);
  }
  return getOneOf(actor);
}

/**
 * @param {object} target The Target object.
 * @return {string} Returns the type of a target and an associated title.
 */
function getTargetInfo(target) {
  if ("driveItem" in target) {
    const title = target.driveItem.title || "unknown";
    return \`driveItem:"${title}"\`;
  }
  if ("drive" in target) {
    const title = target.drive.title || "unknown";
    return \`drive:"${title}"\`;
  }
  if ("fileComment" in target) {
    const parent = target.fileComment.parent || {};
    const title = parent.title || "unknown";
    return \`fileComment:"${title}"\`;
  }
  return \`${getOneOf(target)}:unknown\`;
}
```
