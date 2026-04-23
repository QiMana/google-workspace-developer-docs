---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items
root: workspace
fetched_at: 2026-04-23T15:26:15.065Z
---

# REST Resource: indexing.datasources.items

## Resource: Item

Represents a single object that is an item in the search index, such as a file, folder, or a database record.

JSON representation

```
{
  "name": string,
  "acl": {
    object (ItemAcl)
  },
  "metadata": {
    object (ItemMetadata)
  },
  "structuredData": {
    object (ItemStructuredData)
  },
  "content": {
    object (ItemContent)
  },
  "version": string,
  "status": {
    object (ItemStatus)
  },
  "queue": string,
  "payload": string,
  "itemType": enum (Item.ItemType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the Item. Format: datasources/{sourceId}/items/{itemId}</p><p>This is a required field. The maximum length is 1536 characters.</p></td></tr><tr><td><code>acl</code></td><td><p><code>object (<code>ItemAcl</code>)</code></p><p>Access control list for this item.</p></td></tr><tr><td><code>structuredData</code></td><td><p><code>object (<code>ItemStructuredData</code>)</code></p><p>The structured data for the item that should conform to a registered object definition in the schema for the data source.</p></td></tr><tr><td><code>content</code></td><td><p><code>object (<code>ItemContent</code>)</code></p><p>Item content to be indexed and made text searchable.</p></td></tr><tr><td><code>version</code></td><td><p><code>string (bytes format)</code></p><p>Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering.</p><p>Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.</p><p>For information on how item version affects the deletion process, refer to <a href="https://developers.google.com/workspace/cloud-search/docs/guides/operations">Handle revisions after manual deletes</a>.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>status</code></td><td><p><code>object (<code>ItemStatus</code>)</code></p><p>Status of the item. Output only field.</p></td></tr><tr><td><code>queue</code></td><td><p><code>string</code></p><p>Queue this item belongs to. The maximum length is 100 characters.</p></td></tr><tr><td><code>payload</code></td><td><p><code>string (bytes format)</code></p><p>Additional state connector can store for this item. The maximum length is 10000 bytes.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>itemType</code></td><td><p><code>enum (<code>Item.ItemType</code>)</code></p><p>The type for this item.</p></td></tr></tbody></table>

## ItemAcl

Access control list information for the item. For more information see [Map ACLs](../../../guides/acls.md).

JSON representation

```
{
  "inheritAclFrom": string,
  "aclInheritanceType": enum (ItemAcl.AclInheritanceType),
  "readers": [
    {
      object (Principal)
    }
  ],
  "deniedReaders": [
    {
      object (Principal)
    }
  ],
  "owners": [
    {
      object (Principal)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>inheritAclFrom</code></td><td><p><code>string</code></p><p>The name of the item to inherit the Access Permission List (ACL) from. Note: ACL inheritance <em>only</em> provides access permissions to child items and does not define structural relationships, nor does it provide convenient ways to delete large groups of items. Deleting an ACL parent from the index only alters the access permissions of child items that reference the parent in the <code>inheritAclFrom</code> field. The item is still in the index, but may not visible in search results. By contrast, deletion of a container item also deletes all items that reference the container via the <code>containerName</code> field. The maximum length for this field is 1536 characters.</p></td></tr><tr><td><code>aclInheritanceType</code></td><td><p><code>enum (<code>ItemAcl.AclInheritanceType</code>)</code></p><p>Sets the type of access rules to apply when an item inherits its ACL from a parent. This should always be set in tandem with the <code>inheritAclFrom</code> field. Also, when the <code>inheritAclFrom</code> field is set, this field should be set to a valid AclInheritanceType.</p></td></tr><tr><td><code>readers[]</code></td><td><p><code>object (<code>Principal</code>)</code></p><p>List of principals who are allowed to see the item in search results. Optional if inheriting permissions from another item or if the item is not intended to be visible, such as <code>virtual containers</code>. The maximum number of elements is 1000.</p></td></tr><tr><td><code>deniedReaders[]</code></td><td><p><code>object (<code>Principal</code>)</code></p><p>List of principals who are explicitly denied access to the item in search results. While principals are denied access by default, use denied readers to handle exceptions and override the list allowed readers. The maximum number of elements is 100.</p></td></tr><tr><td><code>owners[]</code></td><td><p><code>object (<code>Principal</code>)</code></p><p>Optional. List of owners for the item. This field has no bearing on document access permissions. It does, however, offer a slight ranking boosts items where the querying user is an owner. The maximum number of elements is 5.</p></td></tr></tbody></table>

## ItemAcl.AclInheritanceType

The types of ACL inheritance.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NOT_APPLICABLE</code></td><td>The default value when this item does not inherit an ACL. Use NOT_APPLICABLE when <code>inheritAclFrom</code> is empty. An item without ACL inheritance can still have ACLs supplied by its own <code>readers</code> and <code>deniedReaders</code> fields.</td></tr><tr><td><code>CHILD_OVERRIDE</code></td><td>During an authorization conflict, the ACL of the child item determines its read access.</td></tr><tr><td><code>PARENT_OVERRIDE</code></td><td>During an authorization conflict, the ACL of the parent item specified in the <code>inheritAclFrom</code> field determines read access.</td></tr><tr><td><code>BOTH_PERMIT</code></td><td>Access is granted only if this item and the parent item specified in the <code>inheritAclFrom</code> field both permit read access.</td></tr></tbody></table>

## Principal

Reference to a user, group, or domain.

JSON representation

```
{

  "gsuitePrincipal": {
    object (GSuitePrincipal)
  },
  "userResourceName": string,
  "groupResourceName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>principal</code>.</p><p><code>principal</code> can be only one of the following:</p></td></tr><tr><td><code>gsuitePrincipal</code></td><td><p><code>object (<code>GSuitePrincipal</code>)</code></p><p>This principal is a Google Workspace user, group or domain.</p></td></tr><tr><td><code>userResourceName</code></td><td><p><code>string</code></p><p>This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{sourceId}/users/{id}</p></td></tr><tr><td><code>groupResourceName</code></td><td><p><code>string</code></p><p>This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{sourceId}/groups/{id}</p></td></tr></tbody></table>

## ItemMetadata

JSON representation

```
{
  "title": string,
  "sourceRepositoryUrl": string,
  "containerName": string,
  "objectType": string,
  "createTime": string,
  "updateTime": string,
  "interactions": [
    {
      object (Interaction)
    }
  ],
  "contentLanguage": string,
  "mimeType": string,
  "searchQualityMetadata": {
    object (SearchQualityMetadata)
  },
  "keywords": [
    string
  ],
  "hash": string,
  "contextAttributes": [
    {
      object (ContextAttribute)
    }
  ]
}
```

## Interaction

JSON representation

```
{
  "type": enum (Interaction.InteractionType),
  "principal": {
    object (Principal)
  },
  "interactionTime": string
}
```

## SearchQualityMetadata

JSON representation

```
{
  "quality": number
}
```

## ContextAttribute

A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.

JSON representation

```
{
  "name": string,
  "values": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched.</p></td></tr><tr><td><code>values[]</code></td><td><p><code>string</code></p><p>Text values of the attribute. The maximum number of elements is 10. The maximum length of an element in the array is 32 characters. The value will be normalized (lower-cased) before being matched.</p></td></tr></tbody></table>

## ItemStructuredData

Available structured data fields for the item.

JSON representation

```
{
  "object": {
    object (StructuredDataObject)
  },
  "hash": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>object</code></td><td><p><code>object (<code>StructuredDataObject</code>)</code></p><p>The structured data object that should conform to a registered object definition in the schema for the data source.</p></td></tr><tr><td><code>hash</code></td><td><p><code>string</code></p><p>Hashing value provided by the API caller. This can be used with the <code>items.push</code> method to calculate modified state. The maximum length is 2048 characters.</p></td></tr></tbody></table>

## StructuredDataObject

A structured data object consisting of named properties.

JSON representation

```
{
  "properties": [
    {
      object (NamedProperty)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties[]</code></td><td><p><code>object (<code>NamedProperty</code>)</code></p><p>The properties for the object. The maximum number of elements is 1000.</p></td></tr></tbody></table>

## NamedProperty

A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.

JSON representation

```
{
  "name": string,

  "integerValues": {
    object (NamedProperty.IntegerValues)
  },
  "doubleValues": {
    object (NamedProperty.DoubleValues)
  },
  "timestampValues": {
    object (NamedProperty.TimestampValues)
  },
  "booleanValue": boolean,
  "objectValues": {
    object (NamedProperty.ObjectValues)
  },
  "enumValues": {
    object (NamedProperty.EnumValues)
  },
  "dateValues": {
    object (NamedProperty.DateValues)
  },
  "textValues": {
    object (NamedProperty.TextValues)
  },
  "htmlValues": {
    object (NamedProperty.HtmlValues)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters.</p></td></tr><tr><td colspan="2">Union field <code>value</code>. The value(s) of the named property. Note that a property can only hold values of one type. <code>value</code> can be only one of the following:</td></tr><tr><td><code>integerValues</code></td><td><p><code>object (<code>NamedProperty.IntegerValues</code>)</code></p></td></tr><tr><td><code>doubleValues</code></td><td><p><code>object (<code>NamedProperty.DoubleValues</code>)</code></p></td></tr><tr><td><code>booleanValue</code></td><td><p><code>boolean</code></p></td></tr><tr><td><code>objectValues</code></td><td><p><code>object (<code>NamedProperty.ObjectValues</code>)</code></p></td></tr><tr><td><code>enumValues</code></td><td><p><code>object (<code>NamedProperty.EnumValues</code>)</code></p></td></tr><tr><td><code>dateValues</code></td><td><p><code>object (<code>NamedProperty.DateValues</code>)</code></p></td></tr><tr><td><code>textValues</code></td><td><p><code>object (<code>NamedProperty.TextValues</code>)</code></p></td></tr><tr><td><code>htmlValues</code></td><td><p><code>object (<code>NamedProperty.HtmlValues</code>)</code></p></td></tr></tbody></table>

## NamedProperty.IntegerValues

List of integer values.

JSON representation

```
{
  "values": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>string (int64 format)</code></p></td></tr></tbody></table>

## NamedProperty.DoubleValues

List of double values.

JSON representation

```
{
  "values": [
    number
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>number</code></p></td></tr></tbody></table>

## NamedProperty.TimestampValues

JSON representation

```
{
  "values": [
    string
  ]
}
```

## NamedProperty.ObjectValues

List of object values.

JSON representation

```
{
  "values": [
    {
      object (StructuredDataObject)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>StructuredDataObject</code>)</code></p></td></tr></tbody></table>

## NamedProperty.EnumValues

List of enum values.

JSON representation

```
{
  "values": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>string</code></p><p>The maximum allowable length for string values is 32 characters.</p></td></tr></tbody></table>

## NamedProperty.DateValues

List of date values.

JSON representation

```
{
  "values": [
    {
      object (Date)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>Date</code>)</code></p></td></tr></tbody></table>

## NamedProperty.TextValues

List of text values.

JSON representation

```
{
  "values": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>string</code></p><p>The maximum allowable length for text values is 2048 characters.</p></td></tr></tbody></table>

## NamedProperty.HtmlValues

List of html values.

JSON representation

```
{
  "values": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>string</code></p><p>The maximum allowable length for html values is 2048 characters.</p></td></tr></tbody></table>

## ItemContent

Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as `inlineContent`. If the content is uploaded and not binary, it must be UTF-8 encoded.

JSON representation

```
{
  "contentFormat": enum (ItemContent.ContentFormat),
  "hash": string,

  "inlineContent": string,
  "contentDataRef": {
    object (UploadItemRef)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contentFormat</code></td><td><p><code>enum (<code>ItemContent.ContentFormat</code>)</code></p></td></tr><tr><td><code>hash</code></td><td><p><code>string</code></p><p>Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.</p></td></tr><tr><td colspan="2"><p>Union field <code>content</code>.</p><p><code>content</code> can be only one of the following:</p></td></tr><tr><td><code>inlineContent</code></td><td><p><code>string (bytes format)</code></p><p>Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB).</p><p>A base64-encoded string.</p></td></tr><tr><td><code>contentDataRef</code></td><td><p><code>object (<code>UploadItemRef</code>)</code></p><p>Upload reference id of a previously uploaded content via write method.</p></td></tr></tbody></table>

## ItemContent.ContentFormat

The format of the content. If the format is RAW the content should be in the format specified by `mimeType`.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED</code></td><td>Invalid value.</td></tr><tr><td><code>HTML</code></td><td>contentFormat is HTML.</td></tr><tr><td><code>TEXT</code></td><td>contentFormat is free text.</td></tr><tr><td><code>RAW</code></td><td>contentFormat is raw bytes.</td></tr></tbody></table>

## UploadItemRef

Represents an upload session reference. This reference is created via `upload method`. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via `contentDataRef`.

JSON representation

```
{
  "name": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the content reference. The maximum length is 2048 characters.</p></td></tr></tbody></table>

## ItemStatus

This contains item's status and any errors.

JSON representation

```
{
  "code": enum (ItemStatus.Code),
  "processingErrors": [
    {
      object (ProcessingError)
    }
  ],
  "repositoryErrors": [
    {
      object (RepositoryError)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>enum (<code>ItemStatus.Code</code>)</code></p><p>status code.</p></td></tr><tr><td><code>processingErrors[]</code></td><td><p><code>object (<code>ProcessingError</code>)</code></p><p>Error details in case the item is in ERROR state.</p></td></tr><tr><td><code>repositoryErrors[]</code></td><td><p><code>object (<code>RepositoryError</code>)</code></p><p>Repository error reported by connector.</p></td></tr></tbody></table>

## ProcessingError

JSON representation

```
{
  "code": enum (ProcessingErrorCode),
  "errorMessage": string,
  "fieldViolations": [
    {
      object (FieldViolation)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>enum (<code>ProcessingErrorCode</code>)</code></p><p>Error code indicating the nature of the error.</p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p><p>The description of the error.</p></td></tr><tr><td><code>fieldViolations[]</code></td><td><p><code>object (<code>FieldViolation</code>)</code></p><p>In case the item fields are invalid, this field contains the details about the validation errors.</p></td></tr></tbody></table>

## ProcessingErrorCode

Codes for indicating the error encountered during the processing of items by the Cloud Search server. A single item may contain multiple processing errors.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PROCESSING_ERROR_CODE_UNSPECIFIED</code></td><td>Input only value. Use this value in Items.</td></tr><tr><td><code>MALFORMED_REQUEST</code></td><td>Item's ACL, metadata, or content is malformed or in invalid state. FieldViolations contains more details on where the problem is.</td></tr><tr><td><code>UNSUPPORTED_CONTENT_FORMAT</code></td><td>Countent format is unsupported.</td></tr><tr><td><code>INDIRECT_BROKEN_ACL</code></td><td>Items with incomplete ACL information due to inheriting other items with broken ACL or having groups with unmapped descendants.</td></tr><tr><td><code>ACL_CYCLE</code></td><td>ACL inheritance graph formed a cycle.</td></tr></tbody></table>

## FieldViolation

JSON representation

```
{
  "field": string,
  "description": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>field</code></td><td><p><code>string</code></p><p>Path of field with violation.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the error.</p></td></tr></tbody></table>

## RepositoryError

Errors when the connector is communicating to the source repository.

JSON representation

```
{
  "type": enum (RepositoryError.Type),
  "httpStatusCode": integer,
  "errorMessage": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>RepositoryError.Type</code>)</code></p><p>The type of error.</p></td></tr><tr><td><code>httpStatusCode</code></td><td><p><code>integer</code></p><p>Error codes. Matches the definition of HTTP status codes.</p></td></tr><tr><td><code>errorMessage</code></td><td><p><code>string</code></p><p>Message that describes the error. The maximum allowable length of the message is 8192 characters.</p></td></tr></tbody></table>

## RepositoryError.Type

List of error codes for communication problems with the repository.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN</code></td><td>Unknown error.</td></tr><tr><td><code>NETWORK_ERROR</code></td><td>Unknown or unreachable host.</td></tr><tr><td><code>DNS_ERROR</code></td><td>DNS problem, such as the DNS server is not responding.</td></tr><tr><td><code>CONNECTION_ERROR</code></td><td>Cannot connect to the repository server.</td></tr><tr><td><code>AUTHENTICATION_ERROR</code></td><td>Failed authentication due to incorrect credentials.</td></tr><tr><td><code>AUTHORIZATION_ERROR</code></td><td>Service account is not authorized for the repository.</td></tr><tr><td><code>SERVER_ERROR</code></td><td>Repository server error.</td></tr><tr><td><code>QUOTA_EXCEEDED</code></td><td>Quota exceeded.</td></tr><tr><td><code>SERVICE_UNAVAILABLE</code></td><td>Server temporarily unavailable.</td></tr><tr><td><code>CLIENT_ERROR</code></td><td>client-related error, such as an invalid request from the connector to the repository server.</td></tr></tbody></table>

## Item.ItemType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED</code></td><td></td></tr><tr><td><code>CONTENT_ITEM</code></td><td>An item that is indexed for the only purpose of serving information. These items cannot be referred in <code>containerName</code> or <code>inheritAclFrom</code> fields.</td></tr><tr><td><code>CONTAINER_ITEM</code></td><td>An item that gets indexed and whose purpose is to supply other items with ACLs and/or contain other items.</td></tr><tr><td><code>VIRTUAL_CONTAINER_ITEM</code></td><td>An item that does not get indexed, but otherwise has the same purpose as CONTAINER_ITEM.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes <code>Item resource</code> for the specified resource name.</td></tr><tr><td><h3>deleteQueueItems</h3></td><td>Deletes all items in a queue.</td></tr><tr><td><h3>get</h3></td><td>Gets <code>Item resource</code> by item name.</td></tr><tr><td><h3>index</h3></td><td>Updates <code>Item</code> ACL, metadata, and content.</td></tr><tr><td><h3>list</h3></td><td>Lists all or a subset of <code>Item resources</code>.</td></tr><tr><td><h3>poll</h3></td><td>Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority <code>ItemStatus</code>.</td></tr><tr><td><h3>push</h3></td><td>Pushes an item onto a queue for later polling and updating.</td></tr><tr><td><h3>unreserve</h3></td><td>Unreserves all items from a queue, making them all eligible to be polled.</td></tr><tr><td><h3>upload</h3></td><td>Creates an upload session for uploading item content.</td></tr></tbody></table>
