---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/settingschange
root: workspace
fetched_at: 2026-04-23T15:27:31.330Z
---

# SettingsChange

## SettingsChange

Information about settings changes.

JSON representation

```
{
  "restrictionChanges": [
    {
      object (RestrictionChange)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>restrictionChanges[]</code></td><td><p><code>object (<code>RestrictionChange</code>)</code></p><p>The set of changes made to restrictions.</p></td></tr></tbody></table>

## RestrictionChange

Information about restriction policy changes to a feature.

JSON representation

```
{
  "feature": enum (Feature),
  "newRestriction": enum (Restriction)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>feature</code></td><td><p><code>enum (<code>Feature</code>)</code></p><p>The feature which had a change in restriction policy.</p></td></tr><tr><td><code>newRestriction</code></td><td><p><code>enum (<code>Restriction</code>)</code></p><p>The restriction in place after the change.</p></td></tr></tbody></table>

## Feature

The feature which had changes to its restriction policy.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>FEATURE_UNSPECIFIED</code></td><td>The feature which changed restriction settings was not available.</td></tr><tr><td><code>DIRECT_SHARING</code></td><td>When restricted, this prevents direct sharing of individual items.</td></tr><tr><td><code>ITEM_DUPLICATION</code></td><td><p>Deprecated: Use READERS_CAN_DOWNLOAD instead.</p></td></tr><tr><td><code>DRIVE_FILE_STREAM</code></td><td>When restricted, this prevents use of Drive File Stream.</td></tr><tr><td><code>FILE_ORGANIZER_CAN_SHARE_FOLDERS</code></td><td>When restricted, this limits sharing of folders to managers only.</td></tr><tr><td><code>READERS_CAN_DOWNLOAD</code></td><td>When restricted, this prevents actions like copy, download, and print for readers. Replaces ITEM_DUPLICATION.</td></tr><tr><td><code>WRITERS_CAN_DOWNLOAD</code></td><td>When restricted, this prevents actions like copy, download, and print for writers.</td></tr></tbody></table>

## Restriction

The restriction applicable to a feature.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RESTRICTION_UNSPECIFIED</code></td><td>The type of restriction is not available.</td></tr><tr><td><code>UNRESTRICTED</code></td><td>The feature is available without restriction.</td></tr><tr><td><code>FULLY_RESTRICTED</code></td><td>The use of this feature is fully restricted.</td></tr></tbody></table>
