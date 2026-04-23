---
source: https://developers.google.com/apps-script/guides/services/authorization
root: apps-script
fetched_at: 2026-04-23T15:18:24.821Z
---

# Authorization for Google Services

## Page Summary

- Apps Script needs user authorization to access private data from Google services.
- Authorization scopes are determined automatically by scanning the script code.
- Users can revoke a script's access to their data through their Google account settings.
- The user identity a script runs with and the data it can access vary depending on the type of script and how it's run.
- You can use JsDoc annotations like `@OnlyCurrentDoc` to limit authorization requests for certain add-ons or scripts.

Google Apps Script requires user authorization to access private data from [built-in Google services](../services.md) or [advanced Google services](./advanced.md).

## How authorization for Google Services works

When a script requires access to Google services, it follows this general process:

1. **Detection**: Apps Script scans the script to identify which services it uses (for example, `SpreadsheetApp` or `GmailApp`).
2. **Scope determination**: Based on the scan, Apps Script identifies a set of [OAuth scopes](../../concepts/scopes.md) needed for the script to run.
3. **Authorization check**: When the script is run, it checks if the user has already authorized those scopes.
4. **User prompt**: If authorization is missing, a dialog appears asking the user to grant permission.
5. **Execution**: After the script is authorized, it can access the requested data for that user.

## Permissions and types of scripts

The user identity that a script runs with — and thus the data it can access — varies based on the scenario in which the script is run, as shown in the following table.

| Type of script | Script runs as... |
| --- | --- |
| [Standalone](../standalone.md), [Google Workspace add-on](../../../workspace/add-ons/overview.md), or [bound to Google Docs, Google Sheets, Google Slides, or Google Forms](../bound.md) | User at the keyboard |
| [Custom function in a spreadsheet](../sheets/functions.md) | [Anonymous user](../sheets/functions.md#permissions); however, [quota limits](./quotas.md) count against user at the keyboard |
| [Web app](../web.md) or [Google Sites gadget](../web.md) | User at the keyboard or script owner, dependent on [options selected](../web.md#permissions) when deploying the app |
| [Installable trigger](../triggers.md#Installable) | User who created the trigger |

## Grant access rights

![](https://developers.google.com/static/apps-script/images/new-auth-1.png) ![](https://developers.google.com/static/apps-script/images/new-auth-2.png)

Apps Script determines the authorization scopes (like access to your Sheets files or Gmail) automatically, based on a scan of the code. Code that is commented out can still generate an authorization request. If a script needs authorization, an authorization dialog appears when it is run.

Scripts that you have previously authorized also ask for additional authorization if a code change adds new services. Scripts may not request authorization if you access the script as a web app that runs under [the script owner's user identity](../web.md#permissions).

## Revoke access rights

To revoke a script's access to your data, follow these steps:

1. Visit the [Security section of your Google Account](https://myaccount.google.com/security).
2. Under **Your connections to third-party apps & services**, click **See all connections**.
3. Select the script or app you want to revoke access for.
4. Click **Delete all connections you have with APP\_NAME**, then click **Confirm**.

## Limit scope to the current document

If you're building an [add-on](../../../workspace/add-ons/overview.md) or other script that uses the [Spreadsheet service](../../reference/spreadsheet.md), [Document service](../../reference/document.md), [Slides service](../../reference/slides.md), or [Forms service](../../reference/forms.md), you can force the authorization dialog to ask only for access to files in which the add-on or script is used, rather than all of a user's spreadsheets, documents, or forms. To do so, include the following [JSDoc](../../concepts/jsdoc.md) annotation in a file-level comment:

```
/**
 * @OnlyCurrentDoc
 */
```

An opposing annotation, `@NotOnlyCurrentDoc`, is available if your script includes a [library](../libraries.md) that declares `@OnlyCurrentDoc`, but the primary script actually requires access to more than the current file.

## Authorization lifecycle for add-ons

[Add-ons](../../../workspace/add-ons/overview.md) for Sheets, Docs, Slides, and Forms generally follow the same authorization model as scripts that are [bound](../bound.md) to a document. In certain circumstances, however, their `onOpen(e)` and `onEdit(e)` functions run in a no-authorization mode that presents some additional complications. For more information, see the [guide to the add-ons authorization lifecycle](../../../workspace/add-ons/concepts/editor-auth-lifecycle.md#editor_add-on_authorization).

## OAuth application user limits

Applications that use OAuth to access Google user data, including Apps Script projects, are subject to authorization limits. See [OAuth application user limits](https://support.google.com/cloud/answer/9028764) for details.

## Re-authentication behavior with Apps Script

Apps Script does not enforce the [re-authentication frequency](https://support.google.com/a/answer/9368756) that is configured in Google Cloud service settings. This is because Apps Script can run automatically using triggers, which operate without direct user interaction. These automated executions don't trigger the re-authentication prompts. Your Apps Script application doesn't automatically ask you to re-authenticate after the specified time period (for example, 12 hours).

## Set explicit scopes in the manifest

Apps Script automatically determines required scopes by scanning the code for function calls. If you need more control, you can explicitly set the scopes in the project manifest (`appsscript.json`). This is recommended for published scripts to ensure that you're using the minimum required permissions.

For instructions, see [Set explicit scopes](../../concepts/scopes.md#set-explicit).

## Troubleshooting

- **"Authorization required" error when running a trigger**: Triggers must be authorized by the user who created them. If you add code that requires new permissions, you must manually run a function in the script editor once to trigger the authorization dialog.
- **Scopes not updating**: If you've updated your code but the authorization dialog doesn't reflect the changes, try saving the project and refreshing the editor. If you are using explicit scopes in the manifest, ensure you've added the new scope to the `oauthScopes` array.
- **"This app is blocked" or unverified app warning**: This occurs if your script uses sensitive or restricted scopes and hasn't been verified by Google. See [OAuth client verification](../client-verification.md).
