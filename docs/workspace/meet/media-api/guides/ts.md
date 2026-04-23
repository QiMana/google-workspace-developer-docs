---
source: https://developers.google.com/workspace/meet/media-api/guides/ts
root: workspace
fetched_at: 2026-04-23T15:30:34.410Z
---

# Meet Media API: TypeScript reference client quickstart

This page explains how to set up and run a sample using the [TypeScript reference client implementation](https://github.com/googleworkspace/meet-media-api-samples). To learn about the C++ client instead, see the [C++ reference client quickstart](https://developers.google.com/workspace/meet/media-api/guides/cpp).

## Prerequisites

To run this quickstart, you need the following prerequisites:

- You've cloned the [GitHub repository](https://github.com/googleworkspace/meet-media-api-samples).
- [Webpack](https://webpack.js.org/).
- [Node.js](https://nodejs.org/).
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install).
- [`gcloud`](https://cloud.google.com/sdk/docs/install-sdk) CLI.
- [A Google Cloud project](https://developers.google.com/workspace/guides/create-project) with Google Meet REST API enabled.
- A Google Workspace account.
- Use a Chrome browser with version >= 94.

### Enable the Meet REST API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.

### Google Cloud console

1. In the Google Cloud console, enable the Meet REST API.
	[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=meet.googleapis.com)
2. Confirm that you're enabling the Meet REST API in the correct Cloud project, then click **Next**.
3. Confirm that you're enabling the Meet REST API, then click **Enable**.

### gcloud CLI

1. If necessary, set the current Cloud project to the one you created:
	```
	gcloud config set project PROJECT_ID
	```
	Replace PROJECT\_ID with the **Project ID** of the Cloud project you created.
2. Enable the Meet REST API:
	```
	gcloud services enable meet.googleapis.com
	```

## Generate OAuth tokens

To connect to the Meet Media API, your app must use OAuth to generate access tokens. To learn more about accessing Google APIs with OAuth, see [*Using OAuth 2.0 to Access Google APIs*](https://developers.google.com/identity/protocols/oauth2).

When building a web app, you can generate OAuth tokens using the [implicit grant flow](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow). This TypeScript sample uses this flow to generate OAuth tokens.

## Run the sample

1. [Create an OAuth client](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#prerequisites)
2. Within the `web/samples` directory, build the sample:
	```
	$ yarn install --frozen-lockfile
	$ npx webpack
	```
3. Follow the [*Authenticate for using the gcloud CLI*](https://cloud.google.com/docs/authentication/gcloud) guide to sign in and select your Google Cloud project.
4. Deploy your server to [*Google App Engine*](https://cloud.google.com/appengine).
	```
	$ gcloud app deploy app.yaml
	```
5. Navigate to your endpoint:
	```
	$ gcloud app browse
	```
6. Follow the [*Create access credentials*](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id) guide to create OAuth 2.0 credentials with these scopes:
	- `https://www.googleapis.com/auth/meetings.conference.media.readonly`
		- `https://www.googleapis.com/auth/meetings.space.readonly`
	Add your deployed app's URL to *Authorized JavaScript Origins* and *Authorized Redirect URIs*.
7. Copy the client ID and paste it into the deployed web page.
8. Tap the sign-in button and follow the prompts. If you run into an error, note that it might take a few minutes for the redirect URIs to propagate.
9. [Create and join a meeting](https://meet.google.com/new). Copy the meeting code, pasting it into the "meeting code" input on the page.
10. Select the number of video streams and enable audio.
11. Click *Create Client*, then *Join Meeting*.
12. Observe the video and audio streams.

## Related topics

- [Troubleshoot and fix Meet Media API errors](https://developers.google.com/workspace/meet/media-api/guides/troubleshoot)
- [Meet Media API data channels reference](https://developers.google.com/workspace/meet/media-api/reference/dc/media_api)
