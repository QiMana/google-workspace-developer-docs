---
source: https://developers.google.com/apps-script/reference/card-service/selection-input
root: apps-script
fetched_at: 2026-04-23T15:19:11.053Z
---

# Class SelectionInput

## Page Summary

- SelectionInput is an input field for choosing from predefined options.
- It supports form submission validation for DROP\_DOWN and MULTI\_SELECT menu types.
- It is available for Google Workspace add-ons and Google Chat apps.
- Methods like `addItem`, `addMultiSelectItem`, `setTitle`, and `setType` are available to customize the SelectionInput.

An input field that allows choosing between a set of predefined options.

Supports form submission validation for `SelectionInputType.DROP_DOWN` and `SelectionInputType.MULTI_SELECT` menus only. When `Action.setAllWidgetsAreRequired(allWidgetsAreRequired)` is set to `true` or this widget is specified through `Action.addRequiredWidget(requiredWidget)`, the submission action is blocked unless a value is selected.

Available for Google Workspace add-ons and Google Chat apps.

```
const checkboxGroup =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.CHECK_BOX)
        .setTitle('A group of checkboxes. Multiple selections are allowed.')
        .setFieldName('checkbox_field')
        .addItem('checkbox one title', 'checkbox_one_value', false)
        .addItem('checkbox two title', 'checkbox_two_value', true)
        .addItem('checkbox three title', 'checkbox_three_value', true)
        .setOnChangeAction(
            CardService.newAction().setFunctionName('handleCheckboxChange'),
        );

const radioGroup =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.RADIO_BUTTON)
        .setTitle(
            'A group of radio buttons. Only a single selection is allowed.')
        .setFieldName('checkbox_field')
        .addItem('radio button one title', 'radio_one_value', true)
        .addItem('radio button two title', 'radio_two_value', false)
        .addItem('radio button three title', 'radio_three_value', false);

const multiSelect =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.MULTI_SELECT)
        .setFieldName('multiselect')
        .setTitle('A multi select input example.')
        .addMultiSelectItem(
            'Contact 1',
            'contact-1',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact one description',
            )
        .addMultiSelectItem(
            'Contact 2',
            'contact-2',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact two description',
            )
        .addMultiSelectItem(
            'Contact 3',
            'contact-3',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact three description',
            )
        .addMultiSelectItem(
            'Contact 4',
            'contact-4',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact four description',
            )
        .addMultiSelectItem(
            'Contact 5',
            'contact-5',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact five description',
            )
        .setMultiSelectMaxSelectedItems(3)
        .setMultiSelectMinQueryLength(1);
```

## Detailed documentation

### addDataSourceConfig(dataSourceConfig)

Sets the data source configs for the selection control. This field provides more fine-grained control over the data source. This is an optional field.

```
const multiSelect =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.MULTI_SELECT)
        .setFieldName('contacts')
        .setTitle('Selected contacts')
        .setDataSourceConfig(
            CardService.newDataSourceConfig().setPlatformDataSource(
                CardService.newPlatformDataSource().setCommonDataSource(
                    CardService.CommonDataSource.USER,
                )
            )
        );
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `dataSourceConfig` | `DataSourceConfig` | The data source configuration to be applied to the selection input. |

#### Return

`SelectionInput` — This object, for chaining.

---

### addEventAction(eventAction)

Adds the event action that can be performed on the widget.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eventAction` | `EventAction` | The `EventAction` to be added. |

#### Return

`Widget` — The Object, for chaining.

---

### addItem(text, value, selected)

Adds a new item that can be selected.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `Object` | The text to be shown for this item. Non-string primitive arguments are converted to strings automatically. |
| `value` | `Object` | The form input value that is sent via the callback. Non-string primitive arguments are converted to strings automatically. |
| `selected` | `Boolean` | Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item. |

#### Return

`SelectionInput` — This object, for chaining.

---

### addMultiSelectItem(text, value, selected, startIconUri, bottomText)

Adds a new item that can be selected, for multi-select menus.

