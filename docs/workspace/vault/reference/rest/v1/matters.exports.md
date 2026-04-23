---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports
root: workspace
fetched_at: 2026-04-23T15:32:05.856Z
---

# REST Resource: matters.exports

## Resource: Export

An export.

To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

JSON representation

```
{
  "id": string,
  "matterId": string,
  "parentExportId": string,
  "name": string,
  "requester": {
    object (UserInfo)
  },
  "query": {
    object (Query)
  },
  "exportOptions": {
    object (ExportOptions)
  },
  "createTime": string,
  "status": enum (ExportStatus),
  "stats": {
    object (ExportStats)
  },

  "cloudStorageSink": {
    object (CloudStorageSink)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. The generated export ID.</p></td></tr><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>Output only. The matter ID.</p></td></tr><tr><td><code>parentExportId</code></td><td><p><code>string</code></p><p>Output only. Identifies the parent export that spawned this child export. This is only set on child exports.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports.</p></td></tr><tr><td><code>requester</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The requester of the export.</p></td></tr><tr><td><code>query</code></td><td><p><code>object (<code>Query</code>)</code></p><p>The query parameters used to create the export.</p></td></tr><tr><td><code>exportOptions</code></td><td><p><code>object (<code>ExportOptions</code>)</code></p><p>Additional export options.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time when the export was created.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>status</code></td><td><p><code>enum (<code>ExportStatus</code>)</code></p><p>Output only. The status of the export.</p></td></tr><tr><td><code>stats</code></td><td><p><code>object (<code>ExportStats</code>)</code></p><p>Output only. Details about the export progress and size.</p></td></tr><tr><td colspan="2">Union field <code>export_sink</code>. Export sink type. <code>export_sink</code> can be only one of the following:</td></tr><tr><td><code>cloudStorageSink</code></td><td><p><code>object (<code>CloudStorageSink</code>)</code></p><p>Output only. The sink for export files in Cloud Storage.</p></td></tr></tbody></table>

## UserInfo

User's information.

JSON representation

```
{
  "email": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email address of the user.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The displayed name of the user.</p></td></tr></tbody></table>

## ExportOptions

Additional options for exports

JSON representation

```
{
  "region": enum (ExportRegion),

  "mailOptions": {
    object (MailExportOptions)
  },
  "groupsOptions": {
    object (GroupsExportOptions)
  },
  "driveOptions": {
    object (DriveExportOptions)
  },
  "hangoutsChatOptions": {
    object (HangoutsChatExportOptions)
  },
  "voiceOptions": {
    object (VoiceExportOptions)
  },
  "calendarOptions": {
    object (CalendarExportOptions)
  },
  "geminiOptions": {
    object (GeminiExportOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>region</code></td><td><p><code>enum (<code>ExportRegion</code>)</code></p><p>The requested data region for the export.</p></td></tr><tr><td colspan="2">Union field <code>corpus_export_options</code>. Service-specific options for exports. <code>corpus_export_options</code> can be only one of the following:</td></tr><tr><td><code>mailOptions</code></td><td><p><code>object (<code>MailExportOptions</code>)</code></p><p>Options for Gmail exports.</p></td></tr><tr><td><code>groupsOptions</code></td><td><p><code>object (<code>GroupsExportOptions</code>)</code></p><p>Options for Groups exports.</p></td></tr><tr><td><code>driveOptions</code></td><td><p><code>object (<code>DriveExportOptions</code>)</code></p><p>Options for Drive exports.</p></td></tr><tr><td><code>hangoutsChatOptions</code></td><td><p><code>object (<code>HangoutsChatExportOptions</code>)</code></p><p>Options for Chat exports.</p></td></tr><tr><td><code>voiceOptions</code></td><td><p><code>object (<code>VoiceExportOptions</code>)</code></p><p>Options for Voice exports.</p></td></tr><tr><td><code>calendarOptions</code></td><td><p><code>object (<code>CalendarExportOptions</code>)</code></p><p>Option available for Calendar export.</p></td></tr><tr><td><code>geminiOptions</code></td><td><p><code>object (<code>GeminiExportOptions</code>)</code></p><p>Option available for Gemini export.</p></td></tr></tbody></table>

## MailExportOptions

Options for Gmail exports.

JSON representation

```
{
  "exportFormat": enum (ExportFormat),
  "showConfidentialModeContent": boolean,
  "useNewExport": boolean,
  "exportLinkedDriveFiles": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportFormat</code></td><td><p><code>enum (<code>ExportFormat</code>)</code></p><p>The file format for exported messages.</p></td></tr><tr><td><code>showConfidentialModeContent</code></td><td><p><code>boolean</code></p><p>To export confidential mode content, set to <strong>true</strong>.</p></td></tr><tr><td><code>useNewExport</code></td><td><p><code>boolean</code></p><p>To use the new export system, set to <strong>true</strong>.</p></td></tr><tr><td><code>exportLinkedDriveFiles</code></td><td><p><code>boolean</code></p><p>Optional. To enable exporting linked Drive files, set to <strong>true</strong>.</p></td></tr></tbody></table>

## ExportFormat

Export format for messages

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>EXPORT_FORMAT_UNSPECIFIED</code></td><td>No export format specified.</td></tr><tr><td><code>MBOX</code></td><td>Export as MBOX. Only available for Gmail, Groups, Hangouts and Voice.</td></tr><tr><td><code>PST</code></td><td>Export as PST. Only available for Gmail, Groups, Hangouts, Voice and Calendar.</td></tr><tr><td><code>ICS</code></td><td>Export as ICS. Only available for Calendar.</td></tr><tr><td><code>XML</code></td><td>Export as XML. Only available for Gemini.</td></tr></tbody></table>

## GroupsExportOptions

Options for Groups exports.

JSON representation

```
{
  "exportFormat": enum (ExportFormat)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportFormat</code></td><td><p><code>enum (<code>ExportFormat</code>)</code></p><p>The file format for exported messages.</p></td></tr></tbody></table>

## DriveExportOptions

Options for Drive exports.

JSON representation

```
{
  "includeAccessInfo": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>includeAccessInfo</code></td><td><p><code>boolean</code></p><p>To include access level information for users with <a href="https://support.google.com/vault/answer/6099459#metadata">indirect access</a> to files, set to <strong>true</strong>.</p></td></tr></tbody></table>

## HangoutsChatExportOptions

Options for Chat exports.

JSON representation

```
{
  "exportFormat": enum (ExportFormat)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportFormat</code></td><td><p><code>enum (<code>ExportFormat</code>)</code></p><p>The file format for exported messages.</p></td></tr></tbody></table>

## VoiceExportOptions

The options for Voice exports.

JSON representation

```
{
  "exportFormat": enum (ExportFormat)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportFormat</code></td><td><p><code>enum (<code>ExportFormat</code>)</code></p><p>The file format for exported text messages.</p></td></tr></tbody></table>

## CalendarExportOptions

The options for Calendar exports.

JSON representation

```
{
  "exportFormat": enum (ExportFormat)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportFormat</code></td><td><p><code>enum (<code>ExportFormat</code>)</code></p><p>The file format for exported text messages.</p></td></tr></tbody></table>

## GeminiExportOptions

The options for Gemini exports.

JSON representation

```
{
  "exportFormat": enum (ExportFormat)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportFormat</code></td><td><p><code>enum (<code>ExportFormat</code>)</code></p><p>The file format for exported messages.</p></td></tr></tbody></table>

## ExportRegion

The [data region](https://support.google.com/a/answer/7630496) for the export.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>EXPORT_REGION_UNSPECIFIED</code></td><td>The region is unspecified. Defaults to ANY.</td></tr><tr><td><code>ANY</code></td><td>Any region.</td></tr><tr><td><code>US</code></td><td>United States region.</td></tr><tr><td><code>EUROPE</code></td><td>Europe region.</td></tr></tbody></table>

## ExportStatus

The status of the export.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>EXPORT_STATUS_UNSPECIFIED</code></td><td>The status is unspecified.</td></tr><tr><td><code>COMPLETED</code></td><td>The export completed.</td></tr><tr><td><code>FAILED</code></td><td>The export failed.</td></tr><tr><td><code>IN_PROGRESS</code></td><td>The export is in progress.</td></tr></tbody></table>

## ExportStats

Progress information for an export.

JSON representation

```
{
  "exportedArtifactCount": string,
  "totalArtifactCount": string,
  "sizeInBytes": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>exportedArtifactCount</code></td><td><p><code>string (int64 format)</code></p><p>The number of messages or files already processed for export.</p></td></tr><tr><td><code>totalArtifactCount</code></td><td><p><code>string (int64 format)</code></p><p>The number of messages or files to be exported.</p></td></tr><tr><td><code>sizeInBytes</code></td><td><p><code>string (int64 format)</code></p><p>The size of export in bytes.</p></td></tr></tbody></table>

## CloudStorageSink

Export sink for Cloud Storage files.

JSON representation

```
{
  "files": [
    {
      object (CloudStorageFile)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>files[]</code></td><td><p><code>object (<code>CloudStorageFile</code>)</code></p><p>Output only. The exported files in Cloud Storage.</p></td></tr></tbody></table>

## CloudStorageFile

The export file in Cloud Storage

JSON representation

```
{
  "bucketName": string,
  "objectName": string,
  "size": string,
  "md5Hash": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>bucketName</code></td><td><p><code>string</code></p><p>The name of the Cloud Storage bucket for the export file. You can use this value in the Cloud Storage <a href="https://cloud.google.com/storage/docs/json_api">JSON API</a> or <a href="https://cloud.google.com/storage/docs/xml-api">XML API</a>, but not to list the bucket contents. Instead, you can <a href="https://cloud.google.com/storage/docs/json_api/v1/objects/get">get individual export files</a> by object name.</p></td></tr><tr><td><code>objectName</code></td><td><p><code>string</code></p><p>The name of the Cloud Storage object for the export file. You can use this value in the Cloud Storage <a href="https://cloud.google.com/storage/docs/json_api">JSON API</a> or <a href="https://cloud.google.com/storage/docs/xml-api">XML API</a>.</p></td></tr><tr><td><code>size</code></td><td><p><code>string (int64 format)</code></p><p>The export file size.</p></td></tr><tr><td><code>md5Hash</code></td><td><p><code>string</code></p><p>The md5 hash of the file.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates an export.</td></tr><tr><td><h3>delete</h3></td><td>Deletes an export.</td></tr><tr><td><h3>get</h3></td><td>Gets an export.</td></tr><tr><td><h3>list</h3></td><td>Lists details about the exports in the specified matter.</td></tr></tbody></table>
