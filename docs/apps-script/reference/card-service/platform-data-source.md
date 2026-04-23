---
source: https://developers.google.com/apps-script/reference/card-service/platform-data-source
root: apps-script
fetched_at: 2026-04-23T15:19:11.362Z
---

# Class PlatformDataSource

## Page Summary

- PlatformDataSource is used for populating items in a multiselect menu within a SelectionInput widget.
- This feature is exclusively available for Google Chat apps and cannot be used with Google Workspace add-ons.
- You can set the data source using `setCommonDataSource` for Google Workspace data or `setHostAppDataSource` for populating spaces in a multiselect menu.

For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu.

```
const platformDataSource =
    CardService.newPlatformDataSource().setCommonDataSource(
        CardService.CommonDataSource.USER,
    );

const multiSelect = CardService.newSelectionInput()
                        .setType(CardService.SelectionInputType.MULTI_SELECT)
                        .setFieldName('contacts')
                        .setTitle('Selected contacts')
                        .setMultiSelectMaxSelectedItems(5)
                        .setMultiSelectMinQueryLength(1)
                        .setPlatformDataSource(platformDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

## Detailed documentation

### setCommonDataSource(commonDataSource)

Sets the data source from Google Workspace.

```
const platformDataSource =
    CardService.newPlatformDataSource().setCommonDataSource(
        CardService.CommonDataSource.USER,
    );

const multiSelect = CardService.newSelectionInput()
                        .setType(CardService.SelectionInputType.MULTI_SELECT)
                        .setFieldName('contacts')
                        .setTitle('Selected contacts')
                        .setMultiSelectMaxSelectedItems(5)
                        .setMultiSelectMinQueryLength(1)
                        .setPlatformDataSource(platformDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `commonDataSource` | `CommonDataSource` | The data source to be set. |

#### Return

`PlatformDataSource` — This object, for chaining.

---

### setDriveDataSourceSpec(driveDataSourceSpec)

Sets the drive data source spec from Google Workspace.

```
const driveDataSourceSpec =
    CardService.newDriveDataSourceSpec()
      .addItemType(CardService.DriveItemType.DOCUMENTS)
      .addItemType(CardService.DriveItemType.FORMS);

const platformDataSource =
    CardService.newPlatformDataSource().setCommonDataSource(
        CardService.CommonDataSource.DRIVE
    ).setDriveDataSourceSpec(driveDataSourceSpec);

const multiSelect = CardService.newSelectionInput()
                        .setType(CardService.SelectionInputType.MULTI_SELECT)
                        .setFieldName('files')
                        .setTitle('Drive Files')
                        .setMultiSelectMaxSelectedItems(5)
                        .setMultiSelectMinQueryLength(1)
                        .setPlatformDataSource(platformDataSource);
```

Available for Google Chat apps. For Google Workspace add-ons, it needs to add **Per-file access scope** (`https://www.googleapis.com/auth/drive.file`) to manifest.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `driveDataSourceSpec` | `DriveDataSourceSpec` | The drive data source spec to be set. |

#### Return

`PlatformDataSource` — This object, for chaining.

---

### setHostAppDataSource(hostAppDataSource)

Used to populate spaces in multiselect menu.

```
const chatSpaceDataSource =
    CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);

const chatClientDataSource =
    CardService.newChatClientDataSource().setSpaceDataSource(
        chatSpaceDataSource);

const hostAppDataSource =
    CardService.newHostAppDataSource().setChatDataSource(chatClientDataSource);

const platformDataSource =
    CardService.newPlatformDataSource().setHostAppDataSource(hostAppDataSource);

const multiSelect = CardService.newSelectionInput()
                        .setType(CardService.SelectionInputType.MULTI_SELECT)
                        .setFieldName('contacts')
                        .setTitle('Selected contacts')
                        .setMultiSelectMaxSelectedItems(5)
                        .setMultiSelectMinQueryLength(1)
                        .setPlatformDataSource(platformDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace add-ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hostAppDataSource` | `HostAppDataSource` | The data source to be set. |

#### Return

`PlatformDataSource` — This object, for chaining.
