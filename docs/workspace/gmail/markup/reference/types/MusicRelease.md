---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MusicRelease
root: workspace
fetched_at: 2026-04-23T15:29:42.472Z
---

# MusicRelease

Type name: [MusicRelease](https://developers.google.com/workspace/gmail/markup/reference/types/MusicRelease)

Extends [MusicPlaylist](https://developers.google.com/workspace/gmail/markup/reference/types/MusicPlaylist)

| Name | Type | Description |
| --- | --- | --- |
| catalogNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The catalog number for the release. |
| creditedTo | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga. |
| duration | [Duration](https://developers.google.com/workspace/gmail/markup/reference/types/Duration) | The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). |
| musicReleaseFormat | [MusicReleaseFormatType](https://developers.google.com/workspace/gmail/markup/reference/types/MusicReleaseFormatType) | Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.). |
| recordLabel | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The label that issued the release. |
| releaseOf | [MusicAlbum](https://developers.google.com/workspace/gmail/markup/reference/types/MusicAlbum) | The album this is a release of. |
