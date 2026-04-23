---
source: https://developers.google.com/workspace/drive/api/guides/manage-comments
root: workspace
fetched_at: 2026-04-23T15:27:40.201Z
---

# Manage comments and replies

*Comments* are user-provided feedback on a file, such as a reader of a word-processing document suggesting how to rephrase a sentence. There are two types of comments: *anchored comments* and *unanchored comments*. An anchored comment is associated with a specific location, such as a sentence in a word-processing document, within a specific version of a document. Conversely, an unanchored comment is just associated with the document.

*Replies* are attached to comments and represent a user's response to the comment. The Drive API lets your users add comments and replies to documents created by your app. Collectively, a comment with replies is known as a *discussion*.

## Use the fields parameter

For all methods (excluding `delete`) on the [`comments`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) resource, you *must* set the `fields` [system parameter](https://cloud.google.com/apis/docs/system-parameters#definitions) to specify the fields to return in the response. In most Drive resource methods this action is only required to return non-default fields, but it's mandatory for the `comments` resource. If you omit the `fields` parameter, the method returns an error. For more information, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

## Comment constraints

The following constraints are enforced when working with anchored and unanchored comments with the Drive API:

| Comment type | File type |
| --- | --- |
| Anchored | - Developers can can define their own format for the anchor specification. - The anchor is saved and returned when retrieving the comment, however Google Workspace editor apps treat these comments as un-anchored comments. |
| Unanchored | - Supported on Google Workspace documents, which will show them in the "All Comments" view. - Unanchored comments are not shown on PDFs rendered in the Drive file previewer, though they are saved and can be retrieved through the Drive API. |

## Add an anchored comment to the latest revision of a document

When you add a comment, you might want to anchor it to a region in the file. An *anchor* defines a region in a file to which a comment refers. The [`comments`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) resource defines the [`anchor`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments#Comment.FIELDS.anchor) field as a JSON string.

To add an anchored comment:

1. (Optional). Call the [`list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/revisions/list) method on the [`revisions`](https://developers.google.com/workspace/drive/api/reference/rest/v3/revisions) resource to list every `revisionID` for a document. Only follow this step if you want to anchor a comment to any revision other than the latest revision. If you want to use the latest revision, use `head` for the `revisionID`.
2. Call the [`create`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/create) method on the [`comments`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) resource with the `fileID` parameter, a `comments` resource containing the comment, and a JSON anchor string containing the `revisionID` (`r`) and region (`a`).

The following code sample shows how to create an anchored comment:

### Python

```
from google.oauth2.credentials import Credentials
from googleapiclient.errors import HttpError

# --- Configuration ---
# The ID of the file to comment on.
# Example: '1_aBcDeFgHiJkLmNoPqRsTuVwXyZ'
FILE_ID = 'FILE_ID'

# The text content of the comment.
COMMENT_TEXT = 'This is an example of an anchored comment.'

# The line number to anchor the comment to.
# Note: Line numbers are based on the revision.
ANCHOR_LINE = 10
# --- End of user-configuration section ---

SCOPES = ["https://www.googleapis.com/auth/drive"]

creds = Credentials.from_authorized_user_file("token.json", SCOPES)

def create_anchored_comment():
    """
    Create an anchored comment on a specific line in a Google Doc.

    Returns:
        The created comment object or None if an error occurred.
    """
    try:
        # Build the Drive API service
        service = build("drive", "v3", credentials=creds)

        # Define the anchor region for the comment.
        # For Google Docs, the region is typically defined by 'line' and 'revision'.
        # Other file types might use different region classifiers.
        anchor = {
            'region': {
                'kind': 'drive#commentRegion',
                'line': ANCHOR_LINE,
                'rev': 'head'
            }
        }

        # The comment body.
        comment_body = {
            'content': COMMENT_TEXT,
            'anchor': anchor
        }

        # Create the comment request.
        comment = (
            service.comments()
            .create(fileId=FILE_ID, fields="*", body=comment_body)
            .execute()
        )

        print(f"Comment ID: {comment.get('id')}")
        return comment

    except HttpError as error:
        print(f"An error occurred: {error}")
        return None

create_anchored_comment()
```

The Drive API returns an instance of the `comments` resource object which includes the `anchor` string.

## Add an unanchored comment

To add an unanchored comment, call the [`create`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/create) method with the `fileId` parameter and a [`comments`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) resource containing the comment.

The comment is inserted as plain text, but the response body provides an [`htmlContent`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments#Comment.FIELDS.html_content) field containing content formatted for display.

The following code sample shows how to create an unanchored comment:

### Python

```
from google.oauth2.credentials import Credentials
from googleapiclient.errors import HttpError

# --- Configuration ---
# The ID of the file to comment on.
# Example: '1_aBcDeFgHiJkLmNoPqRsTuVwXyZ'
FILE_ID = 'FILE_ID'

# The text content of the comment.
COMMENT_TEXT = 'This is an example of an unanchored comment.'
# --- End of user-configuration section ---

SCOPES = ["https://www.googleapis.com/auth/drive"]

creds = Credentials.from_authorized_user_file("token.json", SCOPES)

def create_unanchored_comment():
    """
    Create an unanchored comment on a specific line in a Google Doc.

    Returns:
        The created comment object or None if an error occurred.
    """
    try:
        # Build the Drive API service
        service = build("drive", "v3", credentials=creds)

        # The comment body. For an unanchored comment,
        # omit the 'anchor' property.
        comment_body = {
            'content': COMMENT_TEXT
        }

        # Create the comment request.
        comment = (
            service.comments()
            .create(fileId=FILE_ID, fields="*", body=comment_body)
            .execute()
        )

        print(f"Comment ID: {comment.get('id')}")
        return comment

    except HttpError as error:
        print(f"An error occurred: {error}")
        return None

create_unanchored_comment()
```

## Add a reply to a comment

To add a reply to a comment, use the [`create`](https://developers.google.com/workspace/drive/api/reference/rest/v3/replies/create) method on the [`replies`](https://developers.google.com/workspace/drive/api/reference/rest/v3/replies) resource with the `fileId` and `commentId` parameters. The request body uses the `content` field to add the reply.

The reply is inserted as plain text, but the response body provides an `htmlContent` field containing content formatted for display.

The method returns the fields listed in the `fields` field.

**Request**

In this example, we provide the `fileId` and `commentId` path parameters and multiple fields.

```
POST https://www.googleapis.com/drive/v3/files/FILE_ID/comments/COMMENT_ID/replies?fields=id,comment
```

**Request body**

```
{
  "content": "This is a reply to a comment."
}
```

### Resolve a comment

A comment can only be resolved by posting a reply to a comment.

To resolve a comment, use the [`create`](https://developers.google.com/workspace/drive/api/reference/rest/v3/replies/create) method on the [`replies`](https://developers.google.com/workspace/drive/api/reference/rest/v3/replies) resource with the `fileId` and `commentId` parameters.

The request body uses the [`action`](https://developers.google.com/workspace/drive/api/reference/rest/v3/replies#Reply.FIELDS.action) field to resolve the comment. You can also set the `content` field to add a reply that closes the comment.

When a comment is resolved, Drive marks the `comments` resource as `resolved: true`. Unlike [deleted comments](#delete-comment), resolved comments can include the `htmlContent` or `content` fields.

When your app resolves a comment, your UI should indicate that the comment has been addressed. For example, your app might:

- Disallow further replies and dim all previous replies plus the original comment.
- Hide resolved comments.

**Request**

In this example, we provide the `fileId` and `commentId` path parameters and multiple fields.

```
POST https://www.googleapis.com/drive/v3/files/FILE_ID/comments/COMMENT_ID/replies?fields=id,comment
```

**Request body**

```
{
  "action": "resolve",
  "content": "This comment has been resolved."
}
```

## Get a comment

To get a comment on a file, use the [`get`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/get) method on the [`comments`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) resource with the `fileId` and `commentId` parameters. If you don't know the comment ID, you can [list all comments](#list-comments) using the `list` method.

The method returns an instance of a `comments` resource.

To include deleted comments in the results, set the [`includedDeleted`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/get#body.QUERY_PARAMETERS.include_deleted) query parameter to `true`.

**Request**

In this example, we provide the `fileId` and `commentId` path parameters and multiple fields.

```
GET https://www.googleapis.com/drive/v3/files/FILE_ID/comments/COMMENT_ID?fields=id,comment,modifiedTime,resolved
```

## List comments

To list comments on a file, use the [`list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/list) method on the [`comments`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) resource with the `fileId` parameter. The method returns a list of comments.

Pass the following query parameters to customize pagination of, or filter, comments:

- `includeDeleted`: Set to `true` to include deleted comments. Deleted comments don't include the `htmlContent` or `content` fields.
- `pageSize`: The maximum number of comments to return per page.
- `pageToken`: A page token, received from a previous list call. Provide this token to retrieve the subsequent page.
- `startModifiedTime`: The minimum value of the `modifiedTime` field for the result comments.

**Request**

In this example, we provide the `fileId` path parameter, the `includeDeleted` query parameter, and multiple fields.

```
GET https://www.googleapis.com/drive/v3/files/FILE_ID/comments?includeDeleted=true&fields=(id,comment,kind,modifiedTime,resolved)
```

## Update a comment

To update a comment on a file, use the [`update`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/update) method on the [`comments`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) resource with the `fileId` and `commentId` parameters. The request body uses the `content` field to update the comment.

The boolean [`resolved`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments#Comment.FIELDS.resolved) field on the `comments` resource is read-only. A comment can only be resolved by posting a reply to a comment. For more information, see [Resolve a comment](#resolve-comment).

The method returns the fields listed in the `fields` query parameter.

**Request**

In this example, we provide the `fileId` and `commentId` path parameters and multiple fields.

```
PATCH https://www.googleapis.com/drive/v3/files/FILE_ID/comments/COMMENT_ID?fields=id,comment
```

**Request body**

```
{
  "content": "This comment is now updated."
}
```

## Delete a comment

To delete a comment on a file, use the [`delete`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/delete) method on the [`comments`](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) resource with the `fileId` and `commentId` parameters.

When a comment is deleted, Drive marks the comment resource as `deleted: true`. Deleted comments don't include the `htmlContent` or `content` fields.

**Request**

In this example, we provide the `fileId` and `commentId` path parameters.

```
DELETE https://www.googleapis.com/drive/v3/files/FILE_ID/comments/COMMENT_ID
```

## Related topics

- [Files and folders overview](https://developers.google.com/workspace/drive/api/guides/about-files)
- [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions)
