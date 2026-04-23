---
source: https://developers.google.com/workspace/add-ons/samples/tutorial-schedule-meetings
root: workspace
fetched_at: 2026-04-23T15:23:09.312Z
---

# Schedule meetings from Google Chat

**Coding level**: Intermediate  
**Duration**: 25 minutes  
**Project type**: [Google Workspace add-on](https://developers.google.com/workspace/add-ons/how-tos/building-workspace-addons) extending [Chat](https://developers.google.com/workspace/add-ons/chat).

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up your environment.
- Set up the script.
- Run the script.

## About this solution

Schedule a meeting in Google Calendar from within a direct message (DM) or a space in Google Chat. You can set specific details for the meeting, such as subject, start time, or duration, or use the default settings for instant meeting scheduling.

![Dialog interface of the Meeting Scheduler Chat app](https://developers.google.com/static/workspace/add-ons/samples/images/meeting-schedule-dialog.png)

![](https://developers.google.com/static/workspace/add-ons/samples/images/meeting-schedule-dialog.png)

### How it works

The Chat app script uses [slash commands](https://developers.google.com/workspace/add-ons/chat/commands) and [dialogs](https://developers.google.com/workspace/add-ons/chat/dialogs) to get meeting details from users and schedule a Calendar event. The script includes default meeting settings that can be customized to fit your needs.

### Apps Script services

This solution uses the following services:

- [Calendar service](https://developers.google.com/apps-script/reference/calendar) –Creates the calendar event from the provided meeting info.
- [Base service](https://developers.google.com/apps-script/reference/base) –Uses the `Session` class to get the script's time zone. Calendar uses this time zone when scheduling the event.
- [Utilities service](https://developers.google.com/apps-script/reference/utilities) –Formats the date for the calendar event and encodes the event ID to help get the event URL.

## Prerequisites

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- A Google Cloud project. To create one, see [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).

## Set up your environment

### Open your Cloud project in the Google Cloud console

If it's not open already, open the Cloud project that you intend to use for this sample:

1. In the Google Cloud console, go to the **Select a project** page.
	[Select a Cloud project](https://console.cloud.google.com/projectselector2)
2. Select the Google Cloud project you want to use. Or, click **Create project** and follow the on-screen instructions. If you create a Google Cloud project, you might need to [turn on billing for the project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project).

### Turn on the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In your Cloud project, turn on the Google Chat API.
	[Turn on the API](https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com)

### Configure the OAuth consent screen

All Chat apps require a consent screen configuration. Configuring your app's OAuth consent screen defines what Google displays to users and registers your app so you can publish it later.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
1. Under **App Information**, in **App name**, enter a name for the app.
	2. In **User support email**, choose a support email address where users can contact you if they have questions about their consent.
	3. Click **Next**.
	4. Under **Audience**, select **Internal**.
	5. Click **Next**.
	6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
	7. Click **Next**.
	8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
	9. Click **Continue**.
	10. Click **Create**.
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](https://developers.google.com/workspace/guides/configure-oauth-consent) guide.

## Set up the script

### Create the Apps Script project

1. Click the following button to open the **Schedule meetings from Google Chat** Apps Script project.  
	[Open the project](https://script.google.com/d/1HwlyQ_VEJwdXqMPQfW_Lx6oUh-Bc46H0YRmuQNK_-Tw645px0Vylucfx/edit?usp=sharing)
2. Click **Overview** .
3. On the overview page, click Make a copy ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg).

### Create a test deployment

1. In your copied Apps Script project, click **Deploy** \> **Test deployments**.
2. Copy the **Head deployment ID** for use in a later step and click **Done**.

### Configure the Chat API

1. In the Google API Console, go to the **Chat API** page.  
	[Go to Chat API](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Click **Configuration**.
3. Configure the Chat API with the following information:
	- **Name**: `Meeting Scheduler`
		- **Avatar URL**: `https://goo.gle/3SfMkjb`.
		- **Description**: `Quickly create meetings.`
		- **Functionality**: Check both boxes to let users message the app directly and add it to spaces.
		- **Connection settings**: Click **Apps Script** and enter the head deployment ID.
		- **Commands**: Add slash commands for `/help` and `/schedule_Meeting` by taking the following steps:
		1. Click **Add command** and configure it with the following information:
			- **Command ID**: `1`.
						- **Description**: `Learn what this app does.`
						- **Command type**: `Slash command`.
						- **Slash command name**: `/help`.
				2. Click **Add command** again and configure it with the following information:
			- **Command ID**: `2`.
						- **Description**: `Schedule a meeting.`
						- **Command type**: `Slash command`.
						- **Slash command name**: `/schedule_Meeting`.
						- Check the **Opens a dialog** box.
		- **Permissions**: Select **Specific people and groups in your domain** and enter your email address.
4. Click **Save**.

## Run the script

1. Open Google Chat.
	[Go to Google Chat](https://chat.google.com/)
2. Click Start a chat .
3. Search for the app's name, `Meeting Scheduler`.
4. Send an initial message, such as `hello`, to prompt authorization.
5. When the app replies, click **Configure** and authorize the app. If the OAuth consent screen displays the warning, **This app isn't verified**, continue by selecting **Advanced** \> **Go to {Project Name} (unsafe)**.
6. Send `/schedule_Meeting` to the app.
7. In the dialog, add at least one invitee email address. You can update the other fields or use the default entries.
8. Click **Submit**.
9. To view the meeting, click **Open Calendar event**.

## Review the code

Click to review the Apps Script code for this solution hosted on GitHub:

[View on GitHub](https://github.com/googleworkspace/add-ons-samples/tree/main/apps-script/chat/schedule-meetings)

## Next steps

- [Extend Chat](https://developers.google.com/workspace/add-ons/chat)
- [Build a Google Chat app with Apps Script](https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script)
