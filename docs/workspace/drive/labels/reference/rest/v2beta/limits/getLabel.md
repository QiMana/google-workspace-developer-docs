---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/limits/getLabel
root: workspace
fetched_at: 2026-04-23T15:28:18.800Z
---

# Method: limits.getLabel

Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### HTTP request

`GET https://drivelabels.googleapis.com/v2beta/limits/label`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Label revision resource name Must be: "limits/label"</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "name": string,
  "maxTitleLength": integer,
  "maxDescriptionLength": integer,
  "maxFields": integer,
  "maxDeletedFields": integer,
  "maxDraftRevisions": integer,
  "fieldLimits": {
    object (FieldLimits)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name.</p></td></tr><tr><td><code>maxTitleLength</code></td><td><p><code>integer</code></p><p>The maximum number of characters allowed for the title.</p></td></tr><tr><td><code>maxDescriptionLength</code></td><td><p><code>integer</code></p><p>The maximum number of characters allowed for the description.</p></td></tr><tr><td><code>maxFields</code></td><td><p><code>integer</code></p><p>The maximum number of Fields allowed within the label.</p></td></tr><tr><td><code>maxDeletedFields</code></td><td><p><code>integer</code></p><p>The maximum number of published Fields that can be deleted.</p></td></tr><tr><td><code>maxDraftRevisions</code></td><td><p><code>integer</code></p><p>The maximum number of draft revisions that will be kept before deleting old drafts.</p></td></tr><tr><td><code>fieldLimits</code></td><td><p><code>object (<code>FieldLimits</code>)</code></p><p>The limits for Fields.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.labels.readonly`
- `           https://www.googleapis.com/auth/drive.admin.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## FieldLimits

Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.

JSON representation

```
{
  "maxIdLength": integer,
  "maxDisplayNameLength": integer,
  "maxDescriptionLength": integer,
  "textLimits": {
    object (TextLimits)
  },
  "longTextLimits": {
    object (LongTextLimits)
  },
  "integerLimits": {
    object (IntegerLimits)
  },
  "dateLimits": {
    object (DateLimits)
  },
  "userLimits": {
    object (UserLimits)
  },
  "selectionLimits": {
    object (SelectionLimits)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>maxIdLength</code></td><td><p><code>integer</code></p><p>Max length for the id.</p></td></tr><tr><td><code>maxDisplayNameLength</code></td><td><p><code>integer</code></p><p>Limits for Field title.</p></td></tr><tr><td><code>maxDescriptionLength</code></td><td><p><code>integer</code></p><p>Limits for Field description, also called help text.</p></td></tr><tr><td><code>textLimits</code></td><td><p><code>object (<code>TextLimits</code>)</code></p><p>The relevant limits for the specified Field.Type. Text Field limits.</p></td></tr><tr><td><code>longTextLimits</code></td><td><p><code>object (<code>LongTextLimits</code>)</code></p><p>Long text Field limits.</p></td></tr><tr><td><code>integerLimits</code></td><td><p><code>object (<code>IntegerLimits</code>)</code></p><p>Integer Field limits.</p></td></tr><tr><td><code>dateLimits</code></td><td><p><code>object (<code>DateLimits</code>)</code></p><p>Date Field limits.</p></td></tr><tr><td><code>userLimits</code></td><td><p><code>object (<code>UserLimits</code>)</code></p><p>User Field limits.</p></td></tr><tr><td><code>selectionLimits</code></td><td><p><code>object (<code>SelectionLimits</code>)</code></p><p>Selection Field limits.</p></td></tr></tbody></table>

## TextLimits

Limits for text Field type.

JSON representation

```
{
  "minLength": integer,
  "maxLength": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minLength</code></td><td><p><code>integer</code></p><p>Minimum length allowed for a text Field type.</p></td></tr><tr><td><code>maxLength</code></td><td><p><code>integer</code></p><p>Maximum length allowed for a text Field type.</p></td></tr></tbody></table>

## LongTextLimits

Limits for long text Field type.

JSON representation

```
{
  "minLength": integer,
  "maxLength": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minLength</code></td><td><p><code>integer</code></p><p>Minimum length allowed for a long text Field type.</p></td></tr><tr><td><code>maxLength</code></td><td><p><code>integer</code></p><p>Maximum length allowed for a long text Field type.</p></td></tr></tbody></table>

## IntegerLimits

Limits for integer Field type.

JSON representation

```
{
  "minValue": string,
  "maxValue": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minValue</code></td><td><p><code>string (int64 format)</code></p><p>Minimum value for an integer Field type.</p></td></tr><tr><td><code>maxValue</code></td><td><p><code>string (int64 format)</code></p><p>Maximum value for an integer Field type.</p></td></tr></tbody></table>

## DateLimits

Limits for date Field type.

JSON representation

```
{
  "minValue": {
    object (Date)
  },
  "maxValue": {
    object (Date)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minValue</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Minimum value for the date Field type.</p></td></tr><tr><td><code>maxValue</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Maximum value for the date Field type.</p></td></tr></tbody></table>

## UserLimits

Limits for Field.Type.USER.

JSON representation

```
{
  "listLimits": {
    object (ListLimits)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listLimits</code></td><td><p><code>object (<code>ListLimits</code>)</code></p><p>Limits for list-variant of a Field type.</p></td></tr></tbody></table>

## ListLimits

Limits for list-variant of a Field type.

JSON representation

```
{
  "maxEntries": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>maxEntries</code></td><td><p><code>integer</code></p><p>Maximum number of values allowed for the Field type.</p></td></tr></tbody></table>

## SelectionLimits

Limits for selection Field type.

JSON representation

```
{
  "listLimits": {
    object (ListLimits)
  },
  "maxIdLength": integer,
  "maxDisplayNameLength": integer,
  "maxChoices": integer,
  "maxDeletedChoices": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listLimits</code></td><td><p><code>object (<code>ListLimits</code>)</code></p><p>Limits for list-variant of a Field type.</p></td></tr><tr><td><code>maxIdLength</code></td><td><p><code>integer</code></p><p>Maximum ID length for a selection options.</p></td></tr><tr><td><code>maxDisplayNameLength</code></td><td><p><code>integer</code></p><p>Maximum length for display name.</p></td></tr><tr><td><code>maxChoices</code></td><td><p><code>integer</code></p><p>The max number of choices.</p></td></tr><tr><td><code>maxDeletedChoices</code></td><td><p><code>integer</code></p><p>Maximum number of deleted choices.</p></td></tr></tbody></table>
