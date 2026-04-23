---
source: https://developers.google.com/workspace/add-ons/concepts/workspace-scopes
root: workspace
fetched_at: 2026-04-23T15:22:42.710Z
---

# Scopes

## Page Summary

- Add-ons require user authorization and request specific permissions called OAuth scopes to access data or act on a user's behalf.
- Scopes are declared in the add-on's manifest and can be viewed in the script project's overview section, with explicit scope definition recommended for better control and security.
- Certain restricted scopes, particularly for Gmail and Editor add-ons, require careful consideration and adherence to specific guidelines for add-on review and publication.
- Google Workspace add-ons have specific scopes tailored to each service, such as temporary access to document content for Editors, access to message metadata for Gmail, and event access for Calendar, requiring developers to choose the appropriate scope for the desired functionality.
- Using sensitive or restricted scopes might necessitate OAuth client verification, and it is crucial to always use the least permissive scopes possible to minimize security risks and ensure user privacy.

Users must authorize add-ons and other applications that access their data or act on their behalf. When a user runs an add-on for the first time, the add-on UI presents an authorization prompt to start the authorization flow.

During this flow, the prompt tells the user what the application wants permission to do. For example, an add-on might want permission to read a user's email message or create events in their calendar. The add-on's script project defines these individual permissions as *OAuth scopes*.

You declare scopes in your [manifest](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests) using URL strings. During the authorization flow, Apps Script presents a human-readable description of the scope to the user. For example, your Google Workspace add-on might use the "Read current message" scope, which is written in your manifest as `https://www.googleapis.com/auth/gmail.addons.current.message.readonly`. During the authorization flow, an add-on with this scope asks the user to allow the add-on to: **View your email messages when the add-on is running**.

The scopes Apps Script uses for its various services overlap with the scopes used by the related API. For example, Apps Script's [Calendar service](https://developers.google.com/apps-script/reference/calendar) uses many of the same scopes as the [Calendar API](https://developers.google.com/workspace/calendar). You can look up the scopes that particular Apps Script service methods require in the Apps Script [reference documentation](https://developers.google.com/apps-script/reference).

## View scopes

You can see the scopes your script project currently requires by doing the following:

1. Open the script project.
2. At the left, click **Overview** .
3. View the scopes under "Project OAuth Scopes."

You can also view the script project's current scopes in the project manifest, under the [`oauthScopes`](https://developers.google.com/apps-script/manifest#Manifest.FIELDS.oauthScopes) field, but only if you have set those scopes [explicitly](#set_explicit_scopes).

## Set explicit scopes

Apps Script automatically determines what scopes a script needs by scanning its code for function calls that require them. For most scripts this is sufficient and saves you time, but for published add-ons you should exercise more direct control of the scopes.

For example, Apps Script might give an add-on script project the very permissive scope `https://mail.google.com` by default. When a user authorizes a script project with this scope, the project is granted full access to the user's Gmail account. For published add-ons, you **must** replace this scope with a more limited set that cover the add-ons's needs and no more.

