---
source: https://developers.google.com/workspace/admin/reseller/v1/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:24:45.760Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](../../../../../apps-script/overview.md) that makes requests to the Reseller API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../../guides/auth-overview.md) before [choosing the access credentials](../../../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](../../../../../apps-script/guides/services/advanced.md) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

## Objectives

- Configure the environment.
- Create and configure the script.
- Run the script.

## Prerequisites

- A Google Reseller domain instance.
- A fully executed Google Workspace partner agreement.
- Access to Google Drive

## Create the script

1. Create a new script in the Apps Script editor by going to [script.google.com/create](https://script.google.com/create).
2. Replace the contents of the script editor with the following code:

```
/**
 * List Admin SDK reseller.
 * @see https://developers.google.com/admin-sdk/reseller/reference/rest/v1/subscriptions/list
 */
function listSubscriptions() {
  const optionalArgs = {
    maxResults: 10,
  };
  if (!AdminReseller || !AdminReseller.Subscriptions) {
    throw new Error("Enable the AdminReseller Advanced Service.");
  }
  const response = AdminReseller.Subscriptions.list(optionalArgs);
  const subscriptions = response.subscriptions;
  if (!subscriptions || subscriptions.length === 0) {
    console.log("No subscriptions found.");
    return;
  }
  console.log("Subscriptions:");
  for (const subscription of subscriptions) {
    if (subscription.customerId && subscription.skuId) {
      if (subscription.plan?.planName) {
        console.log(
          "%s (%s, %s)",
          subscription.customerId,
          subscription.skuId,
          subscription.plan.planName,
        );
      } else {
        console.log("%s (%s)", subscription.customerId, subscription.skuId);
      }
    }
  }
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Reseller API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Google Workspace Reseller API and click **Add**.

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
- [Google Workspace Reseller API codelab](../how-tos/prerequisites.md)
- [Google Workspace Reseller API reference documentation](../../reference/rest.md)
