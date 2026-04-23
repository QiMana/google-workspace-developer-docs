---
source: https://developers.google.com/workspace/forms/api/guides/publish-form
root: workspace
fetched_at: 2026-04-23T15:28:42.331Z
---

# Publish and manage responders on the form

This page describes how to perform these tasks involving forms:

- Publish the form so that responders can access it
- Find a responder to your form
- Share your form with more responders
- Remove responders from your form
- Check if the form is accepting responses from 'Anyone with link'
- Close a form
- Unpublish a form
- Stop accepting responses to a form
- Check if a form is a legacy form

## Before you begin

Do the following tasks before proceeding with the tasks on this page:

- [Create a form or quiz](./create-form-quiz.md)
- Get the form ID. The form ID is returned in the `formId` field of the response when you create a form using [`forms.create`](../reference/rest/v1/forms/create.md).

## Publish the form so that responders can access it

You can publish an existing form with the [`forms.setPublishSettings`](../reference/rest/v1/forms/setPublishSettings.md) method.

- Call the [`forms.setPublishSettings`](../reference/rest/v1/forms/setPublishSettings.md) method with the form ID.

### REST

**Sample request body**

```
{
  "publishSettings": {
    "isPublished": true,
    "isAcceptingResponses": true
  }
}
```

### Apps Script

```
/**
 * Publishes a Google Form using its URL.
 */
function publishMyForm() {
  // Replace with the URL of your Google Form
  const formUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/edit';

  try {
    const form = FormApp.openByUrl(formUrl);

    // Publish the form. This also enables accepting responses.
    form.setPublished(true);
    Logger.log(\`Form "${form.getTitle()}" published successfully.\`);

    // Optional: Verify the state
    if (form.isPublished()) {
      Logger.log('Form is now published.');
    }
    if (form.isAcceptingResponses()) {
      Logger.log('Form is now accepting responses.')
    }

  } catch (error) {
    Logger.log(\`Error publishing form: ${error}\`);
  }
}
```

### Python

```
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these SCOPES, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/forms.body"]
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"
CLIENT_SECRET_FILE = "client_secrets.json"
TOKEN_FILE = "token.json"

# TODO: Replace with your Form ID
YOUR_FORM_ID = "YOUR_FORM_ID"

def get_credentials():
  """Gets the credentials for the user."""
  creds = None
  if os.path.exists(TOKEN_FILE):
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          CLIENT_SECRET_FILE, SCOPES
      )
      creds = flow.run_local_server(port=8080)
    with open(TOKEN_FILE, "w") as token:
      token.write(creds.to_json())
  return creds

def publish_form():
  """Publishes the form."""
  creds = get_credentials()
  form_service = build(
      "forms",
      "v1",
      credentials=creds,
      discoveryServiceUrl=DISCOVERY_DOC,
      static_discovery=False,
  )

  # Request body for updating publish settings
  set_publish_settings_request = {
      "publishSettings": {
          "publishState": {"isPublished": True, "isAcceptingResponses": True}
      },
  }

  try:
    response = (
        form_service.forms()
        .setPublishSettings(
            formId=YOUR_FORM_ID, body=set_publish_settings_request
        )
        .execute()
    )
    print(f"Form {YOUR_FORM_ID} publish settings updated: {response}")
  except Exception as e:
    print(f"An error occurred: {e}")

if __name__ == "__main__":
  publish_form()
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SCOPES = 'https://www.googleapis.com/auth/forms.body';

/**
 * Publishes a Google Form.
 *
 * @param {string} formIdToPublish The ID of the form to publish.
 */
async function publishForm(formIdToPublish) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth: authClient,
  });

  // The request body to publish the form and start accepting responses.
  const setPublishSettingsRequest = {
    publishSettings: {
      publishState: {
        isPublished: true,
        isAcceptingResponses: true,
      },
    },
  };

  try {
    // Send the request to update the form's publish settings.
    const result = await formsClient.forms.setPublishSettings({
      formId: formIdToPublish,
      requestBody: setPublishSettingsRequest,
    });
    console.log('Form publish settings updated:', result.data);
  } catch (err) {
    console.error('Error setting publish settings:', err);
  }
}
```

## Find responders to your form

