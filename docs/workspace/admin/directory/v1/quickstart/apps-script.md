---
source: https://developers.google.com/workspace/admin/directory/v1/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:23:52.207Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](../../../../../apps-script/overview.md) that makes requests to the Directory API.

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
 * Lists users in a Google Workspace domain.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list
 */
function listUsers() {
  const optionalArgs = {
    customer: "my_customer",
    maxResults: 10,
    orderBy: "email",
  };
  if (!AdminDirectory || !AdminDirectory.Users) {
    throw new Error("Enable the AdminDirectory Advanced Service.");
  }
  const response = AdminDirectory.Users.list(optionalArgs);
  const users = response.users;
  if (!users || users.length === 0) {
    console.log("No users found.");
    return;
  }
  // Print the list of user's full name and email
  console.log("Users:");
  for (const user of users) {
    if (user.primaryEmail) {
      if (user.name?.fullName) {
        console.log("%s (%s)", user.primaryEmail, user.name.fullName);
      } else {
        console.log("%s", user.primaryEmail);
      }
    }
  }
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Directory API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Admin Directory API and click **Add**.

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
- [Directory API developer guides](../guides.md)
- [Directory API reference documentation](../../reference/rest.md)
