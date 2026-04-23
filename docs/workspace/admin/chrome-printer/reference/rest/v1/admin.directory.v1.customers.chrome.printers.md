---
source: https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printers
root: workspace
fetched_at: 2026-04-23T15:23:30.748Z
---

# REST Resource: admin.directory.v1.customers.chrome.printers

## Resource: Printer

Printer configuration.

JSON representation

```
{
  "name": string,
  "id": string,
  "displayName": string,
  "description": string,
  "makeAndModel": string,
  "uri": string,
  "createTime": string,
  "orgUnitId": string,
  "auxiliaryMessages": [
    {
      object (AuxiliaryMessage)
    }
  ],
  "useDriverlessConfig": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Id of the printer. (During printer creation leave empty)</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Editable. Name of printer.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Editable. Description of printer.</p></td></tr><tr><td><code>makeAndModel</code></td><td><p><code>string</code></p><p>Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in printers.listPrinterModels response.</p></td></tr><tr><td><code>uri</code></td><td><p><code>string</code></p><p>Editable. Printer URI.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Time when printer was created.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>Organization Unit that owns this printer (Only can be set during Printer creation)</p></td></tr><tr><td><code>auxiliaryMessages[]</code></td><td><p><code>object (<code>AuxiliaryMessage</code>)</code></p><p>Output only. Auxiliary messages about issues with the printer configuration if any.</p></td></tr><tr><td><code>useDriverlessConfig</code></td><td><p><code>boolean</code></p><p>Editable. flag to use driverless configuration or not. If it's set to be true, makeAndModel can be ignored</p></td></tr></tbody></table>

## AuxiliaryMessage

Auxiliary message about issues with printers or settings. Example: {messageType:AUXILIARY\_MESSAGE\_WARNING, fieldMask:makeAndModel, message:"Given printer is invalid or no longer supported."}

JSON representation

```
{
  "severity": enum (Severity),
  "fieldMask": string,
  "auxiliaryMessage": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>severity</code></td><td><p><code>enum (<code>Severity</code>)</code></p><p>Message severity</p></td></tr><tr><td><code>fieldMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Field that this message concerns.</p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr><tr><td><code>auxiliaryMessage</code></td><td><p><code>string</code></p><p>Human readable message in English. Example: "Given printer is invalid or no longer supported."</p></td></tr></tbody></table>

## Severity

Auxiliary message severity

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SEVERITY_UNSPECIFIED</code></td><td>Message type unspecified.</td></tr><tr><td><code>SEVERITY_INFO</code></td><td>Message of severity: info.</td></tr><tr><td><code>SEVERITY_WARNING</code></td><td>Message of severity: warning.</td></tr><tr><td><code>SEVERITY_ERROR</code></td><td>Message of severity: error.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>batchCreatePrinters</h3></td><td>Creates printers under given Organization Unit.</td></tr><tr><td><h3>batchDeletePrinters</h3></td><td>Deletes printers in batch.</td></tr><tr><td><h3>create</h3></td><td>Creates a printer under given Organization Unit.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a <code>Printer</code>.</td></tr><tr><td><h3>get</h3></td><td>Returns a <code>Printer</code> resource (printer's config).</td></tr><tr><td><h3>list</h3></td><td>List printers configs.</td></tr><tr><td><h3>listPrinterModels</h3></td><td>Lists the supported printer models.</td></tr><tr><td><h3>patch</h3></td><td>Updates a <code>Printer</code> resource.</td></tr></tbody></table>
