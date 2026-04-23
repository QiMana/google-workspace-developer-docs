---
source: https://developers.google.com/workspace/drive/api/guides/manage-sharing
root: workspace
fetched_at: 2026-04-23T15:27:38.732Z
---

# Share files, folders, and drives

Every Google Drive file, folder, and shared drive have associated [`permissions`](../reference/rest/v3/permissions.md) resources. Each resource identifies the permission for a specific [`type`](../reference/rest/v3/permissions.md#Permission.FIELDS.type) (`user`, `group`, `domain`, `anyone`) and [`role`](../reference/rest/v3/permissions.md#Permission.FIELDS.role) (`owner`, `organizer`, `fileOrganizer`, `writer`, `commenter`, `reader`). For example, a file might have a permission granting a specific user (`type=user`) read-only access (`role=reader`) while another permission grants members of a specific group (`type=group`) the ability to add comments to a file (`role=commenter`).

For a complete list of roles and the operations permitted by each, see [Roles and permissions](./ref-roles.md).

## How permissions work

Permission lists for a folder propagate downward. All child files and folders inherit permissions from the parent. Whenever permissions or the hierarchy is changed, the propagation occurs recursively through all nested folders. For example, if a file exists in a folder and that folder is then moved within another folder, the permissions on the new folder propagate to the file. If the new folder grants the file user a new role, such as "writer," it overrides their old role.

Conversely, if a file inherits `role=writer` from a folder, and is moved to another folder that provides a "reader" role, the file now inherits `role=reader`.

Inherited permissions cannot be removed or reduced on any item. Instead, these permissions must be adjusted on the parent where they originate or a folder in the hierarchy must enable the [limited access setting](./limited-expansive-access.md).

Inherited permissions can be increased on an item. If a permission is increased on a child, changing the permission of a parent does not affect the child's permission unless the new parent permission is greater than the child.

Concurrent permissions operations on the same file aren't supported. Only the last update is applied.

## Understand file capabilities

The [`permissions`](../reference/rest/v3/permissions.md) resource doesn't ultimately determine the current user's ability to perform actions on a file or folder. Instead, the [`files`](../reference/rest/v3/files.md) resource contains a collection of boolean [`capabilities`](../reference/rest/v3/files.md#File.FIELDS.capabilities) fields used to indicate whether an action can be performed on a file or folder. The Google Drive API sets these fields based on the current user's `permissions` resource associated with the file or folder.

For example, when Alex logs into your app and tries to share a file, Alex's role is checked for permissions on the file. If the role allows them to share a file, the `capabilities` related to the file, such as `canShare`, are set relative to the role. If Alex wants to share the file, your app checks the `capabilities` to ensure `canShare` is set to `true`.

### Get file capabilities

When your app opens a file, it should check the file's capabilities and render the UI to reflect the permissions of the current user. For example, if the user doesn't have the `canComment` capability on the file, the ability to comment should be disabled in the UI.

To check the capabilities, call the [`get`](../reference/rest/v3/files/get.md) method on the [`files`](../reference/rest/v3/files.md) resource with the `fileId` path parameter and the `fields` parameter set to the `capabilities` field. For further information on returning fields using the `fields` parameter, see [Return specific fields](./fields-parameter.md).

The following code sample shows how to verify user permissions. The response returns a list of capabilities the user has on the file. Each capability corresponds to a fine-grained action that a user can take. Some fields are only populated for items in shared drives.

**Request**

```
GET https://www.googleapis.com/drive/v3/files/FILE_ID?fields=capabilities
```

**Response**

```
{
  "capabilities": {
    "canAcceptOwnership": false,
    "canAddChildren": false,
    "canAddMyDriveParent": false,
    "canChangeCopyRequiresWriterPermission": true,
    "canChangeItemDownloadRestriction": true,
    "canChangeSecurityUpdateEnabled": false,
    "canChangeViewersCanCopyContent": true,
    "canComment": true,
    "canCopy": true,
    "canDelete": true,
    "canDisableInheritedPermissions": false,
    "canDownload": true,
    "canEdit": true,
    "canEnableInheritedPermissions": true,
    "canListChildren": false,
    "canModifyContent": true,
    "canModifyContentRestriction": true,
    "canModifyEditorContentRestriction": true,
    "canModifyOwnerContentRestriction": true,
    "canModifyLabels": true,
    "canMoveChildrenWithinDrive": false,
    "canMoveItemIntoTeamDrive": true,
    "canMoveItemOutOfDrive": true,
    "canMoveItemWithinDrive": true,
    "canReadLabels": true,
    "canReadRevisions": true,
    "canRemoveChildren": false,
    "canRemoveContentRestriction": false,
    "canRemoveMyDriveParent": true,
    "canRename": true,
    "canShare": true,
    "canTrash": true,
    "canUntrash": true
  }
}
```

## Scenarios for sharing Drive resources

There are five different types of sharing scenarios:

1. To share a file in My Drive, the user must have `role=writer` or `role=owner`.
	- If the [`writersCanShare`](../reference/rest/v3/files.md#File.FIELDS.writers_can_share) boolean value is set to `false` for the file, the user must have `role=owner`.
		- If the user with `role=writer` has temporary access governed by an expiration date and time, they can't share the file. For more information, see [Set an expiration date to limit item access](#expiration-date).
2. To share a folder in My Drive, the user must have `role=writer` or `role=owner`.
	- If the `writersCanShare` boolean value is set to `false` for the file, the user must have the more permissive `role=owner`.
		- Temporary access (governed by an expiration date and time) is only allowed on folders with `role=reader`. For more information, see see [Set an expiration date to limit item access](#expiration-date).
3. To share a file in a shared drive, the user must have `role=writer`, `role=fileOrganizer`, or `role=organizer`.
	- The `writersCanShare` setting doesn't apply to items in shared drives. It's treated as if it's always set to `true`.
4. To share a folder in a shared drive, the user must have `role=organizer`.
	- If the [`sharingFoldersRequiresOrganizerPermission`](../reference/rest/v3/drives.md#Drive.FIELDS.inlinedField_29) restriction on a shared drive is set to `false`, users with `role=fileOrganizer` can share folders in that shared drive.
5. To manage shared drive membership, the user must have `role=organizer`. Only users and groups can be members of shared drives.

## Use the fields parameter

If you want to specify the fields to return in the response, you can set the `fields` [system parameter](https://cloud.google.com/apis/docs/system-parameters#definitions) with any method of the `permissions` resource. If you omit the `fields` parameter, the server returns a default set of fields specific to the method. For example, the [`list`](../reference/rest/v3/permissions/list.md) method returns only the `id`, `type`, `kind`, and `role` fields for each file. To return different fields, see [Return specific fields](./fields-parameter.md).

## Create a permission

The following two fields are necessary when creating a permission:

- [`type`](../reference/rest/v3/permissions.md#Permission.FIELDS.type): The `type` identifies the permission scope (`user`, `group`, `domain`, or `anyone`). A permission with `type=user` applies to a specific user whereas a permission with `type=domain` applies to everyone in a specific domain.
- [`role`](../reference/rest/v3/permissions.md#Permission.FIELDS.role): The `role` field identifies operations the `type` can perform. For example, a permission with `type=user` and `role=reader` grants a specific user read-only access to the file or folder. Or, a permission with `type=domain` and `role=commenter` lets everyone in the domain add comments to a file. For a complete list of roles and the operations permitted by each, refer to [Roles and permissions](./ref-roles.md).

When you create a permission where `type=user` or `type=group`, you must also provide an [`emailAddress`](../reference/rest/v3/permissions.md#Permission.FIELDS.email_address) to tie the specific user or group to the permission.

When you create a permission where `type=domain`, you must also provide a [`domain`](../reference/rest/v3/permissions.md#Permission.FIELDS.domain) to tie a specific domain to the permission.

To create a permission:

1. Use the [`create`](../reference/rest/v3/permissions/create.md) method on the [`permissions`](../reference/rest/v3/permissions.md) resource with the `fileId` path parameter for the associated file or folder.
2. In the request body, specify the `type` and `role`.
3. If `type=user` or `type=group`, provide an `emailAddress`. If `type=domain`, provide a `domain`.

The following code sample shows how to create a permission. The response returns an instance of a `permissions` resource, including the assigned `permissionId`.

**Request**

```
POST https://www.googleapis.com/drive/v3/files/FILE_ID/permissions
```

```
{
  "requests": [
    {
        "type": "user",
        "role": "commenter",
        "emailAddress": "alex@altostrat.com"
    }
  ]
}
```

**Response**

```
{
    "kind": "drive#permission",
    "id": "PERMISSION_ID",
    "type": "user",
    "role": "commenter"
}
```

### Use target audiences

Target audiences are groups of people—such as departments or teams—that you can recommend for users to share their items with. You can encourage users to share items with a more specific or limited audience rather than your entire organization. Target audiences can help you improve the security and privacy of your data, and make it easier for users to share appropriately. For more information, see [About target audiences](https://support.google.com/a/answer/9934697).

To use target audiences:

1. In the Google Admin console, go to Menu \> **Directory** \> **Target audiences**.
	[Go to Target audiences](https://admin.google.com/ac/targetaudiences)
	You must be signed in using an account with [super administrator](https://support.google.com//a/answer/2405986#super_admin) privileges for this task.
2. In the **Target audiences list**, click the name of the target audience. To create a target audience, see [Create a target audience](https://support.google.com/a/answer/9935192)
3. Copy the unique ID from the target audience URL: `https://admin.google.com/ac/targetaudiences/ID`.
4. [Create a permission](#create-permission) with `type=domain`, and set the `domain` field to `ID.audience.googledomains.com`.

To view how users interact with target audiences, see [User experience for link sharing](https://support.google.com/a/answer/9934697#ue).

## Get a permission

To get a permission, use the [`get`](../reference/rest/v3/permissions/get.md) method on the [`permissions`](../reference/rest/v3/permissions.md) resource with the `fileId` and `permissionId` path parameters. If you don't know the permission ID, you can [list all permissions](#list-permissions) using the `list` method.

The following code sample shows how to get a permission by ID. The response returns an instance of a `permissions` resource.

**Request**

```
GET https://www.googleapis.com/drive/v3/files/FILE_ID/permissionsPERMISSION_ID
```

**Response**

```
{
  "kind": "drive#permissionList",
  "permissions": [
    {
      "kind": "drive#permission",
      "id": "PERMISSION_ID",
      "type": "user",
      "role": "commenter"
    }
  ]
}
```

## List all permissions

To list permissions for a file, folder, or shared drive, use the [`list`](../reference/rest/v3/permissions/list.md) method on the [`permissions`](../reference/rest/v3/permissions.md) resource with the `fileId` path parameter.

Pass the following [query parameters](../reference/rest/v3/permissions/list.md#query-parameters) to customize pagination of, or to filter, permissions:

- `pageSize`: The maximum number of permissions to return per page. If not set for files in a shared drive, at most 100 results are returned. If not set for files that aren't in a shared drive, the entire list is returned.
- `pageToken`: A page token, received from a previous list call. Provide this token to retrieve the subsequent page.
- `supportsAllDrives`: Whether the requesting app supports both My Drives and shared drives.
- `useDomainAdminAccess`: Set to `true` to issue the request as a domain administrator. If the `fileId` parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](./manage-shareddrives.md#manage-administrators).
- `includePermissionsForView`: The additional view's permissions to include in the response. Only `published` is supported.

The following code sample shows how to get all permissions. The response returns a list of permissions for a file, folder, or shared drive.

**Request**

```
GET https://www.googleapis.com/drive/v3/files/FILE_ID/permissions
```

**Response**

```
{
  "kind": "drive#permissionList",
  "permissions": [
    {
      "id": "PERMISSION_ID",
      "type": "user",
      "kind": "drive#permission",
      "role": "commenter"
    }
  ]
}
```

## Update permissions

To update permissions on a file or folder, you can change the assigned role. For more information on finding the role source, see [Determine the role source](#role-source).

1. Call the [`update`](../reference/rest/v3/permissions/update.md) method on the [`permissions`](../reference/rest/v3/permissions.md) resource with the `fileId` path parameter set to the associated file, folder, or shared drive and the `permissionId` path parameter set to the permission to change. To find the `permissionId`, use the [`list`](../reference/rest/v3/permissions/list.md) method on the `permissions` resource with the `fileId` path parameter.
2. In the request, identify the new `role`.

You can grant permissions on individual files or folders in a shared drive even if the user or group is already a member. For example, Alex has `role=commenter` as part of their membership to a shared drive. However, your app can grant Alex `role=writer` for a file in a shared drive. In this case, because the new role is more permissive than the role granted through their membership, the new permission becomes the *effective role* for the file or folder.

You can apply updates through patch semantics, meaning you can make partial modifications to a resource. You must explicitly set the fields that you intend to modify in your request. Any fields not included in the request retain their existing values. For more information, see [Working with partial resources](./performance.md#partial).

The following code sample shows how to change permissions on a file or folder from `commenter` to `writer`. The response returns an instance of a `permissions` resource.

**Request**

```
PATCH https://www.googleapis.com/drive/v3/files/FILE_ID/permissions/PERMISSION_ID
```

```
{
  "role": "writer"
}
```

**Response**

```
{
  "kind": "drive#permission",
  "id": "PERMISSION_ID",
  "type": "user",
  "role": "writer"
}
```

### Determine the role source

To change the role on a file or folder, you must know the source of the role. For shared drives, the source of a role can be based on membership to the shared drive, the role on a folder, or the role on a file.

To determine the role source for a shared drive, or items within that drive, call the [`get`](../reference/rest/v3/permissions/get.md) method on the [`permissions`](../reference/rest/v3/permissions.md) resource with the `fileId` and `permissionId` path parameters, and the `fields` parameter set to the `permissionDetails` field.

To find the `permissionId`, use the [`list`](../reference/rest/v3/permissions/list.md) method on the `permissions` resource with the `fileId` path parameter. To fetch the `permissionDetails` field on the `list` request, set the `fields` parameter to `permissions/permissionDetails`.

This field enumerates all inherited and direct file permissions for the user, group, or domain.

The following code sample shows how to determine the role source. The response returns the `permissionDetails` of a `permissions` resource. The `inheritedFrom` field provides the ID of the item from which the permission is inherited.

**Request**

```
GET https://www.googleapis.com/drive/v3/files/FILE_ID/permissions/PERMISSION_ID?fields=permissionDetails&supportsAllDrives=true
```

**Response**

```
{
  "permissionDetails": [
    {
      "permissionType": "member",
      "role": "commenter",
      "inheritedFrom": "INHERITED_FROM_ID",
      "inherited": true
    },
    {
      "permissionType": "file",
      "role": "writer",
      "inherited": false
    }
  ]
}
```

## Update multiple permissions with batch requests

We strongly recommend using [batch requests](./performance.md#batch-requests) to modify multiple permissions.

The following is an example of performing a batch permission modification with a client library.

### Java

```
import com.google.api.client.googleapis.batch.BatchRequest;
import com.google.api.client.googleapis.batch.json.JsonBatchCallback;
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpHeaders;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.Permission;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/* Class to demonstrate use-case of modify permissions. */
public class ShareFile {

  /**
   * Batch permission modification.
   * realFileId file Id.
   * realUser User Id.
   * realDomain Domain of the user ID.
   *
   * @return list of modified permissions if successful, {@code null} otherwise.
   * @throws IOException if service account credentials file not found.
   */
  public static List<String> shareFile(String realFileId, String realUser, String realDomain)
      throws IOException {
        /* Load pre-authorized user credentials from the environment.
         TODO(developer) - See https://developers.google.com/identity for
         guides on implementing OAuth2 for your application.application*/
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

    final List<String> ids = new ArrayList<String>();

    JsonBatchCallback<Permission> callback = new JsonBatchCallback<Permission>() {
      @Override
      public void onFailure(GoogleJsonError e,
                            HttpHeaders responseHeaders)
          throws IOException {
        // Handle error
        System.err.println(e.getMessage());
      }

      @Override
      public void onSuccess(Permission permission,
                            HttpHeaders responseHeaders)
          throws IOException {
        System.out.println("Permission ID: " + permission.getId());

        ids.add(permission.getId());

      }
    };
    BatchRequest batch = service.batch();
    Permission userPermission = new Permission()
        .setType("user")
        .setRole("writer");

    userPermission.setEmailAddress(realUser);
    try {
      service.permissions().create(realFileId, userPermission)
          .setFields("id")
          .queue(batch, callback);

      Permission domainPermission = new Permission()
          .setType("domain")
          .setRole("reader");

      domainPermission.setDomain(realDomain);

      service.permissions().create(realFileId, domainPermission)
          .setFields("id")
          .queue(batch, callback);

      batch.execute();

      return ids;
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      System.err.println("Unable to modify permission: " + e.getDetails());
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

def share_file(real_file_id, real_user, real_domain):
  """Batch permission modification.
  Args:
      real_file_id: file Id
      real_user: User ID
      real_domain: Domain of the user ID
  Prints modified permissions

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create drive api client
    service = build("drive", "v3", credentials=creds)
    ids = []
    file_id = real_file_id

    def callback(request_id, response, exception):
      if exception:
        # Handle error
        print(exception)
      else:
        print(f"Request_Id: {request_id}")
        print(f'Permission Id: {response.get("id")}')
        ids.append(response.get("id"))

    # pylint: disable=maybe-no-member
    batch = service.new_batch_http_request(callback=callback)
    user_permission = {
        "type": "user",
        "role": "writer",
        "emailAddress": "user@example.com",
    }
    batch.add(
        service.permissions().create(
            fileId=file_id,
            body=user_permission,
            fields="id",
        )
    )
    domain_permission = {
        "type": "domain",
        "role": "reader",
        "domain": "example.com",
    }
    domain_permission["domain"] = real_domain
    batch.add(
        service.permissions().create(
            fileId=file_id,
            body=domain_permission,
            fields="id",
        )
    )
    batch.execute()

  except HttpError as error:
    print(f"An error occurred: {error}")
    ids = None

  return ids

if __name__ == "__main__":
  share_file(
      real_file_id="1dUiRSoAQKkM3a4nTPeNQWgiuau1KdQ_l",
      real_user="gduser1@workspacesamples.dev",
      real_domain="workspacesamples.dev",
  )
```

### Node.js

```
import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';

/**
 * Shares a file with a user and a domain.
 * @param {string} fileId The ID of the file to share.
 * @param {string} targetUserEmail The email address of the user to share with.
 * @param {string} targetDomainName The domain to share with.
 * @return {Promise<Array<string>>} A promise that resolves to an array of permission IDs.
 */
async function shareFile(fileId, targetUserEmail, targetDomainName) {
  // Authenticate with Google and get an authorized client.
  // TODO (developer): Use an appropriate auth mechanism for your app.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  // Create a new Drive API client (v3).
  const service = google.drive({version: 'v3', auth});

  /** @type {Array<string>} */
  const permissionIds = [];

  // The permissions to create.
  const permissions = [
    {
      type: 'user',
      role: 'writer',
      emailAddress: targetUserEmail, // e.g., 'user@partner.com'
    },
    {
      type: 'domain',
      role: 'writer',
      domain: targetDomainName, // e.g., 'example.com'
    },
  ];

  // Iterate through the permissions and create them one by one.
  for (const permission of permissions) {
    const result = await service.permissions.create({
      requestBody: permission,
      fileId,
      fields: 'id',
    });

    if (result.data.id) {
      permissionIds.push(result.data.id);
      console.log(\`Inserted permission id: ${result.data.id}\`);
    } else {
      throw new Error('Failed to create permission');
    }
  }
  return permissionIds;
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Drive;
function shareFile()
{
    try {
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        $realFileId = readline("Enter File Id: ");
        $realUser = readline("Enter user email address: ");
        $realDomain = readline("Enter domain name: ");
        $ids = array();
            $fileId = '1sTWaJ_j7PkjzaBWtNc3IzovK5hQf21FbOw9yLeeLPNQ';
            $fileId = $realFileId;
            $driveService->getClient()->setUseBatch(true);
            try {
                $batch = $driveService->createBatch();

                $userPermission = new Drive\Permission(array(
                    'type' => 'user',
                    'role' => 'writer',
                    'emailAddress' => 'user@example.com'
                ));
                $userPermission['emailAddress'] = $realUser;
                $request = $driveService->permissions->create(
                    $fileId, $userPermission, array('fields' => 'id'));
                $batch->add($request, 'user');
                $domainPermission = new Drive\Permission(array(
                    'type' => 'domain',
                    'role' => 'reader',
                    'domain' => 'example.com'
                ));
                $userPermission['domain'] = $realDomain;
                $request = $driveService->permissions->create(
                    $fileId, $domainPermission, array('fields' => 'id'));
                $batch->add($request, 'domain');
                $results = $batch->execute();

                foreach ($results as $result) {
                    if ($result instanceof Google_Service_Exception) {
                        // Handle error
                        printf($result);
                    } else {
                        printf("Permission ID: %s\n", $result->id);
                        array_push($ids, $result->id);
                    }
                }
            } finally {
                $driveService->getClient()->setUseBatch(false);
            }
            return $ids;
    } catch(Exception $e) {
        echo "Error Message: ".$e;
    }

}
```

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Drive.v3.Data;
using Google.Apis.Requests;
using Google.Apis.Services;

namespace DriveV3Snippets
{
    // Class to demonstrate use-case of Drive modify permissions.
    public class ShareFile
    {
        /// <summary>
        /// Batch permission modification.
        /// </summary>
        /// <param name="realFileId">File id.</param>
        /// <param name="realUser">User id.</param>
        /// <param name="realDomain">Domain id.</param>
        /// <returns>list of modified permissions, null otherwise.</returns>
        public static IList<String> DriveShareFile(string realFileId, string realUser, string realDomain)
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

                var ids = new List<String>();
                var batch = new BatchRequest(service);
                BatchRequest.OnResponse<Permission> callback = delegate(
                    Permission permission,
                    RequestError error,
                    int index,
                    HttpResponseMessage message)
                {
                    if (error != null)
                    {
                        // Handle error
                        Console.WriteLine(error.Message);
                    }
                    else
                    {
                        Console.WriteLine("Permission ID: " + permission.Id);
                    }
                };
                Permission userPermission = new Permission()
                {
                    Type = "user",
                    Role = "writer",
                    EmailAddress = realUser
                };

                var request = service.Permissions.Create(userPermission, realFileId);
                request.Fields = "id";
                batch.Queue(request, callback);

                Permission domainPermission = new Permission()
                {
                    Type = "domain",
                    Role = "reader",
                    Domain = realDomain
                };
                request = service.Permissions.Create(domainPermission, realFileId);
                request.Fields = "id";
                batch.Queue(request, callback);
                var task = batch.ExecuteAsync();
                task.Wait();
                return ids;
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

## Delete a permission

To revoke access to a file or folder, call the [`delete`](../reference/rest/v3/permissions/delete.md) method on the [`permissions`](../reference/rest/v3/permissions.md) resource with the `fileId` and the `permissionId` path parameters set to delete the permission.

Inherited permissions cannot be revoked. Update or delete the permission on the parent folder instead. Deleting a permission on a folder also revokes any equivalent access on child items.

Reducing permissions compared to a parent requires using the [limited access setting](./limited-expansive-access.md).

The following code sample shows how to revoke access by deleting a `permissionId`. If successful, the response body is an empty JSON object. To confirm the permission is removed, use the [`list`](../reference/rest/v3/permissions/list.md) method on the `permissions` resource with the `fileId` path parameter.

**Request**

```
DELETE https://www.googleapis.com/drive/v3/files/FILE_ID/permissions/PERMISSION_ID
```

## Set an expiration date to limit item access

When you're working with people on a sensitive project, you might want to restrict their access to certain items in Drive after a period of time. For files and folders, you can set an expiration date to limit or remove access to that item.

To set the expiration date:

- Use the [`create`](../reference/rest/v3/permissions/create.md) method on the [`permissions`](../reference/rest/v3/permissions.md) resource and set the [`expirationTime`](../reference/rest/v3/permissions.md#Permission.FIELDS.expiration_time) field (along with the other required fields). For more information, see [Create a permission](#create-permission).
- Use the [`update`](../reference/rest/v3/permissions/update.md) method on the `permissions` resource and set the `expirationTime` field (along with the other required fields). For more information, see [Update permissions](#update-permissions).

The [`expirationTime`](../reference/rest/v3/permissions.md#Permission.FIELDS.expiration_time) field denotes when the permission expires using [RFC 3339 date-time](https://datatracker.ietf.org/doc/html/rfc3339). Expiration times have the following restrictions:

- They can only be set on user and group permissions.
- Time must be in the future.
- The time cannot be more than one year in the future.
- Only the `reader` role is eligible for expiring access on a folder.

For more information about expiration date, see the following articles:

- [Set an expiration date for file access](https://support.google.com/a/users/answer/13005112#set-expiration-date)
- [Add an expiration date](https://support.google.com/drive/answer/7166529#addexpiration)

## Related topics

- [Manage pending access proposals](./pending-access.md)
- [Manage folders with limited and expansive access](./limited-expansive-access.md)
- [Transfer file ownership](./transfer-file.md)
- [Protect file content](./content-restrictions.md)
- [Access link-shared drive files using resource keys](./resource-keys.md)
- [Roles and permissions](./ref-roles.md)
