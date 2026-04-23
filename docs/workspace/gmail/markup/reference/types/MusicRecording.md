---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MusicRecording
root: workspace
fetched_at: 2026-04-23T15:29:42.227Z
---

# MusicRecording

Type name: [MusicRecording](./MusicRecording.md)

Extends [CreativeWork](./CreativeWork.md)

| Name | Type | Description |
| --- | --- | --- |
| byArtist | [MusicGroup](./MusicGroup.md) | The artist that performed this album or recording. |
| duration | [Duration](./Duration.md) | The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). |
| inAlbum | [MusicAlbum](./MusicAlbum.md) | The album to which this recording belongs. |
| inPlaylist | [MusicPlaylist](./MusicPlaylist.md) | The playlist to which this recording belongs. |
| isrcCode | [Text](./Text.md) | The International Standard Recording Code for the recording. |
| recordingOf | [MusicComposition](./MusicComposition.md) | The composition this track is a recording of. |
