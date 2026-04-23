---
source: https://developers.google.com/workspace/cloud-search/docs/guides/thumbnails
root: workspace
fetched_at: 2026-04-23T15:26:10.884Z
---

# Enable thumbnails

Thumbnails help users identify relevant search results. They have these characteristics:

- Width of 1024 px.
- URLs for Google Workspace file thumbnails are ACL-protected. Other file types are not.
- URLs expire after 5 minutes.
- Maximum file size for generation is 50 MB.
- If generation fails, Cloud Search returns a placeholder icon. For Google Workspace items, the URL returns "404 Not Found." Your application must handle this.

Google Drive automatically creates thumbnails for supported types like Docs, Sheets, and Slides. Cloud Search also generates thumbnails for:

- Microsoft Word (DOC, DOCX)
- Microsoft Excel (XLS, XLSX)
- Microsoft PowerPoint (PPT, PPTX)
- Adobe PDF
- RTF, TXT, HTML, and XML

Cloud Search only returns thumbnails for items when you enable thumbnails for the data source and search application.

## Enable thumbnail URLs for a data source

To enable thumbnail URLs, create an API key and web application credentials. Use these to obtain an access token to update your data source.

1. Create or select a project and enable the API. See [Configure access to the Cloud Search API](https://developers.google.com/workspace/cloud-search/docs/guides/project-setup).
2. Create an API key in the Google Cloud console and note the value.
3. Create web application credentials. Use `https://developers.google.com/oauthplayground` as the redirect URI. See [Create credentials](https://developers.google.com/workspace/guides/create-credentials#client).
4. In the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/), open **OAuth 2.0 Configuration** .
5. Select **Use your own credentials** and enter your client ID and secret.
6. Enter `https://www.googleapis.com/auth/cloud_search.settings` in the scopes field and click **Authorize APIs**.
7. Exchange the authorization code for tokens.
8. Call [`settings.datasources.get`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.datasources/get) to get your data source ID:
	```
	curl 'https://cloudsearch.googleapis.com/v1/settings/DATASOURCE_ID?key=YOUR_API_KEY' \
	--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
	--header 'Accept: application/json' \
	--compressed
	```
9. Call `settings.datasources.update` with `returnThumbnailUrls` set to `true`:
	```
	curl --request PUT \
	'https://cloudsearch.googleapis.com/v1/settings/datasources/DATASOURCE_ID?key=YOUR_API_KEY' \
	--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
	--header 'Accept: application/json' \
	--header 'Content-Type: application/json' \
	--data '{"source":{"name":"datasources/DATASOURCE_ID","displayName":"DISPLAY_NAME","itemsVisibility":[{"gsuiteDomain":true}],"returnThumbnailUrls":true}}' \
	--compressed
	```

## Enable thumbnail URLs for a search application

You must also enable thumbnails in your search application.

1. Obtain an API key and access token using the same method described in the [previous section](#data-source).
2. Call [`settings.searchapplications.get`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications/get) to get your application ID:
	```
	curl 'https://cloudsearch.googleapis.com/v1/settings/searchapplications/APP_ID?key=YOUR_API_KEY' \
	--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
	--header 'Accept: application/json' \
	--compressed
	```
3. Call `settings.searchapplications.update` with `returnResultThumbnailUrls` set to `true`:
	```
	curl --request PUT \
	'https://cloudsearch.googleapis.com/v1/settings/searchapplications/APP_ID?key=YOUR_API_KEY' \
	--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
	--header 'Accept: application/json' \
	--header 'Content-Type: application/json' \
	--data '{"name":"searchapplications/APP_ID","displayName":"DISPLAY_NAME","dataSourceRestrictions":[{"source":{"name":"datasources/DATASOURCE_ID"}}],"returnResultThumbnailUrls":true}' \
	--compressed
	```

## Access thumbnails

To access a thumbnail for a Drive file, the user or application must use the same account credentials used to access the original item.
