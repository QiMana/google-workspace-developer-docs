---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/appliedlabelchange
root: workspace
fetched_at: 2026-04-23T15:27:30.460Z
---

# AppliedLabelChange

## AppliedLabelChange

Label changes that were made on the Target.

JSON representation

```
{
  "changes": [
    {
      object (AppliedLabelChangeDetail)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>changes[]</code></td><td><p><code>object (<code>AppliedLabelChangeDetail</code>)</code></p><p>Changes that were made to the Label on the Target.</p></td></tr></tbody></table>

## AppliedLabelChangeDetail

A change made to a Label on the Target.

JSON representation

```
{
  "label": string,
  "types": [
    enum (Type)
  ],
  "title": string,
  "fieldChanges": [
    {
      object (FieldValueChange)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>label</code></td><td><p><code>string</code></p><p>The Label name representing the Label that changed. This name always contains the revision of the Label that was used when this Action occurred. The format is <code>labels/id@revision</code>.</p></td></tr><tr><td><code>types[]</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>The types of changes made to the Label on the Target.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The human-readable title of the label that changed.</p></td></tr><tr><td><code>fieldChanges[]</code></td><td><p><code>object (<code>FieldValueChange</code>)</code></p><p>Field Changes. Only present if <code>types</code> contains <code>LABEL_FIELD_VALUE_CHANGED</code>.</p></td></tr></tbody></table>

## Type

The type of Label change

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>The type of change to this Label is not available.</td></tr><tr><td><code>LABEL_ADDED</code></td><td>The identified Label was added to the Target.</td></tr><tr><td><code>LABEL_REMOVED</code></td><td>The identified Label was removed from the Target.</td></tr><tr><td><code>LABEL_FIELD_VALUE_CHANGED</code></td><td>Field values were changed on the Target.</td></tr><tr><td><code>LABEL_APPLIED_BY_ITEM_CREATE</code></td><td>The Label was applied as a side-effect of Drive item creation.</td></tr></tbody></table>

## FieldValueChange

Change to a Field value.

JSON representation

```
{
  "fieldId": string,
  "oldValue": {
    object (FieldValue)
  },
  "newValue": {
    object (FieldValue)
  },
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>The ID of this field. Field IDs are unique within a Label.</p></td></tr><tr><td><code>oldValue</code></td><td><p><code>object (<code>FieldValue</code>)</code></p><p>The value that was previously set on the field. If not present, the field was newly set. At least one of {oldValue|newValue} is always set.</p></td></tr><tr><td><code>newValue</code></td><td><p><code>object (<code>FieldValue</code>)</code></p><p>The value that is now set on the field. If not present, the field was cleared. At least one of {oldValue|newValue} is always set.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The human-readable display name for this field.</p></td></tr></tbody></table>

## FieldValue

Contains a value of a Field.

JSON representation

```
{

  "text": {
    object (Text)
  },
  "textList": {
    object (TextList)
  },
  "selection": {
    object (Selection)
  },
  "selectionList": {
    object (SelectionList)
  },
  "integer": {
    object (Integer)
  },
  "user": {
    object (SingleUser)
  },
  "userList": {
    object (UserList)
  },
  "date": {
    object (Date)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>value</code>. Field values for all Field types. <code>value</code> can be only one of the following:</td></tr><tr><td><code>text</code></td><td><p><code>object (<code>Text</code>)</code></p><p>Text Field value.</p></td></tr><tr><td><code>textList</code></td><td><p><code>object (<code>TextList</code>)</code></p><p>Text List Field value.</p></td></tr><tr><td><code>selection</code></td><td><p><code>object (<code>Selection</code>)</code></p><p>Selection Field value.</p></td></tr><tr><td><code>selectionList</code></td><td><p><code>object (<code>SelectionList</code>)</code></p><p>Selection List Field value.</p></td></tr><tr><td><code>integer</code></td><td><p><code>object (<code>Integer</code>)</code></p><p>Integer Field value.</p></td></tr><tr><td><code>user</code></td><td><p><code>object (<code>SingleUser</code>)</code></p><p>User Field value.</p></td></tr><tr><td><code>userList</code></td><td><p><code>object (<code>UserList</code>)</code></p><p>User List Field value.</p></td></tr><tr><td><code>date</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Date Field value.</p></td></tr></tbody></table>

## Text

Wrapper for Text Field value.

JSON representation

```
{
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string</code></p><p>Value of Text Field.</p></td></tr></tbody></table>

## TextList

Wrapper for Text List Field value.

JSON representation

```
{
  "values": [
    {
      object (Text)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>Text</code>)</code></p><p>Text values.</p></td></tr></tbody></table>

## Selection

Wrapper for Selection Field value as combined value/displayName pair for selected choice.

JSON representation

```
{
  "value": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string</code></p><p>Selection value as Field Choice ID.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Selection value as human-readable display string.</p></td></tr></tbody></table>

## SelectionList

Wrapper for SelectionList Field value.

JSON representation

```
{
  "values": [
    {
      object (Selection)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>Selection</code>)</code></p><p>Selection values.</p></td></tr></tbody></table>

## Integer

Wrapper for Integer Field value.

JSON representation

```
{
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string (int64
        format)</code></p><p>Integer value.</p></td></tr></tbody></table>

## SingleUser

Wrapper for User Field value.

JSON representation

```
{
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string</code></p><p>User value as email.</p></td></tr></tbody></table>

## UserList

Wrapper for UserList Field value.

JSON representation

```
{
  "values": [
    {
      object (SingleUser)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>SingleUser</code>)</code></p><p>User values.</p></td></tr></tbody></table>

Wrapper for Date Field value.

JSON representation

```
{
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string (<code>Timestamp</code>
        format)</code></p><p>Date value.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>
