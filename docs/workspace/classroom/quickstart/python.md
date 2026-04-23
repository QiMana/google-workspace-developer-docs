---
source: https://developers.google.com/workspace/classroom/quickstart/python
root: workspace
fetched_at: 2026-04-23T15:25:50.728Z
---

# Python quickstart

Create a Python command-line application that makes requests to the Google Classroom API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../guides/auth-overview.md) before [choosing the access credentials](../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

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
- [A Google Cloud project](../../guides/create-project.md).
- A Google for Education account with Google Classroom enabled.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Classroom API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=classroom.googleapis.com)

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../guides/configure-oauth-consent.md) guide.

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
	SCOPES = ["https://www.googleapis.com/auth/classroom.courses.readonly"]
	def main():
	  """Shows basic usage of the Classroom API.
	  Prints the names of the first 10 courses the user has access to.
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
	  try:
	    service = build("classroom", "v1", credentials=creds)
	    # Call the Classroom API
	    results = service.courses().list(pageSize=10).execute()
	    courses = results.get("courses", [])
	    if not courses:
	      print("No courses found.")
	      return
	    # Prints the names of the first 10 courses.
	    print("Courses:")
	    for course in courses:
	      print(course["name"])
	  except HttpError as error:
	    print(f"An error occurred: {error}")
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
	Your Python application runs and calls the Google Classroom API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](../../explore.md)[Previous](./nodejs.md)

[Node.js](./nodejs.md)
