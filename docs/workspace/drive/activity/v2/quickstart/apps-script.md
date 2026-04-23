---
source: https://developers.google.com/workspace/drive/activity/v2/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:27:26.908Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](../../../../../apps-script/overview.md) that makes requests to the Google Drive Activity API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../../guides/auth-overview.md) before [choosing the access credentials](../../../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](../../../../../apps-script/guides/services/advanced.md) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

## Objectives

- Configure the environment.
- Create and configure the script.
- Run the script.

## Prerequisites

- A Google Account
- Access to Google Drive

## Create the script

1. Create a new script in the Apps Script editor by going to [script.google.com/create](https://script.google.com/create).
2. Replace the contents of the script editor with the following code:

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

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Google Drive Activity API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Drive Activity API and click **Add**.

## Run the sample

In the Apps Script editor, click **Run**.

The first time you run the sample, it prompts you to authorize access:

1. Click **Review permissions**.
2. Choose an account.
3. Click **Allow**.

The script's execution log appears at the bottom of the window.

## Next steps

- [Google Apps Script Advanced Services documentation](../../../../../apps-script/guides/services/advanced.md)
- [Try the Google Workspace APIs in the APIs explorer](../../../../explore.md)
- [Troubleshoot authentication and authorization issues](../troubleshoot-authentication-authorization.md)
- [Drive Activity API reference documentation](../reference/rest.md)
