---
source: https://developers.google.com/workspace/drive/api/guides/manage-downloads
root: workspace
fetched_at: 2026-04-23T15:27:41.570Z
---

# Download and export files

The Google Drive API supports several types of download and export actions, as listed in the following table:

| **Download actions** | Blob file content using the `files.get` method with the `alt=media` URL parameter.Blob file content at an earlier version using the `revisions.get` method with the `alt=media` URL parameter.Blob file content in a browser using the `webContentLink` field.Blob file content using the `files.download` method during long-running operations. This is the only way to download Google Vids files. |
| --- | --- |
| **Export actions** | Google Workspace document content in a format that your app can handle, using the `files.export` method.Google Workspace document content in a browser using the `exportLinks` field.Google Workspace document content at an earlier version in a browser using the `exportLinks` field.Google Workspace document content using the `files.download` method during long-running operations. |

Before you download or export file content, verify that users can download the file using the `capabilities.canDownload` field on the [`files`](../reference/rest/v3/files.md) resource.

For descriptions of the file types mentioned here, including blob and Google Workspace files, see [File types](./about-files.md#types).

The rest of this guide provides detailed instructions for performing these types of download and export actions.

## Download blob file content

To download a blob file stored on Drive, use the [`files.get`](../reference/rest/v3/files/get.md) method with the ID of the file to download and the `alt=media` URL parameter. The `alt=media` URL parameter tells the server that a download of content is being requested as an alternative response format.

The `alt=media` URL parameter is a [system parameter](https://cloud.google.com/apis/docs/system-parameters) available across all Google REST APIs. If you use a client library for the Drive API, you don't need to explicitly set this parameter.

The following code sample shows how to use the `files.get` method to download a file with the Drive API client libraries.

### Apps Script

```
/**
 * Downloads a file from Drive.
 * @param {string} fileId The ID of the file to download.
 * @return {Blob} The file content as a Blob.
 */
function downloadFile(fileId) {
  var url = 'https://www.googleapis.com/drive/v3/files/' + fileId + '?alt=media';
  var response = UrlFetchApp.fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
    }
  });
  return response.getBlob();
}
```

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Arrays;

/* Class to demonstrate use-case of drive's download file. */
public class DownloadFile {

  /**
   * Download a Document file in PDF format.
   *
   * @param realFileId file ID of any workspace document format file.
   * @return byte array stream if successful, {@code null} otherwise.
   * @throws IOException if service account credentials file not found.
   */
  public static ByteArrayOutputStream downloadFile(String realFileId) throws IOException {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
          guides on implementing OAuth2 for your application.*/
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(Arrays.asList(DriveScopes.DRIVE_FILE));
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(
        credentials);

    // Build a new authorized API client service.
    Drive service = new Drive.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Drive samples")
        .build();

    try {
      OutputStream outputStream = new ByteArrayOutputStream();

      service.files().get(realFileId)
          .executeMediaAndDownloadTo(outputStream);

      return (ByteArrayOutputStream) outputStream;
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      System.err.println("Unable to move file: " + e.getDetails());
      throw e;
    }
  }
}
```

### Python

```
import io

import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload

def download_file(real_file_id):
  """Downloads a file
  Args:
      real_file_id: ID of the file to download
  Returns : IO object with location.

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create drive api client
    service = build("drive", "v3", credentials=creds)

    file_id = real_file_id

    # pylint: disable=maybe-no-member
    request = service.files().get_media(fileId=file_id)
    file = io.BytesIO()
    downloader = MediaIoBaseDownload(file, request)
    done = False
    while done is False:
      status, done = downloader.next_chunk()
      print(f"Download {int(status.progress() * 100)}.")

  except HttpError as error:
    print(f"An error occurred: {error}")
    file = None

  return file.getvalue()

if __name__ == "__main__":
  download_file(real_file_id="1KuPmvGq8yoYgbfW74OENMCB5H0n_2Jm9")
```

### Node.js

```
import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

/**
 * Downloads a file from Google Drive.
 * @param {string} fileId The ID of the file to download.
 * @return {Promise<number>} The status of the download.
 */
async function downloadFile(fileId) {
  // Authenticate with Google and get an authorized client.
  // TODO (developer): Use an appropriate auth mechanism for your app.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  // Create a new Drive API client (v3).
  const service = google.drive({version: 'v3', auth});

  // Download the file.
  const file = await service.files.get({
    fileId,
    alt: 'media',
  });

  // Print the status of the download.
  console.log(file.status);
  return file.status;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
function downloadFile()
 {
    try {

      $client = new Client();
      $client->useApplicationDefaultCredentials();
      $client->addScope(Drive::DRIVE);
      $driveService = new Drive($client);
      $realFileId = readline("Enter File Id: ");
      $fileId = '0BwwA4oUTeiV1UVNwOHItT0xfa2M';
      $fileId = $realFileId;
      $response = $driveService->files->get($fileId, array(
          'alt' => 'media'));
      $content = $response->getBody()->getContents();
      return $content;

    } catch(Exception $e) {
      echo "Error Message: ".$e;
    }

}
```

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Download;
using Google.Apis.Drive.v3;
using Google.Apis.Services;

namespace DriveV3Snippets
{
    // Class to demonstrate use-case of drive's download file.
    public class DownloadFile
    {
        /// <summary>
        /// Download a Document file in PDF format.
        /// </summary>
        /// <param name="fileId">file ID of any workspace document format file.</param>
        /// <returns>byte array stream if successful, null otherwise.</returns>
        public static MemoryStream DriveDownloadFile(string fileId)
        {
            try
            {
                /* Load pre-authorized user credentials from the environment.
                 TODO(developer) - See https://developers.google.com/identity for 
                 guides on implementing OAuth2 for your application. */
                GoogleCredential credential = GoogleCredential
                    .GetApplicationDefault()
                    .CreateScoped(DriveService.Scope.Drive);

                // Create Drive API service.
                var service = new DriveService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential,
                    ApplicationName = "Drive API Snippets"
                });

                var request = service.Files.Get(fileId);
                var stream = new MemoryStream();

                // Add a handler which will be notified on progress changes.
                // It will notify on each chunk download and when the
                // download is completed or failed.
                request.MediaDownloader.ProgressChanged +=
                    progress =>
                    {
                        switch (progress.Status)
                        {
                            case DownloadStatus.Downloading:
                            {
                                Console.WriteLine(progress.BytesDownloaded);
                                break;
                            }
                            case DownloadStatus.Completed:
                            {
                                Console.WriteLine("Download complete.");
                                break;
                            }
                            case DownloadStatus.Failed:
                            {
                                Console.WriteLine("Download failed.");
                                break;
                            }
                        }
                    };
                request.Download(stream);

                return stream;
            }
            catch (Exception e)
            {
                // TODO(developer) - handle error appropriately
                if (e is AggregateException)
                {
                    Console.WriteLine("Credential Not found");
                }
                else
                {
                    throw;
                }
            }
            return null;
        }
    }
}
```

This code sample uses a library method that adds the `alt=media` URL parameter to the underlying HTTP request.

File downloads started from your app must be authorized with a scope that allows read access to the file content. For example, an app using the `drive.readonly.metadata` scope isn't authorized to download the file contents. This code sample uses the restricted “drive” file scope that allows users to view and manage all of your Drive files. To learn more about Drive scopes, refer to [Choose Google Drive API scopes](./api-specific-auth.md).

Users with `owner` permissions (for my Drive files) or `organizer` permissions (for shared drive files) can restrict downloading through the [`DownloadRestrictionsMetadata`](../reference/rest/v3/files.md#downloadrestrictionsmetadata) object. For more information, see [Prevent users from downloading, printing, or copying your file](./content-restrictions.md#download-print-copy).

Files identified as [abusive](https://support.google.com/docs/answer/148505) (such as harmful software) are only downloadable by the file owner. Additionally, the `get` query parameter `acknowledgeAbuse=true` must be included to indicate that the user has acknowledged the risk of downloading potentially unwanted software or other abusive files. Your application should interactively warn the user before using this query parameter.

### Partial download

Partial download involves downloading only a specified portion of a file. You can specify the portion of the file you want to download by using a [byte range](https://www.rfc-editor.org/rfc/rfc9110.html#name-byte-ranges) with the `Range` header. For example:

```
Range: bytes=500-999
```

## Download blob file content at an earlier version

You can only download blob file content revisions that are marked as "Keep Forever". If you want to download a revision, set it to "Keep Forever" first. For more information, see [Specify revisions to save from auto delete](./manage-revisions.md#specify-revisions).

To download the content of blob files at an earlier version, use the [`revisions.get`](../reference/rest/v3/revisions/get.md) method with the ID of the file to download, the ID of the revision, and the `alt=media` URL parameter. The `alt=media` URL parameter tells the server that a download of content is being requested as an alternative response format. Similar to `files.get`, the `revisions.get` method also accepts the optional query parameter `acknowledgeAbuse` and the `Range` header. For more information, see [Manage long-running operations](./long-running-operations.md).

The request protocol is shown here.

```
GET https://www.googleapis.com/drive/v3/files/{FILE_ID}/revisions/{REVISION_ID}?alt=media
```

## Download blob file content in a browser

To download the content of blob files stored on Drive within a browser, instead of through the API, use the [`webContentLink`](../reference/rest/v3/files.md#webContentLink) field of the [`files`](../reference/rest/v3/files.md) resource. If the user has download access to the file, a link for downloading the file and its contents is returned. You can either redirect a user to this URL, or offer it as a clickable link.

## Download blob file content during long-running operations

To download the content of blob files during long-running operations, use the [`files.download`](../reference/rest/v3/files/download.md) method with the ID of the file to download. You can optionally set the ID of the revision.

This is the only way to download Google Vids files. If you attempt to export Google Vids files, you receive a [`fileNotExportable`](./handle-errors.md#file-not-exportable) error. For more information, see [Manage long-running operations](./long-running-operations.md#download-files).

## Export Google Workspace document content

To export Google Workspace document byte content, use the [`files.export`](../reference/rest/v3/files/export.md) method with the ID of the file to export and the correct [MIME type](./ref-export-formats.md). Exported content is limited to 10 MB.

The following code sample shows how to use the `files.export` method to export a Google Workspace document in PDF format using the Drive API client libraries:

### Apps Script

```
/**
 * Exports a Google Workspace document.
 * @param {string} fileId The ID of the file to export.
 * @param {string} mimeType The MIME type to export to.
 * @return {Blob} The exported content as a Blob.
 */
function exportPdf(fileId, mimeType) {
  var url = 'https://www.googleapis.com/drive/v3/files/' + fileId + '/export?mimeType=' + encodeURIComponent(mimeType);
  var response = UrlFetchApp.fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
    }
  });
  return response.getBlob();
}
```

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Arrays;

/* Class to demonstrate use-case of drive's export pdf. */
public class ExportPdf {

  /**
   * Download a Document file in PDF format.
   *
   * @param realFileId file ID of any workspace document format file.
   * @return byte array stream if successful, {@code null} otherwise.
   * @throws IOException if service account credentials file not found.
   */
  public static ByteArrayOutputStream exportPdf(String realFileId) throws IOException {
    // Load pre-authorized user credentials from the environment.
    // TODO(developer) - See https://developers.google.com/identity for
    // guides on implementing OAuth2 for your application.
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(Arrays.asList(DriveScopes.DRIVE_FILE));
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(
        credentials);

    // Build a new authorized API client service.
    Drive service = new Drive.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Drive samples")
        .build();

    OutputStream outputStream = new ByteArrayOutputStream();
    try {
      service.files().export(realFileId, "application/pdf")
          .executeMediaAndDownloadTo(outputStream);

      return (ByteArrayOutputStream) outputStream;
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      System.err.println("Unable to export file: " + e.getDetails());
      throw e;
    }
  }
}
```

### Python

```
import io

import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload

def export_pdf(real_file_id):
  """Download a Document file in PDF format.
  Args:
      real_file_id : file ID of any workspace document format file
  Returns : IO object with location

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create drive api client
    service = build("drive", "v3", credentials=creds)

    file_id = real_file_id

    # pylint: disable=maybe-no-member
    request = service.files().export_media(
        fileId=file_id, mimeType="application/pdf"
    )
    file = io.BytesIO()
    downloader = MediaIoBaseDownload(file, request)
    done = False
    while done is False:
      status, done = downloader.next_chunk()
      print(f"Download {int(status.progress() * 100)}.")

  except HttpError as error:
    print(f"An error occurred: {error}")
    file = None

  return file.getvalue()

if __name__ == "__main__":
  export_pdf(real_file_id="1zbp8wAyuImX91Jt9mI-CAX_1TqkBLDEDcr2WeXBbKUY")
```

### Node.js

```
import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

/**
 * Exports a Google Doc as a PDF.
 * @param {string} fileId The ID of the file to export.
 * @return {Promise<number>} The status of the export request.
 */
async function exportPdf(fileId) {
  // Authenticate with Google and get an authorized client.
  // TODO (developer): Use an appropriate auth mechanism for your app.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  // Create a new Drive API client (v3).
  const service = google.drive({version: 'v3', auth});

  // Export the file as a PDF.
  const result = await service.files.export({
    fileId,
    mimeType: 'application/pdf',
  });

  // Print the status of the export.
  console.log(result.status);
  return result.status;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
function exportPdf()
{
    try {
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        $realFileId = readline("Enter File Id: ");
        $fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo';
        $fileId = $realFileId;
        $response = $driveService->files->export($fileId, 'application/pdf', array(
            'alt' => 'media'));
        $content = $response->getBody()->getContents();
        return $content;

    }  catch(Exception $e) {
         echo "Error Message: ".$e;
    }

}
```

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Download;
using Google.Apis.Drive.v3;
using Google.Apis.Services;

namespace DriveV3Snippets
{
    // Class to demonstrate use of Drive export pdf
    public class ExportPdf
    {
        /// <summary>
        /// Download a Document file in PDF format.
        /// </summary>
        /// <param name="fileId">Id of the file.</param>
        /// <returns>Byte array stream if successful, null otherwise</returns>
        public static MemoryStream DriveExportPdf(string fileId)
        {
            try
            {
                /* Load pre-authorized user credentials from the environment.
                 TODO(developer) - See https://developers.google.com/identity for 
                 guides on implementing OAuth2 for your application. */
                GoogleCredential credential = GoogleCredential.GetApplicationDefault()
                    .CreateScoped(DriveService.Scope.Drive);

                // Create Drive API service.
                var service = new DriveService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential,
                    ApplicationName = "Drive API Snippets"
                });

                var request = service.Files.Export(fileId, "application/pdf");
                var stream = new MemoryStream();
                // Add a handler which will be notified on progress changes.
                // It will notify on each chunk download and when the
                // download is completed or failed.
                request.MediaDownloader.ProgressChanged +=
                    progress =>
                    {
                        switch (progress.Status)
                        {
                            case DownloadStatus.Downloading:
                            {
                                Console.WriteLine(progress.BytesDownloaded);
                                break;
                            }
                            case DownloadStatus.Completed:
                            {
                                Console.WriteLine("Download complete.");
                                break;
                            }
                            case DownloadStatus.Failed:
                            {
                                Console.WriteLine("Download failed.");
                                break;
                            }
                        }
                    };
                request.Download(stream);
                return stream;
            }
            catch (Exception e)
            {
                // TODO(developer) - handle error appropriately
                if (e is AggregateException)
                {
                    Console.WriteLine("Credential Not found");
                }
                else
                {
                    throw;
                }
            }
            return null;
        }
    }
}
```

This code sample uses the restricted `drive` scope that allows users to view and manage all of your Drive files. To learn more about Drive scopes, refer to [Choose Google Drive API scopes](./api-specific-auth.md).

The code sample also declares the export MIME type as `application/pdf`. For a complete list of all export MIME types supported for each Google Workspace document, refer to [Export MIME types for Google Workspace documents](./ref-export-formats.md).

## Export Google Workspace document content in a browser

To export Google Workspace document content within a browser, use the [`exportLinks`](../reference/rest/v3/files.md#exportLinks) field of the [`files`](../reference/rest/v3/files.md) resource. Depending on the document type, a link to download the file and its contents is returned for every MIME type available. You can either redirect a user to a URL, or offer it as a clickable link.

## Export Google Workspace document content at an earlier version in a browser

To export Google Workspace document content at an earlier version within a browser, use the [`revisions.get`](../reference/rest/v3/revisions/get.md) method with the ID of the file to download and the ID of the revision to generate an export link from which you can perform the download. If the user has download access to the file, a link for downloading the file and its contents is returned. You can either redirect a user to this URL, or offer it as a clickable link.

## Export Google Workspace document content during long-running operations

To export Google Workspace document content during long-running operations, use the [`files.download`](../reference/rest/v3/files/download.md) method with the ID of the file to download and the ID of the revision. For more information, see [Manage long-running operations](./long-running-operations.md).

## Limit how files are shared

- [Protect file content](./content-restrictions.md)
- [Export MIME types for Google Workspace documents](./ref-export-formats.md)
