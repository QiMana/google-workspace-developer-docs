---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels
root: workspace
fetched_at: 2026-04-23T15:28:10.452Z
---

# REST Resource: labels

## Resource: Label

A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.

JSON representation

```
{
  "name": string,
  "id": string,
  "revisionId": string,
  "labelType": enum (LabelType),
  "creator": {
    object (UserInfo)
  },
  "createTime": string,
  "revisionCreator": {
    object (UserInfo)
  },
  "revisionCreateTime": string,
  "publisher": {
    object (UserInfo)
  },
  "publishTime": string,
  "disabler": {
    object (UserInfo)
  },
  "disableTime": string,
  "customer": string,
  "properties": {
    object (Properties)
  },
  "lifecycle": {
    object (Lifecycle)
  },
  "displayHints": {
    object (DisplayHints)
  },
  "appliedCapabilities": {
    object (AppliedCapabilities)
  },
  "schemaCapabilities": {
    object (SchemaCapabilities)
  },
  "appliedLabelPolicy": {
    object (AppliedLabelPolicy)
  },
  "fields": [
    {
      object (Field)
    }
  ],
  "learnMoreUri": string,
  "lockStatus": {
    object (LockStatus)
  },
  "enabledAppSettings": {
    object (EnabledAppSettings)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Resource name of the label. Will be in the form of either: <code>labels/{id}</code> or <code>labels/{id}@{revisionId}</code> depending on the request. See <code>id</code> and <code>revisionId</code> below.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. Globally unique identifier of this label. ID makes up part of the label <code>name</code>, but unlike <code>name</code>, ID is consistent between revisions. Matches the regex: <code>([a-zA-Z0-9])+</code>.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>Output only. Revision ID of the label. Revision ID might be part of the label <code>name</code> depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: <code>([a-zA-Z0-9])+</code>.</p></td></tr><tr><td><code>labelType</code></td><td><p><code>enum (<code>LabelType</code>)</code></p><p>Required. The type of label.</p></td></tr><tr><td><code>creator</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who created this label.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this label was created.</p></td></tr><tr><td><code>revisionCreator</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who created this label revision.</p></td></tr><tr><td><code>revisionCreateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this label revision was created.</p></td></tr><tr><td><code>publisher</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who published this label. This value has no meaning when the label isn't published.</p></td></tr><tr><td><code>publishTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this label was published. This value has no meaning when the label isn't published.</p></td></tr><tr><td><code>disabler</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who disabled this label. This value has no meaning when the label isn't disabled.</p></td></tr><tr><td><code>disableTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this label was disabled. This value has no meaning when the label isn't disabled.</p></td></tr><tr><td><code>customer</code></td><td><p><code>string</code></p><p>Output only. The customer this label belongs to. For example: <code>customers/123abc789</code>.</p></td></tr><tr><td><code>properties</code></td><td><p><code>object (<code>Properties</code>)</code></p><p>Required. The basic properties of the label.</p></td></tr><tr><td><code>lifecycle</code></td><td><p><code>object (<code>Lifecycle</code>)</code></p><p>Output only. The lifecycle state of the label including whether it's published, deprecated, and has draft changes.</p></td></tr><tr><td><code>displayHints</code></td><td><p><code>object (<code>DisplayHints</code>)</code></p><p>Output only. UI display hints for rendering the label.</p></td></tr><tr><td><code>appliedCapabilities</code></td><td><p><code>object (<code>AppliedCapabilities</code>)</code></p><p>Output only. The capabilities related to this label on applied metadata.</p></td></tr><tr><td><code>schemaCapabilities</code></td><td><p><code>object (<code>SchemaCapabilities</code>)</code></p><p>Output only. The capabilities the user has on this label.</p></td></tr><tr><td><code>appliedLabelPolicy</code></td><td><p><code>object (<code>AppliedLabelPolicy</code>)</code></p><p>Output only. Behavior of this label when it's applied to Drive items.</p></td></tr><tr><td><code>fields[]</code></td><td><p><code>object (<code>Field</code>)</code></p><p>List of fields in descending priority order.</p></td></tr><tr><td><code>learnMoreUri</code></td><td><p><code>string</code></p><p>Custom URL to present to users to allow them to learn more about this label and how it should be used.</p></td></tr><tr><td><code>lockStatus</code></td><td><p><code>object (<code>LockStatus</code>)</code></p><p>Output only. The <code>LockStatus</code> of this label.</p></td></tr><tr><td><code>enabledAppSettings</code></td><td><p><code>object (<code>EnabledAppSettings</code>)</code></p><p>Optional. The <code>EnabledAppSettings</code> for this Label.</p></td></tr></tbody></table>

## LabelType

The type of this label.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>LABEL_TYPE_UNSPECIFIED</code></td><td>Unknown label type.</td></tr><tr><td><code>SHARED</code></td><td>Shared labels may be shared with users to apply to Drive items.</td></tr><tr><td><code>ADMIN</code></td><td>Admin-owned label. Only creatable and editable by admins. Supports some additional admin-only features.</td></tr><tr><td><code>GOOGLE_APP</code></td><td>A label owned by an internal Google application rather than a customer. These labels are read-only.</td></tr></tbody></table>

## UserInfo

Information about a user.

JSON representation

```
{
  "person": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>person</code></td><td><p><code>string</code></p><p>The identifier for this user that can be used with the <a href="https://developers.google.com/people">People API</a> to get more information. For example, <code>people/12345678</code>.</p></td></tr></tbody></table>

## Properties

Basic properties of the label.

JSON representation

```
{
  "title": string,
  "description": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>Required. Title of the label.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the label.</p></td></tr></tbody></table>

## Lifecycle

The lifecycle state of an object, such as label, field, or choice. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle).

The lifecycle enforces the following transitions:

- `UNPUBLISHED_DRAFT` (starting state)
- `UNPUBLISHED_DRAFT` -> `PUBLISHED`
- `UNPUBLISHED_DRAFT` -> (Deleted)
- `PUBLISHED` -> `DISABLED`
- `DISABLED` -> `PUBLISHED`
- `DISABLED` -> (Deleted)

The published and disabled states have some distinct characteristics:

- `Published`: Some kinds of changes might be made to an object in this state, in which case `hasUnpublishedChanges` will be true. Also, some kinds of changes aren't permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected.
- `Disabled`: When disabled, the configured `DisabledPolicy` takes effect.

JSON representation

```
{
  "state": enum (State),
  "hasUnpublishedChanges": boolean,
  "disabledPolicy": {
    object (DisabledPolicy)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Output only. The state of the object associated with this lifecycle.</p></td></tr><tr><td><code>hasUnpublishedChanges</code></td><td><p><code>boolean</code></p><p>Output only. Whether the object associated with this lifecycle has unpublished changes.</p></td></tr><tr><td><code>disabledPolicy</code></td><td><p><code>object (<code>DisabledPolicy</code>)</code></p><p>The policy that governs how to show a disabled label, field, or selection choice.</p></td></tr></tbody></table>

## State

The state of the object associated with this lifecycle.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Unknown State.</td></tr><tr><td><code>UNPUBLISHED_DRAFT</code></td><td>The initial state of an object. Once published, the object can never return to this state. Once an object is published, certain kinds of changes are no longer permitted.</td></tr><tr><td><code>PUBLISHED</code></td><td>The object has been published. The object might have unpublished draft changes as indicated by <code>hasUnpublishedChanges</code>.</td></tr><tr><td><code>DISABLED</code></td><td>The object has been published and has since been disabled. The object might have unpublished draft changes as indicated by <code>hasUnpublishedChanges</code>.</td></tr><tr><td><code>DELETED</code></td><td>The object has been deleted.</td></tr></tbody></table>

## DisabledPolicy

The policy that governs how to treat a disabled label, field, or selection choice in different contexts.

JSON representation

```
{
  "hideInSearch": boolean,
  "showInApply": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>showInApply</code></td><td><p><code>boolean</code></p><p>Whether to show this disabled object in the apply menu on Drive items.</p><ul><li>When <code>true</code>, the object is generally shown in the UI as disabled and is unselectable.</li><li>When <code>false</code>, the object is generally hidden in the UI.</li></ul></td></tr></tbody></table>

## DisplayHints

The UI display hints for rendering the label.

JSON representation

```
{
  "disabled": boolean,
  "hiddenInSearch": boolean,
  "shownInApply": boolean,
  "priority": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>disabled</code></td><td><p><code>boolean</code></p><p>Whether the label should be shown in the UI as disabled.</p></td></tr><tr><td><code>shownInApply</code></td><td><p><code>boolean</code></p><p>This label should be shown in the apply menu when applying values to a Drive item.</p></td></tr><tr><td><code>priority</code></td><td><p><code>string (int64 format)</code></p><p>The order to display labels in a list.</p></td></tr></tbody></table>

## AppliedCapabilities

The capabilities a user has on this label's applied metadata.

JSON representation

```
{
  "canRead": boolean,
  "canApply": boolean,
  "canRemove": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>canRead</code></td><td><p><code>boolean</code></p><p>Whether the user can read applied metadata related to this label.</p></td></tr><tr><td><code>canApply</code></td><td><p><code>boolean</code></p><p>Whether the user can apply this label to items.</p></td></tr><tr><td><code>canRemove</code></td><td><p><code>boolean</code></p><p>Whether the user can remove this label from items.</p></td></tr></tbody></table>

## SchemaCapabilities

The capabilities related to this label when editing the label.

JSON representation

```
{
  "canUpdate": boolean,
  "canDelete": boolean,
  "canDisable": boolean,
  "canEnable": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>canUpdate</code></td><td><p><code>boolean</code></p><p>Whether the user can change this label.</p></td></tr><tr><td><code>canDelete</code></td><td><p><code>boolean</code></p><p>Whether the user can delete this label. The user must have permission and the label must be disabled.</p></td></tr><tr><td><code>canDisable</code></td><td><p><code>boolean</code></p><p>Whether the user can disable this label. The user must have permission and this label must not already be disabled.</p></td></tr><tr><td><code>canEnable</code></td><td><p><code>boolean</code></p><p>Whether the user can enable this label. The user must have permission and this label must be disabled.</p></td></tr></tbody></table>

## AppliedLabelPolicy

Behavior of this label when it's applied to Drive items.

JSON representation

```
{
  "copyMode": enum (CopyMode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>copyMode</code></td><td><p><code>enum (<code>CopyMode</code>)</code></p><p>Indicates how the applied label and field values should be copied when a Drive item is copied.</p></td></tr></tbody></table>

## CopyMode

Indicates how the applied label and field values should be copied when a Drive item is copied.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COPY_MODE_UNSPECIFIED</code></td><td>Copy mode unspecified.</td></tr><tr><td><code>DO_NOT_COPY</code></td><td>The applied label and field values aren't copied by default when the Drive item it's applied to is copied.</td></tr><tr><td><code>ALWAYS_COPY</code></td><td>The applied label and field values are always copied when the Drive item it's applied to is copied. Only admins can use this mode.</td></tr><tr><td><code>COPY_APPLIABLE</code></td><td>The applied label and field values are copied if the label is appliable by the user making the copy.</td></tr></tbody></table>

## Field

Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.

JSON representation

```
{
  "id": string,
  "queryKey": string,
  "properties": {
    object (Properties)
  },
  "lifecycle": {
    object (Lifecycle)
  },
  "displayHints": {
    object (DisplayHints)
  },
  "schemaCapabilities": {
    object (SchemaCapabilities)
  },
  "appliedCapabilities": {
    object (AppliedCapabilities)
  },
  "creator": {
    object (UserInfo)
  },
  "createTime": string,
  "updater": {
    object (UserInfo)
  },
  "updateTime": string,
  "publisher": {
    object (UserInfo)
  },
  "disabler": {
    object (UserInfo)
  },
  "disableTime": string,
  "lockStatus": {
    object (LockStatus)
  },

  "textOptions": {
    object (TextOptions)
  },
  "integerOptions": {
    object (IntegerOptions)
  },
  "dateOptions": {
    object (DateOptions)
  },
  "selectionOptions": {
    object (SelectionOptions)
  },
  "userOptions": {
    object (UserOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. The key of a field, unique within a label or library.</p><p>This value is autogenerated. Matches the regex: <code>([a-zA-Z0-9])+</code>.</p></td></tr><tr><td><code>queryKey</code></td><td><p><code>string</code></p><p>Output only. The key to use when constructing Drive search queries to find files based on values defined for this field on files. For example, " <code>{queryKey}</code> > 2001-01-01".</p></td></tr><tr><td><code>properties</code></td><td><p><code>object (<code>Properties</code>)</code></p><p>The basic properties of the field.</p></td></tr><tr><td><code>lifecycle</code></td><td><p><code>object (<code>Lifecycle</code>)</code></p><p>Output only. The lifecycle of this field.</p></td></tr><tr><td><code>displayHints</code></td><td><p><code>object (<code>DisplayHints</code>)</code></p><p>Output only. UI display hints for rendering a field.</p></td></tr><tr><td><code>schemaCapabilities</code></td><td><p><code>object (<code>SchemaCapabilities</code>)</code></p><p>Output only. The capabilities this user has when editing this field.</p></td></tr><tr><td><code>appliedCapabilities</code></td><td><p><code>object (<code>AppliedCapabilities</code>)</code></p><p>Output only. The capabilities this user has on this field and its value when the label is applied on Drive items.</p></td></tr><tr><td><code>creator</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who created this field.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this field was created.</p></td></tr><tr><td><code>updater</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who modified this field.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this field was updated.</p></td></tr><tr><td><code>publisher</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who published this field. This value has no meaning when the field is not published.</p></td></tr><tr><td><code>disabler</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who disabled this field. This value has no meaning when the field is not disabled.</p></td></tr><tr><td><code>disableTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this field was disabled. This value has no meaning when the field is not disabled.</p></td></tr><tr><td><code>lockStatus</code></td><td><p><code>object (<code>LockStatus</code>)</code></p><p>Output only. The <code>LockStatus</code> of this field.</p></td></tr><tr><td colspan="2">Union field <code>type</code>. The data type and options of this field. Once published, the data type cannot be changed. <code>type</code> can be only one of the following:</td></tr><tr><td><code>textOptions</code></td><td><p><code>object (<code>TextOptions</code>)</code></p><p>Text field options.</p></td></tr><tr><td><code>integerOptions</code></td><td><p><code>object (<code>IntegerOptions</code>)</code></p><p>Integer field options.</p></td></tr><tr><td><code>dateOptions</code></td><td><p><code>object (<code>DateOptions</code>)</code></p><p>Date field options.</p></td></tr><tr><td><code>selectionOptions</code></td><td><p><code>object (<code>SelectionOptions</code>)</code></p><p>Selection field options.</p></td></tr><tr><td><code>userOptions</code></td><td><p><code>object (<code>UserOptions</code>)</code></p><p>User field options.</p></td></tr></tbody></table>

## TextOptions

Options for the Text field type.

JSON representation

```
{
  "minLength": integer,
  "maxLength": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minLength</code></td><td><p><code>integer</code></p><p>Output only. The minimum valid length of values for the text field.</p></td></tr><tr><td><code>maxLength</code></td><td><p><code>integer</code></p><p>Output only. The maximum valid length of values for the text field.</p></td></tr></tbody></table>

## IntegerOptions

Options for the Integer field type.

JSON representation

```
{
  "minValue": string,
  "maxValue": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>minValue</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The minimum valid value for the integer field.</p></td></tr><tr><td><code>maxValue</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The maximum valid value for the integer field.</p></td></tr></tbody></table>

## DateOptions

Options for the date field type.

JSON representation

```
{
  "dateFormatType": enum (DateFormat),
  "dateFormat": string,
  "minValue": {
    object (Date)
  },
  "maxValue": {
    object (Date)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>dateFormatType</code></td><td><p><code>enum (<code>DateFormat</code>)</code></p><p>Localized date formatting option. Field values are rendered in this format according to their locale.</p></td></tr><tr><td><code>dateFormat</code></td><td><p><code>string</code></p><p>Output only. ICU date format.</p></td></tr><tr><td><code>minValue</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Output only. Minimum valid value (year, month, day).</p></td></tr><tr><td><code>maxValue</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Output only. Maximum valid value (year, month, day).</p></td></tr></tbody></table>

## DateFormat

Localized date format options.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATE_FORMAT_UNSPECIFIED</code></td><td>Date format unspecified.</td></tr><tr><td><code>LONG_DATE</code></td><td>Includes full month name. For example, January 12, 1999 (MMMM d, y)</td></tr><tr><td><code>SHORT_DATE</code></td><td>Short, numeric, representation. For example, 12/13/99 (M/d/yy)</td></tr></tbody></table>

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:

- A full date, with non-zero year, month, and day values.
- A month and day, with a zero year (for example, an anniversary).
- A year on its own, with a zero month and a zero day.
- A year and month, with a zero day (for example, a credit card expiration date).

Related types:

- `google.type.TimeOfDay`
- `google.type.DateTime`
- `google.protobuf.Timestamp`

JSON representation

```
{
  "year": integer,
  "month": integer,
  "day": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>year</code></td><td><p><code>integer</code></p><p>Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.</p></td></tr><tr><td><code>month</code></td><td><p><code>integer</code></p><p>Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.</p></td></tr><tr><td><code>day</code></td><td><p><code>integer</code></p><p>Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.</p></td></tr></tbody></table>

## SelectionOptions

Options for the selection field type.

JSON representation

```
{
  "listOptions": {
    object (ListOptions)
  },
  "choices": [
    {
      object (Choice)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listOptions</code></td><td><p><code>object (<code>ListOptions</code>)</code></p><p>When specified, indicates this field supports a list of values. Once the field is published, this cannot be changed.</p></td></tr><tr><td><code>choices[]</code></td><td><p><code>object (<code>Choice</code>)</code></p><p>The options available for this selection field. The list order is consistent, and modified with <code>insertBeforeChoice</code>.</p></td></tr></tbody></table>

## ListOptions

Options for a multi-valued variant of an associated field type.

JSON representation

```
{
  "maxEntries": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>maxEntries</code></td><td><p><code>integer</code></p><p>Maximum number of entries permitted.</p></td></tr></tbody></table>

## Choice

Selection field choice.

JSON representation

```
{
  "id": string,
  "properties": {
    object (Properties)
  },
  "lifecycle": {
    object (Lifecycle)
  },
  "displayHints": {
    object (DisplayHints)
  },
  "schemaCapabilities": {
    object (SchemaCapabilities)
  },
  "appliedCapabilities": {
    object (AppliedCapabilities)
  },
  "creator": {
    object (UserInfo)
  },
  "createTime": string,
  "updater": {
    object (UserInfo)
  },
  "updateTime": string,
  "publisher": {
    object (UserInfo)
  },
  "publishTime": string,
  "disabler": {
    object (UserInfo)
  },
  "disableTime": string,
  "lockStatus": {
    object (LockStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique value of the choice. This ID is autogenerated. Matches the regex: <code>([a-zA-Z0-9_])+</code>.</p></td></tr><tr><td><code>properties</code></td><td><p><code>object (<code>Properties</code>)</code></p><p>Basic properties of the choice.</p></td></tr><tr><td><code>lifecycle</code></td><td><p><code>object (<code>Lifecycle</code>)</code></p><p>Output only. Lifecycle of the choice.</p></td></tr><tr><td><code>displayHints</code></td><td><p><code>object (<code>DisplayHints</code>)</code></p><p>Output only. UI display hints for rendering a choice.</p></td></tr><tr><td><code>schemaCapabilities</code></td><td><p><code>object (<code>SchemaCapabilities</code>)</code></p><p>Output only. The capabilities related to this option when editing the option.</p></td></tr><tr><td><code>appliedCapabilities</code></td><td><p><code>object (<code>AppliedCapabilities</code>)</code></p><p>Output only. The capabilities related to this choice on applied metadata.</p></td></tr><tr><td><code>creator</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who created this choice.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this choice was created.</p></td></tr><tr><td><code>updater</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who updated this choice last.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this choice was updated last.</p></td></tr><tr><td><code>publisher</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who published this choice. This value has no meaning when the choice is not published.</p></td></tr><tr><td><code>publishTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this choice was published. This value has no meaning when the choice is not published.</p></td></tr><tr><td><code>disabler</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user who disabled this choice. This value has no meaning when the option is not disabled.</p></td></tr><tr><td><code>disableTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this choice was disabled. This value has no meaning when the choice is not disabled.</p></td></tr><tr><td><code>lockStatus</code></td><td><p><code>object (<code>LockStatus</code>)</code></p><p>Output only. The <code>LockStatus</code> of this choice.</p></td></tr></tbody></table>

## Properties

Basic properties of the choice.

JSON representation

```
{
  "displayName": string,
  "description": string,
  "badgeConfig": {
    object (BadgeConfig)
  },
  "insertBeforeChoice": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. The display text to show in the UI identifying this field.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of this label.</p></td></tr><tr><td><code>badgeConfig</code></td><td><p><code>object (<code>BadgeConfig</code>)</code></p><p>The badge configuration for this choice. When set, the label that owns this choice is considered a "badged label".</p></td></tr><tr><td><code>insertBeforeChoice</code></td><td><p><code>string</code></p><p>Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list.</p></td></tr></tbody></table>

## BadgeConfig

Badge status of the label.

JSON representation

```
{
  "color": {
    object (Color)
  },
  "priorityOverride": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>color</code></td><td><p><code>object (<code>Color</code>)</code></p><p>The color of the badge. When not specified, no badge is rendered. The background, foreground, and solo (light and dark mode) colors set here are changed in the Drive UI into the closest recommended supported color.</p></td></tr><tr><td><code>priorityOverride</code></td><td><p><code>string (int64 format)</code></p><p>Override the default global priority of this badge. When set to 0, the default priority heuristic is used.</p></td></tr></tbody></table>

## Color

Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript.

This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space.

When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`.

Example (Java):

```
import com.google.type.Color;

// ...
public static java.awt.Color fromProto(Color protocolor) {
  float alpha = protocolor.hasAlpha()
      ? protocolor.getAlpha().getValue()
      : 1.0;

  return new java.awt.Color(
      protocolor.getRed(),
      protocolor.getGreen(),
      protocolor.getBlue(),
      alpha);
}

public static Color toProto(java.awt.Color color) {
  float red = (float) color.getRed();
  float green = (float) color.getGreen();
  float blue = (float) color.getBlue();
  float denominator = 255.0;
  Color.Builder resultBuilder =
      Color
          .newBuilder()
          .setRed(red / denominator)
          .setGreen(green / denominator)
          .setBlue(blue / denominator);
  int alpha = color.getAlpha();
  if (alpha != 255) {
    result.setAlpha(
        FloatValue
            .newBuilder()
            .setValue(((float) alpha) / denominator)
            .build());
  }
  return resultBuilder.build();
}
// ...
```

Example (iOS / Obj-C):

```
// ...
 static UIColor* fromProto(Color* protocolor) {
    float red = [protocolor red];
    float green = [protocolor green];
    float blue = [protocolor blue];
    FloatValue* alpha_wrapper = [protocolor alpha];
    float alpha = 1.0;
    if (alpha_wrapper != nil) {
      alpha = [alpha_wrapper value];
    }
    return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
 }

 static Color* toProto(UIColor* color) {
     CGFloat red, green, blue, alpha;
     if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
       return nil;
     }
     Color* result = [[Color alloc] init];
     [result setRed:red];
     [result setGreen:green];
     [result setBlue:blue];
     if (alpha <= 0.9999) {
       [result setAlpha:floatWrapperWithValue(alpha)];
     }
     [result autorelease];
     return result;
}
// ...
```

Example (JavaScript):

```
// ...

var protoToCssColor = function(rgb_color) {
   var redFrac = rgb_color.red || 0.0;
   var greenFrac = rgb_color.green || 0.0;
   var blueFrac = rgb_color.blue || 0.0;
   var red = Math.floor(redFrac * 255);
   var green = Math.floor(greenFrac * 255);
   var blue = Math.floor(blueFrac * 255);

   if (!('alpha' in rgb_color)) {
      return rgbToCssColor(red, green, blue);
   }

   var alphaFrac = rgb_color.alpha.value || 0.0;
   var rgbParams = [red, green, blue].join(',');
   return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
};

var rgbToCssColor = function(red, green, blue) {
  var rgbNumber = new Number((red << 16) | (green << 8) | blue);
  var hexString = rgbNumber.toString(16);
  var missingZeros = 6 - hexString.length;
  var resultBuilder = ['#'];
  for (var i = 0; i < missingZeros; i++) {
     resultBuilder.push('0');
  }
  resultBuilder.push(hexString);
  return resultBuilder.join('');
};

// ...
```

JSON representation

```
{
  "red": number,
  "green": number,
  "blue": number,
  "alpha": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>red</code></td><td><p><code>number</code></p><p>The amount of red in the color as a value in the interval [0, 1].</p></td></tr><tr><td><code>green</code></td><td><p><code>number</code></p><p>The amount of green in the color as a value in the interval [0, 1].</p></td></tr><tr><td><code>blue</code></td><td><p><code>number</code></p><p>The amount of blue in the color as a value in the interval [0, 1].</p></td></tr><tr><td><code>alpha</code></td><td><p><code>number</code></p><p>The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation:</p><p><code>pixel color = alpha * (this color) + (1.0 - alpha) * (background color)</code></p><p>This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).</p></td></tr></tbody></table>

## DisplayHints

UI display hints for rendering an option.

JSON representation

```
{
  "disabled": boolean,
  "hiddenInSearch": boolean,
  "shownInApply": boolean,
  "badgeColors": {
    object (BadgeColors)
  },
  "darkBadgeColors": {
    object (BadgeColors)
  },
  "badgePriority": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>disabled</code></td><td><p><code>boolean</code></p><p>Whether the option should be shown in the UI as disabled.</p></td></tr><tr><td><code>shownInApply</code></td><td><p><code>boolean</code></p><p>This option should be shown in the apply menu when applying values to a Drive item.</p></td></tr><tr><td><code>badgeColors</code></td><td><p><code>object (<code>BadgeColors</code>)</code></p><p>The colors to use for the badge. Changed to Google Material colors based on the chosen <code>properties.badge_config.color</code>.</p></td></tr><tr><td><code>darkBadgeColors</code></td><td><p><code>object (<code>BadgeColors</code>)</code></p><p>The dark-mode color to use for the badge. Changed to Google Material colors based on the chosen <code>properties.badge_config.color</code>.</p></td></tr><tr><td><code>badgePriority</code></td><td><p><code>string (int64 format)</code></p><p>The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to <code>BadgeConfig.priority_override</code> or the default heuristic which prefers creation date of the label, and field and option priority.</p></td></tr></tbody></table>

## BadgeColors

The color derived from BadgeConfig and changed to the closest recommended supported color.

JSON representation

```
{
  "backgroundColor": {
    object (Color)
  },
  "foregroundColor": {
    object (Color)
  },
  "soloColor": {
    object (Color)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><p><code>object (<code>Color</code>)</code></p><p>Output only. Badge background that pairs with the foreground.</p></td></tr><tr><td><code>foregroundColor</code></td><td><p><code>object (<code>Color</code>)</code></p><p>Output only. Badge foreground that pairs with the background.</p></td></tr><tr><td><code>soloColor</code></td><td><p><code>object (<code>Color</code>)</code></p><p>Output only. Color that can be used for text without a background.</p></td></tr></tbody></table>

## SchemaCapabilities

The capabilities related to this choice when editing the choice.

JSON representation

```
{
  "canUpdate": boolean,
  "canDelete": boolean,
  "canDisable": boolean,
  "canEnable": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>canUpdate</code></td><td><p><code>boolean</code></p><p>Whether the user can update this choice.</p></td></tr><tr><td><code>canDelete</code></td><td><p><code>boolean</code></p><p>Whether the user can delete this choice.</p></td></tr><tr><td><code>canDisable</code></td><td><p><code>boolean</code></p><p>Whether the user can disable this choice.</p></td></tr><tr><td><code>canEnable</code></td><td><p><code>boolean</code></p><p>Whether the user can enable this choice.</p></td></tr></tbody></table>

## AppliedCapabilities

JSON representation

```
{
  "canRead": boolean,
  "canSearch": boolean,
  "canSelect": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>canRead</code></td><td><p><code>boolean</code></p><p>Whether the user can read related applied metadata on items.</p></td></tr><tr><td><code>canSelect</code></td><td><p><code>boolean</code></p><p>Whether the user can select this choice on an item.</p></td></tr></tbody></table>

## LockStatus

Contains information about whether a label component should be considered locked.

JSON representation

```
{
  "locked": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>locked</code></td><td><p><code>boolean</code></p><p>Output only. Indicates whether this label component is the (direct) target of a label lock. A label component can be implicitly locked even if it's not the direct target of a label lock, in which case this field is set to false.</p></td></tr></tbody></table>

## UserOptions

Options for the user field type.

JSON representation

```
{
  "listOptions": {
    object (ListOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listOptions</code></td><td><p><code>object (<code>ListOptions</code>)</code></p><p>When specified, indicates that this field supports a list of values. Once the field is published, this cannot be changed.</p></td></tr></tbody></table>

## Properties

The basic properties of the field.

JSON representation

```
{
  "displayName": string,
  "required": boolean,
  "insertBeforeField": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Required. The display text to show in the UI identifying this field.</p></td></tr><tr><td><code>required</code></td><td><p><code>boolean</code></p><p>Whether the field should be marked as required.</p></td></tr><tr><td><code>insertBeforeField</code></td><td><p><code>string</code></p><p>Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list.</p></td></tr></tbody></table>

## DisplayHints

UI display hints for rendering a field.

JSON representation

```
{
  "required": boolean,
  "disabled": boolean,
  "hiddenInSearch": boolean,
  "shownInApply": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>required</code></td><td><p><code>boolean</code></p><p>Whether the field should be shown as required in the UI.</p></td></tr><tr><td><code>disabled</code></td><td><p><code>boolean</code></p><p>Whether the field should be shown in the UI as disabled.</p></td></tr><tr><td><code>shownInApply</code></td><td><p><code>boolean</code></p><p>This field should be shown in the apply menu when applying values to a Drive item.</p></td></tr></tbody></table>

## SchemaCapabilities

The capabilities related to this field when editing the field.

JSON representation

```
{
  "canUpdate": boolean,
  "canDelete": boolean,
  "canDisable": boolean,
  "canEnable": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>canUpdate</code></td><td><p><code>boolean</code></p><p>Whether the user can change this field.</p></td></tr><tr><td><code>canDelete</code></td><td><p><code>boolean</code></p><p>Whether the user can delete this field. The user must have permission and the field must be deprecated.</p></td></tr><tr><td><code>canDisable</code></td><td><p><code>boolean</code></p><p>Whether the user can disable this field. The user must have permission and this field must not already be disabled.</p></td></tr><tr><td><code>canEnable</code></td><td><p><code>boolean</code></p><p>Whether the user can enable this field. The user must have permission and this field must be disabled.</p></td></tr></tbody></table>

## AppliedCapabilities

JSON representation

```
{
  "canRead": boolean,
  "canSearch": boolean,
  "canWrite": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>canRead</code></td><td><p><code>boolean</code></p><p>Whether the user can read related applied metadata on items.</p></td></tr><tr><td><code>canWrite</code></td><td><p><code>boolean</code></p><p>Whether the user can set this field on Drive items.</p></td></tr></tbody></table>

## EnabledAppSettings

Describes the Google Workspace apps in which the label can be used.

JSON representation

```
{
  "enabledApps": [
    {
      object (EnabledApp)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>enabledApps[]</code></td><td><p><code>object (<code>EnabledApp</code>)</code></p><p>Optional. The list of apps where the label can be used.</p></td></tr></tbody></table>

## EnabledApp

An app where the label can be used.

JSON representation

```
{
  "app": enum (App)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>app</code></td><td><p><code>enum (<code>App</code>)</code></p><p>Optional. The name of the app.</p></td></tr></tbody></table>

## App

The set of possible Google Workspace apps in which labels can be used.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>APP_UNSPECIFIED</code></td><td>Unspecified</td></tr><tr><td><code>DRIVE</code></td><td>Drive</td></tr><tr><td><code>GMAIL</code></td><td>Gmail</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a label.</td></tr><tr><td><h3>delete</h3></td><td>Permanently deletes a label and related metadata on Drive items.</td></tr><tr><td><h3>delta</h3></td><td>Updates a single label by applying a set of update requests resulting in a new draft revision.</td></tr><tr><td><h3>disable</h3></td><td>Disable a published label.</td></tr><tr><td><h3>enable</h3></td><td>Enable a disabled label and restore it to its published state.</td></tr><tr><td><h3>get</h3></td><td>Get a label by its resource name.</td></tr><tr><td><h3>list</h3></td><td>List labels.</td></tr><tr><td><h3>publish</h3></td><td>Publish all draft changes to the label.</td></tr><tr><td><h3>updateLabelCopyMode</h3></td><td>Updates a label's <code>CopyMode</code>.</td></tr><tr><td><h3>updateLabelEnabledAppSettings</h3></td><td>Updates a label's <code>EnabledAppSettings</code>.</td></tr><tr><td><h3>updatePermissions</h3></td><td>Updates a label's permissions.</td></tr></tbody></table>
