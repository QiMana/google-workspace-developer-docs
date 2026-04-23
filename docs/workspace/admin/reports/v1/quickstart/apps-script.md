---
source: https://developers.google.com/workspace/admin/reports/v1/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:24:38.520Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](../../../../../apps-script/overview.md) that makes requests to the Admin SDK API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../../guides/auth-overview.md) before [choosing the access credentials](../../../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](../../../../../apps-script/guides/services/advanced.md) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

## Objectives

- Configure the environment.
- Create and configure the script.
- Run the script.

## Prerequisites

- A Google Workspace domain with [API access enabled](https://support.google.com/a/answer/60757).
- A Google Account in that domain with administrator privileges.
- Access to Google Drive

## Create the script

1. Create a new script in the Apps Script editor by going to [script.google.com/create](https://script.google.com/create).
2. Replace the contents of the script editor with the following code:

```
/**
 * List login events for a Google Workspace domain.
 * @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities/list
 */
function listLogins() {
  const userKey = "all";
  const applicationName = "login";
  const optionalArgs = {
    maxResults: 10,
  };
  if (!AdminReports || !AdminReports.Activities) {
    throw new Error("Enable the AdminReports Advanced Service.");
  }
  const response = AdminReports.Activities.list(
    userKey,
    applicationName,
    optionalArgs,
  );
  const activities = response.items;
  if (!activities || activities.length === 0) {
    console.log("No logins found.");
    return;
  }
  // Print login events
  console.log("Logins:");
  for (const activity of activities) {
    if (
      activity.id?.time &&
      activity.actor?.email &&
      activity.events?.[0]?.name
    ) {
      console.log(
        "%s: %s (%s)",
        activity.id.time,
        activity.actor.email,
        activity.events[0].name,
      );
    }
  }
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Admin SDK API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Admin SDK API and click **Add**.

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
- [Troubleshoot authentication and authorization issues](../guides/troubleshoot-authentication-authorization.md)
- [Admin SDK Reports API reference documentation](../../reference/rest.md)