```
const multiSelect =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.MULTI_SELECT)
        .setFieldName('multiselect')
        .setTitle('A multi select input example.')
        .addMultiSelectItem(
            'Contact 1',
            'contact-1',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact one description',
            )
        .addMultiSelectItem(
            'Contact 2',
            'contact-2',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact two description',
            )
        .addMultiSelectItem(
            'Contact 3',
            'contact-3',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact three description',
            )
        .addMultiSelectItem(
            'Contact 4',
            'contact-4',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact four description',
            )
        .addMultiSelectItem(
            'Contact 5',
            'contact-5',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact five description',
        );
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `Object` | The text to be shown for this item. Non-string primitive arguments are converted to strings automatically. |
| `value` | `Object` | The form input value that is sent via the callback. Non-string primitive arguments are converted to strings automatically. |
| `selected` | `Boolean` | Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item. |
| `startIconUri` | `Object` | For multiselect menus, the URL for the icon displayed next to the item's text field. Supports PNG and JPEG files. |
| `bottomText` | `Object` | For multiselect menus, a text description or label that's displayed below the item's text field. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setExternalDataSource(action)

Sets external data source, such as a relational data base.

```
const multiSelect =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.MULTI_SELECT)
        .setFieldName('contacts')
        .setTitle('Selected contacts')
        .addMultiSelectItem(
            'Contact 3',
            'contact-3',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact three description',
            )
        .setMultiSelectMaxSelectedItems(5)
        .setMultiSelectMinQueryLength(2)
        .setExternalDataSource(
            CardService.newAction().setFunctionName('getContacts'),
        );
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The external data source. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setFieldName(fieldName)

Sets the key that identifies this selection input in the event object that is generated when there is a UI interaction. Not visible to the user. Required, must be unique.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fieldName` | `String` | The name to assign to this input. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setId(id)

Sets the unique ID assigned that's used to identify the widget to be mutated. Widget mutation is only supported in Add-Ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The id of the widget, with a limit of 64 characters and in format of \`\[a-zA-Z0-9-\]+\`. |

#### Return

`Widget` — This object, for chaining.

---

### setMultiSelectMaxSelectedItems(maxSelectedItems)

Sets the maximum number of items that a user can select.

```
const multiSelect =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.MULTI_SELECT)
        .setFieldName('multiselect')
        .setTitle('A multi select input example.')
        .setMultiSelectMaxSelectedItems(3)
        .addMultiSelectItem(
            'Contact 1',
            'contact-1',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact one description',
            )
        .addMultiSelectItem(
            'Contact 2',
            'contact-2',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact two description',
            )
        .addMultiSelectItem(
            'Contact 3',
            'contact-3',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact three description',
            )
        .addMultiSelectItem(
            'Contact 4',
            'contact-4',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact four description',
            )
        .addMultiSelectItem(
            'Contact 5',
            'contact-5',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact five description',
        );
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `maxSelectedItems` | `Integer` | The maximum number of items. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setMultiSelectMinQueryLength(queryLength)

Sets the number of text characters that a user inputs before the app queries autocomplete and displays suggested items on the card.

```
const multiSelect =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.MULTI_SELECT)
        .setFieldName('multiselect')
        .setTitle('A multi select input example.')
        .setMultiSelectMinQueryLength(1)
        .addMultiSelectItem(
            'Contact 1',
            'contact-1',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact one description',
            )
        .addMultiSelectItem(
            'Contact 2',
            'contact-2',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact two description',
            )
        .addMultiSelectItem(
            'Contact 3',
            'contact-3',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact three description',
            )
        .addMultiSelectItem(
            'Contact 4',
            'contact-4',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact four description',
            )
        .addMultiSelectItem(
            'Contact 5',
            'contact-5',
            false,
            'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
            'Contact five description',
        );
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `queryLength` | `Integer` | The number of text characters. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setOnChangeAction(action)

Sets an `Action` to be performed whenever the selection input changes.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The action to take. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setPlatformDataSource(platformDataSource)

Sets a data source from Google Workspace. Used to populate items in a multiselect menu.

```
const multiSelect =
    CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.MULTI_SELECT)
        .setFieldName('contacts')
        .setTitle('Selected contacts')
        .setPlatformDataSource(
            CardService.newPlatformDataSource().setCommonDataSource(
                CardService.CommonDataSource.USER,
                ),
        );
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `platformDataSource` | `PlatformDataSource` | The data source. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setTitle(title)

Sets the title to be shown ahead of the input field.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The input field title. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setType(type)

Sets the type of this input. Defaults to `CHECKBOX`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `type` | `SelectionInputType` | The selection type. |

#### Return

`SelectionInput` — This object, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