You can explicitly set the scopes your script project uses by editing its [manifest](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests) file. The manifest field [`oauthScopes`](https://developers.google.com/apps-script/manifest#Manifest.FIELDS.oauthScopes) is an array of all scopes used by the add-on. To set your project's scopes, do the following:

1. [View the scopes your add-on uses](#view_scopes). Determine what changes need to be made, such as using a narrower scope.
2. [Open your add-on's manifest file](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests#editing_a_manifest).
3. Locate the top-level field labeled `oauthScopes`. If it is not present, you can add it.
4. The [`oauthScopes`](https://developers.google.com/apps-script/manifest#Manifest.FIELDS.oauthScopes) field specifies an array of strings. To set the scopes your project uses, replace the contents of this array with the scopes you want it to use. For example, for a Google Workspace add-on that extends Gmail you might have the following:
	```
	{
	  ...
	  "oauthScopes": [
	    "https://www.googleapis.com/auth/gmail.addons.current.message.metadata",
	    "https://www.googleapis.com/auth/userinfo.email"
	  ],
	  ...
	}
	```
5. Save the manifest file changes.

## OAuth verification

Using certain sensitive OAuth scopes may require that your add-on go through [OAuth client verification](https://developers.google.com/apps-script/guides/client-verification) before you can publish it. For more information, see the following guides:

- [OAuth client verification for Apps Script](https://developers.google.com/apps-script/guides/client-verification)
- [Unverified apps](https://support.google.com/cloud/answer/7454865)
- [OAuth verification FAQ](https://support.google.com/cloud/answer/9110914)
- [Google APIs Service: User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)

## Restricted scopes

Certain scopes are *restricted* and subject to additional rules that help protect user data. If you intend to publish a Gmail or Editor add-on that uses one or more restricted scopes, the add-on must comply with all the specified restrictions before it can be published.

Review the [full list of restricted scopes](https://support.google.com/cloud/answer/9110914#restricted-scopes) before you attempt to publish. If your add-on uses any of them, you must comply with the [Additional requirements for specific API scopes](https://developers.google.com/terms/api-services-user-data-policy#additional-requirements-for-specific-api-scopes) prior to publishing.

The [Google Workspace Developer Tools extension](https://marketplace.visualstudio.com/items?itemName=google-workspace.google-workspace-developer-tools) for Visual Studio Code provides diagnostic information for all scopes including the scope's description and whether it is sensitive or restricted.

## Choose scopes for Google Workspace add-ons

The following sections provide scopes that are commonly used for Google Workspace add-ons.

### Editor scopes

The following frequently-used scopes for Google Workspace add-ons extend Google Docs, Google Sheets, and Google Slides.

<table><tbody><tr><th colspan="2">Scope</th></tr><tr><td>Current Docs file access</td><td><code>https://www.googleapis.com/auth/documents.currentonly</code><p><b>Required if the add-on accesses the Google Apps Script Docs API.</b> Grants temporary access to the open document's content.</p></td></tr><tr><td>Current Sheets file access</td><td><code>https://www.googleapis.com/auth/spreadsheets.currentonly</code><p><b>Required if the add-on accesses the Apps Script Sheets API.</b> Grants temporary access to the open spreadsheet's content.</p></td></tr><tr><td>Current Slides file access</td><td><code>https://www.googleapis.com/auth/presentations.currentonly</code><p><b>Required if the add-on accesses the Apps Script Slides API.</b> Grants temporary access to the open presentation's content.</p></td></tr><tr><td>Per-file access</td><td><code>https://www.googleapis.com/auth/drive.file</code><p><b>Required for the add-on to use <a href="https://developers.google.com/apps-script/manifest/editor-addons#onfilescopegrantedtrigger"><code>onFileScopeGrantedTrigger</code></a> and if the add-on accesses Docs, Sheets, Slides, or Drive API</b>. Grants per-file access to files created or opened by the app using the Apps Script <a href="https://developers.google.com/apps-script/advanced/drive">Advanced Google Drive Service</a>. This doesn't allow similar actions using the basic <a href="https://developers.google.com/apps-script/reference/drive">Drive service</a>. File authorization is granted on a per-file basis and is revoked when the user deauthorizes the app.</p></td></tr></tbody></table>

### Gmail

There are scopes created specifically for Google Workspace add-ons to help protect user Gmail data. Add these scopes explicitly to your add-on manifest, along with any others required.

The following table lists frequently-used scopes for Google Workspace add-ons that extend Gmail. If your add-on extends Gmail, you must add any scopes labeled **Required** to your Google Workspace add-on manifest.

Replace the broad `https://mail.google.com` scope with a narrower set of scopes that allow the interactions your add-on needs.

<table><tbody><tr><th colspan="2">Scope</th></tr><tr><td>Create new drafts</td><td><code>https://www.googleapis.com/auth/gmail.addons.current.action.compose</code><p><b>Required if the add-on uses <a href="https://developers.google.com/workspace/add-ons/gmail/extending-compose-ui#compose_trigger_function">compose action triggers</a>.</b> Allows the add-on to temporarily create new drafts messages and replies. See <a href="https://developers.google.com/workspace/add-ons/gmail/compose">Composing draft messages</a> for details; this scope is often used with [compose actions] (/workspace/add-ons/gmail/extending-compose-ui). Requires an access token.</p></td></tr><tr><td>Read open message metadata</td><td><code>https://www.googleapis.com/auth/gmail.addons.current.message.metadata</code><p>Grants temporary access to the open message's metadata (such as the subject or recipients). Doesn't allow reading of message content and requires an access token.</p><p><b>Required if the add-on uses metadata in compose action triggers.</b> For <a href="https://developers.google.com/workspace/add-ons/gmail/extending-compose-ui">compose actions</a>, this scope is required if a compose trigger needs access to metadata. In practice, this scope lets a compose trigger access recipient lists (to:, cc:, and bcc:) of a reply email draft.</p></td></tr><tr><td>Read open message content</td><td><code>https://www.googleapis.com/auth/gmail.addons.current.message.action</code><p>Grants access to the open message's content upon user interaction, such as when selecting an add-on menu item. Requires an access token.</p></td></tr><tr><td>Read open thread content</td><td><code>https://www.googleapis.com/auth/gmail.addons.current.message.readonly</code><p>Grants temporary access to the open message's metadata and content. Also grants access to the content of other messages in the open thread. Requires an access token.</p></td></tr><tr><td>Read any message content and metadata</td><td><code>https://www.googleapis.com/auth/gmail.readonly</code><p>Read any email metadata and content, including the open message. Required if you need to read information about other messages, such as when conducting a search query or reading an entire mail thread.</p></td></tr></tbody></table>

### Google Calendar scopes

The following table lists frequently-used scopes for Google Workspace add-ons that extend Google Calendar.

<table><tbody><tr><th colspan="2">Scope</th></tr><tr><td>Access event metadata</td><td><code>https://www.googleapis.com/auth/calendar.addons.execute</code><p><b>Required if the add-on accesses Calendar event metadata.</b> Allows the add-on to access event metadata.</p></td></tr><tr><td>Read user-generated event data</td><td><code>https://www.googleapis.com/auth/calendar.addons.current.event.read</code><p><b>Required if the add-on needs to read user-generated event data.</b> Allows the add-on to access user-generated event data. This data is only available if the <a href="https://developers.google.com/apps-script/manifest/calendar-addons"><code>addOns.calendar.eventAccess</code> manifest field</a> is set to <code>READ</code> or <code>READ_WRITE</code>.</p></td></tr><tr><td>Write user-generated event data</td><td><code>https://www.googleapis.com/auth/calendar.addons.current.event.write</code><p><b>Required if the add-on needs to write user-generated event data.</b> Allows the add-on to edit user-generated event data. This data is only available if the <a href="https://developers.google.com/apps-script/manifest/calendar-addons"><code>addOns.calendar.eventAccess</code> manifest field</a> is set to <code>WRITE</code> or <code>READ_WRITE</code>.</p></td></tr></tbody></table>

### Google Chat scopes

To call the Google Chat API, authenticate as the [Google Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) or as the [Google Chat app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). Each type of authentication requires different scopes, and not all Chat API methods support app authentication.

To learn more about Chat scopes and authentication types, see the Chat API [Authentication and authorization overview](https://developers.google.com/workspace/chat/authenticate-authorize)

The following table shows frequently-used Chat API methods and scopes based on the supported authentication types:

<table><thead><tr><th>Method</th><th><a href="https://developers.google.com/chat/api/guides/auth/users">User authentication</a> supported</th><th><a href="https://developers.google.com/chat/api/guides/auth/service-accounts">App authentication</a> supported</th><th colspan="2">Authorization scopes supported</th></tr></thead><tbody><tr><td><a href="https://developers.google.com/chat/api/guides/v1/messages/create">Send a message</a></td><td></td><td></td><td colspan="2">With <a href="https://developers.google.com/chat/api/guides/auth/users">User authentication</a>:<ul><li><code>chat.messages.create</code></li><li><code>chat.messages</code></li><li><code>chat.import</code></li></ul>With <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">App authentication</a>:<ul><li><code>chat.bot</code></li></ul></td></tr><tr><td><a href="https://developers.google.com/chat/api/guides/v1/spaces/create">Create a space</a></td><td></td><td></td><td colspan="2">With <a href="https://developers.google.com/chat/api/guides/auth/users">User authentication</a>:<ul><li><code>chat.spaces.create</code></li><li><code>chat.spaces</code></li><li><code>chat.import</code></li></ul>With <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">App authentication</a> and <a href="https://support.google.com/a?p=chat-app-auth">administrator approval</a> (available in <a href="https://developers.google.com/workspace/preview">Developer Preview</a>):<ul><li><code>chat.app.spaces.create</code></li><li><code>chat.app.spaces</code></li></ul></td></tr><tr><td><a href="https://developers.google.com/chat/api/guides/v1/spaces/set-up">Create and add members to a space</a></td><td></td><td>—</td><td colspan="2">With <a href="https://developers.google.com/chat/api/guides/auth/users">User authentication</a>:<ul><li><code>chat.spaces.create</code></li><li><code>chat.spaces</code></li></ul></td></tr><tr><td><a href="https://developers.google.com/chat/api/guides/v1/members/create">Add a user to a space</a></td><td></td><td></td><td colspan="2">With <a href="https://developers.google.com/chat/api/guides/auth/users">User authentication</a>:<ul><li><code>chat.memberships</code></li><li><code>chat.memberships.app</code></li><li><code>chat.import</code></li></ul>With <a href="https://developers.google.com/chat/api/guides/auth/service-accounts">App authentication</a> and <a href="https://support.google.com/a?p=chat-app-auth">administrator approval</a> (available in <a href="https://developers.google.com/workspace/preview">Developer Preview</a>):<ul><li><code>chat.app.memberships</code></li></ul></td></tr><tr><td><a href="https://developers.google.com/chat/api/reference/rest/v1/spaces.spaceEvents/list">List activities or events from a Chat space</a></td><td></td><td>—</td><td colspan="2">With <a href="https://developers.google.com/chat/api/guides/auth/users">User authentication</a>, you must use a scope for each <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.event_type">event type</a> included in the request:<ul><li>For events about messages:</li><ul><li><code>chat.messages</code></li><li><code>chat.messages.readonly</code></li></ul><li>For events about reactions:</li><ul><li><code>chat.messages.reactions</code></li><li><code>chat.messages.reactions.readonly</code></li><li><code>chat.messages</code></li><li><code>chat.messages.readonly</code></li></ul><li>For events about memberships:</li><ul><li><code>chat.memberships</code></li><li><code>chat.memberships.readonly</code></li></ul><li>For events about the space:</li><ul><li><code>chat.spaces</code></li><li><code>chat.spaces.readonly</code></li></ul></ul></td></tr></tbody></table>

### Google Drive scopes

The following table lists frequently-used scopes for Google Workspace add-ons that extend Google Drive.

<table><tbody><tr><th colspan="2">Scope</th></tr><tr><td>Read selected item metadata</td><td><code>https://www.googleapis.com/auth/drive.addons.metadata.readonly</code><p><b>Required if the add-on implements a contextual interface triggered when the user selects items in Drive.</b> Allows the add-on to read limited metadata about items a user has selected in Google Drive. The metadata is limited to the item's ID, title, MIME type, icon URL and whether the add-on has permission to access the item.</p></td></tr><tr><td>Per-file access</td><td><code>https://www.googleapis.com/auth/drive.file</code><p><b>Recommended if the add-on needs to access individual Drive files.</b> Grants per-file access to files created or opened by the app using the Apps Script <a href="https://developers.google.com/apps-script/advanced/drive">Advanced Drive Service</a>. This doesn't allow similar actions using the basic <a href="https://developers.google.com/apps-script/reference/drive">Drive service</a>. File authorization is granted on a per-file basis and is revoked when the user deauthorizes the app. See the <a href="https://developers.google.com/workspace/add-ons/drive/drive-actions#request_file_access_for_selected_files">Request file access for selected files example</a>.</p></td></tr></tbody></table>

#### Access tokens

To protect user data, the Gmail scopes used in Google Workspace add-ons grant temporary access to user data. To enable temporary access, call [`GmailApp.setCurrentMessageAccessToken`](https://developers.google.com/apps-script/reference/gmail/gmail-app#setcurrentmessageaccesstokenaccesstoken) using an access token from an [action event object](https://developers.google.com/workspace/add-ons/concepts/actions#action_event_objects).

The access token that enables Gmail scopes isn't the same as the access token returned by `ScriptApp.getOAuthToken`. Use the token provided in the action event object.

The following shows an example of setting an access token to allow access to a message's metadata. The only scope necessary for this example is `https://www.googleapis.com/auth/gmail.addons.current.message.metadata`.

```
function readSender(e) {
  var accessToken = e.gmail.accessToken;
  var messageId = e.gmail.messageId;

  // The following function enables short-lived access to the current
  // message in Gmail. Access to other Gmail messages or data isn't
  // permitted.
  GmailApp.setCurrentMessageAccessToken(accessToken);
  var mailMessage = GmailApp.getMessageById(messageId);
  return mailMessage.getFrom();
}
```

### Other Google Workspace scopes

Your add-on may require additional scopes if it uses other Google Workspace or Apps Script services. In most cases, Apps Script detects these scopes and updates the manifest automatically. When editing your manifest's scope list, don't remove any scopes unless you are replacing them with a narrower alternative.

The following table shows scopes that Google Workspace add-ons often use:

<table><tbody><tr><th colspan="2">Scope</th></tr><tr><td>Read user's email address</td><td><code>https://www.googleapis.com/auth/userinfo.email</code><p>Allows the project to read the current user's email address.</p></td></tr><tr><td>Allow calls to external services</td><td><code>https://www.googleapis.com/auth/script.external_request</code><p>Allows the project to make <a href="https://developers.google.com/apps-script/reference/url-fetch"><code>UrlFetch</code></a> requests. This is also required if the project makes use of the <a href="https://github.com/googlesamples/apps-script-oauth2">OAuth2 for Apps Script</a> library.</p></td></tr><tr><td>Read user's locale and timezone</td><td><code>https://www.googleapis.com/auth/script.locale</code><p>Allows the project to learn the current user's locale and timezone. See <a href="https://developers.google.com/workspace/add-ons/how-tos/access-user-locale">Accessing user locale and timezone</a> for details.</p></td></tr><tr><td>Create triggers</td><td><code>https://www.googleapis.com/auth/script.scriptapp</code><p>Allows the project to create <a href="https://developers.google.com/apps-script/guides/triggers/installable#managing_triggers_programmatically">triggers</a>.</p></td></tr><tr><td>Preview third-party links</td><td><code>https://www.googleapis.com/auth/workspace.linkpreview</code><p><b>Required if the add-on previews links from a third-party service.</b> Allows the project to see a link within a Google Workspace application while the user is interacting with it. To learn more, see <a href="https://developers.google.com/workspace/add-ons/editors/gsao/preview-links">Preview links with smart chips</a>.</p></td></tr><tr><td>Create third-party resources</td><td><code>https://www.googleapis.com/auth/workspace.linkcreate</code><p><b>Required if the add-on creates resources in a third-party service.</b> Allows the project to read the information that users submit to the resource creation form and insert a link to the resource within a Google Workspace application. To learn more, see <a href="https://developers.google.com/workspace/add-ons/editors/gsao/create-insert-resource-smart-chip">Create third-party resources from the @ menu</a>.</p></td></tr></tbody></table>
