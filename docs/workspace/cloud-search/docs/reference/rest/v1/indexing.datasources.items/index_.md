---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items/index_
root: workspace
fetched_at: 2026-04-23T15:26:14.454Z
---

# Method: indexing.datasources.items.index

Updates ACL, metadata, and content. It will insert the if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index.

This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

### HTTP request

`POST https://cloudsearch.googleapis.com/v1/indexing/{item.name=datasources/*/items/*}:index`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>item.name</code></td><td><p><code>string</code></p><p>The name of the Item. Format: datasources/{sourceId}/items/{itemId}</p><p>This is a required field. The maximum length is 1536 characters.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "item": {
    "name": string,
    "acl": {
      "inheritAclFrom": string,
      "aclInheritanceType": ,
      "readers": [
        {
          
        }
      ],
      "deniedReaders": [
        {
          
        }
      ],
      "owners": [
        {
          
        }
      ]
    },
    "metadata": {
      "title": string,
      "sourceRepositoryUrl": string,
      "containerName": string,
      "objectType": string,
      "createTime": string,
      "updateTime": string,
      "interactions": [
        {
          
        }
      ],
      "contentLanguage": string,
      "mimeType": string,
      "searchQualityMetadata": {
        
      },
      "keywords": [
        string
      ],
      "hash": string,
      "contextAttributes": [
        {
          
        }
      ]
    },
    "structuredData": {
      "object": {
        
      },
      "hash": string
    },
    "content": {
      "contentFormat": ,
      "hash": string,

          "inlineContent": string,
      "contentDataRef": {
        
      }
        },
    "version": string,
    "status": {
      "code": enum (ItemStatus.Code),
      "processingErrors": [
        {
          
        }
      ],
      "repositoryErrors": [
        {
          
        }
      ]
    },
    "queue": string,
    "payload": string,
    "itemType": 
  },
  "connectorName": string,
  "mode": enum (RequestMode.Mode),
  "debugOptions": {
    object (DebugOptions)
  },
  "indexItemOptions": {
    object (IndexItemOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>item.acl</code></td><td><p>Access control list for this item.</p></td></tr><tr><td><code>item.structuredData</code></td><td><p>The structured data for the item that should conform to a registered object definition in the schema for the data source.</p></td></tr><tr><td><code>item.content</code></td><td><p>Item content to be indexed and made text searchable.</p></td></tr><tr><td><code>item.version</code></td><td><p><code>string (bytes format)</code></p><p>Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering.</p><p>Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.</p><p>For information on how item version affects the deletion process, refer to <a href="https://developers.google.com/workspace/cloud-search/docs/guides/operations">Handle revisions after manual deletes</a>.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>item.status</code></td><td><p>status of the item. Output only field.</p></td></tr><tr><td><code>item.queue</code></td><td><p><code>string</code></p><p>Queue this item belongs to. The maximum length is 100 characters.</p></td></tr><tr><td><code>item.payload</code></td><td><p><code>string (bytes format)</code></p><p>Additional state connector can store for this item. The maximum length is 10000 bytes.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>item.itemType</code></td><td><p>The type for this item.</p></td></tr><tr><td><code>connectorName</code></td><td><p><code>string</code></p><p>The name of connector making this call.</p><p>Format: datasources/{sourceId}/connectors/{id}</p></td></tr><tr><td><code>mode</code></td><td><p><code>enum (<code>RequestMode.Mode</code>)</code></p><p>Required. The RequestMode for this request.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Common debug options.</p></td></tr><tr><td><code>indexItemOptions</code></td><td><p><code>object (<code>IndexItemOptions</code>)</code></p></td></tr></tbody></table>

### Response body

If successful, the response body contains an instance of `Operation`.

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/cloud_search.indexing`
- `https://www.googleapis.com/auth/cloud_search`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## IndexItemOptions

JSON representation

```
{
  "allowUnknownGsuitePrincipals": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>allowUnknownGsuitePrincipals</code></td><td><p><code>boolean</code></p><p>Specifies if the index request should allow Google Workspace principals that do not exist or are deleted.</p></td></tr></tbody></table>
