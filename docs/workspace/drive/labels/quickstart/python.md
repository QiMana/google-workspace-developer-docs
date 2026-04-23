---
source: https://developers.google.com/workspace/drive/labels/quickstart/python
root: workspace
fetched_at: 2026-04-23T15:28:07.357Z
---

# Python quickstart

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

Create a Python command-line application that makes requests to the Drive Labels API.

## Objectives

- Set up your environment.
- Install the client library.
- Set up the sample.
- Run the sample.

## Prerequisites

- Python 2.6 or greater
- The [pip](https://pypi.python.org/pypi/pip) package management tool
- [A Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- A Google Account.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Drive Labels API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=drivelabels.googleapis.com)

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
	pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
	```

For alternate installation options, refer to the Python library's [Installation section](https://developers.google.com/api-client-library/python/start/installation#installation).

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
	SCOPES = ['https://www.googleapis.com/auth/drive.labels.readonly']
	def main():
	  """Shows basic usage of the Drive Labels API.
	    Prints the first page of the customer's Labels.
	  """
	  creds = None
	  # The file token.json stores the user's access and refresh tokens, and is
	  # created automatically when the authorization flow completes for the first
	  # time.
	  if os.path.exists('token.json'):
	    creds = Credentials.from_authorized_user_file('token.json', SCOPES)
	  # If there are no (valid) credentials available, let the user log in.
	  if not creds or not creds.valid:
	    if creds and creds.expired and creds.refresh_token:
	      creds.refresh(Request())
	    else:
	      flow = InstalledAppFlow.from_client_secrets_file('credentials.json',
	                                                      SCOPES)
	      creds = flow.run_local_server(port=0)
	    # Save the credentials for the next run
	    with open('token.json', 'w') as token:
	      token.write(creds.to_json())
	  try:
	    service = build('drivelabels', 'v2', credentials=creds)
	    response = service.labels().list(
	        view='LABEL_VIEW_FULL').execute()
	    labels = response['labels']
	    if not labels:
	      print('No Labels')
	    else:
	      for label in labels:
	        name = label['name']
	        title = label['properties']['title']
	        print(u'{0}:\t{1}'.format(name, title))
	  except HttpError as error:
	    # TODO (developer) - Handle errors from Labels API.
	    print(f'An error occurred: {error}')
	if __name__ == '__main__':
	  main()
	```

## Run the sample

1. In your working directory, build and run the sample:
	```
	python quickstart.py
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, you're prompted to sign in. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

You have successfully created your first Python application that makes requests to the Drive Labels API.

## Next steps

- [Troubleshoot authentication and authorization issues](https://developers.google.com/workspace/drive/labels/troubleshoot-authentication-authorization)
- [Google APIs Client for Python documentation](https://developers.google.com/api-client-library/python)
