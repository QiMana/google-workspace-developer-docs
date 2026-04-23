---
source: https://developers.google.com/workspace/forms/api/guides/update-form-quiz
root: workspace
fetched_at: 2026-04-23T15:28:44.292Z
---

# Update a form or quiz

To add content to a form or update the settings, metadata, or content, use the `batchUpdate()` method, which groups changes together in a batch so that if one request fails, none of the other (potentially dependent) changes are written.

The `batchUpdate()` method returns a response body, within which is a response for each request. Each response occupies the same index as the corresponding request; for requests with no applicable response, the response at that index will be empty.

## Before you begin

Perform the following tasks before proceeding with the tasks on this page:

- Complete authorization/authentication and credentials setup in the Early Adopter Program instructions.

## Update metadata, settings, or items

The following example shows how to update a form's metadata, but the structure is the same for content and settings—they use the `updateItem` or `updateSettings` requests instead of `updateFormInfo`. For each request, you supply the name of the field to be changed and the updated value, along with an `updateMask` value to limit changes to the fields you've specified.

### REST

To update the form's description, call the [`batchUpdate()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/batchUpdate) method with the form ID and the updated description value.

**Sample request body**

```
"requests": [{
    "updateFormInfo": {
        "info": {
            "description": "Please complete this quiz based on this week's readings for class."
        },
        "updateMask": "description"
    }
}]
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
        "title": "Update metadata example for Forms API!",
    }
}

# Creates the initial Form
createResult = form_service.forms().create(body=form).execute()

# Request body to add description to a Form
update = {
    "requests": [
        {
            "updateFormInfo": {
                "info": {
                    "description": (
                        "Please complete this quiz based on this week's"
                        " readings for class."
                    )
                },
                "updateMask": "description",
            }
        }
    ]
}

# Update the form with a description
question_setting = (
    form_service.forms()
    .batchUpdate(formId=createResult["formId"], body=update)
    .execute()
)

# Print the result to see it now has a description
getresult = form_service.forms().get(formId=createResult["formId"]).execute()
print(getresult)
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

/**
 * Creates a new form and then updates it to add a description.
 */
async function updateForm() {
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

  if (!createResponse.data.formId) throw new Error('Form ID not returned.');

  console.log(\`New formId was: ${createResponse.data.formId}\`);

  // Request body to add a description to the form.
  const update = {
    requests: [
      {
        updateFormInfo: {
          info: {
            description:
              "Please complete this quiz based on this week's readings for class.",
          },
          // The updateMask specifies which fields to update.
          updateMask: 'description',
        },
      },
    ],
  };

  // Send the batch update request to update the form.
  const result = await formsClient.forms.batchUpdate({
    formId: createResponse.data.formId,
    requestBody: update,
  });

  console.log(result.data);
  return result.data;
}
```

## Add an item

The following example shows how to add new content to a form. When adding new content, you must provide a location with an index where new content should be inserted. For example, a location with index `0` will insert the content at the beginning of the form.

### REST

To add an item to the form, call the [`batchUpdate()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/batchUpdate) method with the form ID and the item's information and chosen location.

**Sample request body**

```
"requests": [{
    "createItem": {
        "item": {
            "title": "Homework video",
            "description": "Quizzes in Google Forms",
            "videoItem": {
                "video": {
                     "youtubeUri": "https://www.youtube.com/watch?v=Lt5HqPvM-eI"
                }
            }},
        "location": {
          "index": 0
        }
}]
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
        "title": "Update item example for Forms API",
    }
}

# Creates the initial Form
createResult = form_service.forms().create(body=form).execute()

# Request body to add a video item to a Form
update = {
    "requests": [
        {
            "createItem": {
                "item": {
                    "title": "Homework video",
                    "description": "Quizzes in Google Forms",
                    "videoItem": {
                        "video": {
                            "youtubeUri": (
                                "https://www.youtube.com/watch?v=Lt5HqPvM-eI"
                            )
                        }
                    },
                },
                "location": {"index": 0},
            }
        }
    ]
}

# Add the video to the form
question_setting = (
    form_service.forms()
    .batchUpdate(formId=createResult["formId"], body=update)
    .execute()
)

# Print the result to see it now has a video
result = form_service.forms().get(formId=createResult["formId"]).execute()
print(result)
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

/**
 * Creates a new form and adds a video item to it.
 */
async function addItem() {
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
    throw new Error('Form ID not returned.');
  }

  console.log(\`New formId was: ${createResponse.data.formId}\`);

  // Request body to add a video item to the form.
  const update = {
    requests: [
      {
        createItem: {
          item: {
            title: 'Homework video',
            description: 'Quizzes in Google Forms',
            videoItem: {
              video: {
                youtubeUri: 'https://www.youtube.com/watch?v=Lt5HqPvM-eI',
              },
            },
          },
          // The location to insert the new item.
          location: {
            index: 0,
          },
        },
      },
    ],
  };

  // Send the batch update request to add the item to the form.
  const updateResponse = await formsClient.forms.batchUpdate({
    formId: createResponse.data.formId,
    requestBody: update,
  });

  console.log(updateResponse.data);
  return updateResponse.data;
}
```

## Request order

The [`batchUpdate()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/batchUpdate) method accepts an array of sub-requests such as `createItem` and `updateItem`. Sub-requests are validated one at a time in the order they are provided.

Example: A `batchUpdate` request has a `requests` array with two `createItem` sub-requests. Sub-request A has `location.index` 0 and sub-request B has `location.index` 1. If the `requests` array is `[A, B]`, `batchUpdate` will succeed. If the array is `[B, A]`, `batchUpdate` will fail, since `location.index` 1 is not valid unless the form already contains an item at index 0.
