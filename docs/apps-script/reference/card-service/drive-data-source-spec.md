---
source: https://developers.google.com/apps-script/reference/card-service/drive-data-source-spec
root: apps-script
fetched_at: 2026-04-23T15:19:03.902Z
---

# Class DriveDataSourceSpec

## Class DriveDataSourceSpec

Holds a set of `DriveItemType` objects that are displayed in a row.

```
const driveDataSourceSpec =
    CardService.newDriveDataSourceSpec()
     .addItemType(CardService.DriveItemType.DOCUMENTS)
     .addItemType(CardService.DriveItemType.FORMS);
```

## Detailed documentation

### addItemType(driveItemType)

Adds a driveItemType to allowed item types list.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `driveItemType` | `DriveItemType` | The driveItemType to add. |

#### Return

`DriveDataSourceSpec` — This object, for chaining.
