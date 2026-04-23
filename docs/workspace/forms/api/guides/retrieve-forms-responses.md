---
source: https://developers.google.com/workspace/forms/api/guides/retrieve-forms-responses
root: workspace
fetched_at: 2026-04-23T15:28:40.393Z
---

# Retrieve forms and responses

The Google Forms API lets you retrieve form content, settings and metadata, and the end-user form responses. This page describes how to perform these tasks.

## Before you begin

Perform the following tasks before proceeding with the tasks on this page:

- Complete authorization/authentication and credentials setup in the Early Adopter Program instructions.

## Retrieve form contents and metadata

To retrieve the content, settings, and metadata of a form, call the [`forms.get()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/get) method with the form ID.

### Python

```
from apiclient import discovery
from httplib2 import Http
from oauth2client import client, file, tools

SCOPES = "https://www.googleapis.com/auth/forms.body.readonly"
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"

store = file.Storage("token.json")
creds = None
if not creds or creds.invalid:
  flow = client.flow_from_clientsecrets("client_secrets.json", SCOPES)
  creds = tools.run_flow(flow, store)
service = discovery.build(
    "forms",
    "v1",
    http=creds.authorize(Http()),
    discoveryServiceUrl=DISCOVERY_DOC,
    static_discovery=False,
)

# Prints the title of the sample form:
form_id = "<YOUR_FORM_ID>"
result = service.forms().get(formId=form_id).execute()
print(result)
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

// TODO: Replace with a valid form ID.
const formID = '<YOUR_FORM_ID>';

/**
 * Retrieves the content of a form.
 */
async function getForm() {
  // Authenticate with Google and get an authorized client.
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.body.readonly',
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth,
  });

  // Get the form content.
  const result = await formsClient.forms.get({formId: formID});

  console.log(result.data);
  return result.data;
}
```

## Retrieve all form responses

To retrieve all of the responses from a form, call the [`forms.responses.list()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses/list) method with the form ID.

### Python

```
from apiclient import discovery
from httplib2 import Http
from oauth2client import client, file, tools

SCOPES = "https://www.googleapis.com/auth/forms.responses.readonly"
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"

store = file.Storage("token.json")
creds = None
if not creds or creds.invalid:
  flow = client.flow_from_clientsecrets("client_secrets.json", SCOPES)
  creds = tools.run_flow(flow, store)
service = discovery.build(
    "forms",
    "v1",
    http=creds.authorize(Http()),
    discoveryServiceUrl=DISCOVERY_DOC,
    static_discovery=False,
)

# Prints the responses of your specified form:
form_id = "<YOUR_FORM_ID>"
result = service.forms().responses().list(formId=form_id).execute()
print(result)
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

// TODO: Replace with a valid form ID.
const formID = '<YOUR_FORM_ID>';

/**
 * Retrieves all responses from a form.
 */
async function getAllResponses() {
  // Authenticate with Google and get an authorized client.
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth,
  });

  // Get the list of responses for the form.
  const result = await formsClient.forms.responses.list({
    formId: formID,
  });

  console.log(result.data);
  return result.data;
}
```

## Retrieve a single form response

To retrieve a specific response from a form, call the [`forms.responses.get()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses/get) method with the form ID and the response ID.

### Python

```
from apiclient import discovery
from httplib2 import Http
from oauth2client import client, file, tools

SCOPES = "https://www.googleapis.com/auth/forms.responses.readonly"
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"

store = file.Storage("token.json")
creds = None
if not creds or creds.invalid:
  flow = client.flow_from_clientsecrets("client_secrets.json", SCOPES)
  creds = tools.run_flow(flow, store)
service = discovery.build(
    "forms",
    "v1",
    http=creds.authorize(Http()),
    discoveryServiceUrl=DISCOVERY_DOC,
    static_discovery=False,
)

# Prints the specified response from your form:
form_id = "<YOUR_FORM_ID>"
response_id = "<YOUR_RESPONSE_ID>"
result = (
    service.forms()
    .responses()
    .get(formId=form_id, responseId=response_id)
    .execute()
)
print(result)
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

// TODO: Replace with a valid form ID.
const formID = '<YOUR_FORM_ID>';
// TODO: Replace with a valid response ID.
const responseID = '<YOUR_RESPONSE_ID>';

/**
 * Retrieves a single response from a form.
 */
async function getSingleResponse() {
  // Authenticate with Google and get an authorized client.
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth,
  });

  // Get the specified response from the form.
  const result = await formsClient.forms.responses.get({
    formId: formID,
    responseId: responseID,
  });

  console.log(result.data);
  return result.data;
}
```
