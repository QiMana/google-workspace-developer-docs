---
source: https://developers.google.com/workspace/forms/api/guides/create-form-quiz
root: workspace
fetched_at: 2026-04-23T15:28:40.672Z
---

# Create a form or quiz

This page describes how to perform these tasks involving forms:

- Create a new form
- Duplicate an existing form
- Convert a form to a quiz

## Before you begin

Do the following tasks before proceeding with the tasks on this page:

- Complete authorization or authentication and credentials setup in the Early Adopter Program instructions.
- Read the [Forms API overview](../guides.md).

## Create a new form

The initial creation of a form only requires a title field. Any other fields in the request are ignored. To build out the content and metadata of a form or make updates, use the `batchUpdate()` method. See [Update a form or quiz](./update-form-quiz.md) for more information.

### REST

Call the [`forms.create()`](../reference/rest/v1/forms/create.md) method with only a title.

**Sample request body**

```
{
  "info": {
      "title": "My new form"
  }
}
```

### Python

```
from apiclient import discovery
from httplib2 import Http
from oauth2client import client, file, tools

SCOPES = "https://www.googleapis.com/auth/drive"
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

form = {
    "info": {
        "title": "My new form",
    },
}
# Prints the details of the sample form
result = form_service.forms().create(body=form).execute()
print(result)
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

/**
 * Creates a new form.
 */
async function createForm() {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth: authClient,
  });

  // The request body to create a new form.
  const newForm = {
    info: {
      title: 'Creating a new form in Node',
    },
  };

  // Send the request to create the form.
  const result = await formsClient.forms.create({
    requestBody: newForm,
  });

  console.log(result.data);
  return result.data;
}
```

## Duplicate an existing form

You can duplicate an existing form with the [Google Drive API](../../../drive/api/guides/about-sdk.md) to make content reuse easier. You can find the form ID in a Forms URL:

`https://docs.google.com/forms/d/FORM_ID/edit`

### REST

Call the Google Drive API's [`files.copy()`](../../../drive/api/reference/rest/v3/files/copy.md) method with the ID of the form you want to copy.

### Python

```
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/drive"]

def main():
  """Shows copy file example in Drive v3 API.
  Prints the name, id and other data of the copied file.
  """
  creds = None
  if os.path.exists("token.json"):
    creds = Credentials.from_authorized_user_file("token.json", SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          "client_secrets.json", SCOPES
      )
      creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open("token.json", "w") as token:
      token.write(creds.to_json())

  service = build("drive", "v3", credentials=creds)

  # Call the Drive v3 API
  origin_file_id = "1ox-6vHFeKpC6mon-tL5ygBC8zpbTnTp76JCZdIg80hA"  # example ID
  copied_file = {"title": "my_copy"}
  results = (
      service.files().copy(fileId=origin_file_id, body=copied_file).execute()
  )
  print(results)

if __name__ == "__main__":
  main()
```

## Convert a form to a quiz

To create a quiz, first create a form as described in [Create a new form](#create_a_new_form), then update the form's settings. The update requires the form ID.

### REST

Call the [`batch.update()`](../reference/rest/v1/forms/batchUpdate.md) method on an existing form to set the `isQuiz` setting to true.

**Sample request body**

```
{
  "requests": [
    {
      "updateSettings": {
        "settings": {
          "quizSettings": {
            "isQuiz": true
          }
        },
        "updateMask": "quizSettings.isQuiz"
      }
    }
  ]
}
```

### Python

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

form = {
    "info": {
        "title": "My new quiz",
    }
}

# Creates the initial form
result = form_service.forms().create(body=form).execute()

# JSON to convert the form into a quiz
update = {
    "requests": [
        {
            "updateSettings": {
                "settings": {"quizSettings": {"isQuiz": True}},
                "updateMask": "quizSettings.isQuiz",
            }
        }
    ]
}

# Converts the form into a quiz
question_setting = (
    form_service.forms()
    .batchUpdate(formId=result["formId"], body=update)
    .execute()
)

# Print the result to see it's now a quiz
getresult = form_service.forms().get(formId=result["formId"]).execute()
print(getresult)
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

/**
 * Creates a new form and then converts it into a quiz.
 */
async function convertForm() {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth: authClient,
  });

  // The initial form to be created.
  const newForm = {
    info: {
      title: 'Creating a new form for batchUpdate in Node',
    },
  };

  // Create the new form.
  const createResponse = await formsClient.forms.create({
    requestBody: newForm,
  });

  if (!createResponse.data.formId) {
    throw new Error('Failed to create form.');
  }

  console.log(\`New formId was: ${createResponse.data.formId}\`);

  // Request body to convert the form to a quiz.
  const updateRequest = {
    requests: [
      {
        updateSettings: {
          settings: {
            quizSettings: {
              isQuiz: true,
            },
          },
          // The updateMask specifies which fields to update.
          updateMask: 'quizSettings.isQuiz',
        },
      },
    ],
  };

  // Send the batch update request to convert the form to a quiz.
  const result = await formsClient.forms.batchUpdate({
    formId: createResponse.data.formId,
    requestBody: updateRequest,
  });

  console.log(result.data);
  return result.data;
}
```

## Next steps

Here are a few next steps you might try:

- To add or update form content, refer to [Update a form or quiz](./update-form-quiz.md).
- To view form information or responses, refer to [Retrieve forms and responses](./retrieve-forms-responses.md).
- To publish the form and manage responders, refer to [Publish and manage responders](./publish-form.md).