You can retrieve a list of all users who have responder access (the PUBLISHED\_READER role) using [Form.getPublishedReaders()](../../../../apps-script/reference/forms/form.md#getpublishedreaders). This returns an array of user objects.

### REST

Append the query parameter `includePermissionsForView=published` to the request URL.

### Apps Script

```
/**
 * Gets and logs the email addresses of all responders for a form.
 */
function listResponders() {
  // Replace with the URL of your Google Form
  const formUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/edit';

  try {
    const form = FormApp.openByUrl(formUrl);

    // Get the array of User objects representing responders
    const responders = form.getPublishedReaders();

    // Log the responders
    Logger.log("The following can respond to the form");
    responders.forEach(responder => Logger.log(responder.getEmail()));

    return responders;

  } catch (error) {
    Logger.log(\`Error getting responders: ${error}\`);
  }
}
```

### Python

```
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these SCOPES, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"]
CLIENT_SECRET_FILE = "client_secrets.json"
TOKEN_FILE = "token.json"

# TODO: Replace with your Form ID
YOUR_FORM_ID = "YOUR_FORM_ID"

def get_credentials():
  """Gets the credentials for the user."""
  creds = None
  if os.path.exists(TOKEN_FILE):
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          CLIENT_SECRET_FILE, SCOPES
      )
      creds = flow.run_local_server(port=8080)
    with open(TOKEN_FILE, "w") as token:
      token.write(creds.to_json())
  return creds

def get_responders():
  """Gets the responders for the form."""
  creds = get_credentials()
  drive_service = build("drive", "v3", credentials=creds)

  try:
    response = (
        drive_service.permissions()
        .list(
            fileId=YOUR_FORM_ID,
            fields="permissions(id,emailAddress,type,role,view)",
            includePermissionsForView="published",
        )
        .execute()
    )

    published_readers = []
    for permission in response.get("permissions", []):
      # 'view': 'published' indicates it's related to the published link.
      # 'role': 'reader' is standard for responders.
      # 'type': 'user' for specific users, 'anyone' for public.
      if (
          permission.get("view") == "published"
          and permission.get("role") == "reader"
      ):
        published_readers.append(permission)

    if published_readers:
      print("Responders for this form:")
      print(published_readers)
    else:
      print("No specific published readers found for this form.")

  except Exception as e:
    print(f"An error occurred: {e}")

if __name__ == "__main__":
  get_responders()
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {drive} from '@googleapis/drive';

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

/**
 * Gets the responders of a form.
 * This is done by listing the permissions of the form in Google Drive.
 *
 * @param {string} formId The ID of the form.
 */
async function getResponders(formId) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Drive API client.
  const driveService = drive({version: 'v3', auth: authClient});

  try {
    // List the permissions for the form.
    const result = await driveService.permissions.list({
      fileId: formId,
      includePermissionsForView: 'published',
      fields: 'permissions(id,emailAddress,type,role,view)',
    });

    const permissions = result.data.permissions || [];
    if (permissions.length === 0) {
      console.log(\`No permissions found for form ID: ${formId}\`);
    } else {
      console.log('Responders for this form:');
      // A responder is a permission with view='published' and role='reader'.
      for (const permission of permissions) {
        if (permission.view === 'published' && permission.role === 'reader') {
          console.log(\`Responder:\`, permission);
        }
      }
    }
  } catch (err) {
    console.error('Error getting responders :', err);
  }
}
```

## Share your form with more responders

To add responders to a form so that they can open and respond to it, you can use the Drive [`permissions.create`](../../../drive/api/reference/rest/v3/permissions/create.md) method.

- Call the [`permissions.create`](../../../drive/api/reference/rest/v3/permissions/create.md) method with the form ID and the access settings.

### REST

**Sample request body**

```
{
  "view": "published",
  "role": "reader",
  "type": "user",
  "emailAddress": "user@example.com"
}
```

### Apps Script

```
/**
 * Adds a single responder to a form using their email address.
*/
function addSingleResponderByEmail() {
// Replace with the URL of your Google Form
  const formUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/edit';
  // Replace with the responder's email address
  const responderEmail = 'responder@example.com';

  try {
    const form = FormApp.openByUrl(formUrl);

    // Add the user as a responder
    form.addPublishedReader(responderEmail);
    Logger.log(\`Added ${responderEmail} as a responder to form "${
        form.getTitle()}".\`);

  } catch (error) {
    Logger.log(\`Error adding responder: ${error}\`);
  }
}
```

### Python

```
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these SCOPES, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/drive.file"]
CLIENT_SECRET_FILE = "client_secrets.json"
TOKEN_FILE = "token.json"

# TODO: Replace with your Form ID and responder's email
YOUR_FORM_ID = "YOUR_FORM_ID"
YOUR_RESPONDER_EMAIL = "user@example.com"

def get_credentials():
  """Gets the credentials for the user."""
  creds = None
  if os.path.exists(TOKEN_FILE):
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          CLIENT_SECRET_FILE, SCOPES
      )
      creds = flow.run_local_server(port=8080)
    with open(TOKEN_FILE, "w") as token:
      token.write(creds.to_json())
  return creds

def add_responder():
  """Adds the responder to the form."""
  creds = get_credentials()
  drive_service = build("drive", "v3", credentials=creds)

  permission_body = {
      "view": "published",
      "role": "reader",
      "type": "user",
      "emailAddress": YOUR_RESPONDER_EMAIL,
  }

  try:
    response = (
        drive_service.permissions()
        .create(
            fileId=YOUR_FORM_ID,
            body=permission_body,
            sendNotificationEmail=False,  # Optional: to avoid sending an email
        )
        .execute()
    )
    print(
        f"Added responder {YOUR_RESPONDER_EMAIL}. Permission ID:"
        f" {response.get('id')}"
    )
    print(response)
  except Exception as e:
    print(f"An error occurred: {e}")

if __name__ == "__main__":
  add_responder()
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {drive} from '@googleapis/drive';

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

/**
 * Adds a responder to a form.
 * This is done by adding a permission to the form in Google Drive.
 *
 * @param {string} formId The ID of the form.
 * @param {string} email The email of the responder to add.
 */
async function addResponder(formId, email) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Drive API client.
  const driveService = drive({version: 'v3', auth: authClient});

  // The permission body to add a responder.
  const permissionBody = {
    role: 'reader',
    type: 'user',
    emailAddress: email,
    view: 'published',
  };

  try {
    // Create the permission.
    const result = await driveService.permissions.create({
      fileId: formId,
      requestBody: permissionBody,
      fields: 'id,emailAddress,role,type,view',
      sendNotificationEmail: false, // Optional: whether to send a notification email.
    });
    console.log('Responder added:', result.data);
  } catch (err) {
    console.error('Error adding responder:', err);
  }
}
```

## Remove responders from your form

You can remove individual responders by their email address or using a [User](../../../../apps-script/reference/base/user.md) object. Removing a responder revokes their ability to view and submit the form, unless they have access through other means like domain sharing or shared drive access.

**Remove a single responder by email address**

### REST

`DELETE https://www.googleapis.com/drive/v3/files/{fileId}/permissions/{permissionId}`

permissionID can be found by [listing responders](#find-responders) as described earlier

### Apps Script

```
/**
 * Removes a single responder from a form using their email address.
*/
function removeSingleResponderByEmail() {
  // Replace with the URL of your Google Form
  const formUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/edit';
  // Replace with the responder's email address to remove
  const responderEmailToRemove = 'responder-to-remove@example.com';

  try {
    const form = FormApp.openByUrl(formUrl);

    // Remove the user as a responder
    form.removePublishedReader(responderEmailToRemove);
    Logger.log(\`Removed ${responderEmailToRemove} as a responder from form "${
        form.getTitle()}".\`);

  } catch (error) {
    Logger.log(\`Error removing responder: ${error}\`);
  }
}
```

### Python

```
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these SCOPES, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/drive.file"]
CLIENT_SECRET_FILE = "client_secrets.json"
TOKEN_FILE = "token.json"

# TODO: Replace with your Form ID and responder's email
YOUR_FORM_ID = "YOUR_FORM_ID"
YOUR_RESPONDER_EMAIL = "user@example.com"

def get_credentials():
  """Gets the credentials for the user."""
  creds = None
  if os.path.exists(TOKEN_FILE):
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          CLIENT_SECRET_FILE, SCOPES
      )
      creds = flow.run_local_server(port=8080)
    with open(TOKEN_FILE, "w") as token:
      token.write(creds.to_json())
  return creds

def remove_responder():
  """Removes the responder for the form."""
  creds = get_credentials()
  drive_service = build("drive", "v3", credentials=creds)

  try:
    # First, find the permission ID for the user
    permissions_result = (
        drive_service.permissions()
        .list(
            fileId=YOUR_FORM_ID,
            fields="permissions(id,emailAddress,role,view,type)",
            includePermissionsForView="published",
        )
        .execute()
    )

    permission_id_to_delete = None
    for p in permissions_result.get("permissions", []):
      if (
          p.get("emailAddress") == YOUR_RESPONDER_EMAIL
          and p.get("role") == "reader"
          and p.get("view") == "published"
          and p.get("type") == "user"
      ):
        permission_id_to_delete = p.get("id")
        break

    if permission_id_to_delete:
      drive_service.permissions().delete(
          fileId=YOUR_FORM_ID, permissionId=permission_id_to_delete
      ).execute()
      print(
          f"Successfully removed responder {YOUR_RESPONDER_EMAIL} (Permission"
          f" ID: {permission_id_to_delete}) from form {YOUR_FORM_ID}."
      )
    else:
      print(
          f"Responder {YOUR_RESPONDER_EMAIL} not found or not a published"
          f" reader for form {YOUR_FORM_ID}."
      )

  except Exception as e:
    print(f"An error occurred: {e}")

if __name__ == "__main__":
  remove_responder()
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {drive} from '@googleapis/drive';

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

/**
 * Remove a responder from a form.
 * This is done by removing the corresponding permission from the form in Google Drive.
 *
 * @param {string} formId The ID of the form.
 * @param {string} email The email of the responder to remove.
 */
async function removeResponders(formId, email) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Drive API client.
  const driveService = drive({version: 'v3', auth: authClient});

  // List the permissions for the form.
  const result = await driveService.permissions.list({
    fileId: formId,
    includePermissionsForView: 'published',
    fields: 'permissions(id,emailAddress,type,role,view)',
  });

  const permissions = result.data.permissions || [];
  // Find the permission that corresponds to the responder to be removed.
  const responderToRemove = permissions.find(
    (permission) =>
      permission.view === 'published' &&
      permission.role === 'reader' &&
      permission.emailAddress === email,
  );

  if (responderToRemove?.id) {
    const permissionId = responderToRemove.id;
    // Delete the permission.
    await driveService.permissions.delete({
      fileId: formId,
      permissionId: responderToRemove.id,
    });
    console.log(
      \`Responder with permission ID '${permissionId}' removed successfully.\`,
    );
  } else {
    console.log('Responder not found for the specified form');
  }
}
```

## Check if the form accepts responses from 'Anyone with link'

To check if the form accepts responses from anyone with a link, you need to turn on the Drive Advanced Service.

1. Turn on the Drive Advanced Service:
	1. Open your Apps Script project.
		2. Click **Services** (the plus icon next to **Service**).
		3. Find **Drive API** and click **Add**.
		4. Click **Add**.

### Apps Script

```
function isAnyoneWithLinkResponder(formId) {
  let permissions = Drive.Permissions.list(formId, { includePermissionsForView: 'published' }).permissions;
  if (permissions) {
    for (const permission of permissions) {
      if (permission.type === 'anyone' && permission.view === 'published' && permission.role === 'reader') {
        return true;
      }
    }
  }
  return false;
}
```

### Python

```
def is_anyone_with_link_responder():
  """Checks if anyone with the link is a responder for the form."""
  creds = get_credentials()
  drive_service = build("drive", "v3", credentials=creds)
  anyone_with_link_responder = False

  try:
    permissions_result = (
        drive_service.permissions()
        .list(
            fileId=YOUR_FORM_ID,
            fields="permissions(id,type,role,view)",
            includePermissionsForView="published",
        )
        .execute()
    )

    permissions = permissions_result.get("permissions", [])
    if not permissions:
      print(f"No permissions found for form ID: {YOUR_FORM_ID}")
    else:
      for permission in permissions:
        if (
            permission.get("type") == "anyone"
            and permission.get("view") == "published"
            and permission.get("role") == "reader"
        ):
          anyone_with_link_responder = True
          break

    if anyone_with_link_responder:
      print(
          f"Form '{YOUR_FORM_ID}' IS configured for 'Anyone with the link' to"
          " respond."
      )
    else:
      print(
          f"Form '{YOUR_FORM_ID}' is NOT configured for 'Anyone with the link'"
          " to respond."
      )

  except Exception as e:
    print(f"An error occurred: {e}")
  return anyone_with_link_responder
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {drive} from '@googleapis/drive';

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

/**
 * Checks if anyone with the link is a responder for the form.
 * This is determined by checking the form's permissions in Google Drive.
 *
 * @param {string} formId The ID of the Google Form.
 */
async function isAnyoneWithLinkResponder(formId) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Drive API client.
  const driveService = drive({version: 'v3', auth: authClient});
  let anyoneWithLinkResponder = false;

  try {
    // List the permissions for the form.
    const result = await driveService.permissions.list({
      fileId: formId,
      fields: 'permissions(id,type,role,view)',
      includePermissionsForView: 'published',
    });

    const permissions = result.data.permissions || [];
    if (permissions.length === 0) {
      console.log(\`No permissions found for form ID: ${formId}\`);
    } else {
      // Check if there is a permission that allows anyone with the link to respond.
      // This is indicated by a permission with type 'anyone', view 'published', and role 'reader'.
      for (const permission of permissions) {
        if (
          permission.type === 'anyone' &&
          permission.view === 'published' &&
          permission.role === 'reader'
        ) {
          anyoneWithLinkResponder = true;
          break;
        }
      }
    }

    if (anyoneWithLinkResponder) {
      console.log(
        \`Form '${formId}' IS configured for 'Anyone with the link' to respond.\`,
      );
    } else {
      console.log(
        \`Form '${formId}' is NOT configured for 'Anyone with the link' to respond.\`,
      );
    }
  } catch (e) {
    console.error(\`Error checking "anyone with link" permission: ${e}\`);
  }
}
```

To set 'Anyone with link' can respond to the form:

### Apps Script

```
function setAnyoneWithLinkResponder(formId) {
  Drive.Permissions.create({
    type: 'anyone',
    view: 'published',
    role: 'reader',
  }, formId);
}
```

### Python

```
def set_anyone_with_link_responder():
  """Sets anyone with the link to be a responder for the form."""
  creds = get_credentials()
  drive_service = build("drive", "v3", credentials=creds)

  permission_body = {
      "type": "anyone",
      "view": "published",  # Key for making it a responder setting
      "role": "reader",
  }

  try:
    response = (
        drive_service.permissions()
        .create(
            fileId=YOUR_FORM_ID,
            body=permission_body,
        )
        .execute()
    )
    print(
        "'Anyone with the link can respond' permission set for form"
        f" {YOUR_FORM_ID}: {response}"
    )
    return True
  except Exception as e:
    print(f"An error occurred: {e}")
  return False
```

### Node.js

```
/**
 * Sets anyone with the link to be a responder for the form.
 * This is done by adding a permission to the form in Google Drive.
 *
 * @param {string} formId The ID of the Google Form.
 */
async function setAnyoneWithLinkResponder(formId) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Drive API client.
  const driveService = drive({version: 'v3', auth: authClient});

  // The permission body to allow anyone with the link to respond.
  const permissionBody = {
    type: 'anyone',
    view: 'published', // Key for making it a responder setting
    role: 'reader',
  };

  try {
    // Create the permission for the form.
    const result = await driveService.permissions.create({
      fileId: formId,
      requestBody: permissionBody,
      fields: 'id', // Request only needed fields
    });
    console.log(
      \`'Anyone with the link can respond' permission set for form '${formId}'.\` +
        \` Permission ID: ${result.data.id}\`,
    );
  } catch (e) {
    console.error(\`Error setting "anyone with link" permission: ${e}\`);
  }
}
```

To remove 'Anyone with link' can respond to the form:

### Apps Script

```
function removeAnyoneWithLinkResponder(formId) {
  let permissions = Drive.Permissions.list(formId, { includePermissionsForView: 'published' }).permissions;
  if (permissions) {
    for (const permission of permissions) {
      if (permission.type === 'anyone' && permission.role === 'reader') {
        Drive.Permissions.remove(formId, permission.id);
      }
    }
  }
}
```

### Python

```
def remove_anyone_with_link_responder():
  """Removes anyone with the link as a responder for the form."""
  creds = get_credentials()
  drive_service = build("drive", "v3", credentials=creds)

  permission_id_to_delete = None

  try:
    permissions_result = (
        drive_service.permissions()
        .list(
            fileId=YOUR_FORM_ID,
            fields="permissions(id,type,role,view)",
            includePermissionsForView="published",
        )
        .execute()
    )

    permissions = permissions_result.get("permissions", [])
    for permission in permissions:
      if (
          permission.get("type") == "anyone"
          and permission.get("role") == "reader"
          and permission.get("view") == "published"
      ):
        permission_id_to_delete = permission.get("id")
        break

    if permission_id_to_delete:
      drive_service.permissions().delete(
          fileId=YOUR_FORM_ID, permissionId=permission_id_to_delete
      ).execute()
      print(
          "Successfully removed 'Anyone with the link' permission (ID:"
          f" {permission_id_to_delete}) from form {YOUR_FORM_ID}."
      )
      return True
    else:
      print(
          "'Anyone with the link can respond' permission not found for form"
          f" {YOUR_FORM_ID}."
      )

  except Exception as e:
    print(f"An error occurred: {e}")
  return False
```

### Node.js

```
/**
 * Removes anyone with the link as a responder for the form.
 * This is done by removing the corresponding permission from the form in Google Drive.
 *
 * @param {string} formId The ID of the Google Form.
 */
async function removeAnyoneWithLinkResponder(formId) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Drive API client.
  const driveService = drive({version: 'v3', auth: authClient});
  let permissionIdToDelete = null;

  try {
    // List the permissions for the form to find the one to delete.
    const result = await driveService.permissions.list({
      fileId: formId,
      fields: 'permissions(id,type,role,view)',
      includePermissionsForView: 'published',
    });

    const permissions = result.data.permissions || [];
    // Find the permission that allows anyone with the link to respond.
    for (const permission of permissions) {
      if (
        permission.type === 'anyone' &&
        permission.role === 'reader' &&
        permission.view === 'published'
      ) {
        permissionIdToDelete = permission.id;
        break;
      }
    }

    if (permissionIdToDelete) {
      // Delete the permission.
      await driveService.permissions.delete({
        fileId: formId,
        permissionId: permissionIdToDelete,
      });
      console.log(
        \`Successfully removed permission (ID: ${permissionIdToDelete})\` +
          \` from form '${formId}'.\`,
      );
    } else {
      console.log(\`Permission not found for form '${formId}'.\`);
    }
  } catch (e) {
    console.error(\`Error removing "anyone with link" permission: ${e}\`);
  }
}
```

## Close a form

To unpublish a form, you use the Forms.setPublished(false) method. (/apps-script/reference/forms/form#setPublished(Boolean)) Unpublishing a form makes it unavailable and automatically stops it from accepting responses.

### REST

**Sample request body**

`POST https://forms.googleapis.com/v1/forms/{formId}:setPublishSettings`

```
{
  "publishSettings": {
    "publishState": {
      "isPublished": false
    }
  }
}
```

### Apps Script

```
/**
* Unpublishes a Google Form using its URL.
*/
function unpublishMyForm() {
  // Replace with the URL of your Google Form
  const formUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/edit';

  try {
    const form = FormApp.openByUrl(formUrl);

    // Unpublish the form. This also disables accepting responses.
    form.setPublished(false);
    Logger.log(\`Form "${form.getTitle()}" unpublished successfully.\`);

    // Optional: Verify the state
    if (!form.isPublished()) {
      Logger.log('Form is now unpublished.');
    }
    if (!form.isAcceptingResponses()) {
      Logger.log('Form is no longer accepting responses.');
    }

  } catch (error) {
    Logger.log(\`Error unpublishing form: ${error}\`);
  }
}
```

### Python

```
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these SCOPES, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/forms.body"]
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"
CLIENT_SECRET_FILE = "client_secrets.json"
TOKEN_FILE = "token.json"

# TODO: Replace with your Form ID
YOUR_FORM_ID = "YOUR_FORM_ID"

def get_credentials():
  """Gets the credentials for the user."""
  creds = None
  if os.path.exists(TOKEN_FILE):
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          CLIENT_SECRET_FILE, SCOPES
      )
      creds = flow.run_local_server(port=8080)
    with open(TOKEN_FILE, "w") as token:
      token.write(creds.to_json())
  return creds

def unpublish_form():
  """Unpublishes the form."""
  creds = get_credentials()
  form_service = build(
      "forms",
      "v1",
      credentials=creds,
      discoveryServiceUrl=DISCOVERY_DOC,
      static_discovery=False,
  )

  # Request body for updating publish settings
  set_publish_settings_request = {
      "publishSettings": {"publishState": {"isPublished": False}},
  }

  try:
    response = (
        form_service.forms()
        .setPublishSettings(
            formId=YOUR_FORM_ID, body=set_publish_settings_request
        )
        .execute()
    )
    print(
        f"Form {YOUR_FORM_ID} publish settings updated to unpublished:"
        f" {response}"
    )
    return True
  except Exception as e:
    print(f"An error occurred: {e}")
  return False

if __name__ == "__main__":
  unpublish_form()
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SCOPES = 'https://www.googleapis.com/auth/forms.body';

/**
 * Unpublishes a Google Form.
 *
 * @param {string} formIdToUnpublish The ID of the form to unpublish.
 */
async function unpublishForm(formIdToUnpublish) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth: authClient,
  });

  // The request body to unpublish the form.
  const setPublishSettingsRequest = {
    publishSettings: {
      publishState: {
        isPublished: false,
      },
    },
  };

  try {
    // Send the request to unpublish the form.
    const res = await formsClient.forms.setPublishSettings({
      formId: formIdToUnpublish,
      requestBody: setPublishSettingsRequest,
    });
    console.log('Form un-published.', res.data);
  } catch (err) {
    console.error('Error setting publish settings:', err);
  }
}
```

To stop accepting responses for a form without unpublishing it, you can use the [`Form.setAcceptingResponses(false)`](../../../../apps-script/reference/forms/form.md#setacceptingresponsesenabled) method. Responders to your form will see the closed form page and message.

### REST

**Sample request body**

`POST https://forms.googleapis.com/v1/forms/{formId}:setPublishSettings`

```
{
  "publishSettings": {
    "publishState": {
      "isPublished": true,
      "isAcceptingResponses": false
    }
  }
}
```

### Apps Script

```
/**
 * Stop a Google Form from accepting responses using its URL.
*/
function closeMyFormForAcceptingResponses() {
  // Replace with the URL of your Google Form
  const formUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/edit';

  try {
    const form = FormApp.openByUrl(formUrl);

    // This disables the form for accepting responses.
    form.setAcceptingResponses(false);
    Logger.log(\`Form "${form.getTitle()}" closed for accepting responses successfully.\`);

    // Optional: Verify the state
    if (form.isPublished()) {
      Logger.log('Form is still published.');
    }
    if (!form.isAcceptingResponses()) {
      Logger.log('Form is no longer accepting responses.');
    }

  } catch (error) {
    Logger.log(\`Error unpublishing form: ${error}\`);
  }
}
```

### Python

```
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these SCOPES, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/forms.body"]
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"
CLIENT_SECRET_FILE = "client_secrets.json"
TOKEN_FILE = "token.json"

# TODO: Replace with your Form ID
YOUR_FORM_ID = "YOUR_FORM_ID"

def get_credentials():
  """Gets the credentials for the user."""
  creds = None
  if os.path.exists(TOKEN_FILE):
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          CLIENT_SECRET_FILE, SCOPES
      )
      creds = flow.run_local_server(port=8080)
    with open(TOKEN_FILE, "w") as token:
      token.write(creds.to_json())
  return creds

def close_form():
  """Closes the form for responses."""
  creds = get_credentials()
  form_service = build(
      "forms",
      "v1",
      credentials=creds,
      discoveryServiceUrl=DISCOVERY_DOC,
      static_discovery=False,
  )

  stop_accepting_request_body = {
      "publishSettings": {
          "publishState": {
              "isPublished": True,  # Keep it published
              "isAcceptingResponses": False,  # But stop accepting responses
          }
      }
  }

  try:
    response = (
        form_service.forms()
        .setPublishSettings(  # Corrected: form_service
            formId=YOUR_FORM_ID, body=stop_accepting_request_body
        )
        .execute()
    )
    print(f"Form {YOUR_FORM_ID} stopped accepting responses: {response}")
    return True
  except Exception as e:
    print(f"An error occurred: {e}")
  return False

if __name__ == "__main__":
  close_form()
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SCOPES = 'https://www.googleapis.com/auth/forms.body';

/**
 * Stops a form from accepting new responses.
 *
 * @param {string} formId The ID of the form.
 */
async function stopAcceptingResponses(formId) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth: authClient,
  });

  // The request body to stop accepting responses.
  const setPublishSettingsRequest = {
    publishSettings: {
      publishState: {
        isPublished: true, // Keep the form published.
        isAcceptingResponses: false, // Stop accepting new responses.
      },
    },
  };

  try {
    // Send the request to update the form's settings.
    const res = await formsClient.forms.setPublishSettings({
      formId,
      requestBody: setPublishSettingsRequest,
    });
    console.log('Form is no longer accepting responses.', res.data);
  } catch (err) {
    console.error('Error setting publish settings:', err);
  }
}
```

## Check if a form is a legacy form

Legacy forms are forms that don't have the `publishSettings` field, whereas all newly created forms support publish settings.

Check if a form is legacy or not by determining whether the form supports publishing. This method is used to determine whether the [`setPublished(enabled)`](../../../../apps-script/reference/forms/form.md#setpublishedenabled) and [`isPublished()`](../../../../apps-script/reference/forms/form.md#ispublished) methods, and responder permissions are enabled.

### Apps Script

```
/**
 * Checks if a form supports advanced responder permissions (i.e., is not a legacy form).
*/
function checkIfFormSupportsPublishing() {
  // TODO(developer): Replace the URL with your own.
  const formUrl = 'https://docs.google.com/forms/d/YOUR_FORM_ID/edit';

  try {
    const form = FormApp.openByUrl(formUrl);

    // Checks whether the form supports publishing or not and logs it to the console.
    const supportsPublishing = form.supportsAdvancedResponderPermissions();

    if (supportsPublishing) {
      Logger.log(\`Form "${form.getTitle()}" supports publishing (not a legacy
          form).\`);
    } else {
      Logger.log(\`Form "${form.getTitle()}" is a legacy form (does not support
          publishing).\`);
    }
    return supportsPublishing;
  } catch (error) {
    Logger.log(\`Error unpublishing form: ${error}\`);
  }
}
```

### Python

```
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# If modifying these SCOPES, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/forms.body"]
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"
CLIENT_SECRET_FILE = "client_secrets.json"
TOKEN_FILE = "token.json"

# TODO: Replace with your Form ID
YOUR_FORM_ID = "YOUR_FORM_ID"

def get_credentials():
  """Gets the credentials for the user."""
  creds = None
  if os.path.exists(TOKEN_FILE):
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          CLIENT_SECRET_FILE, SCOPES
      )
      creds = flow.run_local_server(port=8080)
    with open(TOKEN_FILE, "w") as token:
      token.write(creds.to_json())
  return creds

def supports_publishing():
  """Checks if the form supports publishing."""
  creds = get_credentials()
  form_service = build(
      "forms",
      "v1",
      credentials=creds,
      discoveryServiceUrl=DISCOVERY_DOC,
      static_discovery=False,
  )

  is_legacy = True  # Assume legacy until proven otherwise
  try:
    form_metadata = form_service.forms().get(formId=YOUR_FORM_ID).execute()
    # If 'publishSettings' field exists, it's not a legacy form regarding this feature.
    if "publishSettings" in form_metadata:
      print(
          f"Form '{YOUR_FORM_ID}' (Title:"
          f" {form_metadata.get('info', {}).get('title')}) is NOT a legacy form"
          " (supports publishSettings)."
      )
      is_legacy = False
    else:
      print(
          f"Form '{YOUR_FORM_ID}' (Title:"
          f" {form_metadata.get('info', {}).get('title')}) IS a legacy form"
          " (does not have publishSettings field)."
      )
    return not is_legacy  # Returns true if it supports publishing

  except Exception as e:
    print(f"An error occurred while checking form {YOUR_FORM_ID}: {e}")
    # Depending on the error, it might indicate non-existence or access issues,
    # not necessarily legacy status.
    return None

if __name__ == "__main__":
  supports_publishing()
```

### Node.js

```
import path from 'node:path';
import {authenticate} from '@google-cloud/local-auth';
import {forms} from '@googleapis/forms';

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SCOPES = 'https://www.googleapis.com/auth/forms.body';

/**
 * Checks if a form supports the \`publishSettings\` field, which indicates it is not a legacy form.
 *
 * @param {string} formIdToCheck The ID of the form to check.
 */
async function supportsPublishing(formIdToCheck) {
  // Authenticate with Google and get an authorized client.
  const authClient = await authenticate({
    keyfilePath: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  // Create a new Forms API client.
  const formsClient = forms({
    version: 'v1',
    auth: authClient,
  });

  try {
    // Get the form metadata.
    const result = await formsClient.forms.get({
      formId: formIdToCheck,
    });

    const formTitle = result.data.info?.title;

    // If the 'publishSettings' field exists (even if empty), the form supports the new
    // publishing model and is not a legacy form.
    if (result.data && result.data.publishSettings !== undefined) {
      console.log(
        \`Form '${formIdToCheck}' (Title: ${
          formTitle
        }) is NOT a legacy form (supports publishSettings).\`,
      );
    } else {
      console.log(
        \`Form '${formIdToCheck}' (Title: ${
          formTitle
        }) IS a legacy form (does not have publishSettings field).\`,
      );
    }
  } catch (err) {
    console.error(\`Error getting form metadata for '${formIdToCheck}':\`, err);
  }
}
```
