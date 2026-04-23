---
source: https://developers.google.com/workspace/guides/enable-apis
root: workspace
fetched_at: 2026-04-23T15:30:06.873Z
---

# Enable Google Workspace APIs

## Page Summary

- Before using Google APIs, you must enable them within a Google Cloud project, which can be created if you don't have one.
- You can enable Google APIs through the Google Cloud console by navigating to the Product Library, selecting the desired API, and clicking "Enable".
- Alternatively, use the Google Cloud CLI by running the `gcloud services enable API_SERVICE_ID` command, replacing `API_SERVICE_ID` with the specific API's identifier.
- A comprehensive table lists various Google Workspace APIs along with their corresponding console links and CLI commands for enabling them within your project.
- After enabling the necessary APIs, you should understand the authentication and authorization processes for using Google Workspace APIs.

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project. If you don't already have a Google Cloud project, see [Create a Cloud project](https://developers.google.com/workspace/guides/create-project).

To enable an API in your Cloud project:

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Library** \> **Google Workspace**.
	[Go to API Library](https://console.cloud.google.com/apis/library/browse?filter=category:gsuite)
2. Click the API that you want to turn on.
3. Click **Enable**.
4. To enable more APIs, repeat these steps.

### Google Cloud CLI

1. Install or open the [Google Cloud Command Line Interface (CLI)](https://cloud.google.com/cli).
2. Run the [`services enable`](https://cloud.google.com/sdk/gcloud/reference/services) command, specifying which API service to enable.
	```
	gcloud services enable API_SERVICE_ID
	```

## (Optional) Try Google Workspace APIs in experimental apps

If you're experimenting with Google Workspace, use the following shortcut, which enables popular Google Workspace APIs, and creates OAuth credentials that you can use.

If you're developing an app that accesses user information, you must [configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent) before releasing your app.

Click this button to select or create a Google Cloud project, and automatically enable the Workspace APIs:

Enable the Workspace APIs

In resulting dialog, click **Download client configuration** and save `credentials.json` to your working directory.

[See the Google Workspace APIs explorer](https://developers.google.com/workspace/explore) for a comprehensive list of all the available APIs, and to try specific methods from your browser.

#### Enabled APIs (click to expand)

The button enables the following APIs:

- Admin SDK API
- Apps Script API
- Calendar API
- Chat API
- Classroom API
- Docs API
- Drive API
- Forms API
- Gmail API
- Google Workspace add-ons API
- Google Keep API
- Meet REST API
- Sheets API
- Slides API

## Google Workspace APIs

Use the following Google Cloud console links or the [Google Cloud Command Line Interface (CLI)](https://cloud.google.com/cli) to enable specific Google Workspace APIs in your Cloud project.

| ### Admin SDK API | [Enable Admin SDK API](https://console.cloud.google.com/flows/enableapi?apiid=admin.googleapis.com) `   ``` gcloud services enable admin.googleapis.com ```    ` |
| --- | --- |
| ### Alert Center API | [Enable Alert Center API](https://console.cloud.google.com/flows/enableapi?apiid=alertcenter.googleapis.com) `   ``` gcloud services enable alertcenter.googleapis.com ```    ` |
| ### Apps Script API | [Enable Apps Script API](https://console.cloud.google.com/flows/enableapi?apiid=script.googleapis.com) `   ``` gcloud services enable script.googleapis.com ```    ` |
| ### CalDAV API | [Enable CalDAV API](https://console.cloud.google.com/flows/enableapi?apiid=caldav.googleapis.com) `   ``` gcloud services enable caldav.googleapis.com ```    ` |
| ### Calendar API | [Enable Calendar API](https://console.cloud.google.com/flows/enableapi?apiid=calendar-json.googleapis.com) `   ``` gcloud services enable calendar-json.googleapis.com ```    ` |
| ### Chat API | [Enable Chat API](https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com) `   ``` gcloud services enable chat.googleapis.com ```    ` |
| ### Classroom API | [Enable Classroom API](https://console.cloud.google.com/flows/enableapi?apiid=classroom.googleapis.com) `   ``` gcloud services enable classroom.googleapis.com ```    ` |
| ### Cloud Identity API | [Enable Cloud Identity API](https://console.cloud.google.com/flows/enableapi?apiid=cloudidentity.googleapis.com) `   ``` gcloud services enable cloudidentity.googleapis.com ```    ` |
| ### Cloud Search API | [Enable Cloud Search API](https://console.cloud.google.com/flows/enableapi?apiid=cloudsearch.googleapis.com) `   ``` gcloud services enable cloudsearch.googleapis.com ```    ` |
| ### Docs API | [Enable Docs API](https://console.cloud.google.com/flows/enableapi?apiid=docs.googleapis.com) `   ``` gcloud services enable docs.googleapis.com ```    ` |
| ### Drive API | [Enable Drive API](https://console.cloud.google.com/flows/enableapi?apiid=drive.googleapis.com) `   ``` gcloud services enable drive.googleapis.com ```    ` |
| ### Drive Activity API | [Enable Drive Activity API](https://console.cloud.google.com/flows/enableapi?apiid=driveactivity.googleapis.com) `   ``` gcloud services enable driveactivity.googleapis.com ```    ` |
| ### Drive Labels API | [Enable Drive Labels API](https://console.cloud.google.com/flows/enableapi?apiid=drivelabels.googleapis.com) `   ``` gcloud services enable drivelabels.googleapis.com ```    ` |
| ### Forms API | [Enable Forms API](https://console.cloud.google.com/flows/enableapi?apiid=forms.googleapis.com) `   ``` gcloud services enable forms.googleapis.com ```    ` |
| ### Gmail API | [Enable Gmail API](https://console.cloud.google.com/flows/enableapi?apiid=gmail.googleapis.com) `   ``` gcloud services enable gmail.googleapis.com ```    ` |
| ### Groups Migration API | [Enable Groups Migration API](https://console.cloud.google.com/flows/enableapi?apiid=groupsmigration.googleapis.com) `   ``` gcloud services enable groupsmigration.googleapis.com ```    ` |
| ### Groups Settings API | [Enable Groups Settings API](https://console.cloud.google.com/flows/enableapi?apiid=groupssettings.googleapis.com) `   ``` gcloud services enable groupssettings.googleapis.com ```    ` |
| ### Google Workspace add-ons API | [Enable Google Workspace add-ons API](https://console.cloud.google.com/flows/enableapi?apiid=gsuiteaddons.googleapis.com) `   ``` gcloud services enable gsuiteaddons.googleapis.com ```    ` |
| ### Google Keep API | [Enable Google Keep API](https://console.cloud.google.com/flows/enableapi?apiid=keep.googleapis.com) `   ``` gcloud services enable keep.googleapis.com ```    ` |
| ### Enterprise License Manager API | [Enable Enterprise License Manager API](https://console.cloud.google.com/flows/enableapi?apiid=licensing.googleapis.com) `   ``` gcloud services enable licensing.googleapis.com ```    ` |
| ### Marketplace API | [Enable Marketplace API](https://console.cloud.google.com/flows/enableapi?apiid=appsmarket.googleapis.com) `   ``` gcloud services enable appsmarket.googleapis.com ```    ` |
| ### Marketplace SDK | [Enable Marketplace SDK](https://console.cloud.google.com/flows/enableapi?apiid=appsmarket-component.googleapis.com) `   ``` gcloud services enable appsmarket-component.googleapis.com ```    ` |
| ### Meet REST API | [Enable Meet REST API](https://console.cloud.google.com/flows/enableapi?apiid=meet.googleapis.com) `   ``` gcloud services enable meet.googleapis.com ```    ` |
| ### People API | [Enable People API](https://console.cloud.google.com/flows/enableapi?apiid=people.googleapis.com) `   ``` gcloud services enable people.googleapis.com ```    ` |
| ### Postmaster Tools API | [Enable Postmaster Tools API](https://console.cloud.google.com/flows/enableapi?apiid=gmailpostmastertools.googleapis.com) `   ``` gcloud services enable gmailpostmastertools.googleapis.com ```    ` |
| ### Reseller API | [Enable Reseller API](https://console.cloud.google.com/flows/enableapi?apiid=reseller.googleapis.com) `   ``` gcloud services enable reseller.googleapis.com ```    ` |
| ### Sheets API | [Enable Sheets API](https://console.cloud.google.com/flows/enableapi?apiid=sheets.googleapis.com) `   ``` gcloud services enable sheets.googleapis.com ```    ` |
| ### Slides API | [Enable Slides API](https://console.cloud.google.com/flows/enableapi?apiid=slides.googleapis.com) `   ``` gcloud services enable slides.googleapis.com ```    ` |
| ### Tasks API | [Enable Tasks API](https://console.cloud.google.com/flows/enableapi?apiid=tasks.googleapis.com) `   ``` gcloud services enable tasks.googleapis.com ```    ` |
| ### Vault API | [Enable Vault API](https://console.cloud.google.com/flows/enableapi?apiid=vault.googleapis.com) `   ``` gcloud services enable vault.googleapis.com ```    ` |

## Next step

[Learn how authentication and authorization works](https://developers.google.com/workspace/guides/auth-overview) for Google Workspace APIs.
