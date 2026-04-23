---
source: https://developers.google.com/workspace/drive/api/guides/folder
root: workspace
fetched_at: 2026-04-23T15:27:36.886Z
---

# Create and populate folders

*Folders* are files that only contain metadata and can be used to organize files in Google Drive. They have the following properties:

- A folder is a file with the [MIME type](https://developers.google.com/workspace/drive/api/guides/mime-types) `application/vnd.google-apps.folder` and it has no extension.
- The alias `root` can be used to refer to the root folder anywhere a file ID is provided.

For more information about Drive folder limits, see [File and folder limits](#folder-limits).

This guide explains how to perform some basic folder-related tasks.

## Create a folder

To create a folder, use the [`files.create()`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/create) method with the `mimeType` of `application/vnd.google-apps.folder` and a `name`. The following code sample shows how to create a folder using a client library:

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.util.Arrays;

/* Class to demonstrate use of Drive's create folder API */
public class CreateFolder {

  /**
   * Create new folder.
   *
   * @return Inserted folder id if successful, {@code null} otherwise.
   * @throws IOException if service account credentials file not found.
   */
  public static String createFolder() throws IOException {
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
    // File's metadata.
    File fileMetadata = new File();
    fileMetadata.setName("Test");
    fileMetadata.setMimeType("application/vnd.google-apps.folder");
    try {
      File file = service.files().create(fileMetadata)
          .setFields("id")
          .execute();
      System.out.println("Folder ID: " + file.getId());
      return file.getId();
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      System.err.println("Unable to create folder: " + e.getDetails());
      throw e;
    }
  }
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def create_folder():
  """Create a folder and prints the folder ID
  Returns : Folder Id

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create drive api client
    service = build("drive", "v3", credentials=creds)
    file_metadata = {
        "name": "Invoices",
        "mimeType": "application/vnd.google-apps.folder",
    }

    # pylint: disable=maybe-no-member
    file = service.files().create(body=file_metadata, fields="id").execute()
    print(f'Folder ID: "{file.get("id")}".')
    return file.get("id")

  except HttpError as error:
    print(f"An error occurred: {error}")
    return None

if __name__ == "__main__":
  create_folder()
```

### Node.js

```
import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

/**
 * Creates a new folder in Google Drive.
 * @return {Promise<string|null|undefined>} The ID of the created folder.
 */
async function createFolder() {
  // Authenticate with Google and get an authorized client.
  // TODO (developer): Use an appropriate auth mechanism for your app.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  // Create a new Drive API client (v3).
  const service = google.drive({version: 'v3', auth});

  // The metadata for the new folder.
  const fileMetadata = {
    name: 'Invoices',
    mimeType: 'application/vnd.google-apps.folder',
  };

  // Create the new folder.
  const file = await service.files.create({
    requestBody: fileMetadata,
    fields: 'id',
  });

  // Print the ID of the new folder.
  console.log('Folder Id:', file.data.id);
  return file.data.id;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
function createFolder()
{
    try {
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        $fileMetadata = new Drive\DriveFile(array(
            'name' => 'Invoices',
            'mimeType' => 'application/vnd.google-apps.folder'));
        $file = $driveService->files->create($fileMetadata, array(
            'fields' => 'id'));
        printf("Folder ID: %s\n", $file->id);
        return $file->id;

    }catch(Exception $e) {
       echo "Error Message: ".$e;
    }
}
```

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;

namespace DriveV3Snippets
{
    // Class to demonstrate use of Drive create folder API.
    public class CreateFolder
    {
        /// <summary>
        /// Creates a new folder.
        /// </summary>
        /// <returns>created folder id, null otherwise</returns>
        public static string DriveCreateFolder()
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

                // File metadata
                var fileMetadata = new Google.Apis.Drive.v3.Data.File()
                {
                    Name = "Invoices",
                    MimeType = "application/vnd.google-apps.folder"
                };

                // Create a new folder on drive.
                var request = service.Files.Create(fileMetadata);
                request.Fields = "id";
                var file = request.Execute();
                // Prints the created folder id.
                Console.WriteLine("Folder ID: " + file.Id);
                return file.Id;
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

## Create a file in a specific folder

To create a file in a specific folder, use the [`files.create()`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/create) method and specify the folder ID in the `parents` property of the file.

The `parents` property holds the ID of the parent folder containing the file. The `parents` property can be used when creating files in a top-level folder or any other folder.

A file can only have one parent folder. Specifying multiple parents isn't supported. If the `parents` field isn't specified, the file is placed directly in the user's My Drive folder.

The following code sample shows how to create a file in a specific folder using a client library:

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.FileContent;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;

/* Class to demonstrate Drive's upload to folder use-case. */
public class UploadToFolder {

  /**
   * Upload a file to the specified folder.
   *
   * @param realFolderId Id of the folder.
   * @return Inserted file metadata if successful, {@code null} otherwise.
   * @throws IOException if service account credentials file not found.
   */
  public static File uploadToFolder(String realFolderId) throws IOException {
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

    // File's metadata.
    File fileMetadata = new File();
    fileMetadata.setName("photo.jpg");
    fileMetadata.setParents(Collections.singletonList(realFolderId));
    java.io.File filePath = new java.io.File("files/photo.jpg");
    FileContent mediaContent = new FileContent("image/jpeg", filePath);
    try {
      File file = service.files().create(fileMetadata, mediaContent)
          .setFields("id, parents")
          .execute();
      System.out.println("File ID: " + file.getId());
      return file;
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      System.err.println("Unable to upload file: " + e.getDetails());
      throw e;
    }
  }
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload

def upload_to_folder(folder_id):
  """Upload a file to the specified folder and prints file ID, folder ID
  Args: Id of the folder
  Returns: ID of the file uploaded

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create drive api client
    service = build("drive", "v3", credentials=creds)

    file_metadata = {"name": "photo.jpg", "parents": [folder_id]}
    media = MediaFileUpload(
        "download.jpeg", mimetype="image/jpeg", resumable=True
    )
    # pylint: disable=maybe-no-member
    file = (
        service.files()
        .create(body=file_metadata, media_body=media, fields="id")
        .execute()
    )
    print(f'File ID: "{file.get("id")}".')
    return file.get("id")

  except HttpError as error:
    print(f"An error occurred: {error}")
    return None

if __name__ == "__main__":
  upload_to_folder(folder_id="1s0oKEZZXjImNngxHGnY0xed6Mw-tvspu")
```

### Node.js

```
import fs from 'node:fs';
import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

/**
 * Uploads a file to the specified folder.
 * @param {string} folderId The ID of the folder to upload the file to.
 * @return {Promise<string>} The ID of the uploaded file.
 */
async function uploadToFolder(folderId) {
  // Authenticate with Google and get an authorized client.
  // TODO (developer): Use an appropriate auth mechanism for your app.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  // Create a new Drive API client (v3).
  const service = google.drive({version: 'v3', auth});

  // The request body for the file to be uploaded.
  const requestBody = {
    name: 'photo.jpg',
    parents: [folderId],
  };

  // The media content to be uploaded.
  const media = {
    mimeType: 'image/jpeg',
    body: fs.createReadStream('files/photo.jpg'),
  };

  // Upload the file to the specified folder.
  const file = await service.files.create({
    requestBody,
    media,
    fields: 'id',
  });

  // Print the ID of the uploaded file.
  console.log('File Id:', file.data.id);
  if (!file.data.id) {
    throw new Error('File ID not found.');
  }
  return file.data.id;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
function uploadToFolder($folderId)
{
    try {
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        $fileMetadata = new Drive\DriveFile(array(
            'name' => 'photo.jpg',
            'parents' => array($folderId)
        ));
        $content = file_get_contents('../files/photo.jpg');
        $file = $driveService->files->create($fileMetadata, array(
            'data' => $content,
            'mimeType' => 'image/jpeg',
            'uploadType' => 'multipart',
            'fields' => 'id'));
        printf("File ID: %s\n", $file->id);
        return $file->id;
    } catch (Exception $e) {
        echo "Error Message: " . $e;
    }
}
require_once 'vendor/autoload.php';
uploadToFolder();
```

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;

namespace DriveV3Snippets
{
    // Class to demonstrate use of Drive upload to folder.
    public class UploadToFolder
    {
        /// <summary>
        /// Upload a file to the specified folder.
        /// </summary>
        /// <param name="filePath">Image path to upload.</param>
        /// <param name="folderId">Id of the folder.</param>
        /// <returns>Inserted file metadata if successful, null otherwise</returns>
        public static Google.Apis.Drive.v3.Data.File DriveUploadToFolder
            (string filePath, string folderId)
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

                // Upload file photo.jpg in specified folder on drive.
                var fileMetadata = new Google.Apis.Drive.v3.Data.File()
                {
                    Name = "photo.jpg",
                    Parents = new List<string>
                    {
                        folderId
                    }
                };
                FilesResource.CreateMediaUpload request;
                // Create a new file on drive.
                using (var stream = new FileStream(filePath,
                           FileMode.Open))
                {
                    // Create a new file, with metadata and stream.
                    request = service.Files.Create(
                        fileMetadata, stream, "image/jpeg");
                    request.Fields = "id";
                    request.Upload();
                }
                var file = request.ResponseBody;
                // Prints the uploaded file id.
                Console.WriteLine("File ID: " + file.Id);
                return file;
            }
            catch (Exception e)
            {
                // TODO(developer) - handle error appropriately
                if (e is AggregateException)
                {
                    Console.WriteLine("Credential Not found");
                }
                else if (e is FileNotFoundException)
                {
                    Console.WriteLine("File not found");
                }
                else if (e is DirectoryNotFoundException)
                {
                    Console.WriteLine("Directory Not found");
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

## Move files between folders

To move files, you must update the ID of the `parents` property.

To add or remove parents for an existing file, use the [`files.update()`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/update) method with either the `addParents` and `removeParents` query parameters.

A file can only have one parent folder. Specifying multiple parents isn't supported.

The following code sample shows how to move a file between folders using a client library:

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

/* Class to demonstrate use case for moving file to folder.*/
public class MoveFileToFolder {

  /**
   * @param fileId   Id of file to be moved.
   * @param folderId Id of folder where the fill will be moved.
   * @return list of parent ids for the file.
   */
  public static List<String> moveFileToFolder(String fileId, String folderId)
      throws IOException {
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

    // Retrieve the existing parents to remove
    File file = service.files().get(fileId)
        .setFields("parents")
        .execute();
    StringBuilder previousParents = new StringBuilder();
    for (String parent : file.getParents()) {
      previousParents.append(parent);
      previousParents.append(',');
    }
    try {
      // Move the file to the new folder
      file = service.files().update(fileId, null)
          .setAddParents(folderId)
          .setRemoveParents(previousParents.toString())
          .setFields("id, parents")
          .execute();

      return file.getParents();
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
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def move_file_to_folder(file_id, folder_id):
  """Move specified file to the specified folder.
  Args:
      file_id: Id of the file to move.
      folder_id: Id of the folder
  Print: An object containing the new parent folder and other meta data
  Returns : Parent Ids for the file

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # call drive api client
    service = build("drive", "v3", credentials=creds)

    # pylint: disable=maybe-no-member
    # Retrieve the existing parents to remove
    file = service.files().get(fileId=file_id, fields="parents").execute()
    previous_parents = ",".join(file.get("parents"))
    # Move the file to the new folder
    file = (
        service.files()
        .update(
            fileId=file_id,
            addParents=folder_id,
            removeParents=previous_parents,
            fields="id, parents",
        )
        .execute()
    )
    return file.get("parents")

  except HttpError as error:
    print(f"An error occurred: {error}")
    return None

if __name__ == "__main__":
  move_file_to_folder(
      file_id="1KuPmvGq8yoYgbfW74OENMCB5H0n_2Jm9",
      folder_id="1jvTFoyBhUspwDncOTB25kb9k0Fl0EqeN",
  )
```

### Node.js

```
import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

/**
 * Moves a file to a new folder in Google Drive.
 * @param {string} fileId The ID of the file to move.
 * @param {string} folderId The ID of the folder to move the file to.
 * @return {Promise<number>} The status of the move operation.
 */
async function moveFileToFolder(fileId, folderId) {
  // Authenticate with Google and get an authorized client.
  // TODO (developer): Use an appropriate auth mechanism for your app.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  // Create a new Drive API client (v3).
  const service = google.drive({version: 'v3', auth});

  // Get the file's metadata to retrieve its current parents.
  const file = await service.files.get({
    fileId,
    fields: 'parents',
  });

  // Get the current parents as a comma-separated string.
  const previousParents = (file.data.parents ?? []).join(',');

  // Move the file to the new folder.
  const result = await service.files.update({
    fileId,
    addParents: folderId,
    removeParents: previousParents,
    fields: 'id, parents',
  });

  // Print the status of the move operation.
  console.log(result.status);
  return result.status;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
use Google\Service\Drive\DriveFile;
function moveFileToFolder($fileId,$folderId)
{
    try {
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        $emptyFileMetadata = new DriveFile();
        // Retrieve the existing parents to remove
        $file = $driveService->files->get($fileId, array('fields' => 'parents'));
        $previousParents = join(',', $file->parents);
        // Move the file to the new folder
        $file = $driveService->files->update($fileId, $emptyFileMetadata, array(
            'addParents' => $folderId,
            'removeParents' => $previousParents,
            'fields' => 'id, parents'));
        return $file->parents;
    } catch(Exception $e) {
        echo "Error Message: ".$e;
    }
}
```

### .NET

```
using Google;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;

namespace DriveV3Snippets
{
    // Class to demonstrate use-case of Drive move file to folder.
    public class MoveFileToFolder
    {
        /// <summary>
        /// Move specified file to the specified folder.
        /// </summary>
        /// <param name="fileId">Id of file to be moved.</param>
        /// <param name="folderId">Id of folder where the fill will be moved.</param>
        /// <returns>list of parent ids for the file, null otherwise.</returns>
        public static IList<string> DriveMoveFileToFolder(string fileId,
            string folderId)
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

                // Retrieve the existing parents to remove
                var getRequest = service.Files.Get(fileId);
                getRequest.Fields = "parents";
                var file = getRequest.Execute();
                var previousParents = String.Join(",", file.Parents);
                // Move the file to the new folder
                var updateRequest =
                    service.Files.Update(new Google.Apis.Drive.v3.Data.File(),
                        fileId);
                updateRequest.Fields = "id, parents";
                updateRequest.AddParents = folderId;
                updateRequest.RemoveParents = previousParents;
                file = updateRequest.Execute();

                return file.Parents;
            }
            catch (Exception e)
            {
                // TODO(developer) - handle error appropriately
                if (e is AggregateException)
                {
                    Console.WriteLine("Credential Not found");
                }
                else if (e is GoogleApiException)
                {
                    Console.WriteLine("File or Folder not found");
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

## File and folder limits

Drive files and folders have some storage limits.

### User-item limit

Each user can have up to 500 million items that were created by that account. When the limit is reached, the user can no longer create or upload items in Drive. They can still view and edit existing items. To create files again, users must permanently delete items or use a different account. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete).

Objects that count toward this limit are:

- Items created or uploaded by the user in Drive
- Items created by the user but now owned by someone else
- Items in the trash
- Shortcuts
- Third-party shortcuts

Objects that don't count toward this limit are:

- Permanently-deleted items
- Items shared with the user but owned by someone else
- Items owned by the user but created by someone else

Attempts to add more than 500 million items returns an [`activeItemCreationLimitExceeded`](https://developers.google.com/workspace/drive/api/guides/handle-errors#active-item-limit) HTTP status code response.

Note that service accounts can't own any files. Instead, they must upload files and folders into shared drives, or use OAuth 2.0 to upload items on behalf of a human user.

### Folder-item limit

Each folder in a user's My Drive has a limit of 500,000 items. This limit doesn't apply to the root folder of My Drive. Items that count toward this limit are:

- Folders
- Files. All file types, regardless of file ownership.
- Shortcuts. Counts as a single item within a folder, even if the item it points to isn't within that folder. For more information, see [Create a shortcut to a Drive file](https://developers.google.com/workspace/drive/api/guides/shortcuts).
- Third-party shortcuts. Counts as a single item within a folder, even if the item it points to isn't within that folder. For more information, see [Create a shortcut file to content stored by your app](https://developers.google.com/workspace/drive/api/guides/third-party-shortcuts).

For more information about folder limits, see [Folder limits in Google Drive](https://support.google.com/a/answer/2490100#limits).

### Folder-depth limit

A user's My Drive can't contain more than 100 levels of nested folders. This means that a child folder cannot be stored under a folder that's more than 99 levels deep. This limitation only applies to child folders. A child file with a [MIME type](https://developers.google.com/workspace/drive/api/guides/mime-types) other than `application/vnd.google-apps.folder` is exempt from this limitation.

For example, in the following diagram a new folder can be nested inside folder number 99 but not inside folder number 100. However, folder number 100 can store files like any other Drive folder:

![Drive folder depth limit.](https://developers.google.com/static/workspace/drive/images/my-drive-nested-folders-limit.svg)

Attempts to add more than 100 levels of folders returns a [`myDriveHierarchyDepthLimitExceeded`](https://developers.google.com/workspace/drive/api/guides/handle-errors#nested-folder-levels) HTTP status code response.

## Related topics

- [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file)
- [Manage file metadata](https://developers.google.com/workspace/drive/api/guides/file)
- [File and folder limits in shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#folder-limits)
