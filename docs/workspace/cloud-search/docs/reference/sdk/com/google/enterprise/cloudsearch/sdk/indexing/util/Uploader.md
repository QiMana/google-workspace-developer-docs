---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/util/Uploader
root: workspace
fetched_at: 2026-04-23T15:26:58.138Z
---

# Uploader

This class reads in a json file to upload all the requests to the Cloud Search Indexing API.

```
java
-Dpayload={your json file contains all the request} \
-Dapi.serviceAccountPrivateKeyFile={service account private key file} \
-DrootUrl=https://www.googleapis.com/ \
-jar cloudsearch-uploader-{version}.jar
```

payload is the json file which contains the source Id and all the requests related to it. api.serviceAccountPrivateKeyFile is the file contains private key information. If it is not a json file then api.serviceAccountId is compulsory.

Optional command-line properties:

```
-DcontentUpload.requestTimeout=<seconds>
-DcontentUpload.connectorName=customConnectorName
-DcontentUpload.enableDebugging=false
```

**Only set enableDebugging to true if asked by Google to help with debugging.**

Detailed schema of request json file can be found at `UploadRequest`.

### Public Method Summary

| static void | [main](./Uploader.md#main(java.lang.String[])) (String\[\] args) |
| --- | --- |

### Inherited Method Summary

From class java.lang.Object

| boolean | equals(Object arg0) |
| --- | --- |
| final Class<?> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| String | toString() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| final void | wait() |

## Public Methods

#### public static void main (String\[\] args)

##### Parameters

| args |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
| GeneralSecurityException |  |
| InterruptedException |  |
