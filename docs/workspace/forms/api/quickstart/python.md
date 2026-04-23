---
source: https://developers.google.com/workspace/forms/api/quickstart/python
root: workspace
fetched_at: 2026-04-23T15:28:43.555Z
---

# Python quickstart

Create a Python command-line application that makes requests to the Google Forms API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

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
- [A Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- A Google Account.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Forms API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=forms.googleapis.com)

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](https://developers.google.com/workspace/guides/configure-oauth-consent) guide.

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
	from apiclient import discovery
	from httplib2 import Http
	from oauth2client import client, file, tools
	SCOPES = "https://www.googleapis.com/auth/forms.body"
	DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"
	store = file.Storage("token.json")
	creds = None
	if not creds or creds.invalid:
	  flow = client.flow_from_clientsecrets("client_secrets.json", SCOPES)
	  creds = tools.run_flow(flow, store)
	form_service = discovery.build(
	    "forms",
	    "v1",
	    http=creds.authorize(Http()),
	    discoveryServiceUrl=DISCOVERY_DOC,
	    static_discovery=False,
	)
	# Request body for creating a form
	NEW_FORM = {
	    "info": {
	        "title": "Quickstart form",
	    }
	}
	# Request body to add a multiple-choice question
	NEW_QUESTION = {
	    "requests": [
	        {
	            "createItem": {
	                "item": {
	                    "title": (
	                        "In what year did the United States land a mission on"
	                        " the moon?"
	                    ),
	                    "questionItem": {
	                        "question": {
	                            "required": True,
	                            "choiceQuestion": {
	                                "type": "RADIO",
	                                "options": [
	                                    {"value": "1965"},
	                                    {"value": "1967"},
	                                    {"value": "1969"},
	                                    {"value": "1971"},
	                                ],
	                                "shuffle": True,
	                            },
	                        }
	                    },
	                },
	                "location": {"index": 0},
	            }
	        }
	    ]
	}
	# Creates the initial form
	result = form_service.forms().create(body=NEW_FORM).execute()
	# Adds the question to the form
	question_setting = (
	    form_service.forms()
	    .batchUpdate(formId=result["formId"], body=NEW_QUESTION)
	    .execute()
	)
	# Prints the result to show the question has been added
	get_result = form_service.forms().get(formId=result["formId"]).execute()
	print(get_result)
	```

## Run the sample

1. In your working directory, build and run the sample:
	```
	python3 quickstart.py
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, sign in when prompted. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Your Python application runs and calls the Google Forms API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](https://developers.google.com/workspace/explore)
