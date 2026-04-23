---
source: https://developers.google.com/workspace/chat/upload-media-attachments
root: workspace
fetched_at: 2026-04-23T15:25:39.449Z
---

# Upload media as a file attachment

## Page Summary

- This guide demonstrates how to upload a file to Google Chat and attach it to a message using the `upload` method of the `Media` resource and the `create` method of the `Messages` resource.
- You'll need a Google Workspace account, a Google Cloud project, and the Google Chat API enabled to follow the steps outlined in this guide.
- The provided Python code sample requires specific authorization scopes and utilizes the Google API Client Library for interaction with the Chat API.
- File uploads are limited to 200 MB and certain file types are blocked; messages with attachments cannot include accessory widgets.

This guide explains how to use the `upload` method on the `Media` resource of the Google Chat API to upload media (a file) to Google Chat and then attach it to a message.

When the user sends a message to your app, Google Chat dispatches a [`MESSAGE` interaction event](./receive-respond-interactions.md#message). The interaction event received by your app includes a request body, which is the JSON payload representing the interaction event, including any attachments. The data in the attachment is different depending on whether the attachment is uploaded content (a local file) or is a file stored on Drive. The [`Media` resource](./api/reference/rest/v1/media.md) represents a file uploaded to Google Chat, like images, videos, and documents. The [`Attachment` resource](./api/reference/rest/v1/spaces.messages.attachments.md) represents an instance of media—a file—attached to a message. The `Attachment` resource includes the metadata about the attachment, such as where it's saved.

## Prerequisites

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Python [Google API Client Library](./libraries.md#google-api-client-libraries).
		- [Create OAuth client ID credentials](./authenticate-authorize-chat-user.md#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports user authentication.

## Upload as a file attachment

To upload media and attach it to a message, pass the following in your request::

- Specify the `chat.messages.create` or `chat.messages` authorization scope.
- Call the following Google Chat methods:
	1. To upload the file, call the [`upload` method](./api/reference/rest/v1/media/upload.md) on the [`Media`](./api/reference/rest/v1/media.md) resource.
		- Set `parent` to the space name of the space that hosts the file.
				- In `body` (the request body), set `filename` to the name of the uploaded file attachment.
				- Set `media_body` as an instance of the file to be uploaded.
		2. To create a message with the uploaded file attached, call the [`create` method](./api/reference/rest/v1/spaces.messages/create.md) on the [`Messages` resource](./api/reference/rest/v1/spaces.messages.md).
		- Set `attachment` as the response from calling the [`upload` method](./api/reference/rest/v1/media/upload.md) on the [`Media` resource](./api/reference/rest/v1/media.md). The `attachment` field accepts a list.

The following example uploads a PNG image file and attaches it to a message.

### Python

1. In your working directory, create a file named `chat_media_and_attachment_upload.py`.
2. Include the following code in `chat_media_and_attachment_upload.py`:
	```
	from google_auth_oauthlib.flow import InstalledAppFlow
	from googleapiclient.discovery import build
	from googleapiclient.http import MediaFileUpload
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.messages.create"]
	def main():
	    '''
	    Authenticates with Chat API via user credentials,
	    then uploads a file as media, creates a message, and
	    attaches the file to the message.
	    '''
	    # Authenticate with Google Workspace
	    # and get user authorization.
	    flow = InstalledAppFlow.from_client_secrets_file(
	                  'credentials.json', SCOPES)
	    creds = flow.run_local_server()
	    # Build a service endpoint for Chat API.
	    service = build('chat', 'v1', credentials=creds)
	    # Upload a file to Google Chat.
	    media = MediaFileUpload('test_image.png', mimetype='image/png')
	    # Create a message and attach the uploaded file to it.
	    attachment_uploaded = service.media().upload(
	        # The space to upload the attachment in.
	        #
	        # Replace SPACE with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        parent='spaces/SPACE',
	        # The filename of the attachment, including the file extension.
	        body={'filename': 'test_image.png'},
	        # Media resource of the attachment.
	        media_body=media
	    ).execute()
	    print(attachment_uploaded)
	    # Create a Chat message with attachment.
	    result = service.spaces().messages().create(
	        # The space to create the message in.
	        #
	        # Replace SPACE with a space name.
	        # Obtain the space name from the spaces resource of Chat API,
	        # or from a space's URL.
	        #
	        # Must match the space name that the attachment is uploaded to.
	        parent='spaces/SPACE',
	        # The message to create.
	        body={
	            'text': 'Hello, world!',
	            'attachment': [attachment_uploaded]
	        }
	    ).execute()
	    print(result)
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace `SPACE` with the space name to upload the attachment in, which you can obtain from the [`spaces.list` method](./api/reference/rest/v1/spaces/list.md) in the Chat API, or from a space's URL.
4. In your working directory, build and run the sample:
	```
	python3 chat_media_and_attachment_upload.py
	```

The Chat API returns a response body containing `attachmentDataRef` with details about the uploaded file.

## Limits and considerations

As you prepare to upload files and attach them to messages, take note of these limits and considerations:

- You can upload file sizes up to 200 MB.
- Some file types aren't supported, and can't be uploaded. For details, see [File types blocked in Google Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat).
- Your message must omit [accessory widgets](./api/reference/rest/v1/spaces.messages.md#Message.FIELDS.accessory_widgets).

## Related topics

- [Download media as a file attachment](./download-media-attachments.md)
- [Get metadata about a message attachment](./get-media-attachments.md)
