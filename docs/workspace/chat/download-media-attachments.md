---
source: https://developers.google.com/workspace/chat/download-media-attachments
root: workspace
fetched_at: 2026-04-23T15:25:23.105Z
---

# Download media from a file attachment

## Page Summary

- This guide demonstrates how to download media files (like images, videos, or documents) from messages in Google Chat using the Google Chat API's `download` method.
- The process involves retrieving the `attachmentDataRef` from the `Attachment` or `Message` resource and then using it to call the `download` method on the `Media` resource.
- You need a Google Workspace account, a configured Google Cloud project with the Chat API enabled, and the Google API Client Library for Python to implement this functionality.
- The guide provides a Python code example for authenticating with the API and downloading the file content, along with instructions on how to retrieve the necessary resource names.

This guide explains how to use the `download` method on the `Media` resource of the Google Chat API to download media (a file) from a message in Google Chat.

When the user sends a message to your app, Google Chat dispatches a [`MESSAGE` interaction event](https://developers.google.com/workspace/chat/events#message). The interaction event received by your app includes a request body, which is the JSON payload representing the interaction event, including any attachments. The data in the attachment is different depending on whether the attachment is uploaded content (a local file) or is a file stored on Drive. The [`Media` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/media) represents a file uploaded to Google Chat, like images, videos, and documents. The [`Attachment` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments) represents an instance of media—a file—attached to a message. The `Attachment` resource includes the metadata about the attachment, such as where it's saved.

## Prerequisites

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project).
		- [Configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent).
		- [Enable and configure the Google Chat API](https://developers.google.com/workspace/chat/configure-chat-api) with a name, icon, and description for your Chat app.
		- Install the Python [Google API Client Library](https://developers.google.com/workspace/chat/libraries?tab=python#google-api-client-libraries).
		- Create access credentials based on how you want to authenticate in your Google Chat API request:
		- To authenticate as a Chat user, [create OAuth client ID credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and save the credentials as a JSON file named `credentials.json` to your local directory.
				- To authenticate as the Chat app, [create service account credentials](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and save the credentials as a JSON file named `credentials.json`.
- [Choose an authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls) based on whether you want to authenticate as a user or the Chat app.

## Download from a file attachment

To download media from a file attachment, pass the following in your request:

- With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), specify the `chat.messages.readonly` or `chat.messages` authorization scope. With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), specify the `chat.bot` authorization scope.
- Call the following Google Chat methods:
	1. Get `attachmentDataRef` by calling one of the following methods:
		- The [`get` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments/get) on the [`Attachment` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments).
				- The [`get` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/get) or the [`list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/list) on the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages).
		2. Call the [`download` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download) on the [`Media` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/media), and specify the previously retrieved `attachmentDataRef.resourceName` as `media.download.resourceName`.

The following example downloads a file attached to a message:

### Python

1. In your working directory, create a file named `chat_media_and_attachment_download.py`.
2. Include the following code in `chat_media_and_attachment_download.py`:
	```
	import io
	from google_auth_oauthlib.flow import InstalledAppFlow
	from googleapiclient.discovery import build
	from googleapiclient.http import MediaIoBaseDownload
	# Define your app's authorization scopes.
	# When modifying these scopes, delete the file token.json, if it exists.
	SCOPES = ["https://www.googleapis.com/auth/chat.messages"]
	def main():
	    '''
	    Authenticates with Chat API via user credentials,
	    then downloads a file attached to a message.
	    '''
	    # Authenticate with Google Workspace
	    # and get user authorization.
	    flow = InstalledAppFlow.from_client_secrets_file(
	                'credentials.json', SCOPES)
	    creds = flow.run_local_server()
	    # Build a service endpoint for Chat API.
	    chat = build('chat', 'v1', credentials=creds)
	    # Download media resource.
	    request = chat.media().download_media(
	        resourceName=RESOURCE_NAME,
	    )
	    file = io.BytesIO()
	    downloader = MediaIoBaseDownload(file, request)
	    done = False
	    while done is False:
	        status, done = downloader.next_chunk()
	        if status.total_size:
	            print(f'Total size: {status.total_size}')
	        print(f'Download {int(status.progress() * 100)}')
	if __name__ == '__main__':
	    main()
	```
3. In the code, replace `RESOURCE_NAME` with `attachmentDataRef.resourceName`, which you can retrieve one of the following ways:
	- The [`get` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments/get) on the [`Attachment` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments).
		- The [`get` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/get) on the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages).
		- The [`list` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/list) on the [`Message` resource](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages).
4. In your working directory, build and run the sample:
	```
	python3 chat_media_and_attachment_download.py
	```

If successful, this method returns the file content as bytes.

To download the file contents, choose one of the following approaches:

- We recommend using the `MediaIoBaseDownload` class in Python, which contains methods to download the file in sections and save the contents to an output stream.
- If you must make the HTTP request manually, call the `download` method and specify the portion of the file that you want to download by using a [byte range](https://www.rfc-editor.org/rfc/rfc9110.html#name-byte-ranges) with the `Range` header—for example: `Range: bytes=500-999`.

## Related topics

- If the message is a Drive file, use the [Drive API to get access to the file](https://developers.google.com/workspace/drive/api/guides/manage-downloads).
- [Upload media as a file attachment](https://developers.google.com/workspace/chat/upload-media-attachments)
- [Download media as a file attachment](https://developers.google.com/workspace/chat/download-media-attachments)
- [Get metadata about a message attachment](https://developers.google.com/workspace/chat/get-media-attachments)
