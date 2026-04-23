---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MusicRelease
root: workspace
fetched_at: 2026-04-23T15:29:42.472Z
---

# MusicRelease

Type name: [MusicRelease](./MusicRelease.md)

Extends [MusicPlaylist](./MusicPlaylist.md)

| Name | Type | Description |
| --- | --- | --- |
| catalogNumber | [Text](./Text.md) | The catalog number for the release. |
| creditedTo | [Organization](./Organization.md) or [Person](./Person.md) | The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga. |
| duration | [Duration](./Duration.md) | The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). |
| musicReleaseFormat | [MusicReleaseFormatType](./MusicReleaseFormatType.md) | Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.). |
| recordLabel | [Organization](./Organization.md) | The label that issued the release. |
| releaseOf | [MusicAlbum](./MusicAlbum.md) | The album this is a release of. |
