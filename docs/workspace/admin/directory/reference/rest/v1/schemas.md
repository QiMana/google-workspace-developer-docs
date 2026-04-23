---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/schemas
root: workspace
fetched_at: 2026-04-23T15:23:43.766Z
---

# REST Resource: schemas

## Resource: Schema

The type of API resource. For Schema resources, this is always `admin#directory#schema`.

JSON representation

```
{
  "schemaId": string,
  "schemaName": string,
  "fields": [
    {
      object (SchemaFieldSpec)
    }
  ],
  "displayName": string,
  "kind": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>schemaId</code></td><td><p><code>string</code></p><p>The unique identifier of the schema (Read-only)</p></td></tr><tr><td><code>schemaName</code></td><td><p><code>string</code></p><p>The schema's name.</p><p>Each <code>schemaName</code> must be unique within a customer. Reusing a name results in a <code>409: Entity already exists</code> error.</p></td></tr><tr><td><code>fields[]</code></td><td><p><code>object (<code>SchemaFieldSpec</code>)</code></p><p>A list of fields in the schema.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name for the schema.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>The ETag of the resource.</p></td></tr></tbody></table>

## SchemaFieldSpec

You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](../../../v1/guides/manage-schemas.md).

JSON representation

```
{
  "fieldName": string,
  "fieldId": string,
  "fieldType": string,
  "multiValued": boolean,
  "kind": string,
  "etag": string,
  "indexed": boolean,
  "displayName": string,
  "readAccessType": string,
  "numericIndexingSpec": {
    "minValue": number,
    "maxValue": number
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldName</code></td><td><p><code>string</code></p><p>The name of the field.</p></td></tr><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>The unique identifier of the field (Read-only)</p></td></tr><tr><td><code>fieldType</code></td><td><p><code>string</code></p><p>The type of the field.</p><p>Acceptable values are:</p><ul><li><code>BOOL</code>: Boolean values.</li><li><code>DATE</code>: Dates in <a href="http://www.w3.org/TR/NOTE-datetime">ISO-8601</a> format.</li><li><code>DOUBLE</code>: Double-precision floating-point values.</li><li><code>EMAIL</code>: Email addresses.</li><li><code>INT64</code>: 64-bit integer values.</li><li><code>PHONE</code>: Phone numbers.</li><li><code>STRING</code>: String values.</li></ul></td></tr><tr><td><code>multiValued</code></td><td><p><code>boolean</code></p><p>A boolean specifying whether this is a multi-valued field or not. Default: <code>false</code>.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The kind of resource this is. For schema fields this is always <code>admin#directory#schema#fieldspec</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>The ETag of the field.</p></td></tr><tr><td><code>indexed</code></td><td><p><code>boolean</code></p><p>Boolean specifying whether the field is indexed or not. Default: <code>true</code>.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display Name of the field.</p></td></tr><tr><td><code>readAccessType</code></td><td><p><code>string</code></p><p>Specifies who can view values of this field. See <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin">Retrieve users as a non-administrator</a> for more information.</p><p>Note: It may take up to 24 hours for changes to this field to be reflected.</p><p>Acceptable values are:</p><ul><li><code>ADMINS_AND_SELF</code>: Only administrators and the associated user can see values.</li><li><code>ALL_DOMAIN_USERS</code>: Any user in your domain can see values.</li></ul></td></tr><tr><td><code>numericIndexingSpec</code></td><td><p><code>object</code></p><p>Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the <code>numericIndexingSpec</code> allows range queries to be supported.</p></td></tr><tr><td><code>numericIndexingSpec.minValue</code></td><td><p><code>number</code></p><p>Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.</p></td></tr><tr><td><code>numericIndexingSpec.maxValue</code></td><td><p><code>number</code></p><p>Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a schema.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a schema.</td></tr><tr><td><h3>insert</h3></td><td>Creates a schema.</td></tr><tr><td><h3>list</h3></td><td>Retrieves all schemas for a customer.</td></tr><tr><td><h3>patch</h3></td><td>Patches a schema.</td></tr><tr><td><h3>update</h3></td><td>Updates a schema.</td></tr></tbody></table>
