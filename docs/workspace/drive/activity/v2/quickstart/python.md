---
source: https://developers.google.com/workspace/drive/activity/v2/quickstart/python
root: workspace
fetched_at: 2026-04-23T15:27:29.248Z
---

# Python quickstart

Create a Python command-line application that makes requests to the Google Drive Activity API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../../guides/auth-overview.md) before [choosing the access credentials](../../../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.

## Objectives

- Set up your environment.
- Install the client library.
- Set up the sample.
- Run the sample.

## Prerequisites

To run this quickstart, you need the following prerequisites:

- Python 3.10.7 or greater
- The [pip](https://pypi.python.org/pypi/pip) package management tool
- [A Google Cloud project](../../../../guides/create-project.md).
- A Google Account.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Drive Activity API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=driveactivity.googleapis.com)

### Configure the OAuth consent screen

If you're using a new Google Cloud project to complete this quickstart, configure the OAuth consent screen. If you've already completed this step for your Cloud project, skip to the next section.

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../../../guides/configure-oauth-consent.md) guide.

### Authorize credentials for a desktop application

To authenticate end users and access user data in your app, you need to create one or more OAuth 2.0 Client IDs. A client ID is used to identify a single app to Google's OAuth servers. If your app runs on multiple platforms, you must create a separate client ID for each platform.
1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Desktop app**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."
6. Save the downloaded JSON file as `credentials.json`, and move the file to your working directory.

## Install the Google client library

- Install the Google client library for Python:
	```
	python3 -m pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
	```

## Configure the sample

1. In your working directory, create a file named `quickstart.py`.
2. Include the following code in `quickstart.py`:
	```
	import os.path
	from google.auth.transport.requests import Request
	from google.oauth2.credentials import Credentials
	from google_auth_oauthlib.flow import InstalledAppFlow
	from googleapiclient.discovery import build
	from googleapiclient.errors import HttpError
	# If modifying these scopes, delete the file token.json.
	SCOPES = ["https://www.googleapis.com/auth/drive.activity.readonly"]
	def main():
	  """Shows basic usage of the Drive Activity API.
	  Prints information about the last 10 events that occured the user's Drive.
	  """
	  creds = None
	  # The file token.json stores the user's access and refresh tokens, and is
	  # created automatically when the authorization flow completes for the first
	  # time.
	  if os.path.exists("token.json"):
	    creds = Credentials.from_authorized_user_file("token.json", SCOPES)
	  # If there are no (valid) credentials available, let the user log in.
	  if not creds or not creds.valid:
	    if creds and creds.expired and creds.refresh_token:
	      creds.refresh(Request())
	    else:
	      flow = InstalledAppFlow.from_client_secrets_file(
	          "credentials.json", SCOPES
	      )
	      creds = flow.run_local_server(port=0)
	    # Save the credentials for the next run
	    with open("token.json", "w") as token:
	      token.write(creds.to_json())
	  service = build("driveactivity", "v2", credentials=creds)
	  # Call the Drive Activity API
	  try:
	    results = service.activity().query(body={"pageSize": 10}).execute()
	    activities = results.get("activities", [])
	    if not activities:
	      print("No activity.")
	    else:
	      print("Recent activity:")
	      for activity in activities:
	        time = getTimeInfo(activity)
	        action = getActionInfo(activity["primaryActionDetail"])
	        actors = map(getActorInfo, activity["actors"])
	        targets = map(getTargetInfo, activity["targets"])
	        actors_str, targets_str = "", ""
	        actor_name = actors_str.join(actors)
	        target_name = targets_str.join(targets)
	        # Print the action occurred on drive with actor, target item and timestamp
	        print(f"{time}: {action}, {actor_name}, {target_name}")
	  except HttpError as error:
	    # TODO(developer) - Handleerrors from drive activity API.
	    print(f"An error occurred: {error}")
	# Returns the name of a set property in an object, or else "unknown".
	def getOneOf(obj):
	  for key in obj:
	    return key
	  return "unknown"
	# Returns a time associated with an activity.
	def getTimeInfo(activity):
	  if "timestamp" in activity:
	    return activity["timestamp"]
	  if "timeRange" in activity:
	    return activity["timeRange"]["endTime"]
	  return "unknown"
	# Returns the type of action.
	def getActionInfo(actionDetail):
	  return getOneOf(actionDetail)
	# Returns user information, or the type of user if not a known user.
	def getUserInfo(user):
	  if "knownUser" in user:
	    knownUser = user["knownUser"]
	    isMe = knownUser.get("isCurrentUser", False)
	    return "people/me" if isMe else knownUser["personName"]
	  return getOneOf(user)
	# Returns actor information, or the type of actor if not a user.
	def getActorInfo(actor):
	  if "user" in actor:
	    return getUserInfo(actor["user"])
	  return getOneOf(actor)
	# Returns the type of a target and an associated title.
	def getTargetInfo(target):
	  if "driveItem" in target:
	    title = target["driveItem"].get("title", "unknown")
	    return f'driveItem:"{title}"'
	  if "drive" in target:
	    title = target["drive"].get("title", "unknown")
	    return f'drive:"{title}"'
	  if "fileComment" in target:
	    parent = target["fileComment"].get("parent", {})
	    title = parent.get("title", "unknown")
	    return f'fileComment:"{title}"'
	  return f"{getOneOf(target)}:unknown"
	if __name__ == "__main__":
	  main()
	```

## Run the sample

1. In your working directory, build and run the sample:
	```
	python3 quickstart.py
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, sign in when prompted. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Your Python application runs and calls the Google Drive Activity API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](../../../../explore.md)
