---
source: https://developers.google.com/workspace/drive/api/guides/migrate-to-v3
root: workspace
fetched_at: 2026-04-23T15:27:40.912Z
---

# Migrate to Drive API v3

If you are currently using Drive API v2, you can migrate to v3.

You should review the [V2 to v3 reference](https://developers.google.com/workspace/drive/api/guides/v2-to-v3-reference) for a complete map of all resource differences between versions.

The {drive\_api\_short} version is set differently for each language:

- For Java, you download the v3 library. See [Drive API client library for Java](https://github.com/googleapis/google-api-java-client-services/tree/main/clients/google-api-services-drive/v3). For an example, see [Java Quickstart](https://developers.google.com/workspace/drive/api/quickstart/java).
- For JavaScript, you define the version with the Discovery docs URL. For an example, see [Browser Quickstart](https://developers.google.com/workspace/drive/api/quickstart/js).

```
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
```

- For Python, you specify the version when you build the service object. For an example, see [Python Quickstart](https://developers.google.com/workspace/drive/api/quickstart/python).

```
service = build('drive', 'v3', credentials=creds)
```

- For Node.js, you define the version when you set the google.drive constructor. For an example, see [Node.js Quickstart](https://developers.google.com/workspace/drive/api/quickstart/nodejs).

```
const drive = google.drive({version: 'v3', auth});
```
