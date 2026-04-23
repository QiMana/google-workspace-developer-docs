---
source: https://developers.google.com/workspace/drive/picker/guides/overview-desktop
root: workspace
fetched_at: 2026-04-23T15:28:19.151Z
---

# Overview of desktop and mobile apps

The Google Picker API is a way to let users select or upload Google Drive files. Users can grant permission to your desktop and mobile apps to access their Drive data, providing a secure and authorized way to interact with their files.

The Google Picker acts as a "File Open" dialog for files stored on Drive and has several features:

- A similar look and feel to the [Google Drive UI](https://drive.google.com/).
- Several views showing previews and thumbnail images of Drive files.
- A redirect to the Google Picker within a new tab in the user's default browser.

Note that the Google Picker doesn't allow users to organize, move, or copy files from one folder to another. To manage files, you must use either the [Google Drive API](../../api/guides/about-sdk.md) or the Drive UI.

## Prerequisites

Apps using the Google Picker must abide by all existing [Terms of Service](../../../terms.md). Most importantly, you must correctly identify yourself in your requests.

You must also have a [Google Cloud project](../../../guides/create-project.md).

## Set up your environment

To start using the Google Picker API, you must set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Picker API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=picker.googleapis.com)

### Create an API key

An API key is a long string containing upper and lower case letters, numbers, underscores, and hyphens, such as `AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe`. This authentication method is used to anonymously access publicly available data, such as Google Workspace files shared using the "Anyone on the Internet with this link" sharing setting. For more details, see [Manage API keys](https://cloud.google.com/docs/authentication/api-keys).

To create an API key:

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/apis/credentials)
2. Click **Create credentials** \> **API key**.
3. Your new API key is displayed.
	- Click Copy to copy your API key for use in your app's code. The API key can also be found in the "API Keys" section of your project's credentials.
		- To prevent unauthorized use, we recommend restricting where and for which APIs the API key can be used. For more details, see [Add API restrictions](https://cloud.google.com/docs/authentication/api-keys#adding-api-restrictions).

### Authorize credentials for a desktop app

To authenticate end users and access user data in your app, you need to create one or more OAuth 2.0 Client IDs. A client ID is used to identify a single app to Google's OAuth servers. If your app runs on multiple platforms, you must create a separate client ID for each platform.
1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Desktop app**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

For apps to get authorization to files previously granted to them, you must use the following steps:

1. You must obtain an OAuth 2.0 token with the `drive.file`, `drive`, or `drive.readonly` scope using these instructions: [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2). For more information on scopes, see [Choose Google Drive API scopes](../../api/guides/api-specific-auth.md).
2. Pass the OAuth 2.0 token to the Drive API to read and modify files in which the user previously granted access.

## Display the Google Picker

The Google Picker API for desktop apps redirects to the Google Picker within a new tab in the user's default browser. Once the user grants access and picks the relevant files, the Google Picker returns to the calling app through the callback URL. To have the Google Picker API open in a client page, use the Google Picker API for web apps instead. For more information, see [Overview of web apps](./overview.md).

To allow users to grant access to additional files or to pick files for use in your desktop app flow, follow these steps:

1. Request access to the `drive.file` scope to open the OAuth 2.0 access page in a new browser tab using these instructions: [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2). For more information on scopes, see [Choose Google Drive API scopes](../../api/guides/api-specific-auth.md).
	Note that only the `drive.file` scope is permitted for desktop apps and it can't be combined with any other scope.
2. The URL for the new browser tab accepts all [standard OAuth query string parameters](https://developers.google.com/identity/protocols/oauth2/native-app#step-2:-send-a-request-to-googles-oauth-2.0-server).
	You must append the `prompt` and `trigger_onepick` URL parameters to your OAuth 2.0 authorization URL request:
	| Parameter | Description | Status |
	| --- | --- | --- |
	| `prompt=consent` | Prompt for file access. | Required |
	| `trigger_onepick=true` | Enable the Google Picker. | Required |
	You can also customize the Google Picker with several optional parameters:
	| Parameter | Description | Status |
	| --- | --- | --- |
	| `allow_multiple=true` | If true, allow the user to select multiple files. | Optional |
	| `mimetypes=MIMETYPES` | A comma-separated list of [MIME types](../../api/guides/mime-types.md) to filter the search results. If not set, files for all MIME types are displayed in the view. | Optional |
	| `file_ids=FILE_IDS` | A comma-separated list of file IDs to filter the search results. If not set, all files are displayed in the view. | Optional |
	| `allow_folder_selection=true` | If true, allow the user to also select folders. | Optional |
	The following sample shows an OAuth 2.0 authorization URL request:
	```
	https://accounts.google.com/o/oauth2/v2/auth? \
	client_id=CLIENT_ID \
	&scope=https://www.googleapis.com/auth/drive.file \
	&redirect_uri=REDIRECT_URI \
	&response_type=code \
	&access_type=offline \
	&prompt=consent \
	&trigger_onepick=true
	```
	Replace the following:
	- `CLIENT_ID`: Your desktop app's client ID.
		- `REDIRECT_URI`: Where the authorization server redirects the user's browser after successful authentication. For example, `https://www.cymbalgroup.com/oauth2callback`.
	The specified `redirect_uri` must be a public HTTPS URL. If you want to use a custom protocol or localhost URL for your `redirect_uri`, you must use a public HTTPS URL that then redirects to the custom protocol or localhost URL.
3. Once the user grants access and picks the relevant files, OAuth redirects to the `redirect_uri` specified in the request with the following URL parameters appended:
	- `picked_file_ids`: If the user granted access and picked files, a comma-separated list of selected file IDs.
		- `code`: The access token or access code based on the `response_type` parameter set in the request. This parameter includes a new [authorization code](https://developers.google.com/identity/protocols/oauth2#installed).
		- `scope`: The scope(s) included in the request.
		- `error`: If the user cancelled the request within the consent flow, an error is shown.
	The following sample shows an OAuth 2.0 authorization URL response:
	```
	https://REDIRECT_URI?picked_file_ids=PICKED_FILE_IDS&code=CODE&scope=SCOPES
	```
4. Apps must exchange the authorization code from step 3 for a new OAuth 2.0 token. For more information, see [Exchange authorization code for refresh and access tokens](https://developers.google.com/identity/protocols/oauth2/web-server#exchange-authorization-code).
5. Apps can then use the file IDs from the URL parameter in step 3 and OAuth 2.0 token obtained in step 4 to call the Drive API. For more information, see [Google Drive API overview](../../api/guides/about-sdk.md).

## Use the Google Picker with Android

You can also use Google Picker in your Android mobile app.

### Authorize credentials for a mobile app

To use Google Picker in your Android app, you need to authorize users using OAuth 2.0, similar to [desktop apps](#authorize-credentials). For details on Android authentication, see [Authorize access to Google user data](https://developer.android.com/identity/authorization).

To display Google Picker during authorization, create an [`AuthorizationRequest`](https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/AuthorizationRequest) and use `PICKER_OAUTH_TRIGGER` with [`AuthorizationRequest.ResourceParameter`](https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/AuthorizationRequest.ResourceParameter).

When building the `AuthorizationRequest`:

- Use the `https://www.googleapis.com/auth/drive.file` scope.
- Call [`setOptOutIncludingGrantedScopes(true)`](https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/AuthorizationRequest.Builder#public-authorizationrequest.builder-setoptoutincludinggrantedscopes-boolean-optoutincludinggrantedscopes) to ensure the token returned is only for the `https://www.googleapis.com/auth/drive.file` scope and not for any previously granted scopes.
- Set the `AuthorizationRequest.Prompt` field to [`CONSENT`](https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/AuthorizationRequest.Prompt#public-static-final-int-consent) to prompt the user for consent even if it was granted before. This field is only applicable to requests that include resource parameters.
- You can optionally use the bitmap "OR" (`|`) operator to also set the `AuthorizationRequest.Prompt` field to [`SELECT_ACCOUNT`](https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/AuthorizationRequest.Prompt#public-static-final-int-select_account) to let the user select an account before the consent prompt is shown.

### Call the Google Picker

Similar to desktop apps, you can customize the Google Picker with several optional parameters:

- `PICKER_ALLOW_MULTIPLE`: Allows users to select multiple files.
- `PICKER_MIMETYPES`: Returns a comma-separated list of MIME types to filter search results. If not set, files for all MIME types are displayed in the view.
- `PICKER_FILE_IDS`: Returns a comma-separated list of file IDs to filter search results. If not set, all files are displayed in the view.

For more information on the optional parameters in desktop apps, see [Display the Google Picker](#display-picker).

Once the user grants access and picks the relevant files, the [`getTokenResponseParams`](https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/AuthorizationResult#public-bundle-gettokenresponseparams) object of the [`AuthorizationResult`](https://developers.google.com/android/reference/com/google/android/gms/auth/api/identity/AuthorizationResult) resource is returned. If the user granted access, this object contains the `picked_file_ids` value, which is a comma-separated list of selected file IDs.

## Related topics

- [Choose Google Drive API scopes](../../api/guides/api-specific-auth.md)
