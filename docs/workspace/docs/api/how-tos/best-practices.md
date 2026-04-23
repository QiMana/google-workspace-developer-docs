---
source: https://developers.google.com/workspace/docs/api/how-tos/best-practices
root: workspace
fetched_at: 2026-04-23T15:27:05.644Z
---

# Best practices for best results

There are several principles you should follow when using the Google Docs API. These include:

- Edit backwards for efficiency
- Plan for collaboration
- Ensure state consistency using the [`WriteControl`](../reference/rest/v1/documents/batchUpdate.md#writecontrol) field
- Take tabs into account

The following sections explain these principles.

## Edit backwards for efficiency

Within a single call to the [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) method, order your requests in *descending order* of index location. This eliminates the need to compute the index changes due to insertions and deletions.

## Plan for collaboration

Expect the document state to change. Between one method call and another, other collaborators might update the document, as shown in the following diagram:

![How a document can change between method calls.](https://developers.google.com/static/workspace/docs/api/images/collaboration-issues.svg)

This can lead to errors if your indexes are wrong. With multiple users editing a document using the UI, Google Docs takes care of this transparently. However, as an API client your app must manage this. Even if you don't anticipate collaboration on the document, it's important to program defensively and make sure the document state remains consistent. For one way to ensure consistency, review the [`WriteControl`](#establish-state-consistency) section.

## Establish state consistency with WriteControl

When you read and then update a document, you can control the behavior of how competing changes are handled using the [`WriteControl`](../reference/rest/v1/documents/batchUpdate.md#writecontrol) field in the `documents.batchUpdate` method. `WriteControl` provides authority over how write requests are executed.

Here's how you use it:

1. Get the document using the [`documents.get`](../reference/rest/v1/documents/get.md) method and save the [`revisionId`](../reference/rest/v1/documents.md#Document.FIELDS.revision_id) from the returned `documents` resource.
2. Compose your update requests.
3. Include an optional [`WriteControl`](../reference/rest/v1/documents/batchUpdate.md#writecontrol) object with one of two options:
	1. The `requiredRevisionId` field is set to the `revisionId` of the document the write request is applied to. If the document was modified since the API read request, the write request isn't processed and it returns an error.
		2. The `targetRevisionId` field is set to the `revisionId` of the document the write request is applied to. If the document was modified since the API read request, the write request changes are applied against the collaborator changes. The result of the write request incorporates both the write request changes and the collaborator changes into a new revision of the document. The Docs server is responsible for merging the content.

For an example of how to construct a batch request using `WriteControl`, see this [batch request example](./batch.md#example).

## Take tabs into account

A single document can contain multiple [tabs](./tabs.md), which require specific handling in your API requests.

Here's what to remember:

1. Set the `includeTabsContent` parameter to `true` in the [`documents.get`](../reference/rest/v1/documents/get.md) method to retrieve the content from all tabs in a document. By default, not all tab contents are returned.
2. Specify the ID(s) of the tab(s) to apply each [`Request`](../reference/rest/v1/documents/request.md#request) to in the [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) method. Each [`Request`](../reference/rest/v1/documents/request.md#request) includes a way to specify the tabs to apply the update to. By default, if a tab is not specified, the [`Request`](../reference/rest/v1/documents/request.md#request) will in most cases be applied to the first tab in the document. Refer to the [`Request`](../reference/rest/v1/documents/request.md#request) s documentation for specifics.

## Related topics

- [Batch requests](./batch.md)
- [Requests and responses](../concepts/request-response.md)
- [Work with tabs](./tabs.md)
