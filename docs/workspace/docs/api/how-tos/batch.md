---
source: https://developers.google.com/workspace/docs/api/how-tos/batch
root: workspace
fetched_at: 2026-04-23T15:27:06.143Z
---

# Batch requests

This document shows how to batch API calls together to reduce the number of connections your client has to make. Batching can improve an application's efficiency by decreasing network round trips and increasing throughput.

## Overview

Each connection your client makes results in a certain amount of overhead. The Google Docs API supports batching to let your client place multiple request objects, each one specifying a single type of request to perform, into a single batch request. A batch request can boost performance by combining multiple subrequests into a single call to the server, retrieving a single response back.

We encourage users to always batch multiple requests together. Here are some examples of situations where you can use batching:

- You've just started using the API and you have lots of data to upload.
- You need to update metadata or properties, such as formatting, on multiple objects.
- You need to delete many objects.

## Limits, authorization, & dependency considerations

Here’s a list of other items to consider when employing batch updating:

- Each batch request, including all subrequests, is counted as one API request toward your [usage limit](../limits.md).
- A batch request is authenticated once. This single authentication applies to all batch update objects in the request.
- The server processes the subrequests in the same order they appear in the batch request. Latter subrequests can depend on actions taken during earlier subrequests. For example, in the same batch request, users can insert text into an existing document and then style it.

## Batch details

A batch request consists of one `batchUpdate` method call with multiple subrequests to, for example, add and then format a document.

Each request is validated before being applied. All subrequests in the batch update are applied atomically. That is, if any request is not valid then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.

Some requests provide responses with information about the applied requests. For example, all batch update requests to add objects return responses so you can access the metadata of the newly added object, such as the ID or title.

With this approach, you can build an entire Google document using one API batch update request with multiple subrequests.

### Format of a batch request

A [request](../reference/rest/v1/documents/request.md) is a single JSON request containing multiple, nested subrequests with one required property: `requests`. The requests are constructed in an array of individual requests. Each request uses JSON to represent the request object and to contain its properties.

### Format of a batch response

The [response](../reference/rest/v1/documents/response.md) format for a batch request is similar to the request format. The server's response contains a complete reply of the single response object.

The main JSON object’s property is named `replies`. The responses are returned in an array, with each response to one of the requests occupying the same index order as the corresponding request. Some requests don't have responses and the response at that array index is empty.

## Example

The following code sample shows the use of batching with the Docs API.

### Request

This example batch request demonstrates how to:

- Insert "Hello World" text into the start of an existing document, with an index `location` of `1`, using the [`InsertTextRequest`](../reference/rest/v1/documents/request.md#inserttextrequest).
- Update the word "Hello" using the [`UpdateTextStyleRequest`](../reference/rest/v1/documents/request.md#updatetextstylerequest). The `startIndex` and `endIndex` define the `range` of formatted text within the segment.
- Using `textStyle`, set the font style to bold and the color to blue for just the word "Hello".
- Using the [`WriteControl`](../reference/rest/v1/documents/batchUpdate.md#writecontrol) field, you can control how write requests are executed. For more information, see [Establish state consistency with WriteControl](./best-practices.md#establish-state-consistency).

```
{
   "requests":[
      {
         "insertText":{
            "location":{
               "index":1,
               "tabId":TAB_ID
            },
            "text":"Hello World"
         }
      },
      {
         "updateTextStyle":{
            "range":{
               "startIndex":1,
               "endIndex":6
            },
            "textStyle":{
               "bold":true,
               "foregroundColor":{
                  "color":{
                     "rgbColor":{
                        "blue":1
                     }
                  }
               }
            },
            "fields":"bold,foreground_color"
         }
      }
   ],
   "writeControl": {
      "requiredRevisionId": "REQUIRED_REVISION_ID"
  }
}
```

Replace TAB\_ID and REQUIRED\_REVISION\_ID with the tab ID and the revision ID, respectively, of the document the write request is applied to.

### Response

This example batch response displays information on how each subrequest within the batch request was applied. Neither the [`InsertTextRequest`](../reference/rest/v1/documents/request.md#InsertTextRequest) or the [`UpdateTextStyleRequest`](../reference/rest/v1/documents/request.md#updatetextstylerequest) contain a response, so the index values of the array at \[0\] and \[1\] consist of empty curly braces. The batch request displays the `WriteControl` object, which shows how the requests were executed.

```
{
   "replies":[
      {},
      {}
   ],
   "writeControl":{
      "requiredRevisionId":\`REQUIRED_REVISION_ID\`
   },
   "documentId":\`DOCUMENT_ID\`
}
```

## Related topics

- [Best practices for best results](./best-practices.md)
